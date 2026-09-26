## Why

Daya Solusi Integra telah memiliki banyak aset teknis, landing page sektoral, regulasi hub, dan toolkit kerja SK-5. Namun:
1. Belum ada halaman direktori terpusat studi kasus & benchmark maturitas ICOFR (`/studi-kasus`) yang menyajikan bukti empiris kuantitatif (before vs. after, eliminasi defisiensi pengendalian, efisiensi waktu audit TOE) untuk memenuhi kebutuhan pencarian bottom-of-funnel (BOFU) jajaran direksi, komite audit, dan kepala Satuan Pengawasan Intern (SPI) BUMN.
2. File discovery AI (`/llms.txt` dan `/llms-full.txt`) belum tersinkronisasi dengan penambahan rute-rute strategis terbaru (`/kualifikasi-vendor`, `/penulis/humbul-kristiawan`, `/toolkit-regulasi`, dan `/studi-kasus`), sehingga LLM dan Answer Engines (ChatGPT, Perplexity, Claude, Google SGE) belum memiliki rujukan kanonikal lengkap terhadap aset-aset tersebut.

## What Changes

1. **Dedicated Case Studies & Benchmark Index (`/studi-kasus`):**
   - Membangun halaman katalog studi kasus BUMN yang menyajikan benchmark metrik kuantitatif terukur (Holding BUMN Aset > Rp 50T, Sektor Perbankan Himbara/BPD, BUMN Infrastruktur/Karya).
   - Menampilkan ringkasan metrik audit: Eliminasi 42 defisiensi, 70% penghematan waktu pengujian TOE Tabel 22, 100% kepatuhan asersi direksi SK-5, dan mitigasi temuan SPI/BPKP.
   - Menyediakan filter/kategori industri (Holding, Perbankan, Infrastruktur).
   - Injeksi skema terstruktur JSON-LD: `CollectionPage` dan `ItemList` of `CaseStudy` / `Article` serta FAQ rich snippets.
2. **AEO & LLM Discovery File Synchronization:**
   - Memperbarui `public/llms.txt` dengan menambahkan bagian Kualifikasi Tender & Kesiapan Pengadaan BUMN (`/kualifikasi-vendor`), Profil Otoritas Pakar E-E-A-T (`/penulis/humbul-kristiawan`), Repositori Working Papers SK-5 (`/toolkit-regulasi`), dan Direktori Studi Kasus (`/studi-kasus`).
   - Memperbarui `public/llms-full.txt` dengan ringkasan komprehensif data profil pengadaan (KBLI 70209, 62019, 62029), kredensial pakar, dan ringkasan studi kasus holding BUMN.
3. **Route & Discovery Integration:**
   - Mendaftarkan rute `/studi-kasus` pada `App.tsx`, `ROUTE_METADATA_MAP` di `src/utils/seoMeta.ts`, `Footer.tsx`, dan `public/sitemap.xml`.
   - Menambahkan static prerender snapshot pada `scripts/generate-static-routes.ts`.

## Capabilities

### New Capabilities
- `case-studies-hub`: Menyediakan halaman katalog direktori studi kasus implementasi ICOFR BUMN, benchmark maturitas pengendalian internal, dan metrik kuantitatif audit untuk audiens pengambil keputusan.
- `aeo-llms-discovery`: Menyediakan sinkronisasi menyeluruh metadata LLM kanonikal (`llms.txt` dan `llms-full.txt`) mencakup seluruh aset konversi dan otoritas regulasi terbaru.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/App.tsx`, `src/utils/seoMeta.ts`, `src/components/Footer.tsx`, `scripts/generate-static-routes.ts`, `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`.
- **New Files**: `src/components/pages/CaseStudiesPage.tsx`.
- **Dependencies**: Lucide React icons (`TrendingUp`, `CheckCircle2`, `Building2`, `ShieldCheck`, `BarChart3`, `ArrowRight`, `Clock`, `Award`).
