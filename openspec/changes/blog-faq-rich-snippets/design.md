## Context

Saat ini berkas `src/data/faqData.ts` memuat FAQ untuk halaman layanan, kalkulator, dan rute institusional, tetapi belum mencakup entri spesifik per artikel blog. Akibatnya, artikel blog hanya memiliki skema `TechArticle` dan tidak mendapatkan rich snippet berupa dropdown FAQ di Google.

## Goals / Non-Goals

**Goals:**
- Mendaftarkan kumpulan FAQ berbasis regulasi dan kepatuhan praktis untuk artikel-artikel blog utama pada `src/data/faqData.ts`.
- Mengintegrasikan injeksi skema `FAQPage` di generator statis `scripts/generate-static-routes.ts` dan di `src/components/BlogPage.tsx`.
- Menyajikan accordion UI yang bersih, elegan, dan anti-slop pada artikel blog di web.

**Non-Goals:**
- Mengubah teks narasi markdown inti yang sudah ada.

## Decisions

### 1. Struktur Data Terpusat di `faqData.ts`
- Menggunakan path artikel blog sebagai key di `ROUTE_FAQS` (misal `/blog/manfaat-aplikasi-icofr-bumn-spreadsheet`, `/blog/panduan-sk5-icofr-grc-integra`, `/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5`, dsb.).
- **Alasan**: `ROUTE_FAQS` sudah dikonsumsi secara universal oleh `generate-static-routes.ts`, sehingga penambahan rute blog ke dalam map ini secara otomatis akan menghasilkan skema JSON-LD dan konten semantik HTML tanpa perlu membuat fungsi terpisah.

### 2. Sinkronisasi Skema Dinamis di `BlogPage.tsx`
- Menambahkan skema `FAQPage` ke dalam payload `articleSchema` jika `ROUTE_FAQS['/blog/' + activePost.slug]` tersedia.

## Risks / Trade-offs

- **[Risk] Google Rich Results Policy Violation**:
  → *Mitigasi*: Seluruh pertanyaan dan jawaban yang dimasukkan ke skema `FAQPage` harus ditampilkan secara transparan di konten halaman (*visible to users*), tidak boleh tersembunyi murni di JSON-LD saja.
