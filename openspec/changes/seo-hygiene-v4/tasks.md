# Tasks

## 1. Halaman 404 khusus (SPA + prerender + server)

- [x] 1.1 Buat komponen halaman 404 (`NotFoundPage`) dengan pesan jelas dan tautan kembali (beranda, glosarium, blog, kontak) dan verifikasi komponen ter-render dengan seluruh tautan mengarah ke rute resmi
- [x] 1.2 Daftarkan rute 404 di `App.tsx` untuk path tak dikenal serta slug blog/glosarium/sektor yang tidak cocok (dengan `noindex, follow` dan tanpa schema indexable) dan verifikasi navigasi ke `/blog/slug-ngawur-xyz` menampilkan halaman 404 bukan homepage
- [x] 1.3 Perluas skrip prerender untuk menghasilkan `dist/404/index.html` dan verifikasi berkas ada dengan tag `noindex` setelah `npm run build`
- [x] 1.4 Perketat fallback `server.ts` agar GET non-API yang tidak cocok berkas statis maupun prerender menyajikan `dist/404/index.html` dengan status 404 (rute `/api` tetap JSON 404, redirect trailing-slash tidak berubah) dan verifikasi `curl -o /dev/null -s -w "%{http_code}"` mengembalikan 200 untuk `/blog`, 404 untuk `/url-ngawur-xyz`

## 2. Tanggal dinamis dan image sitemap penuh

- [x] 2.1 Ganti tanggal hardcode dengan `datePublished` dari front-matter dan `dateModified` dari git log (fallback mtime berkas) pada JSON-LD, elemen `<time>` semantik, dan `lastmod` sitemap dan verifikasi tidak ada string tanggal hardcode tersisa di output prerender
- [x] 2.2 Petakan image sitemap untuk seluruh 54 URL (`coverImage` front-matter untuk blog, OG per silo untuk non-blog) dan verifikasi setiap entri `<url>` di `sitemap.xml` memuat `<image:image>` yang URL-nya berstatus 200 dengan content-type gambar
- [x] 2.3 Perluas validasi drift mencakup tanggal dan daftar gambar (sejajar validasi drift slug v2) dan verifikasi build mencetak peringatan eksplisit per slug saat cover image uji didriftkan lalu hapus data uji

## 3. Head hygiene dan schema SearchAction + logo

- [x] 3.1 Tambahkan `theme-color`, `og:image:alt` per rute serta `article:published_time`/`article:modified_time` untuk rute artikel pada template prerender dan `updateDocumentMeta` (`twitter:site` dilewati: tanpa akun X resmi; `article:*_time` prerender saja karena scraper tidak mengeksekusi JS) dan verifikasi tiap halaman prerender memuat tag tersebut dengan nilai yang benar
- [x] 3.2 Tambahkan `SearchAction` pada entitas `WebSite` dan `logo` sebagai `ImageObject` eksplisit di `index.html` dan verifikasi Rich Results Test homepage lolos untuk keduanya
- [x] 3.3 Wire param `?q=` pada halaman `/blog` (baca saat mount, sinkronisasi saat mengetik) sebagai target SearchAction dan verifikasi membuka `/blog?q=TOE` langsung menampilkan daftar terfilter

## 4. Verifikasi rilis

- [x] 4.1 Jalankan `npm run build` dan `npm run lint` dan verifikasi keduanya hijau, nol peringatan drift, dan tidak ada em-dash pada file yang diubah
- [x] 4.2 Jalankan validasi akhir (curl status 200/404, Rich Results Test homepage + 1 artikel + 404, validasi skema sitemap dengan namespace gambar) dan verifikasi semua cek hijau sebelum deploy
