## Why

Mesin pencari berbasis AI generasi baru (ChatGPT Search, Perplexity, Google AI Overviews, dan Gemini) mengutamakan penarikan informasi dari situs yang menyediakan blok definisi lugas dan ringkasan eksekutif (*Key Takeaways*) terstruktur di bagian awal konten. Selain itu, parameter pengujian sampling Tabel 22 Regulasi SK-5 BUMN di `/kalkulator-sampel-toe` merupakan aset data normatif nasional yang bernilai tinggi bila ditandai dengan skema Schema.org `Dataset` agar diindeks oleh Google Dataset Search.

Inisiatif ini menggabungkan optimasi GEO (*Generative Engine Optimization*) pada halaman artikel dengan penambahan skema `Dataset` guna memperkuat otoritas E-E-A-T DSI secara cepat dan terukur.

## What Changes

- Memperbarui komponen baca artikel `src/components/BlogPage.tsx` dengan menyematkan **Executive Takeaways & Direct Answer Box** bergaya arsitektural solid (`#0f172a`, `border-slate-800`), berisi ringkasan definisi lugas serta matriks fakta kunci regulasi (Fokus Regulasi, Sasaran Pemangku Kepentingan, dan Kesiapan Audit) tanpa tanda em-dash (— atau –).
- Memperluas skrip generator rute statis `scripts/generate-static-routes.ts` untuk menyuntikkan skema Schema.org `@type: "Dataset"` pada rute `/kalkulator-sampel-toe`.

## Capabilities

### New Capabilities
- `geo-executive-takeaways`: Penyediaan blok ringkasan eksekutif dan poin fakta regulasi kunci di awal setiap artikel blog guna memfasilitasi kutipan langsung (*direct quotation*) oleh mesin pencari AI.

### Modified Capabilities
- `rich-structured-schema`: Menambahkan persyaratan bahwa rute alat pengujian sampel `/kalkulator-sampel-toe` wajib menyertakan skema `@type: "Dataset"` yang mendefinisikan variabel frekuensi kontrol dan batas ukuran sampel.

## Impact

- Kode Frontend: Pembaruan tampilan pembuka artikel pada `src/components/BlogPage.tsx`.
- Skrip Build & Prerender: `scripts/generate-static-routes.ts` menambahkan skema `Dataset` pada rute kalkulator.
- Zero breaking changes pada rute, backend API, maupun state aplikasi.
