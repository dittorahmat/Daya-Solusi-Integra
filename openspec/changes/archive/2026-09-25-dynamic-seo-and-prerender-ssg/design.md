## Context

Proyek Daya Solusi Integra adalah SPA berbasis React dan Vite. Selama ini berkas `index.html` hanya memuat metadata default untuk beranda. Saat pengguna berbagi tautan atau crawler mengakses rute seperti `/layanan/icofr-bumn`, `/glosarium`, atau `/blog/panduan-sk5-icofr-grc-integra`, mereka menerima metadata beranda. Solusi terbaik tanpa melakukan migrasi kompleks (seperti Next.js) adalah arsitektur dual-layer:
1. Client-Side DOM Updater (`src/utils/seoMeta.ts`): Memperbarui metadata `<head>` saat transisi halaman SPA.
2. Build-Time Static Route Generator (`scripts/generate-static-routes.ts`): Membaca `dist/index.html` dan menghasilkan file HTML fisik per rute dengan `<title>`, `<meta>`, dan canonical URL yang tepat.

## Goals / Non-Goals

**Goals:**
- Membuat modul pemetaan metadata rute resmi (`src/utils/seoMeta.ts`) yang mencakup seluruh rute layanan, platform, asesmen, glosarium, dan blog.
- Memperbarui tag `<title>`, `<meta name="description">`, canonical `<link>`, serta OpenGraph/Twitter secara otomatis di browser saat rute berubah di `src/App.tsx`.
- Membuat skrip Node.js `scripts/generate-static-routes.ts` yang membaca `dist/index.html` pasca-build Vite dan menulis berkas statis `dist/<route>/index.html`.
- Mengintegrasikan skrip ke dalam npm script `build` di `package.json`.

**Non-Goals:**
- Mengganti arsitektur Vite ke SSR framework berat (Next.js/Remix).
- Menambah dependensi runtime eksternal yang membebani bundle JS klien.

## Decisions

1. **Lightweight Head Manipulator vs React Helmet**:
   - Memilih fungsi utilitas native DOM manipulator di `src/utils/seoMeta.ts` tanpa dependensi eksternal pihak ketiga untuk menjaga bundle tetap ramping dan performa maksimal.
2. **Post-Build File Generator**:
   - Skrip `scripts/generate-static-routes.ts` mengekstrak `dist/index.html`, mengganti string meta `<title>`, `<meta name="description">`, `og:title`, `og:description`, `canonical`, lalu menulis ke `dist/layanan/icofr-bumn/index.html`, `dist/glosarium/index.html`, dsb.
   - Ini memastikan semua web server statis (Nginx, Cloudflare Pages, Vercel, Apache) dapat langsung melayani file HTML siap pakai dengan status 200 OK.

## Risks / Trade-offs

- **[Sinkronisasi Daftar Rute]** → Daftar rute statis didefinisikan secara terpusat dalam modul pemetaan metadata sehingga penambahan rute baru langsung terhubung ke generator.
- **[Client Hydration]** → Struktur HTML dipertahankan identik sehingga React langsung melakukan hidrasi tanpa error konsol.
