## Why

Untuk memperkuat dominasi penelusuran baik pada mesin pencari tradisional (Google) maupun mesin pencari AI generatif (GEO/LLM Search seperti Perplexity, ChatGPT Search, Claude, dan Copilot), Daya Solusi Integra membutuhkan:
1. Penyempurnaan standarisasi GEO (`llms.txt` dan `llms-full.txt`) dengan rujukan normatif entitas BUMN, panduan sampling SK-5, dan modul software GRC Integra.
2. Contextual Related Entities & Interactive Tool Widgets di halaman detail artikel blog (`/blog/:slug`) untuk menghubungkan topik bahasan secara langsung ke kalkulator regulasi (`/kalkulator-sampel-toe`, `/asesmen-maturitas`), entitas glosarium (`/glosarium`), dan silo layanan pilar (`/layanan/*`), guna menurunkan *bounce rate*, memperpanjang *dwell time*, dan membangun *semantic entity graph* yang kuat.

## What Changes

1. **Penyempurnaan GEO Context (`llms.txt` & `llms-full.txt`)**:
   - Memperbarui `public/llms.txt` dan `public/llms-full.txt` agar mencakup tautan ke semua pilar layanan, kalkulator regulasi, glosarium, dan studi kepatuhan SK-5 BUMN terbaru.
   - Memastikan `public/robots.txt` secara eksplisit mengizinkan bot AI terkemuka (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Applebot-Extended`, `Google-Extended`) dan mereferensikan direktori `llms.txt`.
2. **Contextual Entity & Tool Widget di Blog (`RelatedEntitiesWidget`)**:
   - Membuat komponen UI yang elegan (`src/components/RelatedEntitiesWidget.tsx`) dengan desain arsitektural solid *Ink Navy*, border tipis, dan zero em-dash sesuai mandat `design-taste-frontend`.
   - Mengintegrasikan pemetaan entitas otomatis atau berbasis tag/topik artikel (contoh: artikel TOE otomatis menyematkan Callout Kalkulator Sampel TOE + Glosarium Tabel 22; artikel ITGC menyematkan rujukan POJK dan layanan ITGC; artikel regulasi menyematkan Asesmen Maturitas).
   - Menyematkan widget ini di bagian akhir artikel tepat sebelum bottom CTA box pada `src/components/BlogPage.tsx`.

## Capabilities

### Modified Capabilities
- `ai-search-optimization`: Memperluas cakupan format `llms.txt` dan `llms-full.txt` dengan matriks tautan tools interaktif dan silo layanan resmi, serta verifikasi `robots.txt`.

### New Capabilities
- `blog-entity-cross-linking`: Menyediakan widget entitas kontekstual (`RelatedEntitiesWidget`) pada halaman artikel blog yang memetakan tag/topik artikel ke alat kalkulator regulasi, istilah glosarium, dan halaman silo layanan.

## Impact

- **Files**: `public/llms.txt`, `public/llms-full.txt`, `public/robots.txt`, `src/components/RelatedEntitiesWidget.tsx`, `src/components/BlogPage.tsx`.
- **SEO & UX**: Meningkatkan autoritas semantik artikel blog melalui *internal entity cross-linking*, mempertinggi retensi pembaca eksekutif BUMN dengan tautan langsung ke alat kalkulator/asesmen kerja, serta memastikan crawler LLM memiliki rujukan otoritatif terindeks.
