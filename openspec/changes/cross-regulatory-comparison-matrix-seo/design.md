## Context

Lihat `proposal.md - Why` dan `specs/regulatory-comparison-matrix/spec.md`.
Saat ini `RegulatoryHubPage.tsx` menampilkan daftar kartu regulasi individu dan FAQ, namun belum menyajikan tabel perbandingan terpadu yang dapat dipindai sekilas (*glanceable comparison ledger*).

## Goals / Non-Goals

**Goals:**
- Menambahkan dataset matriks komparasi `REGULATORY_COMPARISON_MATRIX` di `src/data/regulationData.ts`.
- Merancang dan mengintegrasikan komponen `RegulatoryComparisonSection` di dalam `RegulatoryHubPage.tsx`.
- Memastikan struktur tabel HTML semantik (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`) agar Google Search Parser dapat mengekstrak tabel untuk Featured Snippets.
- Menyediakan tab/filter tampilan: "Semua Regulasi", "Holding BUMN", "Sektor Finansial & Bank", "Standar Audit SPKN/BPK".
- Mematuhi mandat `design-taste-frontend`: warna latar Slate solid (`#0f172a`), border tipis (`border-slate-800`), font mono untuk kode/pasal, zero em-dash (`—`/`–`).

**Non-Goals:**
- Membuat database baru di backend; data tetap tersimpan sebagai static TypeScript dataset berkinerja tinggi.

## Decisions

### 1. Struktur Semantik Tabel vs Div Grid
- **Keputusan:** Menggunakan elemen HTML semantik `<table>` di dalam pembungkus dengan overflow horizontal (`overflow-x-auto`).
- **Rasional:** Google Rich Results dan Featured Snippets secara khusus memprioritaskan elemen `<table>` standar daripada CSS flex/grid murni saat menyajikan jawaban berbentuk matriks di SERP.

### 2. Dimensi Komparasi yang Ditampilkan
1. Regulasi & Otoritas Penerbit
2. Entitas Wajib (Scope)
3. Framework Rujukan (COSO / ISO 31000 / Cobit / SPKN)
4. Kewajiban Asersi Direksi (Wajib vs Rekomendasi)
5. Frekuensi Pengujian Kontrol (Tahunan / Triwulanan / Walkthrough Lini 2)
6. Sanksi / Konsekuensi Audit (Opini WTP vs Catatan Defisiensi Material)

## Risks / Trade-offs

- **[Risk]** Tabel lebar dapat terpotong pada layar mobile kecil (360px:400px).
  - **Mitigasi:** Tambahkan petunjuk visual scroll horizontal (`Scroll horizontal untuk melihat seluruh perbandingan`) dan sticky header pada kolom pertama regulasi jika memungkinkan.
