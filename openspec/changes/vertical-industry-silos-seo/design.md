## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini aplikasi menggunakan arsitektur SPA React dengan prerendering statis menggunakan Puppeteer (`prerender-routes.js`). Routing utama dikelola di `App.tsx` melalui `window.location.pathname` dan disinkronkan dengan `seoMeta.ts`.

Kepatuhan desain wajib mengacu pada `.agents/skills/design-taste-frontend/SKILL.md` dan `.agents/AGENTS.md`:
- Desain lapang (*breathing room*), tanpa gradient blur blobs sintetis, tanpa fake glassmorphism, tanpa em-dash/en-dash (`—`/`–`), tanpa ikon `Sparkles`, dan batas aksen BUMN Gold <= 10%.
- Domain resmi mutlak: `https://dsintegra.co.id`.

## Goals / Non-Goals

**Goals:**
- Mengembangkan struktur data deklaratif untuk sektor-sektor BUMN (`src/data/sectorsData.ts`) yang mencakup rincian regulasi sektoral, tantangan audit spesifik, blueprint RCM tipikal, FAQ, dan skema JSON-LD.
- Membangun komponen reusable yang kokoh `src/components/pages/SectorDetailPage.tsx` untuk menampilkan data sektor secara elegan, berwibawa, dan responsif.
- Mengintegrasikan rute `/sektor-bumn/perbankan`, `/sektor-bumn/infrastruktur-karya`, `/sektor-bumn/energi-tambang` ke dalam `App.tsx`, `seoMeta.ts`, `prerender-routes.js`, dan `public/sitemap.xml`.
- Menyediakan internal link yang tepat dari Footer dan halaman layanan ke halaman sektor.

**Non-Goals:**
- Membuat login portal khusus untuk masing-masing sektor (halaman ini murni landing page vertikal SEO & edukasi enterprise).
- Mengubah alur asesmen maturitas yang sudah ada (hanya mem-prefill atau mengarahkan ke asesmen yang sudah aktif).

## Decisions

### Decision 1: Arsitektur Data Berbasis File Tunggal (`sectorsData.ts`) vs Komponen Terpisah per Halaman
- **Pilihan:** Membuat satu file schema & data `src/data/sectorsData.ts` dan satu komponen render `SectorDetailPage.tsx` yang menerima prop atau membaca slug sektor (`perbankan`, `infrastruktur-karya`, `energi-tambang`).
- **Rasional:** Memastikan konsistensi layout, hierarki visual, micro-interactions, dan kemudahan audit kode serta penambahan sektor BUMN lain di masa mendatang.
- **Alternatif yang Dipertimbangkan:** Membuat 3 file komponen halaman terpisah secara manual. Ditolak karena redundansi kode dan potensi inkonsistensi styling.

### Decision 2: Schema.org JSON-LD Multilevel (`Service` + `FAQPage` + `BreadcrumbList`)
- **Pilihan:** Menyematkan schema terstruktur langsung ke dalam `<head>` via helper atau tag `<script type="application/ld+json">` saat halaman sektor aktif.
- **Rasional:** Memaksimalkan peluang muncul di SERP Google dengan Rich Results (FAQ accordion) dan Google Sitelinks.

## Risks / Trade-offs

- **[Risk] Ukuran bundle JavaScript bertambah jika data sektor terlalu besar** → *Mitigation:* Data sektor difokuskan pada teks struktural dan ringkasan RCM bernilai tinggi tanpa aset biner besar, tetap menjaga bundle footprint minimal.
- **[Risk] Teks duplikatif antar halaman sektor** → *Mitigation:* Setiap sektor memiliki pain points, terminologi hukum (POJK vs PSAK 72 vs SK Holding), dan RCM yang 100% berbeda dan spesifik industri.
