## Why

Auditor internal BUMN, Komite Audit, SPI, dan konsultan KAP membutuhkan alat kerja harian yang cepat untuk menentukan ukuran sampel pengujian Test of Operating Effectiveness (TOE) sesuai standar normatif Tabel 22 regulasi SK-5/DKU.MBU/11/2024. Menyediakan halaman interaktif `/kalkulator-sampel-toe` berfungsi sebagai magnet backlink organik (linkable asset), memperkuat Topical Authority di ranah regulasi BUMN, serta menjadi saluran konversi langsung ke penawaran demo software GRC Integra.

## What Changes

- Menambahkan halaman dedikasi interaktif `/kalkulator-sampel-toe` dengan antarmuka kalkulator normatif berbasis frekuensi kontrol (Tahunan, Triwulanan, Bulanan, Mingguan, Harian, Berulang Kali Sehari).
- Menyediakan visualisasi aturan toleransi deviasi (zero tolerable deviation rate), panduan pemilihan sampel representatif, dan rekomendasi langkah pengujian.
- Mengintegrasikan CTA terarah menuju platform software GRC Integra ("Otomasi seluruh siklus pengujian dan kalkulasi Tabel 22 secara otomatis").
- Menghubungkan rute baru ke `src/App.tsx`, navigasi `Header.tsx` dan `Footer.tsx`.
- Mendaftarkan rute ke `src/utils/seoMeta.ts`, `public/sitemap.xml`, `public/llms.txt`, dan generator SSG statis.

## Capabilities

### New Capabilities
- `toe-sample-calculator`: Halaman interaktif kalkulator ukuran sampel pengujian kontrol TOE berbasis Tabel 22 regulasi SK-5 BUMN di rute `/kalkulator-sampel-toe`.

### Modified Capabilities
<!-- None: No previous base specs under openspec/specs/ are being modified -->

## Impact

- Penambahan komponen `src/components/pages/ToeCalculatorPage.tsx`.
- Pembaruan perutean di `src/App.tsx`, menu navigasi, metadata SEO, serta sitemap.
- Membuka potensi trafik pencarian tinggi dari praktisi audit dan kepatuhan BUMN.
