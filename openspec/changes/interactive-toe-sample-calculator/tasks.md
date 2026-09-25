## 1. Pembangunan Komponen Kalkulator Tabel 22 Interaktif

- [x] 1.1 Buat komponen `src/components/pages/ToeCalculatorPage.tsx` dengan pemilih frekuensi kontrol, visualisasi rentang sampel Tabel 22, panduan metodologi audit deviasi nol, dan CTA terarah yang patuh pada `design-taste-frontend` (zero em-dash).
- [x] 1.2 Integrasikan rute `/kalkulator-sampel-toe` di `src/App.tsx`, perbarui navigasi `Header.tsx` dan `Footer.tsx` untuk menyertakan tautan kalkulator, lalu verifikasi navigasi rute berfungsi mulus.

## 2. Integrasi SEO, Metadata & SSG Prerendering

- [x] 2.1 Daftarkan rute `/kalkulator-sampel-toe` ke `src/utils/seoMeta.ts` dengan metadata kaya kata kunci dan canonical link resmi.
- [x] 2.2 Daftarkan URL resmi `https://dsintegra.co.id/kalkulator-sampel-toe` ke dalam `public/sitemap.xml` dan cantumkan dalam `public/llms.txt`, lalu verifikasi struktur XML dan Markdown.

## 3. Verifikasi & Pre-flight Check

- [x] 3.1 Jalankan pemindaian anti-slop pada kode baru untuk memastikan nol kemunculan tanda em-dash (`—`/`–`), `Sparkles`, atau `animate-pulse` kosmetik.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi proses build dan generasi rute statis sukses 100% (Exit code 0).
