# Proposal

## Why

Sweep menemukan 2 internal link mati di body artikel (`/kalkulator-toe`, `/kalkulator-tabel-22` → keduanya 404; rute benar `/kalkulator-sampel-toe`), guard link hanya mencakup `/blog/*`, serta dead code (`BlogSection.tsx` tak diimpor, dep `motion` tak dipakai) yang membebani install.

## What Changes

- Perbaiki 2 href artikel ke `/kalkulator-sampel-toe`.
- Generalisasi guard prerender: SEMUA href internal `/...` di snapshot dist WAJIB resolve (file/dir ada), bukan hanya `/blog/*`.
- Hapus `src/components/BlogSection.tsx` (dead) dan dep `motion` (unused).
- Non-goals: perubahan visual, konten baru, ubahan rute.

## Capabilities

### New Capabilities
- `snapshot-link-integrity`: guard generalisasi semua internal link snapshot prerender.

### Modified Capabilities
- (kosong)

## Impact

- Terpengaruh: 2 markdown, `scripts/seo/linkguard.ts`, `scripts/generate-static-routes.ts` (nama fungsi guard), `package.json` (drop motion), 1 file dihapus.
- Risiko: guard baru menemukan temuan pre-existing lain → perbaiki bila sepele, laporkan bila tidak.
