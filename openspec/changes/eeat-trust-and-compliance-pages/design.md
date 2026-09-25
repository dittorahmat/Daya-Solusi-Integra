## Context

Aplikasi memiliki footer di `src/components/Footer.tsx` yang memuat teks "Kebijakan Privasi" dan "Pernyataan Independensi". Kedua dokumen ini penting untuk kriteria evaluasi Google E-E-A-T (khususnya Trustworthiness pada sektor YMYL Keuangan dan Audit BUMN) serta kepatuhan pemrosesan data prospek sesuai UU PDP No. 27/2022. Komponen akan dirancang dengan tata letak editorial yang lapang, arsitektur kartu solid `#0f172a`, tipografi berkontras tinggi, dan bebas dari tanda em-dash (`—`/`–`) sesuai pedoman `design-taste-frontend`.

## Goals / Non-Goals

**Goals:**
- Membuat komponen `src/components/pages/PrivacyPolicyPage.tsx` di rute `/kebijakan-privasi` dengan pasal-pasal perlindungan data sesuai UU PDP.
- Membuat komponen `src/components/pages/IndependenceStatementPage.tsx` di rute `/pernyataan-independensi` dengan komitmen integritas etis konsultan independen.
- Menghubungkan rute ke `src/App.tsx` dan mengaktifkan tautan di `src/components/Footer.tsx`.
- Mendaftarkan rute ke `src/utils/seoMeta.ts`, `public/sitemap.xml`, `public/llms.txt`, dan generator SSG statis.

**Non-Goals:**
- Mengembangkan sistem manajemen persetujuan cookie (cookie banner) yang mengganggu pengalaman pengguna eksekutif (situs ini tidak menggunakan tracking pihak ketiga yang invasif).

## Decisions

1. **Struktur Konten Statis Berbasis Editorial Korporat**:
   - Konten hukum disajikan dalam format ledger/seksi terstruktur bernomor yang mudah dipindai oleh auditor dan bot pencari.
2. **Kepatuhan Ketat Anti-Slop**:
   - Tidak ada tanda em-dash (`—`/`–`), bebas efek neon berkedip, mengedepankan tone resmi BUMN dan standar auditing profesional.

## Risks / Trade-offs

- **[Kesesuaian Nomenklatur Regulasi]** → Pasal-pasal kebijakan merujuk langsung pada UU PDP No. 27/2022 dan standar audit BPKP/SPKN.
