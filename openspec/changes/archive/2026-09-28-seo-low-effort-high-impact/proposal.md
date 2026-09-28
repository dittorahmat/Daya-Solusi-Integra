# Proposal

## Why

Audit read-only menemukan 4 celah low-effort/high-impact yang membocorkan nilai SEO yang sudah dibangun: favicon/manifest kosong, aset 900KB tanpa kompresi/cache, 4 dari 6 internal link prerender `/blog` mengarah ke 404, dan klaim `aggregateRating 5.0/16` tanpa review pendamping yang berisiko dianggap spammy markup. Perbaiki sekarang selagi murah, sebelum masuk ke big-bet (code-split, ekspansi konten).

## What Changes

- Menambahkan set favicon (`favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`) + `manifest.webmanifest` + referensinya di `index.html` (termasuk prerender per-route via head hygiene).
- Menambahkan middleware kompresi (Brotli/Gzip) dan header `Cache-Control: public, max-age=31536000, immutable` untuk `/assets/*` di `server.ts` (produksi), tanpa mengubah perilaku API/rate-limit.
- Memperbaiki 6 internal link prerender `/blog` di `scripts/seo/semantic-body.ts` agar 6/6 menunjuk ke slug aktual di `src/content/blog/` (tidak ada link ke slug yang tidak ada).
- Memitigasi risiko `aggregateRating` homepage: menghapus klaim `5.0/16` dari `index.html` sampai ada data review terverifikasi dengan array `review` pendamping (atau mengganti dengan klaim yang didukung data).
- Non-goals: TIDAK menyentuh code-splitting, image pipeline webp, ekspansi glosarium/artikel, backlink/PR, dan perubahan visual.

## Capabilities

### New Capabilities
- `head-hygiene`: favicon set, manifest, apple-touch-icon, dan referensi head yang dipertahankan generator prerender untuk semua rute.
- `static-serving-performance`: kompresi respons dan cache immutable untuk aset statis hashed di server produksi.

### Modified Capabilities
- `static-prerender-generator`: persyaratan integritas internal link prerender — semua link yang dirender ke HTML statis SHALL menunjuk ke rute/slug yang ada (0 broken internal link pada snapshot `/blog`).
- `rich-structured-schema`: persyaratan kepercayaan markup — klaim rating SHALL didukung data review terverifikasi atau SHALL dihapus.

## Impact

- Terpengaruh: `index.html`, `public/*` (aset brand baru), `server.ts`, `scripts/seo/semantic-body.ts`, `scripts/generate-static-routes.ts` (head hygiene), `scripts/seo/xml.ts` (bila perlu upsert tag baru).
- Tidak ada perubahan API publik, tidak ada perubahan skema konten blog, tidak ada migrasi data.
- Risiko utama: klaim rating yang dihapus bisa menurunkan rich-result sementara — itu disengaja untuk menghindari penalti yang lebih besar.
