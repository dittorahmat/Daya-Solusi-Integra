# Technical Design: Expanded Glossary Cluster & Search

## Architecture Overview
Perubahan ini menambahkan 8 data istilah glosarium baru dan fitur pencarian reaktif di sisi klien.

## UI/UX & Design Guidelines
- Mengikuti dial `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`.
- Input pencarian: latar Slate 900 (`bg-slate-900 border border-slate-800 focus:border-bumn-blue focus:ring-1 focus:ring-bumn-blue text-white rounded-xl py-2.5 pl-10 pr-4 text-xs`).
- Zero em-dash: Dilarang menggunakan tanda pisah `—` atau `–`.
- Tanpa ikon `Sparkles` dan tanpa `animate-pulse` kosmetik.

## Sitemaps & Static Prerender Pipeline
- 8 istilah baru didaftarkan di `public/sitemap.xml` dengan prioritas `0.85` dan frekuensi pembaruan `weekly`.
- Skrip `scripts/generate-static-routes.ts` otomatis merender 8 berkas `dist/glosarium/<slug>/index.html` lengkap dengan skema `DefinedTerm` dan `BreadcrumbList`.
