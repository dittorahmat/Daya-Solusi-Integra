## 1. IndexNow Setup & Verification Key

- [x] 1.1 Buat berkas verifikasi API key IndexNow di `public/d51n739r4c01d1nd3xn0wk3y202609.txt` dan verifikasi isi berkas sesuai dengan token string.
- [x] 1.2 Daftarkan berkas verifikasi IndexNow ke dalam `public/robots.txt` dan verifikasi bahwa file robots.txt memuat baris referensi IndexNow.

## 2. Structured Data Sitelinks & WebSite Schema

- [x] 2.1 Tambahkan skema `SiteNavigationElement` dan `WebSite` pada `index.html` dan verifikasi validitas JSON-LD.
- [x] 2.2 Perbarui fungsi `buildJsonLdForRoute()` di `scripts/generate-static-routes.ts` untuk menyertakan `SiteNavigationElement` di seluruh rute statis.

## 3. Automated AI Discovery Sync Generator

- [x] 3.1 Implementasikan fungsi `generateLlmsFiles()` di `scripts/generate-static-routes.ts` untuk mengekstrak artikel blog & glosarium lalu menulis `llms.txt` dan `llms-full.txt`.
- [x] 3.2 Uji eksekusi `npm run build` dan verifikasi bahwa berkas `dist/llms.txt`, `public/llms.txt`, `dist/llms-full.txt`, dan `public/llms-full.txt` ter-generate otomatis secara lengkap.
- [x] 3.3 Jalankan audit pra-penyelesaian (`tsc --noEmit`, periksa larangan em-dash, validasi build output).
