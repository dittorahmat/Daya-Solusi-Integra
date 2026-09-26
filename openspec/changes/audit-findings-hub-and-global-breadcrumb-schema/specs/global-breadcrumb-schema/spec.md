## Purpose

Mengotomasi penyusunan skema terstruktur `BreadcrumbList` dan `WebPage` (speakable) di dalam simpul JSON-LD `@graph` pada seluruh halaman SSG prerender untuk menampilkan rich snippet hierarki di SERP dan mendukung Answer Engine Optimization (AEO).

## ADDED Requirements

### Requirement: Automated BreadcrumbList Generation for All Routes
Sistem generator rute statis SHALL secara otomatis menyusun dan menyematkan node JSON-LD `@type: BreadcrumbList` ke dalam `@graph` pada setiap rute yang di-generate.

#### Scenario: Crawler inspecting structured data of a sub-route
- **WHEN** Web crawler (Googlebot) membaca file HTML statis rute bertingkat (seperti `/sektor-bumn/perbankan` atau `/glosarium/icofr`)
- **THEN** Skema JSON-LD memuat simpul `BreadcrumbList` dengan daftar `itemListElement` berurutan dari Beranda hingga halaman target lengkap dengan nama dan URL kanonikal.

### Requirement: Speakable Specification Markup
Sistem SHALL menyertakan properti `speakable` pada simpul `WebPage` JSON-LD di rute statis yang memuat definisi glosarium atau penjelasan regulasi inti.

#### Scenario: AI voice assistant or Answer Engine parsing page
- **WHEN** Answer engine (Google SGE / Assistant) mengevaluasi konten halaman
- **THEN** Metadata `speakable` mengidentifikasi elemen CSS selector paragraf ringkasan eksekutif untuk dijadikan kutipan audio atau AI overview.
