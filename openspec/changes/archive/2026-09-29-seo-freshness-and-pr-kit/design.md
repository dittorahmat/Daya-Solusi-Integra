# Design

## Context

Lihat `proposal.md` (Why). Prasyarat existing: `getBlogArticleMeta` (published + modified via git log/mtime), `ROUTE_METADATA_MAP` + prerender generik (Breadcrumb/WebPage/Nav/speakable otomatis untuk rute baru), lazy-route pattern di `App.tsx`, guards build (slug/link/image/glossary).

## Goals / Non-Goals

**Goals:** Loop kebusukan jalan + badge konsisten; `/media-kit` terindeks penuh.
**Non-Goals:** Data NAP fiktif, outreach, perubahan visual artikel selain badge.

## Decisions

1. **Skrip `scripts/seo/freshness.ts` via `tsx`, warn-only (exit 0)** — alasan: build tidak boleh merah karena umur konten; CI dapat mempromosikannya menjadi gate terpisah. Alternatif fail-build ditolak (memaksa edit artifisial).
2. **Badge memakai `getBlogArticleMeta` di client?** — BlogArticle menerima data dari blogLoader (front-matter, tanpa modified). Alternatif: hitung modified di loader via... loader client-side tidak bisa baca git. Keputusan: badge client memakai field `updated` opsional front-matter (ditulis saat revisi nyata); prerender memakai `getBlogArticleMeta` (git/mtime) sebagai sumber kebenaran crawler. Keduanya diformat Indonesia; badge hanya bila updated/modified > published.
3. **MediaKitPage mengikuti pola halaman existing** (Breadcrumbs + sections + FAQ?) — konten statis Indonesia, tanpa API; rute lazy; `seoMeta` + sitemap manual; cek `feeds.ts` apakah daftar halaman hardcode (bila ya, tambahkan).
4. **Logo pack = tautan ke aset publik existing** (bukan zip baru) — favicon.svg, og-image.jpg, og-logo-white.png; menghindari duplikasi biner.

## Risks / Trade-offs

- [Dua sumber tanggal (front-matter vs git) bisa beda] → Mitigasi: aturan tunggal modified > published; dokumentasikan di komentar kode.
- [Media kit minim backlink tanpa distribusi] → Mitigasi: di luar kode; halaman ini fondasi yang harus ada sebelum outreach.
- [Anchor statistik berubah] → Mitigasi: ID anchor persisten + tidak dipakai ulang untuk konten lain.

## Migration Plan

1. freshness.ts + script + badge → build + cek badge muncul hanya bila pantas.
2. MediaKitPage + rute + seoMeta + sitemap → full build + guards + smoke 200.
3. Rollback: hapus berkas/entri baru.

## Open Questions

- Tidak ada.
