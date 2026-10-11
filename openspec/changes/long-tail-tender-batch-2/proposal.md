# Proposal

## Why

DSI sudah menguasai query tender tahap persiapan (KAK/TOR, HPS, RCM procurement via batch-1) tetapi belum menangkap query tahap keputusan yang dicari PPK dan panitia tepat sebelum penetapan pemenang: harga jasa, cara menilai penawaran teknis 70/30, syarat kualifikasi vendor, dan timeline implementasi. Mengisi gap ini mengubah trafik evaluatif menjadi pipeline penawaran.

## What Changes

- Menambah 4 artikel blog long-tail baru di `src/content/blog/*.md` (masing-masing 2200-2800 kata):
  - `harga-jasa-implementasi-icofr-bumn-2026` — breakdown orang-bulan, lisensi, range budget, faktor penentu harga, jebakan underpricing.
  - `evaluasi-penawaran-teknis-icofr-bobot-70-30` — simulasi skor teknis vs biaya, contoh matriks evaluasi, ambang batas kelulusan.
  - `syarat-kualifikasi-vendor-grc-bumn-pengalaman` — checklist dokumen kualifikasi, pengalaman sejenis, jebakan diskualifikasi administratif.
  - `timeline-implementasi-icofr-3-6-12-bulan` — phased plan scoping sampai asersi, milestone per triwulan, dependensi entitas anak.
- Setiap artikel: front-matter lengkap (id, title, slug, excerpt, category `Pengadaan & Tender`, author Humbul Kristiawan + authorRole, date, readTime, coverImage lokal `/images/blog/*`, tags, featured false), Daftar Isi anchor, min. 2 tabel, FAQ min. 4, CTA ke `/layanan/icofr-bumn` + `/asesmen-maturitas` + kalkulator TOE, dan 6-8 outbound internal link + 3-4 inbound yang direncanakan.
- Mendaftarkan keempat slug di `seoMeta.ts`, `sitemap` (dengan image:image lokal), snapshot prerender, dan wiring cross-link: related-articles di artikel HPS/harga/RCM/KAK-TOR batch-1, `faqData.ts` (rute harga dan timeline), dan glossary `relatedServiceUrl` yang relevan (HPS, TOR, RCM, TOE).
- Tidak mengubah desain halaman, routing, atau skema build yang sudah ada.

## Capabilities

### New Capabilities
- `tender-decision-articles`: Empat artikel long-tail tahap keputusan tender beserta persyaratan konten (struktur, tabel, FAQ, CTA, schema Article/FAQ), metadata SEO/prerender, dan arsitektur internal-link inbound/outbound.

### Modified Capabilities
- (none — tidak ada perubahan requirement pada capability yang sudah ada; `procurement-articles` dan `long-tail-tender-articles` tetap berlaku untuk artikel lamanya)

## Impact

- File konten: 4 file markdown baru di `src/content/blog/`; tidak ada file lama yang dihapus.
- File data/SEO yang disentuh saat implementasi: `src/utils/seoMeta.ts`, `scripts/generate-static-routes.ts`/`sitemap` (via build), `src/data/faqData.ts`, `src/data/glossaryData.ts` (opsional `relatedServiceUrl`), komponen related-articles (`BlogArticle.tsx`).
- Risiko rendah: murni konten + entri metadata; tidak ada perubahan API, build pipeline, atau routing. Validasi via `npm run build` + guards slug/link/image hijau.
