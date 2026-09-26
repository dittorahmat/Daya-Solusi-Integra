## 1. Data Model & Sector Content Definition

- [x] 1.1 Buat dataset vertikal sektor `src/data/sectorsData.ts` yang mendefinisikan informasi detail untuk 3 sektor: Perbankan & Jasa Keuangan (`perbankan`), Infrastruktur & Karya (`infrastruktur-karya`), dan Energi & Holding Tambang (`energi-tambang`). Setiap sektor mencakup: target persona, ringkasan regulasi, perbandingan SK-5 vs regulasi sektoral, tantangan audit utama, 3 blueprint RCM tipikal, FAQ, dan skema JSON-LD. Verifikasi bahwa data bebas dari em-dash/en-dash (`—`/`–`) dan format link canonical resmi `https://dsintegra.co.id/sektor-bumn/...`.

## 2. Frontend Page Component

- [x] 2.1 Buat komponen landing page sektor `src/components/pages/SectorDetailPage.tsx` yang menerima prop sektor atau parameter slug. Komponen harus mengimplementasikan hero section otoritatif, breadcrumbs visual, regulatory alignment table, RCM blueprint cards, FAQ accordion, dan Call to Action terintegrasi. Verifikasi dengan mematuhi skill `design-taste-frontend` (tanpa blur blobs, tanpa em-dash, tanpa fake glassmorphism, accent gold <= 10%).

## 3. Routing & SEO Metadata

- [x] 3.1 Daftarkan rute sektor `/sektor-bumn/perbankan`, `/sektor-bumn/infrastruktur-karya`, `/sektor-bumn/energi-tambang` ke dalam `src/App.tsx`.
- [x] 3.2 Update `src/utils/seoMeta.ts` untuk menyediakan metadata `<title>`, `<meta name="description">`, canonical URL, dan OpenGraph tag untuk masing-masing rute sektor.
- [x] 3.3 Tambahkan navigasi internal linking ke sektor-sektor BUMN di `src/components/Footer.tsx`.

## 4. Crawlability, Prerendering & Verifikasi

- [x] 4.1 Daftarkan rute sektor BUMN ke dalam `public/sitemap.xml` dengan prioritas 0.85 dan format canonical `https://dsintegra.co.id/sektor-bumn/<slug>`.
- [x] 4.2 Tambahkan rute sektor BUMN ke dalam daftar rute prerendering di `prerender-routes.js`.
- [x] 4.3 Jalankan verifikasi linting `npm run lint` (`tsc --noEmit`), audit larangan AI slop (`Select-String -Path "src\**\*.tsx", "src\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"`), dan jalankan `npm run build` untuk memastikan tidak ada error kompilasi dan prerendering berjalan sukses.
