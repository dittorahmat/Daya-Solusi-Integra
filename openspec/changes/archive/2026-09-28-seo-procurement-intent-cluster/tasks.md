# Tasks

## 1. Procurement Glossary (8 istilah)

- [x] 1.1 Tambahkan union kategori `Pengadaan & Kualifikasi` ke `GlossaryItem`, `GLOSSARY_CATEGORIES`, dan UI filter, dan verifikasi filter menampilkan 8 istilah baru saja saat dipilih.
- [x] 1.2 Tulis 8 entri glosarium (kak, hps, tor, spi, kap, wtp, psak-71, psak-72) dengan mesh `relatedTermIds` dua arah ke istilah existing, dan verifikasi build hijau + 8 snapshot prerender 200 + DefinedTerm valid.
- [x] 1.3 Daftarkan 8 URL glosarium baru ke `public/sitemap.xml` (dengan image:image) dan verifikasi guard + sitemap valid.

## 2. Procurement Articles (2 artikel)

- [x] 2.1 Tulis `panduan-hps-pengadaan-icofr-bumn.md` (1500+ kata, Daftar Isi, tabel, FAQ 3+, CTA KAK/vendor/kalkulator, cover lokal) + entri `seoMeta.ts` + sitemap, dan verifikasi snapshot + guards hijau.
- [x] 2.2 Tulis `perbandingan-harga-software-grc-bumn.md` (1500+ kata, komponen TCO, FAQ 3+, CTA, cover lokal) + entri `seoMeta.ts` + sitemap, dan verifikasi snapshot + guards hijau.

## 3. Integrasi Akhir

- [x] 3.1 Verifikasi mesh: setiap artikel menaut ke ≥2 istilah baru dan halaman KAK/vendor; setiap istilah menaut balik ke artikel/layanan; `tsc` + full build + semua guards hijau.
