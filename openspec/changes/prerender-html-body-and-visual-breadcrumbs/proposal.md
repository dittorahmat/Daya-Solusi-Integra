## Why

Saat ini aplikasi Daya Solusi Integra telah memiliki generator rute statis (`scripts/generate-static-routes.ts`) yang menginjeksi metadata `<head>` (Title, Description, Canonical, Open Graph, dan JSON-LD). Namun, elemen `<div id="root"></div>` pada berkas HTML hasil generasi masih kosong tanpa konten body semantik. Akibatnya:
1. Crawler web atau bot AI (Googlebot, Bingbot, Perplexity, GPTBot) yang mengutamakan pembacaan HTML mentah (*raw HTML*) tanpa rendering JavaScript penuh tidak mendapatkan konten teks utama (heading, artikel, definisi glosarium, dan FAQ).
2. Metrik Core Web Vitals khususnya Largest Contentful Paint (LCP) dan First Contentful Paint (FCP) belum optimal bagi pengunjung dengan koneksi lambat sebelum bundle JS terhidrasi.
3. Halaman subhalaman belum memiliki navigasi breadcrumbs visual terstruktur yang memperjelas hierarki halaman bagi pengguna dan memperkuat sinyal breadcrumb Google Search Console.

Perubahan ini diperlukan sekarang untuk memaksimalkan indeksasi mesin pencari secara instan (*low effort, high impact*) tanpa merombak arsitektur React SPA.

## What Changes

- **Static Root Semantics Injection**: Memperluas `scripts/generate-static-routes.ts` untuk menginjeksi struktur HTML semantik (H1, Lead Paragraph, Breadcrumbs, Accordion/List FAQ, dan Internal Links) langsung ke dalam `<div id="root">...</div>` pada file HTML statis di `dist/`.
- **Hydration Compatibility**: Memastikan konten semantik statis di `<div id="root">` digantikan secara mulus dan bersih (*clean mount/hydration*) oleh React saat `main.tsx` dijalankan di sisi browser tanpa error atau flicker.
- **Visual Breadcrumbs Component**: Membuat komponen navigasi breadcrumbs visual reusable (`src/components/Breadcrumbs.tsx`) yang elegan, accessible, dan konsisten dengan skema JSON-LD `BreadcrumbList` yang sudah ada, lalu mengintegrasikannya ke seluruh subhalaman (`src/components/pages/*`).
- **Strict Brand & Taste Compliance**: Menjamin teks dan komponen breadcrumbs mematuhi zero em-dash (`—`/`–`), palet BUMN Blue & BUMN Gold, dan hierarki visual B2B profesional.

## Capabilities

### New Capabilities
- `visual-breadcrumbs`: Navigasi breadcrumb visual di subhalaman yang selaras dengan hierarki rute dan skema `BreadcrumbList`.

### Modified Capabilities
- `static-prerender-generator`: Menambahkan injeksi konten HTML semantik ke dalam `<div id="root">` untuk setiap rute halaman statis pasca-build.

## Impact

- **Affected Code**:
  - `scripts/generate-static-routes.ts` (penambahan logic per-route HTML content injection ke root container)
  - `src/components/Breadcrumbs.tsx` (komponen baru)
  - `src/components/pages/IcofrBumnPage.tsx`
  - `src/components/pages/ItgcAuditReadinessPage.tsx`
  - `src/components/pages/EnterpriseGrcPage.tsx`
  - `src/components/pages/PlatformProductPage.tsx`
  - `src/components/pages/AssessmentLandingPage.tsx`
  - `src/components/pages/GlossaryPage.tsx`
  - `src/components/pages/GlossaryDetailPage.tsx`
  - `src/components/pages/ToeCalculatorPage.tsx`
  - `src/components/pages/PrivacyPolicyPage.tsx`
  - `src/components/pages/IndependenceStatementPage.tsx`
  - `src/components/BlogPage.tsx`
- **APIs / Dependencies**: Tidak memerlukan dependensi NPM eksternal baru (memanfaatkan `fs`, `path`, dan React).
