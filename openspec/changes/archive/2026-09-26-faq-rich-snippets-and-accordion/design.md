## Context

Website Daya Solusi Integra menggunakan stack Vite React + SSR Static Route Prerenderer (`scripts/generate-static-routes.ts`). Untuk meningkatkan peringkat pencarian dan mengoptimalkan cuplikan hasil pencarian (SERP) pada kata kunci ICOFR dan regulasi BUMN, sistem memerlukan data FAQ yang terpusat, komponen visual FAQ accordion yang tenang dan otoritatif, serta injeksi skema `@type: "FAQPage"` ke dalam JSON-LD rute statis.

## Goals / Non-Goals

**Goals:**
- Membuat modul data FAQ terpusat (`src/data/faqData.ts`) berisi tanya-jawab regulasi BUMN SK-5, TOE, dan platform GRC Integra.
- Mengembangkan komponen antarmuka `FaqSection.tsx` yang aksesibel, berbobot korporat, mematuhi prinsip anti-slop `design-taste-frontend`, dan bebas dari tanda pisah em-dash (— atau –).
- Mengintegrasikan komponen ke 3 halaman berintent tinggi: `/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, dan `/platform/grc-integra`.
- Mengotomasi penyisipan skema JSON-LD `@type: "FAQPage"` pada generator rute statis `scripts/generate-static-routes.ts`.

**Non-Goals:**
- Mengubah arsitektur routing atau membuat CMS terpisah untuk FAQ.
- Menambahkan animasi lebay atau efek kaca buram (glassmorphism) berlebihan.

## Decisions

1. **Struktur Data Terpusat di `src/data/faqData.ts`**
   - *Pilihan*: Mengelompokkan FAQ per rute (`/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, `/platform/grc-integra`).
   - *Rasional*: Memudahkan pemeliharaan data tunggal (*single source of truth*) yang dapat diimpor langsung oleh komponen React frontend dan skrip node build prerenderer.
   - *Alternatif*: Menyematkan string FAQ langsung di dalam komponen masing-masing halaman. Ditolak karena menyulitkan ekstraksi skema JSON-LD otomatis.

2. **Desain Komponen UI `FaqSection`**
   - *Pilihan*: Menggunakan container kartu arsitektural solid (`bg-slate-900/60`, `border-slate-800`) dengan interaktivitas state terbuka/tertutup per item (`expandedIndex`). Tombol pemicu menggunakan atribut aksesibilitas standar WAI-ARIA (`aria-expanded`, `aria-controls`).
   - *Rasional*: Bersih, lapang (*breathing room*), cepat dimuat, dan mematuhi aturan strict *design-taste-frontend*.

3. **Injeksi Skema JSON-LD di `generate-static-routes.ts`**
   - *Pilihan*: Jika rute terdaftar memiliki data FAQ di `ROUTE_FAQS`, generator menambahkan objek skema `@type: "FAQPage"` ke dalam array `@graph` skema rute tersebut.
   - *Rasional*: Crawler Googlebot mendapatkan HTML statis lengkap dengan skema valid tanpa memerlukan eksekusi client-side JavaScript.

## Risks / Trade-offs

- [Risk] Teks jawaban FAQ terlalu panjang atau memicu pemotongan baris yang tidak rapi.
  → *Mitigasi*: Setiap jawaban diformulasikan padat (2-4 kalimat) dengan tipografi `leading-relaxed` dan ukuran font `text-sm sm:text-base`.
- [Risk] Duplikasi data antara JSON-LD dan konten UI yang memicu penalti Google *hidden content*.
  → *Mitigasi*: Sumber teks FAQ untuk JSON-LD dan UI bersumber persis dari modul data yang sama (`src/data/faqData.ts`).
