## Why

Auditor internal BUMN, Komite Audit, SPI, dan praktisi kepatuhan secara aktif mencari definisi otoritatif dan acuan regulasi terkait istilah-istilah kunci ICOFR (seperti Test of Design, Test of Operating Effectiveness, Entity-Level Control, Transaction-Level Control, Defisiensi Signifikan, Material Weakness, dan Walkthrough Lini 2). Menyediakan halaman Glosarium & Kamus Kepatuhan ICOFR BUMN di `/glosarium` memperkuat dominasi Topical Authority di SERP Google, memicu Google Featured Snippets, serta menjadi jembatan internal linking strategis menuju layanan konsultansi dan platform software GRC Integra.

## What Changes

- Menambahkan halaman dedikasi `/glosarium` dengan arsitektur UI datar, bersih, dan lapang sesuai kaidah `design-taste-frontend`.
- Menyediakan katalog definisi otoritatif istilah-istilah pokok ICOFR BUMN berbasis regulasi SK-5/DKU.MBU/11/2024 dan COSO Framework.
- Menyediakan filter cepat berbasis kategori (Regulasi & Kerangka Kerja, Metodologi Pengujian, Klasifikasi Kontrol, Evaluasi Defisiensi).
- Mengintegrasikan navigasi `/glosarium` pada Header dan Footer korporat.
- Mendaftarkan URL resmi `https://dsintegra.co.id/glosarium` ke `public/sitemap.xml`.
- Menambahkan data terstruktur `DefinedTermSet` / `FAQPage` untuk istilah-istilah di halaman glosarium.

## Capabilities

### New Capabilities
- `regulatory-glossary`: Halaman interaktif Glosarium Regulasi & Kamus ICOFR BUMN di rute `/glosarium` dengan data istilah terstruktur, filter kategori, dan internal links.

### Modified Capabilities
<!-- None: No previous base specs under openspec/specs/ are being modified -->

## Impact

- Penambahan komponen halaman baru `src/components/pages/GlossaryPage.tsx` dan berkas data istilah `src/data/glossaryData.ts`.
- Pembaruan perutean di `src/App.tsx`, navigasi di `src/components/Header.tsx` dan `src/components/Footer.tsx`.
- Pembaruan `public/sitemap.xml` dan `public/llms.txt`.
