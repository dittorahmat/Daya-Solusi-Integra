## Context

Di dalam regulasi Kementerian BUMN Nomor SK-5/DKU.MBU/11/2024, Lampiran Pengujian Kontrol memuat Tabel 22 yang menjadi pedoman utama seluruh BUMN dalam menentukan ukuran sampel pengujian kontrol manual (TOE). Halaman interaktif ini akan menjadi alat bantu digital cepat dan linkable asset yang ramah pengguna. Desain harus mematuhi aturan ketat `design-taste-frontend` (zero em-dash, warna Ink Navy solid `#0b0f19`, kartu `#0f172a`, border tegas `border-slate-800`, tanpa floating glow blur blob).

## Goals / Non-Goals

**Goals:**
- Membuat komponen interaktif `src/components/pages/ToeCalculatorPage.tsx` di rute `/kalkulator-sampel-toe`.
- Menyediakan selector frekuensi kontrol yang responsif dan langsung menghitung:
  * Rentang jumlah sampel minimum
  * Estimasi ukuran populasi tahunan
  * Metode sampling yang direkomendasikan (acak, sistematis, atau representatif)
  * Prosedur bila ditemukan 1 deviasi (zero tolerance)
- Menyertakan tabel matriks referensi lengkap Tabel 22 untuk kenyamanan visualisasi audit.
- Menyediakan CTA terarah untuk live demo software GRC Integra.
- Mendaftarkan rute ke `App.tsx`, `Header.tsx`, `Footer.tsx`, `seoMeta.ts`, `sitemap.xml`, dan `llms.txt`.

**Non-Goals:**
- Mengunduh data database eksternal (seluruh kalkulasi Tabel 22 murni deterministik berdasarkan regulasi).

## Decisions

1. **Komputasi Deterministik Client-Side**:
   - Seluruh logika Tabel 22 dijalankan langsung di browser untuk kecepatan kilat tanpa latensi server.
2. **Desain Dual-Mode (Kalkulator Interaktif + Tabel Lengkap Referensi)**:
   - Pengguna dapat mencoba kalkulator interaktif sekaligus melihat tabel matriks lengkap dalam satu halaman tanpa harus berpindah tab.
3. **Penyelarasan SEO & SSG**:
   - Menambahkan rute `/kalkulator-sampel-toe` ke `ROUTE_METADATA_MAP` agar di-generate menjadi file HTML fisik statis di `dist/` saat build.

## Risks / Trade-offs

- **[Akurasi Kutipan Regulasi]** → Semua angka sampel dan klausul merujuk persis pada naskah otentik SK-5/DKU.MBU/11/2024.
- **[Kepatuhan Anti-Slop]** → Seluruh teks menggunakan titik dua (`:`), titik koma, atau tanda kurung tanpa em-dash (`—`/`–`).
