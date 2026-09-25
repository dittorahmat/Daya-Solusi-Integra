import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ROUTE_METADATA_MAP, RouteMeta } from "../src/utils/seoMeta.js";
import { ROUTE_FAQS } from "../src/data/faqData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("Error: dist/index.html not found. Please run 'vite build' first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf-8");

console.log("Generating static route snapshots for SEO and Social Crawlers...");

/**
 * Membangun skema JSON-LD terisolasi dan spesifik per jenis rute
 */
function buildJsonLdForRoute(routePath: string, meta: RouteMeta): string {
  const graphs: any[] = [];

  // 1. BreadcrumbList universal untuk setiap subhalaman
  const pathSegments = routePath.split("/").filter(Boolean);
  const breadcrumbItems: any[] = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://dsintegra.co.id/"
    }
  ];

  let accumulatedPath = "";
  pathSegments.forEach((segment, idx) => {
    accumulatedPath += `/${segment}`;
    const matchedMeta = ROUTE_METADATA_MAP[accumulatedPath];
    let readableName = segment.replace(/-/g, " ");
    if (matchedMeta && matchedMeta.ogTitle) {
      readableName = matchedMeta.ogTitle.split("|")[0].trim();
    } else if (matchedMeta && matchedMeta.title) {
      readableName = matchedMeta.title.split("|")[0].trim();
    }
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": idx + 2,
      "name": readableName,
      "item": `https://dsintegra.co.id${accumulatedPath}`
    });
  });

  graphs.push({
    "@type": "BreadcrumbList",
    "@id": `${meta.canonical}#breadcrumb`,
    "itemListElement": breadcrumbItems
  });

  // 2. Skema khusus berdasarkan tipe halaman
  if (routePath.startsWith("/blog/")) {
    // Artikel blog: Gunakan TechArticle dengan metadata spesifik artikel
    graphs.push({
      "@type": "TechArticle",
      "@id": `${meta.canonical}#article`,
      "headline": meta.title.split("|")[0].trim(),
      "description": meta.description,
      "inLanguage": "id-ID",
      "url": meta.canonical,
      "image": meta.image || "https://dsintegra.co.id/og-image.jpg",
      "author": {
        "@type": "Organization",
        "name": "Daya Solusi Integra",
        "url": "https://dsintegra.co.id/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Daya Solusi Integra",
        "url": "https://dsintegra.co.id/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dsintegra.co.id/og-image.jpg"
        }
      },
      "datePublished": "2026-09-25",
      "dateModified": "2026-09-25",
      "proficiencyLevel": "Expert"
    });
  } else if (routePath === "/platform/grc-integra") {
    graphs.push({
      "@type": "SoftwareApplication",
      "@id": "https://dsintegra.co.id/platform/grc-integra#software",
      "name": "GRC Integra",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based, Cloud, On-Premise",
      "description": meta.description,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "description": "Permintaan demo dan evaluasi implementasi enterprise BUMN"
      },
      "creator": {
        "@type": "Organization",
        "name": "Daya Solusi Integra",
        "url": "https://dsintegra.co.id/"
      }
    });
  } else if (routePath === "/kalkulator-sampel-toe" || routePath === "/asesmen-maturitas") {
    graphs.push({
      "@type": "WebApplication",
      "@id": `${meta.canonical}#app`,
      "name": meta.title.split("|")[0].trim(),
      "applicationCategory": "BusinessApplication",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "description": meta.description,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR"
      }
    });

    if (routePath === "/kalkulator-sampel-toe") {
      graphs.push({
        "@type": "Dataset",
        "@id": "https://dsintegra.co.id/kalkulator-sampel-toe#dataset",
        "name": "Matriks Ukuran Sampel Pengujian Kontrol Operasional (TOE) Tabel 22 Regulasi SK-5 BUMN",
        "description": "Dataset normatif ukuran populasi kejadian kontrol dan batas sampel minimum pengujian efektivitas pengendalian internal atas pelaporan keuangan (ICOFR) BUMN.",
        "url": "https://dsintegra.co.id/kalkulator-sampel-toe",
        "creator": {
          "@type": "Organization",
          "name": "Daya Solusi Integra",
          "url": "https://dsintegra.co.id/"
        },
        "license": "https://creativecommons.org/publicdomain/zero/1.0/",
        "isAccessibleForFree": true,
        "variableMeasured": [
          "Frekuensi Pelaksanaan Kontrol",
          "Populasi Keterjadian per Tahun Buku",
          "Rentang Sampel Minimum TOE",
          "Toleransi Tingkat Deviasi Pengendalian"
        ]
      });
    }
  } else if (routePath.startsWith("/layanan/")) {
    graphs.push({
      "@type": "Service",
      "@id": `${meta.canonical}#service`,
      "name": meta.title.split("|")[0].trim(),
      "provider": {
        "@type": "Organization",
        "name": "Daya Solusi Integra",
        "url": "https://dsintegra.co.id/"
      },
      "description": meta.description,
      "areaServed": "ID"
    });
  }

  // 3. Skema FAQPage untuk rute yang memiliki kumpulan tanya-jawab resmi
  const routeFaqs = ROUTE_FAQS[routePath];
  if (routeFaqs && routeFaqs.length > 0) {
    graphs.push({
      "@type": "FAQPage",
      "@id": `${meta.canonical}#faq`,
      "mainEntity": routeFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  const jsonLdPayload = {
    "@context": "https://schema.org",
    "@graph": graphs
  };

  return `<script type="application/ld+json">\n    ${JSON.stringify(jsonLdPayload, null, 2).split("\n").join("\n    ")}\n    </script>`;
}

let generatedCount = 0;

for (const [routePath, meta] of Object.entries(ROUTE_METADATA_MAP)) {
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

  // Ganti skema JSON-LD monolitik dengan skema spesifik per rute yang bersih
  const routeJsonLd = buildJsonLdForRoute(routePath, meta);
  routeHtml = routeHtml.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    routeJsonLd
  );

  fs.writeFileSync(targetFile, routeHtml, "utf-8");
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} static prerendered HTML routes with custom social cards and clean JSON-LD.`);
