## Why

Halaman interaktif `/kalkulator-sampel-toe` saat ini telah menjadi aset unik bernilai tinggi untuk praktisi ICOFR BUMN, namun mesin pencari (Google) belum mengeksposnya sebagai featured snippet karena belum tersedianya data terstruktur Schema.org `HowTo`. Selain itu, artikel-artikel kepemimpinan pemikiran di blog belum memiliki mekanisme sindikasi standar `feed.xml` (RSS 2.0) yang memungkinkan crawler AI (GPTBot, ClaudeBot, Perplexity) dan agregator mesin pencari mendeteksi konten baru secara instan.

Peluang optimasi ini berbiaya usaha rendah (*low effort*) namun berdampak tinggi (*high impact*) dalam meningkatkan visibilitas SERP (Click-Through-Rate) dan percepatan pengindeksan konten.

## What Changes

- Menambahkan injeksi skema terstruktur `HowTo` pada generator rute statis `/kalkulator-sampel-toe` di `scripts/generate-static-routes.ts`, merinci langkah-langkah penentuan sampel pengujian pengendalian berdasarkan Tabel 22 SK-5 BUMN.
- Menambahkan generator otomatis berkas RSS 2.0 Feed (`public/feed.xml`) pada proses build statis yang memuat seluruh artikel blog terbitan Daya Solusi Integra dengan metadata lengkap (judul, deskripsi, tanggal terbit, canonical link, kategori).
- Mendaftarkan feed RSS di tag `<head>` pada `index.html` dan `scripts/generate-static-routes.ts` (`<link rel="alternate" type="application/rss+xml" ...>`).
- Mendaftarkan lokasi `feed.xml` di dalam `public/robots.txt` agar mudah dideteksi oleh web crawler.

## Capabilities

### New Capabilities
- `seo-howto-and-syndication`: Menyediakan data terstruktur Schema.org `HowTo` untuk alat kalkulator TOE dan generator otomatis RSS Feed untuk sindikasi konten blog.

### Modified Capabilities
<!-- None -->

## Impact

- `scripts/generate-static-routes.ts`: Penambahan logic schema `HowTo` untuk rute `/kalkulator-sampel-toe` dan fungsi pembentukan berkas `dist/feed.xml` dan `public/feed.xml`.
- `index.html`: Penambahan tag discovery `<link rel="alternate" type="application/rss+xml">`.
- `public/robots.txt`: Penambahan deklarasi path `feed.xml`.
- Tidak ada dampak negatif ke performa runtime klien karena seluruh generasi berjalan saat fase build.
