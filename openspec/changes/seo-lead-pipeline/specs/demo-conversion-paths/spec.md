# Spec Delta

## Purpose

Menjamin setiap halaman yang dikunjungi calon pembeli (panitia pengadaan, SPI, komite audit, direksi) menawarkan jalan 1-klik menuju permintaan demo, sehingga 60-100 kunjungan qualified per bulan benar-benar berpeluang menjadi 2-3 lead.

## ADDED Requirements

### Requirement: CTA Demo 1-Klik di Seluruh Halaman Niat-Beli
Setiap halaman niat-beli SHALL menampilkan ajakan permintaan demo yang dalam 1 klik mengantar pengunjung ke formulir kontak (`/#contact`) dengan konteks layanan halaman asal terisi otomatis. Halaman niat-beli mencakup: `/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/layanan/enterprise-grc`, `/platform/grc-integra`, `/platform/bpm-workflow-editor`, `/kalkulator-sampel-toe`, `/asesmen-maturitas`, `/kualifikasi-vendor`, `/panduan-kak-tor-icofr`. Penempatan minimal: satu CTA terlihat tanpa scroll pada viewport desktop dan satu CTA sesudah konten utama.

#### Scenario: Panitia pengadaan mendarat di halaman KAK/TOR
- **WHEN** pengunjung membuka `/panduan-kak-tor-icofr` dan mengklik ajakan demo
- **THEN** dalam 1 klik ia tiba di formulir kontak dengan konteks layanan pengadaan/KAK terisi, tanpa langkah perantara.

#### Scenario: Audit cakupan CTA
- **WHEN** kesembilan halaman niat-beli diperiksa pada viewport desktop
- **THEN** setiap halaman memiliki minimal dua titik ajakan demo (atas tanpa scroll dan sesudah konten utama), semuanya mengarah ke formulir kontak.

### Requirement: Konteks Layanan Terjaga sampai Formulir
Konteks layanan dari halaman asal (mis. "GRC Integra Demo", "Konsultasi ICOFR") SHALL terbawa sebagai nilai awal field layanan pada formulir dan tetap dapat diubah pengunjung. Konteks yang tidak dikenal sistem SHALL diabaikan dengan aman dan diganti nilai default yang valid, bukan mengosongkan atau merusak formulir.

#### Scenario: Prefill dari kalkulator TOE
- **WHEN** pengunjung meminta demo dari `/kalkulator-sampel-toe`
- **THEN** field layanan formulir terisi konteks kalkulator/demo GRC Integra dan pengunjung tetap bisa menggantinya manual.

#### Scenario: Konteks tak dikenal
- **WHEN** navigasi tiba dengan konteks layanan yang tidak terdaftar
- **THEN** formulir memakai nilai layanan default yang valid dan seluruh validasi tetap berjalan normal.

### Requirement: Halaman Edukasi Tetap Punya Jalan Keluar ke Demo
Halaman berniat-edukasi yang berkinerja trafik (artikel blog pilar, glosarium populer, `/regulasi`) SHALL memuat minimal satu ajakan kontekstual menuju demo atau alat interaktif terkait (bukan banner generik), tanpa mengganggu pengalaman baca.

#### Scenario: Pembaca artikel panduan SK-5
- **WHEN** pembaca mencapai akhir artikel `/blog/panduan-sk5-icofr-grc-integra`
- **THEN** tersedia ajakan kontekstual (mis. menuju kalkulator TOE, asesmen, atau demo) yang relevan dengan isi artikel.
