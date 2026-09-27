## Purpose

Menjamin setiap kartu pratinjau berbagi tautan menampilkan gambar brand yang valid, dikenali sebagai Daya Solusi Integra dalam sekejap, dan terbaca pada lebar tampil sekecil 300 piksel di semua scraper media sosial utama.

## ADDED Requirements

### Requirement: Byte Gambar OG Valid Sesuai Content-Type
Setiap berkas OG yang dirujuk tag `og:image` SHALL berisi byte raster asli (JPEG atau PNG) berdimensi 1200x630 yang sesuai dengan `Content-Type` yang disajikan server; markup vektor (SVG) di balik ekstensi raster DILARANG.

#### Scenario: Pemeriksaan header dan isi berkas OG
- **WHEN** berkas OG diambil dengan curl dan byte awalnya diperiksa
- **THEN** header `Content-Type` adalah `image/jpeg` (atau `image/png`) dan byte isi adalah raster valid, bukan markup `<svg`.

### Requirement: Lockup Logo Putih dan Headline Ringkas
Setiap gambar OG SHALL memuat logo DSI versi putih (monokrom, konsisten dengan header/footer) dan headline maksimal 5 kata dengan tinggi huruf yang tetap terbaca saat gambar ditampilkan selebar 300 piksel; paragraf atau daftar bertipografi kecil DILARANG.

#### Scenario: Uji keterbacaan pratinjau kecil
- **WHEN** gambar OG diperkecil ke lebar 300 piksel
- **THEN** logo dan headline masih dikenali dan terbaca tanpa zoom.

### Requirement: Varian Pesan per Silo pada URL Stabil
Varian OG untuk silo layanan, platform, toolkit, dan beranda SHALL memakai pesan (badge dan headline) berbeda sesuai silonya dengan URL berkas yang tidak berubah dari rilis sebelumnya.

#### Scenario: Berbagi tautan lintas silo
- **WHEN** tautan halaman layanan dan halaman platform dibagikan
- **THEN** masing-masing pratinjau menampilkan pesan silonya sendiri dan validator scraper tidak melaporkan gambar kedaluwarsa setelah deploy.
