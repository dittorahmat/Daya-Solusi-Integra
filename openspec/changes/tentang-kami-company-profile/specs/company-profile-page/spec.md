## Purpose

Menyediakan halaman profil perusahaan mandiri yang indexable sebagai representasi entitas PT Daya Solusi Integra bagi prospek BUMN, mesin pencari, dan AI crawler.

## ADDED Requirements

### Requirement: Halaman Profil Perusahaan Mandiri
Sistem SHALL menyediakan route `/tentang-kami` yang merender halaman profil perusahaan berisi identitas badan usaha, alamat kantor, kanal kontak, jam operasional, legalitas dan kualifikasi, metodologi layanan, serta ajakan bertindak (CTA) menuju asesmen dan kontak.

#### Scenario: Prospek membuka halaman profil perusahaan
- **WHEN** pengguna menavigasi ke `https://dsintegra.co.id/tentang-kami`
- **THEN** halaman menampilkan nama badan usaha, alamat jalan lengkap, nomor telepon, surel resmi, jam operasional, ringkasan legalitas, dan tautan CTA yang berfungsi.

### Requirement: Konsistensi NAP Halaman Profil
Sistem SHALL menampilkan nilai NAP kanonik pada halaman `/tentang-kami` yang identik dengan sumber kebenaran tunggal (lihat kapabilitas `nap-canonicalization`).

#### Scenario: Verifikasi silang alamat dan telepon
- **WHEN** prospek membandingkan alamat dan telepon di `/tentang-kami` dengan section kontak homepage
- **THEN** kedua permukaan menampilkan alamat jalan dan nomor yang sama persis.

### Requirement: Discoverability Halaman Profil
Sistem SHALL mendaftarkan URL `https://dsintegra.co.id/tentang-kami` pada `public/sitemap.xml`, menyediakan metadata SEO lengkap (title, deskripsi, canonical, Open Graph), serta snapshot prerender statis dengan konten teks penuh (bukan shell kosong).

#### Scenario: Crawler mengindeks halaman profil
- **WHEN** mesin pencari membaca `https://dsintegra.co.id/sitemap.xml` dan mengambil snapshot statis `/tentang-kami`
- **THEN** sitemap memuat entri URL tersebut dan snapshot memuat teks konten profil yang dapat dibaca tanpa eksekusi JavaScript.

### Requirement: Tautan Internal Kontekstual
Sistem SHALL menyediakan tautan menuju `/tentang-kami` dari footer situs serta dari halaman `/kualifikasi-vendor`, `/studi-kasus`, dan halaman-halaman `/layanan/*` pada konteks yang relevan (profil vendor, kredibilitas pelaksana).

#### Scenario: Navigasi dari halaman kualifikasi vendor
- **WHEN** pengguna membaca `/kualifikasi-vendor` pada bagian profil legalitas perusahaan
- **THEN** tersedia tautan yang mengarah ke `/tentang-kami`.
