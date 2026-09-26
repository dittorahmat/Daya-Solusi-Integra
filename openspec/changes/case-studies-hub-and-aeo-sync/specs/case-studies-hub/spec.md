## Purpose

Menyediakan halaman direktori terpusat studi kasus implementasi ICOFR BUMN, benchmark maturitas pengendalian internal, dan pembuktian metrik audit konkret untuk kebutuhan bottom-of-funnel (BOFU) pengambil keputusan BUMN.

## ADDED Requirements

### Requirement: Case Studies Directory and Benchmark Scoreboard
Sistem SHALL menyediakan rute publik `/studi-kasus` yang memuat scoreboard metrik agregat dan katalog studi kasus implementasi ICOFR BUMN yang terverifikasi.

#### Scenario: Navigating to case studies page
- **WHEN** Pengguna membuka URL `/studi-kasus`
- **THEN** Sistem menampilkan ringkasan metrik pencapaian (eliminasi defisiensi 42 ke 0, efisiensi waktu TOE hingga 70 persen, 100 persen asersi direksi SK-5) dan daftar studi kasus sektoral BUMN (Holding BUMN, Perbankan, Infrastruktur Karya).

### Requirement: Interactive Sectoral Filtering
Sistem SHALL menyediakan kemampuan filter atau pengelompokan studi kasus berdasarkan sektor BUMN (Semua Sektor, Holding Multisektor, Perbankan, Infrastruktur).

#### Scenario: Filtering case studies
- **WHEN** Pengguna memilih salah satu kategori sektor
- **THEN** Daftar studi kasus yang ditampilkan beradaptasi sesuai sektor yang dipilih tanpa memuat ulang halaman.

### Requirement: Structured Data and E-E-A-T FAQ Schema
Sistem SHALL menyertakan skema terstruktur `CollectionPage` dan `ItemList` serta `FAQPage` rich snippet pada rute `/studi-kasus`.

#### Scenario: Search engine crawler inspecting structured data
- **WHEN** Mesin pencari mengekstrak metadata dari `/studi-kasus`
- **THEN** Terdapat simpul JSON-LD dengan `@type: CollectionPage`, `@type: ItemList`, dan `@type: FAQPage` yang memuat pertanyaan seputar kerahasiaan data BUMN (NDA) dan metodologi pengukuran ROI.
