## Context

Lihat `proposal.md` untuk motivasi dan latar belakang bisnis.
Website saat ini telah memiliki Pusat Regulasi (`/regulasi`) dan Kalkulator Sampel TOE (`/kalkulator-sampel-toe`). Namun, belum ada hub terpusat yang memperlihatkan struktur nyata dari kertas kerja audit (RCM, ELC, Walkthrough) yang selama ini dicari oleh para auditor BUMN.

Kepatuhan terhadap skill `design-taste-frontend` wajib ditegakkan:
- *Design Read*: B2B Regulated Corporate & GRC Platform.
- *Visual Palette*: Ink Navy (`#0b0f19`), Deep Slate (`#0f172a`), border tegas `border-slate-800`.
- *Hard Bans*: Zero em-dash (`—`/`–`), no `Sparkles`, no unmotivated `animate-pulse`, 1 dominant CTA per viewport.

## Goals / Non-Goals

**Goals:**
- Membuat komponen `src/components/pages/RegulatoryToolkitPage.tsx` yang lapang, otoritatif, dan kaya informasi teknis.
- Menyajikan pratinjau tabel interaktif yang memperlihatkan kolom standar RCM, ELC, dan Kertas Kerja TOE.
- Menyediakan formulir permintaan paket spreadsheet resmi (XLSX) yang menghubungkan pengguna dengan tim kemitraan Daya Solusi Integra.
- Menginjeksi skema JSON-LD `@type: DataCatalog` dan `@type: DigitalDocument`.
- Mendaftarkan rute di `App.tsx`, `ROUTE_METADATA_MAP`, `ROUTE_FAQS`, `generate-static-routes.ts`, dan `public/sitemap.xml`.

**Non-Goals:**
- Membuat sistem file storage publik tanpa kontrol lead (kita mempertahankan sistem lead capture terkontrol untuk memastikan data pengunduh tervalidasi).
- Mengubah fungsi kalkulator TOE yang sudah berjalan mandiri di `/kalkulator-sampel-toe`.

## Decisions

1. **Pratinjau Tabel Interaktif Statis di Layar:**
   - *Rationale*: Google Search dan AI crawlers memprioritaskan halaman yang memiliki konten nyata di layar (*information gain*), bukan sekadar halaman download kosong dengan tombol. Menyajikan cuplikan baris contoh RCM langsung di layar meningkatkan otoritas dan dwell time pembaca.
   - *Alternative Considered*: Download langsung file statis tanpa preview. Ditolak karena buruk untuk SEO on-page dan tidak memberikan konteks edukasi.

2. **Lead Capture Langsung via Mailto / WhatsApp Pre-Filled:**
   - *Rationale*: Memberikan pengalaman instan tanpa ketergantungan database eksternal yang rumit, dengan subjek dan format data terstruktur yang langsung diterima tim marketing.

3. **Bridge Alami ke Software GRC Integra:**
   - *Rationale*: Setiap bagian pratinjau spreadsheet dilengkapi catatan teknis bahwa pengelolaan RCM manual di spreadsheet berisiko tinggi saat menghadapi audit holding BUMN (versi ganda, rumus rusak), mengarahkan pembaca secara logis ke platform `GRC Integra`.

## Risks / Trade-offs

- [Risk] Pengguna hanya menginginkan template gratis tanpa berniat menggunakan jasa konsultasi/software.
  → *Mitigation*: Formulir permohonan menyertakan pilihan centang "Tertarik demonstrasi platform GRC Integra" dan menyajikan komparasi risiko pengelolaan spreadsheet manual vs software terintegrasi.
