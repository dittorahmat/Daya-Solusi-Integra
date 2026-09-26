import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ROUTE_METADATA_MAP, RouteMeta } from "../src/utils/seoMeta.js";
import { ROUTE_FAQS } from "../src/data/faqData.js";
import { GLOSSARY_ITEMS } from "../src/data/glossaryData.js";
import { REGULATION_ITEMS } from "../src/data/regulationData.js";
import { SECTOR_DATA_MAP } from "../src/data/sectorsData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const publicDir = path.resolve(__dirname, "../public");
const blogContentDir = path.resolve(__dirname, "../src/content/blog");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("Error: dist/index.html not found. Please run 'vite build' first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf-8");

console.log("Generating static route snapshots for SEO and Social Crawlers...");

/**
 * Helper untuk parsing sederhana front-matter markdown blog
 */
function parseBlogFrontMatter(rawContent: string): { data: Record<string, any>; body: string } {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: rawContent };

  const frontMatterText = match[1];
  const body = match[2];
  const data: Record<string, any> = {};

  frontMatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, body };
}

/**
 * Helper konversi tanggal teks Indonesia/ISO ke format tanggal RFC-822 (standar RSS 2.0)
 */
function formatRfc822Date(dateStr?: string): string {
  if (!dateStr) return new Date("2026-09-25T00:00:00Z").toUTCString();

  // Handle format Indonesia seperti "25 September 2026"
  const monthMap: Record<string, string> = {
    januari: "01",
    februari: "02",
    maret: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    agustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    desember: "12"
  };

  const idMatch = dateStr.trim().toLowerCase().match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/);
  if (idMatch) {
    const day = idMatch[1].padStart(2, "0");
    const month = monthMap[idMatch[2]] || "09";
    const year = idMatch[3];
    const parsed = new Date(`${year}-${month}-${day}T07:00:00Z`);
    if (!isNaN(parsed.getTime())) {
      return parsed.toUTCString();
    }
  }

  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed.toUTCString();
  }

  return new Date("2026-09-25T00:00:00Z").toUTCString();
}

/**
 * Escape karakter khusus XML
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Membuat berkas RSS 2.0 Feed untuk sindikasi konten blog
 */
function generateRssFeed() {
  if (!fs.existsSync(blogContentDir)) {
    console.warn("Blog content directory not found, skipping RSS feed generation.");
    return;
  }

  const files = fs.readdirSync(blogContentDir).filter((file) => file.endsWith(".md"));
  const items: Array<{
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category: string;
    author: string;
  }> = [];

  for (const file of files) {
    const filePath = path.join(blogContentDir, file);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data } = parseBlogFrontMatter(rawContent);

    const slug = data.slug || file.replace(".md", "");
    const title = data.title || "Artikel GRC BUMN";
    const description = data.excerpt || "Wawasan tata kelola, kepatuhan audit ICOFR, dan regulasi BUMN.";
    const link = `https://dsintegra.co.id/blog/${slug}`;
    const pubDate = formatRfc822Date(data.date);
    const category = data.category || "Tata Kelola & GRC";
    const author = data.author || "Daya Solusi Integra";

    items.push({ title, link, description, pubDate, category, author });
  }

  // Susun XML RSS 2.0
  const buildDate = new Date().toUTCString();
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Daya Solusi Integra : Knowledge Base GRC &amp; Regulasi ICOFR BUMN</title>
    <link>https://dsintegra.co.id/blog</link>
    <description>Artikel otoritatif tata kelola, audit ITGC, metodologi sampling TOE SK-5, dan platform software GRC Integra untuk BUMN Indonesia.</description>
    <language>id-ID</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="https://dsintegra.co.id/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://dsintegra.co.id/og-image.jpg</url>
      <title>Daya Solusi Integra</title>
      <link>https://dsintegra.co.id/</link>
    </image>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
      <author>marketing@dsintegra.co.id (${escapeXml(item.author)})</author>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;

  // Tulis ke dist/feed.xml dan public/feed.xml
  const distFeedPath = path.join(distDir, "feed.xml");
  const publicFeedPath = path.join(publicDir, "feed.xml");

  fs.writeFileSync(distFeedPath, rssXml, "utf-8");
  fs.writeFileSync(publicFeedPath, rssXml, "utf-8");

  console.log(`Generated RSS 2.0 feed with ${items.length} items at dist/feed.xml and public/feed.xml.`);
}

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

  // 2. SiteNavigationElement universal untuk struktur navigasi konsisten
  graphs.push({
    "@type": "SiteNavigationElement",
    "@id": `${meta.canonical}#navigation`,
    "name": "Navigasi Utama Daya Solusi Integra",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Layanan Konsultasi ICOFR BUMN",
        "url": "https://dsintegra.co.id/layanan/icofr-bumn"
      },
      {
        "@type": "WebPage",
        "name": "Evaluasi & Audit Kesiapan ITGC",
        "url": "https://dsintegra.co.id/layanan/itgc-audit-readiness"
      },
      {
        "@type": "WebPage",
        "name": "Platform Software GRC Integra",
        "url": "https://dsintegra.co.id/platform/grc-integra"
      },
      {
        "@type": "WebPage",
        "name": "BPM Workflow Editor",
        "url": "https://dsintegra.co.id/platform/bpm-workflow-editor"
      },
      {
        "@type": "WebPage",
        "name": "Kalkulator Sampel TOE (Tabel 22 SK-5)",
        "url": "https://dsintegra.co.id/kalkulator-sampel-toe"
      },
      {
        "@type": "WebPage",
        "name": "Glosarium Regulasi & Istilah ICOFR",
        "url": "https://dsintegra.co.id/glosarium"
      },
      {
        "@type": "WebPage",
        "name": "Wawasan & Panduan Regulasi BUMN",
        "url": "https://dsintegra.co.id/blog"
      }
    ]
  });

  // 3. Skema khusus berdasarkan tipe halaman
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
        "@type": "Person",
        "@id": "https://dsintegra.co.id/#author-humbul-kristiawan",
        "name": "Humbul Kristiawan, SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP",
        "jobTitle": "Principal Partner & Senior GRC Advisor",
        "image": "https://dsintegra.co.id/images/authors/humbul-kristiawan.jpg",
        "url": "https://humbulkristiawan.com/about-humbul/",
        "sameAs": [
          "https://www.linkedin.com/in/humbul-kristiawan-b0621360/",
          "https://humbulkristiawan.com/about-humbul/",
          "https://humbulkristiawan.com/"
        ]
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
  } else if (routePath === "/platform/bpm-workflow-editor") {
    graphs.push({
      "@type": "SoftwareApplication",
      "@id": "https://dsintegra.co.id/platform/bpm-workflow-editor#software",
      "name": "BPM Workflow Editor: GRC Integra",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "description": meta.description,
      "featureList": [
        "Visio-Style Web Canvas Diagramming",
        "Auto-Draw Workflow from PDF, JPG, and PNG",
        "BPMN 2.0 Standard Symbols and Swimlanes",
        "Dokumentasi SOP dan Integrasi Pengendalian Internal"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "description": "Demonstrasi offline wilayah Jabodetabek dan sesi online interaktif nasional"
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

      graphs.push({
        "@type": "HowTo",
        "@id": "https://dsintegra.co.id/kalkulator-sampel-toe#howto",
        "name": "Cara Menentukan Ukuran Sampel Pengujian Efektivitas Pengendalian (TOE) Sesuai Tabel 22 SK-5 BUMN",
        "description": "Panduan langkah teknis penentuan sampel uji kepatuhan dan efektivitas kontrol ICOFR BUMN untuk Lini 1, Lini 2, dan auditor internal.",
        "totalTime": "PT3M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "IDR",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Tentukan Frekuensi Pelaksanaan Kontrol",
            "text": "Identifikasi frekuensi pelaksanaan kontrol dalam Risk and Control Matrix (RCM), apakah berjalan tahunan, kuartalan, bulanan, mingguan, harian, atau berkali-kali dalam sehari.",
            "url": "https://dsintegra.co.id/kalkulator-sampel-toe"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Pilih Tingkat Signifikansi Risiko Kontrol",
            "text": "Pilih tingkat signifikansi risiko pengendalian (Tinggi vs Rendah/Sedang). Kontrol dengan risiko kegagalan tinggi membutuhkan batas sampel atas guna memberikan keyakinan memadai.",
            "url": "https://dsintegra.co.id/kalkulator-sampel-toe"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Dapatkan Rentang Sampel Minimum Normatif",
            "text": "Kalkulator mengekstrak rentang ukuran sampel minimum yang dipersyaratkan Tabel 22 Regulasi SK-5/DKU.MBU/11/2024 beserta batas toleransi deviasi kontrol (0 toleransi untuk sampel representatif).",
            "url": "https://dsintegra.co.id/kalkulator-sampel-toe"
          }
        ]
      });
    }
  } else if (routePath.startsWith("/glosarium/")) {
    const slug = routePath.replace("/glosarium/", "");
    const item = GLOSSARY_ITEMS.find((g) => g.id === slug);
    if (item) {
      graphs.push({
        "@type": "DefinedTerm",
        "@id": `${meta.canonical}#term`,
        "name": item.acronym ? `${item.term} (${item.acronym})` : item.term,
        "description": item.definition,
        "inDefinedTermSet": "https://dsintegra.co.id/glosarium",
        "url": meta.canonical
      });
    }
  } else if (routePath === "/regulasi") {
    REGULATION_ITEMS.forEach((reg) => {
      graphs.push({
        "@type": "Legislation",
        "@id": `https://dsintegra.co.id/regulasi#${reg.id}`,
        "name": reg.shortTitle,
        "alternateName": reg.officialTitle,
        "legislationIdentifier": reg.identifier,
        "legislationType": reg.category,
        "datePublished": reg.effectiveDate,
        "publisher": {
          "@type": "Organization",
          "name": reg.issuingAuthority
        },
        "description": reg.summary,
        "url": `https://dsintegra.co.id/regulasi#${reg.id}`
      });
    });
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
  } else if (routePath.startsWith("/sektor-bumn/")) {
    const slug = routePath.replace("/sektor-bumn/", "");
    const sector = SECTOR_DATA_MAP[slug];
    if (sector) {
      graphs.push({
        "@type": "Service",
        "@id": `${meta.canonical}#service`,
        "name": `${sector.heroHeading} ${sector.heroHighlight}`,
        "provider": {
          "@type": "Organization",
          "name": "Daya Solusi Integra",
          "url": "https://dsintegra.co.id/"
        },
        "description": sector.heroDescription,
        "areaServed": "ID",
        "audience": {
          "@type": "Audience",
          "audienceType": sector.targetEntities.join(", ")
        }
      });

      if (sector.faqs && sector.faqs.length > 0) {
        graphs.push({
          "@type": "FAQPage",
          "@id": `${meta.canonical}#faq`,
          "mainEntity": sector.faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        });
      }
    }
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

/**
 * Helper pembersih karakter em-dash / en-dash terlarang
 */
function cleanProhibitedDashes(text: string): string {
  return text.replace(/[\u2014\u2013]/g, ":");
}

/**
 * Membangun struktur HTML semantik (H1, Lead, Breadcrumb, FAQs, Content) untuk diinjeksi ke <div id="root">
 * Memungkinkan web crawler & bot AI mengindeks konten teks lengkap secara langsung tanpa eksekusi JavaScript.
 */
function buildSemanticBodyHtmlForRoute(routePath: string, meta: RouteMeta): string {
  const pageTitle = cleanProhibitedDashes(meta.title.split("|")[0].trim());
  const pageDesc = cleanProhibitedDashes(meta.description || "");

  // Susun Breadcrumb semantic
  const segments = routePath.split("/").filter(Boolean);
  let breadcrumbLinks = `<a href="/">Beranda</a>`;
  let currentAccum = "";
  segments.forEach((seg, idx) => {
    currentAccum += `/${seg}`;
    const isLast = idx === segments.length - 1;
    const segName = cleanProhibitedDashes(seg.replace(/-/g, " "));
    if (isLast) {
      breadcrumbLinks += ` &gt; <span>${segName}</span>`;
    } else {
      breadcrumbLinks += ` &gt; <a href="${currentAccum}">${segName}</a>`;
    }
  });

  let specificContent = "";

  // 1. Konten spesifik artikel blog
  if (routePath.startsWith("/blog/")) {
    const slug = routePath.replace("/blog/", "");
    const mdFile = path.join(blogContentDir, `${slug}.md`);
    if (fs.existsSync(mdFile)) {
      const rawMd = fs.readFileSync(mdFile, "utf-8");
      const { data, body } = parseBlogFrontMatter(rawMd);
      
      // Sederhanakan markdown paragraphs ke tag HTML semantik
      const paragraphs = body
        .split("\n\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0 && !p.startsWith("#"))
        .map((p) => `<p>${cleanProhibitedDashes(p).replace(/\n/g, " ")}</p>`)
        .slice(0, 10) // Ambil 10 paragraf pertama untuk raw HTML snapshot
        .join("\n      ");

      specificContent = `
      <article>
        <header>
          <p>Kategori: ${cleanProhibitedDashes(data.category || "Tata Kelola & GRC")}</p>
          <p>Penulis: ${cleanProhibitedDashes(data.author || "Daya Solusi Integra")} | Tanggal: ${data.date || "2026-09-25"}</p>
        </header>
        <section class="article-lead">
          <p><strong>Ringkasan Eksekutif:</strong> ${cleanProhibitedDashes(data.excerpt || pageDesc)}</p>
        </section>
        <section class="article-body">
          ${paragraphs}
        </section>
        <footer>
          <p>Pelajari lebih lanjut implementasi tata kelola dan konsultasi melalui <a href="/layanan/icofr-bumn">Layanan Konsultan ICOFR BUMN</a> atau evaluasi otomatisasi dengan <a href="/platform/grc-integra">Software GRC Integra</a>.</p>
        </footer>
      </article>
      `;
    }
  } else if (routePath === "/blog") {
    specificContent = `
    <section>
      <h2>Katalog Wawasan & Panduan Regulasi BUMN</h2>
      <p>Kumpulan panduan teknis, metodologi pengujian pengendalian internal, kepatuhan audit ITGC, dan asersi manajemen berbasis SK-5/DKU.MBU/11/2024.</p>
      <ul>
        <li><a href="/blog/panduan-sk5-icofr-grc-integra">Panduan Implementasi SK-5/DKU.MBU/11/2024 ICOFR BUMN</a></li>
        <li><a href="/blog/manfaat-aplikasi-icofr-bumn">Manfaat Aplikasi ICOFR BUMN dalam Menghadapi Audit SPI dan Eksternal</a></li>
        <li><a href="/blog/metodologi-sampling-tabel-22-sk5">Metodologi Sampling Pengujian Kontrol Sesuai Tabel 22 SK-5 BUMN</a></li>
        <li><a href="/blog/peran-itgc-dalam-asersi-laporan-keuangan-bumn">Peran ITGC dalam Asersi Laporan Keuangan BUMN</a></li>
        <li><a href="/blog/perbandingan-software-grc-lokal-vs-internasional">Perbandingan Software GRC Lokal vs Solusi Internasional untuk Kepatuhan BUMN</a></li>
        <li><a href="/blog/studi-kasus-holding-bumn-benchmarks-icofr">Studi Kasus Holding BUMN: Benchmark Keberhasilan Implementasi ICOFR & GRC Integra</a></li>
      </ul>
    </section>
    `;
  } else if (routePath.startsWith("/glosarium/")) {
    const slug = routePath.replace("/glosarium/", "");
    const item = GLOSSARY_ITEMS.find((g) => g.id === slug);
    if (item) {
      const termTitle = item.acronym ? `${item.term} (${item.acronym})` : item.term;
      specificContent = `
      <section>
        <h2>Definisi & Penjelasan Kepatuhan</h2>
        <p>${cleanProhibitedDashes(item.definition)}</p>
        <h3>Rujukan Regulasi Resmi</h3>
        <p>${cleanProhibitedDashes(item.regulationRef)}</p>
        <h3>Kategori Tata Kelola</h3>
        <p>${cleanProhibitedDashes(item.category)}</p>
        <p><a href="/glosarium">&larr; Kembali ke Glosarium Lengkap</a> | <a href="/layanan/icofr-bumn">Konsultasi Terkait ${cleanProhibitedDashes(termTitle)}</a></p>
      </section>
      `;
    }
  } else if (routePath === "/glosarium") {
    const listTerms = GLOSSARY_ITEMS
      .map((item) => `<li><a href="/glosarium/${item.id}"><strong>${cleanProhibitedDashes(item.term)}</strong>${item.acronym ? ` (${item.acronym})` : ""}</a>: ${cleanProhibitedDashes(item.definition.slice(0, 140))}...</li>`)
      .join("\n        ");
    specificContent = `
    <section>
      <h2>Daftar Istilah Pengendalian Internal & Regulasi BUMN</h2>
      <p>Kamus terminologi standar kepatuhan pengendalian internal atas pelaporan keuangan (ICOFR), audit teknologi informasi (ITGC), dan kerangka COSO/ISO 31000.</p>
      <ul>
        ${listTerms}
      </ul>
    </section>
    `;
  } else if (routePath === "/kalkulator-sampel-toe") {
    specificContent = `
    <section>
      <h2>Alat Bantu Penentuan Ukuran Sampel Uji Efektivitas Kontrol (TOE)</h2>
      <p>Kalkulator normatif ukuran sampel pengujian kontrol berdasarkan Tabel 22 Surat Keputusan Menteri BUMN SK-5/DKU.MBU/11/2024.</p>
      <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 1rem; width: 100%;">
        <thead>
          <tr>
            <th>Frekuensi Kontrol</th>
            <th>Populasi Kejadian</th>
            <th>Batas Sampel Minimum</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tahunan (Annual)</td><td>1 kali/tahun</td><td>1 sampel</td></tr>
          <tr><td>Triwulanan (Quarterly)</td><td>4 kali/tahun</td><td>2 sampel</td></tr>
          <tr><td>Bulanan (Monthly)</td><td>12 kali/tahun</td><td>2 sampai 5 sampel</td></tr>
          <tr><td>Mingguan (Weekly)</td><td>52 kali/tahun</td><td>5 sampai 15 sampel</td></tr>
          <tr><td>Harian (Daily)</td><td>250 kali/tahun</td><td>20 sampai 40 sampel</td></tr>
          <tr><td>Berkali-kali Sehari</td><td>&gt; 250 kali/tahun</td><td>25 sampai 60 sampel</td></tr>
        </tbody>
      </table>
    </section>
    `;
  } else if (routePath === "/platform/grc-integra") {
    specificContent = `
    <section>
      <h2>Kapabilitas Utama Platform GRC Integra</h2>
      <ul>
        <li><strong>Scoping & Akun Signifikan:</strong> Penentuan otomatis akun material dan asersi laporan keuangan.</li>
        <li><strong>Risk and Control Matrix (RCM) Repository:</strong> Sentralisasi pengendalian proses bisnis Lini 1 dan Lini 2.</li>
        <li><strong>Pengujian TOD & TOE:</strong> Dokumentasi kertas kerja audit, sampel acak Tabel 22, dan manajemen defisiensi.</li>
        <li><strong>Pelaporan Asersi Manajemen:</strong> Dashboard kepatuhan Direksi dan asersi kepatuhan regulasi SK-5 BUMN.</li>
      </ul>
      <p>Pelajari lebih lanjut atau jadwalkan sesi demonstrasi langsung dengan konsultan kami di <a href="/#contact">Hubungi Tim GRC Integra</a>.</p>
    </section>
    `;
  } else if (routePath === "/platform/bpm-workflow-editor") {
    specificContent = `
    <section>
      <h2>BPM Workflow Editor: Solusi Pemetaan Alur Kerja Proses Bisnis Seandal Visio di Web</h2>
      <p>BPM Workflow Editor pada GRC Integra menghadirkan kanvas pemetaan proses bisnis modern berbasis browser. Dirancang khusus untuk mempermudah tim Lini 1, Lini 2, dan auditor internal BUMN dalam memetakan standar operasional prosedur (SOP) secara visual, presisi, dan terstruktur.</p>
      
      <h3>Kapabilitas Utama Editor:</h3>
      <ul>
        <li><strong>Visio-Style Native Web Canvas:</strong> Antarmuka familiar dengan kemampuan drag-and-drop elemen BPMN (Swimlane, Event, Activity/Task, Gateway keputusan, Data Store) langsung di browser tanpa membutuhkan lisensi aplikasi desktop terpisah.</li>
        <li><strong>Smart Auto-Draw dari Dokumen SOP Eksisting:</strong> Unggah file alur proses dalam format PDF, gambar scan JPG, atau PNG. Mesin cerdas merekonstruksi urutan alur secara instan menjadi diagram digital yang dapat diedit langsung di kanvas.</li>
        <li><strong>Dokumentasi SOP Terstandarisasi:</strong> Ekspor hasil diagram ke format PDF vektor beresolusi tinggi, gambar, atau format data terstandar untuk lampiran dokumen kepatuhan korporasi.</li>
      </ul>

      <h3>Demonstrasi Langsung Bersama Konsultan:</h3>
      <p>Kami melayani sesi demonstrasi produk secara langsung (tatap muka offline) untuk kantor pusat dan unit kerja di wilayah <strong>Jabodetabek</strong>, serta sesi demo daring interaktif (online) untuk korporasi di seluruh Indonesia.</p>
      <p>Jadwalkan sesi konsultasi dan demo produk melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a> atau navigasikan ke formulir kontak kami.</p>
    </section>
    `;
  } else if (routePath === "/regulasi") {
    const regList = REGULATION_ITEMS.map((reg) => `
      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h3>${cleanProhibitedDashes(reg.shortTitle)} (${cleanProhibitedDashes(reg.identifier)})</h3>
        <p><strong>Judul Resmi:</strong> ${cleanProhibitedDashes(reg.officialTitle)}</p>
        <p><strong>Otoritas Penerbit:</strong> ${cleanProhibitedDashes(reg.issuingAuthority)} | <strong>Berlaku:</strong> ${reg.effectiveDate}</p>
        <p>${cleanProhibitedDashes(reg.summary)}</p>
        <p><strong>Mandat Kunci:</strong> ${cleanProhibitedDashes(reg.primaryMandate)}</p>
        <h4>Distribusi Tiga Lini (Three Lines Model):</h4>
        <ul>
          <li><strong>${cleanProhibitedDashes(reg.threeLinesRole.firstLine)}</strong></li>
          <li><strong>${cleanProhibitedDashes(reg.threeLinesRole.secondLine)}</strong></li>
          <li><strong>${cleanProhibitedDashes(reg.threeLinesRole.thirdLine)}</strong></li>
        </ul>
      </article>
    `).join("\n");

    specificContent = `
    <section>
      <h2>Pusat Regulasi & Landasan Hukum Pengendalian Internal BUMN</h2>
      <p>Kompilasi direktori regulasi resmi yang mengatur kepatuhan pengendalian internal atas pelaporan keuangan (ICOFR), tata kelola korporasi, serta standar pemeriksaan BPK.</p>
      ${regList}
    </section>
    `;
  } else if (routePath.startsWith("/glosarium/")) {
    const slug = routePath.replace("/glosarium/", "");
    const item = GLOSSARY_ITEMS.find((g) => g.id === slug);
    if (item) {
      const termTitle = item.acronym ? `${item.term} (${item.acronym})` : item.term;
      specificContent = `
      <article>
        <h2>${cleanProhibitedDashes(termTitle)}</h2>
        <p><strong>Kategori:</strong> ${cleanProhibitedDashes(item.category)} | <strong>Rujukan Regulasi:</strong> ${cleanProhibitedDashes(item.regulationRef)}</p>
        <h3>Definisi Kepatuhan:</h3>
        <p>${cleanProhibitedDashes(item.definition)}</p>
        <h3>Poin Kunci BUMN:</h3>
        <p>${cleanProhibitedDashes(item.keyTakeaway)}</p>
        ${item.practicalExample ? `<h3>Contoh Penerapan Praktis:</h3><p>${cleanProhibitedDashes(item.practicalExample)}</p>` : ""}
        <p><a href="/glosarium">&larr; Kembali ke Direktori Glosarium ICOFR BUMN</a></p>
      </article>
      `;
    }
  } else if (routePath.startsWith("/layanan/")) {
    specificContent = `
    <section>
      <h2>Ruang Lingkup & Metodologi Pendampingan</h2>
      <p>Daya Solusi Integra mendampingi BUMN, holding klaster, dan lembaga jasa keuangan dalam menerapkan tata kelola yang teruji, memenuhi uji kepatuhan BPKP, BPK, dan auditor independen.</p>
      <p>Konsultasikan kebutuhan implementasi, evaluasi kesiapan audit, atau integrasi sistem melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath.startsWith("/sektor-bumn/")) {
    const slug = routePath.replace("/sektor-bumn/", "");
    const sector = SECTOR_DATA_MAP[slug];
    if (sector) {
      const challengesHtml = sector.keyChallenges
        .map(
          (c, idx) => `
        <article style="margin-bottom: 1.5rem;">
          <h3>${idx + 1}. ${cleanProhibitedDashes(c.title)}</h3>
          <p>${cleanProhibitedDashes(c.description)}</p>
        </article>`
        )
        .join("\n");

      const matrixRows = sector.regulatoryAlignment
        .map(
          (m) => `
        <tr>
          <td style="padding: 0.75rem; border: 1px solid #334155;"><strong>${cleanProhibitedDashes(m.sk5Requirement)}</strong></td>
          <td style="padding: 0.75rem; border: 1px solid #334155;">${cleanProhibitedDashes(m.sectorRegulation)}</td>
          <td style="padding: 0.75rem; border: 1px solid #334155;">${cleanProhibitedDashes(m.challenge)}</td>
          <td style="padding: 0.75rem; border: 1px solid #334155; color: #93c5fd;">${cleanProhibitedDashes(m.solutionByDsi)}</td>
        </tr>`
        )
        .join("\n");

      const rcmCards = sector.rcmBlueprints
        .map(
          (r, idx) => `
        <div style="background: #0f172a; padding: 1.25rem; border: 1px solid #1e293b; border-radius: 8px; margin-bottom: 1rem;">
          <h4>Blueprint #${idx + 1}: ${cleanProhibitedDashes(r.processName)} (Frekuensi: ${cleanProhibitedDashes(r.frequency)})</h4>
          <p><strong>Risiko Finansial:</strong> ${cleanProhibitedDashes(r.financialRisk)}</p>
          <p><strong>Aktivitas Kontrol:</strong> ${cleanProhibitedDashes(r.keyControl)}</p>
          <p><strong>Metode Uji TOE:</strong> ${cleanProhibitedDashes(r.testingMethod)}</p>
        </div>`
        )
        .join("\n");

      specificContent = `
      <section>
        <h2>Ringkasan Eksekutif: Pengendalian Internal Sektor ${cleanProhibitedDashes(sector.shortTitle)}</h2>
        <p>${cleanProhibitedDashes(sector.executiveSummary)}</p>
        
        <h2>Titik Kritis & Tantangan Kepatuhan</h2>
        ${challengesHtml}

        <h2>Matriks Harmonisasi SK-5 dan Regulasi Sektoral</h2>
        <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 1rem; width: 100%; border: 1px solid #334155;">
          <thead>
            <tr style="background: #1e293b;">
              <th>Mandat SK-5 BUMN</th>
              <th>Regulasi Sektor</th>
              <th>Tantangan Lapangan</th>
              <th>Solusi Daya Solusi Integra</th>
            </tr>
          </thead>
          <tbody>
            ${matrixRows}
          </tbody>
        </table>

        <h2 style="margin-top: 2rem;">Contoh Arsitektur RCM (Risk and Control Matrix)</h2>
        ${rcmCards}

        <p><a href="/kalkulator-sampel-toe">Gunakan Kalkulator Sampel TOE Tabel 22</a> | <a href="/regulasi">Pelajari Pusat Regulasi BUMN</a></p>
      </section>
      `;
    }
  }

  // Tambahkan FAQ bila tersedia
  const faqs = ROUTE_FAQS[routePath];
  let faqContent = "";
  if (faqs && faqs.length > 0) {
    const faqList = faqs
      .map(
        (f) => `
        <details style="margin-bottom: 1rem;">
          <summary><strong>${cleanProhibitedDashes(f.question)}</strong></summary>
          <p>${cleanProhibitedDashes(f.answer)}</p>
        </details>`
      )
      .join("\n");

    faqContent = `
    <section style="margin-top: 2rem;">
      <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
      ${faqList}
    </section>
    `;
  }

  return `
    <header style="padding: 1.5rem; border-bottom: 1px solid #1e293b;">
      <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem;">
        ${breadcrumbLinks}
      </nav>
      <div style="font-size: 0.75rem; text-transform: uppercase; color: #cca43b; font-weight: bold;">
        PT Daya Solusi Integra : Solusi GRC &amp; Kepatuhan Regulasi BUMN
      </div>
    </header>

    <main style="max-width: 900px; margin: 2rem auto; padding: 0 1.5rem;">
      <h1>${pageTitle}</h1>
      <p style="font-size: 1.125rem; line-height: 1.7; color: #94a3b8;">${pageDesc}</p>

      ${specificContent}

      ${faqContent}

      <div style="margin-top: 3rem; padding: 1.5rem; background: #0f172a; border: 1px solid #1e293b; border-radius: 8px;">
        <h3>Konsultasi Kepatuhan &amp; Demo GRC Integra</h3>
        <p>Hubungi konsultan senior Daya Solusi Integra untuk konsultasi implementasi ICOFR BUMN, audit ITGC, atau otomasi software GRC Integra.</p>
        <p><strong>Surel:</strong> <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a> | <strong>Situs Resmi:</strong> <a href="https://dsintegra.co.id/">https://dsintegra.co.id</a></p>
      </div>
    </main>

    <footer style="padding: 2rem 1.5rem; border-top: 1px solid #1e293b; text-align: center; font-size: 0.875rem; color: #64748b;">
      <p>&copy; 2026 PT Daya Solusi Integra. Hak Cipta Dilindungi Undang-Undang.</p>
      <p>Jakarta Selatan, DKI Jakarta, Indonesia | Domain Resmi: https://dsintegra.co.id</p>
    </footer>
  `;
}

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

// Generate RSS 2.0 Feed untuk sindikasi konten blog
generateRssFeed();

/**
 * Otomatisasi pembuatan berkas llms.txt dan llms-full.txt untuk AI context discovery
 */
function generateLlmsFiles() {
  console.log("Generating automated llms.txt and llms-full.txt context files...");

  const blogFiles = fs.existsSync(blogContentDir)
    ? fs.readdirSync(blogContentDir).filter((file) => file.endsWith(".md"))
    : [];

  const blogEntries: Array<{
    title: string;
    slug: string;
    excerpt: string;
    category: string;
  }> = [];

  for (const file of blogFiles) {
    const rawContent = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(rawContent);
    const slug = data.slug || file.replace(".md", "");
    const title = cleanProhibitedDashes(data.title || "Artikel GRC BUMN");
    const excerpt = cleanProhibitedDashes(data.excerpt || "Panduan kepatuhan dan tata kelola regulasi BUMN.");
    const category = cleanProhibitedDashes(data.category || "Tata Kelola & GRC");
    blogEntries.push({ title, slug, excerpt, category });
  }

  // 1. Susun llms.txt (Standard Context Index)
  const llmsTxtContent = `# Daya Solusi Integra

> Daya Solusi Integra (https://dsintegra.co.id) adalah firma konsultan spesialis tata kelola korporasi, implementasi ICOFR (Internal Control over Financial Reporting), evaluasi ITGC, dan penyedia platform software GRC Integra untuk kepatuhan regulasi Kementerian BUMN di Indonesia.

PT Daya Solusi Integra berdomisili di Jakarta Selatan, DKI Jakarta, Indonesia (kontak: marketing@dsintegra.co.id, +62-811-100-2442). Klien utama mencakup Badan Usaha Milik Negara (BUMN), Anak Perusahaan Holding BUMN, Perbankan, dan Lembaga Jasa Keuangan Teratur. Produk unggulan perusahaan adalah platform GRC Integra, solusi siklus hidup digital ICOFR terintegrasi pertama untuk BUMN sesuai mandat SK-5/DKU.MBU/11/2024.

## Platform Produk
- [GRC Integra Platform](https://dsintegra.co.id/platform/grc-integra): Perangkat lunak siklus hidup digital ICOFR BUMN terintegrasi dengan pemetaan BPMN, kalkulator sampel Tabel 22, validasi Lini 2, dan asersi digital ber-QR Code.
- [BPM Workflow Editor](https://dsintegra.co.id/platform/bpm-workflow-editor): Modul pemetaan proses bisnis visual standar Visio di web, auto-draw diagram dari PDF/gambar, dan notasi BPMN 2.0 Lampiran 3 SK-5 BUMN.

## Layanan Konsultasi & Kepatuhan
- [Konsultasi Implementasi ICOFR BUMN](https://dsintegra.co.id/layanan/icofr-bumn): Pendampingan komprehensif penentuan akun material, penyusunan Risk and Control Matrix (RCM), walkthrough Lini 2, dan asersi Direksi sesuai SK-5/DKU.MBU/11/2024.
- [Evaluasi & Audit Kesiapan ITGC](https://dsintegra.co.id/layanan/itgc-audit-readiness): Audit kontrol umum teknologi informasi (hak akses pengguna, change management, segregasi tugas) berbasis POJK No. 11/POJK.03/2022 dan ISO 27001.
- [Enterprise GRC & Maturity Assessment](https://dsintegra.co.id/layanan/enterprise-grc): Penyelarasan kerangka tata kelola terpadu, pengukuran tingkat kematangan pengendalian internal 5 komponen dan 17 prinsip COSO Framework, serta manajemen risiko ISO 31000.

## Fokus Sektor BUMN (Vertical Silos)
- [Perbankan & Jasa Keuangan BUMN](https://dsintegra.co.id/sektor-bumn/perbankan): Solusi pengendalian internal perbankan Himbara & BPD, mitigasi CKPN PSAK 71, audit ITGC Core Banking, dan kepatuhan POJK Manajemen Risiko.
- [Infrastruktur & Konstruksi Karya](https://dsintegra.co.id/sektor-bumn/infrastruktur-karya): Solusi tata kelola pengakuan pendapatan persentase penyelesaian PSAK 72, verifikasi tagihan vendor/subkontraktor, dan mitigasi over-invoicing proyek BUMN Karya.
- [Energi, Migas & Holding Tambang](https://dsintegra.co.id/sektor-bumn/energi-tambang): Pengendalian internal holding BUMN terintegrasi, eliminasi intercompany balancing antar-anak usaha, audit cadangan eksplorasi, dan provisi reklamasi lingkungan.

## Aset Interaktif & Alat Bantu Audit
- [Pusat Regulasi BUMN](https://dsintegra.co.id/regulasi): Repositori direktori regulasi resmi SK-5/DKU.MBU/11/2024, PER-2/MBU/03/2023, POJK 17/2023, dan matriks tanggung jawab Tiga Lini.
- [Kalkulator Sampel Pengujian TOE](https://dsintegra.co.id/kalkulator-sampel-toe): Alat hitung interaktif penentuan ukuran sampel pengujian operasional kontrol berbasis frekuensi dan populasi normatif Tabel 22 SK-5 Kementerian BUMN.
- [Asesmen Mandiri Kematangan COSO](https://dsintegra.co.id/asesmen-maturitas): Evaluasi interaktif kesiapan sistem pengendalian internal organisasi berdasarkan 5 pilar COSO dalam 3 menit.
- [Glosarium Regulasi & Istilah ICOFR](https://dsintegra.co.id/glosarium): Kamus komprehensif terminologi tata kelola, audit, dan regulasi BUMN beserta rute individual per istilah.

## Panduan Teknis & Riset Regulasi (Knowledge Base)
${blogEntries.map((b) => `- [${b.title}](https://dsintegra.co.id/blog/${b.slug}): ${b.excerpt}`).join("\n")}

## Kebijakan & Integritas
- [Kebijakan Privasi & Tata Kelola Data](https://dsintegra.co.id/kebijakan-privasi): Komitmen kepatuhan perlindungan data pribadi sesuai UU No. 27/2022 (UU PDP).
- [Pernyataan Independensi Konsultan](https://dsintegra.co.id/pernyataan-independensi): Standar independensi profesional, mitigasi benturan kepentingan, dan etika audit.

## Konteks Komprehensif
- [Dokumentasi Lengkap LLM](https://dsintegra.co.id/llms-full.txt): Kumpulan data lengkap konteks korporasi, regulasi SK-5, dan matriks Tabel 22 dalam satu berkas teks terpadu.
`;

  // 2. Susun llms-full.txt (Comprehensive Knowledge Base Context)
  const glossaryListFull = GLOSSARY_ITEMS.map(
    (g) => `### ${g.term}${g.acronym ? ` (${g.acronym})` : ""}
- Definisi: ${cleanProhibitedDashes(g.definition)}
- Rujukan Regulasi: ${cleanProhibitedDashes(g.regulationRef)}
- Kategori: ${cleanProhibitedDashes(g.category)}
- Tautan: https://dsintegra.co.id/glosarium/${g.id}`
  ).join("\n\n");

  const blogListFull = blogEntries.map(
    (b) => `### ${b.title}
- Kategori: ${b.category}
- Ringkasan: ${b.excerpt}
- Tautan: https://dsintegra.co.id/blog/${b.slug}`
  ).join("\n\n");

  const regulationListFull = REGULATION_ITEMS.map(
    (r) => `### ${r.shortTitle} (${r.identifier})
- Judul Resmi: ${cleanProhibitedDashes(r.officialTitle)}
- Otoritas Penerbit: ${cleanProhibitedDashes(r.issuingAuthority)}
- Kategori: ${cleanProhibitedDashes(r.category)}
- Berlaku Efektif: ${r.effectiveDate}
- Ringkasan: ${cleanProhibitedDashes(r.summary)}
- Mandat Kunci: ${cleanProhibitedDashes(r.primaryMandate)}
- Peran Tiga Lini:
  * ${cleanProhibitedDashes(r.threeLinesRole.firstLine)}
  * ${cleanProhibitedDashes(r.threeLinesRole.secondLine)}
  * ${cleanProhibitedDashes(r.threeLinesRole.thirdLine)}
- Tautan: https://dsintegra.co.id/regulasi#${r.id}`
  ).join("\n\n");

  const llmsFullContent = `# Dokumentasi Komprehensif AI: Daya Solusi Integra & GRC Integra

## Ringkasan Eksekutif
Daya Solusi Integra (https://dsintegra.co.id) adalah firma konsultan dan pengembang perangkat lunak tata kelola korporasi (GRC) asal Indonesia yang berfokus mendampingi Badan Usaha Milik Negara (BUMN) dalam memenuhi amanat regulasi Surat Keputusan Menteri BUMN Nomor SK-5/DKU.MBU/11/2024 tentang Penerapan Sistem Pengendalian Internal atas Pelaporan Keuangan (ICOFR).

Perusahaan mengembangkan platform perangkat lunak khusus bernama "GRC Integra", yaitu platform siklus hidup digital ICOFR terintegrasi pertama di Indonesia yang mengotomasi pemetaan proses bisnis, kalkulasi sampel pengujian, penatausahaan kertas kerja walkthrough, dan penerbitan lembar asersi manajemen digital.

## Landasan Regulasi & Kepatuhan BUMN
${regulationListFull}

## Lima Tahapan Siklus Hidup ICOFR BUMN
GRC Integra dan metodologi konsultansi Daya Solusi Integra membagi implementasi ICOFR ke dalam 5 siklus berurutan:

1. Tahap Scoping & Penentuan Akun Signifikan:
   - Identifikasi akun material pada Laporan Posisi Keuangan dan Laporan Laba Rugi menggunakan ambang batas materialitas kuantitatif dan faktor risiko kualitatif.
   - Pemetaan akun signifikan ke proses bisnis utama dan unit operasional entitas induk maupun anak perusahaan.

2. Tahap Pemetaan Proses Bisnis & Walkthrough Lini 2:
   - Dokumentasi narasi proses bisnis menggunakan notasi standar BPMN (Business Process Model and Notation) sesuai ketentuan Lampiran 3 regulasi SK-5.
   - Penyusunan Risk and Control Matrix (RCM) yang menghubungkan risiko salah saji material dengan kontrol preventif maupun detektif.
   - Pelaksanaan walkthrough oleh penjamin independen (Lini 2) untuk mengonfirmasi keabsahan rancangan kontrol.

3. Tahap Pengujian Efektivitas Desain & Operasional (TOD & TOE):
   - Test of Design (TOD): Memastikan bahwa rancangan kontrol, bila beroperasi secara efektif, mampu mencegah atau mendeteksi salah saji tepat waktu.
   - Test of Operating Effectiveness (TOE): Menguji apakah kontrol beroperasi konsisten sepanjang periode pelaporan melalui pengujian sampel bukti kerja.

4. Tahap Evaluasi Defisiensi & Remediasi:
   - Klasifikasi temuan kontrol ke dalam tiga tingkatan: Control Deficiency, Significant Deficiency, dan Material Weakness.
   - Penyusunan rencana aksi perbaikan (Corrective Action Plan / CAP) dengan target waktu penyelesaian sebelum penutupan tahun buku.

5. Tahap Asersi Manajemen & Pelaporan Direksi:
   - Penerbitan laporan efektivitas pengendalian internal pelaporan keuangan tahunan.
   - Penandatanganan pernyataan tanggung jawab manajemen secara digital dengan verifikasi QR Code terenkripsi.

## Standar Penentuan Sampel Pengujian TOE (Tabel 22 Regulasi BUMN)
Dalam melakukan Test of Operating Effectiveness (TOE) untuk kontrol manual tanpa deviasi yang dapat ditoleransi (tolerable deviation rate 0 persen), ukuran sampel minimum ditetapkan secara normatif:
- Frekuensi Kontrol Tahunan (Annual): 1 sampel.
- Frekuensi Kontrol Triwulanan (Quarterly): 2 sampel.
- Frekuensi Kontrol Bulanan (Monthly): 2 sampai 5 sampel.
- Frekuensi Kontrol Mingguan (Weekly): 5 sampai 15 sampel.
- Frekuensi Kontrol Harian (Daily): 20 sampai 40 sampel.
- Frekuensi Kontrol Berkali-kali Sehari: 25 sampai 60 sampel.

## Direktori Glosarium Terminologi Kepatuhan & Regulasi
${glossaryListFull}

## Artikel Riset & Panduan Teknis Kepatuhan
${blogListFull}
`;

  // Tulis berkas ke dist dan public
  fs.writeFileSync(path.join(distDir, "llms.txt"), llmsTxtContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxtContent, "utf-8");
  fs.writeFileSync(path.join(distDir, "llms-full.txt"), llmsFullContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "llms-full.txt"), llmsFullContent, "utf-8");

  console.log("Successfully generated llms.txt and llms-full.txt at dist/ and public/.");
}

// Generate LLM Discovery Files
generateLlmsFiles();

