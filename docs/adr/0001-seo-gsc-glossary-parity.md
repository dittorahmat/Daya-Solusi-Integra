# ADR 0001: Arsitektur Paritas SEO Schema dan Data Glosarium

## Status
Accepted

## Tanggal
2026-11-13

## Konteks
Platform web PT Daya Solusi Integra menyajikan konten regulasi dan glosarium teknis ICOFR BUMN untuk audiens eksekutif BUMN, regulator, serta perayap mesin pencari (search engine bots). Dalam arsitektur saat ini:
1. Sisi Server / Build Time: Menggunakan generator rute statis (*Static Site Generation* / SSG) berbasis TypeScript (`scripts/seo/jsonld.ts` dan `scripts/generate-static-routes.ts`) untuk memproduksi snapshot HTML beranotasi Schema.org JSON-LD (`DefinedTerm`, `FAQPage`, `WebSite`, `Organization`, `BreadcrumbList`).
2. Sisi Klien / Runtime: Beroperasi sebagai Single Page Application (SPA) berbasis React (`src/components/pages/GlossaryDetailPage.tsx`) yang merender data glosarium, tabel komparasi, serta FAQ secara dinamis saat navigasi pengguna.

Sebelum adanya standarisasi ini, terdapat risiko laten:
- Pergeseran data (*hydration drift*): Inkonsistensi antara representasi structured data JSON-LD yang dibaca Google Search Console (GSC) saat perayapan SSG dengan struktur DOM yang dihidrasi oleh klien React.
- E-E-A-T & Ranking Risk: Duplikasi entitas, ketidakcocokan jawaban langsung (*directAnswer*), atau hilangnya node schema pada salah satu sisi dapat menurunkan otoritas topik dan visibilitas rich snippet di hasil pencarian Google.
- Penggabungan definisi teknis dan konseptual: Dokumen pemodelan domain bisnis sering kali tercampur dengan struktur kode tipe TypeScript atau atribut SEO.

## Keputusan
Kami menetapkan arsitektur pembagian tanggung jawab data glosarium dan SEO schema sebagai berikut:

1. **`src/data/glossaryData.ts` sebagai Single Source of Truth (SSOT) Teknis**:
   - Seluruh item glosarium, definisi teknis, *directAnswer*, tabel komparasi, FAQ, serta jembatan komersial didefinisikan secara tersentralisasi pada `src/data/glossaryData.ts`.
   - Modul ini mengekspor tipe data TypeScript (`GlossaryItem`, `GlossaryFaq`, `GlossaryComparisonTable`) yang digunakan secara konsisten oleh komponen SPA klien dan skrip SSG.

2. **Paritas Penuh Skema SSG dan Runtime Klien**:
   - `scripts/seo/jsonld.ts` wajib mencerminkan struktur skema `DefinedTerm` dan `FAQPage` yang selaras dengan data runtime pada `GlossaryDetailPage.tsx`.
   - Linter otomatis (`scripts/lint-schema.ts`) diintegrasikan ke dalam `npm run lint` untuk memvalidasi bahwa setiap pertanyaan dan jawaban FAQ pada SSG prerender memiliki paritas 1:1 terhadap entitas data runtime.

3. **`GLOSSARY.md` sebagai Kamus Konseptual Domain Murni**:
   - Berkas `GLOSSARY.md` di root repositori didedikasikan secara eksklusif sebagai kamus bisnis konseptual (*pure conceptual domain dictionary*).
   - `GLOSSARY.md` bebas dari kode sumber, format JSON-LD, atau detail implementasi perangkat lunak, sehingga menjadi acuan terminologi tata kelola bagi pemangku kepentingan non-rekayasa (konsultan tata kelola, auditor, dan regulator).

4. **Kepatuhan Aturan Anti-Slop dan Tipografi**:
   - Seluruh berkas dokumentasi dan data wajib mematuhi aturan bebas tanda pisah em-dash maupun en-dash, menggunakan titik dua (:), tanda kurung (), atau titik koma (;) sebagai gantinya.

## Konsekuensi

### Positif
- **Zero Hydration Mismatch**: Structured data yang diterima crawler mesin pencari identik dengan apa yang ditampilkan dan diinteraksikan oleh pengguna akhir pada peramban.
- **Integritas E-E-A-T Terjaga**: Evaluasi Search Console dan audit skema selalu konsisten karena divalidasi oleh skrip linter otomatis (`scripts/lint-schema.ts`).
- **Pemisahan Perhatian Bersih (*Clean Separation of Concerns*)**: Domain model bisnis terdokumentasi secara agnostik di `GLOSSARY.md`, sedangkan spesifikasi data rekayasa web terisolasi di modul TypeScript.

### Konsekuensi Negatif dan Mitigasi (Trade-offs)
- **Tuntutan Sinkronisasi Berdisiplin**: Penambahan field baru pada `GlossaryItem` memerlukan pembaruan pada tipe TypeScript, komponen klien, dan skrip pembangun JSON-LD.
- **Mitigasi**: Validasi tipe statis TypeScript (`tsc --noEmit`) dan guard rail linter skema (`scripts/lint-schema.ts`) dijalankan pada setiap inner loop pembangunan (`npm run lint`), menggagalkan kompilasi jika terjadi pergeseran tipe atau disparitas skema.
