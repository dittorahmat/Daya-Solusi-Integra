## Context

Situs `dsintegra.co.id` dibangun menggunakan pipeline build statis di `scripts/generate-static-routes.ts` yang dieksekusi setelah `vite build`. Skrip ini menyuntikkan skema JSON-LD terisolasi per rute dan menghasilkan snapshot HTML untuk crawler SEO.

Untuk mengeksekusi optimasi *Low Effort, High Impact*:
1. Skema `HowTo` ditambahkan secara deklaratif ke dalam `buildJsonLdForRoute` untuk rute `/kalkulator-sampel-toe`.
2. Generator RSS Feed ditambahkan sebagai fungsi `generateRssFeed()` di dalam `scripts/generate-static-routes.ts` untuk mem-parse berkas markdown di `src/content/blog/` menggunakan modul `front-matter` yang sudah tersedia di proyek.

## Goals / Non-Goals

**Goals:**
- Menginjeksi skema `HowTo` berstandar Google Search Central pada rute `/kalkulator-sampel-toe` dengan detail langkah kalkulasi sampling TOE Tabel 22 SK-5.
- Membangun file XML RSS 2.0 valid (`feed.xml`) pada `dist/feed.xml` dan `public/feed.xml`.
- Menyediakan tag auto-discovery RSS di `<head>` HTML dan entry di `robots.txt`.

**Non-Goals:**
- Mengubah algoritma kalkulator sampling di React frontend.
- Menginstal dependensi NPM baru (cukup menggunakan modul bawaan Node.js `fs`, `path`, dan `front-matter`).

## Decisions

- **Decision 1: HowTo Schema Structure**:
  Menggunakan skema `HowTo` dengan 3 langkah utama: (1) Penentuan Frekuensi Kontrol, (2) Pemilihan Tingkat Signifikansi Risiko (Tinggi vs Rendah/Sedang), dan (3) Ekstraksi Ukuran Sampel Minimum TOE sesuai Tabel 22 Regulasi BUMN.
  *Alternative considered*: Menggunakan skema `SoftwareApplication` saja. Alasan ditolak: `HowTo` memiliki visibilitas rich-snippet instruksional yang jauh lebih baik pada kueri "cara menghitung".

- **Decision 2: RSS 2.0 Generator terintegrasi di build script**:
  Memanfaatkan `scripts/generate-static-routes.ts` yang sudah membaca metadata blog daripada membuat script eksekusi terpisah.
  *Alternative considered*: Menggunakan library eksternal seperti `feed` atau `rss`. Alasan ditolak: Menghindari bloat dependensi tambahan karena format RSS 2.0 XML sangat sederhana dan andal jika di-render langsung secara deklaratif.

## Risks / Trade-offs

- **[Risk] Format tanggal RSS tidak sesuai RFC-822** → **Mitigasi**: Menggunakan format `new Date(dateStr).toUTCString()` yang menghasilkan standar RFC-822 valid (`Fri, 25 Sep 2026 00:00:00 GMT`).
- **[Risk] Karakter khusus XML pada judul/deskripsi** → **Mitigasi**: Menggunakan fungsi pembungkus CDATA atau entitas XML escaping (`&`, `<`, `>`, `"`, `'`).
