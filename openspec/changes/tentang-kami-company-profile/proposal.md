## Why

Data identitas perusahaan (alamat, telepon) saat ini tersebar dan tidak konsisten: alamat jalan lengkap hanya hidup di section `#contact` homepage (anchor, bukan route, tidak indexable sebagai entitas), halaman `/kebijakan-privasi` memuat alamat berbeda (Talavera Office Park), dan JSON-LD memakai nomor telepon berbeda dari yang tampil ke manusia. Calon prospek BUMN yang memverifikasi legalitas vendor mendapat sinyal bertentangan, dan mesin pencari tidak punya satu pun halaman kanonik bertipe profil perusahaan. Belum ada halaman company profile khusus di 20 cabang route yang ada.

## What Changes

- Route baru `/tentang-kami`: halaman profil perusahaan mandiri (identitas PT, visi, alamat kantor, kontak, jam operasional, legalitas, metodologi, kredensial, CTA) dengan skema `AboutPage`.
- Kanonikalisasi NAP (Name, Address, Phone): satu alamat (IDX Tower 1) dan satu nomor (+62 852 8599 5234) berlaku di seluruh permukaan — `Contact.tsx`, `PrivacyPolicyPage.tsx` (bagian DPO), `index.html` JSON-LD, dan generator SSG/`llms.txt`.
- Pengayaan node entitas `ProfessionalService`/`Organization`: `streetAddress`, `legalName`, `foundingDate`, `areaServed`, logo asli (menggantikan referensi `vite.svg` yang 404).
- Registrasi route penuh mengikuti konvensi proyek: `App.tsx`, `seoMeta.ts` (`ROUTE_METADATA_MAP`), `Footer.tsx`, `SiteNavigationElement` JSON-LD, `public/sitemap.xml`, snapshot SSG di `scripts/generate-static-routes.ts` (termasuk semantic body HTML agar bukan shell kosong), dan entri `llms.txt`/`llms-full.txt`.
- Tautan internal kontekstual ke `/tentang-kami` dari `/kualifikasi-vendor`, `/studi-kasus`, dan halaman `/layanan/*` (bukan hanya footer).

## Capabilities

### New Capabilities

- `company-profile-page`: Halaman profil perusahaan mandiri di `/tentang-kami` — konten identitas, visi, NAP, legalitas, metodologi, kredensial, dan CTA — yang terdaftar di routing, metadata SEO, sitemap, SSG, dan tautan internal.
- `nap-canonicalization`: Aturan sumber kebenaran tunggal untuk nama, alamat jalan, telepon, surel, dan jam operasional perusahaan, serta propagasinya ke seluruh permukaan situs (komponen, JSON-LD, SSG, berkas AI-discovery).

### Modified Capabilities

- `rich-structured-schema`: Requirement "Pengayaan Entitas Korporat Schema.org" berubah — node organisasi wajib memuat NAP kanonik (`streetAddress`, telepon terkoreksi, logo valid), atribut `legalName`/`foundingDate`/`areaServed`, dan payload route `/tentang-kami` bertipe `AboutPage` yang merujuk entitas tersebut.

## Impact

- Berkas tersentuh: `src/App.tsx`, `src/utils/seoMeta.ts`, `src/components/Footer.tsx`, `src/components/Contact.tsx` (verifikasi, sumber kanonik), `src/components/pages/PrivacyPolicyPage.tsx` (koreksi alamat DPO), `index.html` (JSON-LD organisasi + navigasi), `scripts/generate-static-routes.ts` (JSON-LD per-route, semantic body, llms), `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`.
- Berkas baru: `src/components/pages/AboutPage.tsx` (nama mengikuti konvensi `*Page.tsx` yang ada).
- Tidak ada perubahan perilaku runtime selain route baru; tidak ada breaking change API atau dependensi baru.
- Data yang belum terkonfirmasi (`foundingDate`, jumlah karyawan, nomor NIB/NPWP) TIDAK di-hardcode — ditandai sebagai pertanyaan terbuka di design hingga pemilik data menyediakannya.
