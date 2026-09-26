## Why

Saat melakukan evaluasi pengadaan perangkat lunak tata kelola risiko, para pemangku kepentingan BUMN (Divisi TI, Manajemen Risiko, dan Komite Audit) kerap membandingkan antara membangun/mengaktifkan modul GRC bawaan pada ERP global (seperti SAP GRC / Oracle Risk Management) dengan mengadopsi platform GRC terdedikasi lokal. Publikasi panduan komparasi objektif berorientasi kepatuhan SK-5/DKU.MBU/11/2024 ini menargetkan kata kunci pencarian bervolume tinggi dengan niat beli matang (*Bottom of Funnel / BOFU*), merebut Google Featured Snippet melalui matriks perbandingan 5 dimensi, serta mengedukasi keunggulan independensi pengujian kontrol (Three Lines Model).

## What Changes

- Menambahkan artikel panduan komparasi mendalam di `src/content/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn.md`.
- Artikel memuat analisis komparatif 5 dimensi: Kepatuhan Native Regulasi SK-5 BUMN, Skema Lisensi dan Total Cost of Ownership (TCO), Waktu Implementasi (Time to Value), Independensi Audit (Three Lines of Defense), dan Integrasi Kertas Kerja BPK/KAP.
- Menyediakan tabel komparasi terstruktur yang dirancang khusus untuk memicu Google Rich Comparison Snippet.
- Mendaftarkan entri rute komparasi ke `src/utils/seoMeta.ts` dan `public/sitemap.xml`.
- Menyematkan FAQ schema mikro dan internal linking ke platform `/platform/grc-integra` dan kalkulator sampel TOE.

## Capabilities

### New Capabilities
- `grc-platform-comparison`: Menyajikan panduan evaluasi komparatif antara platform GRC spesifik regulasi BUMN dengan modul GRC ERP global dengan standar kepatuhan SK-5/2024.

### Modified Capabilities
- Tidak ada modifikasi sistem inti.

## Impact

- Menambahkan 1 berkas markdown artikel di `src/content/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn.md`.
- Menambahkan 1 rute meta di `src/utils/seoMeta.ts`.
- Memperbarui `public/sitemap.xml`.
- Tidak ada breaking changes pada arsitektur kode frontend.
