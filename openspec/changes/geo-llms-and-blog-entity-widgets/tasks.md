## 1. Standarisasi GEO & AI Crawlers

- [x] 1.1 Perbarui dan selaraskan `public/llms.txt` dengan matriks link pilar layanan, kalkulator regulasi, dan glosarium resmi. Verifikasi file teks dapat diakses dan format Markdown valid tanpa karakter em-dash.
- [x] 1.2 Perbarui `public/llms-full.txt` dengan dokumentasi lengkap alur kerja ICOFR SK-5 BUMN, modul software GRC Integra, dan matriks pengujian sampel. Verifikasi kelengkapan teks.
- [x] 1.3 Perbarui `public/robots.txt` agar menyertakan referensi `llms.txt` dan mengizinkan bot AI utama (GPTBot, PerplexityBot, ClaudeBot, Applebot-Extended, Google-Extended). Verifikasi sintaks robots.txt valid.

## 2. Komponen Contextual Entity Widget

- [x] 2.1 Bangun komponen `src/components/RelatedEntitiesWidget.tsx` dengan pemetaan dinamis topik artikel ke alat kalkulator regulasi, entitas glosarium, dan silo layanan pilar sesuai prinsip anti-slop.
- [x] 2.2 Integrasikan `RelatedEntitiesWidget` ke dalam halaman artikel tunggal pada `src/components/BlogPage.tsx` tepat sebelum kotak intake konsultasi.
- [x] 2.3 Uji tampilan responsif widget dan pastikan transisi navigasi internal (`onNavigate`) berjalan mulus tanpa reload halaman.

## 3. Verifikasi & Audit Kualitas

- [x] 3.1 Jalankan pemindaian audit larangan tanda pisah em-dash/en-dash (`—` / `–`) dan ikon terlarang pada file yang dimodifikasi. Pastikan 0 pelanggaran.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi tidak ada regresi tipe maupun bundler build error.
