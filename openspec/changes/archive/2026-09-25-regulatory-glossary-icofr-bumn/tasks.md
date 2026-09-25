## 1. Penyusunan Data Istilah Kunci

- [x] 1.1 Buat berkas `src/data/glossaryData.ts` yang memuat daftar istilah esensial (TOD, TOE, ELC, TLC, Walkthrough Lini 2, Tabel 22, Defisiensi Signifikan, Material Weakness, ITGC, dsb.) lengkap dengan kategori, kutipan regulasi, dan tautan internal, lalu verifikasi ekspor data valid.

## 2. Pembangunan Komponen Halaman Glosarium

- [x] 2.1 Buat komponen `src/components/pages/GlossaryPage.tsx` dengan tata letak lapang, header editorial, filter kategori interaktif, pencarian kata kunci instan, dan tautan internal yang patuh pada `design-taste-frontend` (zero em-dash).
- [x] 2.2 Integrasikan rute `/glosarium` di `src/App.tsx`, perbarui navigasi `Header.tsx` dan `Footer.tsx` untuk menyertakan tautan Glosarium, lalu verifikasi navigasi rute berfungsi mulus.

## 3. Optimasi SEO & Pendaftaran Sitemap

- [x] 3.1 Daftarkan URL resmi `https://dsintegra.co.id/glosarium` ke dalam `public/sitemap.xml` dan cantumkan dalam `public/llms.txt`, lalu verifikasi struktur XML dan Markdown.

## 4. Verifikasi & Pre-flight Check

- [x] 4.1 Jalankan audit anti-slop untuk memastikan nol kemunculan tanda em-dash (`—`/`–`), `Sparkles`, atau `animate-pulse` kosmetik.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memastikan kompilasi TypeScript dan bundler Vite berhasil tanpa error (Exit code 0).
