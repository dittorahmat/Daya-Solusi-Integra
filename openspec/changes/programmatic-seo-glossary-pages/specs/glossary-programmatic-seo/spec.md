## Purpose

Menyediakan halaman individual teroptimasi SEO untuk setiap istilah teknis glosarium kepatuhan ICOFR dan regulasi BUMN, lengkap dengan skema data terstruktur DefinedTerm untuk meningkatkan visibilitas di Google Featured Snippets dan kueri pencarian definisi.

## ADDED Requirements

### Requirement: Dynamic Routing for Glossary Terms
Sistem SHALL mendukung navigasi ke halaman detail individual glosarium melalui path `/glosarium/:slug` untuk seluruh 20 istilah yang terdaftar di sistem.

#### Scenario: Valid glossary slug navigation
- **WHEN** pengguna atau web crawler mengunjungi URL seperti `/glosarium/itgc` atau `/glosarium/tabel-22`
- **THEN** sistem merender halaman detail istilah yang bersangkutan dengan konten spesifik dan tata letak yang sesuai standar desain korporat BUMN

#### Scenario: Invalid glossary slug navigation
- **WHEN** pengguna atau web crawler mengunjungi URL `/glosarium/slug-tidak-ditemukan`
- **THEN** sistem menampilkan pesan informasi bahwa istilah tidak ditemukan serta menyediakan tombol navigasi kembali ke direktori `/glosarium`

### Requirement: Dynamic SEO Metadata and Structured Data
Sistem SHALL memperbarui dokumen `<head>` (title, meta description, canonical link, open graph) dan menyisipkan skema JSON-LD `@type: DefinedTerm` dan `@type: BreadcrumbList` sesuai dengan istilah glosarium yang aktif.

#### Scenario: Metadata update on glossary detail view
- **WHEN** halaman detail `/glosarium/:slug` dimuat
- **THEN** judul halaman dokumen berubah menjadi format `[Term] ([Acronym]): Definisi & Regulasi SK-5 BUMN | Daya Solusi Integra` dan link canonical mengarah ke `https://dsintegra.co.id/glosarium/:slug`

#### Scenario: Schema DefinedTerm presence
- **WHEN** crawler membaca structured data di halaman `/glosarium/:slug`
- **THEN** terdapat elemen script JSON-LD yang merepresentasikan entitas istilah dengan nama, deskripsi, inDefinedTermSet `https://dsintegra.co.id/glosarium`, dan URL resmi istilah

### Requirement: Contextual Conversion and Cross-Linking
Halaman detail glosarium SHALL menyediakan navigasi breadcrumb hierarkis, tombol aksi terarah ke layanan/produk terkait, dan daftar istilah terkait dalam kategori yang sama.

#### Scenario: Navigating to related service
- **WHEN** pengguna mengklik tautan layanan terkait pada halaman detail istilah
- **THEN** aplikasi berpindah ke halaman silo layanan atau produk yang bersangkutan tanpa reload penuh

#### Scenario: Browsing related category terms
- **WHEN** pengguna melihat bagian istilah terkait di halaman detail
- **THEN** sistem menampilkan istilah-istilah lain yang berada di bawah kategori regulasi yang sama dengan tautan navigasi langsung
