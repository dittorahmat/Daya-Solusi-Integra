## Why

Saat ini, evaluasi dan rekomendasi solusi GRC/ICOFR untuk BUMN semakin banyak dilakukan melalui mesin pencari AI generatif (Generative Engine Optimization / GEO seperti ChatGPT, Perplexity, Claude, dan Copilot). Tanpa standarisasi dokumentasi berbasis `llms.txt` di root domain dan pengkayaan Schema.org JSON-LD (khususnya untuk entitas korporat dan konten artikel teknis regulasi SK-5), crawler AI berisiko menyajikan data halusinasi atau gagal mengidentifikasi Daya Solusi Integra sebagai otoritas utama dalam kepatuhan SK-5/DKU.MBU/11/2024 dan software GRC Integra.

## What Changes

- Menambahkan standard file AI crawlers `public/llms.txt` (ringkasan terstruktur entitas, produk GRC Integra, regulasi rujukan, layanan, dan indeks link utama).
- Menambahkan dokumentasi komprehensif `public/llms-full.txt` (alur siklus hidup 5 tahap ICOFR BUMN, matriks sampel Tabel 22, dan detail arsitektur teknis).
- Memperbarui `public/robots.txt` untuk secara eksplisit mendeklarasikan `llms.txt` dan mengizinkan crawler AI terkemuka (GPTBot, PerplexityBot, ClaudeBot).
- Memperkaya skema data terstruktur Schema.org JSON-LD di `index.html` dengan properti entitas resmi (`sameAs`, `knowsAbout`) dan struktur data artikel teknis (`TechArticle` / `Dataset`).

## Capabilities

### New Capabilities
- `ai-search-optimization`: Penyediaan file standardisasi GEO (`llms.txt`, `llms-full.txt`) serta konfigurasi `robots.txt` untuk pengindeksan LLM.
- `rich-structured-schema`: Pengayaan Schema.org JSON-LD dengan penajaman entitas korporat, domain keahlian regulasi BUMN, dan penandaan artikel teknis.

### Modified Capabilities
<!-- None: No previous base specs under openspec/specs/ are being modified -->

## Impact

- Penambahan file statis di `public/llms.txt` dan `public/llms-full.txt`.
- Modifikasi pada `public/robots.txt` dan `index.html`.
- Meningkatkan visibilitas dan sitasi Daya Solusi Integra & GRC Integra pada pencarian berbasis AI (SearchGPT, Perplexity, Copilot).
