## Purpose

Menyediakan kepatuhan teknis pengindeksan instan melalui protokol IndexNow, menyajikan Schema.org SiteNavigationElement untuk rich sitelinks SERP, serta menyinkronkan feed konteks AI LLMs secara otomatis setiap kali situs dibangun.

## ADDED Requirements

### Requirement: IndexNow Key Verification & Discovery
Sistem SHALL menyediakan berkas verifikasi API Key IndexNow statis di bawah direktori publik serta mendaftarkannya pada robots.txt agar crawler mesin pencari modern dapat memverifikasi kepemilikan host dan menerima notifikasi pembaruan URL secara instan.

#### Scenario: Akses berkas verifikasi IndexNow
- **WHEN** crawler mesin pencari meminta berkas verifikasi kunci IndexNow melalui HTTP GET
- **THEN** sistem mengembalikan kode status 200 dengan nilai string API key yang cocok tanpa wrapping HTML

#### Scenario: Referensi IndexNow di robots.txt
- **WHEN** bot mesin pencari mengurai berkas robots.txt
- **THEN** berkas memuat informasi lokasi berkas kunci IndexNow dan sitemap resmi domain https://dsintegra.co.id

### Requirement: Structured SiteNavigationElement Schema
Sistem SHALL menyematkan schema SiteNavigationElement pada template HTML utama dan snapshot prerender, yang memetakan menu navigasi utama situs (Layanan ICOFR, Platform GRC, Kalkulator TOE, Glosarium Regulasi, dan Blog).

#### Scenario: Validasi Rich Sitelinks Schema di Halaman Beranda
- **WHEN** Google crawler memproses structured data pada halaman beranda atau snapshot statis
- **THEN** script type application/ld+json memuat entitas SiteNavigationElement dengan daftar item navigasi, nama teks, dan URL kanonikal resmi

### Requirement: Automated AI Discovery Sync (llms.txt & llms-full.txt)
Skrip build generator SHALL secara otomatis mengekstrak seluruh artikel markdown dari direktori blog serta entitas glosarium untuk memperbarui berkas `llms.txt` dan `llms-full.txt` di direktori `dist/` dan `public/`.

#### Scenario: Sinkronisasi Konten Baru Saat Build
- **WHEN** proses `npm run build` dijalankan
- **THEN** generator static routes secara otomatis membaca seluruh daftar artikel blog terkini dan menghasilkan file llms.txt dan llms-full.txt yang memuat daftar tautan lengkap beserta ringkasan konteks kepatuhan SK-5 BUMN tanpa memerlukan intervensi manual
