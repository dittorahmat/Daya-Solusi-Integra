# Proposal

## Why

Dua frontier tersisa yang executable tanpa pakar kedua: (1) tidak ada loop kesegaran konten — tanggal `dateModified`/lastmod memang dinamis, tapi UI hanya menampilkan tanggal terbit dan tidak ada audit kebusukan konten; (2) tidak ada aset pemicu backlink — studi kasus dan statistik sitasi tersebar tanpa halaman rujukan pers yang mudah dikutip jurnalis/blogger.

## What Changes

- Loop kesegaran: skrip `npm run seo:freshness` (laporan kebusukan: artikel tak tersentuh >180 hari = stale, >365 hari = kritis) + badge "Diperbarui {tanggal}" di `BlogArticle` dan snapshot prerender bila modified > published.
- Halaman `/media-kit`: boilerplate perusahaan siap kutip, paket logo (memakai aset publik existing: favicon.svg, og-image.jpg, og-logo-white.png), statistik sitasi ber-anchor dari studi kasus, aturan pakai brand, kontak media (marketing@, tanpa data alamat/telepon baru).
- Entri `seoMeta.ts` + `sitemap.xml` untuk `/media-kit`; rute lazy di `App.tsx`; JSON-LD generik (Breadcrumb/WebPage/Nav) otomatis mengikuti.
- Non-goals: TIDAK membuat alamat/telepon fiktif untuk LocalBusiness, TIDAK outreach/GBP (kerja non-kode), TIDAK mengubah visual artikel selain badge tanggal.

## Capabilities

### New Capabilities
- `content-freshness-loop`: audit kebusukan konten + badge tanggal pembaruan terlihat.
- `pr-media-kit`: halaman rujukan pers pemicu sitasi dan backlink.

### Modified Capabilities
- (kosong — rute baru memakai perilaku prerender generik yang sudah ada)

## Impact

- Terpengaruh: `scripts/seo/freshness.ts` (baru), `package.json` (script), `src/components/blog/BlogArticle.tsx`, `scripts/seo/semantic-body.ts` (badge), `src/components/pages/MediaKitPage.tsx` (baru), `src/App.tsx`, `src/utils/seoMeta.ts`, `public/sitemap.xml`, `scripts/seo/feeds.ts` (bila daftar halaman hardcode).
- Risiko utama: halaman media-kit tipis → dimitigasi konten substansial (boilerplate + 4 statistik + panduan kutip).
