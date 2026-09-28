# Proposal

## Why

Fondasi technical SEO sudah kuat (prerender 54 URL, sitemap, IndexNow, JSON-LD, OG valid), tetapi audit menemukan 5 celah murah yang menahan hasil: URL tak dikenal dikembalikan sebagai homepage status 200 (soft-404 massal), tanggal schema hardcode sehingga sinyal freshness mati, head tag prerender belum lengkap, schema belum membuka sitelinks searchbox, dan hanya 12 dari 54 URL sitemap yang punya image. Menutup kelimanya memberi dampak crawl-budget, CTR, dan sitasi maksimal dengan effort minimal sebelum ekspansi konten jangka panjang.

## What Changes

- Menyediakan halaman 404 khusus (SPA + berkas prerender `dist/404/index.html`) dengan `noindex`, tautan navigasi kembali, dan server mengembalikan status 404 untuk path tak dikenal (kecuali `/api` yang tetap JSON 404).
- Menjadikan tanggal dinamis: `datePublished` dari front-matter markdown, `dateModified`/`lastmod` dari mtime berkas, berlaku untuk JSON-LD artikel, `<time>` semantik, dan `sitemap.xml`.
- Melengkapi head hygiene prerender: `theme-color`, `og:image:alt` per rute, plus `article:published_time`/`article:modified_time` untuk rute artikel (`twitter:site` dilewati: perusahaan belum punya akun X resmi).
- Menambahkan `WebSite potentialAction SearchAction` dan `Organization logo` sebagai `ImageObject` eksplisit untuk sitelinks searchbox dan Knowledge Panel.
- Memperluas image sitemap dari 12 ke 54 URL dengan memetakan OG image per silo (`og-image`, `og-layanan`, `og-platform`, `og-toolkit`) untuk halaman non-blog.

## Capabilities

### New Capabilities
- `seo-404-handling`: Halaman 404 khusus dengan `noindex`, status HTTP 404 dari server untuk path tak dikenal, dan pengecualian sitemap/feed.

### Modified Capabilities
- `static-prerender-generator`: Requirement berubah (prerender wajib menulis tanggal dinamis, head hygiene lengkap, dan image sitemap penuh; drift tanggal/sitemap ditolak seperti drift slug).
- `dynamic-seo-meta`: Requirement berubah (meta per rute wajib mencakup theme-color, twitter:site, article times, dan og:image:alt).
- `rich-structured-schema`: Requirement berubah (graph wajib mencakup SearchAction pada WebSite dan logo Organization sebagai ImageObject; halaman 404 wajib tanpa schema indexable).

## Impact

- File baru: halaman 404 (`src/components/pages/NotFoundPage.tsx` atau setara), `dist/404/index.html` via prerender.
- File diubah: `server.ts` (status 404 fallback), `scripts/generate-static-routes.ts` (tanggal dinamis, head hygiene, image sitemap, validasi), `src/utils/seoMeta.ts` (pemetaan OG per silo bila perlu), `index.html` (SearchAction + logo), `src/App.tsx` (rute 404), `public/sitemap.xml` (42 entri image baru + lastmod dinamis).
- Tidak ada library baru, tidak ada perubahan visual halaman valid, tidak ada perubahan routing valid.
- Verifikasi: curl status 404 untuk URL ngawur, Rich Results Test (SearchAction/logo/dates), validator image sitemap, build hijau tanpa drift.
