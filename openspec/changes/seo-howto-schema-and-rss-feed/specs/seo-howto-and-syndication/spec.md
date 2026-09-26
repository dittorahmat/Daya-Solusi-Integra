## Purpose

Menyediakan data terstruktur Schema.org HowTo pada kalkulator sampel TOE untuk memicu featured snippet Google serta menghasilkan feed RSS 2.0 secara otomatis untuk sindikasi konten blog ke mesin pencari dan agen AI.

## ADDED Requirements

### Requirement: HowTo Structured Data untuk Kalkulator TOE
Sistem generator rute statis SHALL menyertakan skema Schema.org `HowTo` pada halaman snapshot `/kalkulator-sampel-toe` dengan langkah-langkah terstruktur penentuan sampel pengujian pengendalian berdasarkan Tabel 22 SK-5 BUMN.

#### Scenario: Prerender menghasilkan skema HowTo pada kalkulator TOE
- **WHEN** skrip prerender static routes dijalankan saat proses build
- **THEN** file snapshot HTML rute `/kalkulator-sampel-toe` memuat script `application/ld+json` dengan tipe `HowTo` yang berisi properti `name`, `description`, `totalTime`, dan daftar `step` (HowToStep).

### Requirement: Otomasi Generasi RSS 2.0 Feed
Sistem build SHALL menghasilkan berkas RSS 2.0 XML yang valid pada `dist/feed.xml` dan `public/feed.xml` berisi seluruh artikel blog yang aktif.

#### Scenario: Pembentukan feed.xml saat build
- **WHEN** skrip build statis dijalankan
- **THEN** berkas `feed.xml` dibuat dengan elemen `<rss version="2.0">`, `<channel>` lengkap dengan metadata situs Daya Solusi Integra, dan elemen `<item>` untuk setiap artikel blog markdown.

### Requirement: Penemuan Berkas Feed (Feed Discovery)
Sistem SHALL menyediakan tag rel alternate RSS feed pada HTML utama dan deklarasi tautan di `public/robots.txt`.

#### Scenario: Crawler menemukan link RSS feed
- **WHEN** crawler atau peramban mengakses halaman situs
- **THEN** tag `<link rel="alternate" type="application/rss+xml" ...>` ditemukan di tag `<head>` dan referensi `feed.xml` tercantum pada berkas `robots.txt`.
