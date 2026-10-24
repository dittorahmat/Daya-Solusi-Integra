# Design

## Context
Lihat `proposal.md` untuk data analitik GSC dan latar belakang peluang. Saat ini, `GlossaryDetailPage.tsx` merender definisi formal, key takeaway, dan contoh penerapan. Namun, belum terdapat blok ringkasan direct answer AEO terdedikasi (40–50 kata), belum menyematkan skema JSON-LD terstruktur (`DefinedTerm` & `FAQPage`), serta belum memiliki tabel komparasi teknis yang dibutuhkan untuk memicu Google Featured Snippets dan kutipan akurat oleh model AI (GEO).

Selain itu, seluruh kode dan antarmuka harus mematuhi panduan `design-taste-frontend`:
- Zero em-dash (`—` / `–`).
- Tanpa neon synthwave, tanpa gradient multi-warna murahan.
- Warna solid Ink Navy (`#0b0f19`), permukaan arsitektural solid (`#0f172a`), border tipis (`border-slate-800`), aksen BUMN Blue (`#0b4596`) dan BUMN Gold (`#cca43b`).

## Goals / Non-Goals

**Goals:**
- Menambahkan field terstruktur pada tipe data `GlossaryItem` di `src/data/glossaryData.ts`:
  - `directAnswer`: Ringkasan 40–50 kata format Inverted Pyramid (untuk Featured Snippet & Voice Search).
  - `comparisonTable`: Komparasi komprehensif opsional (header & rows) untuk istilah kontrol dan defisiensi.
  - `faqList`: Daftar Q&A ringkas seputar istilah tersebut.
- Memperbarui antarmuka `GlossaryDetailPage.tsx` untuk menampilkan Direct Answer Box dengan aksen border tegas dan label sitasi regulasi.
- Menginjeksi skema JSON-LD terstruktur (`DefinedTerm` + `FAQPage`) ke dalam `<head>` saat halaman detail dirender atau diprerender.
- Memperbarui file `public/llms.txt` dan `public/llms-full.txt` agar bot LLM mengekstrak istilah audit & defisiensi secara presisi.

**Non-Goals:**
- Merombak ulang halaman direktori katalog `/glosarium` secara keseluruhan (hanya modifikasi data dan halaman detail `/glosarium/:slug`).
- Mengubah arsitektur SSR/SSG server di luar pipeline penulisan rute statis yang sudah ada.

## Decisions

### 1. Inverted Pyramid Direct Answer di Komponen Detail
- **Pendekatan:** Menempatkan blok Direct Answer tepat di bawah header judul halaman sebelum definisi panjang. Blok ini dibatasi 40–50 kata dengan format paragraf ringkas yang menyertakan entitas target dan dasar hukum resmi.
- **Alternatif yang ditolak:** Menaruh ringkasan di paling bawah atau di dalam accordion. Google dan AI crawler memprioritaskan paragraf pertama setelah H1/H2 untuk ekstraksi cuplikan langsung (Featured Snippets).

### 2. JSON-LD Schema: `DefinedTerm` dan `FAQPage`
- **Pendekatan:** Menyisipkan script JSON-LD dinamis di `GlossaryDetailPage.tsx` yang secara langsung merepresentasikan `@type: "DefinedTerm"` di dalam `@type: "DefinedTermSet"` bernama "Glosarium Kepatuhan ICOFR BUMN" serta `@type: "FAQPage"` untuk pertanyaan lazim.
- **Alternatif yang ditolak:** Hanya mengandalkan meta description HTML biasa. LLM dan mesin pencari modern lebih cepat memetakan graf pengetahuan (*knowledge graph*) jika tersedia skema tipe terminologi eksplisit.

### 3. Pemutakhiran Data Istilah High-Impression GSC
- Istilah prioritas:
  1. `compensating-control` (Posisi 2.7, target query: "compensating control adalah")
  2. `defisiensi-kontrol` (Posisi 7.7, target query: "control deficiency adalah")
  3. `elc` (Posisi 4.0, target query: "entity level control adalah")
  4. `defisiensi-signifikan` & `defisiensi-material` (klaster pendukung evaluasi defisiensi)

## Risks / Trade-offs

- **[Risk] Karakter Em-Dash tidak sengaja terselip** → Mitigasi: Jalankan validasi pra-penyelesaian menggunakan regex `Select-String -Pattern "—|–"` dan pastikan 0 hasil.
- **[Risk] Payload data glossaryData.ts membesar** → Mitigasi: Tambahkan field directAnswer dan comparisonTable hanya secara spesifik pada istilah yang ditargetkan tanpa duplikasi data.
