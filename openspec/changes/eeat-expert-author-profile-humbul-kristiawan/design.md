## Context

Lihat `proposal.md - Why` dan `specs/eeat-expert-author/spec.md`.
Repositori frontend menggunakan React + TypeScript + Vite dengan Tailwind CSS. Sistem blog saat ini mem-parsing file markdown dari `src/content/blog/*.md` melalui `BlogPage.tsx`.

## Goals / Non-Goals

**Goals:**
- Mengunduh dan menempatkan foto resmi Pak Humbul Kristiawan secara lokal pada direktori `public/images/authors/humbul-kristiawan.webp` (kompresi ringan, responsive sizing).
- Membuat modul profil author terstruktur (`src/data/authors.ts`) yang dapat digunakan kembali di seluruh sistem.
- Mendesain komponen UI Author Byline (di header artikel) dan Author Bio Card (di akhir artikel) dengan estetika korporat BUMN (BUMN Blue, aksen BUMN Gold <= 10%, kanvas dark Slate).
- Mengintegrasikan JSON-LD Schema.org `@type: Person` di `BlogPage.tsx` lengkap dengan `sameAs` ke LinkedIn dan website pribadi.
- Menyesuaikan frontmatter artikel blog agar terhubung ke profil Humbul Kristiawan.

**Non-Goals:**
- Membuat sistem multi-user auth / CMS database dinamis di backend.
- Mengubah arsitektur markdown parser yang sudah berjalan stabil.

## Decisions

### 1. Penyimpanan Aset Foto Lokal vs CDN Eksternal
- **Keputusan:** Simpan foto langsung di `public/images/authors/humbul-kristiawan.webp`.
- **Rasional:** Mengeliminasi ketergantungan jaringan eksternal (third-party dependency) ke server WordPress eksternal, mencegah kegagalan pemuatan saat offline/build, serta menjaga skor LCP (Largest Contentful Paint) dan Core Web Vitals tetap optimal.

### 2. Modul Data Terpusat (`src/data/authors.ts`)
- **Keputusan:** Buat single source of truth untuk profil pakar.
- **Rasional:** Memudahkan penambahan author baru di masa depan dan menjamin keseragaman metadata schema dan UI di semua artikel blog.

```typescript
export interface AuthorProfile {
  id: string;
  name: string;
  credentials: string; // "SE, Ak., MBA, CA, CIA, CICA, GRCP"
  role: string;
  avatar: string;
  summary: string;
  certifications: string[];
  trackRecord: string[];
  sameAs: string[];
}
```

### 3. Kepatuhan Desain Korporat B2B Regulated (design-taste-frontend)
- **Keputusan:** Gunakan container arsitektural solid (`#0f172a` / `#0d1527`), border tipis (`border-slate-800`), font mono untuk kredensial sertifikasi, dan zero em-dash (`—`/`–`).
- **Rasional:** Menjaga wibawa BUMN dan mematuhi aturan strict anti-AI slop.

## Risks / Trade-offs

- **[Risk]** Dimensi gambar asli tidak seragam bila di-render di layar kecil.
  - **Mitigasi:** Gunakan container avatar fixed-aspect-ratio (e.g. `w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover ring-2 ring-bumn-blue/40`).
- **[Risk]** Frontmatter artikel lama memiliki format string bebas pada kolom `author`.
  - **Mitigasi:** Modul resolver memetakan default `author` ke profil Humbul Kristiawan jika cocok atau jika menggunakan default instansi.
