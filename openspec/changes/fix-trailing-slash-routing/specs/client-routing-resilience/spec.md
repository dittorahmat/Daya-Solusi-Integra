## Purpose

Menyediakan ketahanan normalisasi perutean rute sisi klien (SPA) terhadap variasi akhiran trailing slash dan parameter slug dinamis guna mencegah kesalahan navigasi atau fallback yang keliru saat pengguna mengakses halaman web dari mesin pencari seperti Google.

## ADDED Requirements

### Requirement: Global Trailing Slash Tolerance
Sistem SPA SHALL menormalisasi `currentPath` sehingga rute dengan atau tanpa tanda garis miring penutup (*trailing slash*) dievaluasi secara identik.

#### Scenario: Navigasi langsung dengan trailing slash
- **WHEN** pengguna membuka URL halaman statis atau sub-halaman dengan trailing slash seperti `/layanan/icofr-bumn/`
- **THEN** sistem me-render halaman `IcofrBumnPage` yang tepat dan tidak mengembalikan pengguna ke halaman beranda

### Requirement: Dynamic Slug Parameter Sanitization
Sistem SPA SHALL mengekstrak slug parameter dinamis (artikel blog, glosarium, sektor BUMN) dalam kondisi bersih tanpa karakter garis miring di awal maupun di akhir string.

#### Scenario: Membuka artikel blog dari URL terindeks Google dengan trailing slash
- **WHEN** pengguna mengklik tautan dari Google seperti `/blog/manfaat-aplikasi-icofr-bumn-spreadsheet/`
- **THEN** sistem mengekstrak slug sebagai `manfaat-aplikasi-icofr-bumn-spreadsheet`, menemukan `activePost` yang sesuai, dan langsung menampilkan artikel blog lengkap alih-alih me-render katalog blog fallback

#### Scenario: Membuka glosarium atau sektor dengan trailing slash
- **WHEN** pengguna mengakses rute glosarium `/glosarium/icofr/` atau sektor `/sektor-bumn/perbankan/`
- **THEN** sistem mengekstrak slug secara bersih dan menampilkan halaman detail yang relevan tanpa kegagalan pencocokan data

### Requirement: SEO Document Metadata Path Alignment
Sistem SPA SHALL meneruskan path yang telah dinormalisasi ke modul pembaruan dokumen SEO `updateDocumentMeta` saat terjadi perubahan rute.

#### Scenario: Sinkronisasi meta tag saat rute berakhiran slash diakses
- **WHEN** URL dengan trailing slash diakses oleh peramban
- **THEN** dokumen `<title>`, canonical link, dan Open Graph meta diperbarui sesuai path kanonikal resmi tanpa trailing slash
