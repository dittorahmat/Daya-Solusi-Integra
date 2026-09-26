# Technical Design: Clean URL SSG Serving & Glossary Slug Fix

## Architecture Overview
Arsitektur ini menghilangkan ketergantungan pada redirect otomatis bawaan `express.static` saat berhadapan dengan struktur direktori prerender statis.

```
+-----------------------------------------------------------------------------+
|                                Request HTTP                                 |
+-----------------------------------------------------------------------------+
                                       │
                                       ▼
      +-----------------------------------------------------------------+
      | 1. Trailing Slash Normalizer:                                   |
      |    Jika URL berakhiran "/" (misal /glosarium/elc/), 301 ke      |
      |    /glosarium/elc                                               |
      +-----------------------------------------------------------------+
                                       │
                                       ▼
      +-----------------------------------------------------------------+
      | 2. Clean URL Prerender Interceptor:                             |
      |    Cek apakah `dist/<cleanPath>/index.html` ada di disk?        |
      |    - YA  --> res.sendFile(candidateFile) [Status 200 OK]        |
      |    - TDK --> next()                                             |
      +-----------------------------------------------------------------+
                                       │
                                       ▼
      +-----------------------------------------------------------------+
      | 3. Express Static Assets:                                       |
      |    Layani assets (/assets/*, favicon, robots.txt, sitemap.xml)  |
      +-----------------------------------------------------------------+
                                       │
                                       ▼
      +-----------------------------------------------------------------+
      | 4. SPA Catch-All Fallback:                                      |
      |    Kirim dist/index.html untuk rute dinamis klien               |
      +-----------------------------------------------------------------+
```

## Implementation Details
1. **`server.ts`**:
   - Pasang middleware interceptor sebelum `express.static(distPath)`.
   - Menggantikan logika manual `routeSeoMeta` yang tidak lengkap karena prerender generator telah memproduksi 45 rute lengkap dengan metadata dan JSON-LD.
2. **`src/App.tsx` & `GlossaryDetailPage.tsx`**:
   - Terapkan `.replace(/^\/+|\/+$/g, "").toLowerCase()` pada ekstraksi slug glosarium.
