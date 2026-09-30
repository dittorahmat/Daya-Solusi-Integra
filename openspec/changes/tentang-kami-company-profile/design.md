## Context

Lihat `proposal.md` (Why) untuk motivasi. Keadaan saat ini: routing SPA di `src/App.tsx` memakai pencocokan `window.location.pathname` dengan 20 cabang route; metadata per-route di `ROUTE_METADATA_MAP` (`src/utils/seoMeta.ts`); snapshot SSG per-route di `scripts/generate-static-routes.ts` (`buildJsonLdForRoute()` + `buildSemanticBodyHtmlForRoute()` + `generateLlmsFiles()`); sitemap di `public/sitemap.xml`; navigasi di `SiteNavigationElement` JSON-LD `index.html`. Data NAP tersebar: manusia membaca `Contact.tsx` (IDX Tower 1, 0852), mesin membaca `index.html` JSON-LD (Jaksel saja, 0811) dan `llms.txt` (turunan generator SSG). Satu-satunya alamat jalan lengkap hidup di section anchor `#contact` yang tidak indexable mandiri.

## Goals / Non-Goals

**Goals:**
- Satu route `/tentang-kami` yang indexable dan membawa NAP kanonik + skema `AboutPage`.
- Nol varian NAP competing di seluruh permukaan (manusiawi dan mesin).
- Node organisasi valid: alamat jalan, telepon benar, logo tidak 404.

**Non-Goals:**
- Menambah item navigasi header (sudah 10 item, pill navbar penuh).
- Halaman turunan profil (tim, sejarah/timeline, versi Inggris).
- Mempublikasikan nomor NIB/NPWP, tahun berdiri, atau jumlah karyawan sebelum datanya disediakan pemilik.
- Redesign visual `Contact.tsx` atau homepage.

## Decisions

### 1. Route `/tentang-kami`, bukan `/about`
Konvensi route proyek berbahasa Indonesia (`/kebijakan-privasi`, `/pernyataan-independensi`, `/kualifikasi-vendor`). Slug Inggris akan inkonsisten dan memecah pola canonical yang sudah berjalan. Alternatif `/about` ditolak.

### 2. Tanpa item nav header; distribusi via footer + tautan kontekstual + sitemap
Header pill sudah memuat 10 item dan sempit di viewport menengah. `/tentang-kami` tetap discoverable lewat link footer, tautan kontekstual (`/kualifikasi-vendor`, `/studi-kasus`, `/layanan/*`), entri `SiteNavigationElement`, dan sitemap. Alternatif menambah item ke-11 atau dropdown "Perusahaan" ditolak karena churn navigasi tanpa kebutuhan pengguna yang terbukti.

### 3. Modul data tunggal `src/data/company.ts`
NAP kanonik didefinisikan sekali sebagai objek terstruktur (nama, alamat multi-baris, telepon, surel, jam operasional) dan dikonsumsi oleh `Contact.tsx`, `AboutPage.tsx`, `PrivacyPolicyPage.tsx` (bagian DPO), serta — via nilai yang sama — payload JSON-LD. Alternatif hardcode per-file (status quo) ditolak karena itulah akar drift Talavera/0811. `Contact.tsx` hanya di-refactor sumber datanya, tampilannya tidak berubah.

### 4. Cabang SSG wajib untuk `/tentang-kami`
Mengikuti pelajaran change `clean-url-ssg-serving-and-glossary-slug-fix`: setiap route baru WAJIB punya cabang `buildSemanticBodyHtmlForRoute()` (teks penuh) dan `buildJsonLdForRoute()` (`AboutPage` + referensi `@id` organisasi). Tanpa ini halaman terindex sebagai shell kosong. Prioritas sitemap 0.9, sejajar hub lain (`/studi-kasus`, `/kualifikasi-vendor`).

### 5. Logo JSON-LD dari aset yang ada
`assets/dsi-logo-removebg-preview.png` (logo yang sama dipakai header/footer) disalin ke `public/dsi-logo.png` lalu dirujuk node organisasi, menggantikan `vite.svg` yang 404. Alternatif `public/og-image.png` ditolak karena itu aset OG-card ber-dimensi sosial, bukan logo entitas.

### 6. Format telepon dinormalisasi ke tampilan manusiawi
JSON-LD memakai `+62 852 8599 5234` (spasi, sama persis dengan `Contact.tsx`), bukan format dash `+62-811-100-2442` yang lama. Kesamaan string memudahkan audit konsistensi manusia vs mesin.

### 7. Struktur konten AboutPage dari materi yang sudah ada
Hero identitas, kartu NAP/kontak (dari `company.ts`), legalitas & kualifikasi (ringkas + tautan ke `/kualifikasi-vendor`), metodologi/layanan (ringkas + tautan ke `/layanan/*`), pendiri (tautan ke `/penulis/humbul-kristiawan`, reuse `@id` founder yang sudah ada di JSON-LD), CTA asesmen/kontak. Tidak ada klaim angka baru.

## Risks / Trade-offs

- [Risk] `public/llms.txt` adalah output build yang ter-commit; edit sumber tanpa rebuild meninggalkan berkas basi → Mitigasi: task verifikasi menjalankan `npm run build` dan memeriksa `dist/` + `public/llms.txt`.
- [Risk] Konten About tipis/duplikat kalimat footer → Mitigasi: salinan orisinal 800+ kata, footer tetap ringkas; tidak menyalin mentah section Contact.
- [Risk] Data `foundingDate`/karyawan/NIB belum ada → Mitigasi: TIDAK di-hardcode; section legalitas menautkan ke `/kualifikasi-vendor`; lihat Open Questions.
- [Trade-off] Tanpa item header, traffic halaman bergantung pada footer + tautan kontekstual + pencarian → diterima; tujuan utama halaman ini adalah verifikasi prospek dan entitas mesin, bukan navigasi primer.

## Migration Plan

Deploy mengikuti pipeline statis yang ada (`npm run build` → `dist/`, serve via `server.ts`/deploy). Rollback: hapus cabang route di `App.tsx` — halaman tak terjangkau, sisa situs utuh. Normalisasi trailing-slash dan redirect kanonik sudah ditangani global, tidak perlu aturan baru.

## Open Questions

- Teks visi/misi resmi perusahaan (bila ada): placeholder netral dulu atau tunggu copy pemilik? Tidak mengubah specs/pendekatan/task breakdown — task konten memakai placeholder yang jelas ditandai.
- `foundingDate`, jumlah karyawan, nomor NIB/NPWP untuk publikasi: disediakan sekarang atau ditunda ke change lanjutan? Sama — tidak mengubah struktur, hanya mengisi field.
