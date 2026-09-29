# pr-media-kit Specification

## Purpose
Menyediakan satu URL rujukan pers yang mudah dikutip (boilerplate, logo, statistik) sehingga liputan dan sitasi pihak ketiga lebih mungkin memberi backlink ke domain resmi.

## Requirements

### Requirement: Media Kit Page
Sistem SHALL menyediakan rute `/media-kit` berisi: boilerplate perusahaan siap salin (≤120 kata), tautan unduh paket logo (aset publik existing), minimal 4 statistik sitasi ber-anchor ID persisten, aturan pakai brand, dan kontak media (email existing saja); halaman SHALL terdaftar di sitemap (priority 0.8) dengan canonical + JSON-LD valid dan dimuat malas seperti rute lain.

#### Scenario: Jurnalis mengutip
- **WHEN** pengguna membuka `/media-kit#statistik-kinerja`
- **THEN** blok statistik tampil dengan angka (42 defisiensi, 70% efisiensi TOE, H-14 asersi, 100% CAP) dan tombol/tautan salin kutipan, serta halaman lolos guards build existing.
