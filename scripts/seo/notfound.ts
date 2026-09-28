import fs from "fs";
import path from "path";
import { RouteMeta } from "../../src/utils/seoMeta.js";
import { distDir, templateHtml } from "./paths.js";
import { upsertHeadTag } from "./xml.js";

/**
 * Snapshot 404 khusus: disajikan server dengan status 404 untuk path tak dikenal.
 * Sengaja TIDAK masuk allRoutes agar tidak ikut sitemap, feed, maupun IndexNow.
 * Tanpa JSON-LD indexable dan memakai robots noindex.
 */
export function generateNotFoundSnapshot(): void {
  const notFoundMeta: RouteMeta = {
    title: "Halaman Tidak Ditemukan | Daya Solusi Integra",
    description: "Halaman yang Anda cari tidak tersedia di portal Daya Solusi Integra. Kembali ke beranda, glosarium regulasi, atau gunakan kalkulator TOE Tabel 22.",
    canonical: "https://dsintegra.co.id/404",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Halaman Tidak Ditemukan | Daya Solusi Integra",
    ogDescription: "Tautan yang Anda buka sudah dipindahkan atau tidak tersedia. Temukan kembali panduan ICOFR BUMN melalui beranda Daya Solusi Integra."
  };

  const targetDir = path.join(distDir, "404");
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let notFoundHtml = templateHtml;
  notFoundHtml = notFoundHtml.replace(/<title>.*?<\/title>/i, `<title>${notFoundMeta.title}</title>`);
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="title"\s+content=".*?"\s*\/?>/i,
    `<meta name="title" content="${notFoundMeta.title}" />`
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${notFoundMeta.description}" />`
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
    `<meta name="robots" content="noindex, follow" />`
  );
  notFoundHtml = notFoundHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${notFoundMeta.canonical}" />`
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${notFoundMeta.ogTitle}" />`
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${notFoundMeta.ogDescription}" />`
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${notFoundMeta.canonical}" />`
  );
  notFoundHtml = upsertHeadTag(
    notFoundHtml,
    /<meta\s+name="theme-color"\s+content=".*?"\s*\/?>/i,
    `<meta name="theme-color" content="#0b0f19" />`
  );

  // Hapus seluruh JSON-LD indexable dari snapshot 404
  notFoundHtml = notFoundHtml.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, "");

  const notFoundBody = `
    <header style="padding: 1.5rem; border-bottom: 1px solid #1e293b;">
      <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem;">
        <a href="/">Beranda</a> &gt; <span>Halaman Tidak Ditemukan</span>
      </nav>
    </header>
    <main style="max-width: 900px; margin: 2rem auto; padding: 0 1.5rem; text-align: center;">
      <p>Kode Respons: 404</p>
      <h1>Halaman Tidak Ditemukan</h1>
      <p style="font-size: 1.125rem; line-height: 1.7; color: #94a3b8;">Tautan yang Anda buka sudah dipindahkan, salah ketik, atau tidak lagi tersedia di portal Daya Solusi Integra.</p>
      <p><a href="/">Kembali ke Beranda</a> | <a href="/glosarium">Glosarium Regulasi</a> | <a href="/kalkulator-sampel-toe">Kalkulator Sampel TOE</a></p>
    </main>
  `;
  notFoundHtml = notFoundHtml.replace(
    /<div\s+id="root">\s*<\/div>/i,
    `<div id="root">\n${notFoundBody}\n    </div>`
  );

  fs.writeFileSync(path.join(targetDir, "index.html"), notFoundHtml, "utf-8");
  console.log("Generated dedicated 404 snapshot at dist/404/index.html (noindex, no JSON-LD).");
}