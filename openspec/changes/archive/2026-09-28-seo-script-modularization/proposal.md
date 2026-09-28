# Proposal

## Why

`scripts/generate-static-routes.ts` tumbuh hingga ±1900 baris dengan 7 tanggung jawab tercampur (parsing front-matter, RSS, JSON-LD, semantic HTML, sitemap enrich + validasi, llms.txt, IndexNow). Setiap change SEO menempelkan fungsi baru di ekornya sehingga risiko regresi dan waktu pahami-ulang naik. Modularisasi menurunkan risiko change berikutnya dengan syarat output byte-stabil.

## What Changes

- Memecah skrip menjadi modul `scripts/seo/`: `frontmatter.ts` (parse + tanggal), `jsonld.ts` (schema per tipe rute), `semantic-body.ts` (HTML semantik per tipe rute), `sitemap.ts` (enrich + validasi drift), `feeds.ts` (RSS + llms.txt), `indexnow.ts`, dan `generate-static-routes.ts` sebagai orkestrasi tipis.
- Tanpa perubahan perilaku: tidak ada URL, tag, schema, atau konten baru.

## Capabilities

Perubahan ini murni penataan ulang internal tanpa perubahan perilaku spec-level (tidak ada URL, tag, schema, atau konten baru), sehingga tidak mendeklarasikan capability baru maupun delta. Change ini memakai `skip_specs: true` pada `.openspec.yaml`.

### New Capabilities
- (tidak ada)

### Modified Capabilities
- (tidak ada)

## Impact

- File diubah: `scripts/generate-static-routes.ts` dipecah menjadi `scripts/seo/*.ts`; tidak ada perubahan pada `src/`, `public/`, `index.html`, atau `server.ts`.
- Verifikasi: golden-diff output `dist/` (seluruh HTML/XML) sebelum vs sesudah refactor harus nol beda; `npm run build` + `npm run lint` hijau. Tanpa ini, change tidak di-merge.
