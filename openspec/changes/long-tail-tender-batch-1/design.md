## Context

Lihat `proposal.md` (Why) untuk motivasi. Kondisi saat ini: 14 artikel blog menutupi pilar umum (definisi ICOFR, SK-5, TOE Tabel 22, RCM Excel, harga/HPS, perbandingan software, flowchart, ISO 31000, fraud, studi kasus WTP). Rute uang sudah ada (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/layanan/enterprise-grc`, `/platform/grc-integra`, `/platform/bpm-workflow-editor`, `/regulasi`, `/glosarium/*`, `/sektor-bumn/*`). `src/data/howtoData.ts` me-link ke `/blog/panduan-penyusunan-kak-tor-icofr-bumn-2025` yang file-nya belum ada (broken link). Pola artikel lama: front-matter + Daftar Isi anchor + tabel + FAQ + CTA, didaftarkan di `seoMeta.ts` + sitemap + snapshot prerender. Batch ini mengikuti pola itu dan menambahkan matriks internal-link segitiga A1<->A2<->A3<->A4.

## Goals / Non-Goals

**Goals:**

- 4 artikel tebal ber-intent tender dengan template/checklist sebagai lead magnet dan CTA ke halaman konversi yang tepat (pengadaan vs platform vs consulting vs enterprise).
- Perbaiki broken link howto KAK/TOR dengan memakai slug yang sudah direferensikan.
- Setiap artikel punya 6-8 outbound + min. 3 inbound yang konkret (file sumber + anchor), bukan sekadar "tambahkan related".
- Semua lolos build: `seoMeta.ts`, sitemap image lokal, prerender 10 paragraf + FAQ, guards hijau.

**Non-Goals:**

- Tidak membuat halaman `/pengadaan/*` baru, tidak mengubah routing/komponen (kecuali menambah entri link/FAQ).
- Tidak menambah glosarium baru (hanya opsional `relatedServiceUrl` ke artikel baru bila sejalan).
- Tidak menulis 12 artikel cepat; batch ini eksplisit 4 tebal sesuai keputusan user.
- Tidak mengubah authoring voice/E-E-A-T (tetap author Humbul Kristiawan, nada sovereign corporate-authoritative).

## Decisions

- **Urutan tulis A1 -> A2 -> A3 -> A4.** Rasional: A1 memperbaiki broken link dan paling dekat ke tender sehingga memberi kemenangan SEO tercepat; A2 menjadi jangkar platform yang dirujuk A3/A4; A3 sebelum A4 karena A4 (holding) mengutip contoh agregasi dari A3. Alternatif (A4 dulu untuk tiket enterprise) ditolak karena A4 tanpa fondasi A2/A3 akan banyak forward-reference kosong.
- **Slug A1 memakai `panduan-penyusunan-kak-tor-icofr-bumn-2025` persis seperti di `howtoData.ts`, judul frontmatter di-update ke 2026.** Rasional: memperbaiki link mati tanpa migrasi/redirect; tanggal `date`/`updated` di frontmatter yang membawa kesegaran, bukan slug. Alternatif (slug baru + redirect) ditolak karena menambah permukaan redirect untuk satu link internal.
- **Satu tabel RCM penuh hanya di A2 (pengadaan); artikel siklus lain (pendapatan, payroll, aset) masuk backlog, bukan batch ini.** Rasional: menjaga batch tetap 4 artikel sesuai kapasitas; satu contoh dalam lebih baik untuk konversi platform daripada 4 contoh dangkal. Alternatif (satu artikel mencakup semua siklus) ditolak karena akan >5000 kata dan mengencerkan keyword `pengadaan`.
- **CTA dibedakan per artikel, bukan satu CTA generik ke kontak.** A1 -> halaman KAK/TOR + kontak (panitia); A2 -> `/platform/grc-integra` + bpm editor (Lini 1); A3 -> `/layanan/icofr-bumn` + enterprise (SPI/Komite); A4 -> `/layanan/enterprise-grc` + sektor (Direksi holding). Rasional: लगाया intent→CTA 1:1 menaikkan konversi tender. Alternatif (semua ke kontak) ditolak karena memutus jalur nurturing platform vs consulting.
- **Schema: A1 dan A2 `HowTo + FAQ`, A3 `Article + FAQ`, A4 `Guide + CaseStudy embed`.** Rasional: selaras dengan pola `howtoData.ts`/`faqData.ts` yang sudah ada dan memaksimalkan rich snippet per intent (prosedural vs evaluatif). Alternatif (semua `Article`) ditolak karena menyia-nyiakan eligibility HowTo untuk A1/A2.

## Risks / Trade-offs

- [Risk] Slug A1 bertahun 2025 terlihat basi di SERP → Mitigasi: judul + `updated` memakai 2026, tambah catatan "diperbarui mengikuti praktik tender 2026" di intro; URL tahun-lama umum untuk konten evergreen dan tidak diubah.
- [Risk] Tabel RCM A2 terlalu generik sehingga tidak terasa BUMN → Mitigasi: wajibkan kolom pemilik Lini 1/Lini 2, referensi SK-5/POJK, dan contoh SoD SAP; verifikasi via review ahli sebelum merge.
- [Risk] Matriks agregasi A3 disalahartikan sebagai nasihat audit formal → Mitigasi: framing "contoh ilustratif, bukan opini audit", cantumkan bahwa penilaian akhir oleh auditor independen/Komite Audit, nada sesuai E-E-A-T.
- [Risk] Ledakan link (6-8 outbound/artikel) terlihat manipulatif → Mitigasi: anchor natural 1 link per ~300 kata, prioritaskan link kontekstual di badan artikel, blok "Baca juga" maks. 3.
- [Risk] Cover image eksternal merusak sitemap/prerender → Mitigasi: semua cover memakai aset lokal `/images/blog/*` seperti artikel lama; guard image bagian dari acceptance.

## Migration Plan

- Murni penambahan konten + entri metadata; tidak ada migrasi data. Rollback = hapus 4 file `.md` + revert entri `seoMeta.ts`/`howtoData.ts`/`faqData.ts`/related. Urutan rilis disarankan A1, A2, A3, A4 (satu per merge) agar sitemap terindeks bertahap; tidak ada feature flag yang dibutuhkan.

## Open Questions

- Tidak ada yang menahan implementasi. Satu hal yang diputuskan saat apply: nama file cover image lokal per artikel (mengikuti `local-image-pipeline`) — tidak mengubah spec, desain, maupun task breakdown.
