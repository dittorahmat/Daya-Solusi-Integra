## 1. Structured FAQ Data Setup

- [x] 1.1 Tambahkan entri FAQ otoritatif untuk artikel-artikel blog utama ke dalam `ROUTE_FAQS` di `src/data/faqData.ts`.
- [x] 1.2 Verifikasi bahwa pertanyaan dan jawaban menggunakan terminologi regulasi resmi tanpa em-dash terlarang.

## 2. Dynamic Component & Schema Synchronization

- [x] 2.1 Perbarui `src/components/BlogPage.tsx` untuk menyuntikkan skema `FAQPage` ke dalam tag script JSON-LD saat artikel aktif dibuka.
- [x] 2.2 Tambahkan tampilan visual accordion FAQ di bagian bawah artikel sebelum banner kontak konsultan.

## 3. Verification and Build Audit

- [x] 3.1 Jalankan `npm run lint` (`tsc --noEmit`) dan verifikasi 0 error.
- [x] 3.2 Jalankan `npm run build` dan verifikasi bahwa file statis `dist/blog/[slug]/index.html` memuat skema `FAQPage` yang valid.
- [x] 3.3 Jalankan audit kepatuhan anti-slop mandatori (`Select-String` untuk memeriksa `Sparkles|animate-pulse|—|–`).
