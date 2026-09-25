## Why

Daya Solusi Integra saat ini mengandalkan arsitektur Single Page Application (SPA) dengan tautan anchor fragment (`#services`, `#platform`, `#assessment`). Analisis kesenjangan (gap analysis) terhadap kompetitor utama (RWI Consulting / `rwi.co.id`) membuktikan bahwa kompetitor mendominasi ranking pencarian Google melalui arsitektur multi-page silo (dedicated page per layanan), BreadcrumbList schema, dan FAQ schema. Selain itu, mesin pencari seperti Googlebot mengabaikan URL fragment `#` di `sitemap.xml`, sehingga layanan spesifik DSI tidak terindeks secara individual. Transformasi arsitektur menjadi sub-halaman silo dan optimasi teknis diperlukan agar DSI merebut posisi teratas di kata kunci GRC, ICOFR BUMN SK-5, dan ITGC.

## What Changes

- **Dedicated Service & Platform Routes:** Menyediakan rute halaman mandiri dengan canonical URL spesifik:
  - `/layanan/icofr-bumn` (Target: Konsultan ICOFR BUMN, SK-5/DKU.MBU/11/2024, RCM).
  - `/layanan/itgc-audit-readiness` (Target: Jasa Audit ITGC, POJK 11, Evaluasi Keamanan Core Banking & ERP).
  - `/layanan/enterprise-grc` (Target: Konsultan GRC BUMN, GCG Scorecard, ISO 31000/37001).
  - `/platform/grc-integra` (Dedicated product landing page untuk software GRC Integra).
  - `/asesmen-maturitas` (Dedicated linkable asset untuk tool uji mandiri maturitas GRC).
- **Technical Sitemap & Robots Sanitization:** Menghilangkan semua entri fragment `#` di `public/sitemap.xml` dan mendaftarkan URL rute baru dengan prioritas terkalibrasi.
- **Dynamic Meta & Rich Snippet Injection (SSR Fallback):** Memastikan `server.ts` merespons permintaan bot / social crawlers dengan metadata OpenGraph, title tag, dan deskripsi yang presisi per rute sebelum menyajikan SPA fallback.
- **Schema.org Expansion:** Menambahkan skema `BreadcrumbList` pada seluruh sub-rute dan skema `FAQPage` interaktif untuk mendominasi visual rich snippet SERP Google.

## Capabilities

### New Capabilities
- `seo-service-silos`: Halaman landing mandiri per layanan utama dan platform software dengan kata kunci terarah, metadata dinamis, dan internal linking kuat.
- `seo-technical-schema`: Pembersihan sitemap kanonikal, penambahan BreadcrumbList, FAQPage schema, dan penanganan perayapan bot pada server Express.

### Modified Capabilities
<!-- None -->

## Impact

- **Frontend:** Pembaruan router di `src/App.tsx`, pembuatan komponen halaman layanan baru di `src/components/pages/` atau sub-views terstruktur, penyesuaian header navigation.
- **Backend:** Modifikasi `server.ts` untuk menangani routing sub-path dan menyuntikkan dynamic meta tags saat bot crawling.
- **Aset Statis & SEO:** Pembaruan menyeluruh pada `public/sitemap.xml` dan `index.html`.
- **Dependensi:** Tidak memerlukan dependensi npm eksternal baru (tetap memanfaatkan Express dan React 19).
