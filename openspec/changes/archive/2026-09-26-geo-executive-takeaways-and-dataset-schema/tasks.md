## 1. UI & GEO Direct Answer Component

- [x] 1.1 Perbarui tampilan pembuka artikel di `src/components/BlogPage.tsx` dengan kontainer Executive Takeaways & Direct Answer Box yang solid, rapi, dan mematuhi aturan zero em-dash, lalu verifikasi rendering artikel.

## 2. Dataset Schema Implementation

- [x] 2.1 Perbarui skrip generator rute statis `scripts/generate-static-routes.ts` untuk menambahkan penandaan Schema.org `@type: "Dataset"` pada rute `/kalkulator-sampel-toe`, lalu verifikasi keluaran skema JSON-LD.

## 3. Verification & Quality Gate

- [x] 3.1 Jalankan pemindaian anti-slop (`Select-String` untuk Sparkles/pulse/em-dash), jalankan `npm run lint` (`tsc --noEmit`), dan `npm run build` untuk memverifikasi file HTML di `dist/kalkulator-sampel-toe/index.html` memuat skema `Dataset` valid.
