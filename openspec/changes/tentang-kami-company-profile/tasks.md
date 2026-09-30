## 1. Fondasi Data Kanonik

- [x] 1.1 Buat modul `src/data/company.ts` berisi objek NAP kanonik (nama, alamat multi-baris IDX Tower 1, telepon +62 852 8599 5234, surel, jam operasional) dan verifikasi berkas terbuat tanpa sintaks error.
- [x] 1.2 Salin `assets/dsi-logo-removebg-preview.png` ke `public/dsi-logo.png` dan verifikasi berkas tersedia di path publik.

## 2. Kanonikalisasi NAP

- [x] 2.1 Refactor `src/components/Contact.tsx` agar blok `office-details-list` membaca dari `src/data/company.ts` tanpa mengubah tampilan, dan verifikasi tampilan section `#contact` identik sebelum/sesudah.
- [x] 2.2 Ganti alamat Talavera di bagian DPO `src/components/pages/PrivacyPolicyPage.tsx` dengan alamat IDX Tower 1 dari modul data, dan verifikasi tidak ada lagi string "Talavera" di `src/`.
- [x] 2.3 Perbarui node organisasi di `index.html`: `telephone` ke +62 852 8599 5234, tambah `streetAddress` + `postalCode` 12910, `logo`/`image` ke `/dsi-logo.png`, dan verifikasi tidak ada lagi referensi `vite.svg` dan `0811` di `index.html`.
- [x] 2.4 Perbarui string kontak perusahaan di `scripts/generate-static-routes.ts` (sumber `llms.txt`) ke nilai kanonik, dan verifikasi tidak ada lagi string `0811` di `scripts/` dan `src/`.

## 3. Halaman Profil Perusahaan

- [x] 3.1 Buat `src/components/pages/AboutPage.tsx` (hero identitas, kartu NAP dari modul data, legalitas ringkas, metodologi ringkas, pendiri dengan tautan `/penulis/humbul-kristiawan`, CTA asesmen/kontak; tanpa klaim angka yang belum terkonfirmasi) dan verifikasi komponen ter-render tanpa error.
- [x] 3.2 Tambahkan skema `AboutPage` dengan `mainEntity` merujuk `@id` organisasi kanonik pada payload halaman, dan verifikasi payload valid di Rich Results Test.

## 4. Registrasi Route

- [x] 4.1 Daftarkan route `/tentang-kami` di `src/App.tsx` (import, flag `isAboutPage`, sertakan di `isSubPage`, cabang render) dan `ROUTE_METADATA_MAP` di `src/utils/seoMeta.ts`, dan verifikasi navigasi langsung ke path me-render halaman.
- [x] 4.2 Tambahkan tautan `/tentang-kami` di `src/components/Footer.tsx` dan entri `SiteNavigationElement` di `index.html`, dan verifikasi tautan footer mengarah ke route baru.
- [x] 4.3 Daftarkan URL `https://dsintegra.co.id/tentang-kami` di `public/sitemap.xml` (prioritas 0.9) dan verifikasi XML valid.
- [x] 4.4 Tambahkan cabang `buildJsonLdForRoute()` dan `buildSemanticBodyHtmlForRoute()` untuk `/tentang-kami` di `scripts/generate-static-routes.ts` (termasuk entri llms), dan verifikasi snapshot `dist/tentang-kami/index.html` memuat teks penuh.

## 5. Tautan Internal Kontekstual

- [x] 5.1 Tambahkan tautan ke `/tentang-kami` pada konteks profil vendor di `/kualifikasi-vendor`, kredibilitas pelaksana di `/studi-kasus`, dan halaman-halaman `/layanan/*`, dan verifikasi setiap tautan mengarah ke URL kanonik.

## 6. Verifikasi Akhir

- [x] 6.1 Jalankan `npm run build`, pastikan exit code 0, `public/llms.txt` memuat nomor 0852 dan URL `/tentang-kami`, dan `lsp_diagnostics` bersih pada semua berkas yang diubah.
