# Spec Delta

## ADDED Requirements

### Requirement: Direct Answer Snippet Block pada Halaman Glosarium
Sistem SHALL menyediakan blok Direct Answer Box (Inverted Pyramid Method) berformat 40 hingga 60 kata persis di bawah judul halaman istilah glosarium `/glosarium/:slug` guna mengoptimasi keterbacaan Google Featured Snippet dan AI Overviews.

#### Scenario: Perenderan Direct Answer Box untuk istilah kunci
- **WHEN** pengguna atau crawler membuka halaman istilah glosarium (seperti `/glosarium/compensating-control` atau `/glosarium/defisiensi-kontrol`)
- **THEN** sistem merender blok definisi ringkas yang eksplisit, jelas, dan memuat acuan regulasi resmi SK-5/DKU.MBU/11/2024 atau COSO Framework di atas uraian komprehensif.

### Requirement: Structured Data Schema DefinedTerm dan FAQPage pada Istilah Glosarium
Sistem SHALL menyematkan skema JSON-LD terstruktur tipe `DefinedTerm` dan `FAQPage` pada setiap halaman istilah glosarium individual dengan basis canonical `https://dsintegra.co.id/glosarium/:slug`.

#### Scenario: Validasi skema JSON-LD istilah glosarium
- **WHEN** mesin pencari atau parser schema membaca metadata halaman istilah glosarium
- **THEN** sistem menyajikan script JSON-LD dengan `@type` DefinedTerm yang memuat nama istilah, deskripsi, dan inDefinedTermSet, serta FAQPage yang memuat pertanyaan definisi lazim.

### Requirement: Tabel Komparasi dan Matriks Evaluasi Istilah Kunci
Sistem SHALL menyediakan komponen tabel komparasi atau matriks diferensiasi pada istilah evaluasi kontrol (misal: Komparasi Kontrol Utama vs Kompensasi, atau Matriks Tingkatan Defisiensi: Ringan, Signifikan, Material) untuk memperkuat *information gain*.

#### Scenario: Penelusuran istilah klasifikasi kontrol
- **WHEN** pengguna menavigasi ke halaman istilah dengan atribut perbandingan struktural
- **THEN** sistem menampilkan tabel komparasi dua kolom atau tiga kolom yang rapi, mudah dibaca, dan bebas dari em-dash.
