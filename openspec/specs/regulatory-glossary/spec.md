# regulatory-glossary Specification

## Purpose
Menyediakan direktori istilah dan kamus kepatuhan ICOFR BUMN interaktif di rute `/glosarium` guna mendominasi kata kunci pencarian definisi tata kelola korporasi dan regulasi SK-5.

## Requirements

### Requirement: Halaman Direktori Glosarium di Rute /glosarium
Sistem SHALL menyediakan halaman khusus `/glosarium` yang menampilkan daftar istilah penting pengendalian internal pelaporan keuangan (ICOFR), regulasi BUMN, kerangka kerja COSO, dan metodologi audit.

#### Scenario: Navigasi pengguna ke halaman glosarium
- **WHEN** pengguna atau crawler membuka rute URL `https://dsintegra.co.id/glosarium`
- **THEN** sistem merender antarmuka Glosarium Kepatuhan ICOFR BUMN dengan tata letak lapang, navigasi breadcrumb, dan katalog istilah terstruktur.

### Requirement: Filter dan Pencarian Istilah Cepat
Sistem SHALL menyediakan mekanisme filter kategori (misal: "Semua", "Regulasi & Kerangka Kerja", "Metodologi Pengujian", "Klasifikasi Kontrol", "Evaluasi Defisiensi") serta kotak pencarian instan tanpa reload halaman.

#### Scenario: Pengguna mencari istilah spesifik
- **WHEN** pengguna mengetikkan kata kunci seperti "TOD", "Tabel 22", atau "Walkthrough" pada input pencarian
- **THEN** sistem langsung menyaring dan menampilkan kartu definisi istilah yang cocok beserta rujukan klausul regulasi resminya.

### Requirement: Tautan Internal Kontekstual ke Layanan & Platform
Setiap kartu istilah SHALL menyertakan tag kategori, kutipan regulasi (seperti SK-5 atau COSO), dan tautan internal kontekstual ke halaman layanan terkait (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`) atau produk (`/platform/grc-integra`).

#### Scenario: Pengguna mengeklik tautan internal dari istilah glosarium
- **WHEN** pengguna membaca definisi istilah dan mengeklik tautan solusi terkait
- **THEN** sistem melakukan navigasi mulus ke halaman layanan atau produk yang bersangkutan.

### Requirement: Pendaftaran Sitemap dan Skema Structured Data
Sistem SHALL mendaftarkan rute `https://dsintegra.co.id/glosarium` ke dalam `public/sitemap.xml` dengan prioritas minimal `0.9` serta menyediakan tag meta deskripsi dan canonical URL yang valid.

#### Scenario: Validasi keberadaan di sitemap
- **WHEN** sitemap XML dipindai oleh mesin pencari
- **THEN** URL `https://dsintegra.co.id/glosarium` terdaftar dengan `priority` 0.9 dan `changefreq` weekly.
