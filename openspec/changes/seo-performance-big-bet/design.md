# Design

## Context

Lihat `proposal.md` (Why). Keadaan saat ini:
- `src/App.tsx` mengimpor 20 page components + `BlogPage` statis; output build satu chunk `index-*.js` 917KB (gzip ~244KB). `react-markdown` dipakai 3 komponen rute-berat tapi ikut ke semua rute.
- 8 foto Unsplash unik dipakai 12 artikel (`?auto=format&fit=crop&w=1200&q=80`); `<img>` sudah punya `width/height/loading/decoding`, sebagian `fetchPriority="high"`.
- Prerender menyuntik semantic HTML ke `#root` lalu React hidrasi penuh; sitemap `image:image` artikel menunjuk Unsplash.

## Goals / Non-Goals

**Goals:**
- Chunk awal < 300KB gzip; halaman berat diunduh on-demand.
- 0 request gambar ke pihak ketiga; WebP responsif + guard build.
- Prerender + hidrasi + sitemap tetap hijau.

**Non-Goals:**
- Tidak ada perubahan visual, rute, atau konten kata.
- Tidak ada SSR/SSG framework baru; tetap Vite + interceptor prerender existing.

## Decisions

1. **`React.lazy` per grup rute + satu `Suspense` di `App.tsx` main** — grup: home-shell (sinkron), layanan, platform, glossary, regulasi/toolkit, blog, assessment/kalkulator, legal. Alternatif lazy per-20-halaman ditolak: 20 boundary menambah waterfall dan kompleksitas tanpa gain berarti vs grup.
2. **`manualChunks`: `vendor-markdown` (react-markdown), `vendor-motion` (motion), `vendor-react` (react/react-dom)** — alasan: markdown+motion hanya dipakai rute tertentu; React inti tetap di entri. Alternatif tanpa manualChunks ditolak karena Vite akan menduplikasi vendor ke tiap lazy chunk.
3. **`sharp` sebagai devDependency + skrip `scripts/seo/fetch-images.ts`** — unduh 8 original Unsplash sekali, simpan `public/images/blog/<slug>-<w>.webp` + `.jpg` fallback (640/960/1200). Alternatif `vite-imagetools` ditolak: mengubah import pattern seluruh komponen sekaligus, risiko lebih besar.
4. **Ganti `coverImage` ke URL lokal, komponen pakai `<picture>`/srcset bertahap** — mulai dari `BlogList`/`BlogArticle`/`BlogPreviewSection` (jalur LCP). `seoMeta.ts` + sitemap mengikuti otomatis via `coverImage`. `preconnect` Unsplash dihapus bila ada.
5. **Pertahankan `width/height/loading/fetchpriority` existing** — tidak ada regresi atribut yang sudah benar; hanya tambah `srcset`/`sizes` + `type` WebP.

## Risks / Trade-offs

- [Fallback Suspense terlihat saat navigasi lambat] → Mitigasi: skeleton gelap sewarna tema + `startTransition` bila perlu; shell tidak berkedip.
- [Lazy chunk merusak hidrasi prerender] → Mitigasi: verifikasi hidrasi per grup rute (console bersih + interaksi jalan); rollback = revert `App.tsx`/`vite.config.ts`.
- [Lisensi/atribusi foto Unsplash] → Mitigasi: 8 foto sudah dipakai publik; simpan daftar sumber + fotografer di skrip untuk atribusi bila diperlukan.
- [Ukuran repo bertambah (~8 foto x 3 varian x 2 format)] → Mitigasi: WebP q75, estimasi < 3MB total; dapat diterima untuk LCP.

## Migration Plan

1. Mendarat berurutan: code-split dulu (verifikasi hidrasi), lalu gambar (verifikasi 0 Unsplash request).
2. Verifikasi: `tsc`, build + guards hijau, audit ukuran chunk, spot-check hidrasi 8 grup rute, `grep -r unsplash dist/ src/content src/utils` kosong (kecuali daftar atribusi).
3. Rollback per lapis (revert App/vite atau revert coverImage) tanpa migrasi data.

## Open Questions

- Budget 300KB gzip chunk awal: angka target awal, disesuaikan setelah pengukuran pertama tanpa mengubah spec (spec hanya menuntut markdown/motion keluar dari entri + ukuran tercatat).
