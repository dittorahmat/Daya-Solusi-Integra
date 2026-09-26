## 1. UI Implementation: Next/Prev Navigation & Related Cards

- [x] 1.1 Tambahkan kalkulasi `prevPost`, `nextPost`, dan `relatedClusterPosts` di dalam `src/components/BlogPage.tsx`
- [x] 1.2 Bangun komponen navigasi linier dua arah `[Artikel Sebelumnya]` dan `[Artikel Selanjutnya]` di bagian bawah artikel sebelum section FAQ pada `src/components/BlogPage.tsx`
- [x] 1.3 Bangun grid 2 kartu artikel terkait kluster regulasi dengan tautan internal yang jelas dan kompatibel dengan SPA router

## 2. Static Prerender: ItemList Schema

- [x] 2.1 Tambahkan injeksi skema `ItemList` untuk rute `/blog` di `scripts/generate-static-routes.ts` yang memuat seluruh artikel wawasan secara terurut dan verifikasi skema muncul pada snapshot `dist/blog/index.html`

## 3. Verification & Build

- [x] 3.1 Jalankan audit kepatuhan anti-slop (larangan em-dash, sparkles, dan animate-pulse) dan pastikan 0 pelanggaran
- [x] 3.2 Jalankan `npm run lint` dan `npm run build` untuk memverifikasi tipe TypeScript, prerender snapshot statis, dan IndexNow submission berhasil tanpa error
