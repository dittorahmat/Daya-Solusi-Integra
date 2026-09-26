## Context

Lihat `proposal.md` untuk motivasi bisnis. Evaluasi vendor perangkat lunak GRC di BUMN sering kali terbentur dilema antara memaksimalkan modul bawaan ERP (misal SAP GRC / Oracle GRC) atau mengimplementasikan platform terdedikasi lokal. 

Panduan ini disajikan melalui sistem konten blog markdown (`src/content/blog/`) dengan mematuhi mandat visual `design-taste-frontend` dan brand guidelines:
- Zero Em-Dash (`—` / `–` dilarang).
- Bebas dari AI sparkles dan dot pulse kosmetik.
- Format tabel perbandingan terstruktur (Featured Snippets bait).
- Domain resmi: `https://dsintegra.co.id`.

## Goals / Non-Goals

**Goals:**
- Menyajikan analisis komparatif yang berimbang, tajam, dan objektif antara software GRC terdedikasi vs modul ERP tambahan.
- Menyediakan tabel komparasi 5 dimensi (Kepatuhan SK-5, TCO Lisensi, Kecepatan Implementasi, Independensi Three Lines, dan Standar Kertas Kerja BPK/KAP).
- Memastikan halaman menghasilkan prerender static snapshot HTML dan terdaftar di `sitemap.xml`.

**Non-Goals:**
- Menjelek-jelekkan merek pihak ketiga (analisis tetap berbasis arsitektur fungsional dan realitas kepatuhan regulasi Indonesia).
- Mengubah arsitektur sistem routing atau skema basis data.

## Decisions

1. **Format Markdown Komparatif Terstruktur:**
   - Menyertakan *Table of Contents* dengan anchor `#...` untuk memicu sitelinks SERP.
   - Menggunakan tabel Markdown ringkas dengan baris perbandingan yang mudah dipahami oleh pengambil keputusan C-level.
2. **5 Dimensi Matriks Komparasi:**
   - Dimensi 1: Kepatuhan Format Regulasi SK-5/DKU.MBU/11/2024 & Tabel 22.
   - Dimensi 2: Total Cost of Ownership (TCO) & Fleksibilitas Lisensi (Rupiah vs Valas).
   - Dimensi 3: Siklus Waktu Implementasi (Mingguan vs Bulanan).
   - Dimensi 4: Independensi Tata Kelola (*Three Lines Model* pemisahan pencatat vs penguji).
   - Dimensi 5: Integrasi Kertas Kerja Siap Uji Auditor Eksternal (BPK, BPKP, KAP).
3. **Penyelarasan Metadata SEO:**
   - Menambahkan rute `/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn` ke `src/utils/seoMeta.ts` dan `public/sitemap.xml`.

## Risks / Trade-offs

- [Risiko kesan bias vendor] &rarr; Mitigasi: Diakui secara terbuka keunggulan modul ERP untuk pemantauan transaksi mentah (IT application control logging), sementara platform terdedikasi unggul dalam tata kelola siklus hidup, pengujian mandiri Lini 1 & 2, serta pelaporan regulasi ke Komite Audit.
