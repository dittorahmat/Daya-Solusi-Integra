# Spec Delta

## Purpose

Menangkap query intent pengadaan BUMN (KAK, HPS, TOR, SPI, KAP, WTP, PSAK 71/72) yang belum tercakup glosarium agar halaman site muncul untuk pencarian panitia pengadaan dan PPK.

## ADDED Requirements

### Requirement: Procurement Glossary Terms
Sistem SHALL menyediakan 8 istilah (`kak`, `hps`, `tor`, `spi`, `kap`, `wtp`, `psak-71`, `psak-72`) masing-masing dengan term, regulationRef, definition (min. 150 kata), keyTakeaway, practicalExample, relatedTermIds (min. 2, termasuk minimal 1 ke istilah existing), dan relatedServiceUrl ke halaman konversi (/panduan-kak-tor-icofr, /kualifikasi-vendor, /layanan/icofr-bumn).

#### Scenario: Istilah ditemukan dan terhubung
- **WHEN** crawler/pengguna membuka `/glosarium/kak`
- **THEN** halaman memuat definisi + rujukan + contoh + tautan ke minimal 2 istilah terkait dan 1 halaman layanan, serta JSON-LD DefinedTerm valid.

#### Scenario: Guard konsistensi glosarium
- **WHEN** `npm run build` dijalankan
- **THEN** tidak ada `relatedTermIds` yang menunjuk ke id glosarium yang tidak ada.
