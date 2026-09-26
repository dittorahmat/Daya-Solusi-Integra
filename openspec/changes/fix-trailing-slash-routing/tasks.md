## 1. Routing Normalization Implementation

- [x] 1.1 Terapkan normalisasi trailing slash terpusat pada `currentPath` di `src/App.tsx` (misal: `const normalizedPath = currentPath.length > 1 ? currentPath.replace(/\/+$/, "") : currentPath`) dan verifikasi path tetap valid untuk root `/`.
- [x] 1.2 Perbaiki ekstraksi parameter slug dinamis di `src/App.tsx` untuk `blogSlug`, `glossarySlug`, dan `sectorSlug` agar membersihkan slash di awal dan akhir string (`.replace(/^\/+|\/+$/g, '')`), serta verifikasi rute `/blog/manfaat-aplikasi-icofr-bumn-spreadsheet/` dapat mengekstrak slug secara tepat.
- [x] 1.3 Perbarui seluruh evaluasi boolean rute sub-halaman di `src/App.tsx` agar menggunakan `normalizedPath` yang konsisten.
- [x] 1.4 Sinkronkan pemanggilan `updateDocumentMeta(normalizedPath)` di `src/App.tsx` agar tag kanonikal dan judul dokumen diperbarui dengan path bersih.

## 2. Verification and Build Audit

- [x] 2.1 Jalankan `npm run lint` (`tsc --noEmit`) dan verifikasi kompilasi TypeScript lulus tanpa kesalahan (Exit Code 0).
- [x] 2.2 Jalankan `npm run build` dan verifikasi bundler Vite serta generator static routes sukses (Exit Code 0).
- [x] 2.3 Jalankan audit kepatuhan anti-slop (`Select-String` untuk memeriksa `Sparkles|animate-pulse|—|–`) dan verifikasi 0 hasil.
