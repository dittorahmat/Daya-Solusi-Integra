## Why

Sebagai firma konsultan tata kelola dan penyedia platform pelaporan keuangan BUMN yang memproses data prospek eksekutif, situs `dsintegra.co.id` berada di bawah evaluasi ketat standar Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) untuk kategori YMYL (Your Money Your Life) serta kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022). Saat ini tautan footer untuk Kebijakan Privasi dan Pernyataan Independensi masih berupa teks statis tanpa halaman tujuan aktif. Mengaktifkan kedua halaman ini melenyapkan sinyal inkonsistensi (*broken trust signals*), menjamin kepatuhan hukum pemrosesan data prospek, dan mengukuhkan integritas independensi konsultansi di hadapan Komite Audit BUMN dan mesin pencari.

## What Changes

- Menambahkan halaman dedikasi `/kebijakan-privasi` dengan kepatuhan pemrosesan data prospek sesuai UU PDP No. 27/2022 Indonesia, enkripsi data, dan hak pemilik data.
- Menambahkan halaman dedikasi `/pernyataan-independensi` yang menguraikan komitmen independensi etis konsultan sesuai standar IAPI, BPKP, dan kerangka COSO tanpa benturan kepentingan dalam pendampingan asersi manajemen.
- Mengaktifkan tautan navigasi di `src/components/Footer.tsx` agar mengarah secara fungsional ke masing-masing rute.
- Menghubungkan rute baru ke `src/App.tsx`, mendaftarkannya ke `src/utils/seoMeta.ts`, `public/sitemap.xml`, `public/llms.txt`, dan generator SSG statis.

## Capabilities

### New Capabilities
- `eeat-trust-pages`: Halaman legal dan kepercayaan otoritas institusional di rute `/kebijakan-privasi` dan `/pernyataan-independensi` dengan konten kepatuhan regulasi Indonesia.

### Modified Capabilities
<!-- None: No previous base specs under openspec/specs/ are being modified -->

## Impact

- Penambahan berkas `src/components/pages/PrivacyPolicyPage.tsx` dan `src/components/pages/IndependenceStatementPage.tsx`.
- Pembaruan `src/App.tsx`, `src/components/Footer.tsx`, `src/utils/seoMeta.ts`, `public/sitemap.xml`, dan `public/llms.txt`.
- Memperkuat skor sinyal E-E-A-T Google dan konversi form kontak.
