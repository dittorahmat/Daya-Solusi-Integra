# Design

## Context

Lihat `proposal.md` (Why) untuk motivasi. Keadaan saat ini (`src/components/BlogPage.tsx`, 1181 baris):

- Baris 1-103: impor, interface `BlogPost`, `import.meta.glob` markdown, `parseFrontMatter`, `LOADED_BLOG_POSTS` (sudah di-export dan dipakai `App.tsx` untuk validasi slug 404).
- Baris 105-248: state daftar (`selectedCategory`, `searchQuery` + init `?q=`), `filteredPosts`, resolusi `activePost`, memo TOC, state heading/TOC mobile, 5 effect (tutup TOC, copy anchor, scroll-spy, title, sync `?q=`).
- Baris 229-974: tampilan artikel (breadcrumb, markdown kustom, TOC desktop/mobile, related, FAQ, prev/next).
- Baris 976-1181: tampilan daftar (breadcrumb, header, filter kategori, search box, featured, grid).
- Konsumen luar: `App.tsx` mengimpor default `BlogPage` dan named `LOADED_BLOG_POSTS`.

## Goals / Non-Goals

**Goals:**
- Tiap modul punya satu pemilik state yang jelas; `BlogPage.tsx` tinggal switch daftar vs artikel.
- Output `dist/` identik (golden-diff) dan interaksi identik (filter, search, `?q=`, TOC, scroll-spy).

**Non-Goals:**
- Tidak ada perubahan visual, teks, rute, atau perilaku.
- Tidak menyentuh data markdown, `App.tsx` (selain path impor bila perlu), prerender, atau schema.
- Tidak menambah dependensi.

## Decisions

1. **Peta modul mengikuti batas view yang sudah ada.**
   `src/components/blog/blogLoader.ts` (tipe `BlogPost`, glob, parse, `LOADED_BLOG_POSTS`), `src/components/blog/useBlogSearch.ts` (state kategori + query + init/sync `?q=` + `filteredPosts`), `src/components/blog/BlogList.tsx` (view daftar + featured + filter bar), `src/components/blog/BlogArticle.tsx` (view artikel + TOC + scroll-spy + copy anchor + related + FAQ + prev/next), `src/components/BlogPage.tsx` (resolusi `activePost` + switch + tidak punya state sendiri selain meneruskan props).
   Rationale: garis potong sudah digambar oleh kode itu sendiri (`PAGE VIEW 1/2`); state search hanya dipakai view daftar, state TOC hanya dipakai view artikel. Alternatif (pecah per komponen kecil seperti `FilterBar`, `TocDrawer`) ditolak: menambah file tanpa mengurangi kopling state.

2. **Effect title dipecah sesuai pemilik view.**
   `BlogArticle` mengatur title artikel, `BlogList` mengatur title katalog. Rationale: tiap view pemilik kontennya; menghindari satu effect pusat yang harus tahu dua view.

3. **`App.tsx` mengimpor `LOADED_BLOG_POSTS` dari `blog/blogLoader`.**
   Rationale: sumber kebenaran data pindah; import default `BlogPage` tetap dari path lama sehingga routing tidak berubah.

4. **Golden-diff + cek browser sebagai gerbang merge (sama seperti refactor script).**
   Prosedur: build dari tree bersih → salin `dist/` → refactor → build ulang → `diff -r` dengan normalisasi cap waktu build; plus buka `/blog`, 1 artikel, `/blog?q=TOE` untuk konfirmasi interaksi.

## Risks / Trade-offs

- [Risk] State yang dipindah (misal `searchQuery` tertinggal di switch) mengubah perilaku filter → Mitigasi: tiap state dicatat pemilik barunya saat pemindahan; golden-diff + cek browser menangkapnya.
- [Risk] Impor sirkular (`BlogList`/`BlogArticle` saling butuh tipe) → Mitigasi: tipe hanya dari `blogLoader`; arah dependensi satu arah ke loader/hook.
- [Risk] Golden-diff berisik oleh cap waktu → Mitigasi: normalisasi pola cap waktu build seperti change sebelumnya; jangan commit di antara dua build pembanding.
- [Trade-off] `BlogArticle.tsx` tetap besar (±700 baris JSX konten) karena isinya tampilan, bukan logic; diterima, sesuai hasil audit (konten panjang tidak direfactor).

## Migration Plan

1. Satu change, pemindahan bertahap per modul dengan build hijau tiap tahap. Rollback = revert commit.
2. Setelah merge, change konten berikutnya wajib memakai modul baru.

## Open Questions

Tidak ada.
