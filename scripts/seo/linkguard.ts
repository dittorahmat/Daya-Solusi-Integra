import fs from "fs";
import path from "path";
import { distDir, blogContentDir } from "./paths.js";
import { parseBlogFrontMatter } from "./frontmatter.js";

/**
 * Validasi integritas internal link pada snapshot prerender:
 * setiap href="/blog/<slug>" yang dirender ke dist/**\/index.html
 * WAJIB menunjuk ke slug artikel yang ada (file markdown).
 * Drift dicetak eksplisit dan menggagalkan build (exitCode=1),
 * mengikuti pola validateBlogSlugConsistency di sitemap.ts.
 */
export function validatePrerenderInternalLinks(): void {
  if (!fs.existsSync(blogContentDir)) {
    console.warn("Blog content directory not found, skipping prerender link check.");
    return;
  }

  const mdSlugs = new Set<string>();
  for (const file of fs.readdirSync(blogContentDir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(raw);
    mdSlugs.add(data.slug || file.replace(".md", ""));
  }

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
  const seen = new Set<string>();
  for (const htmlFile of htmlFiles) {
    const raw = fs.readFileSync(htmlFile, "utf-8");
    const matches = raw.matchAll(/href="\/blog\/([a-z0-9\-/]+?)"/g);
    for (const m of matches) {
      const target = m[1].replace(/\/+$/, "");
      // Lewati rute koleksi dan penulis (ditangani rute non-artikel)
      if (target === "" || target.startsWith("penulis/") || target.includes("?")) {
        continue;
      }
      // Hanya validasi kedalaman satu segmen (/blog/<slug>); abaikan query/hash
      if (target.includes("/")) {
        continue;
      }
      const key = `${htmlFile} -> /blog/${target}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      if (!mdSlugs.has(target)) {
        const rel = path.relative(distDir, htmlFile);
        console.error(`[link-drift] "${rel}" menaut ke "/blog/${target}" tetapi TIDAK ADA artikel markdown-nya. Perbaiki href atau tambah artikel.`);
        driftCount++;
      }
    }
  }

  if (driftCount > 0) {
    console.error(`[link-drift] Terdeteksi ${driftCount} broken internal link prerender. Build digagalkan.`);
    process.exitCode = 1;
  } else {
    console.log(`Prerender link check passed: ${seen.size} internal blog link valid di ${htmlFiles.length} snapshot.`);
  }
}
