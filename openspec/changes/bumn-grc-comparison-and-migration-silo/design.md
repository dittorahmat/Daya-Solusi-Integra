## Context

Proyek ini telah memiliki arsitektur SSG prerender (`scripts/prerender.ts`), registri metadata SEO terpusat (`src/utils/seoMeta.ts`), dan loader artikel blog markdown berbasis Vite `import.meta.glob` di `src/content/blog/`. Untuk menangkap lalu lintas pencarian B2B yang sedang mempertimbangkan migrasi atau evaluasi software GRC, kita menambahkan dua artikel pilar komparatif dengan visual tabel terstruktur dan anchor link internal.

## Goals / Non-Goals

**Goals:**
- Menyajikan dua artikel komparatif yang sangat mendalam, objektif, dan sarat wawasan regulasi BUMN (SK-5/DKU.MBU/11/2024 dan standar SPKN BPK).
- Menghasilkan tabel perbandingan komparatif terstruktur yang dirancang untuk memicu Featured Snippet Google dan kutipan AI Answer Engine.
- Menjamin kepatuhan mutlak terhadap aturan anti-slop: zero em-dash, tanpa dot pulse kosmetik, tanpa sparkles, dan tipografi lapang berstandar enterprise.
- Mendaftarkan rute baru ke sitemap XML dan pipeline prerender HTML statis.

**Non-Goals:**
- Membuat modul formulir pendaftaran baru (tetap memanfaatkan CTA rute kontak / asesmen yang sudah ada).
- Menghapus atau merefaktor artikel blog yang sudah dipublikasikan sebelumnya.

## Decisions

### 1. Struktur Artikel Komparasi Berbasis Silo Terarah
- **Keputusan**: 
  - Artikel 1 (`risiko-rcm-excel-vs-software-grc-bumn.md`) fokus pada dimensi teknis operasional: integritas data, jejak audit (audit trail), segregasi kewenangan (SOD), dan beban kerja kompilasi sampel TOE.
  - Artikel 2 (`alternatif-software-grc-global-bumn.md`) fokus pada dimensi strategis enterprise: perbandingan TCO Rupiah vs USD, fleksibilitas penempatan data (on-premise / private cloud lokal UU PDP), kesiapan native regulasi SK-5 vs kustomisasi rumit modul ERP global.
- **Alternatif yang Dipertimbangkan**: Menggabungkan kedua bahasan menjadi satu artikel raksasa. Ditolak karena mengaburkan *search intent* antara tim teknis operasional (pencari solusi masalah spreadsheet) dengan direksi/komite audit (pencari alternatif vendor software global).

### 2. Standar Gambar Cover dan Format Data Unsplash
- **Keputusan**: Menggunakan foto korporat beresolusi tinggi dengan parameter kompresi `?auto=format&fit=crop&w=1200&q=80` yang relevan (misalnya ruang rapat dewan direksi BUMN dan arsitektur analitik audit).
- **Alternatif yang Dipertimbangkan**: Ilustrasi vektor/kartun. Ditolak sesuai mandat AGENTS.md karena menurunkan wibawa korporat BUMN.

### 3. Integrasi Sitelinks dan Schema SEO
- **Keputusan**: Setiap artikel menyertakan blok `## Daftar Isi` ber-anchor link dan tautan silang ke rute produk `/platform/grc-integra` serta kalkulator `/kalkulator-toe`.
- **Rasional**: Memicu sitelinks Google SERP dan mempertahankan skor information gain yang tinggi untuk AI Crawlers (GPTBot, ClaudeBot, PerplexityBot).

## Risks / Trade-offs

- [Risk] Duplikasi kata kunci dengan artikel perbandingan ERP yang sudah ada sebelumnya. → Mitigasi: Artikel sebelumnya fokus spesifik pada modul ERP vs GRC murni, sedangkan artikel baru membedah Excel vs GRC dan perbandingan vendor GRC global (SAP, ServiceNow, Archer).
- [Risk] Peningkatan waktu eksekusi build karena penambahan prerender snapshot. → Mitigasi: Prerender script berbasis JSDOM berjalan sangat cepat (<1 detik tambahan untuk 2 rute baru).
