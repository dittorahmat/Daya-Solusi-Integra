## 1. SEO Metadata, Structured Data, and Routing Foundation

- [x] 1.1 Tambahkan konfigurasi SEO meta (title, description, canonical, open graph) dan Schema JSON-LD (`SoftwareApplication`, `FAQPage`, `BreadcrumbList`) untuk rute `/platform/bpm-workflow-editor` di `src/utils/seoMeta.ts`, lalu verifikasi objek meta tersedia tanpa syntax error.
- [x] 1.2 Daftarkan rute `/platform/bpm-workflow-editor` di `src/App.tsx` lengkap dengan sinkronisasi title/meta, penanganan scroll, dan breadcrumbs visual, lalu verifikasi halaman dapat diakses saat navigasi manual.
- [x] 1.3 Daftarkan menu "BPM Workflow Editor" pada dropdown navigasi platform di `src/components/Header.tsx` dan link platform di `src/components/Footer.tsx`, lalu verifikasi kedua elemen navigasi mengarah ke URL yang tepat.

## 2. BPM Workflow Editor Landing Page Component

- [x] 2.1 Buat komponen utama `src/components/pages/BpmWorkflowEditorPage.tsx` dengan Hero section (kicker, H1 bernas, paragraf otoritatif, dan dual CTA) yang mematuhi standar desain B2B dan aturan anti-slop (zero em-dash).
- [x] 2.2 Rancang visual mockup kanvas BPMN sekelas Visio (stencil palette, grid canvas dengan node BPMN & orthogonal connector presisi, inspector detail langkah) dengan styling solid dark navy `#0f172a` tanpa fake chrome window controls.
- [x] 2.3 Implementasikan showcase 3-Step Migration Pipeline (Unggah File PDF/JPG/PNG -> Rekonstruksi Alur Otomatis -> Penyuntingan Kanvas) dan pilar kapabilitas utama (Visio-familiar web, multi-format auto-draw, standarisasi BPMN siap audit).
- [x] 2.4 Tambahkan FAQ Accordion interaktif dan formulir intake penjadwalan demo produk dengan pilihan preferensi sesi "Tatap Muka Langsung (Khusus Jabodetabek)" dan "Sesi Daring Interaktif (Online)", lalu verifikasi interaksi form berfungsi mulus.

## 3. Pre-Rendering, Sitemap, and Pre-Flight Quality Verification

- [x] 3.1 Daftarkan URL `https://dsintegra.co.id/platform/bpm-workflow-editor` ke dalam `public/sitemap.xml` dengan priority 0.9 dan changefreq weekly.
- [x] 3.2 Perbarui skrip static route generator di `scripts/generate-static-routes.ts` agar menyertakan rute `/platform/bpm-workflow-editor`, jalankan pra-render, dan verifikasi file HTML statis terbentuk di `dist/platform/bpm-workflow-editor/index.html`.
- [x] 3.3 Jalankan audit kualitas pre-flight: scan larangan em-dash/en-dash (`—`/`–`) dan `Sparkles`, jalankan `npm run lint` (`tsc --noEmit`), serta jalankan `npm run build` dan verifikasi semua lolos dengan exit code 0.
