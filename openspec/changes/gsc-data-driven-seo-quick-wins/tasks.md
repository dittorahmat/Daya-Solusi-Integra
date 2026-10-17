# Tasks: GSC Data-Driven SEO Quick Wins & Internal Link Funnel

## 1. On-Page Metadata & Key Takeaways Optimization (Top Impresi Artikel)

- [x] 1.1 Optimasi Title, Meta Description, dan Key Takeaways pada `src/content/blog/panduan-sk5-icofr-grc-integra.md` untuk kueri `sk5 icofr` & `sk 5 bumn`, serta verifikasi format frontmatter valid.
- [x] 1.2 Optimasi Title, Meta Description, dan Key Takeaways pada `src/content/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5.md` untuk kueri `apa itu icofr`, serta verifikasi format frontmatter valid.
- [x] 1.3 Optimasi Title, Meta Description, dan Callout download matriks pada `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md` untuk kueri `rcm pengadaan`, serta verifikasi format frontmatter valid.

## 2. Commercial Solution Bridge Injection (Top Impresi Glosarium)

- [x] 2.1 Tambahkan kartu jembatan solusi komersial pada data/halaman `/glosarium/sod` (link ke `/platform/grc-integra` dan `/layanan/itgc-audit-readiness`), lalu verifikasi navigasi anchor berjalan.
- [x] 2.2 Tambahkan kartu jembatan solusi komersial pada data/halaman `/glosarium/elc` dan `/glosarium/compensating-control` (link ke `/layanan/icofr-bumn` dan artikel remediasi defisiensi kontrol).
- [x] 2.3 Tambahkan kartu jembatan solusi komersial pada data/halaman `/glosarium/spi`, `/glosarium/itgc`, dan `/glosarium/itac` (link ke `/toolkit-regulasi` dan `/layanan/itgc-audit-readiness`).

## 3. Inbound Authority Injection ke Halaman Komersial Utama

- [x] 3.1 Sisipkan contextual internal link bermakna ke `/platform/grc-integra` dari artikel `src/content/blog/manfaat-aplikasi-icofr-bumn-spreadsheet.md` dengan anchor text yang relevan.
- [x] 3.2 Sisipkan contextual internal link bermakna ke `/layanan/icofr-bumn` dari artikel `src/content/blog/panduan-pemetaan-proses-bisnis-sop-flowchart-bumn.md`.

## 4. Verifikasi dan Quality Gate

- [x] 4.1 Jalankan scan larangan karakter em-dash (`—` / `–`) dan sparkles pada file yang diubah dan pastikan 0 hasil.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lolos tanpa error (Exit code 0).
- [x] 4.3 Jalankan `npm run build` dan pastikan proses build production SSG sukses.
