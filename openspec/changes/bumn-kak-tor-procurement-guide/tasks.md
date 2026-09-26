## 1. Komponen & Halaman Panduan KAK / TOR Pengadaan

- [x] 1.1 Buat komponen `src/components/pages/KakTorProcurementPage.tsx` yang memuat pratinjau klausul KAK Konsultan ICOFR SK-5, spesifikasi teknis platform software GRC, kualifikasi tenaga ahli, matriks timeline 5 tahap, dan formulir permohonan berkas lelang resmi format Word. Pastikan mematuhi aturan skill `design-taste-frontend` (zero em-dash `—`/`–`, no `Sparkles`, no unmotivated `animate-pulse`).
- [x] 1.2 Daftarkan metadata rute `/panduan-kak-tor-icofr` di `src/utils/seoMeta.ts` dan hubungkan routing di `src/App.tsx`.
- [x] 1.3 Tambahkan entri FAQ relevan untuk `/panduan-kak-tor-icofr` di `src/data/faqData.ts` dan tambahkan tautan internal di `src/components/Footer.tsx`.

## 2. Prerendering, Sitemap & Skema Data Terstruktur

- [x] 2.1 Daftarkan rute `/panduan-kak-tor-icofr` di `scripts/generate-static-routes.ts` dengan skema JSON-LD `@type: TechArticle` dan `@type: HowTo` serta konten snapshot HTML semantik.
- [x] 2.2 Daftarkan entri URL `https://dsintegra.co.id/panduan-kak-tor-icofr` pada `public/sitemap.xml` dengan prioritas `0.92` dan `changefreq` `weekly`.

## 3. Verifikasi & Pre-Flight Quality Gate

- [x] 3.1 Jalankan scan larangan visual: pastikan 0 hasil untuk pola `Sparkles|animate-pulse|—|–` di file baru.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lulus tanpa error (Exit Code 0).
- [x] 3.3 Jalankan `npm run build` dan pastikan prerender menghasilkan file HTML statis `/panduan-kak-tor-icofr` dengan sukses (Exit Code 0).
