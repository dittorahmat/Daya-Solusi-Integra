# Tasks

## 1. Schema hygiene (logo + dedup JSON-LD)

- [x] 1.1 Ganti `ProfessionalService.image` di `index.html` dari `vite.svg` ke aset brand resmi dan verifikasi via Rich Results Test homepage menampilkan image brand
- [x] 1.2 Hapus injeksi `application/ld+json` client-side di `BlogPage.tsx` (pertahankan update title/meta) dan verifikasi tidak ada duplikat `@id` setelah navigasi SPA penuh
- [x] 1.3 Audit dan hapus injeksi JSON-LD client-side duplikat di 6 halaman lain (BumnProcurement, CaseStudies, AuthorProfile, KakTor, AuditFindings, RegulatoryToolkit) dan verifikasi tiap halaman lolos Rich Results Test tanpa entitas ganda

## 2. Sumber slug tunggal feed dan sitemap

- [x] 2.1 Samakan 2 slug drift (`efektivitas-icofr-bumn`, `iso-31000-bumn`) antara feed dan sitemap ke slug front-matter markdown dan verifikasi tidak ada URL feed yang missing dari sitemap
- [x] 2.2 Tambahkan validasi silang slug feed vs sitemap di `generate-static-routes.ts` dengan peringatan eksplisit per slug dan verifikasi build mencetak peringatan saat slug uji disengaja didriftkan lalu hapus slug uji

## 3. Performa gambar (LCP/CLS)

- [x] 3.1 Tambahkan dimensi eksplisit + `loading="lazy"` + `decoding="async"` pada gambar konten blog dan verifikasi PageSpeed tidak lagi melaporkan missing width/height
- [x] 3.2 Terapkan `fetchpriority="high"` (atau preload) pada gambar hero pertama tiap template halaman dan verifikasi skor LCP mobile membaik vs baseline sebelum perubahan
- [x] 3.3 Verifikasi seluruh URL gambar Unsplash memakai parameter format modern dan batas lebar eksplisit dan verifikasi response memakai content-type gambar modern

## 4. CTR tune-up 6 halaman uang + OG per silo

- [x] 4.1 Tulis ulang title/description 6 halaman uang di `ROUTE_METADATA_MAP` sesuai batas tampil SERP dengan keyword di awal dan verifikasi tiap title/deskripsi unik dan dalam batas panjang
- [x] 4.2 Sediakan 3 varian OG image per silo (layanan, platform, toolkit) dengan dimensi 1200x630, petakan di `ROUTE_METADATA_MAP`, dan verifikasi pratinjau berbagi tiap silo menampilkan gambar berbeda

## 5. Verifikasi rilis

- [x] 5.1 Jalankan `npm run build` dan verifikasi 0 peringatan drift slug serta log IndexNow mencatat status 200/202
- [x] 5.2 Jalankan `npm run lint` dan verifikasi lulus tanpa error serta tidak ada em-dash pada file yang diubah
- [x] 5.3 Validasi akhir Rich Results Test + PageSpeed mobile + konsistensi feed vs sitemap dan verifikasi semua cek hijau sebelum deploy
