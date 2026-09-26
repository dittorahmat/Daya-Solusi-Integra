## Purpose

Menyediakan halaman otoritatif kesiapan tender dan kualifikasi vendor BUMN untuk memfasilitasi tim pengadaan, panitia tender, dan satuan pengawasan BUMN dalam memverifikasi legalitas, arsitektur keamanan, KAK pengadaan, serta skema lisensi.

## ADDED Requirements

### Requirement: Halaman Kualifikasi Vendor BUMN
Sistem SHALL menyediakan rute publik `/kualifikasi-vendor` yang menyajikan profil kualifikasi teknis dan legalitas PT Daya Solusi Integra untuk pengadaan BUMN.

#### Scenario: Pengguna mengakses halaman kualifikasi vendor
- **WHEN** pengguna atau web crawler membuka URL `https://dsintegra.co.id/kualifikasi-vendor`
- **THEN** sistem merender halaman lengkap dengan header kualifikasi tender, tabel legalitas/KBLI, model deployment on-premise, panduan penyusunan KAK, dan kanal kontak resmi

### Requirement: Legalitas dan Klasifikasi KBLI Resmi
Halaman kualifikasi vendor SHALL memuat detail legalitas resmi perusahaan termasuk klasifikasi KBLI yang relevan dengan jasa konsultasi tata kelola dan implementasi software GRC.

#### Scenario: Panitia tender memverifikasi KBLI dan legalitas
- **WHEN** panitia tender meninjau section Legalitas & KBLI
- **THEN** sistem menampilkan informasi KBLI 70209 (Aktivitas Konsultasi Manajemen Lainnya) dan KBLI 62019/62029 (Aktivitas Pemrograman dan Konsultasi Komputer Lainnya) beserta status kepatuhan hukum RI

### Requirement: Arsitektur Keamanan Data dan Deployment Fleksibel
Halaman kualifikasi vendor SHALL menjelaskan kapabilitas deployment On-Premise di server lokal BUMN dan Private Cloud lokal di Indonesia yang memenuhi amanat UU Perlindungan Data Pribadi (UU PDP).

#### Scenario: Auditor atau tim IT BUMN mengevaluasi kepatuhan data residency
- **WHEN** tim IT/Security BUMN membaca spesifikasi arsitektur deployment
- **THEN** sistem mengonfirmasi ketersediaan arsitektur Bare Metal/On-Premise BUMN, isolasi database mandiri, dan dukungan integrasi ERP lokal tanpa ketergantungan server luar negeri

### Requirement: Panduan Kerangka Acuan Kerja (KAK / TOR)
Halaman kualifikasi vendor SHALL menyajikan ringkasan klausul teknis standar yang dapat diadopsi oleh panitia pengadaan dalam menyusun KAK/TOR tender sistem ICOFR.

#### Scenario: Panitia pengadaan mengadopsi klausul KAK
- **WHEN** panitia pengadaan membaca panduan spesifikasi KAK
- **THEN** sistem menyajikan komponen inti KAK mencakup ruang lingkup (Tabel 22 SK-5/2024, Test of Design, Test of Operating Effectiveness), kualifikasi tenaga ahli (CA/CIA/CICA/GRCP), dan service level agreement (SLA)

### Requirement: Schema JSON-LD Pengadaan Terstruktur
Halaman kualifikasi vendor SHALL menyertakan Schema.org JSON-LD yang merepresentasikan entitas layanan B2B (`Service` / `ProfessionalService`) yang tertaut ke organisasi dan principal founder.

#### Scenario: Mesin pencari mengindeks halaman kualifikasi vendor
- **WHEN** search engine crawler memproses script schema pada halaman `/kualifikasi-vendor`
- **THEN** crawler menerima data terstruktur dengan tipe `Service` atau `ProfessionalService`, areaServed "ID", provider "PT Daya Solusi Integra", dan founder "Humbul Kristiawan"
