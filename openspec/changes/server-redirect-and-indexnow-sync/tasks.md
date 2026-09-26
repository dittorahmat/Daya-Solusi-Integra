## 1. Server-Side 301 Trailing Slash Redirect

- [x] 1.1 Tambahkan middleware 301 trailing slash redirect pada `server.ts` sebelum static file handler dan fallback route.
- [x] 1.2 Verifikasi bahwa permintaan ke rute dengan trailing slash (misal `/blog/test/`) menerima respons HTTP 301 menuju `/blog/test`.

## 2. Automated IndexNow Submission

- [x] 2.1 Tambahkan fungsi pengiriman IndexNow API di `scripts/generate-static-routes.ts` menggunakan kunci resmi `d51n739r4c01d1nd3xn0wk3y202609`.
- [x] 2.2 Pastikan pemanggilan endpoint IndexNow dibungkus dengan penanganan error non-blocking (*graceful fallback*).

## 3. Verification and Build Audit

- [x] 3.1 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan 0 error.
- [x] 3.2 Jalankan `npm run build` dan verifikasi seluruh proses kompilasi serta IndexNow submission terpanggil dengan sukses.
- [x] 3.3 Jalankan audit kepatuhan anti-slop mandatori (`Select-String` untuk memeriksa `Sparkles|animate-pulse|—|–`).
