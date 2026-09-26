## Purpose

Menyediakan halaman vertikal spesifik sektor BUMN (Perbankan & Finansial, Infrastruktur & Karya, Energi & Tambang) untuk memenuhi kebutuhan informasi kepatuhan SK-5/DKU.MBU/11/2024 dan regulasi sektoral, memperkuat topical authority, serta memfasilitasi konversi konsultasi enterprise.

## ADDED Requirements

### Requirement: Sektor Landing Pages Accessibility and Content
Sistem SHALL menyediakan rute publik terdedikasi untuk 3 sektor BUMN: `/sektor-bumn/perbankan`, `/sektor-bumn/infrastruktur-karya`, dan `/sektor-bumn/energi-tambang`. Setiap halaman SHALL menampilkan konteks industri, matriks regulasi sektoral, arsitektur RCM khas sektor, FAQ terstruktur, dan Call to Action (CTA) ke asesmen maturitas atau konsultasi.

#### Scenario: Navigasi ke Halaman Sektor Perbankan
- **WHEN** pengguna membuka URL `/sektor-bumn/perbankan`
- **THEN** sistem menampilkan landing page sektor perbankan dengan komparasi SK-5 vs POJK Manajemen Risiko, materi ITGC Core Banking, contoh RCM kredit, dan skema JSON-LD terstruktur.

#### Scenario: Navigasi ke Halaman Sektor Infrastruktur dan Karya
- **WHEN** pengguna membuka URL `/sektor-bumn/infrastruktur-karya`
- **THEN** sistem menampilkan landing page sektor infrastruktur dengan komparasi SK-5 vs PSAK 72 (pengakuan pendapatan proyek), kontrol subkontraktor/vendor, contoh RCM verifikasi fisik vs termin, dan CTA interaktif.

#### Scenario: Navigasi ke Halaman Sektor Energi dan Tambang
- **WHEN** pengguna membuka URL `/sektor-bumn/energi-tambang`
- **THEN** sistem menampilkan landing page sektor energi dan holding tambang dengan komparasi SK-5 vs tata kelola anak perusahaan (holding governance), intercompany balancing, kontrol logistik & inventori, dan CTA interaktif.

### Requirement: Structured Metadata and SEO Prerendering
Sistem SHALL menyediakan metadata SEO lengkap (title spesifik sektor, deskripsi, canonical URL `https://dsintegra.co.id/sektor-bumn/...`, open graph) serta mendaftarkan seluruh rute sektor ke dalam `public/sitemap.xml` dan `prerender-routes.js` untuk static generation.

#### Scenario: Metadata Sinkronisasi saat Route Berganti
- **WHEN** pengguna atau web crawler mengakses salah satu rute sektor BUMN
- **THEN** sistem menyetel tag `<title>`, `<meta name="description">`, dan `<link rel="canonical">` sesuai data sektor yang bersangkutan.

#### Scenario: Crawlability Sitemap
- **WHEN** mesin pencari membaca file `public/sitemap.xml`
- **THEN** ketiga URL sektor terdaftar dengan priority minimal 0.85 dan format URL canonical resmi `https://dsintegra.co.id/sektor-bumn/<sektor>`.

### Requirement: Cross-linking and Navigation Integration
Sistem SHALL menyertakan tautan internal menuju halaman-halaman sektor BUMN di bagian Footer dan halaman layanan terkait guna memperkuat link equity dan navigasi audiens eksekutif.

#### Scenario: Akses Navigasi dari Footer
- **WHEN** pengguna berada di footer situs
- **THEN** pengguna dapat melihat dan mengklik tautan menuju masing-masing sektor BUMN di bagian solusi atau industri.
