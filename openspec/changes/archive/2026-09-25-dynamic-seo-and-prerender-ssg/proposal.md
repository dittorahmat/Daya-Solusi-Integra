## Why

Aplikasi saat ini beroperasi sebagai React Single Page Application (SPA). Meskipun interaktivitas di browser sangat responsif, tag `<head>` (seperti `<title>`, `<meta name="description">`, dan pratinjau kartu Open Graph / Twitter) masih tertahan pada teks beranda saat pengunjung atau bot sosial (WhatsApp, LinkedIn, Twitter/X, Bing bot, Googlebot) mengakses subhalaman atau artikel blog spesifik secara langsung. Diperlukan pengelola metadata rute dinamis serta mekanisme generator HTML statis pasca-build (SSG Prerendering) agar setiap rute memiliki berkas HTML fisik dengan metadata dan konten awal yang lengkap tanpa harus membangun ulang (rebuild) proyek dari nol.

## What Changes

- Menambahkan utilitas pengelola metadata dinamis client-side (`src/utils/seoMeta.ts` atau hook `useSeoMeta`) untuk memperbarui `<title>`, meta deskripsi, canonical URL, dan Open Graph tags setiap kali rute browser berubah.
- Menambahkan skrip generator HTML statis pasca-build (`scripts/generate-static-routes.ts`) yang menghasilkan berkas `index.html` fisik ber-metadata presisi untuk setiap rute resmi (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`, `/layanan/enterprise-grc`, `/platform/grc-integra`, `/asesmen-maturitas`, `/glosarium`, dan seluruh rute `/blog/:slug`).
- Mengintegrasikan skrip generator ke dalam siklus `npm run build` sehingga folder `dist/` siap didistribusikan ke web server dengan kemampuan instant-preview dan full SEO indexability.

## Capabilities

### New Capabilities
- `dynamic-seo-meta`: Pengelolaan metadata `<title>`, `<meta description>`, `canonical`, dan Open Graph secara dinamis pada runtime client-side untuk setiap rute halaman.
- `static-prerender-generator`: Generator HTML rute statis pasca-build yang menyuntikkan metadata dan teks halaman awal ke dalam subfolder `dist/` untuk crawler bot dan pratinjau media sosial.

### Modified Capabilities
<!-- None: No previous base specs under openspec/specs/ are being modified -->

## Impact

- Penambahan berkas `src/utils/seoMeta.ts` dan `scripts/generate-static-routes.ts`.
- Pembaruan konfigurasi `package.json` untuk menjalankan generator rute statis secara otomatis setelah `vite build`.
- Pengalaman pratinjau link di WhatsApp, LinkedIn, dan hasil pencarian mesin peramban menjadi presisi 100% per subhalaman.
