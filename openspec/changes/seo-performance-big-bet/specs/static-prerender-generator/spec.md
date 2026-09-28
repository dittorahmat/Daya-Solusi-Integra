# Spec Delta

## MODIFIED Requirements

### Requirement: Image Sitemap Penuh Untuk Seluruh URL
Sistem SHALL menyertakan entri `image:image` pada `sitemap.xml` untuk seluruh 54 URL, memakai `coverImage` front-matter untuk artikel blog dan OG image per silo (`og-image`, `og-layanan`, `og-platform`, `og-toolkit`) untuk halaman non-blog. URL gambar `coverImage` artikel blog SHALL berupa URL lokal `https://dsintegra.co.id/images/blog/*` (bukan `images.unsplash.com`), dan setiap snapshot prerender SHALL tetap terhidrasi normal ketika bundle aplikasi dipecah menjadi chunk malas.

#### Scenario: Validasi cakupan image sitemap
- **WHEN** `sitemap.xml` divalidasi terhadap skema dengan namespace gambar
- **THEN** setiap entri `<url>` memuat tepat satu atau lebih `<image:image>` yang URL-nya dapat diakses (status 200 dengan content-type gambar).

#### Scenario: Hidrasi snapshot dengan chunk malas
- **WHEN** pengguna membuka snapshot prerender rute mana pun dengan cache kosong
- **THEN** aplikasi React terhidrasi tanpa error console dan interaksi (navigasi, advisor, asesmen) berfungsi, dengan chunk halaman dimuat sesuai rute yang dibuka.
