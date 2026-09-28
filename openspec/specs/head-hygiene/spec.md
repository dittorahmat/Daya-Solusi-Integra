# head-hygiene Specification

## Purpose
Menyediakan ikon brand, manifest PWA, dan referensi head yang konsisten di semua halaman agar tab browser, bookmark, dan instalasi mobile terlihat profesional serta mendukung click-through dari hasil pencarian.

## Requirements

### Requirement: Favicon Set and Web Manifest
Sistem SHALL menyediakan set ikon brand (`favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`) dan `manifest.webmanifest` di root publik, serta mereferensikannya dari `index.html` dengan tag ikon standar, apple-touch-icon, manifest, dan `theme-color`.

#### Scenario: Tab browser menampilkan ikon
- **WHEN** pengguna membuka halaman mana pun di domain resmi
- **THEN** tab browser menampilkan ikon DSI (bukan ikon default), dan file ikon serta manifest masing-masing mengembalikan status 200.

#### Scenario: Prerender mempertahankan referensi ikon
- **WHEN** generator prerender menghasilkan HTML per-route
- **THEN** setiap file hasil tetap memuat referensi favicon/manifest/theme-color yang sama tanpa duplikasi tag.
