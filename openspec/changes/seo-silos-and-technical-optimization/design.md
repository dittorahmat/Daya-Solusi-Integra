## Context

Aplikasi saat ini dibangun menggunakan Vite + React 19 dengan server Express (`server.ts`). State rute halaman saat ini dimediasi oleh `currentPath` di `src/App.tsx` (yang sudah mendukung rute `/blog` dan `/blog/:slug` menggunakan HTML5 History API). Rute layanan masih berbasis hash fragment anchor (`#services`, dll.).

## Goals / Non-Goals

**Goals:**
- Mengembangkan arsitektur sub-rute SPA di `src/App.tsx` untuk melayani `/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/layanan/enterprise-grc`, `/platform/grc-integra`, dan `/asesmen-maturitas`.
- Menyediakan komponen halaman dedicated yang kaya konten otoritatif, bebas AI-slop, dan memiliki metadata SEO unik.
- Memperbarui `server.ts` agar menangani fallback SSR meta tags saat halaman diakses langsung atau dirayapi oleh bot perayap mesin pencari.
- Memperbarui `public/sitemap.xml` agar 100% bebas dari URL fragment `#`.
- Mengimplementasikan Schema.org `BreadcrumbList` dan `FAQPage` JSON-LD.

**Non-Goals:**
- Mengganti arsitektur Vite ke framework SSR penuh seperti Next.js (Express server sudah cukup untuk melayani dynamic meta injection dan SPA routing tanpa overhead migrasi).
- Mengubah desain visual landing page utama secara drastis (fokus pada penambahan halaman anak / sub-pages).

## Decisions

1. **Rute Internal SPA via History API & Express Catch-All:**
   - *Pilihan:* Memperluas state router di `src/App.tsx` dengan mapping path eksplisit dan memanfaatkan `window.history.pushState`.
   - *Rasional:* Menjaga kecepatan kilat SPA tanpa jeda refresh penuh, sembari menjaga URL browser tetap bersih (`/layanan/icofr-bumn`).
   - *Alternatif:* Memasang `react-router-dom`. Ditolak untuk menjaga ukuran bundle tetap ramping karena sistem navigasi sederhana sudah teruji di modul blog.

2. **Dedicated Modular Service Page Views:**
   - *Pilihan:* Membuat folder `src/components/pages/` yang memuat template presentasi detail per pilar layanan.
   - *Rasional:* Memungkinkan penulisan konten yang mendalam (>800 kata per halaman) yang penting bagi SEO peringkat Google, mencakup dasar hukum (SK-5, POJK, COSO, COBIT) dan diagram alur.

3. **Injeksi Meta Tags Dinamis pada `server.ts`:**
   - *Pilihan:* Pada environment production di `server.ts`, lakukan pembacaan template `index.html` dan ganti tag `<title>`, `<meta name="description">`, dan OpenGraph secara dinamis berdasarkan `req.path` sebelum `res.send()`.
   - *Rasional:* Memastikan Googlebot dan social preview scraper mendapatkan metadata akurat tanpa memerlukan headless browser rendering (Puppeteer).

4. **Kepatuhan Terhadap Mandat `design-taste-frontend`:**
   - Seluruh halaman baru mematuhi dial `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 5`, bebas em-dash, tanpa faux traffic lights, dan palet Ink Navy / BUMN Blue dengan aksen BUMN Gold <= 10%.

## Risks / Trade-offs

- **[Risk]** Akses direct URL pada web server lokal tanpa fallback catch-all bisa menghasilkan 404.
  - *Mitigasi:* `server.ts` sudah memiliki handler catch-all `app.get('*', ...)` yang melayani `index.html`.
- **[Risk]** Duplikasi konten antara landing page dan halaman layanan.
  - *Mitigasi:* Landing page berfokus pada ringkasan eksekutif (high-level executive overview), sedangkan halaman layanan berfokus pada metodologi teknis, regulasi rinci, tahapan pengujian, dan FAQ.
