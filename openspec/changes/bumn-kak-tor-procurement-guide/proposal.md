## Why

Pejabat Pembuat Komitmen (PPK), Tim Panitia Pengadaan, Satuan Pengawasan Intern (SPI), dan Divisi Manajemen Risiko di lingkungan BUMN sering mengalami kesulitan teknis dalam menyusun dokumen Kerangka Acuan Kerja (KAK) atau Terms of Reference (TOR) untuk tender konsultan ICOFR serta pengadaan software GRC berbasis mandat SK-5/DKU.MBU/11/2024. Pencarian kata kunci dengan intensi komersial tinggi seperti *"contoh kak konsultan icofr bumn"*, *"spesifikasi teknis software grc"*, dan *"tor pengadaan evaluasi pengendalian internal"* saat ini belum memiliki rujukan standar industri yang terstruktur.

Membangun direktori `/panduan-kak-tor-icofr` (Panduan KAK & Spesifikasi Teknis Pengadaan BUMN) akan menangkap prospek matang di tahap akhir penganggaran tender (*late-stage procurement intent*), memposisikan standar teknis GRC Integra sebagai tolok ukur lelang resmi, dan mengalirkan lead bernilai kontrak tinggi ke tim kemitraan Daya Solusi Integra.

## What Changes

- Menambahkan halaman publik baru `/panduan-kak-tor-icofr` (`KakTorProcurementPage.tsx`) dengan desain B2B korporat terstruktur, bersih, dan lapang sesuai standar skill `design-taste-frontend`.
- Menyajikan pratinjau klausul KAK dan spesifikasi teknis untuk 3 kategori pengadaan:
  1. *Klausul KAK Konsultan ICOFR SK-5*: Ruang lingkup scoping materialitas, penyusunan RCM, walkthrough Lini 2, pengujian TOD/TOE, hingga penyusunan surat asersi Direksi.
  2. *Spesifikasi Teknis Pengadaan Software GRC*: Prasyarat arsitektur on-premise/private cloud, engine BPMN Lampiran 3, kalkulator sampel normatif Tabel 22, audit trail terverifikasi, dan modul asersi digital ber-QR Code.
  3. *Kualifikasi Tenaga Ahli & Sertifikasi*: Persyaratan kompetensi minimum ketua tim dan auditor (CRMA, CISA, Akuntan Beregister, pengalaman holding BUMN).
- Menyediakan formulir permohonan berkas draf dokumen Word/DOCX terstruktur yang terhubung langsung ke kanal resmi `marketing@dsintegra.co.id` dan WhatsApp resmi.
- Menambahkan skema data terstruktur Schema.org `@type: TechArticle` dan `@type: HowTo` yang memperkuat sitasi kutipan AI dan Google Sitelinks.
- Mendaftarkan rute di `App.tsx`, `ROUTE_METADATA_MAP`, `ROUTE_FAQS`, `Footer.tsx`, `scripts/generate-static-routes.ts`, dan `public/sitemap.xml`.

## Capabilities

### New Capabilities
- `bumn-kak-procurement-guide`: Halaman publik, klausul interaktif KAK, spesifikasi teknis software GRC, formulir intake dokumen lelang resmi, dan data terstruktur SEO untuk pengadaan BUMN.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/App.tsx`, `src/components/pages/KakTorProcurementPage.tsx` (baru), `src/utils/seoMeta.ts`, `src/data/faqData.ts`, `src/components/Footer.tsx`, `scripts/generate-static-routes.ts`, `public/sitemap.xml`.
- **SEO & Schema**: Menambah 1 halaman statis prerender kaya informasi (*information gain*) yang menargetkan pencarian bottom-of-funnel komersial tinggi.
- **Dependencies**: Memanfaatkan stack eksisting React, Lucide icons, dan Tailwind CSS tanpa dependensi eksternal baru.
