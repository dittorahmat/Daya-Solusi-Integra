# seo-404-handling Specification

## Purpose
Memberikan respons halaman tidak ditemukan yang jujur kepada pengguna dan crawler sehingga URL tak dikenal tidak lagi menyamar sebagai homepage dan tidak menguras crawl budget.

## Requirements

### Requirement: Halaman 404 Khusus Dengan Navigasi Kembali
Sistem SHALL menyediakan halaman 404 khusus dengan pesan yang jelas dan tautan navigasi kembali ke beranda, glosarium, blog, dan kontak.

#### Scenario: Pengguna membuka URL tak dikenal
- **WHEN** pengguna atau crawler mengakses path yang tidak cocok dengan rute resmi mana pun (misal `/blog/artikel-ngawur` atau `/layanan/xyz`)
- **THEN** sistem menampilkan halaman 404 khusus dengan pesan yang jelas dan tautan kembali, bukan konten homepage.

### Requirement: Status HTTP 404 Dan Noindex Pada Halaman Tidak Ditemukan
Sistem SHALL mengembalikan status HTTP 404 dan tag `noindex, follow` untuk setiap respons halaman tidak ditemukan, termasuk slug blog, glosarium, dan sektor yang tidak cocok.

#### Scenario: Crawler mengaudit URL ngawur
- **WHEN** crawler atau perintah curl meminta URL tak dikenal pada server produksi
- **THEN** respons memakai status HTTP 404 dan HTML memuat `<meta name="robots" content="noindex, follow">` tanpa schema indexable (tanpa Article, Service, atau FAQ).

### Requirement: Pengecualian 404 Dari Sitemap Dan Feed
Sistem SHALL mengecualikan halaman 404 dari `sitemap.xml`, `feed.xml`, dan navigasi `SiteNavigationElement` sehingga tidak ada sinyal indexable yang menunjuk ke sana.

#### Scenario: Validasi sitemap dan feed pasca-build
- **WHEN** build selesai dan `sitemap.xml` serta `feed.xml` diperiksa
- **THEN** tidak ada entri `/404` atau URL tak dikenal di dalamnya, dan tidak ada tautan navigasi internal yang menunjuk ke halaman 404.
