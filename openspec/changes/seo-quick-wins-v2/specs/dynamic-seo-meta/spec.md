## MODIFIED Requirements

### Requirement: Sinkronisasi Tag Dokumen Head Sesuai Rute
Sistem SHALL menyediakan pengelola metadata yang memperbarui `document.title`, meta deskripsi, canonical link, serta tag OpenGraph/Twitter saat pengguna bernavigasi ke rute mana pun di aplikasi.

#### Scenario: Navigasi ke subhalaman layanan atau glosarium
- **WHEN** pengguna berpindah rute ke `/glosarium` atau `/layanan/icofr-bumn`
- **THEN** judul jendela browser dan atribut meta deskripsi diperbarui sesuai identitas konten halaman tersebut tanpa reload halaman penuh.

## ADDED Requirements

### Requirement: Optimasi CTR Title dan Deskripsi Halaman Uang
Title dan meta description pada 6 halaman uang (beranda, `/layanan/icofr-bumn`, `/platform/grc-integra`, `/kalkulator-sampel-toe`, `/blog/panduan-sk5-icofr-grc-integra`, `/kualifikasi-vendor`) SHALL memuat keyword utama di awal dalam batas tampil SERP (title maksimal 60 karakter bagian tampil, deskripsi 150-160 karakter) dan DILARANG memakai pola sufiks seragam yang terpotong.

#### Scenario: Pemeriksaan snippet SERP halaman uang
- **WHEN** title dan deskripsi 6 halaman uang diperiksa panjang dan posisi keywordnya
- **THEN** keyword utama tampil penuh tanpa terpotong di hasil pencarian dan tiap halaman punya deskripsi unik yang berbeda dari halaman lain.

### Requirement: Diferensiasi OG Image per Silo
Setiap silo utama (layanan, platform, toolkit/kalkulator) SHALL memakai OG image berbeda yang mewakili silonya; berbagi satu gambar global untuk seluruh halaman layanan/platform DILARANG.

#### Scenario: Pratinjau berbagi tautan per silo
- **WHEN** tautan halaman layanan dan halaman platform dibagikan ke media sosial atau pesan instan
- **THEN** kartu pratinjau masing-masing menampilkan gambar berbeda sesuai silonya dengan dimensi 1200x630.
