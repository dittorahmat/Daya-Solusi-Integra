## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini aplikasi dibangun dengan React + Vite + Tailwind CSS dan mengandalkan skrip generator pra-render SSG (`scripts/generate-static-routes.ts`) untuk memproduksi file HTML statis bagi mesin pencari. Katalog glosarium yang ada berada di file `src/data/glossaryData.ts` dan dirender pada satu komponen rute `/glosarium`. Belum ada struktur direktori regulasi independen (`/regulasi`) dan belum ada halaman individual untuk istilah glosarium (`/glosarium/:slug`).

## Goals / Non-Goals

**Goals:**
- Membuat modul data regulasi BUMN terpusat di `src/data/regulationData.ts`.
- Menyediakan halaman direktori regulasi di `/regulasi` dengan styling berwibawa dark navy (`#0b0f19`), ringkasan pasal teknis, dan matriks Tiga Lini.
- Menyediakan halaman entitas glosarium individual di `/glosarium/:slug` dengan rute dinamis di sisi client dan snapshot HTML pra-render untuk crawler.
- Menginjeksi skema terstruktur `Legislation` dan `DefinedTerm` ke dalam pipeline SSG (`generate-static-routes.ts`).
- Memperbarui file indeks discovery (`sitemap.xml`, `llms.txt`, `llms-full.txt`).
- Mematuhi standar skill `design-taste-frontend` (zero em-dash/en-dash, zero AI sparkles, kanvas solid tanpa floating gradient blur).

**Non-Goals:**
- Menambahkan backend database serverless atau CMS dinamis (seluruh data dikelola statis dan tipe-aman di TypeScript).
- Mengubah arsitektur router SPA yang sudah ada di client-side.

## Decisions

### 1. Struktur Data TypeScript Statis vs CMS
- **Keputusan**: Mengelola data regulasi dan glosarium langsung di dalam file TypeScript (`src/data/regulationData.ts` dan `src/data/glossaryData.ts`).
- **Rasional**: Memberikan kecepatan akses instan, keamanan tipe saat build-time, dan kompatibilitas penuh dengan skrip SSG `generate-static-routes.ts` tanpa overhead dependensi jaringan atau API eksternal.
- **Alternatif yang Dipertimbangkan**: Headless CMS (Strapi/Contentful). Ditolak karena menambah kompleksitas deployment dan latensi yang tidak diperlukan untuk puluhan data statis hukum.

### 2. URL Routing Glosarium: `/glosarium/:id`
- **Keputusan**: Menggunakan properti `id` (contoh: `icofr`, `tod`, `toe`, `tabel-22`, `walkthrough-lini-2`) yang sudah ada sebagai slug URL kanonikal: `https://dsintegra.co.id/glosarium/{id}`.
- **Rasional**: ID yang ada sudah bersih, kebab-case, dan mengandung kata kunci target yang relevan dengan audit BUMN.

### 3. Skema Structured Data: Legislation & DefinedTerm
- **Keputusan**: 
  - Halaman `/regulasi` menggunakan skema `Legislation` dengan properti `legislationType`, `legislationIdentifier`, dan `publisher`.
  - Halaman `/glosarium/:slug` menggunakan skema `DefinedTerm` dengan properti `name`, `termCode`, `description`, dan `inDefinedTermSet`.
- **Rasional**: Format ini merupakan standar resmi Google Search Central untuk glosarium dan dokumentasi hukum yang memicu rich snippet di SERP.

### 4. Navigasi dan Breadcrumb Konsisten
- **Keputusan**: Menambahkan navigasi Breadcrumb visual terstruktur di kedua halaman baru:
  - Beranda > Regulasi BUMN
  - Beranda > Glosarium > [Nama Istilah]
- **Rasional**: Meningkatkan pengalaman navigasi eksekutif dan memicu breadcrumb trail di SERP Google.

## Risks / Trade-offs

- **[Risk] Ukuran bundle JavaScript bertambah seiring bertambahnya data glosarium dan regulasi** → **Mitigasi**: Data regulasi dan glosarium hanya berupa struktur array teks ringan (<50KB), tidak memerlukan pemuatan gambar besar secara dinamis.
- **[Risk] Konflik rute SPA vs SSG crawler** → **Mitigasi**: Pastikan script `generate-static-routes.ts` membuat folder fisik di `dist/regulasi/index.html` dan `dist/glosarium/{id}/index.html` sehingga web server langsung menyajikan HTML statis tanpa perlu fallback 404.
