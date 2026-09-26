## Context

See proposal.md - Why.
Sistem SSG kita (`scripts/generate-static-routes.ts`) telah meng-generate 43 rute statis HTML dengan metadata JSON-LD `@graph`. Saat ini fungsi `buildJsonLdForRoute()` menyematkan node `WebSite`, `Organization`, dan `FAQPage` (bila rute memiliki FAQ), namun belum menyertakan simpul `@type: BreadcrumbList` formal dan simpul `@type: WebPage` dengan properti `speakable`.

Di sisi konten, tema temuan audit defisiensi adalah magnet kueri utama bagi praktisi SPI (Satuan Pengawasan Intern) dan akuntan BUMN.

## Goals / Non-Goals

**Goals:**
- Mengimplementasikan helper otomatis di `scripts/generate-static-routes.ts` untuk membangun simpul `@type: BreadcrumbList` di dalam JSON-LD `@graph` untuk semua rute.
- Menambahkan `@type: WebPage` dengan properti `speakable: { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".article-lead p", "main > p:first-of-type"] }` untuk rute glosarium, blog, dan panduan regulasi.
- Membangun `src/components/pages/AuditFindingsPage.tsx` yang memuat 8 klaster temuan audit populer, dampak risiko akun keuangan, dan Corrective Action Plan (CAP) SK-5/2024.
- Mendaftarkan rute `/temuan-audit-icofr` di router React, metadata SEO, footer, sitemap XML, SSG prerender, dan berkas `llms.txt`.

**Non-Goals:**
- Tidak mempublikasikan data sensitif atau nama BUMN riil yang memiliki temuan audit (menggunakan format generic anonymized case/typology).
- Tidak merombak struktur URL yang sudah ada.

## Decisions

1. **Arsitektur BreadcrumbList di JSON-LD:**
   - URL diurai berdasarkan segmen (`/`, `/sektor-bumn/`, `/sektor-bumn/perbankan`).
   - Setiap segmen dipetakan ke nama label yang bersih dan URL kanonikal resmi `https://dsintegra.co.id/...`.
   - Simpul disematkan ke dalam array `@graph` bersama `Organization` dan `WebSite`.
2. **Katalog Temuan Defisiensi Audit BUMN:**
   - Dikelompokkan ke dalam 3 filter kategori:
     1. *Finansial & Pelaporan Akuntansi* (Intercompany balancing, Pengakuan Pendapatan PSAK 72, Rekonsiliasi Bank).
     2. *ITGC & Keamanan Sistem* (Segregasi Tugas SoD ERP, Akses Database Keuangan, Otomasi ITAC tanpa Bukti ITGC).
     3. *Operasional, Pengadaan & Tata Kelola* (Dokumentasi Vendor Subkontraktor, Sampel TOE Tidak Normatif).
   - Setiap item memuat: Judul Temuan, Klasifikasi Defisiensi (Significant Deficiency / Control Deficiency), Akun Terdampak, Akar Masalah, Risiko Finansial, dan Rekomendasi Remediasi SK-5.
3. **Kepatuhan Brand & Anti-Slop:**
   - Solid Ink Navy `#0b0f19`, panel solid `#0f172a`, border tipis `#1e293b`.
   - Nol em-dash (`—`/`–`), gunakan titik dua (`:`), tanda kurung, atau titik koma.
   - Tanpa icon `Sparkles`, tanpa `animate-pulse`.

## Risks / Trade-offs

- [Kesesuaian Label Breadcrumb] → Buat kamus pemetaan label rute yang rapi agar nama breadcrumb di SERP terbaca alami dalam bahasa Indonesia baku (misal `sektor-bumn` -> `Sektor BUMN`).
