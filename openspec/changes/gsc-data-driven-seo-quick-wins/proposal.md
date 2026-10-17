# Proposal: GSC Data-Driven SEO Quick Wins & Internal Link Funnel

## Why

Berdasarkan data 90 hari Google Search Console (`https://dsintegra.co.id/`), beberapa artikel pilar dan halaman regulasi/layanan telah menempati halaman 1 Google (posisi rata-rata 5–8) dengan impresi pencarian yang tinggi (100–194 impresi), tetapi CTR masih di bawah 2.1%. Selain itu, halaman glosarium audit (seperti `/glosarium/sod` dengan 86 impresi dan posisi 9.5, `/glosarium/elc` dengan 79 impresi di posisi 4.3, serta `/glosarium/compensating-control` di posisi 2.8) menerima impresi masif namun belum memiliki jembatan konversi (*internal linking funnel*) menuju software `GRC Integra` dan layanan konsultansi `ICOFR BUMN`. 

Perubahan ini diperlukan sekarang untuk mengubah peringkat halaman 1 yang sudah ada menjadi klik nyata (CTR lift) dan mengalirkan traffic glosarium berniat tinggi menuju halaman konversi komersial.

## What Changes

1. **On-Page Meta & SERP Snippet Optimization:**
   - Memperbarui title tag dan meta description pada 3 artikel pilar dengan impresi tertinggi:
     - `/blog/panduan-sk5-icofr-grc-integra` (170 imp, pos 5.2, CTR 1.8% -> optimasi fokus pada kata kunci `SK5 ICOFR` & `SK-5 BUMN`).
     - `/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5` (116 imp, pos 8.8, CTR 0.9% -> optimasi intent definisi regulasi & fungsi audit).
     - `/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe` (83 imp, pos 7.3, CTR 0.0% -> tambahkan hook downloadable matriks & contoh praktis).
   - Menambahkan blok *Executive Summary / Key Takeaway* di pembuka artikel untuk memicu Google Featured Snippet.

2. **Glosarium Commercial Funnel (Internal Linking Injection):**
   - Menyematkan contextual callout box dan anchor text yang mengarahkan pembaca dari 5 halaman glosarium bervolume tertinggi ke landing page komersial:
     - `/glosarium/sod` -> Link ke `/platform/grc-integra` (otomasi SOD matrix) dan `/layanan/itgc-audit-readiness`.
     - `/glosarium/elc` -> Link ke `/layanan/icofr-bumn` (evaluasi Entity Level Control BUMN).
     - `/glosarium/compensating-control` -> Link ke `/blog/significant-deficiency-vs-material-weakness-icofr-remediasi`.
     - `/glosarium/spi` -> Link ke `/toolkit-regulasi` dan `/layanan/icofr-bumn`.
     - `/glosarium/itgc` & `/glosarium/itac` -> Link ke `/layanan/itgc-audit-readiness`.

3. **Inbound Authority Booster untuk Halaman Komersial:**
   - Memperkuat internal linking dari artikel blog bertrafik tinggi menuju `/platform/grc-integra` (posisi 11.2) dan `/layanan/icofr-bumn` (posisi 8.5) untuk mendorong keduanya masuk ke Top 3.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `regulatory-glossary`: Menambahkan persyaratan bahwa setiap entri glosarium dengan kueri GSC bervolume tinggi wajib memiliki kontekstual bridge card menuju solusi platform atau layanan terkait.
- `dynamic-seo-meta`: Memperbarui metadata dan snippet copy artikel pilar agar selaras dengan target kueri aktual Google Search Console.

## Impact

- File artikel: `src/content/blog/panduan-sk5-icofr-grc-integra.md`, `src/content/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5.md`, `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md`.
- Halaman glosarium: `src/pages/glosarium/*.tsx` atau file data glosarium terkait.
- Kepatuhan Desain: Mematuhi `design-taste-frontend` (Zero Em-Dash, solid architecture, no visual clutter).
