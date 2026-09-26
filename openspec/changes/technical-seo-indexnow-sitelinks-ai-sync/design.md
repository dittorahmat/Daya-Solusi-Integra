## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini proses build menggunakan `scripts/generate-static-routes.ts` untuk merender static snapshots dan `feed.xml`. Sistem perlu diperluas untuk menyertakan generator otomatis `llms.txt` dan `llms-full.txt`, menyematkan skema `SiteNavigationElement` pada `index.html` dan snapshot statis, serta menambahkan token verifikasi IndexNow di `public/`.

## Goals / Non-Goals

**Goals:**
- Menghasilkan berkas API key IndexNow di `public/` dan meregistrasikannya di `robots.txt`.
- Menambahkan skema JSON-LD `SiteNavigationElement` dan `WebSite` pada template root dan generator rute statis.
- Mengotomatisasi penulisan `llms.txt` dan `llms-full.txt` di `scripts/generate-static-routes.ts` yang mengagregasi semua artikel blog dan entitas glosarium.

**Non-Goals:**
- Mengubah layout visual antarmuka UI komponen frontend.
- Mengubah basis data atau API backend dinamis.

## Decisions

### 1. IndexNow API Key Placement & Formatting
- **Keputusan:** Menggunakan format hexadecimal 32 karakter standar (`d51n739r4c01d1nd3xn0wk3y202609`) disimpan di `public/[key].txt` yang berisi key tersebut.
- **Rasional:** Sesuai spesifikasi resmi protocol IndexNow (Bing/Yandex/Seznam). Berkas disajikan langsung sebagai file teks statis murni.

### 2. SiteNavigationElement Injection
- **Keputusan:** Ditambahkan ke dalam graph schema JSON-LD di `index.html` dan disuntikkan ke seluruh snapshot rute statis melalui `buildJsonLdForRoute()` di `scripts/generate-static-routes.ts`.
- **Daftar Sitelinks yang Didaftarkan:**
  1. Layanan Konsultasi ICOFR BUMN (`/layanan/icofr-bumn`)
  2. Platform GRC Integra (`/platform/grc-integra`)
  3. BPM Workflow Editor (`/platform/bpm-workflow-editor`)
  4. Kalkulator Sampel TOE (`/kalkulator-sampel-toe`)
  5. Glosarium Regulasi SK-5 (`/glosarium`)
  6. Artikel & Wawasan Kepatuhan (`/blog`)

### 3. Automated LLMs Documentation Generator
- **Keputusan:** Mengintegrasikan fungsi `generateLlmsFiles()` ke dalam `scripts/generate-static-routes.ts`. Fungsi ini mengekstrak front-matter setiap file `.md` dalam `src/content/blog/` dan item dari `src/data/glossaryData.ts`, lalu menulis hasilnya ke `dist/llms.txt`, `public/llms.txt`, `dist/llms-full.txt`, dan `public/llms-full.txt`.
- **Rasional:** Mencegah drift konten antara penambahan artikel baru dengan referensi LLM crawler.

## Risks / Trade-offs

- **[Risk]** File llms-full.txt menjadi terlalu besar jika artikel blog bertambah puluhan.
  - *Mitigasi:* Format `llms-full.txt` menyertakan ringkasan eksekutif dan cuplikan intisari pasal/metodologi, bukan seluruh raw aset media.
- **[Risk]** Schema JSON-LD berlebih menyebabkan bloating pada DOM.
  - *Mitigasi:* Skema `SiteNavigationElement` dirancang ringkas dengan 6 entitas navigasi utama level atas.
