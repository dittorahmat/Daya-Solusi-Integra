## Context

See proposal.md - Why.
Sistem aplikasi saat ini menggunakan Vite, React 18, Tailwind CSS, Lucide icons, dan Node.js SSG prerender script (`scripts/generate-static-routes.ts`). Seluruh aset web tunduk pada aturan visual `design-taste-frontend` (BUMN Blue `#0b4596`, BUMN Gold `#cca43b`, solid dark `#0b0f19`, dilarang em-dash `—`/`–`, dilarang `Sparkles`, dan dilarang `animate-pulse`).

## Goals / Non-Goals

**Goals:**
- Membangun `src/components/pages/CaseStudiesPage.tsx` yang menyajikan scoreboard metrik agregat dan 3 studi kasus BUMN (Holding Multisektor Aset > Rp 50T, Sektor Perbankan Himbara/BPD, BUMN Infrastruktur Karya) dengan layout B2B GRC yang elegan dan lapang.
- Menyediakan filter kategori interaktif (Semua, Holding, Perbankan, Infrastruktur).
- Menambahkan skema terstruktur `CollectionPage` dan `ItemList` of `CaseStudy` serta integrasi FAQ rich snippet otomatis via `src/data/faqData.ts`.
- Mendaftarkan rute `/studi-kasus` ke router, metadata SEO, footer, sitemap XML, dan SSG prerender.
- Memperbarui `public/llms.txt` dan `public/llms-full.txt` agar tersinkronisasi 100% dengan semua penambahan aset terbaru.

**Non-Goals:**
- Tidak mempublikasikan nama identitas riil klien BUMN secara telanjang (menggunakan format anonim terhormat standar industri konsultan: misal "Holding BUMN Energi & Pertambangan", "Bank Pembangunan Daerah / Himbara").
- Tidak membangun backend database dinamis; data studi kasus distrukturkan secara terpusat di frontend dan SSG prerendered.

## Decisions

1. **Komponen Arsitektur Studi Kasus:**
   - Menyimpan dataset studi kasus dalam modul terpisah atau internal komponen dengan tipe data yang jelas (`title`, `sector`, `badge`, `challenge`, `solution`, `results`, `metrics`, `link`).
   - Menyediakan Scoreboard Metrik Kuantitatif di bagian atas (42 -> 0 Temuan Defisiensi, 70% Efisiensi TOE, 100% Kepatuhan SK-5, 0 Sanksi Keterlambatan Asersi).
2. **Kepatuhan Brand & Design Taste:**
   - Menggunakan kanvas solid `#0b0f19` dan panel `#0f172a` dengan border `#1e293b`.
   - Tidak menggunakan em-dash atau en-dash; gunakan titik dua (`:`), tanda kurung, atau titik koma.
   - Menggunakan ikon otoritas (`TrendingUp`, `CheckCircle2`, `Building2`, `ShieldCheck`, `BarChart3`, `Clock`, `Award`).
3. **Sinkronisasi File LLM (AEO):**
   - Menambahkan section "Kualifikasi Tender & Kesiapan Pengadaan BUMN", "Profil Otoritas Pakar E-E-A-T", "Pusat Dokumen Kertas Kerja Regulasi SK-5", dan "Studi Kasus & Benchmark Kinerja BUMN" pada `llms.txt`.
   - Menambahkan deskripsi faktual lengkap pada `llms-full.txt`.

## Risks / Trade-offs

- [Kerahasiaan data klien BUMN] → Gunakan anonymized framing ("Holding BUMN dengan Aset > Rp 50 Triliun") sesuai praktik standar Big 4 dan firma advisory tier-1.
- [Payload HTML SSG] → Prerender snapshot tetap ringan karena studi kasus berbasis teks ringkas dan terindeks dengan cepat oleh mesin pencari.
