# Spec Delta

## ADDED Requirements

### Requirement: Publikasi 4 Artikel Pilar Klaster GSC
Sistem SHALL menyediakan 4 artikel pilar baru di `src/content/blog/` yang masing-masing memenuhi standar editorial BUMN: min. 1200 kata, frontmatter lengkap (id, title, slug, excerpt, category, author, date, readTime, coverImage, tags), Daftar Isi ber-anchor, tabel perbandingan komparatif, dan larangan mutlak em-dash (`—` / `–`).

#### Scenario: Crawler atau pengguna memuat artikel klaster baru
- **WHEN** pengguna bernavigasi ke salah satu rute artikel pilar baru (`/blog/panduan-segregation-of-duties-sod-bumn-matriks-konflik-erp`, `/blog/prosedur-walkthrough-audit-icofr-bumn-lini-2`, `/blog/peran-spi-bumn-pengendalian-internal-icofr-tiga-lini`, `/blog/bedah-juknis-sk5-dku-mbu-11-2024-icofr-bumn`)
- **THEN** sistem merender konten markdown lengkap beserta metadata OpenGraph, canonical URL resmi, dan tautan internal dua arah ke platform serta layanan terkait.
