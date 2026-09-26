## 1. Global Structured Data (BreadcrumbList & Speakable)

- [x] 1.1 Perbarui generator `scripts/generate-static-routes.ts` pada fungsi `buildJsonLdForRoute` untuk menyusun simpul `@type: BreadcrumbList` berposisi hierarkis dan `@type: WebPage` dengan properti `speakable` ke dalam `@graph`, lalu verifikasi script berjalan tanpa sintaks error.

## 2. Audit Findings Directory Component Implementation

- [x] 2.1 Buat komponen `src/components/pages/AuditFindingsPage.tsx` yang memuat katalog 8 temuan audit defisiensi BUMN terpopuler (Akar Masalah, Risiko Finansial, Rekomendasi Corrective Action Plan SK-5), filter kategori interaktif, skema terstruktur `CollectionPage` dan `ItemList`, dan verifikasi berkas terbuat tanpa error.
- [x] 2.2 Tambahkan data FAQ temuan audit pada `src/data/faqData.ts` untuk rute `/temuan-audit-icofr` (kriteria temuan material weakness vs significant deficiency, batas waktu penyelesaian CAP, dan peran Lini 2/SPI) dan verifikasi tipe data valid.

## 3. Route Integration & Discovery Sync

- [x] 3.1 Daftarkan rute `/temuan-audit-icofr` pada `src/App.tsx`, `src/utils/seoMeta.ts` (`ROUTE_METADATA_MAP`), dan `src/components/Footer.tsx`.
- [x] 3.2 Daftarkan URL resmi `/temuan-audit-icofr` pada `public/sitemap.xml` dengan prioritas 0.9.
- [x] 3.3 Tambahkan blok SSG snapshot prerender untuk `/temuan-audit-icofr` di `scripts/generate-static-routes.ts`.
- [x] 3.4 Perbarui template `llms.txt` dan `llms-full.txt` di `scripts/generate-static-routes.ts` untuk menyertakan direktori temuan audit defisiensi BUMN.

## 4. Quality Audit & Build Verification

- [x] 4.1 Jalankan scan larangan visual (`Select-String -Path "src\**\*.tsx", "src\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"`) dan verifikasi 0 temuan.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan verifikasi exit code 0.
- [x] 4.3 Jalankan `npm run build` dan verifikasi bundler serta generator SSG menghasilkan 44 rute statis HTML dengan simpul `BreadcrumbList` di dalam JSON-LD tanpa error.
