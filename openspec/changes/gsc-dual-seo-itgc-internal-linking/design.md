# Design

## Context

Situs `https://dsintegra.co.id` dibangun menggunakan Vite, React, TypeScript, dan Tailwind CSS dengan arsitektur static content markdown (`src/content/blog/*.md`) serta kamus data typescript (`src/data/glossaryData.ts`).
Berdasarkan data GSC, segmen glosarium menyumbang impresi tinggi (contoh: Three Lines Model 176 impresi, COSO 71 impresi, ELC 123 impresi), namun konversi ke halaman pilar layanan atau platform produk belum optimal karena beberapa entri strategis belum memiliki komponen `commercialBridge`.
Secara bersamaan, kueri seputar audit sistem informasi BUMN (ITGC & ITAC) mengalami kenaikan impresi namun belum memiliki artikel pilar terdedikasi.
Semua perubahan tunduk pada aturan proyek: Zero Em-Dash (`—`), palet BUMN Blue & Gold (10% rule), anti-AI slop, serta verifikasi build TypeScript tanpa error.

## Goals / Non-Goals

**Goals:**
- Mengoptimalkan tautan internal kontekstual dan `commercialBridge` pada entri glosarium kunci (`three-lines-model`, `coso-17-prinsip`, `rcm`, `defisiensi-kontrol`, `key-control`, `remediasi-kontrol`) di `src/data/glossaryData.ts`.
- Mengoptimalkan meta snippet dan sub-heading pada artikel pengadaan RCM `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md` untuk menjawab intent kueri *"tod dan toe adalah"*.
- Membangun artikel pilar baru `src/content/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5.md` (>1.500 kata) lengkap dengan cover image korporat Unsplash terkompresi, TOC anchor, tabel komparasi teknis, dan tautan internal.
- Mendaftarkan URL baru ke `public/sitemap.xml`.

**Non-Goals:**
- Merombak struktur router atau komponen rendering glosarium/blog yang sudah stabil.
- Mengubah skema basis data atau menambah dependensi npm eksternal baru.

## Decisions

### 1. Struktur Komponen `commercialBridge` pada Glosarium
- **Pilihan:** Memanfaatkan antarmuka `commercialBridge` yang sudah didukung oleh `GlossaryDetailPage.tsx` (title, description, primaryUrl, primaryLabel, secondaryUrl, secondaryLabel).
- **Rasional:** Tidak perlu mengubah komponen React UI; cukup memperkaya objek data di `glossaryData.ts`. Setiap istilah diarahkan ke layanan yang paling relevan (misal: `three-lines-model` ke `/layanan/icofr-bumn`, `rcm` ke `/platform/grc-integra`).

### 2. Format & Struktur Artikel ITGC/ITAC Baru
- **Pilihan:** Membuat berkas markdown `panduan-audit-itgc-itac-bumn-pengujian-erp-sk5.md` dengan frontmatter standar DSI (`id`, `title`, `slug`, `excerpt`, `category`, `author`, `date`, `readTime`, `coverImage`, `tags`).
- **Rasional:** Memastikan integrasi otomatis dengan `blogLoader.ts`, generator RSS, dan komponen visual `BlogArticle.tsx`. Menggunakan author profile Humbul Kristiawan untuk memperkuat sinyal E-E-A-T.

### 3. Penegakan Aturan Editorial Anti-Slop
- **Pilihan:** Melarang mutlak tanda em-dash (`—`) atau en-dash (`–`), dilarang menggunakan visual magic sparkles, dan memastikan line-height serta spasi lapang sesuai skill `design-taste-frontend`.
- **Rasional:** Menjaga reputasi profesional di mata dewan direksi BUMN dan konsistensi seluruh konten DSI.

## Risks / Trade-offs

- **[Risk]** Data frontmatter artikel blog baru tidak terbaca oleh parser jika ada kesalahan tipe string atau tanggal.
  &rarr; **Mitigasi:** Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` sebelum menyelesaikan pekerjaan.
- **[Risk]** Pelanggaran aturan Zero Em-Dash pada konten markdown baru.
  &rarr; **Mitigasi:** Lakukan pemindaian otomatis teks dengan skrip regex PowerShell/Node untuk memastikan nol kemunculan tanda pisah ilegal.
