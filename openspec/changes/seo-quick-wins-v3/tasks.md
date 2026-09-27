# Tasks

## 1. Logo putih dan JPEG OG valid

- [x] 1.1 Verifikasi perkakas rasterisasi batch yang tersedia di lingkungan build dan verifikasi perintah uji menghasilkan JPEG 1200x630 dari SVG contoh
- [x] 1.2 Hasilkan `og-logo-white.png` dari logo sumber dengan kecerahan setara tampilan `brightness-0 invert` produksi dan verifikasi kontrasnya di atas Ink Navy
- [x] 1.3 Desain ulang lockup 4 varian OG (beranda, layanan, platform, toolkit) dengan logo putih plus headline maksimal 5 kata dan verifikasi terbaca pada lebar 300 piksel
- [x] 1.4 Render 4 JPEG final ke URL berkas yang sama dan verifikasi header `Content-Type` plus byte raster valid via curl

## 2. Image sitemap

- [x] 2.1 Perluas skrip prerender untuk menulis entri `image:image` dari `coverImage` front-matter dan verifikasi `sitemap.xml` lolos validasi skema dengan namespace gambar
- [x] 2.2 Perluas validasi silang slug mencakup daftar gambar dan verifikasi build gagal dengan peringatan eksplisit saat cover image uji didriftkan lalu hapus data uji

## 3. Verifikasi rilis

- [x] 3.1 Jalankan `npm run build` dan `npm run lint` dan verifikasi keduanya hijau plus tidak ada em-dash pada file yang diubah
- [ ] 3.2 Paksa re-scrape tiap silo di validator Facebook/LinkedIn dan verifikasi pratinjau menampilkan logo plus headline yang benar
