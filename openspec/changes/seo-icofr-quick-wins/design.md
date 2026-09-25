## Context

Website Daya Solusi Integra menggunakan stack Vite + React (SPA) yang di-serve menggunakan Node.js Express (`server.ts`). Saat ini `index.html` hanya memiliki `<title>` standar tanpa deskripsi atau schema. Directory `public/` saat ini belum ada, sehingga file static seperti `robots.txt` dan `sitemap.xml` belum tersedia untuk crawler.

## Goals / Non-Goals

**Goals:**
- Membuat folder `public/` berisi `robots.txt` dan `sitemap.xml` yang valid.
- Memastikan file di `public/` terlayani secara statis baik saat dev (Vite default menyajikan folder `public`) maupun production di Express.
- Memperbarui `index.html` dengan title informatif bertema ICOFR, meta description, keywords, Open Graph, dan JSON-LD `ProfessionalService`.

**Non-Goals:**
- Server-Side Rendering (SSR) dinamis (belum dibutuhkan untuk fase quick-wins ini).
- Dynamic Sitemap generator runtime (cukup statis karena artikel blog saat ini masih berbasis file markdown lokal).

## Decisions

1. **Folder `public/` untuk aset robots.txt dan sitemap.xml**:
   - *Rationale*: Vite secara otomatis menyajikan semua aset di folder `public/` langsung pada root path `/`. Saat build (`vite build`), semua isi folder `public/` langsung dikopi ke folder `dist/`.
   - *Alternative*: Menangani routing `/robots.txt` dan `/sitemap.xml` manual lewat Express handler. Diputuskan memakai folder `public/` karena lebih standar dan tidak membebani logic route server.

2. **Schema.org JSON-LD `ProfessionalService`**:
   - *Rationale*: DSI adalah perusahaan konsultan profesional berbadan hukum/bisnis di Indonesia. Format `ProfessionalService` mendukung pendefinisian layanan spesifik (ICOFR, COSO, ITGC) dan lokasi Indonesia.

## Risks / Trade-offs

- [Risk] Title diubah mempengaruhi branding saat tab dibuka. → *Mitigation*: Pertahankan nama "Daya Solusi Integra" di akhir title: `Konsultan ICOFR BUMN & Kepatuhan COSO | Daya Solusi Integra`.
