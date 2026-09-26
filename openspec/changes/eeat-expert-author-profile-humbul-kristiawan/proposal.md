## Why

Artikel wawasan dan panduan kepatuhan GRC/ICOFR di dsintegra.co.id saat ini belum mengaitkan profil persona pakar riil yang kredibel, melainkan menggunakan placeholder umum ("Tim Konsultan Daya Solusi Integra"). Sesuai pedoman Google Search Quality Rater (E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness) dan algoritma kutipan mesin AI (LLM / Generative Engine Optimization), topik audit pelaporan keuangan dan regulasi BUMN (YMYL: Your Money Your Life) membutuhkan bukti kompetensi eksplisit dan identitas entitas pakar yang terverifikasi.

Dengan mengintegrasikan profil pakar utama Daya Solusi Integra, yaitu Humbul Kristiawan (mantan Equity Partner Deloitte Southeast Asia, Partner RSM AAJ, anggota Komite Audit & Risiko BUMN/Bank, dan pemegang sertifikasi CA, CIA, CICA, GRCP), situs web akan memperoleh penguatan sinyal E-E-A-T yang sangat signifikan, baik di mata mesin perayap Google maupun AI Overviews / Perplexity.

## What Changes

- Mengunduh, mengompres, dan menyimpan foto profil resmi Humbul Kristiawan ke direktori aset lokal `public/images/authors/humbul-kristiawan.webp`.
- Membuat modul profil pakar terpusat (`src/data/authors.ts`) yang menyimpan profil lengkap: nama, gelar, peran, bio ringkas, sertifikasi, riwayat kepemimpinan proyek ICOFR (Pertamina, Telkom, dsb.), dan tautan jejaring entitas (`sameAs`: LinkedIn & personal website).
- Memperbarui komponen tampilan artikel blog (`src/components/BlogPage.tsx`):
  - Menampilkan foto profil, nama lengkap, gelar profesional, dan jabatan di bagian atas artikel (*Article Header Byline*).
  - Menyediakan kartu profil otoritas pakar (*Expert Author Bio Card*) di akhir setiap artikel dengan ringkasan rekam jejak BUMN & tautan profil terverifikasi.
- Menginjeksi structured data Schema.org `Person` di setiap artikel blog (`/blog/:slug`), yang terhubung dengan `publisher` / `organization` Daya Solusi Integra dan memiliki array `sameAs` ke LinkedIn serta situs pribadi.
- Menautkan artikel markdown di `src/content/blog/*.md` ke persona Humbul Kristiawan.

## Capabilities

### New Capabilities
- `eeat-expert-author`: Penyediaan modul data persona pakar, komponen antarmuka byline dan bio card artikel, serta injeksi Schema.org `Person` untuk seluruh konten panduan dan regulasi.

### Modified Capabilities

## Impact

- `public/images/authors/humbul-kristiawan.webp`: Penambahan aset foto profil lokal berbobot ringan.
- `src/data/authors.ts`: Modul data baru untuk entitas author/reviewer.
- `src/components/BlogPage.tsx`: Penambahan UI author byline dan author card serta injeksi schema JSON-LD `Person`.
- `src/content/blog/*.md`: Pembaruan frontmatter author pada artikel blog.
- SEO & GEO: Peningkatan kepercayaan algoritma Google YMYL dan akurasi sitasi AI search engines.
