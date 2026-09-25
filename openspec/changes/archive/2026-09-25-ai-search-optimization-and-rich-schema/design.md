## Context

Repositori Daya Solusi Integra menggunakan React + Vite dengan routing client-side. File statis publik berada di direktori `public/`. Agar mesin pencari AI (GEO) dan search engine konvensional mengenali entitas korporat serta software GRC Integra secara akurat, kita perlu menyediakan file standar `/llms.txt` dan `/llms-full.txt` di root publik, menyelaraskan aturan `robots.txt`, serta memperkaya Schema.org JSON-LD di `index.html`.

## Goals / Non-Goals

**Goals:**
- Menyediakan file `/llms.txt` dan `/llms-full.txt` di folder `public/` dengan kepatuhan format Markdown ringkas, terstruktur, tanpa em-dash maupun tag AI slop.
- Mengonfigurasi `robots.txt` dengan izin akses eksplisit bagi AI agent (GPTBot, PerplexityBot, ClaudeBot, dsb.) dan penautan ke `llms.txt`.
- Memperkaya skema JSON-LD `index.html` dengan properti `@graph` yang mencakup keahlian korporat (`knowsAbout`), link jejaring profesional (`sameAs`), dan integrasi penandaan artikel teknis.

**Non-Goals:**
- Melakukan refactor arsitektur routing React atau implementasi server-side rendering penuh (rebuild) di fase ini.
- Mengubah layout visual antarmuka pengguna pada halaman beranda atau blog.

## Decisions

1. **Format Markdown Terstruktur untuk `llms.txt` & `llms-full.txt`**:
   - *Keputusan*: Memanfaatkan standar industri llms.txt dengan header `#`, `##`, deskripsi singkat entitas, dan daftar tautan kanonikal resmi (`https://dsintegra.co.id/...`).
   - *Alternatif*: Format JSON atau XML. Ditolak karena llms.txt dirancang khusus dalam format Markdown yang ramah token bagi LLM kontekstual.

2. **Pengaturan User-Agent di `robots.txt`**:
   - *Keputusan*: Mempertahankan `User-agent: * Allow: /` sembari menambahkan referensi `Disallow: /api/` dan deklarasi eksplisit untuk LLM agent.
   - *Alternatif*: Memblokir AI scraper. Ditolak karena tujuan utama kita adalah Generative Engine Optimization (GEO) agar BUMN mendapatkan rekomendasi Daya Solusi Integra saat mencari solusi di ChatGPT/Perplexity.

3. **Injeksi Data Terstruktur di `index.html`**:
   - *Keputusan*: Menambahkan properti resmi ke dalam blok `@graph` JSON-LD yang sudah ada tanpa merusak skema `ProfessionalService`, `SoftwareApplication`, `BreadcrumbList`, dan `FAQPage`.
   - *Alternatif*: Menggunakan pustaka pihak ketiga seperti `react-helmet-async`. Diputuskan untuk memanfaatkan skema statis terlebih dahulu sebelum fase prerendering dinamis diimplementasikan.

## Risks / Trade-offs

- **[Perubahan Standar AI Crawling]** → Struktur `llms.txt` mengikuti konvensi resmi komunitas (llmstxt.org) sehingga kompatibel dengan pembaca teks standar.
- **[Kerapian Kode & Strict Lint]** → Semua penambahan teks tunduk pada aturan anti-slop: zero em-dash (`—`/`–`), bebas AI buzzwords kosong, dan fokus pada terminologi regulasi BUMN yang sah.
