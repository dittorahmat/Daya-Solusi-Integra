## Purpose

Menyajikan artikel panduan evaluasi komparatif antara platform GRC lokal berorientasi regulasi SK-5/2024 dan modul GRC bawaan ERP global untuk menangkap niat beli tinggi (BOFU) dan mendominasi Featured Snippet Google.

## ADDED Requirements

### Requirement: Konten Panduan Komparasi Platform GRC vs ERP
Sistem konten web SHALL menyajikan artikel komparasi komprehensif yang membandingkan GRC Integra dengan modul GRC ERP global pada rute `/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn`.

#### Scenario: Akses Halaman Panduan Komparasi
- **WHEN** Pengguna atau mesin pencari mengakses `/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn`
- **THEN** Sistem menampilkan artikel lengkap dengan tabel komparasi 5 dimensi, daftar isi ber-anchor, bebas dari tanda pisah em-dash/en-dash, dan menyematkan tautan langsung ke `/platform/grc-integra` serta asesmen mandiri.

### Requirement: Integrasi Snapshot Statis dan Sitemap
Sistem pembuatan SSG dan SEO SHALL mendaftarkan rute artikel baru pada `src/utils/seoMeta.ts` dan `public/sitemap.xml`.

#### Scenario: Verifikasi Pengindeksan URL
- **WHEN** Sitemap di-parse oleh perayap Google
- **THEN** URL `https://dsintegra.co.id/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn` tercantum dengan `priority` 0.90 dan `changefreq` weekly.
