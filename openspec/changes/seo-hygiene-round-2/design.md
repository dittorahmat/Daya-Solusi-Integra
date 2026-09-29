# Design

## Context

Lihat `proposal.md` (Why). Guard existing `validatePrerenderInternalLinks` hanya memindai `href="/blog/..."`; snapshot mengandung href ke rute, aset, dan anchor lain.

## Goals / Non-Goals

**Goals:** 0 broken internal link di semua snapshot; repo bebas dead code terkait.
**Non-Goals:** Perubahan perilaku render; audit link client-side penuh (di luar snapshot).

## Decisions

1. **Perluas fungsi guard yang sama (ganti implementasi, bukan tambah guard)** — satu pemindaian semua `href="/..."` dengan resolusi: strip query/hash → cek `dist/<path>/index.html` atau `dist/<path>` file. Alternatif guard kedua ditolak (duplikasi walk).
2. **Hapus BlogSection.tsx + dep motion** — verifikasi tak ada importir sebelum hapus; `npm uninstall motion`.
3. **Perbaiki 2 href di sumber markdown** (bukan di output) agar feed/llms/client ikut benar.

## Risks / Trade-offs

- [Guard baru menemukan temuan pre-existing] → Mitigasi: perbaiki bila trivial dalam scope link; bila besar, catat sebagai temuan tanpa memblokir (tetapi default tetap gagalkan build bila ada temuan valid).
- [Hapus file ternyata diimpor dinamis] → Mitigasi: grep import statis + `import(` sebelum hapus; `tsc` sebagai jaring pengaman.

## Migration Plan

1. Fix href → guard generalisasi → hapus dead code → build + guards.
2. Rollback: revert per berkas.

## Open Questions

- Tidak ada.
