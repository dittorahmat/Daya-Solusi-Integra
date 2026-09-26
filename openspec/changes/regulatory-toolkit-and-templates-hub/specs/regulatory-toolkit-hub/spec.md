## Purpose

Menyediakan hub direktori dan pratinjau kertas kerja standar kepatuhan regulasi SK-5 BUMN, mencakup template RCM, checklist evaluasi ELC, dan kertas kerja TOE, serta memfasilitasi formulir permohonan file spreadsheet resmi dan konversi lead ke platform GRC Integra.

## ADDED Requirements

### Requirement: Halaman Publik Regulatory Toolkit Hub
Sistem SHALL menyediakan rute publik `/toolkit-regulasi` yang menyajikan katalog pratinjau kertas kerja kepatuhan SK-5 BUMN dan tata kelola COSO secara terstruktur dan dapat dibaca sekilas (glanceable).

#### Scenario: Pengguna mengunjungi rute toolkit regulasi
- **WHEN** pengguna atau crawler mengakses URL `https://dsintegra.co.id/toolkit-regulasi`
- **THEN** sistem merender halaman lengkap dengan header toolkit, kartu pratinjau 3 artefak utama (RCM, ELC, TOE), tabel spesifikasi kolom, dan formulir permohonan berkas

### Requirement: Pratinjau Interaktif Struktur Kertas Kerja
Halaman toolkit SHALL menampilkan pratinjau tabel interaktif yang memperlihatkan struktur kolom standar untuk Risk & Control Matrix (RCM), Entity-Level Control (ELC), dan Test of Operating Effectiveness (TOE).

#### Scenario: Auditor internal mempelajari struktur kolom RCM SK-5
- **WHEN** auditor internal meninjau tab/section pratinjau RCM
- **THEN** sistem menampilkan struktur kolom standar: Kode Risiko, Sub-Proses Bisnis, Deskripsi Risiko, Aktivitas Pengendalian, Asersi Manajemen (E, C, V, R, P), Tipe Kontrol, Frekuensi, dan Metodologi Uji

### Requirement: Alur Permohonan Berkas Template Resmi (Lead Capture)
Halaman toolkit SHALL menyediakan antarmuka permohonan download paket spreadsheet resmi yang menghubungkan nama pengguna, instansi BUMN, dan surel resmi ke kanal email `marketing@dsintegra.co.id` dan WhatsApp resmi PT Daya Solusi Integra.

#### Scenario: Pengguna mengajukan permohonan berkas template
- **WHEN** pengguna mengisi nama, instansi BUMN, surel, dan mengklik tombol "Kirim Permohonan Paket Template"
- **THEN** sistem memvalidasi kelengkapan formulir dan menyiapkan pesan terstruktur menuju kanal komunikasi resmi perusahaan tanpa error

### Requirement: Skema JSON-LD DigitalDocument & DataCatalog
Halaman toolkit regulasi SHALL memuat data terstruktur Schema.org bertipe `@type: DataCatalog` dan `@type: DigitalDocument` yang mengidentifikasi paket kertas kerja kepatuhan SK-5 sebagai aset publikasi resmi PT Daya Solusi Integra.

#### Scenario: Search engine crawler memproses data terstruktur toolkit
- **WHEN** crawler memproses skema pada `/toolkit-regulasi`
- **THEN** sistem menyajikan objek DataCatalog berisi entitas DigitalDocument dengan hak cipta PT Daya Solusi Integra dan founder Humbul Kristiawan
