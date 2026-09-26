## Why

Untuk memperkuat perayapan internal (*internal crawl depth*), mengalirkan PageRank ke seluruh artikel pilar, serta menekan *bounce rate* pembaca eksekutif di akhir artikel blog, website membutuhkan navigasi linier terstruktur (*Next & Previous Article Navigation*) dan kartu kluster artikel terkait (*Related Cluster Cards*). Selain itu, halaman direktori katalog `/blog` membutuhkan skema Schema.org `ItemList` agar Google Search mengenali hierarki urutan seluruh artikel wawasan GRC.

## What Changes

- Menambahkan komponen navigasi `[Artikel Sebelumnya]` dan `[Artikel Selanjutnya]` di akhir setiap artikel blog pada `src/components/BlogPage.tsx`.
- Menambahkan grid rekomendasi 2 artikel kluster terkait berdasarkan kategori atau kesamaan tag di `src/components/BlogPage.tsx`.
- Menginjeksi skema JSON-LD `ItemList` pada berkas HTML statis `/blog` melalui `scripts/generate-static-routes.ts`.

## Capabilities

### New Capabilities
- `blog-sequential-navigation`: Menyediakan navigasi dua arah (Next/Prev) dan rekomendasi kluster artikel untuk sirkulasi internal linking yang berkesinambungan.
- `blog-itemlist-schema`: Menyediakan markup terstruktur Schema.org/ItemList untuk katalog artikel blog pada prerender static HTML.

### Modified Capabilities
<!-- None -->

## Impact

- `src/components/BlogPage.tsx`: Penambahan kalkulasi navigasi `prevPost`, `nextPost`, dan `relatedClusterPosts` serta elemen UI pendukung.
- `scripts/generate-static-routes.ts`: Penambahan generator JSON-LD `ItemList` khusus rute `/blog`.
