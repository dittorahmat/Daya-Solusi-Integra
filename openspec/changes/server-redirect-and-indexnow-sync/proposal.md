## Why

Mesin pencari (seperti Googlebot) dapat meminta URL dengan trailing slash (misal `/blog/manfaat-aplikasi-icofr-bumn-spreadsheet/`). Meskipun aplikasi SPA di sisi browser telah mampu menanganinya, dari kacamata server HTTP dan SEO, ketiadaan status redirect 301 menyebabkan mesin pencari memperlakukan URL berakhiran slash dan tanpa slash sebagai dua URL berbeda yang menyajikan isi identik (*duplicate content*). Selain itu, pengindeksan halaman baru di mesin pencari modern (Bing, Yandex, Seznam) dapat dipercepat secara instan dari hitungan minggu menjadi hitungan detik dengan memanfaatkan protokol IndexNow API otomatis saat build.

## What Changes

- Menambahkan middleware 301 Permanent Redirect di `server.ts` untuk mengalihkan setiap request HTTP dengan trailing slash (kecuali untuk root `/`) ke URL kanonikal resmi tanpa trailing slash, lengkap dengan query parameter (jika ada).
- Menambahkan fungsi otomasi ping IndexNow API pada `scripts/generate-static-routes.ts` yang secara otomatis mengirimkan daftar seluruh URL sitemap ke endpoint IndexNow (`https://api.indexnow.org/indexnow`) setiap kali `npm run build` selesai.
- Menggunakan kunci verifikasi resmi yang sudah ada di `public/d51n739r4c01d1nd3xn0wk3y202609.txt` dan terdaftar di `robots.txt`.

## Capabilities

### New Capabilities
- `server-canonical-redirect`: Mengotomatisasi HTTP 301 Permanent Redirect di sisi server Express untuk menstandarkan seluruh URL ke format kanonikal resmi tanpa trailing slash.
- `indexnow-auto-submission`: Mengirimkan seluruh daftar URL rute statis secara otomatis ke protokol IndexNow saat deployment/build untuk pengindeksan instan di Bing, Yandex, dan mesin pencari mitra.

### Modified Capabilities
<!-- Tidak ada perubahan requirement pada kapabilitas yang sudah ada -->

## Impact

- File terdampak: `server.ts` dan `scripts/generate-static-routes.ts`.
- Manfaat SEO: Menghilangkan risiko duplikasi konten di Google Search Console, menyatukan PageRank/otoritas backlink, dan mempercepat pembaruan indeks di mesin pencari via IndexNow.
- Dependensi: Nol (menggunakan Node native fetch untuk IndexNow ping).
