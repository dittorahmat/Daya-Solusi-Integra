## Purpose

Meningkatkan kualitas data terstruktur Schema.org JSON-LD guna memperkuat entitas korporat di Knowledge Graph Google serta mendukung pengenalan artikel teknis regulasi ICOFR.

## ADDED Requirements

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
