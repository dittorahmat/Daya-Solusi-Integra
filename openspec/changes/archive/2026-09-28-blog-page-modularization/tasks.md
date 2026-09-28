# Tasks

## 1. Golden baseline dan loader

- [ ] 1.1 Jalankan `npm run build` dari tree bersih dan salin `dist/` ke `/tmp/golden-blog-before` sebagai baseline dan verifikasi direktori baseline berisi 46+ berkas HTML prerender
- [ ] 1.2 Pindahkan tipe `BlogPost`, glob markdown, `parseFrontMatter`, dan `LOADED_BLOG_POSTS` ke `src/components/blog/blogLoader.ts` (nama export dipertahankan) dan sesuaikan impor `App.tsx` dan verifikasi `npm run lint` tetap hijau

## 2. Pemindahan per modul

- [x] 2.1 Pindahkan state pencarian + `?q=` + `filteredPosts` ke `src/components/blog/useBlogSearch.ts` dan tampilan daftar ke `src/components/blog/BlogList.tsx` (termasuk effect title katalog) dan verifikasi `npm run build` sukses
- [x] 2.2 Pindahkan tampilan artikel ke `src/components/blog/BlogArticle.tsx` (TOC, scroll-spy, copy anchor, related, FAQ, prev/next, effect title artikel) dan verifikasi `npm run build` sukses
- [x] 2.3 Tipiskan `src/components/BlogPage.tsx` menjadi resolusi `activePost` + switch daftar vs artikel tanpa state sendiri dan verifikasi tidak ada logika view yang tersisa selain switch dan penerusan props

## 3. Golden-diff dan verifikasi rilis

- [x] 3.1 Jalankan `npm run build` pasca-refactor dan bandingkan `diff -r` terhadap `/tmp/golden-blog-before` dengan normalisasi pola cap waktu build dan verifikasi nol beda di luar pola tersebut, atau refactor tidak di-merge
- [x] 3.2 Jalankan `npm run lint` dan verifikasi hijau serta tidak ada em-dash pada file yang diubah, lalu buka `/blog`, 1 artikel, dan `/blog?q=TOE` di browser dan verifikasi filter, pencarian, TOC, dan scroll-spy berperilaku sama seperti sebelum refactor
