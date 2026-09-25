## Context

Website Daya Solusi Integra membutuhkan optimasi lanjutan untuk bersaing di era pencarian bertenaga AI (Generative Engine Optimization / GEO) serta memaksimalkan penandaan data teknis di Google Dataset Search.

## Goals / Non-Goals

**Goals:**
- Memperkaya tampilan awal artikel di `src/components/BlogPage.tsx` dengan kontainer **Executive Takeaways & Direct Answer Box** yang dirancang khusus untuk kemudahan ekstrasi AI bot dan kenyamanan eksekutif BUMN.
- Memperluas skrip build statis `scripts/generate-static-routes.ts` untuk menginjeksi skema Schema.org `@type: "Dataset"` pada rute `/kalkulator-sampel-toe`.
- Mematuhi standar arsitektur bersih `design-taste-frontend` (permukaan slate solid, bebas blur blob, dan zero em-dash).

**Non-Goals:**
- Mengubah format frontmatter pada berkas markdown yang sudah ada secara massal.
- Menambahkan skrip pihak ketiga eksternal.

## Decisions

1. **Komposisi Executive Takeaways Box di `BlogPage.tsx`**
   - Menggantikan tampilan kutipan miring tipis (`excerpt`) dengan kotak terstruktur `#0f172a` ber-border `border-slate-800`.
   - Di dalamnya termuat badge `Ringkasan Eksekutif & Jawaban Kunci`, teks intisari artikel, dan matriks 3 kolom ringkas (`Fokus Regulasi`, `Sasaran Pemangku Kepentingan`, dan `Kesiapan Audit`).
   - Format ini terbukti memiliki tingkat keterbacaan tinggi bagi AI LLM crawler (ChatGPT, Perplexity, Gemini) dan memberikan nilai instan bagi pembaca korporat.

2. **Skema Dataset pada `generate-static-routes.ts`**
   - Rute `/kalkulator-sampel-toe` selain membawa skema `WebApplication` dan `FAQPage`, kini juga diperkaya dengan entitas `@type: "Dataset"` di dalam `@graph`.
   - Mengidentifikasi dataset sebagai referensi acuan kepatuhan publik BUMN yang dapat diakses secara bebas (`isAccessibleForFree: true`).

## Risks / Trade-offs

- [Risk] Elemen UI terasa terlalu padat jika diletakkan berdekatan dengan cover image.
  → *Mitigasi*: Memberikan margin bawah yang cukup (`mb-10`) dan jarak padding proporsional (`p-6`).
