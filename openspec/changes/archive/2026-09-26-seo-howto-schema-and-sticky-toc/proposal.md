## Why

Untuk meningkatkan visibilitas pencarian organik dan Click-Through Rate (CTR) dari Google Search pada kueri panduan audit teknis BUMN (seperti cara menentukan ukuran sampel TOE Tabel 22, penyusunan KAK/TOR ICOFR, dan tahapan implementasi SK-5), website membutuhkan skema data terstruktur `HowTo` (Schema.org/HowTo). Selain itu, untuk meningkatkan kenyamanan pembaca eksekutif serta memicu Google SERP Jump-to Sitelinks secara otomatis, artikel blog membutuhkan navigasi interaktif Sticky Table of Contents (TOC) yang menyorot section aktif sesuai posisi baca.

## What Changes

- Menambahkan struktur data panduan teknis `HowTo` di `src/data/howtoData.ts` untuk 3 artikel pilar panduan implementasi.
- Menginjeksi skema JSON-LD `HowTo` ke dalam generator rute statis `scripts/generate-static-routes.ts` dan runtime dinamis `src/components/BlogPage.tsx`.
- Membangun komponen antarmuka Sticky Table of Contents (TOC) pada sidebar artikel blog di `src/components/BlogPage.tsx` yang dilengkapi smooth scrolling dan scroll-spy berbasis `IntersectionObserver`.

## Capabilities

### New Capabilities
- `howto-rich-snippets`: Menyediakan data terstruktur `HowTo` berstandar Schema.org untuk artikel panduan langkah demi langkah ICOFR BUMN.
- `sticky-table-of-contents`: Menyediakan navigasi sticky TOC interaktif pada halaman artikel blog guna mempermudah pembacaan dan memicu Google SERP jump-to sitelinks.

### Modified Capabilities
<!-- None -->

## Impact

- `src/data/howtoData.ts`: Berkas baru untuk entri data langkah panduan HowTo.
- `scripts/generate-static-routes.ts`: Memuat dataset `ROUTE_HOWTO` dan menginjeksikannya ke dalam berkas HTML statis.
- `src/components/BlogPage.tsx`: Menambahkan markup JSON-LD runtime dan komponen UI Sticky TOC.
