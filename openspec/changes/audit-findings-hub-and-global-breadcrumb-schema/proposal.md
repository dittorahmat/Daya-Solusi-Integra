## Why

1. Mesin pencari Google saat ini mengindeks 43 rute statis situs Daya Solusi Integra dengan struktur URL flat di SERP. Tanpa skema terstruktur `BreadcrumbList` formal di JSON-LD, situs kehilangan potensi tampilan sitelink hierarki hijau (breadcrumb trails) yang dapat meningkatkan Click-Through Rate (CTR) organik hingga 15-30%.
2. Tim Satuan Pengawasan Intern (SPI), Komite Audit, dan Manajer Akuntansi BUMN memiliki intensitas pencarian yang sangat tinggi seputar defisiensi pengendalian intern menjelang pemeriksaan tahunan (*"contoh temuan defisiensi ICOFR BUMN"*, *"remediasi temuan intercompany"*, *"Corrective Action Plan SK-5"*). Belum ada repositori terbuka yang menyajikan kurasi temuan audit defisiensi beserta rekomendasi teknis perbaikannya secara terstruktur untuk memicu Google Featured Snippets.

## What Changes

1. **Global BreadcrumbList & WebPage Speakable Schema Injection:**
   - Memperbarui generator skema JSON-LD di `scripts/generate-static-routes.ts` agar menyematkan simpul `@type: BreadcrumbList` (dengan elemen ListItem berposisi hierarkis) dan `@type: WebPage` (dengan selector `speakable`) ke dalam `@graph` di seluruh 43+ rute statis.
2. **Katalog Temuan Defisiensi & Rekomendasi Audit BUMN (`/temuan-audit-icofr`):**
   - Membangun halaman direktori interaktif `src/components/pages/AuditFindingsPage.tsx` yang memuat 8 klaster temuan audit paling sering dihadapi BUMN (Intercompany Balancing, SoD ERP & Database Access, Pengujian TOE Tidak Normatif, Pengakuan Pendapatan PSAK 72, Otomasi ITAC tanpa Bukti ITGC, Rekonsiliasi Bank Menggantung, Dokumentasi Subkontraktor, dan Keterlambatan Asersi Direksi).
   - Menampilkan struktur matriks komparasi terstruktur: Gejala & Temuan Auditor -> Dampak Risiko Laporan Keuangan -> Rekomendasi Corrective Action Plan (CAP) berbasis SK-5/2024 & COSO 2013.
   - Filter interaktif berdasarkan kategori risiko (Finansial, ITGC & Sistem, Operasional & Pengadaan).
   - Skema terstruktur `CollectionPage` dan `ItemList` serta FAQ rich snippets (`FAQPage`).
3. **Route & Discovery Integration:**
   - Mendaftarkan rute `/temuan-audit-icofr` pada `App.tsx`, `ROUTE_METADATA_MAP`, `Footer.tsx`, `public/sitemap.xml`, dan generator `llms.txt`.

## Capabilities

### New Capabilities
- `global-breadcrumb-schema`: Mengotomasi injeksi skema terstruktur `BreadcrumbList` dan `speakable` ke seluruh rute SSG untuk memaksimalkan visual SERP snippet di Google dan keterbacaan Answer Engines (AEO).
- `audit-findings-hub`: Menyediakan halaman katalog direktori kurasi temuan defisiensi audit ICOFR BUMN dan rekomendasi Corrective Action Plan (CAP) SK-5 untuk audiens SPI, akuntansi, dan komite audit BUMN.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `scripts/generate-static-routes.ts`, `src/App.tsx`, `src/utils/seoMeta.ts`, `src/components/Footer.tsx`, `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`.
- **New Files**: `src/components/pages/AuditFindingsPage.tsx`.
- **Dependencies**: Lucide icons (`AlertTriangle`, `CheckCircle2`, `FileCheck2`, `ShieldAlert`, `Layers`, `Search`, `ArrowRight`, `BookOpen`).
