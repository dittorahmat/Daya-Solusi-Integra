## Purpose

Menampilkan fitur, kapabilitas, dan nilai tambah dari software GRC Integra di situs web Daya Solusi Integra guna mendongkrak konversi lead permintaan demo dan mendominasi kata kunci software ICOFR BUMN.

## ADDED Requirements

### Requirement: Section showcase GRC Integra pada beranda
Sistem SHALL menyediakan section khusus beridentitas `#platform` di beranda yang mendemonstrasikan kapabilitas software GRC Integra dalam memenuhi regulasi SK-5/DKU.MBU/11/2024.

#### Scenario: Navigasi dan visualisasi fitur platform
- **WHEN** pengunjung membuka atau menavigasi ke `#platform`
- **THEN** antarmuka menampilkan ringkasan visual platform GRC Integra, pilar-pilar kepatuhan SK-5 (Scoping, BPM, Tabel 22, QR Asersi), dan tombol aksi "Jadwalkan Demo Platform".

### Requirement: Opsi layanan Demo GRC Integra pada form kontak
Form kontak konsultasi SHALL menyediakan pilihan layanan spesifik untuk permohonan demo platform GRC Integra.

#### Scenario: Memilih layanan demo di formulir
- **WHEN** pengguna memilih opsi "Demo Platform GRC Integra"
- **THEN** field layanan terisi secara otomatis dan pesan placeholder menyesuaikan kebutuhan evaluasi software.

### Requirement: Publikasi artikel pilar regulasi SK-5
Sistem SHALL memuat artikel blog edukatif terstruktur yang membahas tuntas kewajiban regulasi SK-5/DKU.MBU/11/2024 dan solusi digitalisasinya melalui GRC Integra.

#### Scenario: Mengakses artikel pilar blog
- **WHEN** pengunjung membuka slug `/blog/panduan-sk5-icofr-grc-integra`
- **THEN** artikel ter-render lengkap dengan metadata author, tanggal, tag relevan, dan tautan internal CTA konsultasi/demo.
