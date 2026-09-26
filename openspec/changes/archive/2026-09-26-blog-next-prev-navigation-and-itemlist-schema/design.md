## Context

Lihat `proposal.md` untuk motivasi. Repositori menggunakan React, Tailwind CSS, Vite, prerender engine `scripts/generate-static-routes.ts`, dan konten markdown blog di `src/content/blog/`. Seluruh komponen tunduk pada aturan ketat anti-slop `.agents/AGENTS.md` (zero em-dash/en-dash, warna palet BUMN Blue & Gold, no sparkles).

## Goals / Non-Goals

**Goals:**
- Mengimplementasikan navigasi Next/Previous di bawah artikel aktif pada `src/components/BlogPage.tsx` dengan tata letak dua kolom yang responsif di desktop maupun mobile.
- Menampilkan 2 kartu rekomendasi artikel terkait dalam kluster yang sama.
- Menginjeksi skema Schema.org/ItemList di `scripts/generate-static-routes.ts` untuk rute katalog `/blog`.

**Non-Goals:**
- Mengubah alur routing aplikasi SPA di `src/App.tsx`.
- Membuat halaman paginasi multi-halaman pada katalog blog.

## Decisions

### 1. Perhitungan Posisi Indeks Next/Previous
- Menggunakan `currentIndex = LOADED_BLOG_POSTS.findIndex(p => p.slug === activePost.slug)`.
- `prevPost = currentIndex > 0 ? LOADED_BLOG_POSTS[currentIndex - 1] : null`.
- `nextPost = currentIndex < LOADED_BLOG_POSTS.length - 1 ? LOADED_BLOG_POSTS[currentIndex + 1] : null`.
- Untuk artikel terkait kluster: filter artikel di luar artikel aktif dengan kategori yang sama, fallback ke artikel terbaru jika kategori berbeda kurang dari 2.

### 2. Format Skema ItemList
- Skema `ItemList` disematkan ke dalam graph JSON-LD rute `/blog` di `scripts/generate-static-routes.ts`.
- Masing-masing `ListItem` memuat `position`, `name` (judul artikel), dan `url` (`https://dsintegra.co.id/blog/{slug}`).

## Risks / Trade-offs

- [Risk: Layout sesak jika judul artikel terlalu panjang] → Mitigation: Gunakan `line-clamp-2` pada judul artikel di kartu navigasi Next/Previous.
- [Risk: Pelanggaran anti-slop pada simbol tanda pisah] → Mitigation: Seluruh teks dan label tombol menggunakan panah standar (`ArrowLeft`, `ArrowRight`) tanpa tanda pisah em-dash (`—`/`–`).
