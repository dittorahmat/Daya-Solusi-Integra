# procurement-articles Specification

## Purpose
Menjawab pertanyaan biaya pengadaan (HPS dan harga/TCO software GRC) yang diajukan PPK dan komite pengadaan BUMN, dengan CTA jelas ke halaman konversi DSI.

## Requirements

### Requirement: Procurement Cost Articles
Sistem SHALL menyediakan 2 artikel (`panduan-hps-pengadaan-icofr-bumn`, `perbandingan-harga-software-grc-bumn`) masing-masing min. 1500 kata dengan front-matter lengkap (id, title, slug, excerpt, category, author, date, readTime, coverImage lokal, tags), Daftar Isi anchor, tabel komparasi, FAQ min. 3, dan CTA ke `/panduan-kak-tor-icofr` + `/kualifikasi-vendor`.

#### Scenario: Artikel terindeks penuh
- **WHEN** `npm run build` dijalankan
- **THEN** snapshot prerender memuat 10 paragraf pertama + FAQ, entri `seoMeta.ts` + `sitemap.xml` (dengan image:image lokal) ada untuk kedua slug, dan guards slug/link/image hijau.

#### Scenario: CTA konversi terjangkau
- **WHEN** pengguna membaca artikel sampai akhir
- **THEN** terdapat tautan ke halaman KAK dan kualifikasi vendor serta ke kalkulator TOE sebagai alat bantu.
