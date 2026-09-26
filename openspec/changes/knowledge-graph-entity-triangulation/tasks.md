## 1. Schema.org Knowledge Graph Ingestion

- [x] 1.1 Perbarui blok skema `ProfessionalService` di `index.html` dengan menyertakan relasi `founder` / `employee` Pak Humbul Kristiawan dan mengonversi `knowsAbout` menjadi array entitas `Thing` ber-`sameAs` ke Wikidata & Wikipedia resmi (Kementerian BUMN, BPKP, BPK, OJK, COSO, SOX, ISO 31000), lalu verifikasi keutuhan sintaks JSON.
- [x] 1.2 Sinkronisasikan skema organisasi dasar pada skrip prerender `scripts/generate-static-routes.ts` agar seluruh rute HTML yang di-generate menyertakan triangulasi entitas semantik yang sama.

## 2. Verification & Build

- [x] 2.1 Jalankan `npm run lint` (`tsc --noEmit`) dan pastikan tidak ada kesalahan tipe data.
- [x] 2.2 Jalankan `npm run build` dan verifikasi bahwa 39 snapshot prerender berhasil diproduksi dengan format JSON-LD yang valid (Exit Code 0).
