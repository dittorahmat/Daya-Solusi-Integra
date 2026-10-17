---
name: gsc-seo-strategist
description: SOP and strategic playbooks for analyzing Google Search Console (GSC) data to plan new blog articles, detect content decay, and optimize internal links for GRC Integra and ICOFR BUMN.
---

# GSC SEO Strategist Playbook

Panduan operasional untuk menganalisa data Google Search Console (`https://dsintegra.co.id/`) dan mengeksekusinya menjadi tindakan konkret pada repositori Daya Solusi Integra.

## 1. Analisis Peluang Artikel Baru (Content Gap & High Impressions)
Gunakan tool MCP GSC untuk kueri 30-90 hari terakhir:
- **Kriteria:** Query pencarian dengan Impressions tinggi (>= 200) tetapi Clicks rendah dan Average Position > 15.
- **Tindakan:**
  1. Periksa apakah sudah ada artikel yang relevan di `src/content/blog/`.
  2. Jika belum ada, buat artikel pilar atau artikel pendukung baru sesuai regulasi Kementerian BUMN (`SK-5/DKU.MBU/11/2024`, `COSO Framework`, `Tabel 22`).
  3. Pastikan artikel mematuhi aturan konten: Cover image Unsplash korporat, H2 ber-anchor di Daftar Isi, tabel komparasi, Zero Em-Dash (`—`), dan link internal ke produk/layanan.

## 2. Optimasi Quick Wins (Ranking Posisi 6–20)
- **Kriteria:** Query pencarian yang sudah berada di halaman 1 bawah atau halaman 2 Google (posisi rata-rata 6.0 s.d. 20.0) dengan CTR di bawah 3%.
- **Tindakan:**
  1. Identifikasi URL artikel target yang menerima impresi tersebut.
  2. Tambahkan sub-heading `## H2` atau `### H3` baru yang secara spesifik menjawab kata kunci tersebut.
  3. Perbarui `metaDescription` frontmatter agar lebih *enticing* dan meningkatkan CTR.

## 3. Strategi Internal Linking Matrix
- **Kriteria:** Halaman konversi utama:
  - `/layanan/icofr-bumn` (Konsultansi ICOFR BUMN)
  - `/platform/grc-integra` (Software Lifecycle GRC BUMN)
  - `/asesmen-maturitas` (Self-Assessment Interaktif)
- **Tindakan:**
  1. Temukan artikel blog yang memiliki traffic organik konsisten.
  2. Sisipkan anchor text alami di badan paragraf atau blok *Key Takeaway* menuju halaman pilar di atas.
  3. Hindari anchor text generik seperti "klik di sini"; gunakan frasa kontekstual seperti "kepatuhan regulasi SK-5 BUMN", "otomasi control testing", atau "matriks pengujian ICOFR".

## 4. Deteksi Content Decay (Penurunan Traffic)
- **Kriteria:** Bandingkan data 28 hari terakhir vs 28 hari periode sebelumnya. Identifikasi URL dengan penurunan klik > 25%.
- **Tindakan:**
  1. Lakukan audit konten (apakah ada regulasi yang baru diperbarui atau kompetitor menyajikan format tabel yang lebih lengkap).
  2. Perbarui konten dengan data termutakhir dan tambahkan studi kasus relevan.
