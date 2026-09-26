## Why

Hasil pencarian artikel blog Daya Solusi Integra di Google saat ini hanya menyajikan tautan reguler tanpa elemen interaktif tambahan. Dengan menyematkan skema terstruktur `FAQPage` (Schema.org) yang diekstraksi dari tanya-jawab kepatuhan ICOFR pada setiap artikel blog, artikel kita akan memicu Google Rich Snippets berupa dropdown accordion FAQ langsung di halaman hasil pencarian Google (SERP), meningkatkan visibilitas vertikal layar, wibawa E-E-A-T, dan Click-Through Rate (CTR).

## What Changes

- Menambahkan kumpulan data FAQ otoritatif untuk artikel-artikel blog utama pada `src/data/faqData.ts`.
- Memperbarui `scripts/generate-static-routes.ts` agar secara otomatis menyuntikkan skema `FAQPage` ke dalam tag JSON-LD pada setiap file HTML artikel statis di `dist/blog/[slug]/index.html`.
- Memperbarui komponen `src/components/BlogPage.tsx` agar menyuntikkan skema `FAQPage` yang sinkron ke dalam DOM saat artikel dibaca pengguna secara interaktif.
- Menambahkan tampilan blok FAQ visual interaktif di bagian penutup artikel blog agar pembaca dapat membaca tanya-jawab ringkas sebelum formulir CTA konsultasi.

## Capabilities

### New Capabilities
- `blog-faq-rich-snippets`: Menyediakan skema terstruktur `FAQPage` Schema.org otomatis untuk artikel-artikel blog guna memicu Google Rich Results dan accordion FAQ di SERP.

### Modified Capabilities
<!-- Tidak ada perubahan requirement pada kapabilitas yang sudah ada -->

## Impact

- File terdampak: `src/data/faqData.ts`, `scripts/generate-static-routes.ts`, dan `src/components/BlogPage.tsx`.
- Visibilitas pencarian: Meningkatkan rasio klik tayang (CTR) dari Google organik tanpa merusak desain, mematuhi standar Google Rich Results Guidelines.
- Dependensi: Nol (murni optimasi data skema JSON-LD dan render komponen React).
