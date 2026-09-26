## 1. Dynamic Routing & Component Implementation

- [x] 1.1 Buat komponen `GlossaryDetailPage.tsx` dengan tata letak korporat BUMN, breadcrumbs, badge regulasi, bagian definisi, key takeaway, navigasi istilah terkait, dan CTA conversion box.
- [x] 1.2 Perbarui `App.tsx` agar mendukung penanganan rute dinamis `/glosarium/:slug` dan merender `GlossaryDetailPage`.
- [x] 1.3 Perbarui `GlossaryPage.tsx` agar setiap card istilah memiliki tautan tombol/anchor langsung ke halaman detail `/glosarium/:slug`.

## 2. Dynamic SEO Metadata & Schema.org DefinedTerm

- [x] 2.1 Perbarui `seoMeta.ts` dengan fungsi resolver metadata dinamis untuk rute `/glosarium/:slug` (title kustom, description, canonical URL, OG tags).
- [x] 2.2 Tambahkan injeksi skema terstruktur Schema.org `@type: DefinedTerm` dan `@type: BreadcrumbList` di dalam `GlossaryDetailPage.tsx`.

## 3. Indeksasi Mesin Pencari & Sitemap Registration

- [x] 3.1 Daftarkan seluruh 20 URL istilah glosarium `/glosarium/:slug` ke dalam `public/sitemap.xml` dengan prioritas `0.85` dan frekuensi `weekly`.

## 4. Verifikasi & Pre-Flight Audit

- [x] 4.1 Jalankan scan larangan hard bans (`Sparkles`, `animate-pulse`, `—`, `–`) dan pastikan 0 temuan.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi tidak ada error tipe data dan bundler berhasil (Exit Code 0).
