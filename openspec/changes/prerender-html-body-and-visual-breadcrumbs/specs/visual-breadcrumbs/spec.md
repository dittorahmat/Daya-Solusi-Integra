## Purpose

Menyediakan komponen navigasi breadcrumbs visual hierarkis pada subhalaman untuk memandu pengguna, memperjelas struktur informasi, dan memvalidasi skema BreadcrumbList mesin pencari.

## ADDED Requirements

### Requirement: Komponen Navigasi Breadcrumbs Visual
Aplikasi SHALL menampilkan jalur breadcrumb visual interaktif pada seluruh subhalaman (layanan, produk platform, asesmen, glosarium, kalkulator TOE, kebijakan privasi, pernyataan independensi, dan artikel blog).

#### Scenario: Navigasi visual pada subhalaman
- **WHEN** pengguna atau bot membuka subhalaman selain beranda
- **THEN** sistem menampilkan rantai breadcrumb visual yang diawali dengan tautan 'Beranda' menuju root domain dan diakhiri dengan nama halaman aktif tanpa tanda em-dash atau en-dash.

### Requirement: Keselarasan dengan Skema BreadcrumbList
Jalur breadcrumb visual SHALL memetakan struktur hierarki yang sama persis dengan skema JSON-LD `BreadcrumbList` pada tag `<head>` halaman.

#### Scenario: Evaluasi crawler terhadap struktur breadcrumb
- **WHEN** crawler membaca teks navigasi visual dan data terstruktur JSON-LD
- **THEN** penamaan entitas dan urutan posisi hirarki antara DOM visual dan JSON-LD BreadcrumbList terbukti identik dan konsisten.
