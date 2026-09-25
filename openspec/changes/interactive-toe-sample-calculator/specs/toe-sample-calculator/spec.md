## Purpose

Menyediakan kalkulator ukuran sampel pengujian kontrol manual (TOE) interaktif di rute `/kalkulator-sampel-toe` berdasarkan Tabel 22 regulasi SK-5/DKU.MBU/11/2024.

## ADDED Requirements

### Requirement: Halaman Interaktif Kalkulator Sampel TOE
Sistem SHALL menyediakan rute publik `https://dsintegra.co.id/kalkulator-sampel-toe` yang menampilkan kalkulator penentuan jumlah sampel pengujian kontrol manual berbasis Tabel 22 regulasi Kementerian BUMN.

#### Scenario: Pemilihan frekuensi kontrol oleh pengguna
- **WHEN** pengguna memilih frekuensi kontrol (seperti "Bulanan", "Harian", atau "Mingguan")
- **THEN** sistem langsung menampilkan rentang jumlah sampel minimum yang wajib diuji, penjelasan populasi kontrol, dan panduan mitigasi deviasi.

### Requirement: Panduan Normatif Kepatuhan Toleransi Deviasi Nol
Sistem SHALL menampilkan penjelasan kepatuhan zero tolerable deviation rate (jika ditemukan 1 deviasi dalam sampel, kontrol disimpulkan tidak efektif) dan perbandingan kontrol otomatis (ITAC) vs kontrol manual.

#### Scenario: Interaksi parameter pengujian
- **WHEN** pengguna mempelajari kalkulasi sampel
- **THEN** sistem menyajikan langkah rekomendasi pengambilan sampel representatif sepanjang periode buku yang diaudit.

### Requirement: Konversi CTA ke Platform GRC Integra
Sistem SHALL menyematkan kartu call-to-action (CTA) yang menawarkan otomasi penuh pengujian dan pelacakan kertas kerja melalui software GRC Integra.

#### Scenario: Klik CTA permintaan demo produk
- **WHEN** pengguna mengeklik tombol permintaan demo GRC Integra dari kalkulator
- **THEN** sistem mengarahkan pengguna ke formulir intake kontak dengan prefill layanan demo GRC Integra.
