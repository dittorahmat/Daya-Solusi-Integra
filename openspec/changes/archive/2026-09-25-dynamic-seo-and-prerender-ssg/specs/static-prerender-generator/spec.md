## Purpose

Menghasilkan file HTML statis fisik untuk setiap rute resmi di direktori `dist/` saat proses build aplikasi guna menyediakan respon instan untuk web bot dan pratinjau media sosial.

## ADDED Requirements

### Requirement: Generasi Berkas HTML Fisik Per Rute Pasca-Build
Sistem SHALL menyediakan skrip pasca-build yang membaca berkas template `dist/index.html` dan menghasilkan direktori serta file `index.html` tersendiri untuk setiap rute (seperti `dist/glosarium/index.html`, `dist/layanan/icofr-bumn/index.html`, dan artikel blog).

#### Scenario: Eksekusi build produksi
- **WHEN** perintah `npm run build` dijalankan
- **THEN** sistem secara otomatis menghasilkan file `index.html` fisik dengan tag `<title>`, `<meta description>`, Open Graph tags, dan canonical URL yang tepat di dalam folder masing-masing rute pada direktori `dist/`.

### Requirement: Integritas Struktur Skema dan Konten Statis
Setiap berkas HTML hasil generasi rute SHALL mempertahankan script bundle JS aplikasi sehingga browser pengguna tetap dapat melakukan hidrasi interaktif normal.

#### Scenario: Pemuatan halaman statis oleh pengguna
- **WHEN** pengguna mengakses URL subhalaman hasil generasi statis langsung melalui web server
- **THEN** halaman dimuat secara instan dan aplikasi React melakukan hidrasi tanpa error console.
