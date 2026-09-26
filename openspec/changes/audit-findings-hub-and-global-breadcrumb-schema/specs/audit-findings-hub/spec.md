## Purpose

Menyediakan halaman direktori kurasi temuan defisiensi pengendalian internal ICOFR BUMN paling umum beserta rekomendasi Corrective Action Plan (CAP) berbasis SK-5/DKU.MBU/11/2024 dan COSO 2013 untuk memenuhi kebutuhan pencarian teknis auditor SPI dan akuntan BUMN.

## ADDED Requirements

### Requirement: Audit Findings Directory and Matrix Ledger
Sistem SHALL menyediakan rute publik `/temuan-audit-icofr` yang menampilkan kurasi 8 temuan defisiensi audit BUMN dengan matriks: Gejala Temuan, Dampak Risiko Akun Finansial, dan Rekomendasi Corrective Action Plan (CAP).

#### Scenario: User visits audit findings directory
- **WHEN** Pengguna membuka URL `/temuan-audit-icofr`
- **THEN** Halaman menampilkan katalog temuan audit terstruktur dengan pengelompokan risiko dan panduan remedi teknis berbasis regulasi SK-5.

### Requirement: Interactive Risk Category Filter
Sistem SHALL menyediakan filter interaktif untuk memilah temuan berdasarkan kategori risiko (Semua Kategori, Risiko Finansial & Akuntansi, ITGC & Sistem ERP, Operasional & Pengadaan).

#### Scenario: User selects a category filter
- **WHEN** Pengguna mengklik tombol filter kategori tertentu
- **THEN** Daftar kartu temuan audit disaring seketika di peramban tanpa memuat ulang halaman.

### Requirement: Structured Data and FAQ Rich Snippets
Sistem SHALL menyematkan skema terstruktur `CollectionPage` dan `ItemList` of `ItemAvailability` / `Article` serta simpul `FAQPage` rich snippet pada rute `/temuan-audit-icofr`.

#### Scenario: Search engine crawler processing structured data
- **WHEN** Mesin pencari mengekstrak metadata JSON-LD dari `/temuan-audit-icofr`
- **THEN** Terdapat simpul `CollectionPage` dan `FAQPage` yang memuat tanya jawab seputar siklus remediasi temuan defisiensi signifikan.
