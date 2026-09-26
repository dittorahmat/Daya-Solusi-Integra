## Why

Website Daya Solusi Integra (`https://dsintegra.co.id`) telah memiliki struktur silo, kalkulator interaktif, dan 21 entitas glosarium regulasi SK-5 BUMN. Namun, pengindeksan oleh mesin pencari modern (Google, Bing, Yandex) dan crawler AI (ChatGPT/Perplexity/Copilot) masih bergantung pada interval perayapan pasif. 

Selain itu, Google SERP belum optimal menampilkan *Rich Sitelinks* karena ketiadaan skema terstruktur `SiteNavigationElement` pada navigasi utama, serta pembaharuan dokumen AI discovery (`llms.txt` dan `llms-full.txt`) masih dilakukan secara manual sehingga rentan tidak sinkron ketika ada artikel atau rute baru.

Perubahan ini menerapkan protokol IndexNow, menyematkan Schema.org `SiteNavigationElement` dan `WebSite`, serta mengotomatisasi generasi `llms.txt` dan `llms-full.txt` pada build pipeline untuk mendongkrak visibilitas instan dengan rasio *low effort, high impact*.

## What Changes

- **IndexNow Protocol Integration**: Menyediakan berkas kunci verifikasi IndexNow di direktori `public/` dan referensi di `public/robots.txt` agar mesin pencari (Bing, Seznam, Naver, Yandex) dapat menerima notifikasi instan saat halaman baru diterbitkan.
- **SiteNavigationElement & WebSite Search Schema**: Menyuntikkan schema JSON-LD navigasi hirarkis (`SiteNavigationElement`) pada template HTML dan prerender snapshots agar Google menampilkan Expanded Rich Sitelinks di SERP (Layanan, Platform, Kalkulator, Glosarium, Blog).
- **Automated AI Discovery Feed (`llms.txt` & `llms-full.txt`)**: Mengintegrasikan pembuatan otomatis berkas Markdown AI context di `scripts/generate-static-routes.ts` yang membaca seluruh artikel blog, platform, dan 21 item glosarium secara dinamis saat `npm run build`.

## Capabilities

### New Capabilities
- `technical-seo-indexnow-sitelinks-ai-sync`: Menyediakan kapabilitas pengindeksan instan via IndexNow, skema navigasi sitelinks SERP, dan sinkronisasi otomatis konteks LLM AI.

### Modified Capabilities
<!-- None -->

## Impact

- `scripts/generate-static-routes.ts`: Penambahan generator otomatis untuk `llms.txt`, `llms-full.txt`, serta penyematan `SiteNavigationElement` JSON-LD.
- `public/robots.txt`: Deklarasi URL endpoint / file verifikasi IndexNow.
- `public/[indexnow-key].txt`: Berkas verifikasi kunci IndexNow.
- Build output di `dist/` dan `public/` selalu terbarui secara konsisten setiap build.
