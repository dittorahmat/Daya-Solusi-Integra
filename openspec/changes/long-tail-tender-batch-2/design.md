# Design

## Context

Lihat `proposal.md` (Why) untuk motivasi. Kondisi saat ini: 18 artikel blog (14 pilar + 4 batch-1 tender tahap persiapan: KAK/TOR, RCM procurement, agregasi defisiensi, scoping holding-anak). Rute konversi sudah ada (`/layanan/icofr-bumn`, `/layanan/enterprise-grc`, `/asesmen-maturitas`, `/platform/grc-integra`, `/kalkulator-sampel-toe`, `/regulasi`, `/glosarium/*`). Pola batch-1: front-matter + Daftar Isi anchor + min. 2 tabel + FAQ min. 4 + CTA terdiferensiasi, didaftarkan di `seoMeta.ts` + sitemap image lokal + snapshot prerender 10 paragraf + FAQ. Batch-2 mengikuti pola itu dengan matriks internal-link segitiga B1<->B2<->B3<->B4 plus jembatan ke batch-1.

## Goals / Non-Goals

**Goals:**

- 4 artikel tebal tahap keputusan tender dengan tabel kerja (budget, skor 70/30, checklist kualifikasi, timeline phased) sebagai lead magnet dan CTA 1:1 ke halaman konversi yang tepat.
- Setiap artikel punya 6-8 outbound + min. 3 inbound konkret (file sumber + anchor), bukan sekadar "tambahkan related".
- Semua lolos build: `seoMeta.ts`, sitemap image lokal, prerender 10 paragraf + FAQ, guards hijau.

**Non-Goals:**

- Tidak membuat halaman `/pengadaan/*` baru, tidak mengubah routing/komponen (kecuali menambah entri link/FAQ).
- Tidak menambah glosarium baru (hanya opsional `relatedServiceUrl` ke artikel baru bila sejalan).
- Tidak mengubah authoring voice/E-E-A-T (tetap author Humbul Kristiawan, nada sovereign corporate-authoritative).

## Decisions

- **Urutan tulis B1 (harga) -> B2 (evaluasi 70/30) -> B3 (kualifikasi) -> B4 (timeline).** Rasional: B1 paling dekat ke query harga bervolume dan menjadi jangkar yang dirujuk B2/B3; B2 sebelum B3 karena kriteria evaluasi mengacu ke syarat kualifikasi; B4 terakhir karena timeline mengutip asumsi budget dan skope dari B1-B3. Alternatif (timeline dulu untuk tiket enterprise) ditolak karena tanpa fondasi harga + evaluasi, timeline terasa abstrak.
- **Slug tanpa tahun kecuali B1 (`harga-jasa-implementasi-icofr-bumn-2026`).** Rasional: hanya B1 yang sensitif kesegaran harga tahunan; B2-B4 evergreen (70/30, kualifikasi, phased plan tidak berubah tiap tahun). Tanggal `date`/`updated` di frontmatter membawa kesegaran. Alternatif (semua slug bertahun) ditolak karena menambah beban perawatan tahunan tanpa manfaat keyword.
- **Satu tabel simulasi skor penuh hanya di B2; B1 tabel budget, B3 checklist tabel, B4 Gantt-style tabel phased.** Rasional: tiap artikel punya 1 tabel hero yang berbeda agar tidak kanibalisasi snippet; menjaga fokus keyword per artikel. Alternatif (satu artikel mencakup semua tabel) ditolak karena >5000 kata dan mengencerkan intent.
- **CTA dibedakan per artikel.** B1 -> `/layanan/icofr-bumn` + kontak (minta penawaran); B2 -> halaman KAK/TOR pengadaan + kontak (pendampingan evaluasi); B3 -> `/asesmen-maturitas` (cek kesiapan vendor); B4 -> `/layanan/enterprise-grc` (roadmap holding). Rasional: intent→CTA 1:1 menaikkan konversi seperti batch-1. Alternatif (semua ke kontak) ditolak karena memutus jalur nurturing.
- **Schema: B1 dan B2 `Article + FAQ`, B3 `HowTo (checklist) + FAQ`, B4 `Guide + FAQ`.** Rasional: B3 prosedural (checklist dokumen) sehingga eligible HowTo; sisanya evaluatif/informatif. Alternatif (semua `Article`) ditolak karena menyia-nyiakan eligibility rich snippet.

## Risks / Trade-offs

- [Risk] Angka harga B1 cepat basi atau dianggap penawaran resmi → Mitigasi: framing range ilustratif berbasis komponen + disclaimer survei pasar, bukan price list mengikat; cantumkan faktor penentu agar PPK menghitung sendiri.
- [Risk] Simulasi 70/30 B2 disalahartikan sebagai aturan baku Perpres → Mitigasi: tegaskan contoh metodologi yang lazim + rujuk Perpres 12/2021; penilaian akhir oleh pokja pemilihan.
- [Risk] Checklist kualifikasi B3 dianggap jaminan lolos → Mitigasi: framing "pola umum dokumen + jebakan administratif", sarankan verifikasi ke dokumen pemilihan paket spesifik.
- [Risk] Ledakan link (6-8 outbound/artikel + jembatan batch-1) terlihat manipulatif → Mitigasi: anchor natural 1 link per ~300 kata, prioritaskan link kontekstual di badan artikel, blok "Baca juga" maks. 3.
- [Risk] Cover image eksternal merusak sitemap/prerender → Mitigasi: semua cover memakai aset lokal `/images/blog/*`; guard image bagian dari acceptance.

## Migration Plan

- Murni penambahan konten + entri metadata; tidak ada migrasi data. Rollback = hapus 4 file `.md` + revert entri `seoMeta.ts`/`faqData.ts`/related. Urutan rilis disarankan B1, B2, B3, B4 (satu per merge) agar sitemap terindeks bertahap; tidak ada feature flag yang dibutuhkan.

## Open Questions

- Tidak ada yang menahan implementasi. Satu hal yang diputuskan saat apply: nama file cover image lokal per artikel (mengikuti `local-image-pipeline`) — tidak mengubah spec, desain, maupun task breakdown.
