## 1. Dataset & Interface Preparation

- [x] 1.1 Buat antarmuka `RegulatoryComparisonRow` dan dataset `REGULATORY_COMPARISON_MATRIX` di `src/data/regulationData.ts` yang memuat perbandingan mendalam antara SK-5 BUMN, PER-2/2023, POJK 17/2023, dan SPKN BPK RI, lalu verifikasi validitas tipe TypeScript.

## 2. Interactive Matrix UI Implementation

- [x] 2.1 Buat komponen antarmuka Tabel Matriks Komparasi Regulasi di `src/components/pages/RegulatoryHubPage.tsx` yang menggunakan elemen semantik `<table>`, navigasi filter kategori, badge status asersi, dan styling korporat B2B tanpa tanda em-dash (`—`/`–`).
- [x] 2.2 Hubungkan aksi navigasi internal linking dari baris matriks komparasi menuju halaman solusi terkait (`/layanan/icofr-bumn`, `/platform/grc-integra`, `/kalkulator-sampel-toe`).

## 3. Verification & Build

- [x] 3.1 Lakukan audit anti-slop frontend (`Sparkles|animate-pulse|—|–`) dan pastikan 0 hasil.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi exit code 0.
