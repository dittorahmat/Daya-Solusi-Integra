import fs from "fs";
import path from "path";
import { RouteMeta, ROUTE_METADATA_MAP } from "../../src/utils/seoMeta.js";
import { ROUTE_FAQS } from "../../src/data/faqData.js";
import { ROUTE_HOWTO } from "../../src/data/howtoData.js";
import { GLOSSARY_ITEMS } from "../../src/data/glossaryData.js";
import { REGULATION_ITEMS } from "../../src/data/regulationData.js";
import { SECTOR_DATA_MAP } from "../../src/data/sectorsData.js";
import { blogContentDir } from "./paths.js";
import { parseBlogFrontMatter, getBlogArticleMeta } from "./frontmatter.js";

/**
 * Membangun skema JSON-LD terisolasi dan spesifik per jenis rute
 */
export function buildJsonLdForRoute(routePath: string, meta: RouteMeta): string {
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
      },
      {
        "@type": "WebPage",
        "name": "Kualifikasi Vendor & Kesiapan Tender BUMN",
        "url": "https://dsintegra.co.id/kualifikasi-vendor"
      },
      {
        "@type": "WebPage",
        "name": "Toolkit & Kertas Kerja Regulasi SK-5",
        "url": "https://dsintegra.co.id/toolkit-regulasi"
      },
      {
        "@type": "WebPage",
        "name": "Panduan KAK & TOR Pengadaan BUMN",
        "url": "https://dsintegra.co.id/panduan-kak-tor-icofr"
      },
      {
        "@type": "WebPage",
        "name": "Studi Kasus & Benchmark BUMN",
        "url": "https://dsintegra.co.id/studi-kasus"
      },
      {
        "@type": "WebPage",
        "name": "Katalog Temuan Audit & Defisiensi ICOFR",
        "url": "https://dsintegra.co.id/temuan-audit-icofr"
      },
      {
        "@type": "WebPage",
        "name": "Profil Perusahaan Daya Solusi Integra",
        "url": "https://dsintegra.co.id/tentang-kami"
      }
    ]
  });

  // 3. WebPage dengan SpeakableSpecification untuk Answer Engines (AEO)
  graphs.push({
    "@type": "WebPage",
    "@id": `${meta.canonical}#webpage`,
    "url": meta.canonical,
    "name": meta.title,
    "description": meta.description,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://dsintegra.co.id/#website"
    },
    "breadcrumb": {
      "@id": `${meta.canonical}#breadcrumb`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        ".article-lead",
        ".executive-summary",
        "main p:first-of-type"
      ]
    }
  });

  // 3. Skema khusus berdasarkan tipe halaman
  if (routePath.startsWith("/blog/")) {
    // Artikel blog: Gunakan TechArticle dengan tanggal dari front-matter dan git/mtime.
    // Alias non-artikel (misal /blog/penulis/...) tidak punya markdown: lewati TechArticle.
    const articleSlug = routePath.replace("/blog/", "");
    const articleMeta = getBlogArticleMeta(articleSlug);
    if (articleMeta) {
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
      "datePublished": articleMeta.published,
      "dateModified": articleMeta.modified,
      "proficiencyLevel": "Expert"
      });
    }
  } else if (routePath === "/penulis/humbul-kristiawan") {
    graphs.push({
      "@type": "ProfilePage",
      "@id": "https://dsintegra.co.id/penulis/humbul-kristiawan#profile",
      "name": "Profil Pakar & Penulis: Humbul Kristiawan",
      "url": "https://dsintegra.co.id/penulis/humbul-kristiawan",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://dsintegra.co.id/#author-humbul-kristiawan",
        "name": "Humbul Kristiawan",
        "honorificSuffix": "SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP",
        "jobTitle": "Principal Partner & Senior GRC Advisor",
        "worksFor": {
          "@type": "Organization",
          "name": "PT Daya Solusi Integra",
          "url": "https://dsintegra.co.id"
        },
        "image": "https://dsintegra.co.id/images/authors/humbul-kristiawan.jpg",
        "description": "Praktisi tata kelola korporasi, asersi pengendalian internal pelaporan keuangan (ICOFR), dan manajemen risiko terintegrasi dengan pengalaman lebih dari seperempat abad di sektor publik dan korporasi terkemuka Indonesia.",
        "sameAs": [
          "https://www.linkedin.com/in/humbul-kristiawan-b0621360/",
          "https://humbulkristiawan.com/about-humbul/",
          "https://humbulkristiawan.com/"
        ]
      }
    });
  } else if (routePath === "/toolkit-regulasi") {
    graphs.push({
      "@type": "DataCatalog",
      "@id": "https://dsintegra.co.id/toolkit-regulasi#catalog",
      "name": "Katalog Toolkit & Kertas Kerja Regulasi SK-5 BUMN",
      "url": "https://dsintegra.co.id/toolkit-regulasi",
      "description": meta.description,
      "publisher": {
        "@type": "Organization",
        "name": "PT Daya Solusi Integra",
        "url": "https://dsintegra.co.id/"
      }
    });
  } else if (routePath === "/panduan-kak-tor-icofr") {
    graphs.push({
      "@type": "TechArticle",
      "@id": "https://dsintegra.co.id/panduan-kak-tor-icofr#article",
      "headline": "Panduan Penyusunan KAK dan TOR Pengadaan Konsultan ICOFR serta Software GRC BUMN",
      "url": "https://dsintegra.co.id/panduan-kak-tor-icofr",
      "description": meta.description,
      "author": {
        "@type": "Person",
        "name": "Humbul Kristiawan",
        "jobTitle": "Lead GRC & IT Governance Specialist",
        "url": "https://dsintegra.co.id/penulis/humbul-kristiawan"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PT Daya Solusi Integra",
        "url": "https://dsintegra.co.id/"
      }
    });
    graphs.push({
      "@type": "HowTo",
      "@id": "https://dsintegra.co.id/panduan-kak-tor-icofr#howto",
      "name": "Cara Menyusun Dokumen KAK Pengadaan Pengendalian Internal BUMN",
      "description": "Tahapan penyusunan Kerangka Acuan Kerja pengadaan pendampingan kepatuhan SK-5/DKU.MBU/11/2024 dan software GRC.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Penetapan Ruang Lingkup dan Batasan Materialitas Akun",
          "text": "Menentukan cakupan entitas induk dan anak perusahaan serta akun laporan keuangan material."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Penyusunan Spesifikasi Teknis Perangkat Lunak GRC",
          "text": "Menetapkan kriteria sistem otomasi mencakup visualisasi BPMN, kalkulator Tabel 22, dan modul asersi digital."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Penetapan Standar Kompetensi Tenaga Ahli",
          "text": "Menyusun kriteria kualifikasi sertifikasi profesi tim pelaksana seperti CRMA, CISA, dan Akuntan Beregister."
        }
      ]
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
  } else if (routePath === "/blog") {
    // Daftar Artikel Blog: Gunakan ItemList Schema
    const blogFiles = fs.existsSync(blogContentDir)
      ? fs.readdirSync(blogContentDir).filter((file) => file.endsWith(".md"))
      : [];

    const itemListElements = blogFiles.map((file, idx) => {
      const filePath = path.join(blogContentDir, file);
      const rawContent = fs.readFileSync(filePath, "utf-8");
      const { data } = parseBlogFrontMatter(rawContent);
      const slug = data.slug || file.replace(".md", "");
      const title = data.title || "Artikel GRC BUMN";
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "name": title,
        "url": `https://dsintegra.co.id/blog/${slug}`
      };
    });

    graphs.push({
      "@type": "ItemList",
      "@id": "https://dsintegra.co.id/blog#itemlist",
      "name": "Katalog Artikel & Wawasan Regulasi GRC BUMN",
      "description": meta.description,
      "numberOfItems": itemListElements.length,
      "itemListElement": itemListElements
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
  } else if (routePath === "/tentang-kami") {
    graphs.push({
      "@type": "AboutPage",
      "@id": "https://dsintegra.co.id/tentang-kami#about",
      "name": "Profil PT Daya Solusi Integra",
      "url": "https://dsintegra.co.id/tentang-kami",
      "description": meta.description,
      "inLanguage": "id-ID",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://dsintegra.co.id/#website"
      },
      "mainEntity": {
        "@type": "ProfessionalService",
        "@id": "https://dsintegra.co.id/#organization",
        "name": "Daya Solusi Integra",
        "legalName": "PT Daya Solusi Integra",
        "url": "https://dsintegra.co.id/",
        "telephone": "+62 852 8599 5234",
        "email": "marketing@dsintegra.co.id",
        "image": "https://dsintegra.co.id/dsi-logo.png",
        "logo": "https://dsintegra.co.id/dsi-logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Indonesia Stock Exchange Tower 1, Level 3 Unit 304, Jl. Jend. Sudirman Kav. 52-53",
          "addressLocality": "Jakarta Selatan",
          "addressRegion": "DKI Jakarta",
          "postalCode": "12910",
          "addressCountry": "ID"
        },
        "founder": {
          "@type": "Person",
          "@id": "https://dsintegra.co.id/#author-humbul-kristiawan",
          "name": "Humbul Kristiawan, SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP",
          "jobTitle": "Principal Partner & Senior GRC Advisor",
          "url": "https://dsintegra.co.id/penulis/humbul-kristiawan"
        }
      }
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

  // 4. Skema HowTo untuk artikel panduan langkah demi langkah
  const routeHowto = ROUTE_HOWTO[routePath];
  if (routeHowto) {
    const howToGraph: Record<string, any> = {
      "@type": "HowTo",
      "@id": `${meta.canonical}#howto`,
      "name": routeHowto.name,
      "description": routeHowto.description,
      "step": routeHowto.steps.map((st) => ({
        "@type": "HowToStep",
        "position": st.position,
        "name": st.name,
        "text": st.text,
        "url": st.url || `${meta.canonical}#step-${st.position}`
      }))
    };

    if (routeHowto.totalTime) {
      howToGraph.totalTime = routeHowto.totalTime;
    }
    if (routeHowto.tool && routeHowto.tool.length > 0) {
      howToGraph.tool = routeHowto.tool.map((t) => ({
        "@type": "HowToTool",
        "name": t
      }));
    }
    if (routeHowto.supply && routeHowto.supply.length > 0) {
      howToGraph.supply = routeHowto.supply.map((s) => ({
        "@type": "HowToSupply",
        "name": s
      }));
    }

    graphs.push(howToGraph);
  }

  const jsonLdPayload = {
    "@context": "https://schema.org",
    "@graph": graphs
  };

  return `<script type="application/ld+json">\n    ${JSON.stringify(jsonLdPayload, null, 2).split("\n").join("\n    ")}\n    </script>`;
}