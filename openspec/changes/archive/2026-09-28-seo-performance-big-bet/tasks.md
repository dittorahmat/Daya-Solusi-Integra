# Tasks

## 1. Route Code-Splitting

- [x] 1.1 Kelompokkan 20 page imports `src/App.tsx` menjadi `React.lazy` per grup rute dengan batas `Suspense` skeleton tema, dan verifikasi `tsc --noEmit` lolos + navigasi home-to-subpage tanpa layar putih/error console.
- [x] 1.2 Tambahkan `manualChunks` (`vendor-react`, `vendor-markdown`, `vendor-motion`) di `vite.config.ts`, dan verifikasi output build: `react-markdown`/`motion` tidak ada di chunk entri awal dan ukuran gzip chunk awal tercatat < 300KB.
- [x] 1.3 Verifikasi hidrasi prerender per grup rute (layanan, platform, glosarium, blog, kalkulator/asesmen, legal): snapshot 200, hidrasi tanpa error console, interaksi (navigasi/advisor) berfungsi.

## 2. Local Image Pipeline

- [x] 2.1 Tambahkan `sharp` devDependency + skrip `scripts/seo/fetch-images.ts` yang mengunduh 8 foto Unsplash unik dan menghasilkan varian WebP + JPEG (640/960/1200) ke `public/images/blog/`, dan verifikasi seluruh berkas ada di `dist/` pasca-build.
- [x] 2.2 Alihkan `coverImage` 12 front-matter + entri `seoMeta.ts` ke URL lokal `/images/blog/*`, dan verifikasi `grep -r "images.unsplash.com" src/content src/utils` kosong + sitemap `image:image` artikel menunjuk URL lokal berstatus 200.
- [x] 2.3 Terapkan `srcset`/`sizes` (+ WebP via `<picture>` atau srcset bertipe) di `BlogList`, `BlogArticle`, `BlogPreviewSection` dengan `width`/`height`/`alt`/`loading`/`fetchpriority` dipertahankan, dan verifikasi tidak ada request Unsplash di Network + CLS gambar 0.

## 3. Guards + Integrasi Akhir

- [x] 3.1 Tambahkan guard build anti-Unsplash (gagal bila referensi eksternal tersisa) dan verifikasi `npm run build` hijau termasuk guards existing (slug, link, sitemap).
- [x] 3.2 Verifikasi akhir: `tsc` bersih, perbandingan ukuran chunk sebelum/sesudah terdokumentasi di ringkasan change, dan smoke-test server produksi (gzip + immutable + hidrasi) lolos.
