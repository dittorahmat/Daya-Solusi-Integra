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
