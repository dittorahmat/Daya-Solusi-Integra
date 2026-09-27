# Design

## Context

Lihat `proposal.md` (Why) untuk motivasi. Kondisi kini: prerender `scripts/generate-static-routes.ts` sudah jadi sumber meta + JSON-LD + feed + IndexNow ping; `src/utils/seoMeta.ts` (`ROUTE_METADATA_MAP`, ~35 rute) jadi sumber runtime client; `BlogPage.tsx:329` dan 6 halaman lain masih injek JSON-LD client-side; `ProfessionalService.image` menunjuk `vite.svg`; feed vs sitemap dirawat terpisah sehingga 2 slug drift. Batasan: tanpa ubah routing/arsitektur, tanpa library baru, patuhi Impeccable + Zero Em-Dash, teks UI Indonesia.

## Goals / Non-Goals

**Goals:**
- Satu sumber kebenaran slug untuk feed + sitemap dengan deteksi drift saat build.
- Satu blok JSON-LD per entitas per halaman (prerender menang, duplikat client dihapus).
- LCP mobile membaik via atribut gambar tanpa pipeline self-host baru.
- 6 halaman uang punya snippet SERP unik dalam batas tampil + OG image per silo.

**Non-Goals:**
- Tidak membangun pipeline AVIF/self-host (cukup parameter format Unsplash yang ada).
- Tidak mengubah desain visual atau struktur rute.
- Tidak menyentuh soft-404, sitemap-index, hreflang (bakal change terpisah).

## Decisions

1. **Prerender sebagai otoritas schema; client hanya meta.** Alternatif: hapus schema dari prerender dan andalkan client. Ditolak: crawler tanpa JS hanya melihat prerender. Maka `buildJsonLdForRoute` tetap, injeksi `application/ld+json` di komponen React dihapus (ganti dengan update `document.title`/meta bila perlu).
2. **Slug dari front-matter markdown sebagai kunci.** Alternatif: sitemap jadi kunci. Ditolak: markdown adalah tempat penulis bekerja; sitemap statis rawan lupa. Skrip build membaca `src/content/blog/*.md` lalu memvalidasi silang dengan `sitemap.xml` dan memberi peringatan eksplisit per slug drift.
3. **Atribut gambar bertahap, bukan self-host.** Alternatif: unduh semua Unsplash ke `public/` + generate AVIF/srcset. Ditolak untuk paket ini: butuh pipeline build + storage; 80 persen manfaat didapat dari dimensi + lazy + fetchpriority + `auto=format`. Self-host dicatat sebagai tindak lanjut.
4. **CTR tune-up terbatas 6 halaman uang.** Alternatif: tulis ulang 35 rute sekaligus. Ditolak: risiko keyword cannibalization dan review berat; 6 halaman uang mencakup mayoritas impresi. Pola yang terbukti lalu digulirkan.
5. **IndexNow cukup verifikasi.** Implementasi `submitToIndexNow()` non-blocking sudah ada; paket ini hanya memverifikasi key file + status 200/202 di log build, tanpa kode baru.

## Risks / Trade-offs

- [Risk] Menghapus injeksi JSON-LD client merusak halaman yang navigasi SPA tanpa reload (schema hilang setelah navigasi) → Mitigasi: prerender melayani tiap URL penuh saat load awal; navigasi SPA tetap update title/meta via `updateDocumentMeta`; verifikasi tidak ada halaman yang hanya bergantung pada injeksi client.
- [Risk] Peringatan drift slug dianggap noise dan diabaikan → Mitigasi: pesan mencantumkan slug persis + perintah perbaikan; jadikan kegagalan build bila drift menyentuh halaman uang.
- [Risk] OG image per silo menambah aset yang harus dirawat → Mitigasi: mulai 3 varian saja (layanan, platform, toolkit); reuse `og-image.jpg` sebagai fallback.
- [Risk] `aggregateRating 5.0/16` statis tanpa review pihak ketiga diabaikan Google → Mitigasi: di luar scope paket ini; catat sebagai open question untuk change E-E-A-T.

## Migration Plan

1. Terapkan perubahan meta/schema/atribut (tanpa downtime; build biasa).
2. Jalankan `npm run build`; pastikan 0 peringatan drift + log IndexNow 200/202.
3. Validasi: Rich Results Test (homepage + 1 blog + kalkulator), PageSpeed mobile (1 blog), cek pratinjau OG per silo.
4. Deploy seperti rilis normal; rollback = revert commit (tidak ada migrasi data).

## Open Questions

- Sumber `aggregateRating` produk: data nyata atau statis? (Menentukan apakah dipertahankan atau dicopot di change E-E-A-T.)
- Apakah 3 varian OG image cukup atau perlu per-halaman uang? (Tidak mengubah spec; diputuskan saat eksekusi tasks.)
