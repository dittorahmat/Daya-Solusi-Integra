# Proposal

## Why

Setiap rute memuat satu chunk JS 917KB (20 page imports statis di `App.tsx`, `react-markdown` ikut terbawa ke homepage) dan 12 cover artikel dimuat dari `images.unsplash.com` eksternal tanpa format modern — LCP mobile dan crawl-render budget Google terbuang. Setelah quick-win kompresi/cache mendarat, inilah hambatan terbesar berikutnya menuju LCP < 2.5s.

## What Changes

- Memecah bundle via `React.lazy` + `Suspense` per grup rute (home shell tetap sinkron; 20 halaman + `BlogPage`/`Assessment` berat jadi chunk terpisah) dan `manualChunks` vendor (`react`, `react-markdown`, `motion`).
- Mengunduh 8 foto Unsplash unik ke `public/images/blog/`, mengonversi ke WebP (+ JPEG fallback) via skrip build `sharp`, dan mengganti `coverImage` front-matter + `seoMeta.ts` ke URL lokal.
- Merender gambar responsif (`srcset`/`sizes`, `width`/`height` tetap, `loading`/`fetchpriority` dipertahankan) di komponen daftar/artikel blog.
- Mengalihkan `image:image` sitemap dan JSON-LD artikel ke URL gambar lokal; menghapus kebutuhan `preconnect` Unsplash.
- Non-goals: TIDAK mengubah desain/visual, TIDAK menambah rute/konten, TIDAK menyentuh endpoint API atau skema FAQ/HowTo.

## Capabilities

### New Capabilities
- `route-code-splitting`: pemuatan malas per-rute dengan fallback Suspense dan budget ukuran chunk.
- `local-image-pipeline`: pipeline gambar lokal responsif (WebP + fallback) dengan guard build.

### Modified Capabilities
- `static-prerender-generator`: snapshot prerender SHALL tetap terhidrasi dengan chunk malas dan `image:image` sitemap SHALL memakai URL gambar lokal yang dapat diakses (200).

## Impact

- Terpengaruh: `src/App.tsx`, `vite.config.ts`, komponen blog (`BlogList`, `BlogArticle`, `BlogPreviewSection`, `BlogSection`), 12 front-matter markdown, `src/utils/seoMeta.ts`, `scripts/seo/*` (sitemap/image), `package.json` (sharp dev).
- Risiko utama: regresi hidrasi prerender dan FOUC fallback Suspense — dimitigasi verifikasi build + spot-check hidrasi per grup rute.
