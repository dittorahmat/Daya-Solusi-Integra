# Tasks

## 1. Pengayaan Skema dan Data Glosarium (AEO & Information Gain)

- [x] 1.1 Perluas antarmuka `GlossaryItem` di `src/data/glossaryData.ts` dengan field opsional `directAnswer` (ringkasan 40–50 kata), `comparisonTable`, dan `faqList` serta verifikasi `npm run lint` tetap bersih.
- [x] 1.2 Lengkapi konten istilah bernilai impresi tinggi di `src/data/glossaryData.ts` (`compensating-control`, `defisiensi-kontrol`, `elc`, `defisiensi-signifikan`, `defisiensi-material`) dengan teks direct answer otoritatif dan tabel komparasi, lalu verifikasi tidak ada karakter em-dash (`—` atau `–`).

## 2. Penyempurnaan Tampilan Halaman Detail Istilah Glosarium

- [x] 2.1 Tambahkan komponen Direct Answer Snippet Box dan Tabel Komparasi pada `src/components/pages/GlossaryDetailPage.tsx` dengan visual arsitektural solid (`#0f172a`, `border-slate-800`, BUMN Blue & Gold) dan verifikasi bebas visual clutter.
- [x] 2.2 Sematkan structured data schema JSON-LD (`DefinedTerm` dan `FAQPage`) ke dalam document head pada `src/components/pages/GlossaryDetailPage.tsx` dan verifikasi validitas script tag.

## 3. Penyelarasan llms.txt dan llms-full.txt (GEO Engine Grounding)

- [x] 3.1 Perbarui entri taksonomi istilah evaluasi defisiensi dan kontrol kompensasi pada `public/llms.txt` dan `public/llms-full.txt` serta verifikasi rujukan SK-5/DKU.MBU/11/2024 dan tidak adanya em-dash.

## 4. Validasi Kepatuhan dan Build SSG

- [x] 4.1 Jalankan pemindaian anti-slop `Select-String -Path "src\**\*.tsx", "src\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"` dan pastikan 0 hasil.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` serta verifikasi bundler dan SSG route generation sukses dengan exit code 0.
