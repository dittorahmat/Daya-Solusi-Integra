import fs from "fs";
import path from "path";
import { buildJsonLdForRoute } from "./seo/jsonld.js";
import { parseBlogFrontMatter } from "./seo/frontmatter.js";
import { blogContentDir } from "./seo/paths.js";
import { GLOSSARY_ITEMS } from "../src/data/glossaryData.js";
import { COMPANY_PROFILE } from "../src/data/company.js";
import { FAQ_ROUTE_PATHS, ROUTE_FAQS } from "../src/data/faqData.js";

let exitCode = 0;

console.log("🔍 Menjalankan Schema & E-E-A-T Linter...");

function extractJsonFromScriptTag(html: string): any {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error("Tag script application/ld+json tidak ditemukan");
  return JSON.parse(match[1].trim());
}

// 1. Audit Article Schema Author E-E-A-T
if (fs.existsSync(blogContentDir)) {
  const blogFiles = fs.readdirSync(blogContentDir).filter(f => f.endsWith(".md"));
  for (const file of blogFiles) {
    const slug = file.replace(".md", "");
    const routePath = `/blog/${slug}`;
    const rawMd = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(rawMd);
    
    const fakeMeta = {
      title: data.title || "Artikel",
      description: data.excerpt || "Deskripsi",
      canonical: `https://dsintegra.co.id${routePath}`,
      keywords: ""
    };

    try {
      const jsonLdStr = buildJsonLdForRoute(routePath, fakeMeta);
      const parsed = extractJsonFromScriptTag(jsonLdStr);
      const articleGraph = (parsed["@graph"] || []).find((g: any) => g["@type"] === "Article");

      if (!articleGraph) {
        console.error(`❌ [Schema Lint] Artikel ${routePath} tidak memiliki node @type: 'Article'`);
        exitCode = 1;
        continue;
      }

      const author = articleGraph.author;
      if (!author || author["@type"] !== "Person" || !author.name) {
        console.error(`❌ [Schema Lint] E-E-A-T Regresi: Author pada ${routePath} wajib @type: 'Person' dengan nama pakar resmi. Ditemukan:`, author);
        exitCode = 1;
      }
    } catch (err: any) {
      console.error(`❌ [Schema Lint] Gagal memvalidasi JSON-LD untuk ${routePath}:`, err.message);
      exitCode = 1;
    }
  }
}

// 2. Audit Paritas Glosarium FAQ & Direct Answer
const glossaryDetailCode = fs.readFileSync(path.resolve("src/components/pages/GlossaryDetailPage.tsx"), "utf-8");
const hasFaqSchemaInjection = glossaryDetailCode.includes("FAQPage") && glossaryDetailCode.includes("application/ld+json");

if (!hasFaqSchemaInjection) {
  console.error("❌ [Schema Lint] GlossaryDetailPage.tsx wajib menyuntikkan node FAQPage ke DOM runtime!");
  exitCode = 1;
}

// Periksa kesiapan FAQ generator di jsonld.ts
const termsWithFaq = GLOSSARY_ITEMS.filter(item => item.faqList && item.faqList.length > 0);
for (const item of termsWithFaq) {
  const routePath = `/glosarium/${item.id}`;
  const fakeMeta = {
    title: item.term,
    description: item.definition,
    canonical: `https://dsintegra.co.id${routePath}`,
    keywords: ""
  };
  const jsonLdStr = buildJsonLdForRoute(routePath, fakeMeta);
  const parsed = extractJsonFromScriptTag(jsonLdStr);
  const faqGraph = (parsed["@graph"] || []).find((g: any) => g["@type"] === "FAQPage");
  if (!faqGraph) {
    console.error(`❌ [Schema Lint] Glosarium ${routePath} memiliki faqList tapi FAQPage schema tidak tergenerate di SSG!`);
    exitCode = 1;
  }
}

// 3. Audit Google Site Name & WebSite Entity Canon
const testRouteMeta = {
  title: "Test Page",
  description: "Test Description",
  canonical: "https://dsintegra.co.id/test"
};
try {
  const jsonLdStr = buildJsonLdForRoute("/test", testRouteMeta);
  const parsed = extractJsonFromScriptTag(jsonLdStr);
  const webSiteGraph = (parsed["@graph"] || []).find((g: any) => g["@type"] === "WebSite");

  if (!webSiteGraph) {
    console.error("❌ [Schema Lint] Node @type: 'WebSite' wajib hadir di seluruh payload JSON-LD!");
    exitCode = 1;
  } else {
    if (webSiteGraph.name !== COMPANY_PROFILE.shortName) {
      console.error(`❌ [Schema Lint] WebSite.name tidak cocok dengan COMPANY_PROFILE.shortName ('${COMPANY_PROFILE.shortName}'). Ditemukan: '${webSiteGraph.name}'`);
      exitCode = 1;
    }
    if (!Array.isArray(webSiteGraph.alternateName) || webSiteGraph.alternateName.length === 0) {
      console.error("❌ [Schema Lint] WebSite.alternateName wajib berupa array terisi untuk Google Site Name!");
      exitCode = 1;
    }
    const publisherId = webSiteGraph.publisher?.["@id"];
    if (publisherId !== "https://dsintegra.co.id/#organization") {
      console.error(`❌ [Schema Lint] WebSite.publisher wajib merujuk kanonikal '#organization'. Ditemukan:`, webSiteGraph.publisher);
      exitCode = 1;
    }
  }
} catch (err: any) {
  console.error("❌ [Schema Lint] Gagal memvalidasi WebSite schema:", err.message);
  exitCode = 1;
}

// 4. Audit Paritas & Integritas FAQ Route Registry (Anti-Primitive Obsession & Silent Typos)
const pagesDir = path.resolve("src/components/pages");
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith(".tsx"));
for (const pFile of pageFiles) {
  const pCode = fs.readFileSync(path.join(pagesDir, pFile), "utf-8");
  // Periksa apakah halaman memanggil getFaqsByRoute
  const matches = pCode.matchAll(/getFaqsByRoute\(["']([^"']+)["']\)/g);
  for (const match of matches) {
    const route = match[1];
    if (!(FAQ_ROUTE_PATHS as readonly string[]).includes(route)) {
      console.error(`❌ [Schema Lint] Rute '${route}' yang dipanggil di ${pFile} tidak terdaftar dalam FAQ_ROUTE_PATHS!`);
      exitCode = 1;
    }
    const faqs = (ROUTE_FAQS as any)[route];
    if (!faqs || faqs.length === 0) {
      console.error(`❌ [Schema Lint] Rute '${route}' dipanggil di ${pFile} tetapi tidak memiliki entri data di ROUTE_FAQS!`);
      exitCode = 1;
    }
  }
}

if (exitCode === 0) {
  console.log("✅ Schema & E-E-A-T Linter lulus (Seluruh Article author Person terverifikasi, paritas FAQ glosarium valid, skema WebSite Google Site Name teruji, registry FAQ type-safe terverifikasi).");
} else {
  process.exit(exitCode);
}
