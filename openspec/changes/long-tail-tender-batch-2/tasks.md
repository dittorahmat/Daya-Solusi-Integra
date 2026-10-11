# Tasks

## 1. Artikel B1 harga jasa + B2 evaluasi 70-30

- [x] 1.1 Tulis `src/content/blog/harga-jasa-implementasi-icofr-bumn-2026.md` min. 2200 kata (breakdown orang-bulan, lisensi, range budget, faktor penentu, jebakan underpricing, FAQ min. 4, CTA layanan+kontak) dan verifikasi front-matter lengkap + Daftar Isi anchor render benar
- [x] 1.2 Tulis `src/content/blog/evaluasi-penawaran-teknis-icofr-bobot-70-30.md` min. 2200 kata (kriteria teknis, tabel simulasi skor 70/30, ambang kelulusan, kesalahan panitia, FAQ min. 4, CTA pengadaan) dan verifikasi tabel simulasi ter-render + anchor benar
- [x] 1.3 Daftarkan slug B1 dan B2 di `src/utils/seoMeta.ts` + sitemap dengan cover image lokal dan verifikasi `npm run build` memuat snapshot 10 paragraf pertama + FAQ keduanya tanpa error

## 2. Artikel B3 kualifikasi + B4 timeline

- [x] 2.1 Tulis `src/content/blog/syarat-kualifikasi-vendor-grc-bumn-pengalaman.md` min. 2200 kata (syarat administratif, pengalaman sejenis, tenaga ahli kunci, checklist dokumen berbentuk tabel, jebakan diskualifikasi, FAQ min. 4, CTA asesmen) dan verifikasi framing non-jaminan + E-E-A-T author benar
- [x] 2.2 Tulis `src/content/blog/timeline-implementasi-icofr-3-6-12-bulan.md` min. 2400 kata (phased plan scoping sampai asersi, milestone triwulanan, dependensi entitas anak, tabel peran Lini 1/2/3, FAQ min. 4, CTA enterprise) dan verifikasi outline H2/H3 + CTA enterprise benar
- [x] 2.3 Daftarkan slug B3 dan B4 di `src/utils/seoMeta.ts` + sitemap dengan cover image lokal dan verifikasi `npm run build` lolos guards slug/link/image untuk keduanya

## 3. Wiring internal-link segitiga + jembatan batch-1

- [x] 3.1 Pasang outbound 6-8 link per artikel batch-2 (B1<->B2<->B3<->B4 segitiga + jembatan ke artikel KAK/TOR, HPS, RCM procurement, scoping holding-anak batch-1 + layanan/platform/regulasi/glosarium sesuai design.md) dan verifikasi tidak ada link ke slug yang tidak ada via build guards
- [x] 3.2 Tambahkan inbound min. 3 per artikel batch-2 (related di artikel HPS/harga/RCM/KAK-TOR batch-1, entri `faqData.ts` rute harga dan timeline, link layanan/asesmen/glosarium HPS-TOR-RCM-TOE) dan verifikasi tiap artikel baru dapat diklik dari min. 3 halaman berbeda
- [x] 3.3 Jalankan validasi akhir `npm run build` + `openspec validate --change long-tail-tender-batch-2 --strict` dan verifikasi build hijau, guards slug/link/image hijau, dan tidak ada link mati di batch
