# howto-rich-snippets Specification

## Purpose
Menyediakan data terstruktur Schema.org/HowTo pada artikel panduan teknis ICOFR guna memicu tampilan rich snippet bernomor di hasil pencarian Google.

## Requirements

### Requirement: Structured HowTo JSON-LD Data for Technical Guides
Sistem HARUS menyediakan objek skema `HowTo` berstandar Schema.org untuk artikel panduan teknis yang memuat langkah-langkah implementasi, perkakas yang dibutuhkan, estimasi waktu pengerjaan, dan urutan tahapan yang jelas.

#### Scenario: HowTo Schema Injection on Prerendered HTML
- **WHEN** skrip pembangun rute statis memproses URL artikel panduan teknis
- **THEN** berkas HTML statis yang dihasilkan memuat blok `<script type="application/ld+json">` dengan `@type: "HowTo"` yang berisikan langkah-langkah (`step`) berurutan.

#### Scenario: Dynamic HowTo Schema Injection in SPA View
- **WHEN** pengguna atau bot membuka halaman artikel panduan teknis secara langsung di browser
- **THEN** DOM halaman aktif menginjeksi elemen JSON-LD skema `HowTo` yang valid ke dalam dokumen HTML.
