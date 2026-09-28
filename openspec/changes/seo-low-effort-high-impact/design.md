# Design

## Context

Lihat `proposal.md` (Why). Keadaan saat ini yang membentuk pendekatan:
- `index.html` adalah template tunggal prerender: tidak ada favicon/manifest; `scripts/generate-static-routes.ts` menyalin head per-route via replace/upsert (`scripts/seo/xml.ts`).
- `server.ts` produksi memakai `express.static(dist)` tanpa kompresi/cache; rate-limit dan trailing-slash 301 sudah ada dan tidak boleh berubah.
- `scripts/seo/semantic-body.ts` untuk `/blog` menautkan 6 slug hardcode, 4 di antaranya tidak ada di `src/content/blog/` (12 file aktual).
- Klaim `aggregateRating 5.0/16` hanya ada di `index.html`, tidak dihasilkan `scripts/seo/jsonld.ts`.

## Goals / Non-Goals

**Goals:**
- Head hygiene konsisten di template + semua snapshot prerender tanpa duplikasi tag.
- Aset hashed cepat via kompresi + immutable cache; HTML/API tetap segar.
- 0 broken internal link pada snapshot `/blog` dengan guard saat build.
- Markup rating aman (ada bukti atau tidak ada klaim).

**Non-Goals:**
- Tidak ada code-splitting, image pipeline, atau perubahan visual/UX.
- Tidak ada perubahan struktur data konten atau endpoint API.

## Decisions

1. **Favicon sebagai SVG + PNG fallback + `manifest.webmanifest`, bukan ICO saja** — SVG tajam di tab modern, PNG 32px untuk kompatibilitas, `apple-touch-icon` 180px untuk iOS. Alternatif ICO tunggal ditolak karena buram di retina. Referensi ditambah di `index.html`, dipertahankan generator via `upsertHeadTag` (pola yang sudah ada).
2. **Kompresi di Express (`compression` dengan Brotli-first) + `maxAge: 1y, immutable` hanya untuk `/assets/*`** — alternatif CDN-only ditolak karena deploy saat ini memakai `dist/server.cjs` sendiri; alternatif cache HTML agresif ditolak karena merusak freshness prerender/sitemap. HTML tetap `no-cache`/default, API tidak tersentuh.
3. **Perbaiki link dengan daftar slug dari front-matter aktual, bukan hardcode baru** — `semantic-body.ts` untuk `/blog` diganti menautkan 6 slug nyata (atau render dari daftar file), plus validasi build yang memperingatkan bila href tidak cocok. Alternatif sitemap-crawl-check terpisah ditolak sebagai overkill untuk paket ini.
4. **Hapus `aggregateRating` sekarang, kembalikan hanya dengan `review` terverifikasi** — alternatif "biarkan dulu" ditolak karena risiko spammy-markup lebih mahal daripada kehilangan rich-result sementara. `jsonld.ts` ditambah guard yang sama agar klaim tidak muncul kembali dari jalur lain.

## Risks / Trade-offs

- [Ikon baru tidak muncul karena cache browser lama] → Mitigasi: nama file berversi + `theme-color` tetap; verifikasi via hard-refresh dan tab baru.
- [Kompresi menambah CPU] → Mitigasi: hanya aktif di produksi, level default, aset kecil di-skip oleh middleware.
- [Immutable cache salah sasaran ke file non-hash] → Mitigasi: batasi ke `/assets/*` ber-hash Vite; HTML di root tidak immutable.
- [Penghapusan rating menurunkan CTR sementara] → Mitigasi: disengaja; kembalikan setelah ada review nyata (tindak lanjut di luar change ini).

## Migration Plan

1. Deploy normal `npm run build && node dist/server.cjs` — tidak ada migrasi data.
2. Verifikasi: favicon 200, manifest 200, header `Content-Encoding` + `Cache-Control` pada `/assets/*`, snapshot `/blog` 6/6 link 200, Rich Results Test tanpa `aggregateRating`.
3. Rollback: revert 4 file area (aset publik, `index.html`, `server.ts`, `scripts/seo/*`) — tidak ada state persisten.

## Open Questions

- Sumber file ikon final: pakai `og-logo-white.png` yang ada sebagai basis, atau butuh logo SVG baru dari desainer? Tidak mengubah spec/tasks — implementasi memakai yang tersedia dulu.
