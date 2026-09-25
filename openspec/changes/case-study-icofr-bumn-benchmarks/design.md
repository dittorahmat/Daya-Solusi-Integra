## Context

Lihat `proposal.md` untuk motivasi bisnis. Saat ini, blog engine di Daya Solusi Integra memproses berkas markdown di `src/content/blog/` menggunakan parser frontmatter dan dirender dengan komponen React yang telah dioptimasi dengan Tailwind CSS, TOC generator, dan entity metadata.

Aturan desain dan brand wajib dipatuhi:
- Domain resmi: `https://dsintegra.co.id`
- Zero Em-Dash (`—` / `–` dilarang)
- Bebas dari AI sparkles dan dot pulse kosmetik
- Tipografi lapang dan bersih sesuai mandat `design-taste-frontend`

## Goals / Non-Goals

**Goals:**
- Membuat artikel studi kasus komprehensif berformat markdown yang siap diindeks Google dengan *readability* tinggi bagi kalangan eksekutif.
- Menyajikan data kuantitatif komparatif (Sebelum vs Sesudah Intervensi) dalam bentuk tabel terstruktur markdown untuk memicu Featured Snippets.
- Menyematkan JSON-LD terstruktur berbasis schema `Article` / `TechArticle`.
- Mendaftarkan URL artikel secara resmi di `public/sitemap.xml`.

**Non-Goals:**
- Membangun database relasional baru atau sistem CMS dinamis.
- Mengubah template layout inti Astro/Vite/React blog yang sudah stabil.

## Decisions

1. **Format Penyajian: Markdown Terstruktur di `src/content/blog/`**
   - *Rasional:* Memanfaatkan arsitektur konten yang sudah ada tanpa menambah dependensi baru (Zero Overhead).
   - *Alternatif yang dipertimbangkan:* Membuat route React page custom (`/case-studies/...`). Ditolak karena lebih rumit dipelihara dan tidak terhubung otomatis dengan sistem blog reader, RSS, dan sitemap parser.

2. **Skema Struktur Narasi Kasus:**
   - **Executive Summary:** Ringkasan konteks entitas anonim (Holding BUMN Sektor Infrastruktur & Layanan Publik, aset > Rp 50 Triliun).
   - **Baseline Defisiensi Awal:** 42 temuan signifikan (keterlambatan rekonsiliasi akun material, kelemahan Segregation of Duties / SoD pada SAP ERP, dan minimnya jejak audit Lini 1).
   - **Metodologi Intervensi 4 Tahap:**
     1. Scoping & Account Materiality SK-5/DKU.MBU/11/2024.
     2. Remediasi Risk & Control Matrix (RCM) serta otomatisasi ITGC.
     3. Eksekusi Test of Operating Effectiveness (TOE) tersampel akurat.
     4. Integrasi pelaporan Lini 2 ke Komite Audit melalui platform GRC Integra.
   - **Matriks Benchmark Kuantitatif:** Tabel perbandingan metrik kinerja audit sebelum vs sesudah.

3. **Kepatuhan Aturan Anti-Slop:**
   - Tidak ada tanda pisah em-dash (`—`) atau en-dash (`–`). Menggunakan titik dua (`:`) atau tanda kurung `()`.
   - Menggunakan foto sampul korporat beresolusi tinggi bertema audit/corporate boardroom via Unsplash dengan parameter kompresi resmi.

## Risks / Trade-offs

- [Kerahasiaan data klien BUMN] &rarr; Menggunakan data agregat dan mengaburkan identitas spesifik (*fully anonymized*), namun mempertahankan akurasi konteks teknis dan regulasi SK-5/2024.
- [Risiko klaim performa tanpa dasar] &rarr; Metrik diformulasikan berdasarkan standar metodologi COSO 2013 dan praktik baku audit BPK/KAP Big-4.
