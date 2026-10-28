# Tasks

## 1. Global CSS & Tailwind Theme Configuration

- [x] 1.1 Perbarui konfigurasi warna dasar dan utilitas kanvas di `tailwind.config.js` dan `src/index.css` agar default background adalah putih/slate-50 dan default text adalah slate-900, lalu verifikasi `npm run lint` berjalan tanpa error
- [x] 1.2 Konfigurasi variabel token BUMN Blue (`#0b4596`) dan Darkened BUMN Gold (`#9a7318`) untuk kontras tinggi di latar terang dan verifikasi nilai HEX terdaftar di Tailwind config

## 2. Navigasi & Frame Struktur Utama

- [x] 2.1 Refaktor `src/components/Navbar.tsx` menjadi format header putih bersih (`bg-white/95 border-b border-slate-200`) dengan link nav `text-slate-700 hover:text-[#0b4596]` dan verifikasi rendering responsif desktop & mobile
- [x] 2.2 Refaktor `src/components/Footer.tsx` agar selaras dengan tema korporat (latar slate-900 / dark corporate grounding atau light container ber-border tegas) dan verifikasi kontras seluruh teks copyright & tautan footer
- [x] 2.3 Refaktor layout wrapper di `src/App.tsx` untuk menghapus background dark ink navy (`bg-[#0b0f19]`) dan menggantinya dengan kanvas terang yang bersih

## 3. Komponen Halaman Utama & Card Containers

- [x] 3.1 Refaktor Section Hero di beranda agar judul Slate-900 tampil kontras dengan subjudul Slate-600 dan primary CTA BUMN Blue, serta verifikasi penghapusan efek glow/blur gelap
- [x] 3.2 Refaktor card containers pada fitur produk, layanan, dan pilar solusi ke format kartu putih solid ber-border `border-slate-200` dengan shadow halus, lalu verifikasi keterbacaan teks kartu
- [x] 3.3 Sesuaikan komponen interaktif (Kalkulator Sampel ToE, Matriks Regulasi, dan FAQ accordion) agar input form, tabel data, dan slider memiliki latar dan border yang kontras di tema terang

## 4. Template Artikel Blog & Glosarium

- [x] 4.1 Perbarui layout artikel blog di `src/pages/BlogDetail.tsx` (atau komponen rendering markdown) agar typography `prose` menggunakan warna teks Slate-900, heading berbobot tegas, dan kode/callout berlatar `bg-slate-100`
- [x] 4.2 Sesuaikan tampilan Sticky Table of Contents (TOC) dan drawer navigasi artikel agar berlatar putih dengan border pemisah `slate-200`
- [x] 4.3 Verifikasi keterbacaan halaman Glosarium Regulasi dan halaman silang panduan KAK/TOR BUMN dengan tema terang

## 5. Verifikasi Kualitas, House Rules Anti-Slop & Build

- [x] 5.1 Jalankan audit kepatuhan `design-taste-frontend`: pastikan 0 hasil untuk `Sparkles|animate-pulse|—|–|blur-\[|backdrop-blur` pada seluruh komponen yang direfaktorisasi
- [x] 5.2 Verifikasi batas headline: pastikan seluruh `h1`–`h6` tidak wrap lebih dari 2 baris pada desktop dan mobile
- [x] 5.3 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lolos dengan exit code 0
- [x] 5.4 Jalankan `npm run build` dan pastikan proses kompilasi bundler berhasil tanpa error
