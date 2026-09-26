# indexnow-auto-submission Specification

## Purpose
Mengirimkan daftar seluruh URL kanonikal publik ke protokol IndexNow secara otomatis setiap kali build atau penambahan konten dijalankan, memfasilitasi perayapan seketika oleh Bing, Yandex, Seznam, dan Naver.

## Requirements

### Requirement: IndexNow API Ping Pipeline
Sistem generator rute statis SHALL menyertakan langkah akhir untuk memicu IndexNow API submission.

#### Scenario: Pemicuan otomatis pengiriman endpoint
- **WHEN** seluruh snapshot rute statis, berkas sitemap, dan RSS feed selesai ditulis ke disk
- **THEN** sistem mengirimkan batch URL ke `https://api.indexnow.org/indexnow` dan mencatat status respons (200 / 202) tanpa menggagalkan proses build jika koneksi jaringan luar tidak tersedia
