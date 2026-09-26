## 1. Komponen & Halaman Regulatory Toolkit Hub

- [ ] 1.1 Buat komponen `src/components/pages/RegulatoryToolkitPage.tsx` yang memuat pratinjau 3 kertas kerja standar SK-5 (Template RCM, Checklist ELC COSO, Kertas Kerja TOE Tabel 22), penjelasan fungsi kolom audit, modal/form permohonan file spreadsheet resmi, dan CTA platform GRC Integra. Pastikan mematuhi aturan skill `design-taste-frontend` (zero em-dash `—`/`–`, no `Sparkles`, no `animate-pulse`).
- [ ] 1.2 Daftarkan metadata rute `/toolkit-regulasi` di `src/utils/seoMeta.ts` dan hubungkan routing di `src/App.tsx`.
- [ ] 1.3 Tambahkan entri FAQ relevan untuk `/toolkit-regulasi` di `src/data/faqData.ts` dan tambahkan tautan internal di `src/components/Footer.tsx`.

## 2. Prerendering, Sitemap & Skema Data Terstruktur

- [ ] 2.1 Daftarkan rute `/toolkit-regulasi` di `scripts/generate-static-routes.ts` dengan skema JSON-LD `@type: DataCatalog` dan `@type: DigitalDocument` serta konten HTML semantik.
- [ ] 2.2 Daftarkan entri URL `https://dsintegra.co.id/toolkit-regulasi` pada `public/sitemap.xml` dengan prioritas `0.92` dan `changefreq` `weekly`.

## 3. Verifikasi & Pre-Flight Quality Gate

- [ ] 3.1 Jalankan scan larangan visual: pastikan 0 hasil untuk pola `Sparkles|animate-pulse|—|–` di file baru.
- [ ] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan lulus tanpa error (Exit Code 0).
- [ ] 3.3 Jalankan `npm run build` dan pastikan prerender menghasilkan file HTML statis `/toolkit-regulasi` dengan sukses (Exit Code 0).
