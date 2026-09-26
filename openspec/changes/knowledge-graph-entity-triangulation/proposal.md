## Why

Saat ini skema data terstruktur organisasi di situs web (`index.html`) mencantumkan topik keahlian (`knowsAbout`) dalam bentuk string teks biasa dan belum menghubungkan persona pakar utama (Humbul Kristiawan) ke dalam entitas korporat (`founder` / `employee`). Akibatnya, mesin pencari seperti Google Knowledge Vault dan sistem perayap AI (OpenAI, Anthropic, Perplexity) belum secara optimal mengaitkan Daya Solusi Integra dengan entitas otoritatif resmi di Knowledge Graph global (Kementerian BUMN, BPKP, BPK RI, OJK, COSO, SOX, dan ISO 31000).

Dengan mengimplementasikan triangulasi entitas melalui Schema.org `sameAs` ke Wikidata dan Wikipedia otoritas publik serta menautkan entitas pendiri/partner di homepage, kita memperkuat reputasi semantik domain dsintegra.co.id di tingkat tertinggi pencarian YMYL (Your Money Your Life).

## What Changes

- Memperkaya skema Schema.org `ProfessionalService` di `index.html`:
  - Menghubungkan entitas `founder` / `employee` merujuk ke entitas Pak Humbul Kristiawan (`#author-humbul-kristiawan`).
  - Mengonversi array `knowsAbout` dari string teks sederhana menjadi objek `Thing` semantik yang memiliki properti `name` dan `sameAs` ke tautan Wikidata dan Wikipedia resmi (Kementerian BUMN RI, BPKP, BPK RI, OJK, COSO Framework, Internal Control over Financial Reporting, Sarbanes-Oxley Act, ISO 31000).
- Memperbarui skrip generator snapshot statis (`scripts/generate-static-routes.ts`) agar injeksi skema organisasi pada seluruh prerendered HTML konsisten dengan triangulasi Knowledge Graph ini.

## Capabilities

### New Capabilities
- `knowledge-graph-entities`: Pengayaan skema terstruktur entitas organisasi dengan tautan otoritatif Wikidata/Wikipedia dan relasi kepemimpinan pakar.

### Modified Capabilities

## Impact

- `index.html`: Pembaruan blok JSON-LD `@graph` pada node `ProfessionalService`.
- `scripts/generate-static-routes.ts`: Sinkronisasi skema dasar organisasi pada snapshot prerender.
- SEO & Generative Engine Optimization: Entitas Daya Solusi Integra terdaftar secara semantik di Google Knowledge Vault dan kutipan AI.
