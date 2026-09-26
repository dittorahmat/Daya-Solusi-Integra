## 1. Penyusunan Konten Artikel Komparasi Operasional & Strategis

- [x] 1.1 Buat artikel komparasi operasional di `src/content/blog/risiko-rcm-excel-vs-software-grc-bumn.md` memuat: frontmatter lengkap (coverImage terkompresi, author, readTime), daftar isi ber-anchor, tabel 5 dimensi integritas kontrol spreadsheet vs software GRC, serta verifikasi anti-slop (zero em-dash).
- [x] 1.2 Buat artikel evaluasi strategis vendor di `src/content/blog/alternatif-software-grc-global-bumn.md` memuat: analisis TCO Rupiah vs USD, perbandingan kesiapan regulasi native SK-5 (Tabel 22 penentuan ukuran sampel), kedaulatan data on-premise/cloud lokal UU PDP, dan tabel perbandingan platform.

## 2. Pembaruan Konfigurasi SEO, Prerender SSG, dan Sitemap

- [x] 2.1 Tambahkan konfigurasi rute metadata di `src/utils/seoMeta.ts` untuk `/blog/risiko-rcm-excel-vs-software-grc-bumn` dan `/blog/alternatif-software-grc-global-bumn` dengan kata kunci dan meta deskripsi teroptimasi.
- [x] 2.2 Daftarkan kedua URL rute baru ke `public/sitemap.xml` dengan prioritas 0.90 dan format canonical resmi `https://dsintegra.co.id/`.
- [x] 2.3 Tambahkan kedua rute baru ke daftar prerender SSG di `scripts/prerender.ts` agar berkas HTML statis fisik dihasilkan saat proses build.

## 3. Verifikasi Mutu & Kepatuhan Pre-Flight

- [x] 3.1 Jalankan pemindaian regex pola terlarang (`Sparkles|animate-pulse|—|–`) pada berkas artikel baru dan pastikan 0 hasil.
- [x] 3.2 Jalankan pemeriksaan linter TypeScript (`npm run lint` / `tsc --noEmit`) dan build produksi (`npm run build`) untuk memverifikasi bahwa berkas HTML statis snapshot sukses di-generate tanpa error (Exit Code 0).
