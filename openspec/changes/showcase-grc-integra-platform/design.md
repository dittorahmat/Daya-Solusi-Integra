## Context

Daya Solusi Integra memposisikan diri sebagai pemimpin pasar konsultan GRC dan ICOFR BUMN. Keberadaan platform proprietary **GRC Integra** memberikan keunggulan kompetitif mutlak dibandingkan kompetitor lain yang masih menggunakan spreadsheet manual.

## Goals / Non-Goals

**Goals:**
- Membangun section `#platform` yang berstandar visual tinggi (desain *dark tech* elegan BUMN Navy + Gold) konsisten dengan design system DSI.
- Mengintegrasikan CTA yang mengalirkan pengunjung dari section platform langsung ke section kontak dengan prefilled field layanan "Demo Platform GRC Integra".
- Menerbitkan artikel pilar SEO ramah mesin pencari seputar Regulasi SK-5 BUMN.
- Memperkaya JSON-LD schema di `index.html` dengan tipe `SoftwareApplication` yang terafiliasi dengan DSI.

**Non-Goals:**
- Menyematkan live iframe aplikasi (karena aplikasi GRC Integra adalah portal enterprise terpisah dengan autentikasi multi-tenant).
- Mengubah arsitektur database backend DSI.

## Decisions

1. **Tab/Card Interactive Preview di `GrcIntegraPlatform.tsx`**:
   - Menampilkan 4 pilar siklus utama: Perancangan (BPM & Scoping), Implementasi (Lini 2 & Walkthrough), Pengujian Independen (Kalkulator Sampel Tabel 22 & 6 Atribut), dan Pelaporan Eksekutif (Asersi CEO/CFO QR Code).
2. **Smooth scroll & Pre-fill Kontak**:
   - Tombol "Jadwalkan Live Demo" pada section platform secara otomatis mengarahkan ke form kontak dan menyetel state dropdown ke "Demo Platform GRC Integra".

## Risks / Trade-offs

- [Risk] Beban visual berlebih. → *Mitigation*: Gunakan struktur bento grid dan ikon Lucide yang bersih tanpa efek visual yang lambat.
