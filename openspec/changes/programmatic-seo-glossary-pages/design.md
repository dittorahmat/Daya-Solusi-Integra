## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini aplikasi menggunakan custom client-side router di `src/App.tsx` berbasis `window.location.pathname` dan event `popstate`. Data glosarium tersimpan sebagai array terstruktur `GLOSSARY_ITEMS` di `src/data/glossaryData.ts`, dengan properti `id` (slug), `term`, `acronym`, `category`, `regulationRef`, `definition`, `keyTakeaway`, dan `relatedServiceUrl`.

## Goals / Non-Goals

**Goals:**
- Mengembangkan rute dinamis `/glosarium/:slug` yang terintegrasi secara mulus dengan client-side router yang ada di `App.tsx`.
- Menyediakan komponen `GlossaryDetailPage` yang ramah SEO, memiliki rasio kontras visual tinggi, dan mematuhi aturan desain korporat BUMN (dark navy, zero em-dash, tanpa visual clutter).
- Mengintegrasikan fungsi pencarian metadata dinamis di `seoMeta.ts` dan injeksi runtime Schema.org `@type: DefinedTerm`.
- Memperbarui `GlossaryPage.tsx` agar setiap item kartu memiliki link ke halaman detailnya masing-masing.
- Memperbarui `public/sitemap.xml` dengan seluruh 20 rute istilah individual.

**Non-Goals:**
- Mengganti router Vite/React dengan framework berat seperti Next.js.
- Mengubah skema data dasar `GLOSSARY_ITEMS` di `src/data/glossaryData.ts` (tetap memanfaatkan struktur data yang sudah terbukti stabil).
- Menambah formulir input atau fitur moderasi user-generated content pada glosarium.

## Decisions

### Decision 1: Penanganan Dynamic Route di `App.tsx`
- **Pilihan**: Mengekstrak path matching dengan regex atau string split sederhana `pathname.startsWith("/glosarium/")`. Jika ada sub-path setelah `/glosarium/`, slug diambil dan dicocokkan dengan `GLOSSARY_ITEMS.find(item => item.id === slug)`.
- **Alternatif yang Dipertimbangkan**: Memasang `react-router-dom`. Ditolak karena codebase saat ini sepenuhnya mengandalkan light custom router berbasis `window.history` yang bersih dan bebas overhead dependensi eksternal.

### Decision 2: Injeksi Schema.org DefinedTerm
- **Pilihan**: Komponen `GlossaryDetailPage` menyisipkan script JSON-LD dinamis ke `<head>` saat komponen mount, dan membersihkannya saat unmount.
- **Alternatif yang Dipertimbangkan**: Hardcoding 20 skema di `index.html`. Ditolak karena akan membuat ukuran payload `index.html` membengkak dan menurunkan skor Core Web Vitals.

### Decision 3: Desain Sesuai Skill `design-taste-frontend`
- **Pilihan**: Menggunakan latar belakang solid Ink Navy (`#0b0f19`) dan panel surface Slate (`#0f172a`), border tipis berwibawa (`border-slate-800`), font hierarchy yang tegas, dan 1 dominant conversion CTA per viewport.
- **Aturan Tegas**: Bebas em-dash/en-dash (`—`/`–`), bebas ikon sparkles, dan bebas pulse dots unmotivated.

## Risks / Trade-offs

- **[Risk]** Crawler primitif yang tidak mengeksekusi JavaScript mungkin tidak mendapatkan konten render secara langsung.
  → *Mitigasi*: Seluruh 20 URL didaftarkan ke `public/sitemap.xml` dan `robots.txt`, serta title dan meta tags diupdate secara sinkron pada `updateDocumentMeta` saat awal script dieksekusi.
- **[Risk]** Slug istilah yang salah ketik dapat memicu blank page.
  → *Mitigasi*: Menampilkan graceful 404 state di dalam `GlossaryDetailPage` dengan tombol kembali ke `/glosarium`.
