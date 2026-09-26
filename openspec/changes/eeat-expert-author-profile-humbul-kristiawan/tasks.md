## 1. Asset & Data Foundation

- [x] 1.1 Unduh foto resmi Humbul Kristiawan dari URL sumber, simpan dan optimasi di `public/images/authors/humbul-kristiawan.webp` (atau format gambar terkompresi), dan verifikasi file dapat diakses secara lokal.
- [x] 1.2 Buat modul single source of truth `src/data/authors.ts` yang mendefinisikan tipe `AuthorProfile` dan mengekspor data lengkap Humbul Kristiawan (nama, kredensial, role, bio ringkas, sertifikasi, track record BUMN/Perbankan, dan link sameAs LinkedIn & website personal), lalu verifikasi tipe data lulus kompilasi TypeScript.

## 2. Blog Component UI & Schema Integration

- [x] 2.1 Perbarui komponen header artikel pada `src/components/BlogPage.tsx` untuk menampilkan visual byline elegan (foto avatar Pak Humbul, nama lengkap, gelar profesi, dan role), lalu verifikasi tampilannya presisi tanpa em-dash.
- [x] 2.2 Buat komponen visual Author Bio Card di bagian bawah artikel pada `src/components/BlogPage.tsx` yang menampilkan ringkasan rekam jejak BUMN (Pertamina, Telkom, Bank BJB, Bank UOB, PT Pegadaian), lencana sertifikasi (CA, CIA, CICA, GRCP), serta tautan verifikasi LinkedIn dan personal site.
- [x] 2.3 Implementasikan dynamic structured data Schema.org `@type: Person` di `src/components/BlogPage.tsx` saat artikel aktif dimuat, dan verifikasi validitas tag script JSON-LD di DOM.

## 3. Blog Content & Pre-Flight Verification

- [x] 3.1 Perbarui frontmatter artikel pada `src/content/blog/*.md` agar secara konsisten mencantumkan nama dan peran Pak Humbul Kristiawan sebagai penulis/penelaah utama.
- [x] 3.2 Lakukan audit kepatuhan anti-slop frontend (`Sparkles|animate-pulse|—|–`), jalankan `npm run lint` (`tsc --noEmit`), dan jalankan `npm run build` untuk memverifikasi exit code 0.
