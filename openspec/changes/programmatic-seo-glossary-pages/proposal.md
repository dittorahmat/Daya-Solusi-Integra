# Proposal: Programmatic SEO Glossary Entity Pages

## Why

Saat ini, glosarium kepatuhan regulasi SK-5 BUMN dan kerangka COSO di Daya Solusi Integra hanya tersedia dalam 1 halaman tunggal (`/glosarium`). Hal ini membatasi keterlihatan di mesin pencari untuk kueri definisi spesifik (*long-tail keywords*) seperti "apa itu TOD BUMN", "kriteria defisiensi material SK-5", atau "definisi ITGC perbankan". 

Dengan membangun arsitektur Programmatic SEO berbasis 20 entitas data glosarium yang sudah terstruktur di `src/data/glossaryData.ts`, Daya Solusi Integra dapat melipatgandakan URL terindeks berkualitas tinggi dari 1 URL menjadi 21 URL individual (`/glosarium/:slug`), merebut Google Featured Snippets dengan Schema `DefinedTerm`, dan menyalurkan aliran otoritas (*link equity*) secara terarah ke halaman layanan dan produk utama.

## What Changes

1. **Rute Dinamis Glosarium (`/glosarium/:slug`)**: Menyediakan rute detail tersendiri untuk setiap istilah di `GLOSSARY_ITEMS` dengan URL bersih dan deskriptif.
2. **Komponen Halaman Detail Entitas Glosarium (`GlossaryDetailPage`)**:
   - Breadcrumb ramah crawl (*Beranda > Glosarium > [Nama Istilah]*).
   - Heading definisi otoritatif dengan tag regulasi (`SK-5/DKU.MBU/11/2024`, `COSO Framework`, dsb.).
   - Blok Definisi Resmi, Catatan Praktisi (*Key Takeaway*), dan Tautan Kontekstual Layanan/Produk.
   - Navigasi lintas istilah terkait (*Related Terms*) dalam kategori yang sama.
   - Card CTA kontekstual yang mengonversi pembaca istilah ke layanan konsultasi atau live demo GRC Integra.
3. **Pembaruan Dynamic Metadata & Schema.org JSON-LD**:
   - Integrasi metadata per slug di `seoMeta.ts` (Title dinamis, meta description, open graph, canonical).
   - Injeksi terstruktur Schema.org `@type: DefinedTerm` dan `@type: BreadcrumbList` untuk memaksimalkan peluang *Google Definition Featured Snippet*.
4. **Indeksasi Mesin Pencari & Discovery**:
   - Mendaftarkan seluruh 20 rute individual `/glosarium/:slug` ke `public/sitemap.xml` dengan prioritas `0.85` dan frekuensi perubahan bulanan.
   - Menghubungkan setiap kartu di halaman index `/glosarium` dengan link navigasi langsung menuju halaman detail masing-masing istilah.

## Capabilities

### New Capabilities
- `glossary-programmatic-seo`: Penyediaan halaman detail individual per istilah glosarium berbasis slug dinamis, integrasi metadata reaktif, injeksi structured data `DefinedTerm`, dan registrasi sitemap.

### Modified Capabilities
<!-- Tidak ada spesifikasi eksisting yang diubah perilakunya -->

## Impact
- **Routing**: `src/App.tsx` akan mendukung penanganan rute path `/glosarium/:slug`.
- **Komponen**: Penambahan `src/components/pages/GlossaryDetailPage.tsx` dan penyuntingan kartu pada `src/components/pages/GlossaryPage.tsx` agar menyematkan tautan ke slug detail.
- **SEO & Metadata**: Penambahan helper entitas glosarium di `src/utils/seoMeta.ts` dan pembaruan `public/sitemap.xml`.
- **Design System**: Mematuhi aturan desain korporat BUMN, dark canvas (`#0b0f19`), single CTA intent, dan larangan tanda hubung em-dash/en-dash.
