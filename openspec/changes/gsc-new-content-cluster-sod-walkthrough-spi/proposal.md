# Proposal: Content Cluster Ekspansi GSC (SoD, Walkthrough Lini 2, SPI BUMN, Juknis SK-5)

## Why

Berdasarkan analisis live Google Search Console (`https://dsintegra.co.id/`), terdapat klaster kueri pencarian bervolume tinggi dan berperingkat halaman 1 Google (posisi 5 s.d. 10) yang mencerminkan kebutuhan nyata auditor dan manajemen BUMN, namun belum memiliki artikel pilar terdedikasi:
1. `segregation of duties adalah` (61 impresi, pos 10.7) & `sod` (24 impresi, pos 8.4)
2. `apa itu walkthrough dalam audit` & `walkthrough audit adalah` (posisi 9.7 s.d. 10.0)
3. `spi bumn` (13 impresi, pos 5.8) & `three lines model adalah` (pos 10.6)
4. `sk 5 bumn icofr` (27 impresi, pos 6.0) & pencarian unduhan dokumen PDF regulasi resmi.

Perubahan ini menambahkan 4 artikel pilar komprehensif berbobot teknis tinggi beserta matriks internal link dua arah menuju landing page platform software `GRC Integra`, layanan konsultansi `ICOFR BUMN`, dan direktori `Glosarium`.

## What Changes

1. **Penambahan 4 Artikel Pilar Baru di `src/content/blog/`:**
   - `panduan-segregation-of-duties-sod-bumn-matriks-konflik-erp.md`: Pembahasan SoD matrix, 3 pemisahan fungsi, mitigasi compensating control, dan audit ITGC.
   - `prosedur-walkthrough-audit-icofr-bumn-lini-2.md`: Panduan eksekusi walkthrough Lini 2, validasi Test of One, dan checklist bukti SPKN BPK.
   - `peran-spi-bumn-pengendalian-internal-icofr-tiga-lini.md`: Peran Satuan Pengawasan Intern (Lini 3), reviu HPS KAK, dan penyusunan Corrective Action Plan.
   - `bedah-juknis-sk5-dku-mbu-11-2024-icofr-bumn.md`: Panduan ringkasan 11 lampiran SK-5, matriks kepatuhan holding, dan integrasi modul GRC.

2. **Inbound & Outbound Contextual Cross-Linking:**
   - Menghubungkan 4 artikel baru ini ke halaman produk komersial ([`/platform/grc-integra`](file:///C:/backup/Daya-Solusi-Integra/src/pages/platform/grc-integra.tsx), [`/layanan/icofr-bumn`](file:///C:/backup/Daya-Solusi-Integra/src/pages/layanan/icofr-bumn.tsx), [`/layanan/itgc-audit-readiness`](file:///C:/backup/Daya-Solusi-Integra/src/pages/layanan/itgc-audit-readiness.tsx)).
   - Menautkan artikel baru dari dan ke entri glosarium terkait (`/glosarium/sod`, `/glosarium/walkthrough-lini-2`, `/glosarium/spi`, `/glosarium/three-lines-model`).

3. **Penyelarasan Feed & Sitemap:**
   - Mendaftarkan slug artikel baru secara otomatis ke `public/sitemap.xml`, `public/feed.xml`, dan `llms.txt`.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `procurement-articles`: Menambahkan artikel kepatuhan audit dan peran SPI dalam reviu pengadaan serta tata kelola ICOFR BUMN.
- `regulatory-glossary`: Menambahkan tautan silang timbal balik (*bidirectional crosslink*) antara entri istilah glosarium dan 4 artikel pilar baru.

## Impact

- Penambahan 4 file markdown di `src/content/blog/`.
- Pembaruan file data `src/data/glossaryData.ts` untuk mereferensikan artikel baru.
- Regenerasi artefak static prerender dan sitemap saat build (`npm run build`).
- Standar kualitas: Zero Em-Dash (`—` / `–`), gambar Unsplash resmi, tabel komparasi, H2 ber-anchor.
