## Why

URL glosarium seperti `https://dsintegra.co.id/glosarium/elc` mengalami error loop pengalihan tanpa akhir (ERR_TOO_MANY_REDIRECTS) di peramban karena konflik antara middleware trailing slash dan perilaku default `express.static` saat mendeteksi folder di disk server. Selain itu, jika crawler atau peramban mengakses URL dengan garis miring di akhir (`/glosarium/elc/`), SPA gagal mengekstrak slug glosarium sehingga memunculkan pesan "Istilah Glosarium Tidak Ditemukan" yang terindeks di mesin pencari Google. Diperlukan penanganan Clean URL SSG pada server Express dan sanitasi slug pada router SPA.

## What Changes

- Mengganti logika penyajian berkas di `server.ts` dengan Clean URL Static Handler yang mendeteksi file prerender `dist/<cleanPath>/index.html` dan menyajikannya secara langsung (status 200 OK) untuk URL tanpa trailing slash, menghindari redirect loop bawaan direktori `express.static`.
- Menyederhanakan `server.ts` agar menyajikan langsung seluruh 45 berkas prerender statis yang sudah dibuat oleh build generator tanpa perlu objek hardcoded `routeSeoMeta` yang parsial.
- Melakukan sanitasi slug pada rute detail glosarium di `src/App.tsx` dan `src/components/pages/GlossaryDetailPage.tsx` untuk menghapus trailing slash (misal `elc/` menjadi `elc`), sehingga tetap valid saat diakses baik dengan maupun tanpa trailing slash.

## Capabilities

### New Capabilities
- `clean-url-ssg-serving`: Menyediakan logika server Express yang menyajikan berkas HTML statis prerender secara langsung berdasarkan jalur URL bersih tanpa memicu pengalihan berulang.
- `glossary-slug-sanitization`: Menyediakan mekanisme normalisasi slug glosarium di sisi SPA untuk mencegah kegagalan pencocokan data saat URL diakses dengan format trailing slash.

### Modified Capabilities
<!-- None -->

## Impact

- `server.ts`: Pembersihan middleware trailing slash dan penambahan penyaji berkas prerender HTML sebelum static asset fallback.
- `src/App.tsx`: Pembersihan ekstraksi slug glosarium.
- `src/components/pages/GlossaryDetailPage.tsx`: Normalisasi slug sebelum pencarian ke `GLOSSARY_ITEMS`.
