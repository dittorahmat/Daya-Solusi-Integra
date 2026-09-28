# Spec Delta

## Purpose

Memangkas JavaScript awal yang diunduh per rute dengan memuat halaman secara malas agar Largest Contentful Paint membaik dan budget crawl-render mesin pencari tidak habis untuk kode yang tidak dipakai di rute tersebut.

## ADDED Requirements

### Requirement: Lazy Routes with Suspense Fallback
Sistem SHALL memuat komponen halaman rute (`pages/*`, `BlogPage`, `Assessment`) secara malas via `React.lazy` dengan batas `Suspense` berperilaku skeleton gelap yang konsisten dengan tema, sementara shell (Header, Footer, navigasi) tetap sinkron.

#### Scenario: Kunjungan langsung ke subhalaman berat
- **WHEN** pengguna atau crawler membuka `/glosarium/toe` dengan cache kosong
- **THEN** chunk awal yang diunduh TIDAK memuat kode `BlogArticle`/`Assessment`, halaman terhidrasi tanpa error console, dan fallback Suspense tidak menampilkan layar putih.

#### Scenario: Navigasi antar rute memuat chunk sesuai kebutuhan
- **WHEN** pengguna berpindah dari `/` ke `/blog/<slug>`
- **THEN** browser mengunduh chunk artikel saat itu saja, dan rute yang sudah dikunjungi tidak diunduh ulang (memakai cache immutable `/assets/*`).

### Requirement: Vendor Chunk Budgets
Sistem SHALL memisahkan vendor berat (`react-markdown`, `motion`) ke chunk tersendiri via `manualChunks` dan chunk entri awal (di luar vendor React inti) SHALL di bawah 300KB gzip.

#### Scenario: Audit budget bundle
- **WHEN** `npm run build` dijalankan
- **THEN** tidak ada chunk lazy bermuatan `react-markdown` yang ikut dalam entri awal, dan ukuran gzip chunk awal tercatat di output build untuk inspeksi.
