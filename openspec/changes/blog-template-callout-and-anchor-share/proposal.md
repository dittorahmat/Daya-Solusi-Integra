## Why

Untuk menangkap maksud pencarian transaksional bernilai tinggi dari auditor BUMN (seperti unduhan template Excel RCM SK-5 dan kertas kerja TOE) serta memudahkan pembaca membagikan tautan sub-bagian artikel spesifik (deep-link anchor), website membutuhkan widget callout template kontekstual dan tombol salin tautan anchor pada setiap judul bagian H2.

## What Changes

- Menambahkan tombol interaktif salin tautan anchor (`Link2`) di samping setiap judul `h2` pada artikel blog dengan indikator feedback visual status tersalin.
- Menambahkan kartu callout unduhan toolkit & kertas kerja SK-5 kontekstual di dalam badan artikel blog yang mengarahkan pembaca ke landing page `/toolkit-regulasi` atau modal konsultasi.

## Capabilities

### New Capabilities
- `blog-anchor-share`: Menyediakan kemampuan menyalin URL anchor judul H2 secara instan ke clipboard untuk mempermudah rujukan deep-link pembaca dan memperkuat sinyal jump-to sitelinks.
- `blog-template-callout`: Menyediakan komponen callout unduhan template/toolkit regulasi di dalam artikel guna menangkap kueri pencarian intensi transaksional.

### Modified Capabilities
<!-- None -->

## Impact

- `src/components/BlogPage.tsx`: Penambahan tombol copy link pada renderer `h2` dan modul callout template di bawah artikel sebelum FAQ.
