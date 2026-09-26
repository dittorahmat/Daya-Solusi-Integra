## 1. HowTo Structured Data Definition

- [x] 1.1 Buat berkas `src/data/howtoData.ts` yang mendefinisikan dataset skema HowTo untuk artikel panduan implementasi ICOFR BUMN dan verifikasi file terbuat tanpa error tipe TypeScript
- [x] 1.2 Sambungkan dataset `howtoData.ts` ke dalam skrip prerender `scripts/generate-static-routes.ts` untuk menginjeksi skema JSON-LD `HowTo` pada berkas HTML statis terkait dan verifikasi skema muncul pada snapshot statis

## 2. Dynamic Schema & Sticky TOC Component

- [x] 2.1 Tambahkan injeksi skema `HowTo` di runtime SPA pada `src/components/BlogPage.tsx` saat artikel panduan teknis aktif dibuka
- [x] 2.2 Buat komponen antarmuka Sticky Table of Contents (TOC) di `src/components/BlogPage.tsx` dengan parsing heading H2, scroll-spy berbasis `IntersectionObserver`, dan offset navigasi yang presisi
- [x] 2.3 Tambahkan atribut ID dan kelas `scroll-mt-28` pada elemen heading markdown agar loncatan anchor tidak tertutup navbar

## 3. Verification & Build

- [x] 3.1 Jalankan audit kepatuhan anti-slop (larangan em-dash, sparkles, dan animate-pulse) dan pastikan 0 pelanggaran
- [x] 3.2 Jalankan `npm run lint` dan `npm run build` untuk memverifikasi tipe TypeScript, prerendering snapshot statis, dan IndexNow push berhasil tanpa error
