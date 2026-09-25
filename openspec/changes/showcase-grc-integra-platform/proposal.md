## Why

Daya Solusi Integra memiliki platform perangkat lunak khusus siklus hidup ICOFR BUMN bernama **GRC Integra** (sebelumnya IndoGRC Pro/IndoRCM) yang mengimplementasikan regulasi resmi SK-5/DKU.MBU/11/2024. Saat ini, situs web DSI belum menonjolkan keberadaan software ini. Menonjolkan GRC Integra di landing page utama, memperbarui opsi formulir intake lead, mengintegrasikan kata kunci software ke SEO/metadata, dan menerbitkan artikel pilar edukasi akan mengubah penawaran DSI menjadi *Tech-Enabled Consulting* yang sangat atraktif bagi BUMN dan memicu perolehan lead demo produk.

## What Changes

- Menambahkan komponen showcase interaktif `src/components/GrcIntegraPlatform.tsx` di landing page beranda untuk memamerkan keunggulan software GRC Integra (BPM Visual, Kalkulator Sampel Tabel 22, Validasi Lini 2, Asersi CEO/CFO ber-QR Code, dan Portal Auditor Eksternal).
- Memperbarui `src/App.tsx`, `src/components/Header.tsx`, dan `src/components/Footer.tsx` untuk menyertakan navigasi `#platform` ke section GRC Integra.
- Menambahkan pilihan layanan "Demo Platform GRC Integra (Software ICOFR BUMN)" di form kontak `src/components/Contact.tsx`.
- Menambahkan artikel blog pilar SEO baru `src/content/blog/panduan-sk5-icofr-grc-integra.md` yang mengupas regulasi SK-5/DKU.MBU/11/2024 dan solusi GRC Integra.
- Memperbarui `index.html` (metadata & JSON-LD `SoftwareApplication`) dan `public/sitemap.xml` agar mengindeks section `#platform` dan artikel blog baru.

## Capabilities

### New Capabilities
- `platform-showcase`: Section presentasi interaktif fitur dan benefit platform GRC Integra beserta trigger CTA demo.
- `sk5-knowledge-pillar`: Artikel blog pilar mendalam tentang regulasi SK-5 BUMN dan otomatisasi dengan GRC Integra.

### Modified Capabilities
<!-- None -->

## Impact

- Penambahan komponen UI `src/components/GrcIntegraPlatform.tsx`.
- Modifikasi integrasi di `src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, dan `src/components/Contact.tsx`.
- Penambahan artikel di `src/content/blog/panduan-sk5-icofr-grc-integra.md`.
- Pembaruan SEO di `index.html` dan `public/sitemap.xml`.
