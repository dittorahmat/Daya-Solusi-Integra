## Purpose

Menyediakan representasi identitas pakar terverifikasi (Humbul Kristiawan) pada seluruh artikel blog dan panduan regulasi guna memperkuat sinyal E-E-A-T Google dan kutipan AI engine.

## ADDED Requirements

### Requirement: Structured Expert Author Profile
Sistem SHALL menyediakan modul data profil pakar yang memuat atribut identitas profesional lengkap: nama, gelar lengkap, jabatan resmi, ringkasan pengalaman BUMN, sertifikasi kompetensi (CA, CIA, CICA, GRCP), foto profil resmi berbobot ringan, serta tautan profil publik (`sameAs`).

#### Scenario: Author data resolution
- **WHEN** halaman artikel blog memuat konten dengan atribut `author`
- **THEN** sistem mengaitkan artikel tersebut ke entitas profil pakar Humbul Kristiawan dan menampilkan foto, gelar, serta kredensial yang relevan.

### Requirement: Visual Author Byline and Bio Card
Sistem SHALL menampilkan elemen antarmuka visual byline di bagian header artikel dan kartu biografi pakar (*Author Bio Card*) di akhir artikel.

#### Scenario: Visual byline display
- **WHEN** pengguna membuka artikel blog tunggal (`/blog/:slug`)
- **THEN** sistem menampilkan foto profil, nama lengkap, gelar profesi, dan peran pakar pada area header artikel.

#### Scenario: Author bio card display
- **WHEN** pengguna membaca hingga akhir artikel
- **THEN** sistem menyajikan kartu biografi yang merangkum 25+ tahun pengalaman transformasi & ICOFR (eks Partner Deloitte & RSM, komite perbankan/BUMN), sertifikasi aktif, serta tautan menuju LinkedIn dan website pribadi beliau.

### Requirement: JSON-LD Person Schema Injection
Sistem SHALL menginjeksi metadata Schema.org bertipe `Person` ke dalam dokumen HTML saat artikel dibuka, yang terhubung ke entitas `Organization` Daya Solusi Integra.

#### Scenario: Schema validation by search engines
- **WHEN** mesin pencari atau crawler AI memindai artikel blog
- **THEN** sistem menyediakan blok JSON-LD `@type: Person` dengan properti `name`, `jobTitle`, `image`, `worksFor`, `knowsAbout`, dan `sameAs` yang valid.
