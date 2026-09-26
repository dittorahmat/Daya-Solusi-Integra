## Why

Organisasi BUMN dan korporasi teregulasi menghadapi inefisiensi besar dalam pemetaan proses bisnis dan dokumentasi SOP. Tim operasional dan kepatuhan sering kali terhambat oleh ketergantungan pada lisensi desktop software seperti Microsoft Visio yang terisolasi dari platform kepatuhan, serta tumpukan dokumen SOP lama berformat PDF dan hasil scan gambar fisik yang harus digambar ulang secara manual memakan waktu berhari-hari. 

Daya Solusi Integra menghadirkan fitur BPM Workflow Editor di dalam platform GRC Integra sebagai solusi web-native yang menawarkan pengalaman menggambar alur kerja familiar sekelas Visio serta kemampuan ingest/auto-draw diagram dari file PDF, JPG, dan PNG. Landing page khusus yang SEO-friendly ini diperlukan untuk mendominasi kata kunci pencarian terkait workflow editor proses bisnis korporasi dan mengonversi minat eksekutif menjadi permintaan demonstrasi produk (baik offline Jabodetabek maupun online nasional).

## What Changes

- Menambahkan halaman baru `/platform/bpm-workflow-editor` yang menyajikan arsitektur informasi, value proposition, dan kapabilitas fitur BPM Workflow Editor secara komprehensif.
- Menambahkan visual mockup UI editor berbasis standar desain B2B korporat (palet Ink Navy `#0b0f19`, stencil BPMN palette, canvas grid, inspector panel) tanpa elemen dekoratif palsu.
- Menampilkan alur kerja "Smart Ingestion Workflow": kemampuan rekonstruksi otomatis dari dokumen SOP eksisting (PDF, JPG, PNG) menjadi kanvas diagram alur interaktif yang dapat diedit langsung.
- Mengintegrasikan lead intake conversion flow yang memfasilitasi penjadwalan demo eksklusif dengan opsi demo tatap muka langsung (khusus wilayah Jabodetabek) dan demo interaktif daring (nasional).
- Menambahkan optimasi SEO teknis lengkap: title, meta description, Open Graph, canonical link, breadcrumbs visual, serta skema terstruktur JSON-LD (`SoftwareApplication`, `FAQPage`, `BreadcrumbList`).
- Menambahkan rute navigasi pada komponen Header (dropdown platform), Footer, serta mendaftarkan URL ke `public/sitemap.xml` dan skrip SSG prerender `scripts/generate-static-routes.ts`.

## Capabilities

### New Capabilities
- `bpm-workflow-editor`: Halaman showcase produk dan arsitektur fitur BPM Workflow Editor dengan Visio-like web canvas, auto-draw dari file PDF/JPG/PNG, penawaran demo offline Jabodetabek dan online, serta integrasi SEO teknis dan sitemap.

### Modified Capabilities
<!-- None -->

## Impact

- **Frontend Routes & Navigation**: Penambahan rute `/platform/bpm-workflow-editor` di `src/App.tsx`, penambahan link navigasi di `src/components/Header.tsx`, dan `src/components/Footer.tsx`.
- **SEO & Structured Data**: Penambahan metadata dan Schema JSON-LD pada `src/utils/seoMeta.ts` dan integrasi rute ke `public/sitemap.xml` serta `scripts/generate-static-routes.ts`.
- **UI Components**: Pembuatan komponen mandiri `src/components/pages/BpmWorkflowEditorPage.tsx` yang mematuhi standar skill `design-taste-frontend`.
