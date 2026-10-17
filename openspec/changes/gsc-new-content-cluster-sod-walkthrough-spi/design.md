# Design: Content Cluster Ekspansi GSC

## Context

Berdasarkan analisis 99 kueri Search Console, terdapat kebutuhan informasi teknis tingkat lanjut seputar Segregation of Duties (SoD), Walkthrough Pengendalian Internal, Peran SPI dalam Model Tiga Lini, serta penjelasan detail lampiran Juknis SK-5/DKU.MBU/11/2024. Penambahan 4 artikel pilar ini melengkapi topik-topik bernilai tinggi yang dicari oleh Dewan Direksi, Komite Audit, dan auditor SPI BUMN.

## Goals / Non-Goals

**Goals:**
1. Menyusun 4 artikel pilar berbobot teknis tinggi di `src/content/blog/` dengan target kata kunci utama yang memiliki impresi kuat di GSC.
2. Mematuhi mandatori editorial: cover image Unsplash korporat beresolusi tinggi, H2 ber-anchor di Daftar Isi, tabel komparasi teknis, dan larangan mutlak em-dash (`—` / `–`).
3. Menghubungkan secara kontekstual ke landing page komersial (`/platform/grc-integra`, `/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`) dan glosarium terkait.

**Non-Goals:**
1. Merombak arsitektur routing blog atau komponen pembaca markdown.
2. Mengubah struktur slug artikel eksisting.

## Decisions

### 1. Struktur Konten Artikel Pilar
Setiap artikel akan mengikuti struktur AIDA B2B Regulated Corporate:
- **Title:** Format exact-match / near-match dengan kueri GSC tertinggi.
- **Ringkasan Eksekutif (Key Takeaways):** Callout box di awal untuk memicu Featured Snippet Google.
- **Daftar Isi Anchor:** Seluruh H2 memiliki link anchor markdown.
- **Tabel Komparasi:** Minimal 1 tabel matriks teknis per artikel.
- **Internal Link Penutup:** Menghubungkan pembaca ke konsultasi atau platform GRC Integra.

### 2. Standar Gambar Cover
Menggunakan URL Unsplash beresolusi tinggi dengan tema korporat serius (ruang server, audit data, meeting dewan direksi, dokumen regulasi) yang dioptimasi webp/kompresi.

## Risks / Trade-offs

- **[Risk] Panjang Artikel:** Artikel terlalu pendek tidak akan mendominasi intent pencarian teknis BUMN.  
  $\rightarrow$ **Mitigasi:** Setiap artikel ditulis mendalam (minimal 1200 kata) dengan rujukan pasal regulasi riil.
- **[Risk] Em-dash Leakage:** Penulisan tanda pisah em-dash secara tidak sengaja.  
  $\rightarrow$ **Mitigasi:** Jalankan skrip pemindaian otomatis sebelum commit.
