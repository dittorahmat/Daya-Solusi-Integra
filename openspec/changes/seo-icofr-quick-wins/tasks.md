## 1. Technical SEO Assets

- [x] 1.1 Buat direktori `public/` dan tambahkan `public/robots.txt` dengan deklarasi allow, disallow path internal, dan link sitemap
- [x] 1.2 Buat `public/sitemap.xml` yang memuat URL kanonikal landing page utama, section layanan ICOFR, blog list, dan artikel ICOFR
- [x] 1.3 Pindahkan file verifikasi search console `google40c1ed2dc8ee25be.html` ke dalam folder `public/` agar otomatis terbundle saat build

## 2. Meta Tags & Schema Markup

- [x] 2.1 Perbarui `<title>`, meta description, meta keywords, Open Graph, dan Twitter cards di `index.html` dengan kata kunci terfokus ICOFR BUMN
- [x] 2.2 Tambahkan script Schema.org JSON-LD `ProfessionalService` di dalam `<head>` pada `index.html`
- [x] 2.3 Jalankan verifikasi linting atau build (`npm run lint` / `npm run build`) untuk memastikan konfigurasi berjalan lancar
