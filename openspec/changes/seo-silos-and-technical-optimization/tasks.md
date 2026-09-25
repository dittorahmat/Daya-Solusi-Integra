## 1. Technical Sitemap & Schema Expansion

- [x] 1.1 Perbarui `public/sitemap.xml` dengan membuang seluruh fragment `#` dan mendaftarkan sub-rute kanonikal lengkap (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/layanan/enterprise-grc`, `/platform/grc-integra`, `/asesmen-maturitas`), verifikasi format XML valid.
- [x] 1.2 Tambahkan skema JSON-LD `BreadcrumbList` dan `FAQPage` di `index.html` serta data struktur rute layanan terkait.

## 2. Server-Side Routing & Dynamic Meta Tags

- [x] 2.1 Perbarui `server.ts` untuk menyediakan map metadata dinamis (title, description, canonical, og:tags) berdasarkan path URL yang diminta.
- [x] 2.2 Uji perayapan server lokal dengan request GET ke sub-path dan verifikasi tag `<title>` dan `<meta>` terinjeksi dengan benar sebelum dikirim ke klien.

## 3. Dedicated Service Silo Pages (Frontend)

- [x] 3.1 Buat komponen halaman layanan dedicated untuk ICOFR BUMN (`/layanan/icofr-bumn`) dengan konten mendalam mengenai regulasi SK-5/DKU.MBU/11/2024 dan metodologi TOD/TOE.
- [x] 3.2 Buat komponen halaman layanan dedicated untuk ITGC & Kesiapan Audit (`/layanan/itgc-audit-readiness`) dengan fokus standar COBIT, ISO 27001, dan POJK 11.
- [x] 3.3 Buat komponen halaman layanan dedicated untuk Enterprise GRC (`/layanan/enterprise-grc`) dengan fokus ISO 31000, GCG Scorecard, dan integrasi Three Lines Model.
- [x] 3.4 Buat komponen dedicated landing page untuk Platform GRC Integra (`/platform/grc-integra`) dengan alur registrasi demo dan showcase fitur SK-5.
- [x] 3.5 Buat komponen dedicated linkable asset untuk Asesmen Mandiri (`/asesmen-maturitas`) agar dapat dibagikan langsung secara viral di media sosial.

## 4. Integration, Routing & Quality Verification

- [x] 4.1 Integrasikan seluruh sub-rute baru ke dalam state routing `src/App.tsx`, perbarui Header navigasi dan Footer internal links.
- [x] 4.2 Lakukan verifikasi `npm run lint` (`tsc --noEmit`) dan jalankan checklist anti-slop `design-taste-frontend` pada seluruh komponen baru.
