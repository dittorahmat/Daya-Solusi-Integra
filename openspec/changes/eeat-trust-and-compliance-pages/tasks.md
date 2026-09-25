## 1. Pembangunan Halaman Legal & Independensi

- [x] 1.1 Buat komponen `src/components/pages/PrivacyPolicyPage.tsx` yang memuat klausul perlindungan data pribadi sesuai UU PDP No. 27/2022 tanpa tanda pisah em-dash, lalu verifikasi perenderan komponen valid.
- [x] 1.2 Buat komponen `src/components/pages/IndependenceStatementPage.tsx` yang memuat piagam etika profesional konsultan independen tanpa tanda pisah em-dash, lalu verifikasi perenderan komponen valid.
- [x] 1.3 Integrasikan rute `/kebijakan-privasi` dan `/pernyataan-independensi` di `src/App.tsx` serta perbarui tautan footer di `src/components/Footer.tsx`, lalu verifikasi navigasi rute berfungsi mulus.

## 2. Integrasi SEO, Metadata & SSG Prerendering

- [x] 2.1 Daftarkan rute `/kebijakan-privasi` dan `/pernyataan-independensi` ke dalam `src/utils/seoMeta.ts` dengan metadata dan canonical link resmi.
- [x] 2.2 Daftarkan kedua URL resmi ke dalam `public/sitemap.xml` dan cantumkan dalam `public/llms.txt`, lalu verifikasi struktur XML dan Markdown.

## 3. Verifikasi & Pre-flight Check

- [x] 3.1 Jalankan pemindaian anti-slop pada kode baru untuk memastikan nol kemunculan tanda em-dash (`—`/`–`), `Sparkles`, atau `animate-pulse` kosmetik.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi proses build dan generasi rute statis sukses 100% (Exit code 0).
