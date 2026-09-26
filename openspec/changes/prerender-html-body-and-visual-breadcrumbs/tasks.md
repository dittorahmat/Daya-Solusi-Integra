## 1. Visual Breadcrumbs Component

- [x] 1.1 Buat komponen reusable `src/components/Breadcrumbs.tsx` dengan dukungan keyboard/accessible styling, ikon pemisah ChevronRight, dan zero em-dash. Verifikasi berkas TypeScript valid dan tanpa error linting.
- [x] 1.2 Integrasikan `Breadcrumbs` ke subhalaman layanan dan produk (`IcofrBumnPage.tsx`, `ItgcAuditReadinessPage.tsx`, `EnterpriseGrcPage.tsx`, `PlatformProductPage.tsx`). Verifikasi rantai breadcrumb muncul di bagian atas kontainer konten.
- [x] 1.3 Integrasikan `Breadcrumbs` ke subhalaman glosarium dan kalkulator (`GlossaryPage.tsx`, `GlossaryDetailPage.tsx`, `ToeCalculatorPage.tsx`). Verifikasi rute bertingkat glosarium (`Beranda > Glosarium > [Istilah]`) tampil konsisten.
- [x] 1.4 Integrasikan `Breadcrumbs` ke halaman kebijakan dan artikel blog (`PrivacyPolicyPage.tsx`, `IndependenceStatementPage.tsx`, `BlogPage.tsx`). Verifikasi hierarki navigasi terpasang dengan rapi.

## 2. Static HTML Semantics Prerendering

- [x] 2.1 Buat helper generator markup HTML semantik di `scripts/generate-static-routes.ts` untuk menghasilkan struktur H1, lead paragraph, breadcrumb text, daftar kapabilitas/takeaways, dan FAQ list. Verifikasi output string HTML valid dan bebas em-dash/en-dash.
- [x] 2.2 Hubungkan generator konten semantik dengan loop rute statis di `scripts/generate-static-routes.ts` sehingga me-replace `<div id="root"></div>` menjadi `<div id="root">[semantic html content]</div>` pada setiap berkas `dist/**/index.html`.
- [x] 2.3 Perluas skrip untuk membaca dan menginjeksi isi artikel blog markdown (`src/content/blog/*.md`) ke dalam prerender HTML rute blog masing-masing. Verifikasi file `dist/blog/*/index.html` memuat konten artikel lengkap.

## 3. Verifikasi & Pre-flight Audit

- [x] 3.1 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan seluruh kode TypeScript lolos tanpa error (Exit Code 0).
- [x] 3.2 Jalankan `npm run build` dan verifikasi seluruh rute statis di direktori `dist/` menghasilkan berkas `index.html` dengan `<div id="root">` yang terisi konten semantik lengkap.
- [x] 3.3 Jalankan audit kepatuhan anti-slop: `Select-String -Path "src\**\*.tsx", "src\**\*.ts", "scripts\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"` dan pastikan 0 hasil pelanggaran.
