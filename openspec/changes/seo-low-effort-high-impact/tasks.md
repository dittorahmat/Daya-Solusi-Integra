# Tasks

## 1. Head Hygiene (Favicon + Manifest)

- [x] 1.1 Tambahkan `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`, dan `manifest.webmanifest` ke `public/`, referensikan dari `index.html`, dan verifikasi via `npm run build` + cek file ada di `dist/` dan tag terbawa ke snapshot prerender contoh (`dist/kalkulator-sampel-toe/index.html`).
- [x] 1.2 Verifikasi ikon termuat (status 200 untuk tiap file ikon + manifest) dan tidak ada duplikasi tag head pada snapshot prerender.

## 2. Static Serving Performance

- [x] 2.1 Tambahkan kompresi respons dan `Cache-Control: public, max-age=31536000, immutable` khusus `/assets/*` di `server.ts` produksi, dan verifikasi header `Content-Encoding` + `Cache-Control` muncul pada respons `/assets/*.js` serta TIDAK muncul pada dokumen HTML dan `/api/*`.
- [x] 2.2 Verifikasi rate-limit, trailing-slash 301, dan prerender interceptor tetap berfungsi (spot-check: HTML route 200, `/api/unknown` 404 JSON, trailing-slash 301).

## 3. Prerender Blog Link Integrity

- [x] 3.1 Perbaiki 6 internal link `/blog` di `scripts/seo/semantic-body.ts` agar cocok dengan slug aktual `src/content/blog/`, tambahkan guard build untuk href tak cocok, dan verifikasi `npm run build` tanpa peringatan slug + seluruh href `/blog/<slug>` pada `dist/blog/index.html` mengembalikan file yang ada.
- [x] 3.2 Verifikasi `sitemap.xml` dan `feed.xml` pasca-build tetap konsisten dengan slug aktual (tidak ada URL blog yang 404).

## 4. Rating Markup Trust + Integrasi

- [x] 4.1 Hapus blok `aggregateRating` tanpa bukti dari `index.html` (dan pastikan `scripts/seo/jsonld.ts` tidak mengenalkannya kembali), dan verifikasi Rich Results Test / validasi JSON-LD homepage tanpa `aggregateRating` dan tanpa error schema.
- [x] 4.2 Verifikasi akhir lintas-item: `tsc --noEmit` lolos, `npm run build` sukses, dan checklist serah terima (favicon 200, cache header benar, 0 broken blog link, schema bersih) terdokumentasi pada ringkasan change.
