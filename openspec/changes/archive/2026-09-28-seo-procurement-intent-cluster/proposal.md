# Proposal

## Why

Traffic existing didominasi intent informasional (definisi, panduan). Intent transaksional pengadaan BUMN ("HPS konsultan ICOFR", "harga software GRC", "contoh KAK", "PSAK 71/72") belum tercakup: glosarium 19 istilah tidak punya satu pun istilah pengadaan, dan 12 artikel tidak menjawab pertanyaan panitia pengadaan/PPK. Cluster ini mengumpan langsung ke pipeline `seo-lead-pipeline` (lead berkualitas, bukan sekadar traffic).

## What Changes

- 8 istilah glosarium pengadaan & akuntansi: `kak`, `hps`, `tor`, `spi`, `kap`, `wtp`, `psak-71`, `psak-72` — lengkap dengan definisi, rujukan regulasi, keyTakeaway, contoh praktis, dan `relatedTermIds` mesh ke istilah existing (mis. `rcm`, `toe`, `itgc`).
- Kategori glosarium baru `Pengadaan & Kualifikasi` (union type + filter UI + sitemap tidak berubah struktur).
- 2 artikel procurement-intent: `panduan-hps-pengadaan-icofr-bumn` (cara menyusun HPS jasa konsultan + software ICOFR) dan `perbandingan-harga-software-grc-bumn` (komponen TCO lisensi/on-premise/implementasi), masing-masing dengan FAQ + CTA ke `/panduan-kak-tor-icofr`, `/kualifikasi-vendor`, dan kalkulator TOE.
- Mesh internal-link: artikel baru ↔ istilah baru ↔ halaman KAK/vendor/toolkit (prerender semantic + JSON-LD mengikuti otomatis).
- Cover artikel memakai 2 foto lokal existing (tanpa unduhan baru); entri `seoMeta.ts` + `sitemap.xml` manual per slug/istilah.
- Non-goals: TIDAK membuat file download (template RCM/KAK DOCX), TIDAK menambah kategori sektor, TIDAK mengubah visual.

## Capabilities

### New Capabilities
- `procurement-glossary`: 8 istilah pengadaan & akuntansi BUMN dengan mesh relasi.
- `procurement-articles`: 2 artikel intent pengadaan (HPS + harga/TCO) dengan FAQ dan CTA konversi.

### Modified Capabilities
- `regulatory-glossary`: kategori `Pengadaan & Kualifikasi` ditambahkan ke union, daftar kategori, dan filter UI halaman glosarium.

## Impact

- Terpengaruh: `src/data/glossaryData.ts`, komponen filter glosarium, 2 file markdown baru, `src/utils/seoMeta.ts`, `public/sitemap.xml`, `src/data/faqData.ts` (opsional FAQ rute baru).
- Otomatis mengikuti: prerender snapshot, JSON-LD DefinedTerm/TechArticle, feed RSS, llms.txt, ItemList blog, guard link/slug.
- Risiko utama: thin content — dimitigasi panjang memadai (istilah 150+ kata, artikel 1500+ kata) dan contoh praktis BUMN nyata.
