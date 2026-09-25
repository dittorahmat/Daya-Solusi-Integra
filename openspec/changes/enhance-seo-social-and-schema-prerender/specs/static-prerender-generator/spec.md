## MODIFIED Requirements

### Requirement: Generasi Berkas HTML Fisik Per Rute Pasca-Build
Sistem SHALL menyediakan skrip pasca-build yang membaca berkas template `dist/index.html` dan menghasilkan direktori serta file `index.html` tersendiri untuk setiap rute (seperti `dist/glosarium/index.html`, `dist/layanan/icofr-bumn/index.html`, dan artikel blog) yang memuat meta tag Open Graph Image (`og:image`, `twitter:image`), dimensi gambar, serta data terstruktur JSON-LD yang modular dan spesifik per rute.

#### Scenario: Eksekusi build produksi
- **WHEN** perintah `npm run build` dijalankan
- **THEN** sistem secara otomatis menghasilkan file `index.html` fisik dengan tag `<title>`, `<meta description>`, Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`), Twitter tags, canonical URL, dan skema JSON-LD terisolasi yang sesuai dengan peruntukan rute di dalam folder direktori `dist/`.

### Requirement: Integritas Struktur Skema dan Konten Statis
Setiap berkas HTML hasil generasi rute SHALL mempertahankan script bundle JS aplikasi sehingga browser pengguna tetap dapat melakukan hidrasi interaktif normal, dan tidak memuat skema JSON-LD artikel atau FAQ global yang tidak relevan dengan rute bersangkutan.

#### Scenario: Validasi data terstruktur pada halaman layanan
- **WHEN** berkas HTML rute layanan atau glosarium diinspeksi oleh crawler
- **THEN** skema JSON-LD yang disajikan hanya memuat entitas relevan (seperti `ProfessionalService` atau `BreadcrumbList`) tanpa memuat skema `TechArticle` yang tidak terkait.
