# local-image-pipeline Specification

## Purpose
Menghilangkan ketergantungan gambar eksternal Unsplash dengan meng-host gambar blog secara lokal dalam format modern responsif agar LCP lebih cepat, stabil (tidak tergantung pihak ketiga), dan tetap terkirim ke pencarian gambar.

## Requirements

### Requirement: Self-Hosted Responsive Blog Images
Sistem SHALL menyimpan setiap cover artikel sebagai berkas lokal di `public/images/blog/` dalam format WebP (dengan JPEG fallback) beserta varian lebar (mis. 640/960/1200), dan komponen blog SHALL merendernya via `srcset`/`sizes` dengan `width`/`height` eksplisit, `alt` yang sudah ada dipertahankan, serta `loading`/`fetchpriority` existing tidak diregresi.

#### Scenario: Artikel dimuat dengan gambar lokal modern
- **WHEN** pengguna membuka `/blog/<slug>` atau `/blog`
- **THEN** tidak ada request ke `images.unsplash.com`, browser mengunduh varian WebP sesuai viewport, dan tidak terjadi layout shift gambar (CLS dari gambar = 0).

#### Scenario: Guard gambar lokal saat build
- **WHEN** `npm run build` dijalankan
- **THEN** build menggagalkan (exitCode=1) bila ada `coverImage` front-matter atau `seoMeta.ts` yang masih menunjuk ke `images.unsplash.com`, dan setiap URL gambar lokal yang dirujuk mengembalikan 200 dari `dist/`.
