## Why

Setiap klaster Badan Usaha Milik Negara (BUMN) di Indonesia menghadapi tantangan kepatuhan dan risiko finansial yang sangat berbeda dalam mematuhi mandat SK-5/DKU.MBU/11/2024:
1. Sektor Perbankan & Jasa Keuangan (Himbara) wajib mengharmonisasikan ICOFR dengan POJK Manajemen Risiko, SEOJK Tata Kelola IT, serta audit ITGC Core Banking.
2. Sektor Infrastruktur, Konstruksi & Karya menghadapi risiko krusial pengakuan pendapatan PSAK 72 (*percentage of completion*), verifikasi approval subkontraktor, dan audit over-invoicing proyek.
3. Sektor Energi, Migas & Holding Tambang menghadapi kompleksitas transaksi antar-anak perusahaan (*intercompany balancing*), transfer pricing holding, dan rekonsiliasi aset/inventori logistik berskala masif.

Membangun 3 landing page vertikal sektor BUMN yang terdedikasi (`/sektor-bumn/perbankan`, `/sektor-bumn/infrastruktur-karya`, `/sektor-bumn/energi-tambang`) akan menangkap pencarian eksekutif berbobot komersial tinggi, memperkuat topical authority B2B GRC dsintegra, dan mengalirkan konversi langsung ke asesmen maturitas dan platform GRC Integra.

## What Changes

- **Halaman Dedicated Sektor BUMN**:
  - `/sektor-bumn/perbankan`: Khusus Himbara, bank daerah BUMN, dan multifinance dengan fokus POJK, Core Banking ITGC, RCM Kredit, Fraud mitigation, dan SoD.
  - `/sektor-bumn/infrastruktur-karya`: Khusus BUMN Karya, Tol, Bandara, Pelabuhan dengan fokus PSAK 72, Capex Milestone Testing, Subcontractor Verification, dan Anti Over-invoicing.
  - `/sektor-bumn/energi-tambang`: Khusus Holding Migas, Kelistrikan, dan Mineral/Batubara dengan fokus Subsidiary Governance, Intercompany Balancing, Asset & Inventory Reconciliation, serta ESG compliance.
- **Komponen & Arsitektur Konten Sektor**:
  - Regulatory Alignment Matrix (misal: SK-5 vs POJK, SK-5 vs PSAK 72) guna memicu Featured Snippet Google.
  - Blueprint RCM Spesifik Industri (Risk & Control Matrix khas sektor tersebut).
  - Integrasi Internal Linking silang ke `/kalkulator-sampel-toe`, `/regulasi`, dan `/layanan/icofr-bumn`.
  - Schema JSON-LD berstandar korporat: `Service`, `IndustryClassification`, dan `FAQPage`.
- **Infrastruktur Routing & SEO Teknis**:
  - Pendaftaran rute di `src/App.tsx`, metadata dinamis di `src/utils/seoMeta.ts`.
  - Update `public/sitemap.xml` dan `prerender-routes.js` untuk build static prerender HTML.
  - Tautan navigasi kontekstual pada footer atau menu layanan.

## Capabilities

### New Capabilities
- `vertical-industry-silos`: Halaman vertikal landing sektor BUMN (Perbankan, Infrastruktur/Karya, Energi/Tambang) dengan konten regulasi spesifik, matriks kepatuhan, skema SEO terstruktur, dan tautan konversi terarah.

### Modified Capabilities
<!-- Tidak ada capability eksisting yang requirement-nya berubah -->

## Impact
- **Frontend Components**: Penambahan komponen halaman `src/components/pages/SectorBankingPage.tsx`, `src/components/pages/SectorInfrastructurePage.tsx`, `src/components/pages/SectorEnergyPage.tsx` atau komponen berbasis layout dinamis `src/components/pages/SectorDetailPage.tsx` beserta data struktur sektor.
- **Routing & Navigation**: `src/App.tsx`, `src/components/Footer.tsx`.
- **SEO & Prerender**: `src/utils/seoMeta.ts`, `public/sitemap.xml`, `prerender-routes.js`.
