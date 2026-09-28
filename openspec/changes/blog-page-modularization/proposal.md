# Proposal

## Why

`src/components/BlogPage.tsx` (1181 baris) mencampur 4 tanggung jawab: loading + parsing markdown, tampilan daftar (filter kategori, pencarian, sync `?q=`), tampilan artikel (TOC, scroll-spy, related, FAQ, prev/next), dan tipe data. Hampir tiap change konten menyentuhnya sehingga risiko regresi naik. Dipecah selagi perilaku dikunci identik.

## What Changes

- Memecah menjadi `src/components/blog/`: `lib/blogLoader.ts` (glob + parse + `LOADED_BLOG_POSTS`), `hooks/useBlogSearch.ts` (state pencarian + sync `?q=`), `BlogList.tsx` (tampilan daftar + featured), `BlogArticle.tsx` (tampilan artikel + TOC + related + FAQ), dan `BlogPage.tsx` sebagai switch tipis daftar vs artikel.
- Tanpa perubahan perilaku: tidak ada rute, tampilan, teks, atau interaksi baru.

## Capabilities

Perubahan ini murni penataan ulang internal tanpa perubahan perilaku spec-level, sehingga tidak mendeklarasikan capability baru maupun delta. Change ini memakai `skip_specs: true` pada `.openspec.yaml`.

### New Capabilities
- (tidak ada)

### Modified Capabilities
- (tidak ada)

## Impact

- File diubah: `src/components/BlogPage.tsx` dipecah ke `src/components/blog/`; tidak ada perubahan pada data, routing (`App.tsx` hanya menyesuaikan path impor bila perlu), prerender, atau schema.
- Verifikasi: golden-diff output `dist/` sebelum vs sesudah harus nol beda (di luar cap waktu build); `npm run build` + `npm run lint` hijau; buka `/blog`, 1 artikel, dan `/blog?q=TOE` di browser untuk konfirmasi visual. Tanpa ini, change tidak di-merge.
