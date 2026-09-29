import fs from "fs";
import path from "path";
import { distDir, blogContentDir, publicDir } from "./paths.js";
import { parseBlogFrontMatter } from "./frontmatter.js";
import { GLOSSARY_ITEMS } from "../../src/data/glossaryData.js";

/**
 * Guard referensi glosarium: setiap relatedTermIds WAJIB menunjuk
 * ke id yang ada di GLOSSARY_ITEMS. Mencegah kartu terkait mati
 * di halaman detail glosarium.
 */
export function validateGlossaryRefs(): void {
  const ids = new Set(GLOSSARY_ITEMS.map((g) => g.id));
  let driftCount = 0;
  for (const item of GLOSSARY_ITEMS) {
    for (const ref of item.relatedTermIds || []) {
      if (!ids.has(ref)) {
        console.error(`[glossary-drift] Istilah "${item.id}" merujuk "${ref}" yang TIDAK ADA di glossaryData.`);
        driftCount++;
      }
    }
  }
  if (driftCount > 0) {
    console.error(`[glossary-drift] Terdeteksi ${driftCount} referensi glosarium mati. Build digagalkan.`);
    process.exitCode = 1;
  } else {
    console.log(`Glossary ref check passed: ${GLOSSARY_ITEMS.length} istilah, seluruh relatedTermIds valid.`);
  }
}

/**
 * Guard gambar eksternal: tidak boleh ada referensi images.unsplash.com
 * yang tersisa di konten (markdown), metadata (seoMeta), komponen gambar,
 * maupun artefak build (sitemap, snapshot prerender). Semua cover artikel
 * WAJIB memakai URL lokal /images/blog/* yang ada di dist/.
 */
export function validateNoExternalBlogImages(): void {
  let driftCount = 0;

  const mdSlugs: string[] = [];
  for (const file of fs.readdirSync(blogContentDir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    if (/images\.unsplash\.com/i.test(raw)) {
      console.error(`[image-drift] "${file}" masih merujuk images.unsplash.com. Alihkan coverImage ke /images/blog/*.`);
      driftCount++;
    }
    const { data } = parseBlogFrontMatter(raw);
    const slug = data.slug || file.replace(".md", "");
    mdSlugs.push(slug);
    if (typeof data.coverImage === "string" && !data.coverImage.startsWith("/images/blog/")) {
      console.error(`[image-drift] coverImage "/blog/${slug}" bukan URL lokal /images/blog/*.`);
      driftCount++;
    }
  }

  const localFiles = new Set(fs.readdirSync(path.join(publicDir, "images", "blog")));
  for (const file of fs.readdirSync(blogContentDir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(raw);
    if (typeof data.coverImage === "string" && data.coverImage.startsWith("/images/blog/")) {
      const base = path.basename(data.coverImage);
      const stem = base.replace(/-1200\.webp$/, "");
      const expected = [640, 960, 1200].flatMap((w) => [`${stem}-${w}.webp`, `${stem}-${w}.jpg`]);
      for (const f of expected) {
        if (!localFiles.has(f)) {
          console.error(`[image-drift] Varian "${f}" untuk "${file}" tidak ada di public/images/blog/. Jalankan fetch-images.ts.`);
          driftCount++;
        }
      }
    }
  }

  // Artefak build: sitemap + snapshot prerender tidak boleh memuat unsplash
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  if (fs.existsSync(sitemapPath) && /images\.unsplash\.com/i.test(fs.readFileSync(sitemapPath, "utf-8"))) {
    console.error("[image-drift] public/sitemap.xml masih memuat images.unsplash.com.");
    driftCount++;
  }
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name === "index.html") {
        if (/images\.unsplash\.com/i.test(fs.readFileSync(full, "utf-8"))) {
          console.error(`[image-drift] Snapshot "${path.relative(distDir, full)}" masih memuat images.unsplash.com.`);
          driftCount++;
        }
      }
    }
  };
  walk(distDir);

  if (driftCount > 0) {
    console.error(`[image-drift] Terdeteksi ${driftCount} referensi gambar eksternal. Build digagalkan.`);
    process.exitCode = 1;
  } else {
    console.log(`Image pipeline check passed: ${mdSlugs.length} cover artikel lokal dan lengkap.`);
  }
}

/**
 * Validasi integritas SEMUA internal link pada snapshot prerender:
 * setiap href="/..." atau src="/..." yang dirender ke dist/**\/index.html
 * WAJIB resolve ke berkas atau direktori snapshot yang ada di dist/
 * (setelah mengabaikan query string dan hash anchor).
 * Drift dicetak eksplisit dan menggagalkan build (exitCode=1),
 * mengikuti pola validateBlogSlugConsistency di sitemap.ts.
 */
export function validatePrerenderInternalLinks(): void {
  const htmlFiles: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name === "index.html") {
        htmlFiles.push(full);
      }
    }
  };
  walk(distDir);

  let driftCount = 0;
  let checkedCount = 0;
  const seen = new Set<string>();
  for (const htmlFile of htmlFiles) {
    const raw = fs.readFileSync(htmlFile, "utf-8");
    const matches = raw.matchAll(/(?:href|src)="(\/[^"]*)"/g);
    for (const m of matches) {
      const original = m[1];
      const cleanPath = original.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
      const key = `${htmlFile} -> ${original}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      checkedCount++;
      const asDir = path.join(distDir, cleanPath, "index.html");
      const asFile = path.join(distDir, cleanPath);
      const resolves = fs.existsSync(asDir) || (fs.existsSync(asFile) && fs.statSync(asFile).isFile());
      if (!resolves) {
        const rel = path.relative(distDir, htmlFile);
        console.error(`[link-drift] "${rel}" menaut ke "${original}" tetapi TIDAK ADA di dist/. Perbaiki href/src atau tambah rute/berkas.`);
        driftCount++;
      }
    }
  }

  if (driftCount > 0) {
    console.error(`[link-drift] Terdeteksi ${driftCount} broken internal link prerender. Build digagalkan.`);
    process.exitCode = 1;
  } else {
    console.log(`Prerender link check passed: ${checkedCount} internal link valid di ${htmlFiles.length} snapshot.`);
  }
}
