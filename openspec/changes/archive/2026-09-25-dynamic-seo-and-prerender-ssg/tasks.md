## 1. Pengelola Metadata Dinamis Client-Side

- [x] 1.1 Buat berkas `src/utils/seoMeta.ts` yang memuat konfigurasi metadata presisi untuk seluruh rute (Home, Layanan Silo, Platform GRC Integra, Asesmen, Glosarium, dan seluruh artikel Blog) serta fungsi `updateDocumentMeta`, lalu verifikasi ekspor modul valid.
- [x] 1.2 Integrasikan pemanggilan `updateDocumentMeta` di dalam `src/App.tsx` setiap kali `currentPath` berubah, lalu verifikasi `document.title` dan meta tag sinkron saat navigasi halaman.

## 2. Generator HTML Statis Pasca-Build (SSG Prerendering)

- [x] 2.1 Buat skrip `scripts/generate-static-routes.ts` yang membaca `dist/index.html` dan menghasilkan file `index.html` terinjeksi metadata untuk setiap rute resmi di folder `dist/`, lalu verifikasi eksekusi skrip secara mandiri.
- [x] 2.2 Perbarui skrip npm `build` di `package.json` untuk menjalankan `generate-static-routes.ts` setelah kompilasi Vite, lalu verifikasi keberadaan file HTML statis pada output `dist/`.

## 3. Verifikasi & Pre-flight Check

- [x] 3.1 Jalankan pemindaian anti-slop pada kode baru untuk memastikan nol kemunculan tanda em-dash (`—`/`–`), `Sparkles`, atau `animate-pulse` kosmetik.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi proses build dan generasi rute statis sukses 100% (Exit code 0).
