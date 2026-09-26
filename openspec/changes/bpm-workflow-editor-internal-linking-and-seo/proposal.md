## Why

Halaman pendaratan baru untuk fitur unggulan **BPM Workflow Editor** (`/platform/bpm-workflow-editor`) telah berhasil dibangun, namun saat ini masih memiliki keterbatasan tautan internal (*link equity*) dari bagian inti website. Untuk mendominasi pencarian Google pada kata kunci strategis seperti *"aplikasi flowchart SOP BUMN"*, *"BPM workflow editor web"*, dan *"rekonstruksi alur proses bisnis"*, diperlukan struktur internal linking multi-tier yang kuat dan kontekstual dari navigasi global, halaman silo layanan, artikel blog eksisting, serta penerbitan artikel pilar edukatif baru.

## What Changes

- **Global Navigation Enhancement (Header)**: Menambahkan submenu dropdown interaktif pada navigasi desktop dan drawer navigasi mobile di `src/components/Header.tsx`, membagi tautan platform menjadi "Ringkasan Platform GRC Integra" dan "BPM Workflow Editor" (Opsi A).
- **Architectural Callout Card di Service Silo**: Menyematkan banner callout arsitektural di `src/components/pages/IcofrBumnPage.tsx` yang mengedukasi pengunjung tentang modernisasi alur dokumen SOP lawas (PDF/JPG/PNG) via Smart Auto-Draw di BPM Workflow Editor tanpa gaya AI slop.
- **Topical Anchor Text Expansion di Artikel Blog Eksisting**: Menyisipkan variasi anchor text kontekstual di artikel blog pilar utama (`fitur-kunci-aplikasi-icofr-bumn.md`, `manfaat-aplikasi-icofr-bumn-spreadsheet.md`, `perbandingan-software-grc-integra-vs-modul-erp-bumn.md`).
- **Dedicated Supporting Pillar Blog Article**: Menerbitkan 1 artikel blog komprehensif baru di `src/content/blog/panduan-pemetaan-proses-bisnis-sop-flowchart-bumn.md` yang mengupas tuntas standarisasi flowchart proses bisnis BUMN sesuai Lampiran 3 SK-5/DKU.MBU/11/2024 dan menautkan langsung ke editor.
- **Sitemap & SSG Crawler Prerendering**: Mendaftarkan artikel blog baru ke `public/sitemap.xml` dan skrip `scripts/generate-static-routes.ts` untuk memastikan pengindeksan instan oleh Googlebot.

## Capabilities

### New Capabilities
- `bpm-internal-linking-and-seo`: Peningkatan visibilitas SEO, PageRank internal, dan navigasi terintegrasi menuju halaman BPM Workflow Editor dari seluruh penjuru situs.

### Modified Capabilities
<!-- Tidak ada perubahan requirement pada kapabilitas spesifikasi sebelumnya -->

## Impact

- **Affected Code**: `src/components/Header.tsx`, `src/components/pages/IcofrBumnPage.tsx`, `src/content/blog/*.md`, `public/sitemap.xml`, `scripts/generate-static-routes.ts`.
- **Performance & SEO**: Menambah distribusi anchor text internal, meningkatkan rasio klik-tayang organik (CTR), dan memperluas otoritas topikal GRC Integra di SERP Google.
- **Dependencies**: Tidak ada dependensi pustaka npm eksternal baru.
