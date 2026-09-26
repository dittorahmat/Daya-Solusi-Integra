## 1. Komponen & Konten Halaman Kualifikasi Vendor

- [x] 1.1 Buat komponen halaman statis `src/components/pages/BumnProcurementPage.tsx` yang memuat Section Kualifikasi Vendor, Tabel Klasifikasi KBLI & Legalitas, Spesifikasi Arsitektur Keamanan Data (On-Premise & Cloud lokal), Panduan Klausul KAK Pengadaan, dan CTA Pengadaan Resmi. Pastikan mematuhi aturan skill `design-taste-frontend` (zero em-dash `—`/`–`, no `Sparkles`, no `animate-pulse`, dark tone arsitektural).
- [x] 1.2 Sertakan script Schema.org JSON-LD terstruktur (`Service` dan `ProfessionalService` yang tertaut ke Humbul Kristiawan dan `https://dsintegra.co.id`) serta Meta Tag SEO (Title, Description, Canonical URL) di dalam komponen.

## 2. Integrasi Routing & Navigasi

- [x] 2.1 Daftarkan rute `/kualifikasi-vendor` di `src/App.tsx` agar halaman dapat diakses langsung oleh pengguna dan tautan internal.
- [x] 2.2 Tambahkan tautan internal menuju `/kualifikasi-vendor` pada footer situs (`src/components/Footer.tsx`) di kolom Navigasi/Kemitraan untuk memperkuat link equity.

## 3. Prerendering & Sitemap Pendaftaran

- [x] 3.1 Daftarkan rute `/kualifikasi-vendor` di `scripts/generate-static-routes.ts` beserta metadata prerender HTML-nya.
- [x] 3.2 Tambahkan entri URL `https://dsintegra.co.id/kualifikasi-vendor` pada `public/sitemap.xml` dengan prioritas `0.9` dan `changefreq` `weekly`.

## 4. Verifikasi & Pre-Flight Quality Gate

- [x] 4.1 Jalankan scan larangan visual: pastikan 0 hasil untuk pola `Sparkles|animate-pulse|—|–` di file baru.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lulus tanpa error (Exit Code 0).
- [x] 4.3 Jalankan `npm run build` dan pastikan prerender menghasilkan file HTML statis `/kualifikasi-vendor` dengan sukses (Exit Code 0).
