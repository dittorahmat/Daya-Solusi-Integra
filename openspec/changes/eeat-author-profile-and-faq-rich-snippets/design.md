## Context

Lihat `proposal.md` untuk latar belakang dan motivasi bisnis.
Website saat ini sudah memiliki profil ringkas di `src/data/authors.ts` dan kartu bio di `BlogPage.tsx`. Namun, rute khusus profil penulis belum diimplementasikan sebagai halaman mandiri. Selain itu, dataset `ROUTE_FAQS` di `src/data/faqData.ts` telah mencakup belasan rute, namun injeksi `@type: FAQPage` belum masuk ke dalam skema `@graph` JSON-LD di `generate-static-routes.ts`.

Kepatuhan terhadap skill `design-taste-frontend` wajib ditegakkan:
- *Design Read*: B2B Regulated Corporate & GRC Platform.
- *Visual Palette*: Ink Navy (`#0b0f19`), Deep Slate (`#0f172a`), border tegas `border-slate-800`.
- *Hard Bans*: Zero em-dash (`—`/`–`), no `Sparkles`, no unmotivated `animate-pulse`, 1 dominant CTA per viewport.

## Goals / Non-Goals

**Goals:**
- Membuat komponen halaman statis `src/components/pages/AuthorProfilePage.tsx` yang elegan, profesional, dan kaya konteks E-E-A-T.
- Menampilkan foto avatar lokal (`/images/authors/humbul-kristiawan.jpg`), biografi naratif, pengalaman eksekutif (Deloitte SEA, Pegadaian, UOB, BJB), dan kartu 12 artikel riset terkait.
- Menginjeksi skema JSON-LD `@type: ProfilePage` dan `@type: Person` pada halaman profil penulis.
- Mengotomasi injeksi `@type: FAQPage` pada seluruh rute yang memiliki data di `ROUTE_FAQS` pada `scripts/generate-static-routes.ts`.
- Mendaftarkan rute di `App.tsx`, `ROUTE_METADATA_MAP`, `generate-static-routes.ts`, dan `public/sitemap.xml`.

**Non-Goals:**
- Membuat sistem multi-penulis dinamis dengan database eksternal (cukup menggunakan dataset TypeScript yang teruji).
- Mengubah isi konten teks artikel blog yang sudah ada.

## Decisions

1. **Rute Resmi Bersih: `/penulis/humbul-kristiawan`**
   - *Rationale*: Rute `/penulis/humbul-kristiawan` lebih pendek, semantik, dan sesuai standar arsitektur Google Search untuk direktori author.
   - *Alternative Considered*: `/blog/penulis/humbul-kristiawan`. Dipilih rute tingkat pertama yang dapat diakses langsung maupun dialihkan jika diperlukan.

2. **Otomasi Terpusat Skema FAQPage di Prerender Script**
   - *Rationale*: Daripada menyisipkan tag `<script type="application/ld+json">` manual di belasan file komponen terpisah, menginjeksinya langsung di `scripts/generate-static-routes.ts` memanfaatkan `ROUTE_FAQS` memastikan 100% konsistensi, validitas sintaks, dan pembersihan tanda baca otomatis (`cleanProhibitedDashes`).
   - *Alternative Considered*: Komponen React pembungkus FAQ terpisah di sisi klien. Ditolak karena crawler membaca snapshot statis HTML di SSR/SSG.

## Risks / Trade-offs

- [Risk] Peringatan Google Search Console jika schema FAQPage tidak sesuai konten yang tampak di layar.
  → *Mitigation*: Seluruh FAQ yang diinjeksi ke skema JSON-LD adalah FAQ yang persis sama dengan yang di-render di elemen `<details>` snapshot HTML.
