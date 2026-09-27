# Proposal

## Why

Fondasi Technical SEO Daya Solusi Integra sudah kuat (prerender per-route, sitemap, robots AI-ready, JSON-LD kaya, IndexNow ping). Audit menemukan 6 cacat kecil berbiaya rendah yang menahan hasil: logo organisasi salah (sinyal brand lemah), drift feed vs sitemap (sinyal keterawatan lemah), gambar blog tanpa atribut loading modern (risiko LCP mobile), duplikasi JSON-LD client vs prerender (risiko rich-result), dan title/description yang belum dioptimasi CTR. Memperbaikinya sekarang memberi dampak ranking, CTR, dan sitasi AI maksimal dengan effort minimal sebelum masuk ke pekerjaan authority jangka panjang.

## What Changes

- Mengganti `ProfessionalService.image` di `index.html` dari `vite.svg` ke logo/OG image resmi perusahaan.
- Menyatukan sumber kebenaran slug blog (front-matter markdown) antara `feed.xml` dan `sitemap.xml`; memperbaiki 2 slug drift yang ada.
- Menambahkan atribut performa gambar (dimensi, `loading="lazy"`, `decoding="async"`, `fetchpriority="high"` untuk hero) pada gambar blog/hero; verifikasi parameter `auto=format` Unsplash.
- Menjadikan prerender sebagai satu-satunya sumber JSON-LD per halaman; menghapus injeksi `application/ld+json` client-side yang duplikat (`BlogPage.tsx` dan halaman yang memakai pola sama).
- Menyetel ulang title/description 6 halaman uang (homepage + `icofr-bumn`, `grc-integra`, `kalkulator-sampel-toe`, `panduan-sk5-icofr-grc-integra`, `kualifikasi-vendor`) untuk CTR dan membedakan OG image per silo layanan/platform.
- Memverifikasi IndexNow ping berjalan sukses pada build (key file + status 200/202 di log); bukan implementasi baru.

## Capabilities

### New Capabilities
- `responsive-image-loading`: Atribut loading gambar modern (dimensi eksplisit, lazy loading, fetchpriority hero, decoding async) untuk Core Web Vitals LCP/CLS pada gambar konten dan hero.

### Modified Capabilities
- `rich-structured-schema`: Requirement berubah (logo organisasi wajib memakai aset brand resmi, bukan placeholder; JSON-LD per halaman wajib tunggal dari prerender, injeksi client-side yang duplikat dihapus).
- `dynamic-seo-meta`: Requirement berubah (title/description 6 halaman uang dioptimasi CTR dengan batas panjang tampil SERP; OG image dibedakan per silo, bukan satu gambar global).
- `static-prerender-generator`: Requirement berubah (feed dan sitemap wajib berasal dari satu sumber slug yang sama; drift slug ditolak).

## Impact

- File diubah: `index.html` (1 baris image), `src/utils/seoMeta.ts` (6 entri meta), `src/components/BlogPage.tsx` (+ halaman dengan injeksi JSON-LD client), komponen gambar blog/hero, `scripts/generate-static-routes.ts` (sumber slug tunggal), `public/sitemap.xml` (2 slug).
- Tidak ada library baru, tidak ada perubahan routing/arsitektur, tidak ada perubahan visual (patuhi Impeccable + Zero Em-Dash).
- Verifikasi: Google Rich Results Test, PageSpeed LCP mobile, konsistensi feed vs sitemap, log IndexNow.
