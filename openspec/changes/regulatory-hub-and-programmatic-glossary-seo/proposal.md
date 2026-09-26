## Why

Untuk memperkuat dominasi pencarian B2B dan otoritas semantik (Topical Authority) di ranah Tata Kelola BUMN dan Kepatuhan Audit, Daya Solusi Integra membutuhkan aset konten terstruktur yang menargetkan pencarian regulasi resmi dan istilah teknis spesifik. Direksi, Satuan Pengawas Intern (SPI), dan Komite Audit BUMN kerap mencari rujukan pasal peraturan resmi (seperti SK-5/DKU.MBU/11/2024 dan PER-2/MBU/03/2023) serta definisi audit teknis secara mendalam.

Saat ini direktori glosarium hanya berada di satu halaman katalog tunggal (`/glosarium`), dan belum ada pusat repositori regulasi BUMN mandiri (`/regulasi`). Menyediakan Hub Regulasi BUMN dan memperluas glosarium ke halaman entitas individual (`/glosarium/[slug]`) dengan `Legislation` & `DefinedTerm` Schema.org akan mengunci ratusan kata kunci eksekutif berekor panjang (long-tail) serta memperkuat *sitelinks* dan kutipan mesin pencari AI.

## What Changes

- **Pusat Repositori Regulasi BUMN (`/regulasi`)**: Menghadirkan halaman direktori regulasi tata kelola dan kepatuhan BUMN yang memuat ringkasan pasal teknis, matriks implikasi Tiga Lini (Lini 1 Operasional, Lini 2 Manajemen Risiko, Lini 3 SPI), dan FAQ kepatuhan regulasi.
- **Halaman Entitas Glosarium Mandiri (`/glosarium/:slug`)**: Menghadirkan halaman individual per istilah glosarium (misal: `/glosarium/icofr`, `/glosarium/tabel-22`, `/glosarium/test-of-design`) yang dilengkapi definisi formal, contoh penerapan BUMN, rujukan pasal, tautan timbal-balik, dan skema `DefinedTerm`.
- **Database Data Regulasi**: Membuat modul data `src/data/regulationData.ts` yang berisi inventaris peraturan resmi BUMN (SK-5/DKU.MBU/11/2024, PER-2/MBU/03/2023, POJK 17/2023, SPKN BPK RI).
- **Prerender Statis & Skema SEO Terstruktur**: Memperluas `scripts/generate-static-routes.ts` agar merender snapshot HTML statis untuk `/regulasi` dan seluruh entitas `/glosarium/[slug]` lengkap dengan metadata Open Graph, canonical URL, dan Structured Data Schema (`Legislation`, `DefinedTerm`, `BreadcrumbList`).
- **Pembaruan Sitemap & AI Citations**: Memperbarui `public/sitemap.xml`, `public/llms.txt`, dan `public/llms-full.txt` untuk mencakup hub regulasi dan seluruh slug istilah glosarium.

## Capabilities

### New Capabilities
- `regulatory-hub`: Menyediakan repositori direktori hukum dan kepatuhan BUMN di rute `/regulasi` dengan matriks pembagian tanggung jawab Tiga Lini, timeline penandatanganan asersi, dan skema terstruktur `Legislation` serta FAQ.

### Modified Capabilities
- `regulatory-glossary`: Memperluas kapabilitas glosarium dari sekadar katalog halaman tunggal menjadi sistem entitas individual programmatic di `/glosarium/:slug` dengan rute mandiri, skema `DefinedTerm`, dan snapshot prerender statis.

## Impact

- **Affected Code**:
  - `src/App.tsx`: Pendaftaran rute baru `/regulasi` dan `/glosarium/:slug`.
  - `src/data/regulationData.ts`: Database regulasi BUMN baru.
  - `src/data/glossaryData.ts`: Penambahan helper identifikasi slug dan konten kontekstual.
  - `src/components/pages/RegulatoryHubPage.tsx`: Komponen UI Hub Regulasi.
  - `src/components/pages/GlossaryDetailPage.tsx`: Komponen UI Detail Entitas Glosarium.
  - `src/components/Navbar.tsx` & `src/components/Footer.tsx`: Tautan navigasi kontekstual ke `/regulasi`.
  - `scripts/generate-static-routes.ts`: Penambahan rute snapshot HTML statis.
  - `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`: Registrasi URL baru.
- **Dependencies**: Tidak ada penambahan dependensi pihak ketiga baru (menggunakan React, Lucide-React, dan Tailwind CSS yang sudah ada).
- **Breaking Changes**: Tidak ada perubahan yang memutus rute yang sudah berjalan (*zero breaking change*). Rute `/glosarium` tetap berfungsi sebagai katalog direktori.
