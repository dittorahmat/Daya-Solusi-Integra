## Purpose

Menyediakan arsitektur routing halaman mandiri (silo) untuk setiap layanan utama dan software GRC Integra guna menargetkan kata kunci pencarian organik spesifik industri BUMN dan perbankan.

## ADDED Requirements

### Requirement: Dedicated Service Silo Routes
Sistem SHALL menyediakan rute halaman mandiri untuk `/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/layanan/enterprise-grc`, `/platform/grc-integra`, dan `/asesmen-maturitas` yang dapat diakses langsung via URL browser maupun tautan internal situs.

#### Scenario: User navigates directly to ICOFR silo page
- **WHEN** Pengguna atau perayap mesin pencari mengakses URL `https://dsintegra.co.id/layanan/icofr-bumn`
- **THEN** Sistem menampilkan halaman detail layanan ICOFR BUMN lengkap dengan landasan hukum SK-5/DKU.MBU/11/2024, metodologi pengujian, dan formulir konsultasi terarah.

#### Scenario: User navigates to dedicated GRC Integra software page
- **WHEN** Pengguna mengakses URL `https://dsintegra.co.id/platform/grc-integra`
- **THEN** Sistem menyajikan showcase platform software GRC Integra dengan rincian fitur BPM, kalkulator sampel Tabel 22, validasi Lini 2, dan opsi permohonan demo terjadwal.

### Requirement: Canonical URL & Dynamic Document Title
Setiap halaman silo layanan SHALL memiliki canonical URL resmi dan document title yang unik serta relevan dengan target kata kunci spesifik.

#### Scenario: Document title updates on silo navigation
- **WHEN** Pengguna berpindah ke rute `/layanan/itgc-audit-readiness`
- **THEN** Judul dokumen halaman diperbarui menjadi `Konsultan ITGC & Kesiapan Audit TI BUMN | Daya Solusi Integra` dan canonical tag merujuk tepat ke `https://dsintegra.co.id/layanan/itgc-audit-readiness`.
