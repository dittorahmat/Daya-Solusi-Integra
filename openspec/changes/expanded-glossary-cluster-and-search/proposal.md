## Why

Berdasarkan data crawling Google SERP, halaman istilah glosarium (`DefinedTerm`) merupakan aset yang paling cepat diindeks dan diprioritaskan oleh mesin pencari untuk kueri definisi kepatuhan BUMN. Namun, direktori glosarium saat ini baru memuat 12 istilah dasar dan belum memiliki kolom pencarian instan pada katalog `/glosarium`, sehingga audiens eksekutif dan auditor BUMN harus menggulir manual serta kata kunci penting seperti RCM, SoD, dan ITAC belum memiliki halaman terdedikasi.

## What Changes

- Menambahkan 8 istilah kunci baru kepatuhan regulasi SK-5 dan COSO ke dalam `src/data/glossaryData.ts` (mencakup `rcm`, `sod`, `three-lines-model`, `kertas-kerja-toe`, `coso-17-prinsip`, `substantive-testing`, `compensating-control`, dan `itac`), sehingga total istilah menjadi 20.
- Menambahkan komponen pencarian interaktif real-time (*instant search & filter input*) pada halaman katalog `src/components/pages/GlossaryPage.tsx` untuk menyaring istilah berdasarkan nama, akronim, rujukan regulasi, dan definisi.
- Mendaftarkan 8 rute baru ke berkas `public/sitemap.xml` dan menyelaraskannya ke snapshot prerender statis serta `llms.txt`.

## Capabilities

### New Capabilities
- `glossary-expansion-sk5`: Menyediakan data terstruktur komprehensif untuk 8 istilah regulasi kunci SK-5 BUMN dan COSO lengkap dengan rujukan pasal, definisi kepatuhan, poin kunci, dan contoh praktis.
- `glossary-instant-search`: Menyediakan input pencarian interaktif di katalog glosarium yang memfilter kartu istilah secara real-time di sisi klien.

### Modified Capabilities
<!-- None -->

## Impact

- `src/data/glossaryData.ts`: Penambahan 8 objek `GlossaryItem`.
- `src/components/pages/GlossaryPage.tsx`: Penambahan state pencarian dan antarmuka search bar.
- `public/sitemap.xml`: Pendaftaran URL kanonikal 8 istilah glosarium baru.
- `scripts/generate-static-routes.ts`: Regenerasi snapshot prerender statis 20 istilah glosarium dan update IndexNow.
