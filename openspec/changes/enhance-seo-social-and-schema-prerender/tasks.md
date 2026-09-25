## 1. Asset & Types Setup

- [x] 1.1 Buat gambar pratinjau media sosial korporat fallback `public/og-image.jpg` dengan standar ukuran 1200x630 pixel, memuat identitas visual BUMN Blue/Gold dan teks resmi Daya Solusi Integra & GRC Integra.
- [x] 1.2 Perbarui antarmuka `RouteMeta` di `src/utils/seoMeta.ts` dengan menambahkan field `image?: string` dan isi nilai URL gambar spesifik untuk seluruh rute layanan, platform, tools, serta artikel blog.

## 2. Injeksi Meta Tag Klien & Template HTML

- [x] 2.1 Tambahkan tag fallback `<meta property="og:image">`, `<meta property="og:image:width">`, `<meta property="og:image:height">`, `<meta property="twitter:image">`, dan `<meta property="twitter:card">` pada berkas `index.html`.
- [x] 2.2 Perbarui fungsi runtime `updateDocumentMeta` di `src/utils/seoMeta.ts` agar secara dinamis memutakhirkan tag `og:image` dan `twitter:image` saat navigasi halaman terjadi.

## 3. Modularisasi SSG & Pemisahan Skema JSON-LD

- [x] 3.1 Perbarui skrip SSG `scripts/generate-static-routes.ts` agar menginjeksi meta tag Open Graph image (`og:image`, `og:image:width`, `og:image:height`, `twitter:image`) sesuai dengan rute target.
- [x] 3.2 Modifikasi `scripts/generate-static-routes.ts` untuk memisahkan skema JSON-LD per rute sehingga artikel blog hanya membawa skema `TechArticle`/`BreadcrumbList`, rute platform/kalkulator membawa `SoftwareApplication`/`BreadcrumbList`, dan rute statis lainnya bebas dari skema artikel yang tidak relevan.

## 4. Verifikasi & Build

- [x] 4.1 Jalankan `npm run build` dan pastikan proses kompilasi TypeScript, Vite bundling, dan pembuatan seluruh static route snapshot berhasil dengan exit code 0.
- [x] 4.2 Lakukan inspeksi berkas `dist/index.html`, `dist/layanan/icofr-bumn/index.html`, `dist/blog/fitur-kunci-aplikasi-icofr-bumn/index.html`, dan `dist/kalkulator-sampel-toe/index.html` untuk memverifikasi keakuratan tag gambar sosial dan kebersihan JSON-LD per rute.
- [x] 4.3 Jalankan audit kepatuhan anti-slop frontend (`Select-String -Path "src\**\*.tsx", "src\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"` dan `npm run lint`) untuk menjamin zero defect.
