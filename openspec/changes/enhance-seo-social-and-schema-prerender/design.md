## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini proses SSG (`scripts/generate-static-routes.ts`) menyalin `index.html` dan hanya mengganti tag `<title>`, `<meta name="description">`, `<link rel="canonical">`, dan Open Graph title/desc/url dasar tanpa menyertakan `og:image` maupun `twitter:image`. Selain itu, template `index.html` memuat satu blok `<script type="application/ld+json">` yang menumpuk seluruh entitas (`ProfessionalService`, `SoftwareApplication`, `BreadcrumbList`, `FAQPage`, `TechArticle`).

## Goals / Non-Goals

**Goals:**
- Menyediakan gambar fallback resmi `public/og-image.jpg` dengan tema visual korporat BUMN (Dark Navy, typography tajam, dimensi standar 1200x630 pixel).
- Memperluas `RouteMeta` di `src/utils/seoMeta.ts` dengan properti `image?: string` dan memetakan gambar sampul blog untuk tiap artikel secara otomatis.
- Mengotomasi injeksi `<meta property="og:image">`, `<meta property="og:image:width" content="1200">`, `<meta property="og:image:height" content="630">`, `<meta property="twitter:image">`, dan `<meta property="twitter:card" content="summary_large_image">` baik pada skrip SSG maupun runtime client.
- Memodularisasi injeksi JSON-LD pada `scripts/generate-static-routes.ts` agar tiap jenis halaman menerima skema yang sesuai:
  - Homepage (`/`): `ProfessionalService` + `FAQPage`.
  - Platform & Tools (`/platform/grc-integra`, `/kalkulator-sampel-toe`, `/asesmen-maturitas`): `SoftwareApplication` / `WebApplication` + `BreadcrumbList`.
  - Artikel Blog (`/blog/*`): `TechArticle` / `Article` spesifik artikel tersebut + `BreadcrumbList`.
  - Halaman lainnya: `BreadcrumbList` + entitas konteks.

**Non-Goals:**
- Tidak mengubah layout komponen UI visual atau styling CSS halaman.
- Tidak membangun server rendering runtime dinamis (SSR). Tetap mempertahankan SSG static route snapshots yang cepat dan hemat resource.
- Tidak mengubah isi konten markdown artikel yang sudah ada.

## Decisions

### 1. Injeksi Image URL Absolut vs Relatif
- **Keputusan:** Seluruh nilai `og:image` dan `twitter:image` WAJIB menggunakan URL absolut berawalan `https://dsintegra.co.id/` (misal: `https://dsintegra.co.id/og-image.jpg` atau URL CDN gambar Unsplash).
- **Rasional:** Crawler media sosial seperti WhatsApp, Facebook debugger, dan LinkedIn scraping bots menolak atau mengabaikan tag gambar dengan path relatif (`/og-image.jpg`).

### 2. Strategi Pemisahan Skema JSON-LD di Skrip SSG
- **Keputusan:** `scripts/generate-static-routes.ts` akan menggantikan blok `<script type="application/ld+json">` di dalam template HTML dengan skema yang disesuaikan secara programatis per rute.
- **Alternatif yang ditolak:** Mempertahankan skema monolitik di semua rute. Ditolak karena Google Search Console memberikan warning bila halaman non-artikel (misal `/kebijakan-privasi`) mengumumkan skema `TechArticle`.

### 3. Pembuatan Asset Fallback `og-image.jpg`
- **Keputusan:** Menghasilkan asset gambar korporat beresolusi 1200x630 berlatar Ink Navy (`#0b0f19`), aksen BUMN Blue (`#0b4596`), dan BUMN Gold (`#cca43b`) dengan tulisan "Daya Solusi Integra | GRC Integra Platform & Konsultan ICOFR BUMN" untuk memastikan link non-artikel tetap memiliki preview visual premium.

## Risks / Trade-offs

- **[Risk]** Pembersihan JSON-LD menghapus skema yang dibutuhkan di homepage.
  - → **Mitigasi:** Homepage (`/`) dipertahankan menggunakan `index.html` asli yang sudah teruji valid, modularisasi diterapkan pada salinan rute statis turunan.
- **[Risk]** URL gambar artikel blog Unsplash gagal termuat bila ada gangguan jaringan crawler.
  - → **Mitigasi:** Bila artikel tidak memiliki `coverImage`, otomatis fallback ke `https://dsintegra.co.id/og-image.jpg`.
