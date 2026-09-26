## ADDED Requirements

### Requirement: Halaman Detail Entitas Glosarium Individual di Rute /glosarium/:slug
Sistem SHALL menyediakan rute mandiri `/glosarium/:slug` untuk setiap istilah kepatuhan ICOFR, metodologi pengujian, dan klasifikasi kontrol (contoh: `/glosarium/icofr`, `/glosarium/tabel-22`, `/glosarium/tod`, `/glosarium/toe`).

#### Scenario: Navigasi pengguna ke halaman entitas glosarium spesifik
- **WHEN** pengguna atau crawler membuka rute URL seperti `https://dsintegra.co.id/glosarium/icofr`
- **THEN** sistem merender halaman entitas mandiri yang memuat definisi mendalam, akronim, klausul regulasi, contoh konkret penerapan di BUMN, takeaways kunci, dan tombol kembali ke direktori utama `/glosarium`.

### Requirement: Structured Data Schema DefinedTerm untuk Istilah Glosarium
Sistem SHALL menginjeksi schema `DefinedTerm` dan `BreadcrumbList` JSON-LD ke dalam snapshot HTML setiap rute `/glosarium/:slug`.

#### Scenario: Pengecekan schema DefinedTerm oleh mesin pencari
- **WHEN** crawler Google memeriksa kode sumber rute `/glosarium/tabel-22`
- **THEN** sistem menyajikan structured data `DefinedTerm` dengan properti `name`, `termCode`, `description`, `inDefinedTermSet` menunjuk ke `https://dsintegra.co.id/glosarium`, dan breadcrumb yang valid.

### Requirement: Tautan Balik Kontekstual Antar Istilah Terkait
Setiap halaman `/glosarium/:slug` SHALL menyajikan rekomendasi istilah terkait dan tautan langsung ke layanan atau produk GRC Integra yang relevan.

#### Scenario: Eksplorasi istilah terkait oleh pengunjung
- **WHEN** pengguna membaca halaman `/glosarium/tod` (Test of Design)
- **THEN** sistem menampilkan tautan ke istilah kelanjutannya yaitu `/glosarium/toe` (Test of Operating Effectiveness) dan link solusi `/platform/grc-integra`.
