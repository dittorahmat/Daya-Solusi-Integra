## Why

Website Daya Solusi Integra membutuhkan peningkatan visibilitas pencarian (SERP Real Estate) pada kata kunci strategis regulasi ICOFR BUMN, pengujian TOE, dan platform GRC Integra. Saat ini, halaman layanan dan kalkulator belum memiliki skema terstruktur `FAQPage` maupun komponen FAQ visual untuk menjawab pertanyaan umum eksekutif BUMN dan praktisi kepatuhan.

Implementasi FAQ Section dan `FAQPage` JSON-LD schema merupakan inisiatif *low effort & high impact* untuk:
1. Memperbesar ukuran tampilan hasil pencarian di Google SERP dengan dropdown FAQ interaktif (*Rich Results*).
2. Mempermudah mesin pencari AI (Perplexity, ChatGPT Search, Gemini, dan Google AI Overview) mengutip jawaban resmi DSI secara langsung.
3. Menjawab pertanyaan krusial pemangku kepentingan BUMN secara transparan langsung di halaman layanan.

## What Changes

- Menambahkan kumpulan data FAQ terstruktur berstandar regulasi SK-5 BUMN di `src/data/faqData.ts` untuk 3 halaman kunci (`/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, dan `/platform/grc-integra`).
- Menambahkan komponen UI `FaqSection.tsx` yang bersih, modern, dan aksesibel tanpa visual slop (mematuhi aturan `design-taste-frontend`).
- Memasang komponen FAQ pada halaman `/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, dan `/platform/grc-integra`.
- Memperluas skrip build statis `scripts/generate-static-routes.ts` untuk secara otomatis menghasilkan skema Schema.org `@type: "FAQPage"` pada file HTML statis yang memiliki FAQ.

## Capabilities

### New Capabilities
- `faq-accordion-and-schema`: Penyediaan komponen UI accordion tanya-jawab regulasi BUMN serta injeksi otomatis Schema.org `FAQPage` pada rute yang relevan.

### Modified Capabilities
- `rich-structured-schema`: Menambahkan persyaratan bahwa halaman layanan dan alat interaktif tertentu wajib menyertakan skema `@type: "FAQPage"` selain skema `Service`, `SoftwareApplication`, atau `WebApplication`.

## Impact

- Kode Frontend: Komponen baru `FaqSection.tsx`, modul data `src/data/faqData.ts`, pembaruan pada `IcofrBumnPage.tsx`, `ToeCalculatorPage.tsx`, dan `PlatformProductPage.tsx`.
- Skrip Build & SEO: `scripts/generate-static-routes.ts` untuk injeksi skema `FAQPage` saat kompilasi rute statis.
- Zero breaking changes pada routing maupun API backend.
