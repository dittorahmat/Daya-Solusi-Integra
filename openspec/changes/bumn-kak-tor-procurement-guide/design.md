## Context

Lihat `proposal.md` untuk motivasi dan latar belakang bisnis.
Website saat ini telah memiliki profil vendor pengadaan BUMN (`/kualifikasi-vendor`) dan pusat toolkit regulasi (`/toolkit-regulasi`). Namun, belum ada panduan spesifik yang menyajikan pasal-pasal klausul Kerangka Acuan Kerja (KAK) dan rincian spesifikasi teknis software yang siap diadopsi oleh Pejabat Pembuat Komitmen (PPK) atau Panitia Lelang BUMN.

Ketentuan skill `design-taste-frontend` wajib ditegakkan:
- *Design Read*: B2B Regulated Corporate & GRC Platform.
- *Visual Palette*: Solid Ink Navy (`#0b0f19`), Deep Navy Slate (`#0f172a`), border tipis arsitektural (`border-slate-800`), aksen BUMN Blue (`#0b4596`) dan BUMN Gold (`#cca43b`).
- *Hard Bans*: Zero em-dash (`—`/`–`), no `Sparkles`, no unmotivated `animate-pulse`, 1 dominant CTA per viewport.

## Goals / Non-Goals

**Goals:**
- Membuat komponen halaman `src/components/pages/KakTorProcurementPage.tsx` yang memuat struktur klausul KAK resmi pengadaan konsultan ICOFR dan pengadaan sistem software GRC.
- Menyediakan tab switcher bersih untuk memisahkan 3 fokus: Klausul Jasa Konsultasi, Spesifikasi Teknis Perangkat Lunak, dan Kualifikasi Personil Tenaga Ahli.
- Menyediakan tabel matriks jadwal kerja tipikal (tahap 1 s.d. 5) dan deliverable dokumen formal.
- Menyediakan formulir permintaan dokumen draf Word (.DOCX) terstruktur yang mengirimkan email ke `marketing@dsintegra.co.id`.
- Mendaftarkan rute di `App.tsx`, `seoMeta.ts`, `faqData.ts`, `Footer.tsx`, `generate-static-routes.ts`, dan `sitemap.xml`.

**Non-Goals:**
- Menyediakan tautan unduh file Word terbuka tanpa penangkapan prospek (lead magnet harus terkontrol demi akuntabilitas calon mitra).
- Mengubah struktur halaman kualifikasi tender eksisting di `/kualifikasi-vendor`.

## Decisions

1. **Struktur Tab Interaktif 3 Dimensi Pengadaan:**
   - *Rationale*: Panitia lelang memiliki kebutuhan berbeda: sebagian butuh jasa konsultasi pendampingan, sebagian butuh lisensi software, dan sebagian menyusun kriteria evaluasi tenaga ahli. Tab interaktif memudahkan pembaca menyalin klausul yang relevan tanpa halaman terasa berantakan.
   - *Alternative Considered*: Halaman panjang satu kolom tanpa tab. Ditolak karena terlalu padat dan menyulitkan navigasi cepat di perangkat mobile/desktop.

2. **Klausul Spesifikasi Teknis Memuat Keunggulan Native GRC Integra:**
   - *Rationale*: Dengan memasukkan kriteria baku seperti arsitektur on-premise, mesin visualisasi BPMN proses bisnis (Lampiran 3), dan kalkulator deviasi nol Tabel 22, kita secara elegan menciptakan keselarasan spesifikasi lelang dengan keunggulan produk GRC Integra.
   - *Alternative Considered*: Spesifikasi generik. Ditolak karena tidak memberikan diferensiasi kompetitif bagi Daya Solusi Integra.

3. **Lead Capture via Mailto & WhatsApp:**
   - *Rationale*: Menyederhanakan penanganan prospek tanpa memerlukan server backend tambahan, langsung masuk ke kotak masuk tim tender Daya Solusi Integra dengan subjek terstandarisasi.

## Risks / Trade-offs

- [Risk] Calon klien hanya menyalin teks tanpa menghubungi tim tender.
  → *Mitigation*: Menyediakan penawaran nilai tambah di formulir berupa "Pendampingan Reviu Rencana Kerja & Anggaran Perusahaan (RKAP)" dan "Penyusunan Harga Perkiraan Sendiri (HPS) Estimasi".
