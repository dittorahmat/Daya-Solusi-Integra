## Why

Tim pengadaan (Procurement), panitia tender, dan satuan pengawasan/risiko BUMN membutuhkan informasi kualifikasi vendor yang jelas, legal, dan terverifikasi saat menyiapkan proses pengadaan (RFP/KAK) untuk sistem atau konsultan pendampingan ICOFR berbasis SK-5/DKU.MBU/11/2024. Halaman khusus `/kualifikasi-vendor` (BUMN Procurement & Vendor Readiness Hub) memberikan jawaban otoritatif mengenai legalitas perusahaan (KBLI), kesiapan kepatuhan UU PDP (opsi deployment on-premise dan local private cloud), model lisensi, panduan penyusunan KAK/TOR, serta kepemilikan E-E-A-T dari principal founder.

Halaman ini berfungsi sebagai aset SEO Bottom-of-Funnel (BOFU) berdampak tinggi dengan effort minimal, menangkap kueri bernilai komersial tinggi dari panitia tender BUMN dan mempercepat siklus pengadaan.

## What Changes

- Menambahkan halaman publik baru `/kualifikasi-vendor` (`BumnProcurementPage.tsx`) dengan desain otoritatif korporat B2B yang lapang dan profesional.
- Menyajikan ringkasan kualifikasi legalitas resmi, klasifikasi KBLI relevan (Konsultasi Manajemen & Aktivitas Pemrograman/TI), komitmen NDA, dan tata kelola perlindungan data (UU PDP / On-Premise deployment).
- Menyediakan panduan praktis penyusunan Dokumen KAK / TOR (Kerangka Acuan Kerja) pengadaan software GRC & pendampingan ICOFR bagi panitia tender.
- Menghubungkan jalur kontak resmi khusus pengadaan (`marketing@dsintegra.co.id` & WhatsApp Business intake).
- Menambahkan Schema.org JSON-LD terstruktur (`Service`, `Offer`, `ProfessionalService`) yang dihubungkan ke entity organisasi dan founder resmi.
- Mendaftarkan rute `/kualifikasi-vendor` pada `App.tsx`, `scripts/generate-static-routes.ts`, dan `public/sitemap.xml`.

## Capabilities

### New Capabilities
- `procurement-readiness`: Halaman rute publik dan metadata terstruktur yang menyajikan kualifikasi vendor, legalitas, panduan KAK tender BUMN, dan skema deployment on-premise/cloud.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/App.tsx`, `src/components/pages/BumnProcurementPage.tsx` (baru), `scripts/generate-static-routes.ts`, `public/sitemap.xml`, `src/components/Navbar.tsx` (tautan atau submenu jika diperlukan).
- **SEO & Schema**: Penambahan 1 rute statis yang di-prerender untuk SEO, JSON-LD Schema untuk tender & vendor readiness.
- **Dependencies**: Menggunakan komponen yang sudah ada (`lucide-react`, Tailwind CSS).
