## 1. Penyusunan Konten Artikel Komparasi Platform

- [x] 1.1 Buat artikel komparasi mendalam di `src/content/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn.md` memuat: frontmatter lengkap, daftar isi ber-anchor, uraian 5 dimensi komparasi, serta tabel perbandingan komparatif (Featured Snippet bait).
- [x] 1.2 Pastikan artikel mematuhi aturan anti-slop (Zero Em-dash, tanpa dot pulse kosmetik, tanpa sparkles, terminologi akurat SK-5/DKU.MBU/11/2024 dan Three Lines Model).

## 2. Pembaruan SEO, Metadata SSG, dan Sitemap

- [x] 2.1 Tambahkan entri rute komparasi ke `src/utils/seoMeta.ts` dengan judul, deskripsi, dan OpenGraph yang memikat untuk pengambil keputusan IT & Kepatuhan BUMN.
- [x] 2.2 Daftarkan URL baru ke `public/sitemap.xml` dengan prioritas 0.90 dan pastikan XML valid.

## 3. Verifikasi Mutu & Kepatuhan Pre-Flight

- [x] 3.1 Jalankan pemindaian regex pola terlarang (`Sparkles|animate-pulse|—|–`) pada artikel baru dan pastikan 0 hasil.
- [x] 3.2 Jalankan pemeriksaan linter TypeScript (`npm run lint` / `tsc --noEmit`) dan build sistem (`npm run build`) hingga 19 berkas static snapshot HTML berhasil di-generate tanpa cacat.
