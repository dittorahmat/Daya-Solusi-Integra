# static-prerender-generator Specification

## Purpose
Menghasilkan file HTML statis fisik untuk setiap rute resmi di direktori `dist/` saat proses build aplikasi guna menyediakan respon instan untuk web bot dan pratinjau media sosial.

## Requirements

### Requirement: Generasi Berkas HTML Fisik Per Rute Pasca-Build
Sistem SHALL menyediakan skrip pasca-build yang membaca berkas template `dist/index.html` dan menghasilkan direktori serta file `index.html` tersendiri untuk setiap rute (seperti `dist/glosarium/index.html`, `dist/layanan/icofr-bumn/index.html`, dan artikel blog), dengan tanggal dinamis, head hygiene lengkap, dan image sitemap penuh.

#### Scenario: Eksekusi build produksi
- **WHEN** perintah `npm run build` dijalankan
- **THEN** sistem secara otomatis menghasilkan file `index.html` fisik dengan tag `<title>`, `<meta description>`, Open Graph tags, canonical URL, `theme-color`, `og:image:alt`, dan `article:published_time`/`article:modified_time` (untuk rute artikel) yang tepat di dalam folder masing-masing rute pada direktori `dist/`.

#### Scenario: Drift tanggal atau gambar ditolak saat build
- **WHEN** tanggal front-matter artikel diubah atau `coverImage` didriftkan dari daftar sitemap
- **THEN** build mencetak peringatan eksplisit per slug (seperti validasi drift slug yang sudah ada) dan `sitemap.xml` selalu mencerminkan tanggal serta gambar terkini.

### Requirement: Integritas Struktur Skema dan Konten Statis
Setiap berkas HTML hasil generasi rute SHALL mempertahankan script bundle JS aplikasi sehingga browser pengguna tetap dapat melakukan hidrasi interaktif normal.

#### Scenario: Pemuatan halaman statis oleh pengguna
- **WHEN** pengguna mengakses URL subhalaman hasil generasi statis langsung melalui web server
- **THEN** halaman dimuat secara instan dan aplikasi React melakukan hidrasi tanpa error console.

### Requirement: Tanggal Dinamis Berbasis Front-Matter Dan Mtime
Sistem SHALL membaca `datePublished` dari front-matter markdown artikel dan `dateModified` dari waktu modifikasi berkas, lalu menulisnya ke JSON-LD, elemen `<time>` semantik, dan `lastmod` sitemap.

#### Scenario: Artikel diperbarui
- **WHEN** berkas markdown artikel diubah tanpa mengubah tanggal terbit front-matter
- **THEN** `datePublished` tetap dari front-matter, `dateModified` dan `lastmod` sitemap mengikuti waktu modifikasi terbaru, dan tidak ada tanggal hardcode yang tersisa.

### Requirement: Image Sitemap Penuh Untuk Seluruh URL
Sistem SHALL menyertakan entri `image:image` pada `sitemap.xml` untuk seluruh 54 URL, memakai `coverImage` front-matter untuk artikel blog dan OG image per silo (`og-image`, `og-layanan`, `og-platform`, `og-toolkit`) untuk halaman non-blog.

#### Scenario: Validasi cakupan image sitemap
- **WHEN** `sitemap.xml` divalidasi terhadap skema dengan namespace gambar
- **THEN** setiap entri `<url>` memuat tepat satu atau lebih `<image:image>` yang URL-nya dapat diakses (status 200 dengan content-type gambar).
