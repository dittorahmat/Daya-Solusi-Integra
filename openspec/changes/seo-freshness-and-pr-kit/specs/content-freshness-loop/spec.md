# Spec Delta

## Purpose

Menjaga seluruh artikel tetap segar di mata mesin pencari dan pembaca melalui audit kebusukan terjadwal serta sinyal tanggal pembaruan yang terlihat dan konsisten dengan data terstruktur.

## ADDED Requirements

### Requirement: Stale Content Audit
Sistem SHALL menyediakan perintah `npm run seo:freshness` yang memeriksa seluruh artikel markdown dan melaporkan (per slug: published, modified, umur hari) dengan status segar (<180 hari), basi (180–365 hari), atau kritis (>365 hari); perintah SHALL keluar 0 dengan daftar eksplisit agar dapat dijalankan sebagai penasihat CI.

#### Scenario: Audit periodik
- **WHEN** `npm run seo:freshness` dijalankan
- **THEN** tercetak tabel per-artikel dengan statusnya, dan tidak ada artikel yang gagal terparsing diam-diam.

### Requirement: Visible Updated Date Badge
Sistem SHALL menampilkan badge "Diperbarui {tanggal}" pada halaman artikel dan snapshot prerendernya HANYA bila tanggal modifikasi (git log/mtime) lebih baru dari tanggal terbit, dengan format tanggal Indonesia yang sama dengan tanggal terbit.

#### Scenario: Artikel yang pernah direvisi
- **WHEN** pengguna/crawler membuka artikel dengan modified > published
- **THEN** badge tampil di samping tanggal terbit dan `<time dateModified>` prerender konsisten dengan JSON-LD `dateModified`.
