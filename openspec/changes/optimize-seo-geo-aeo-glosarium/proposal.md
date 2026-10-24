# Proposal

## Why

Berdasarkan data performa riil Google Search Console (GSC) periode 28 hari terakhir (26 September s.d. 24 Oktober 2026), website dsintegra.co.id telah memiliki impresi dan peringkat rata-rata yang sangat baik pada kata kunci definisi audit dan kepatuhan BUMN:
- `compensating control adalah` berada pada posisi rata-rata 2.7 dengan 21 impresi namun 0 klik (CTR 0%).
- `control deficiency adalah` berada pada posisi rata-rata 7.7 dengan 12 impresi dan 0 klik.
- `entity level control adalah` berada pada posisi rata-rata 4.0 dengan 2 impresi dan 0 klik.
- `17 prinsip coso` dan variasinya berada pada posisi 7.7 hingga 12.2.

Rendahnya CTR pada posisi top 3-7 ini menunjukkan peluang besar (quick wins) yang belum terkonversi: pengguna mencari jawaban definitif instan dan format terstruktur yang menjawab intensi penelusuran secara langsung. Selain itu, mesin pencari berbasis AI (Google AI Overviews, Perplexity, ChatGPT Search) membutuhkan blok definisi otoritatif ringkas (*Direct Answer Blocks* 40-60 kata) serta sitasi eksplisit regulasi SK-5 BUMN dan COSO Framework untuk dapat mengutip (*grounding*) entitas GRC Integra dan PT Daya Solusi Integra secara akurat.

## What Changes

1. **Optimasi Konten & Metadata Istilah Kunci Glosarium**:
   - Memperkaya definisi, takeaway, dan contoh praktis untuk entitas utama: `compensating-control`, `defisiensi-kontrol`, `defisiensi-signifikan`, `defisiensi-material`, dan `elc` (Entity-Level Controls) di `src/data/glossaryData.ts`.
   - Menambahkan metadata direct answer terstruktur (definisi 40-50 kata ringkas) guna memicu Featured Snippet Google dan ekstraksi kutipan AI engine (GEO/AEO).
2. **Peningkatan Komponen Tampilan Halaman Istilah Glosarium (`GlossaryDetailPage.tsx`)**:
   - Menambahkan blok *Direct Answer / Snippet Box* di awal halaman istilah glosarium yang teroptimasi untuk Google Featured Snippets dan AI Overviews.
   - Menyertakan structured schema JSON-LD tipe `DefinedTerm` dan `FAQPage` khusus pada setiap halaman detail istilah glosarium.
   - Menambahkan tabel perbandingan komparatif (misal: Kompensasi vs Kontrol Utama, Tingkatan Defisiensi Kontrol) guna memperkuat *information gain*.
3. **Penyelarasan llms.txt & llms-full.txt**:
   - Memperbarui file `public/llms.txt` dan `public/llms-full.txt` dengan glosarium istilah otoritatif ini agar terindeks sempurna oleh AI bot web crawler.

## Capabilities

### New Capabilities
<!-- None -->

### Modified Capabilities
- `regulatory-glossary`: Penambahan kapabilitas Direct Answer Snippet Block, schema DefinedTerm/FAQPage pada halaman rute istilah `/glosarium/:slug`, serta pengayaan data istilah kunci bernilai pencarian tinggi (Compensating Control, Control Deficiency, Entity Level Control).
- `ai-search-optimization`: Penyelarasan sitasi istilah kunci tata kelola dan taksonomi evaluasi defisiensi kontrol ke dalam dokumentasi AI `llms.txt` dan `llms-full.txt`.

## Impact

- **Affected Files**:
  - `src/data/glossaryData.ts` (penyempurnaan & penambahan atribut snippet/komparasi)
  - `src/components/pages/GlossaryDetailPage.tsx` (Direct Answer Box, tabel komparasi, breadcrumb, schema inject)
  - `public/llms.txt` dan `public/llms-full.txt` (sinkronisasi istilah & referensi regulasi SK-5)
  - `scripts/generate-static-routes.ts` (verifikasi SSG prerender halaman glosarium)
- **External Dependencies**: Tidak ada penambahan package eksternal.
- **Breaking Changes**: Tidak ada (backward compatible).
