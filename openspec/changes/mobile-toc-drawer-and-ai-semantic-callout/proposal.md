## Why

Lebih dari 50% pembaca (khususnya auditor internal, konsultan, dan eksekutif BUMN) mengakses artikel teknis melalui perangkat seluler. Untuk meningkatkan kenyamanan navigasi tanpa harus menggulir berulang kali ke bagian atas halaman serta memaksimalkan peluang kutipan fakta definitif oleh mesin pencari AI (Google SGE / Gemini AI Overviews & Perplexity), diperlukan tombol navigasi daftar isi mengambang di layar ponsel dan markup semantik definitif pada ringkasan eksekutif artikel.

## What Changes

- Menambahkan tombol mengambang mobile (`lg:hidden fixed bottom-6 right-6 z-40`) yang memicu bottom-sheet modal daftar isi interaktif pada `src/components/BlogPage.tsx`.
- Menambahkan penanda semantik microdata `itemprop="abstract"` dan elemen kutipan definitif pada blok ringkasan eksekutif di `src/components/BlogPage.tsx` serta template prerender statis.

## Capabilities

### New Capabilities
- `mobile-toc-drawer`: Menyediakan tombol mengambang dan laci navigasi daftar isi cepat di perangkat ponsel guna meningkatkan kenyamanan membaca dan menekan bounce rate mobile.
- `ai-semantic-abstract`: Menyediakan penanda microdata semantik terstruktur pada ringkasan artikel untuk mempermudah ekstraksi langsung oleh bot pencarian generatif AI (SGE / AI Overviews).

### Modified Capabilities
<!-- None -->

## Impact

- `src/components/BlogPage.tsx`: Penambahan state `isMobileTocOpen` beserta komponen floating trigger dan modal bottom-sheet, serta penambahan atribut semantik `itemprop="abstract"`.
- `scripts/generate-static-routes.ts`: Memastikan markup semantik ringkasan eksekutif tercermin dalam snapshot statis.
