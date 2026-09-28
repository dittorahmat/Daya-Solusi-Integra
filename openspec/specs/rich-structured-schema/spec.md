# rich-structured-schema Specification

## Purpose
Meningkatkan kualitas data terstruktur Schema.org JSON-LD guna memperkuat entitas korporat di Knowledge Graph Google serta mendukung pengenalan artikel teknis regulasi ICOFR.

## Requirements

### Requirement: Pengayaan Entitas Korporat Schema.org
Sistem SHALL memperkaya skema `@type: "ProfessionalService"` pada `index.html` dengan atribut `knowsAbout`, `sameAs`, dan referensi entitas resmi untuk regulasi BUMN.

#### Scenario: Validasi data terstruktur Organization
- **WHEN** validator Schema.org atau Google Rich Results Test membaca tag JSON-LD pada halaman utama
- **THEN** entitas mencakup bidang keahlian resmi seperti "ICOFR BUMN", "SK-5/DKU.MBU/11/2024", "ITGC Audit", dan "COSO Internal Control".

### Requirement: Struktur Data Artikel Teknis dan Dataset
Sistem SHALL menyertakan penandaan terstruktur untuk konten panduan teknis yang relevan dengan format `TechArticle` dan matriks referensi Tabel 22.

#### Scenario: Validasi konten artikel teknis oleh search engine
- **WHEN** crawler search engine memindai metadata artikel teknis
- **THEN** artikel teridentifikasi sebagai `TechArticle` dengan atribut `headline`, `inLanguage`, `audience`, dan penerbit resmi Daya Solusi Integra.

### Requirement: Skema Terstruktur FAQPage JSON-LD
Sistem SHALL menyertakan skema `@type: "FAQPage"` pada payload Schema.org JSON-LD untuk setiap rute yang memiliki data FAQ terstruktur, dengan `mainEntity` berupa array entitas `Question` dan `acceptedAnswer` bertipe `Answer`.

#### Scenario: Validasi crawler terhadap rute ber-FAQ
- **WHEN** crawler mesin pencari atau validator Rich Results mengaudit halaman `/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, atau `/platform/grc-integra`
- **THEN** output JSON-LD memuat blok `@type: "FAQPage"` yang valid berisi seluruh daftar pertanyaan dan jawaban teks lengkap.

### Requirement: Penandaan Dataset Terstruktur Tabel 22
Sistem SHALL menyertakan penandaan Schema.org `@type: "Dataset"` pada payload JSON-LD untuk rute `/kalkulator-sampel-toe`, yang merinci parameter ukuran populasi dan batas sampel pengujian kontrol normatif BUMN.

#### Scenario: Crawler Google memindai halaman kalkulator sampel TOE
- **WHEN** crawler search engine memindai metadata halaman `/kalkulator-sampel-toe`
- **THEN** payload JSON-LD memuat entitas `@type: "Dataset"` dengan atribut `name`, `description`, `variableMeasured`, dan penerbit resmi Daya Solusi Integra.

### Requirement: SearchAction Pada Entitas WebSite
Sistem SHALL menyertakan `potentialAction` bertipe `SearchAction` pada entitas `WebSite` di JSON-LD homepage dengan `target` menunjuk ke pola pencarian situs dan `query-input` yang valid.

#### Scenario: Validasi sitelinks searchbox
- **WHEN** validator Schema.org atau Google Rich Results Test membaca JSON-LD homepage
- **THEN** entitas `WebSite` memuat `potentialAction` `SearchAction` dengan target pencarian yang dapat diakses dan sintaks `query-input` yang lolos validasi.

#### Scenario: Pencarian via URL query didukung halaman blog
- **WHEN** pengguna atau crawler membuka `/blog?q=TOE`
- **THEN** daftar artikel terfilter dengan kata kunci "TOE" sejak pemuatan awal tanpa interaksi tambahan, sehingga target SearchAction benar-benar berfungsi.

### Requirement: Logo Organisasi Sebagai ImageObject Eksplisit
Sistem SHALL mendefinisikan `logo` organisasi sebagai `ImageObject` eksplisit dengan `url` aset brand resmi (bukan placeholder) pada entitas `ProfessionalService`/`Organization`.

#### Scenario: Validasi logo Knowledge Panel
- **WHEN** Rich Results Test mengaudit homepage
- **THEN** entitas organisasi memuat `logo` bertipe `ImageObject` dengan URL gambar brand yang mengembalikan status 200 dan content-type gambar.

### Requirement: Rating Claims Require Verifiable Reviews
Sistem SHALL HANYA menyertakan klaim `aggregateRating` pada JSON-LD bila didukung array `review` terverifikasi atau sumber rating yang dapat diaudit; bila tidak ada bukti tersebut, sistem SHALL menghapus blok `aggregateRating` dari markup.

#### Scenario: Tanpa bukti review maka tanpa klaim rating
- **WHEN** Rich Results Test membaca JSON-LD homepage tanpa data review terverifikasi
- **THEN** tidak ada properti `aggregateRating` pada output, dan validasi tidak melaporkan peringatan spammy structured markup untuk rating.

#### Scenario: Dengan bukti review maka klaim lengkap
- **WHEN** tersedia minimal satu ulasan terverifikasi dengan `author`, `reviewRating`, dan `datePublished`
- **THEN** `aggregateRating` boleh tampil bersama array `review` pendamping yang konsisten (`ratingCount` cocok dengan jumlah bukti yang dapat diaudit).
