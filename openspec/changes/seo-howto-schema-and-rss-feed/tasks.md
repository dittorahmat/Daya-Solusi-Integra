## 1. Schema HowTo Enrichment

- [x] 1.1 Tambahkan fungsi pembuat skema `HowTo` untuk rute `/kalkulator-sampel-toe` pada `scripts/generate-static-routes.ts` dan verifikasi bahwa data terstruktur memuat langkah pemilihan frekuensi dan signifikansi risiko.
- [x] 1.2 Integrasikan skema `HowTo` ke dalam `@graph` JSON-LD halaman snapshot kalkulator TOE.

## 2. RSS 2.0 Feed Generator

- [x] 2.1 Buat fungsi `generateRssFeed()` di `scripts/generate-static-routes.ts` untuk mem-parse seluruh berkas markdown di `src/content/blog/` dan menghasilkan berkas XML standar RSS 2.0 di `dist/feed.xml` dan `public/feed.xml`.
- [x] 2.2 Daftarkan tag link auto-discovery RSS di `<head>` pada `index.html` dan template prerender rute statis.
- [x] 2.3 Daftarkan entri URL `feed.xml` ke dalam `public/robots.txt`.

## 3. Verification & Build Integrity

- [x] 3.1 Jalankan `npm run build` dan verifikasi bahwa proses build berhasil (Exit Code 0), snapshot HTML kalkulator memuat skema `HowTo`, dan berkas `dist/feed.xml` serta `public/feed.xml` terbentuk dengan valid.
- [x] 3.2 Lakukan audit kepatuhan anti-slop frontend dan linter (`npm run lint`).
