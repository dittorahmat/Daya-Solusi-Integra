## MODIFIED Requirements

### Requirement: Generasi Berkas HTML Fisik Per Rute Pasca-Build
Sistem SHALL menyediakan skrip pasca-build yang membaca berkas template `dist/index.html` dan menghasilkan direktori serta file `index.html` tersendiri untuk setiap rute (seperti `dist/glosarium/index.html`, `dist/layanan/icofr-bumn/index.html`, dan artikel blog).

#### Scenario: Eksekusi build produksi
- **WHEN** perintah `npm run build` dijalankan
- **THEN** sistem secara otomatis menghasilkan file `index.html` fisik dengan tag `<title>`, `<meta description>`, Open Graph tags, dan canonical URL yang tepat di dalam folder masing-masing rute pada direktori `dist/`.

## ADDED Requirements

### Requirement: Sumber Slug Tunggal untuk Feed dan Sitemap
Daftar slug artikel blog pada `feed.xml` dan `sitemap.xml` SHALL berasal dari satu sumber yang sama (front-matter markdown `src/content/blog/*.md`); perbedaan slug antara kedua berkas DILARANG dan build wajib gagal atau memberi peringatan jika drift terdeteksi.

#### Scenario: Deteksi drift slug saat build
- **WHEN** skrip build dijalankan dan sebuah slug feed tidak cocok dengan entri sitemap
- **THEN** build mencatat peringatan eksplisit menyebut slug yang drift sehingga ketidakkonsistenan tidak lolos diam-diam ke produksi.
