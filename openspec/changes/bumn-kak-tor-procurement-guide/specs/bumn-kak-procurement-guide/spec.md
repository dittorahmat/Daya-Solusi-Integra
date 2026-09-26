## Purpose

Menyediakan panduan komprehensif, klausul baku Kerangka Acuan Kerja (KAK / TOR), spesifikasi teknis software GRC, kualifikasi tenaga ahli, dan formulir permohonan berkas lelang resmi bagi panitia pengadaan BUMN yang ingin melaksanakan tender konsultan ICOFR serta sistem kepatuhan SK-5/DKU.MBU/11/2024.

## ADDED Requirements

### Requirement: Halaman Publik Panduan KAK dan TOR Pengadaan BUMN
Sistem SHALL menyediakan rute publik `/panduan-kak-tor-icofr` yang menyajikan panduan penyusunan KAK/TOR, dasar regulasi PER-2/MBU/03/2023 jo. SK-5/DKU.MBU/11/2024, klausul ruang lingkup kerja konsultan, dan spesifikasi teknis software GRC.

#### Scenario: Panitia pengadaan mengakses panduan KAK
- **WHEN** panitia pengadaan atau auditor internal membuka URL `https://dsintegra.co.id/panduan-kak-tor-icofr`
- **THEN** sistem merender halaman panduan pengadaan dengan navigasi klausul interaktif, pratinjau pasal spesifikasi teknis, tabel jangka waktu proyek, dan formulir unduh berkas

### Requirement: Pratinjau Klausul Spesifikasi Teknis Software GRC
Halaman panduan KAK SHALL menyajikan klausul spesifikasi teknis sistem perangkat lunak yang menetapkan standar fungsionalitas otomasi SK-5 BUMN, mencakup dukungan arsitektur on-premise, pemetaan BPMN Lampiran 3, kalkulator sampel normatif Tabel 22, dan modul asersi digital ber-QR Code.

#### Scenario: Pejabat Pembuat Komitmen menyalin spesifikasi teknis sistem
- **WHEN** pengguna memilih tab spesifikasi teknis platform GRC
- **THEN** sistem menampilkan parameter teknis minimum perangkat lunak secara transparan dan terstruktur yang dapat diadopsi ke dalam lembar spesifikasi pengadaan resmi

### Requirement: Alur Permohonan Berkas Draf Dokumen Word / DOCX
Halaman panduan KAK SHALL menyediakan formulir permohonan dokumen draf KAK/TOR berformat Word editable yang menghubungkan nama pejabat, instansi BUMN, surel kedinasan, dan kebutuhan paket lelang ke kanal resmi `marketing@dsintegra.co.id` dan WhatsApp resmi PT Daya Solusi Integra.

#### Scenario: Pengguna mengajukan draf KAK resmi
- **WHEN** pengguna mengisi formulir permohonan KAK dan mengklik tombol kirim
- **THEN** sistem memvalidasi kelengkapan data dan membuka tautan surat elektronik resmi dengan detail permohonan terstruktur tanpa galat

### Requirement: Skema Terstruktur TechArticle dan HowTo
Rute `/panduan-kak-tor-icofr` SHALL menyematkan data terstruktur Schema.org bertipe `@type: TechArticle` dan `@type: HowTo` yang memperkuat pengindeksan mesin pencari Google dan kutipan ringkasan AI generatif (AEO).

#### Scenario: Mesin pencari memproses data terstruktur KAK pengadaan
- **WHEN** crawler Google atau agen AI memproses rute `/panduan-kak-tor-icofr`
- **THEN** sistem menyajikan skema JSON-LD valid yang mengaitkan langkah-langkah penyusunan KAK dengan entitas PT Daya Solusi Integra
