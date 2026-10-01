## Why

DSI sudah menguasai keyword pilar ICOFR/SK-5 umum tetapi belum menangkap query long-tail ber-intent tender (KAK/TOR, contoh RCM, agregasi defisiensi, scoping holding-anak) yang dicari PPK, SPI, dan Komite Audit tepat sebelum pengadaan. Menambah 4 artikel tebal (2200-2800 kata) yang masing-masing membawa template/checklist dan CTA ke halaman konversi akan mengubah trafik informasional menjadi pipeline tender.

## What Changes

- Menambah 4 artikel blog long-tail baru di `src/content/blog/*.md`:
  - `panduan-penyusunan-kak-tor-icofr-bumn-2025` (memperbaiki broken link dari `howtoData.ts`; judul frontmatter di-update ke 2026) — panduan KAK/TOR + bobot teknis 70/30 + checklist lampiran.
  - `contoh-rcm-siklus-pengadaan-bumn-tod-toe` — contoh tabel RCM Purchase-to-Pay (risiko, assertion, kontrol, frekuensi, bukti, uji TOD/TOE) + cara walkthrough 1 transaksi.
  - `significant-deficiency-vs-material-weakness-icofr-remediasi` — matriks agregasi defisiensi, timeline remediasi 30/60/90 hari + re-testing, contoh memo ke Komite Audit.
  - `scoping-akun-signifikan-konsolidasi-icofr-holding-anak-bumn` — scoping top-down, materialitas, eliminasi antar perusahaan holding-anak.
- Setiap artikel: front-matter lengkap (title, slug, excerpt, category, author Humbul Kristiawan, date, readTime, coverImage lokal, tags, featured false), Daftar Isi anchor, min. 2 tabel, FAQ min. 4 (untuk rich snippet), CTA tender yang jelas, dan 6-8 outbound internal link + 3-4 inbound yang direncanakan.
- Mendaftarkan keempat slug di `seoMeta.ts`, `sitemap`, prerender snapshot, dan wiring cross-link: `howtoData.ts` (fix broken link A1), `faqData.ts` (FAQ rute uang menunjuk ke A3/A4), related-articles di artikel HPS/harga/RCM/TOE/WTP yang sudah ada, dan glossary `relatedServiceUrl` yang relevan.
- Tidak mengubah desain halaman, routing, atau skema build yang sudah ada.

## Capabilities

### New Capabilities

- `long-tail-tender-articles`: Empat artikel long-tail ber-intent tender beserta persyaratan konten (struktur, tabel, FAQ, CTA, schema HowTo/FAQ), metadata SEO/prerender, dan arsitektur internal-link inbound/outbound termasuk perbaikan broken link howto KAK/TOR.

### Modified Capabilities

- (none — tidak ada perubahan requirement pada capability yang sudah ada; `procurement-articles` tetap berlaku untuk 2 artikel lamanya)

## Impact

- File konten: 4 file markdown baru di `src/content/blog/`; tidak ada file lama yang dihapus.
- File data/SEO yang disentuh saat implementasi: `src/data/howtoData.ts` (fix link), `src/data/faqData.ts`, `src/utils/seoMeta.ts`, `scripts/generate-static-routes.ts`/`sitemap` (via build), `src/data/glossaryData.ts` (opsional: tambah `relatedServiceUrl` ke artikel baru), komponen related-articles (`BlogArticle.tsx`).
- Risiko rendah: murni konten + entri metadata; tidak ada perubahan API, build pipeline, atau routing. Validasi via `npm run build` + guards slug/link/image hijau.
