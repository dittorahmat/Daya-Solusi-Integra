## 1. Fondasi Data & Struktur Tipe

- [x] 1.1 Buat modul data `src/data/regulationData.ts` yang mendefinisikan interface regulasi BUMN (nomor ketetapan, judul, ringkasan eksekutif, pasal kunci, implikasi Tiga Lini, dan FAQ) dan verifikasi data dapat diimpor tanpa kesalahan tipe.
- [x] 1.2 Perkaya data `src/data/glossaryData.ts` dengan atribut pendukung (contoh implementasi BUMN, tautan silang istilah terkait) dan verifikasi ekspor data berjalan baik.

## 2. Implementasi Komponen Halaman UI

- [x] 2.1 Buat komponen `src/components/pages/RegulatoryHubPage.tsx` untuk rute `/regulasi` yang memuat breadcrumb, direktori regulasi, filter, dan matriks Tiga Lini sesuai standar `design-taste-frontend` (tanpa em-dash, tanpa gradient blur) dan verifikasi antarmuka terender mulus.
- [x] 2.2 Buat komponen `src/components/pages/GlossaryDetailPage.tsx` untuk rute `/glosarium/:slug` yang menampilkan definisi komprehensif istilah, klausul regulasi, contoh praktis, dan navigasi istilah terkait, serta tangani kondisi fallback istilah tidak ditemukan.
- [x] 2.3 Daftarkan rute baru `/regulasi` dan `/glosarium/:slug` di `src/App.tsx`, serta perbarui kartu glosarium di `src/components/pages/GlossaryPage.tsx` agar memiliki tautan langsung ke rute detailnya `/glosarium/:slug`.
- [x] 2.4 Tambahkan tautan navigasi kontekstual ke `/regulasi` di `src/components/Navbar.tsx` dan `src/components/Footer.tsx`.

## 3. SEO Static Prerender & Structured Data Schema

- [x] 3.1 Perbarui metadata SEO di `src/utils/seoMeta.ts` untuk mendaftarkan entri rute `/regulasi` dan generator metadata dinamis untuk entitas glosarium `/glosarium/:slug`.
- [x] 3.2 Modifikasi `scripts/generate-static-routes.ts` untuk mengikutsertakan rute `/regulasi` dan seluruh slug glosarium ke dalam proses build SSG, lengkap dengan injeksi Schema `Legislation`, `DefinedTerm`, dan breadcrumb JSON-LD ke snapshot HTML fisik.

## 4. Pembaruan File Penemuan & Verifikasi Akhir

- [x] 4.1 Daftarkan URL `/regulasi` dan seluruh URL `/glosarium/[slug]` ke dalam `public/sitemap.xml`, `public/llms.txt`, dan `public/llms-full.txt`.
- [x] 4.2 Jalankan audit pra-penyelesaian: verifikasi zero em-dash/en-dash (`—`/`–`) dan zero `Sparkles`/`animate-pulse` dengan perintah pencarian regex, jalankan `npm run lint` (`tsc --noEmit`), dan jalankan `npm run build` serta verifikasi output static routes berhasil diproduksi tanpa error.
