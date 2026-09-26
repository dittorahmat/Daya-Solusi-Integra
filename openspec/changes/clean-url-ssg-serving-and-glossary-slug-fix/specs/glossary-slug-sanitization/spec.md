# glossary-slug-sanitization Specification

## Purpose
Memastikan pencocokan slug istilah glosarium di sisi aplikasi klien (SPA) kebal terhadap keberadaan garis miring (trailing slash) agar tidak terjadi kondisi "Istilah Glosarium Tidak Ditemukan" palsu.

## Requirements

### Requirement 1: Slug Extraction Trimming
- Logika ekstraksi slug glosarium di router `src/App.tsx` harus menghapus tanda garis miring di awal maupun di akhir string (`.replace(/^\/+|\/+$/g, '')`).

### Requirement 2: Defensive Normalization in Detail View
- Komponen `GlossaryDetailPage.tsx` harus menormalisasi properti `slug` sebelum memanggil `find` pada koleksi `GLOSSARY_ITEMS` dengan mengabaikan perbedaan huruf besar/kecil dan membuang trailing slash.
