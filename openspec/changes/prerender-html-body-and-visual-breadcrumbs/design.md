## Context

Lihat `proposal.md` untuk motivasi dan latar belakang bisnis.
Aplikasi Daya Solusi Integra menggunakan React 19 + Vite yang dibangun sebagai Single Page Application (SPA). Dalam pipeline build (`npm run build`), skrip `scripts/generate-static-routes.ts` membaca `dist/index.html` dan menghasilkan salinan fisik `index.html` per rute dengan metadata `<head>` yang disesuaikan. Namun, elemen `<div id="root"></div>` tetap kosong.

## Goals / Non-Goals

**Goals:**
- Menginjeksi markup semantik HTML yang kaya (Semantic SSR/Prerender Fallback) ke dalam `<div id="root">` untuk setiap subhalaman statis di `dist/` saat build.
- Memastikan konten semantik mencakup: Breadcrumbs, H1 Title, Lead summary, Executive Key Takeaways / Capabilities list, FAQs (bila ada), dan Internal links ke layanan/kontak.
- Menyediakan komponen `Breadcrumbs` visual yang ringan (`src/components/Breadcrumbs.tsx`), responsif, dan elegan, yang diintegrasikan ke seluruh subhalaman dengan mematuhi visual identity BUMN (BUMN Blue, BUMN Gold, zero em-dash).
- Memastikan transisi hidrasi browser React 19 berjalan mulus tanpa runtime warning atau layout shift yang mengganggu.

**Non-Goals:**
- Migrasi penuh ke framework SSR/SSG server-side seperti Next.js, Remix, atau Astro (menghindari kerumitan arsitektur dan potensi regresi kode).
- Dynamic server-side rendering on request (situs tetap berjalan sebagai static bundle + Express proxy ringan).

## Decisions

### Decision 1: Template Semantic Helper di `scripts/generate-static-routes.ts`
- **Pilihan**: Membangun generator HTML string semantik terstruktur di dalam `scripts/generate-static-routes.ts` yang memetakan konten spesifik per rute berdasarkan data yang telah ada di `ROUTE_METADATA_MAP`, `ROUTE_FAQS`, `GLOSSARY_ITEMS`, dan file blog markdown.
- **Alternatif yang Dipertimbangkan**:
  - *Headless browser crawling (Puppeteer/Playwright)*: Terlalu lambat, menambah ketergantungan binary Chromium yang besar (~300MB), dan rawan timeout di CI/CD.
  - *ReactDOMServer `renderToString()`*: Memerlukan penyesuaian bundle server build dan mock browser window object (`window.location`, `matchMedia`).
- **Alasan**: Helper berbasis data mengekstrak langsung teks penting secara deterministik, sangat cepat (< 500ms saat build), dan menghasilkan HTML semantik bersih tanpa payload JSON JS ganda.

### Decision 2: Reusable `Breadcrumbs.tsx` Component
- **Pilihan**: Membuat komponen mandiri `Breadcrumbs.tsx` yang menerima prop `items: Array<{ label: string; path?: string }>` dan callback navigasi `onNavigate?: (path: string) => void`.
- **Styling**: Memakai styling Tailwind bersih: `text-xs text-slate-400`, chevron separator tipis (`lucide-react/ChevronRight`), link interaktif ke rute induk, dan label aktif berwarna `text-slate-200 font-medium`.

## Risks / Trade-offs

- **[Risk] React Hydration Discrepancy**: Saat React 19 mount di client, konten dalam `<div id="root">` digantikan oleh root DOM React.
  - **Mitigasi**: React 19 secara bawaan membersihkan dan mengganti child nodes `<div id="root">` saat `createRoot().render()` dipanggil. Tidak ada hydration mismatch error karena aplikasi tidak menggunakan `hydrateRoot()`, melainkan client mount standar.
- **[Risk] Pelanggaran Aturan Tipografi (Em-Dash)**: Teks breadcrumb atau ringkasan berpotensi memuat em-dash (`—`/`–`).
  - **Mitigasi**: Terapkan filter sanitasi string otomatis yang mengganti `—` atau `–` dengan `:` atau `;`, serta audit pra-penyelesaian regex wajib.
