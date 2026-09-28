# Tasks

## 1. Golden baseline dan kerangka modul

- [x] 1.1 Jalankan `npm run build` dari tree bersih dan salin `dist/` ke `/tmp/golden-before` sebagai baseline dan verifikasi direktori baseline berisi 46+ berkas HTML prerender
- [x] 1.2 Buat kerangka `scripts/seo/` (`paths.ts`, `xml.ts`, `frontmatter.ts`) dengan memindahkan konstanta direktori dan helper murni tanpa mengubah isi dan verifikasi `npm run lint` tetap hijau setelah pemindahan

## 2. Pemindahan per modul

- [x] 2.1 Pindahkan builder JSON-LD ke `scripts/seo/jsonld.ts` (nama fungsi dan tanda tangan dipertahankan) dan verifikasi `npm run build` sukses dan `dist/` bertambah tanpa error
- [x] 2.2 Pindahkan builder semantic body ke `scripts/seo/semantic-body.ts` dan snapshot 404 ke `scripts/seo/notfound.ts` dan verifikasi `npm run build` sukses dan `dist/404/index.html` tetap berstatus noindex tanpa JSON-LD
- [x] 2.3 Pindahkan sitemap enrich + validasi drift ke `scripts/seo/sitemap.ts` dan RSS + llms ke `scripts/seo/feeds.ts` serta IndexNow ke `scripts/seo/indexnow.ts` dan verifikasi `npm run build` sukses dengan nol peringatan drift
- [x] 2.4 Tipiskan `scripts/generate-static-routes.ts` menjadi orkestrasi (impor modul + panggil sesuai urutan eksekusi saat ini) dan verifikasi tidak ada logika bisnis yang tersisa di berkas orkestrasi selain pemanggilan dan wiring

## 3. Golden-diff dan verifikasi rilis

- [x] 3.1 Jalankan `npm run build` pasca-refactor dan bandingkan `diff -r` terhadap `/tmp/golden-before` dengan normalisasi pola cap waktu build (`lastBuildDate`, RSS `buildDate`) dan verifikasi nol beda di luar pola tersebut, atau refactor tidak di-merge
- [x] 3.2 Jalankan `npm run lint` dan verifikasi hijau serta tidak ada em-dash pada file yang diubah, lalu uji drift detection sekali (driftkan coverImage uji, pastikan build gagal dengan peringatan eksplisit, kembalikan) dan verifikasi perilaku validasi sama seperti sebelum refactor
