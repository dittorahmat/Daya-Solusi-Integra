## Purpose

Memperbarui elemen `<title>`, `<meta name="description">`, `<link rel="canonical">`, dan kartu Open Graph secara dinamis pada browser sesuai rute aktif yang sedang dikunjungi.

## ADDED Requirements

### Requirement: Sinkronisasi Tag Dokumen Head Sesuai Rute
Sistem SHALL menyediakan pengelola metadata yang memperbarui `document.title`, meta deskripsi, canonical link, serta tag OpenGraph/Twitter saat pengguna bernavigasi ke rute mana pun di aplikasi.

#### Scenario: Navigasi ke subhalaman layanan atau glosarium
- **WHEN** pengguna berpindah rute ke `/glosarium` atau `/layanan/icofr-bumn`
- **THEN** judul jendela browser dan atribut meta deskripsi diperbarui sesuai identitas konten halaman tersebut tanpa reload halaman penuh.

### Requirement: Format Canonical URL dan Standar Domain Resmi
Sistem SHALL selalu mengonstruksi canonical link dengan basis domain resmi `https://dsintegra.co.id` diikuti dengan path rute aktif yang bersangkutan.

#### Scenario: Pengecekan canonical tag di browser DOM
- **WHEN** inspeksi tag `<link rel="canonical">` dilakukan pada rute `/platform/grc-integra`
- **THEN** nilai `href` adalah `https://dsintegra.co.id/platform/grc-integra`.
