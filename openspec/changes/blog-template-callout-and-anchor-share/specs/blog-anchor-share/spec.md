## Purpose

Memungkinkan pembaca menyalin tautan jangkar (anchor deep-link) sub-bagian artikel secara instan ke clipboard untuk mempermudah kutipan dan memperkuat sitelinks di mesin pencari.

## ADDED Requirements

### Requirement: Copy Anchor Deep-Link on Heading Click
Sistem HARUS menyediakan tombol salin tautan pada setiap elemen judul bagian (H2) yang memiliki ID jangkar unik, menyalin URL lengkap beserta hash jangkar ke papan klip pengguna saat diklik, serta menampilkan indikator keberhasilan secara visual.

#### Scenario: User clicks anchor link button
- **WHEN** pembaca mengklik ikon tautan di samping judul H2 artikel
- **THEN** URL artikel lengkap beserta tanda pagar jangkar (misal `#tabel-22-...`) tersalin ke clipboard dan ikon berubah sementara menjadi tanda centang sebagai konfirmasi.
