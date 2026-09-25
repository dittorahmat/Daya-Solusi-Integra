## Context

Aplikasi Daya Solusi Integra menggunakan React SPA yang terpusat di `src/App.tsx`. Halaman silo layanan sebelumnya (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/platform/grc-integra`) telah terstruktur dengan baik menggunakan palet warna BUMN Blue (`#0b4596`), aksen BUMN Gold (`#cca43b`), dan kanvas Ink Navy (`#0b0f19`). Kita akan menerapkan pola yang sama untuk membangun rute `/glosarium`.

## Goals / Non-Goals

**Goals:**
- Membuat modul data statis `src/data/glossaryData.ts` yang berisi definisi lengkap istilah kunci regulasi BUMN (TOD, TOE, ELC, TLC, Walkthrough Lini 2, Tabel 22, Defisiensi Signifikan, Material Weakness, ITGC, dsb.).
- Membuat komponen halaman `src/components/pages/GlossaryPage.tsx` yang mematuhi pedoman anti-slop `design-taste-frontend` (zero em-dash, tanpa gradient rainbow, tanpa blur blob sintetis, layout lapang dengan single-surface cards).
- Menyediakan fungsionalitas pencarian kata kunci dan filter kategori instan.
- Mendaftarkan rute baru ke `src/App.tsx`, menu `Header.tsx`, dan tautan navigasi `Footer.tsx`.
- Memperbarui `public/sitemap.xml` dan `public/llms.txt`.

**Non-Goals:**
- Mengembangkan backend database eksternal untuk menyimpan glosarium (data statis berbasis TypeScript di client-side sangat optimal untuk kecepatan load dan SEO).
- Mengubah alur routing halaman lain yang sudah berjalan stabil.

## Decisions

1. **Pemisahan Berkas Data (`src/data/glossaryData.ts`)**:
   - Memisahkan data istilah dari komponen presentasi agar mudah diperluas dan dipelihara tanpa menyentuh kode JSX.
2. **Pola Desain Minimalis & Otoritatif**:
   - Menghindari tab toggle berlapis atau akordeon tersembunyi berlebihan; menggunakan *Capability Ledger / Card Grid* datar berjarak lega (`gap-6`) agar seluruh konten dapat dibaca langsung oleh pembaca dan crawler.
3. **Internal Linking Kontekstual**:
   - Setiap kartu istilah langsung menautkan pembaca ke halaman spesifik (misal: istilah "Tabel 22" menautkan ke artikel blog Tabel 22 dan platform GRC Integra).

## Risks / Trade-offs

- **[Pencarian Client-side]** → Pengguna mencari istilah menggunakan filtering regex sederhana yang sangat responsif (<1ms) tanpa latensi jaringan.
- **[Kepatuhan Strict Anti-Slop]** → Menjamin 0 tanda em-dash (`—`/`–`) pada seluruh definisi glosarium.
