# Design

## Context

Lihat `proposal.md` (Why). Mekanisme existing yang dipakai ulang:
- `GLOSSARY_ITEMS` → prerender `/glosarium/:slug`, JSON-LD DefinedTerm, sitemap perlu entri manual.
- Front-matter markdown → prerender artikel, RSS, llms.txt, ItemList otomatis; `seoMeta.ts` + `sitemap.xml` manual per slug.
- `ROUTE_FAQS`/`ROUTE_HOWTO` opsional per rute.

## Goals / Non-Goals

**Goals:** 8 istilah + 2 artikel terindeks penuh dengan mesh link dan CTA konversi.
**Non-Goals:** File download, sektor baru, perubahan visual/komponen (selain penambahan 1 nilai filter yang dirender dari `GLOSSARY_CATEGORIES`).

## Decisions

1. **Kategori baru sebagai union member + `GLOSSARY_CATEGORIES`** — filter UI membaca konstanta tersebut (verifikasi saat implementasi; bila hardcode di komponen, tambah di sana juga). Alternatif memakai kategori existing ditolak: KAK/HPS bukan "Regulasi & Kerangka Kerja" ICOFR.
2. **Istilah akuntansi (PSAK 71/72) masuk kategori pengadaan** — alasan: dibaca dalam konteks dokumen tender/HPS yang mensyaratkan kepatuhan PSAK; judul kategori tetap "Pengadaan & Kualifikasi".
3. **Artikel memakai 2 foto lokal existing** (HPS → foto meeting/whiteboard `1551836022`; harga/TCO → foto tech `1451187580459`) — tanpa unduhan baru, guard image tetap hijau.
4. **FAQ artikel di body markdown + `ROUTE_FAQS` bila polanya mendukung** — cek `faqData.ts` saat implementasi; minimal FAQ ter-render di prerender body.

## Risks / Trade-offs

- [Duplikasi konten dengan /panduan-kak-tor-icofr] → Mitigasi: artikel HPS fokus estimasi biaya (bukan struktur KAK); canonical berbeda; saling taut sebagai cluster.
- [Klaim harga spesifik cepat basi] → Mitigasi: tulis rentang + komponen biaya + faktor penentu, hindari angka pasti sebagai fakta; tanggal jelas di front-matter.
- [Filter UI ternyata hardcode] → Mitigasi: sesuaikan komponen saat implementasi (perubahan kecil, masih dalam scope).

## Migration Plan

1. glossaryData + kategori + filter → build parsial cek 8 snapshot.
2. 2 markdown + seoMeta + sitemap + FAQ → full build + guards.
3. Rollback: hapus entri/berkas baru (tidak ada migrasi data).

## Open Questions

- Tidak ada yang menunda implementasi; pilihan foto final diputuskan saat menulis artikel.
