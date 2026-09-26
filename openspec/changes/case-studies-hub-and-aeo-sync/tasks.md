## 1. Case Studies Component Implementation

- [x] 1.1 Buat komponen `src/components/pages/CaseStudiesPage.tsx` yang memuat scoreboard metrik agregat, daftar 3 studi kasus sektoral BUMN (Holding BUMN, Perbankan, Infrastruktur Karya), filter sektor interaktif, skema terstruktur `CollectionPage` dan `ItemList`, dan intake CTA form, lalu verifikasi berkas terbuat tanpa sintaks error.
- [x] 1.2 Tambahkan data FAQ studi kasus pada `src/data/faqData.ts` untuk rute `/studi-kasus` (kerahasiaan data/NDA, pengukuran ROI, integrasi dengan auditor eksternal) dan verifikasi tipe data valid.

## 2. Route Integration & SSG Prerender

- [x] 2.1 Daftarkan rute `/studi-kasus` pada `src/App.tsx`, `src/utils/seoMeta.ts` (`ROUTE_METADATA_MAP`), dan `src/components/Footer.tsx`.
- [x] 2.2 Daftarkan entri URL resmi `/studi-kasus` pada `public/sitemap.xml` dengan prioritas 0.9.
- [x] 2.3 Tambahkan blok SSG snapshot prerender untuk `/studi-kasus` di `scripts/generate-static-routes.ts` dan verifikasi skrip mencakup konten teks penuh.

## 3. AEO & LLM Discovery Sync

- [x] 3.1 Perbarui `public/llms.txt` dengan menyertakan rute-rute baru (`/kualifikasi-vendor`, `/penulis/humbul-kristiawan`, `/toolkit-regulasi`, dan `/studi-kasus`) beserta deskripsi ringkasnya.
- [x] 3.2 Perbarui `public/llms-full.txt` dengan menyertakan rincian lengkap kualifikasi pengadaan, kredensial pakar, materi kertas kerja SK-5, dan ringkasan studi kasus holding BUMN.

## 4. Quality Audit & Build Verification

- [x] 4.1 Jalankan scan larangan visual (`Select-String -Path "src\**\*.tsx", "src\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"`) dan verifikasi 0 temuan.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan verifikasi exit code 0.
- [x] 4.3 Jalankan `npm run build` dan verifikasi bundler serta generator SSG menghasilkan 43 rute statis HTML tanpa error.
