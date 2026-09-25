## Why

Saat ini link website, rute layanan, alat bantu interaktif, dan artikel blog yang dibagikan ke media sosial atau aplikasi perpesanan (WhatsApp, LinkedIn, Twitter/X) belum memiliki metadata gambar pratinjau (`og:image` dan `twitter:image`). Hal ini menurunkan rasio klik tayang (CTR), mengurangi otoritas profesional B2B BUMN, serta menghambat potensi keterpilihan artikel di Google Discover. Selain itu, seluruh berkas HTML hasil *static route snapshot prerender* saat ini masih mewarisi satu blok skema JSON-LD monolitik dari `index.html`, sehingga memicu *noise* dan potensi peringatan struktur data pada Google Search Console untuk halaman-halaman yang bukan merupakan artikel teknis.

## What Changes

- Menambahkan aset gambar pratinjau media sosial korporat resmi (`/og-image.jpg`) beresolusi standar 1200x630 pixel yang mematuhi identitas warna BUMN Dark Navy dan BUMN Gold.
- Menambahkan dukungan metadata `image` pada antarmuka rute di `src/utils/seoMeta.ts` dan fungsi reaktif `updateDocumentMeta` client-side.
- Memperluas skrip build SSG `scripts/generate-static-routes.ts` untuk menginjeksi meta tag Open Graph Image (`og:image`, `og:image:width`, `og:image:height`, `og:image:type`) dan Twitter Card Image (`twitter:image`, `twitter:card`) secara otomatis ke setiap rute statis.
- Memetakan `coverImage` artikel blog secara dinamis ke meta tag sosial untuk seluruh URL artikel blog (`/blog/*`).
- Membersihkan dan memisahkan injeksi skema JSON-LD per rute di `scripts/generate-static-routes.ts`:
  - Rute Beranda (`/`): Memuat skema `ProfessionalService` korporat dan `FAQPage`.
  - Rute Platform & Kalkulator (`/platform/grc-integra`, `/kalkulator-sampel-toe`, `/asesmen-maturitas`): Memuat skema `SoftwareApplication` / `WebApplication` dan `BreadcrumbList`.
  - Rute Artikel Blog (`/blog/*`): Memuat skema spesifik `TechArticle` / `Article` dengan author, penerbit, dan gambar terkait, tanpa duplikasi FAQ beranda.
  - Rute Glosarium & Layanan: Memuat skema `BreadcrumbList` dan entity service yang relevan.

## Capabilities

### Modified Capabilities
- `dynamic-seo-meta`: Menambahkan dukungan field gambar Open Graph/Twitter dan penanganan injeksi meta gambar reaktif di sisi klien.
- `static-prerender-generator`: Menambahkan injeksi tag Open Graph Image serta modularisasi skema JSON-LD spesifik per rute saat static snapshot generation.

## Impact

- Berkas terpengaruh: `public/og-image.jpg`, `index.html`, `src/utils/seoMeta.ts`, `scripts/generate-static-routes.ts`.
- Dampak eksternal: Tampilan pratinjau tautan WhatsApp/LinkedIn/Twitter tampil dengan gambar banner profesional, dan kebersihan data terstruktur pada Google Rich Results Test & Search Console meningkat signifikan.
