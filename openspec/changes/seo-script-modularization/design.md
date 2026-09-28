# Design

## Context

Lihat `proposal.md` (Why) untuk motivasi. Keadaan saat ini:

- Satu berkas `scripts/generate-static-routes.ts` (±1900 baris) berisi 7 tanggung jawab: parsing front-matter, helper tanggal, RSS, JSON-LD per tipe rute, semantic HTML per tipe rute, snapshot 404, sitemap enrich + validasi drift, llms.txt, dan IndexNow.
- Dieksekusi via `tsx` pada fase build (`package.json`: `vite build && ... && tsx scripts/generate-static-routes.ts`), mengimpor tipe/data dari `../src/utils/seoMeta.js` dan `../src/data/*.js` (sufiks `.js` gaya ESM-NodeNext).
- Fungsi-fungsi sudah kohesif per topik dan hanya berbagi konstanta direktori + beberapa helper kecil (`parseBlogFrontMatter`, `toIsoDate`, `getDateModifiedIso`, `escapeXml`, `cleanProhibitedDashes`, `upsertHeadTag`, `getBlogArticleMeta`).

## Goals / Non-Goals

**Goals:**
- Tiap modul punya satu tanggung jawab dengan batas impor yang jelas; orkestrasi (`generate-static-routes.ts`) tinggal memanggil sesuai urutan eksekusi saat ini.
- Output `dist/` identik byte-per-byte (di luar cap waktu build) sebelum vs sesudah refactor.

**Non-Goals:**
- Tidak ada perubahan perilaku, konten, URL, schema, maupun urutan eksekusi.
- Tidak menyentuh `src/`, `public/` hand-maintained, `index.html`, atau `server.ts`.
- Tidak menambah dependensi baru.

## Decisions

1. **Peta modul mengikuti fungsi yang sudah ada (bukan desain ulang).**
   `scripts/seo/frontmatter.ts` (parse + `toIsoDate` + `getDateModifiedIso` + `getBlogArticleMeta`), `jsonld.ts` (`buildJsonLdForRoute`), `semantic-body.ts` (`buildSemanticBodyHtmlForRoute`), `notfound.ts` (snapshot 404), `sitemap.ts` (enrich + validasi drift), `feeds.ts` (RSS + llms.txt), `indexnow.ts`, plus `paths.ts` (konstanta `distDir`, `publicDir`, `blogContentDir`, `templateHtml`) dan `xml.ts` (`escapeXml`, `cleanProhibitedDashes`, `upsertHeadTag`).
   Rationale: pemisahan mekanis per fungsi = review mudah (pindah blok, bukan tulis ulang). Alternatif (desain ulang berbasis class/pipeline) ditolak: risiko drift perilaku lebih besar tanpa manfaat SEO.

2. **Nama fungsi dan tanda tangan dipertahankan apa adanya.**
   Rationale: diff review menunjukkan pemindahan murni; perubahan API internal bukan tujuan change ini.

3. **Golden-diff sebagai gerbang merge, dengan normalisasi cap waktu.**
   Prosedur: build dari tree bersih → salin `dist/` ke `/tmp/golden-before` → refactor → build ulang → bandingkan `diff -r` dengan pengecualian pola cap waktu (`lastBuildDate`, RSS `buildDate`) yang memang nondeterministik tiap build. Selain pola itu, nol beda = syarat merge.
   Rationale: satu-satunya bukti objektif "tanpa perubahan perilaku" untuk output yang diindeks Google.

4. **Pertahankan gaya impor `.js` dan eksekusi `tsx` yang sudah ada.**
   Rationale: menghindari perburuan konfigurasi `tsconfig`/moduleResolution yang tidak berhubungan dengan tujuan.

## Risks / Trade-offs

- [Risk] Impor `.js` antar-modul bermasalah di `tsx` → Mitigasi: uji `npm run build` penuh di tiap tahap pemindahan, bukan sekali di akhir.
- [Risk] Golden-diff berisik karena `lastmod`/mtime berubah antar build → Mitigasi: tanggal berasal dari git log (stabil tanpa commit baru) dan front-matter; hanya normalisasi cap waktu build eksplisit. Jangan commit di antara dua build pembanding.
- [Risk] Impor sirkular antar modul baru → Mitigasi: arah dependensi satu arah (modul fitur hanya impor `paths`, `xml`, `frontmatter`); orkestrasi tidak diimpor siapa pun.
- [Trade-off] Duplikasi kecil (misal impor tipe `RouteMeta` di beberapa modul) diterima demi independensi modul.

## Migration Plan

1. Satu change, satu commit refactor (terpisah dari commit verifikasi). Rollback = revert commit tersebut.
2. Setelah merge, change berikutnya yang menyentuh skrip SEO wajib memakai modul baru, bukan menempel di orkestrasi.

## Open Questions

Tidak ada.
