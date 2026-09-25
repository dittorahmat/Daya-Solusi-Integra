## Context

Blog Daya Solusi Integra menggunakan dynamic glob loader di Vite yang secara otomatis mem-parsing seluruh file markdown di `src/content/blog/*.md` tanpa perlu mendaftarkan route secara manual.

## Goals / Non-Goals

**Goals:**
- Menulis 3 artikel berbobot tinggi (>700 kata per artikel) dengan format Markdown lengkap, memuat gambar editorial profesional (Unsplash curated finance/technology assets), tabel komparasi, dan penekanan kata kunci SEO exact-match.
- Memastikan struktur artikel mematuhi aturan anti-slop `design-taste-frontend` (zero em-dash, tone profesional eksekutif, tidak ada klaim palsu).
- Memperbarui `public/sitemap.xml` agar artikel-artikel baru segera terindeks.

**Non-Goals:**
- Mengubah core engine blog atau parser markdown.

## Decisions

1. **Pemilihan Gambar Editorial Relevan (Curated High-Resolution Assets):**
   - Menghindari gambar stock klise (handshake berlebihan atau AI generic).
   - Memilih citra arsitektur korporasi, ruang rapat dewan direksi, dan dashboard analitik data modern dari Unsplash dengan parameter web-optimized (`auto=format&fit=crop&w=1200&q=80`).

2. **Heading & Semantic Hierarchy:**
   - Memasang heading H2 berorientasi pertanyaan dan frase exact-match untuk memicu snippet "People Also Ask" dan tombol sitelinks di SERP Google.

## Risks / Trade-offs

- **[Risk]** Gambar eksternal lambat dimuat jika CDN lambat.
  - *Mitigasi:* Menggunakan Unsplash CDN teroptimasi dengan batas kompresi `q=80` dan `w=1200`.
