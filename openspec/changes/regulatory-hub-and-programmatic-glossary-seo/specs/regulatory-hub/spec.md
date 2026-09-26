## Purpose

Menyediakan repositori direktori hukum dan kepatuhan BUMN di rute /regulasi yang menyajikan ringkasan peraturan resmi, matriks tanggung jawab Tiga Lini, tenggat waktu asersi, dan skema terstruktur untuk mendominasi kata kunci regulasi Kementerian BUMN.

## ADDED Requirements

### Requirement: Halaman Repositori Regulasi BUMN di Rute /regulasi
Sistem SHALL menyediakan rute publik `/regulasi` yang menyajikan katalog dokumen hukum tata kelola BUMN (SK-5/DKU.MBU/11/2024, PER-2/MBU/03/2023, POJK No. 17/2023, SPKN BPK RI).

#### Scenario: Akses pengguna ke repositori regulasi
- **WHEN** pengguna atau web crawler membuka rute URL `https://dsintegra.co.id/regulasi`
- **THEN** sistem merender direktori regulasi dengan antarmuka B2B profesional berkanvas solid dark navy, navigasi breadcrumb visual, dan matriks dokumen hukum yang terstruktur rapi tanpa em-dash.

### Requirement: Matriks Komparasi Tanggung Jawab Tiga Lini Regulasi
Sistem SHALL menyajikan tabel matriks komparasi kewajiban Tiga Lini (Lini 1 Operasional, Lini 2 Kepatuhan/Manajemen Risiko, Lini 3 SPI) untuk setiap regulasi BUMN utama guna memicu Featured Snippet mesin pencari.

#### Scenario: Tampilan tabel matriks tiga lini
- **WHEN** pengguna memeriksa detail regulasi SK-5/DKU.MBU/11/2024 pada halaman `/regulasi`
- **THEN** sistem menampilkan pemetaan peran konkret antara pelaksanaan kontrol, pengujian efektivitas, dan penandatanganan asersi Direksi.

### Requirement: Structured Data Schema Legislation dan FAQ
Sistem SHALL menyematkan schema `Legislation` dan `FAQPage` JSON-LD pada halaman `/regulasi` untuk memperjelas metadata peraturan resmi di mata Google.

#### Scenario: Pemindaian structured data oleh crawler
- **WHEN** mesin pencari membaca HTML statis rute `/regulasi`
- **THEN** dokumen memuat script `application/ld+json` berisi entitas `Legislation` dengan nama resmi regulasi, nomor ketetapan, tanggal berlaku, dan penerbit resmi Kementerian BUMN.
