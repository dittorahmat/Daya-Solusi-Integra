## 1. Komponen & Halaman Profil Penulis

- [x] 1.1 Buat komponen `src/components/pages/AuthorProfilePage.tsx` yang menampilkan profil kepakaran Humbul Kristiawan, foto avatar lokal, sertifikasi, riwayat kepemimpinan komite audit BUMN, katalog 12 artikel riset terkait, dan skema JSON-LD ProfilePage & Person. Pastikan mematuhi aturan skill `design-taste-frontend` (zero em-dash `—`/`–`, no `Sparkles`, no `animate-pulse`).
- [x] 1.2 Daftarkan metadata rute `/penulis/humbul-kristiawan` di `src/utils/seoMeta.ts` dan hubungkan routing di `src/App.tsx`.
- [x] 1.3 Perbarui byline dan kartu penulis pada `src/components/BlogPage.tsx` agar mengarahkan navigasi ke `/penulis/humbul-kristiawan`.

## 2. Otomasi Injeksi Skema FAQPage & Prerendering

- [x] 2.1 Tambahkan logika otomasi injeksi `@type: FAQPage` ke dalam array `@graph` JSON-LD di `scripts/generate-static-routes.ts` untuk seluruh rute yang memiliki entri di `ROUTE_FAQS`.
- [x] 2.2 Daftarkan rute `/penulis/humbul-kristiawan` ke dalam `scripts/generate-static-routes.ts` dengan snapshot HTML khusus.
- [x] 2.3 Daftarkan entri URL `https://dsintegra.co.id/penulis/humbul-kristiawan` pada `public/sitemap.xml` dengan prioritas `0.88` dan `changefreq` `weekly`.

## 3. Verifikasi & Pre-Flight Quality Gate

- [x] 3.1 Jalankan scan larangan visual: pastikan 0 hasil untuk pola `Sparkles|animate-pulse|—|–` di file baru.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lulus tanpa error (Exit Code 0).
- [x] 3.3 Jalankan `npm run build` dan pastikan prerender menghasilkan file HTML statis `/penulis/humbul-kristiawan` serta skema FAQPage berhasil disematkan (Exit Code 0).
