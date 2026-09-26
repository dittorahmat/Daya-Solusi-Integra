## Context

Lihat `proposal.md` untuk latar belakang dan motivasi bisnis.
Website saat ini telah memiliki halaman statis regulasi (`/regulasi`), layanan (`/layanan/icofr-bumn`), dan produk (`/platform/grc-integra`). Namun, belum ada satu halaman terpusat yang secara spesifik dirancang untuk menjawab kebutuhan panitia pengadaan/tender BUMN yang membutuhkan data legalitas resmi, klasifikasi KBLI, arsitektur keamanan on-premise, serta panduan Kerangka Acuan Kerja (KAK).

Kepatuhan terhadap skill `design-taste-frontend` wajib ditegakkan:
- *Design Read*: B2B Regulated Corporate & GRC Platform.
- *Visual Palette*: Ink Navy (`#0b0f19`), Deep Slate (`#0f172a`), border tegas `border-slate-800`.
- *Hard Bans*: Zero em-dash (`—`/`–`), no `Sparkles`, no unmotivated `animate-pulse`, 1 dominant CTA per viewport.

## Goals / Non-Goals

**Goals:**
- Membuat komponen halaman statis `src/components/pages/BumnProcurementPage.tsx` yang bersih, lapang, dan berwibawa.
- Menyediakan data kualifikasi vendor: Legalitas & KBLI (70209 & 62019/62029), kesiapan NDA, arsitektur kepatuhan data UU PDP (On-Premise / Local Private Cloud).
- Menyediakan panduan praktis penyusunan KAK/TOR pengadaan sistem ICOFR & jasa pendampingan untuk panitia tender.
- Menambahkan data terstruktur JSON-LD (`Service`, `ProfessionalService`, `Offer`) dengan breadcrumb dan canonical URL `https://dsintegra.co.id/kualifikasi-vendor`.
- Menghubungkan routing di `App.tsx`, prerender generator di `scripts/generate-static-routes.ts`, serta mendaftarkan URL ke `public/sitemap.xml`.

**Non-Goals:**
- Membangun portal login tender atau sistem e-procurement internal.
- Menambahkan form pengunggahan berkas penawaran harga interaktif di sisi klien.

## Decisions

1. **Struktur Halaman Flat & Glanceable (Tanpa Tab Switcher Rumit):**
   - *Rationale*: Panitia pengadaan membaca berkas dengan cepat. Informasi disajikan dalam section berurutan dengan *breathing room* lega (`py-24` sampai `py-32`) menggunakan grid arsitektural solid.
   - *Alternative Considered*: Tab accordion per topik pengadaan. Ditolak karena menyembunyikan informasi penting dari *glanceability* eksekutif dan mesin pencari.

2. **Klausul KAK Berbentuk Box Copyable / Ledger:**
   - *Rationale*: Memudahkan panitia tender menyalin poin-poin spesifikasi minimum (misal: modul RCM SK-5, hak kepemilikan data lokal, kualifikasi lead consultant CA/CIA) ke dalam draf KAK internal BUMN.
   - *Alternative Considered*: File PDF download saja. Ditolak karena konten HTML teks langsung jauh lebih ramah SEO dan mudah dicari di SERP Google.

3. **CTA Tunggal yang Terfokus:**
   - *Rationale*: Aksi primer diarahkan untuk menghubungi Tim Kemitraan & Pengadaan via email resmi `marketing@dsintegra.co.id` dengan template subjek terstruktur atau opsi konsultasi KAK pengadaan via WhatsApp Business resmi.

## Risks / Trade-offs

- [Risk] Halaman terkesan kaku atau terlalu legalistik.
  → *Mitigation*: Mengimbangi data tabel KBLI dan legalitas dengan diagram alir arsitektur pengadaan yang bersih dan kartu spesifikasi teknis modern.
- [Risk] Duplikasi konten dengan halaman layanan ICOFR.
  → *Mitigation*: Menitikberatkan sudut pandang pada kualifikasi formal administratif & teknis pengadaan (KBLI, UU PDP, On-Premise vs Cloud, SLA, format KAK), bukan sekadar metodologi audit.
