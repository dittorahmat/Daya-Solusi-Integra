# Tasks: Content Cluster Ekspansi GSC

## 1. Penyusunan 4 Artikel Pilar Baru

- [x] 1.1 Buat artikel pilar `src/content/blog/panduan-segregation-of-duties-sod-bumn-matriks-konflik-erp.md` (min. 1200 kata, tabel konflik SoD ERP, rujukan SK-5 & POJK 11/2022, link ke `/platform/grc-integra` & `/layanan/itgc-audit-readiness`).
- [x] 1.2 Buat artikel pilar `src/content/blog/prosedur-walkthrough-audit-icofr-bumn-lini-2.md` (min. 1200 kata, checklist Test of One, standar SPKN BPK, link ke `/glosarium/walkthrough-lini-2` & `/layanan/icofr-bumn`).
- [x] 1.3 Buat artikel pilar `src/content/blog/peran-spi-bumn-pengendalian-internal-icofr-tiga-lini.md` (min. 1200 kata, Model Tiga Lini IIA, peran reviu HPS KAK, link ke `/glosarium/spi` & `/toolkit-regulasi`).
- [x] 1.4 Buat artikel pilar `src/content/blog/bedah-juknis-sk5-dku-mbu-11-2024-icofr-bumn.md` (min. 1200 kata, rincian 11 lampiran juknis, tabel timeline implementasi holding, link ke `/regulasi` & `/platform/grc-integra`).

## 2. Inbound Internal Linking & Glosarium Cross-Link

- [x] 2.1 Perbarui entri glosarium di `src/data/glossaryData.ts` untuk mereferensikan artikel-artikel baru pada `sod`, `walkthrough-lini-2`, dan `spi`.
- [x] 2.2 Hubungkan silang artikel-artikel baru ini dari artikel blog eksisting yang relevan.

## 3. Verifikasi & Quality Gate

- [x] 3.1 Jalankan pemindaian Zero Em-Dash (`—` / `–`) dan sparkles pada seluruh file artikel baru.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lolos tanpa error.
- [x] 3.3 Jalankan `npm run build` dan pastikan seluruh 4 artikel baru berhasil di-prerender ke file static HTML, sitemap XML, dan RSS feed.
