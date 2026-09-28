import fs from "fs";
import path from "path";
import { RouteMeta } from "../../src/utils/seoMeta.js";
import { distDir, publicDir, blogContentDir } from "./paths.js";
import { parseBlogFrontMatter, getBlogArticleMeta } from "./frontmatter.js";
import { escapeXml } from "./xml.js";

/**
 * Pengayaan sitemap: lastmod artikel dari tanggal modifikasi aktual dan
 * image:image untuk SELURUH URL (coverImage blog, OG per silo non-blog).
 * Daftar URL, changefreq, dan priority milik berkas dipertahankan apa adanya.
 * Hasil ditulis ke dist/sitemap.xml (deploy) dan public/sitemap.xml (repo).
 */
export function enrichSitemap(allRoutes: Record<string, RouteMeta>): void {
  const publicSitemapPath = path.join(publicDir, "sitemap.xml");
  if (!fs.existsSync(publicSitemapPath)) {
    console.warn("public/sitemap.xml not found, skipping sitemap enrichment.");
    return;
  }

  const origin = "https://dsintegra.co.id";
  let sitemapRaw = fs.readFileSync(publicSitemapPath, "utf-8");

  sitemapRaw = sitemapRaw.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) return block;
    const loc = locMatch[1].trim();
    const routePath = loc.startsWith(origin) ? loc.slice(origin.length) || "/" : "/";

    let imageUrl = "https://dsintegra.co.id/og-image.jpg";
    if (routePath.startsWith("/blog/")) {
      const article = getBlogArticleMeta(routePath.replace("/blog/", ""));
      if (article) {
        imageUrl = article.coverImage;
        if (/<lastmod>[^<]*<\/lastmod>/.test(block)) {
          block = block.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${article.modified}</lastmod>`);
        } else {
          block = block.replace(/(<loc>[^<]+<\/loc>)/, `$1\n    <lastmod>${article.modified}</lastmod>`);
        }
      }
    } else if (allRoutes[routePath] && allRoutes[routePath].image) {
      imageUrl = allRoutes[routePath].image as string;
    }

    // Entri gambar yang sudah ada dipertahankan apa adanya agar validasi
    // drift dapat menilai kebenarannya; hanya yang hilang yang dilengkapi.
    if (!/<image:image>[\s\S]*?<\/image:image>/.test(block)) {
      const imageBlock = `<image:image>\n      <image:loc>${escapeXml(imageUrl)}</image:loc>\n    </image:image>`;
      if (/<priority>[^<]+<\/priority>/.test(block)) {
        block = block.replace(/(<priority>[^<]+<\/priority>)/, `$1\n    ${imageBlock}`);
      } else {
        block = `${block}\n    ${imageBlock}\n  `;
      }
    }
    return block;
  });

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapRaw, "utf-8");
  fs.writeFileSync(publicSitemapPath, sitemapRaw, "utf-8");
  console.log("Enriched sitemap.xml with dynamic lastmod and full image coverage at dist/ and public/.");
}


/**
 * Validasi silang slug artikel blog antara feed (front-matter markdown)
 * dan sitemap.xml. Kedua berkas WAJIB memakai slug yang sama; drift
 * dicetak eksplisit per slug dan menggagalkan build agar tidak lolos diam-diam.
 * Cakupan yang sama berlaku untuk daftar gambar: setiap coverImage markdown
 * WAJIB tercantum sebagai image:loc pada entri sitemap artikelnya.
 */
export function validateBlogSlugConsistency(): void {
  if (!fs.existsSync(blogContentDir)) {
    console.warn("Blog content directory not found, skipping slug consistency check.");
    return;
  }

  const mdSlugs = new Set<string>();
  const mdImages = new Map<string, string>();
  for (const file of fs.readdirSync(blogContentDir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(raw);
    const slug = data.slug || file.replace(".md", "");
    mdSlugs.add(slug);
    if (data.coverImage) {
      mdImages.set(slug, data.coverImage);
    }
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  const sitemapSlugs = new Set<string>();
  const sitemapImages = new Map<string, string>();
  if (fs.existsSync(sitemapPath)) {
    const sitemapRaw = fs.readFileSync(sitemapPath, "utf-8");
    const locMatches = sitemapRaw.matchAll(/<loc>https:\/\/dsintegra\.co\.id\/blog\/([^<]+)<\/loc>/g);
    for (const m of locMatches) {
      sitemapSlugs.add(m[1]);
    }
    const urlBlocks = sitemapRaw.matchAll(/<url>([\s\S]*?)<\/url>/g);
    for (const block of urlBlocks) {
      const locMatch = block[1].match(/<loc>https:\/\/dsintegra\.co\.id\/blog\/([^<]+)<\/loc>/);
      const imgMatch = block[1].match(/<image:loc>([^<]+)<\/image:loc>/);
      if (locMatch && imgMatch) {
        sitemapImages.set(locMatch[1], imgMatch[1].replace(/&amp;/g, "&"));
      }
    }
  }

  let driftCount = 0;

  const missingInSitemap = [...mdSlugs].filter((s) => !sitemapSlugs.has(s));
  const missingInFeed = [...sitemapSlugs].filter((s) => !mdSlugs.has(s));

  for (const s of missingInSitemap) {
    console.error(`[slug-drift] Artikel "/blog/${s}" ada di markdown/feed tetapi MISSING dari public/sitemap.xml. Daftarkan URL tersebut sebelum rilis.`);
  }
  for (const s of missingInFeed) {
    console.error(`[slug-drift] URL "/blog/${s}" ada di public/sitemap.xml tetapi TIDAK ADA artikel markdown-nya. Perbaiki slug atau hapus entri sitemap.`);
  }
  driftCount += missingInSitemap.length + missingInFeed.length;

  for (const [slug, coverImage] of mdImages) {
    const sitemapImage = sitemapImages.get(slug);
    if (!sitemapImage) {
      console.error(`[image-drift] Artikel "/blog/${slug}" punya coverImage tetapi TIDAK ADA entri image:image di public/sitemap.xml.`);
      driftCount++;
    } else if (sitemapImage !== coverImage) {
      console.error(`[image-drift] Cover "/blog/${slug}" tidak cocok: markdown memakai "${coverImage}" tetapi sitemap memakai "${sitemapImage}".`);
      driftCount++;
    }
  }

  // Cakupan gambar: SETIAP entri sitemap wajib punya image:image (blog maupun non-blog)
  if (fs.existsSync(sitemapPath)) {
    const coverageRaw = fs.readFileSync(sitemapPath, "utf-8");
    const coverageBlocks = coverageRaw.matchAll(/<url>([\s\S]*?)<\/url>/g);
    for (const block of coverageBlocks) {
      const locMatch = block[1].match(/<loc>([^<]+)<\/loc>/);
      const loc = locMatch ? locMatch[1].trim() : "(loc tidak terbaca)";
      if (!/<image:loc>[^<]+<\/image:loc>/.test(block[1])) {
        console.error(`[image-coverage] Entri "${loc}" TIDAK PUNYA image:image di public/sitemap.xml. Lengkapi sebelum rilis.`);
        driftCount++;
      }
    }
  }

  // Kewarasan tanggal: lastmod artikel blog tidak boleh lebih tua dari tanggal terbitnya
  if (fs.existsSync(sitemapPath)) {
    const dateRaw = fs.readFileSync(sitemapPath, "utf-8");
    const dateBlocks = dateRaw.matchAll(/<url>([\s\S]*?)<\/url>/g);
    for (const block of dateBlocks) {
      const locMatch = block[1].match(/<loc>https:\/\/dsintegra\.co\.id\/blog\/([^<]+)<\/loc>/);
      const lastmodMatch = block[1].match(/<lastmod>([^<]+)<\/lastmod>/);
      if (locMatch && lastmodMatch) {
        const article = getBlogArticleMeta(locMatch[1]);
        if (article && lastmodMatch[1].trim() < article.published) {
          console.error(`[date-drift] Artikel "/blog/${locMatch[1]}" punya lastmod ${lastmodMatch[1].trim()} yang lebih tua dari tanggal terbit ${article.published}.`);
          driftCount++;
        }
      }
    }
  }

  if (driftCount > 0) {
    console.error(`[slug-drift] Terdeteksi ${driftCount} drift slug/gambar/tanggal. Build digagalkan.`);
    process.exitCode = 1;
  } else {
    console.log(`Slug consistency check passed: ${mdSlugs.size} artikel blog sinkron antara feed dan sitemap, ${mdImages.size} gambar sinkron.`);
  }
}