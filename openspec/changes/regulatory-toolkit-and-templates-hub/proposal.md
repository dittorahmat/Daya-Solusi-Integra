## Why

Praktisi Satuan Pengawasan Intern (SPI), Divisi Manajemen Risiko, dan Tim Akuntansi/Keuangan BUMN secara rutin mencari berkas kerja standar seperti *"download template rcm sk 5 excel"*, *"format kertas kerja walkthrough bumn"*, dan *"checklist pengujian efektivitas pengendalian toe"*. Saat ini belum ada halaman hub pusat yang menyediakan pratinjau arsitektur kertas kerja standar SK-5/DKU.MBU/11/2024 dan memfasilitasi akuisisi prospek (lead magnet) resmi bagi BUMN yang ingin bertransformasi dari spreadsheet manual ke platform otomatis GRC Integra.

Membangun hub `/toolkit-regulasi` (SK-5 Regulatory Toolkit & Working Papers Hub) akan mendominasi pencarian organik transaksional/informasional bernilai tinggi, bertindak sebagai magnet backlink alami, dan mempercepat konversi lead B2B.

## What Changes

- Menambahkan halaman publik baru `/toolkit-regulasi` (`RegulatoryToolkitPage.tsx`) dengan desain arsitektural B2B modern dan lapang.
- Menyajikan pratinjau tabel interaktif untuk 3 dokumen kerja inti kepatuhan SK-5 BUMN:
  1. *Risk & Control Matrix (RCM) Template*: Kolom kode risiko, asersi manajemen, frekuensi, tipe kontrol, dan prosedur audit.
  2. *Entity-Level Control (ELC) Checklist*: Matriks 5 Komponen dan 17 Prinsip COSO Framework.
  3. *Kertas Kerja Walkthrough & Test of Operating Effectiveness (TOE)*: Penentuan ukuran sampel Tabel 22 dan evaluasi defisiensi.
- Menyediakan formulir/modal permohonan download paket template resmi berformat spreadsheet yang terhubung ke email resmi `marketing@dsintegra.co.id` dan WhatsApp Business.
- Menyertakan single dominant CTA menuju demonstrasi otomasi platform `GRC Integra`.
- Menambahkan skema JSON-LD `@type: DigitalDocument` dan `@type: DataCatalog` yang terintegrasi dengan founder Humbul Kristiawan dan PT Daya Solusi Integra.
- Mendaftarkan rute di `App.tsx`, `ROUTE_METADATA_MAP`, `ROUTE_FAQS`, `scripts/generate-static-routes.ts`, dan `public/sitemap.xml`.

## Capabilities

### New Capabilities
- `regulatory-toolkit-hub`: Halaman rute publik dan data terstruktur yang menyajikan pratinjau kertas kerja audit kepatuhan SK-5 BUMN, formulir permintaan berkas kerja, dan konversi lead software GRC Integra.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/App.tsx`, `src/components/pages/RegulatoryToolkitPage.tsx` (baru), `src/utils/seoMeta.ts`, `src/data/faqData.ts`, `scripts/generate-static-routes.ts`, `public/sitemap.xml`, `src/components/Footer.tsx`.
- **SEO & Schema**: 1 rute statis baru yang di-prerender untuk SEO, penambahan skema DigitalDocument dan FAQPage.
- **Dependencies**: Menggunakan komponen yang sudah ada (`lucide-react`, Tailwind CSS).
