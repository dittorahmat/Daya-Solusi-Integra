## Purpose

Memastikan setiap gambar konten dan hero dimuat dengan atribut modern (dimensi eksplisit, lazy loading, prioritas hero) sehingga LCP mobile membaik dan tidak terjadi pergeseran tata letak saat gambar dimuat.

## ADDED Requirements

### Requirement: Atribut Dimensi dan Loading Modern pada Gambar Konten
Setiap gambar konten dan hero SHALL menyertakan dimensi eksplisit (lebar dan tinggi atau rasio aspek terkunci), `loading="lazy"` untuk gambar di bawah lipatan, `decoding="async"`, dan `fetchpriority="high"` khusus untuk gambar hero pertama di tiap halaman.

#### Scenario: Audit PageSpeed gambar hero dan konten
- **WHEN** halaman blog atau layanan diaudit dengan PageSpeed Insights mobile
- **THEN** tidak ada peringatan missing width/height, gambar hero ter-preload atau berprioritas tinggi, dan seluruh gambar non-hero memakai lazy loading.

### Requirement: Format Kompresi Web Modern pada URL Gambar
Setiap URL gambar jarak jauh SHALL meminta format modern terkompresi (WebP/AVIF via parameter format otomatis) dengan batas lebar eksplisit yang sesuai kebutuhan tampil.

#### Scenario: Inspeksi URL gambar blog
- **WHEN** URL gambar hero artikel blog diperiksa
- **THEN** URL memuat parameter format otomatis dan batas lebar eksplisit serta merespons dengan content-type gambar modern.
