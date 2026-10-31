import fs from "fs";
import path from "path";
import { buildJsonLdForRoute } from "./seo/jsonld.js";
import { parseBlogFrontMatter } from "./seo/frontmatter.js";
import { blogContentDir } from "./seo/paths.js";
import { GLOSSARY_ITEMS } from "../src/data/glossaryData.js";

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

if (exitCode === 0) {
  console.log("✅ Schema & E-E-A-T Linter lulus (Seluruh Article author Person terverifikasi, paritas FAQ glosarium valid).");
} else {
  process.exit(exitCode);
}
