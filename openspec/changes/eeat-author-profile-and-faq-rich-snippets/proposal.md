## Why

Untuk memperkuat kredibilitas E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) pada topik regulasi keuangan dan audit BUMN (YMYL), mesin pencari Google mensyaratkan halaman profil penulis (*author profile page*) mandiri yang terverifikasi. Selain itu, rich snippets akordeon FAQ pada hasil pencarian (SERP) belum terpicu secara optimal karena skema JSON-LD `FAQPage` belum diinjeksi secara otomatis pada rute-rute publik yang memiliki konten FAQ terstruktur.

Penggabungan dua inisiatif ini memberikan peningkatan visibilitas pencarian yang signifikan: membangun otoritas personal founder yang kokoh dan memperluas ruang tayang (*SERP real estate*) di Google Search.

## What Changes

- Menambahkan halaman profil penulis mandiri `/penulis/humbul-kristiawan` (`src/components/pages/AuthorProfilePage.tsx`) yang menampilkan bio lengkap, kredensial formal (CA, CIA, CICA, GRCP), riwayat kepemimpinan komite audit/risiko (Pegadaian, UOB, BJB, Deloitte), tautan profil eksternal (LinkedIn), dan katalog 12 artikel riset yang ditulis.
- Menambahkan skema JSON-LD `@type: ProfilePage` dan `@type: Person` pada halaman profil penulis.
- Menginjeksi skema JSON-LD `@type: FAQPage` secara otomatis di `scripts/generate-static-routes.ts` untuk seluruh rute yang memiliki daftar FAQ di `src/data/faqData.ts` (termasuk halaman beranda, platform GRC Integra, BPM Workflow Editor, kalkulator TOE, regulasi, layanan, dan sektor BUMN).
- Mendaftarkan rute `/penulis/humbul-kristiawan` pada `App.tsx`, `src/utils/seoMeta.ts`, `scripts/generate-static-routes.ts`, dan `public/sitemap.xml`.
- Memperbarui byline tautan artikel blog agar mengarah ke rute resmi `/penulis/humbul-kristiawan`.

## Capabilities

### New Capabilities
- `author-profile-page`: Halaman profil penulis resmi terverifikasi untuk memperkuat E-E-A-T dan menghubungkan seluruh publikasi artikel dengan figur otoritatif.
- `faqpage-schema-injection`: Otomasi injeksi skema terstruktur JSON-LD FAQPage untuk memicu rich snippets akordeon di Google SERP pada seluruh rute relevan.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/App.tsx`, `src/components/pages/AuthorProfilePage.tsx` (baru), `src/components/BlogPage.tsx`, `src/utils/seoMeta.ts`, `scripts/generate-static-routes.ts`, `public/sitemap.xml`.
- **SEO & Schema**: Menghasilkan 1 rute statis baru (`/penulis/humbul-kristiawan`) dan menambahkan entitas `@type: FAQPage` pada puluhan snapshot HTML statis.
- **Dependencies**: Menggunakan komponen yang sudah ada (`lucide-react`, Tailwind CSS).
