## Why

Daya Solusi Integra (DSI) telah mendaftarkan situsnya ke Google Search Console (melalui verifikasi html file), namun belum memiliki infrastruktur Technical SEO dasar. Akibatnya, mesin pencari seperti Google belum dapat mengindeks halaman secara optimal, serta belum mengenali fokus keahlian DSI pada konsultasi ICOFR (Internal Control over Financial Reporting) BUMN. Diperlukan implementasi Technical SEO dasar (low effort, high impact) untuk memaksimalkan crawling Googlebot dan meningkatkan CTR pencarian organik untuk layanan ICOFR.

## What Changes

- Menambahkan `public/robots.txt` yang mengarahkan perayap bot ke `sitemap.xml` dan membatasi akses endpoint internal.
- Menambahkan `public/sitemap.xml` yang mendaftarkan URL canonical penting (beranda, section layanan ICOFR, blog list, dan artikel ICOFR).
- Memperkaya meta tags pada `index.html` (Title terfokus keyword ICOFR BUMN, Meta Description terarah, Keywords, OpenGraph/Twitter Cards, serta Canonical URL).
- Menambahkan Schema.org JSON-LD berjenis `ProfessionalService` di `index.html` untuk memunculkan rich knowledge graph entitas konsultasi GRC/ICOFR.
- Memastikan file statis di folder `public/` terlayani dengan benar oleh web server (`server.ts` / Vite).

## Capabilities

### New Capabilities
- `seo-icofr-metadata`: Pengaturan sitemap, robots.txt, metadata SEO, dan schema JSON-LD terarah untuk menargetkan leads ICOFR.

### Modified Capabilities
<!-- None -->

## Impact

- File baru: `public/robots.txt`, `public/sitemap.xml`.
- Modifikasi: `index.html` (metadata & schema JSON-LD), `server.ts` (jika perlu penyesuaian static handler).
- Ketergantungan baru: Tidak ada library eksternal yang ditambahkan.
