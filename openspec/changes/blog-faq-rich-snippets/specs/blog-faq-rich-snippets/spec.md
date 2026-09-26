## Purpose

Menyediakan skema terstruktur `FAQPage` Schema.org serta tampilan visual tanya-jawab kepatuhan pada artikel-artikel blog guna memicu Google Rich Results accordion langsung di halaman hasil pencarian (SERP).

## ADDED Requirements

### Requirement: Structured Data FAQPage Generation for Blog Articles
Sistem generator rute statis dan halaman dinamis SHALL menyertakan skema `FAQPage` dengan kumpulan `Question` dan `acceptedAnswer` pada setiap rute artikel blog yang memiliki entri tanya-jawab resmi.

#### Scenario: Crawling artikel blog oleh Googlebot
- **WHEN** Googlebot merayapi berkas HTML artikel seperti `/blog/manfaat-aplikasi-icofr-bumn-spreadsheet`
- **THEN** skema JSON-LD memuat entitas `@type: "FAQPage"` berisi daftar tanya-jawab resmi yang valid sesuai pedoman Google Rich Results

#### Scenario: Navigasi sisi klien ke artikel blog
- **WHEN** pengguna membuka artikel blog secara interaktif di browser
- **THEN** komponen `BlogPage` menyuntikkan elemen `<script type="application/ld+json">` yang memuat gabungan skema `TechArticle`, `Person`, dan `FAQPage`

### Requirement: Interactive On-Page FAQ Visual Display
Komponen tampilan artikel blog SHALL menyajikan bagian FAQ visual sebelum bagian formulir CTA konsultasi.

#### Scenario: Pembaca melihat bagian akhir artikel
- **WHEN** pembaca menggulir hingga ke bagian bawah artikel blog
- **THEN** sistem menampilkan accordion tanya-jawab yang dapat dibuka-tutup untuk memudahkan pencernaan poin-poin kunci kepatuhan
