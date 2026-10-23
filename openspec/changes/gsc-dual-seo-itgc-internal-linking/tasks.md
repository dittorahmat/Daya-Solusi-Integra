# Tasks

## 1. Optimalisasi Commercial Bridge Glosarium

- [x] 1.1 Lengkapi konfigurasi `commercialBridge` pada istilah kunci (`three-lines-model`, `coso-17-prinsip`, `rcm`, `defisiensi-kontrol`, `key-control`, dan `remediasi-kontrol`) di `src/data/glossaryData.ts` dan verifikasi seluruh rute glosarium tersebut menampilkan CTA bridge yang valid.
- [x] 1.2 Verifikasi keselarasan tipe data dan pastikan tidak ada sintaks rusak pada `src/data/glossaryData.ts` dengan menjalankan pemeriksaan tipe.

## 2. Penajaman Konten & Snippet Quick Win Blog Pengadaan

- [x] 2.1 Perbarui metaDescription dan tambahkan sub-heading penjelas tentang perbedaan TOD vs TOE di `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md` untuk menjawab target pencarian kueri Google.
- [x] 2.2 Pastikan konten yang diperbarui bebas dari tanda pisah em-dash (`—`) atau en-dash (`–`).

## 3. Penyusunan Artikel Pilar Baru ITGC & ITAC BUMN

- [x] 3.1 Buat berkas artikel pilar baru `src/content/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5.md` (>1.500 kata) lengkap dengan frontmatter standar, coverImage Unsplash beresolusi tinggi, daftar isi ber-anchor, matriks pengujian ITGC vs ITAC, dan internal link kontekstual ke `/platform/grc-integra` serta `/layanan/itgc-audit-readiness`.
- [x] 3.2 Daftarkan URL canonical resmi `https://dsintegra.co.id/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5` ke dalam `public/sitemap.xml` dengan prioritas 0.9.

## 4. Audit Pra-Penyelesaian & Verifikasi Kualitas

- [x] 4.1 Jalankan pemindaian anti-slop pada artikel dan kode yang dimodifikasi untuk memastikan 0 temuan tanda em-dash (`—`), en-dash (`–`), maupun artefak terlarang.
- [x] 4.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memverifikasi seluruh komponen dan konten siap produksi dengan exit code 0.
