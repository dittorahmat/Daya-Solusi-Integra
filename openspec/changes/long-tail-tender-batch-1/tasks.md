## 1. Artikel A1 KAK/TOR (prioritas pertama, fix broken link)

- [x] 1.1 Tulis `src/content/blog/panduan-penyusunan-kak-tor-icofr-bumn-2025.md` min. 2200 kata (anatomi KAK/TOR, tabel bobot 70/30 + knockout, checklist lampiran, TCO bundle vs terpisah, FAQ min. 4, CTA pengadaan+kontak) dan verifikasi front-matter lengkap + Daftar Isi anchor render benar
- [x] 1.2 Daftarkan slug A1 di `src/utils/seoMeta.ts` + sitemap dengan cover image lokal dan verifikasi `npm run build` memuat snapshot 10 paragraf pertama + FAQ tanpa error

## 2. Artikel A2 RCM pengadaan (jangkar platform)

- [x] 2.1 Tulis `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md` min. 2400 kata (7 risiko P2P, tabel RCM Risiko|Assertion|Kontrol|Frekuensi|Pemilik|Bukti|Uji TOD/TOE, walkthrough 1 transaksi, kekurangan Excel, FAQ min. 4, CTA platform) dan verifikasi tabel ter-render + anchor benar
- [x] 2.2 Daftarkan slug A2 di `src/utils/seoMeta.ts` + sitemap dengan cover image lokal dan verifikasi `npm run build` lolos guards slug/link/image

## 3. Artikel A3 defisiensi dan A4 holding-anak

- [x] 3.1 Tulis `src/content/blog/significant-deficiency-vs-material-weakness-icofr-remediasi.md` min. 2200 kata (definisi SK-5, matriks agregasi + contoh, timeline 30/60/90 + re-testing, memo Komite Audit, dampak WTP/WDP, FAQ min. 4, CTA layanan) dan verifikasi framing ilustratif + E-E-A-T author benar
- [x] 3.2 Tulis `src/content/blog/scoping-akun-signifikan-konsolidasi-icofr-holding-anak-bumn.md` min. 2400 kata (kriteria anak wajib, scoping top-down, materialitas kuantitatif+kualitatif, eliminasi, model Lini 1/2/3 holding vs anak, FAQ min. 4, CTA enterprise+sektor) dan verifikasi outline H2/H3 + CTA enterprise benar
- [x] 3.3 Daftarkan slug A3 dan A4 di `src/utils/seoMeta.ts` + sitemap dengan cover image lokal dan verifikasi `npm run build` memuat snapshot + FAQ keduanya

## 4. Wiring internal-link segitiga + inbound

- [x] 4.1 Pasang outbound 6-8 link per artikel baru (A1<->A2<->A3<->A4 segitiga + layanan/platform/regulasi/glosarium sesuai design.md) dan verifikasi tidak ada link ke slug yang tidak ada via build guards
- [x] 4.2 Tambahkan inbound min. 3 per artikel baru (related di artikel HPS/harga/RCM/TOE/WTP, entri `howtoData.ts` A1, `faqData.ts` rute uang ke A3/A4, link layanan/sektor/regulasi/glosarium) dan verifikasi tiap artikel baru dapat diklik dari min. 3 halaman berbeda
- [x] 4.3 Jalankan validasi akhir `npm run build` + `openspec validate --change long-tail-tender-batch-1 --strict` dan verifikasi build hijau, guards slug/link/image hijau, dan tidak ada link mati di batch
