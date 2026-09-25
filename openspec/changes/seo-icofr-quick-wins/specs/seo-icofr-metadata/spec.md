## Purpose

Menyediakan infrastruktur Technical SEO (robots.txt, sitemap.xml), penajaman metadata HTML, dan schema terstruktur untuk meningkatkan keterlihatan pencarian organik dan kredibilitas Daya Solusi Integra sebagai konsultan ICOFR BUMN.

## ADDED Requirements

### Requirement: Mesin pencari dapat menemukan sitemap dan petunjuk perayapan
Sistem SHALL menyediakan file `robots.txt` pada root domain yang mempublikasikan lokasi `sitemap.xml` dan menginstruksikan bot mesin pencari mengenai halaman publik yang diizinkan untuk dirayapi.

#### Scenario: Mengakses robots.txt
- **WHEN** user agent atau web crawler meminta path `/robots.txt`
- **THEN** server mengembalikan respons teks dengan status 200 berisi aturan `User-agent: *` dan deklarasi URL sitemap.

### Requirement: Sitemap XML memuat daftar tautan penting
Sistem SHALL menyediakan file `sitemap.xml` yang memuat URL kanonikal landing page utama, section layanan, blog index, serta artikel blog bertopik ICOFR.

#### Scenario: Mengakses sitemap.xml
- **WHEN** crawler meminta path `/sitemap.xml`
- **THEN** server mengembalikan XML valid berformat urlset dengan bobot prioritas dan frekuensi perubahan yang sesuai.

### Requirement: Halaman utama memiliki metadata spesifik target keyword ICOFR
Halaman `index.html` SHALL memuat meta title, meta description, keywords relevan, open-graph tags, serta canonical link yang menargetkan pencarian seputar konsultan ICOFR, kepatuhan COSO, dan tata kelola BUMN.

#### Scenario: Memeriksa tag meta head
- **WHEN** bot pencari atau browser memuat halaman index
- **THEN** tag `<title>` dan `<meta name="description">` memuat kata kunci eksplisit "ICOFR", "Internal Control over Financial Reporting", dan "BUMN".

### Requirement: JSON-LD Structured Data terpasang
Halaman `index.html` SHALL menyertakan data terstruktur Schema.org berjenis `ProfessionalService` yang mendeskripsikan Daya Solusi Integra beserta spesialisasi layanannya.

#### Scenario: Validasi data terstruktur
- **WHEN** validator schema mengevaluasi halaman utama
- **THEN** script `application/ld+json` ditemukan dengan tipe `@type: ProfessionalService` serta atribut nama, url, deskripsi, dan area pelayanan.
