import fs from "fs";
import path from "path";
import { ROUTE_METADATA_MAP, RouteMeta } from "../src/utils/seoMeta.js";
import { GLOSSARY_ITEMS } from "../src/data/glossaryData.js";
import { distDir, templateHtml } from "./seo/paths.js";
import { getBlogArticleMeta } from "./seo/frontmatter.js";
import { upsertHeadTag } from "./seo/xml.js";
import { buildJsonLdForRoute } from "./seo/jsonld.js";
import { buildSemanticBodyHtmlForRoute } from "./seo/semantic-body.js";
import { generateNotFoundSnapshot } from "./seo/notfound.js";
import { enrichSitemap, validateBlogSlugConsistency } from "./seo/sitemap.js";
import { generateRssFeed, generateLlmsFiles } from "./seo/feeds.js";
import { submitToIndexNow } from "./seo/indexnow.js";

let generatedCount = 0;

// Kumpulkan semua rute: halaman statis utama + halaman glosarium dinamis
const allRoutes: Record<string, RouteMeta> = { ...ROUTE_METADATA_MAP };

GLOSSARY_ITEMS.forEach((item) => {
  const routeKey = `/glosarium/${item.id}`;
  const termTitle = item.acronym ? `${item.term} (${item.acronym})` : item.term;
  allRoutes[routeKey] = {
    title: `${termTitle}: Definisi & Kepatuhan Regulasi SK-5 BUMN | Daya Solusi Integra`,
    description: `${item.definition} Pelajari amanat regulasi ${item.regulationRef} dan solusi kepatuhan pengendalian internal BUMN.`,
    canonical: `https://dsintegra.co.id/glosarium/${item.id}`,
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: `${termTitle} - Glosarium Kepatuhan ICOFR BUMN`,
    ogDescription: item.definition
  };
});

for (const [routePath, meta] of Object.entries(allRoutes)) {
  // Homepage sudah ditangani oleh dist/index.html bawaan
  if (routePath === "/") {
    continue;
  }

  // Siapkan folder target, misal: dist/layanan/icofr-bumn
  const cleanRoute = routePath.startsWith("/") ? routePath.slice(1) : routePath;
  const targetDir = path.join(distDir, cleanRoute);
  const targetFile = path.join(targetDir, "index.html");

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Lakukan injeksi meta tag spesifik rute ke dalam salinan HTML
  let routeHtml = templateHtml;

  // Ganti <title>
  routeHtml = routeHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${meta.title}</title>`
  );

  // Ganti <meta name="title" ...>
  routeHtml = routeHtml.replace(
    /<meta\s+name="title"\s+content=".*?"\s*\/?>/i,
    `<meta name="title" content="${meta.title}" />`
  );

  // Ganti <meta name="description" ...>
  routeHtml = routeHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // Ganti <link rel="canonical" ...>
  routeHtml = routeHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Ganti Open Graph og:title & og:description & og:url & og:image
  routeHtml = routeHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${meta.ogTitle || meta.title}" />`
  );

  routeHtml = routeHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${meta.ogDescription || meta.description}" />`
  );

  routeHtml = routeHtml.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}" />`
  );

  const routeImage = meta.image || "https://dsintegra.co.id/og-image.jpg";
  routeHtml = routeHtml.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:image" content="${routeImage}" />`
  );

  // Ganti Twitter Cards twitter:title & twitter:description & twitter:url & twitter:image
  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="twitter:title" content="${meta.ogTitle || meta.title}" />`
  );

  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="twitter:description" content="${meta.ogDescription || meta.description}" />`
  );

  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="twitter:url" content="${meta.canonical}" />`
  );

  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:image"\s+content=".*?"\s*\/?>/i,
    `<meta property="twitter:image" content="${routeImage}" />`
  );

  // Head hygiene v4: theme-color, og:image:alt, dan article times untuk rute artikel
  routeHtml = upsertHeadTag(
    routeHtml,
    /<meta\s+name="theme-color"\s+content=".*?"\s*\/?>/i,
    `<meta name="theme-color" content="#0b0f19" />`
  );
  routeHtml = upsertHeadTag(
    routeHtml,
    /<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:image:alt" content="${meta.ogTitle || meta.title}" />`
  );
  if (routePath.startsWith("/blog/")) {
    const headArticle = getBlogArticleMeta(routePath.replace("/blog/", ""));
    if (headArticle) {
      routeHtml = upsertHeadTag(
        routeHtml,
        /<meta\s+property="article:published_time"\s+content=".*?"\s*\/?>/i,
        `<meta property="article:published_time" content="${headArticle.published}" />`
      );
      routeHtml = upsertHeadTag(
        routeHtml,
        /<meta\s+property="article:modified_time"\s+content=".*?"\s*\/?>/i,
        `<meta property="article:modified_time" content="${headArticle.modified}" />`
      );
    }
  }

  // Ganti skema JSON-LD monolitik dengan skema spesifik per rute yang bersih
  const routeJsonLd = buildJsonLdForRoute(routePath, meta);
  routeHtml = routeHtml.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    routeJsonLd
  );

  // Injeksi konten semantik HTML asli ke dalam <div id="root">
  const semanticBodyHtml = buildSemanticBodyHtmlForRoute(routePath, meta);
  routeHtml = routeHtml.replace(
    /<div\s+id="root">\s*<\/div>/i,
    `<div id="root">\n${semanticBodyHtml}\n    </div>`
  );

  fs.writeFileSync(targetFile, routeHtml, "utf-8");
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} static prerendered HTML routes with custom social cards and clean JSON-LD.`);

generateNotFoundSnapshot();

// Generate RSS 2.0 Feed untuk sindikasi konten blog
generateRssFeed();

// Perkaya sitemap dahulu (lastmod dinamis + image penuh), baru validasi hasilnya
enrichSitemap(allRoutes);

validateBlogSlugConsistency();

// Generate LLM Discovery Files
generateLlmsFiles();

// Trigger IndexNow submission
submitToIndexNow(allRoutes);


