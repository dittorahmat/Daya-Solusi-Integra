# Tasks

## 1. Content Freshness Loop

- [x] 1.1 Buat `scripts/seo/freshness.ts` + script `seo:freshness` yang melaporkan status segar/basi/kritis per artikel (published, modified, umur hari), dan verifikasi keluar 0 dengan tabel lengkap 14 artikel.
- [x] 1.2 Tambahkan badge "Diperbarui" di `BlogArticle` (field `updated` front-matter opsional) dan snapshot prerender (via `getBlogArticleMeta`), hanya bila modified > published, dan verifikasi konsistensi tanggal UI vs JSON-LD.

## 2. PR Media Kit

- [x] 2.1 Buat `MediaKitPage.tsx` (boilerplate, logo pack existing, 4 statistik ber-anchor, aturan brand, kontak) + rute lazy `App.tsx` + `seoMeta.ts` + `sitemap.xml` (+ `feeds.ts` bila hardcode), dan verifikasi `/media-kit` 200 + guards hijau.
- [x] 2.2 Verifikasi akhir: `tsc`, full build semua guards hijau, smoke-test server (media-kit + 1 artikel), dan ringkasan perbandingan sebelum/sesudah.
