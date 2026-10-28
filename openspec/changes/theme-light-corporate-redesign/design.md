# Design

## Context

Proyek saat ini menggunakan styling Tailwind CSS yang dikonfigurasi untuk dark theme (`bg-[#0b0f19]`, `bg-[#0d1e3d]`, `text-slate-200`, `border-slate-800`). Seluruh halaman beranda, artikel blog markdown, kalkulator ToE, dan showcase produk memakai token warna gelap. Desain baru mengadopsi Light Corporate Theme (Opsi A) dengan basis putih/slate dan aksen BUMN Deep Blue.

Lihat `proposal.md` untuk motivasi dan `specs/corporate-light-theme/spec.md` untuk kontrak spesifikasi perilaku.

## Goals / Non-Goals

**Goals:**
- Mengganti palet warna latar global dari dark navy ke pure white / off-white slate (`#ffffff` / `#f8fafc`).
- Memperbarui palet teks global menjadi Slate-900 (`#0f172a`) untuk judul dan Slate-600 (`#475569`) untuk teks paragraf guna menjamin rasio kontras WCAG AA (> 12:1).
- Mengonversi kartu container menjadi permukaan putih solid dengan border `slate-200` dan drop shadow halus.
- Menyesuaikan komponen navigasi (`Navbar.tsx` dan `Footer.tsx`) dengan header korporat berlatar putih bersih atau border pembatas tipis.
- Mengatur aksen BUMN Gold ke format darkened contrast (`#9a7318` / `#b8860b`) agar terbaca tajam pada latar terang.
- Memastikan semua komponen interaktif (Kalkulator ToE, Matriks Regulasi, FAQ accordion) tetap berfungsi 100% dengan styling baru.

**Non-Goals:**
- Tidak mengubah struktur rute URL, metadata SEO/sitemap, atau canonical URL.
- Tidak mengubah copy/isi teks regulasi BUMN atau konten artikel markdown.
- Tidak mengubah fungsionalitas logika kalkulator sampel ToE atau asesmen maturitas.

## Decisions

### 1. Penerapan Ketat House Rules Anti-Slop (`design-taste-frontend`)
- **No Floating Ambient Glows / Blur Blobs**: Menghilangkan seluruh `blur-[150px]` atau gradien kabur kosmetik di latar belakang. Kanvas sepenuhnya menggunakan flat tone bersih (`#ffffff` dan `#f8fafc`).
- **No Fake Glassmorphism / Frosted Backdrop**: Navbar dan kontainer tidak menggunakan efek kaca buram sintetis tebal. Navbar menggunakan flat white solid dengan border bawah tipis yang tegas.
- **No Shadows on Things at Rest**: Permukaan tidak menggunakan drop-shadow tebal atau bayangan mengambang palsu pada kondisi diam. Pemisahan permukaan menggunakan kontras nada warna datar (*small tone step* `bg-slate-50` ke `bg-white`) dan hairline border presisi.
- **No Eyebrow Pills / Generic "New" Chips**: Dilarang menggunakan label pill kecil di atas judul utama (*hero eyebrow pill*). Informasi langsung disampaikan pada judul utama yang kuat dan lugas.
- **No Unmotivated Pulse Dots**: Dilarang meletakkan dot berkedip kosmetik (`animate-pulse`).
- **Zero Em-Dash & En-Dash (`—` / `–`)**: Seluruh teks mematuhi aturan zero em-dash; menggunakan titik dua (`:`), tanda kurung, atau titik koma.
- **Headlines Dua Baris atau Kurang**: Seluruh judul `h1`–`h6` dirancang padat, lugas, dan tidak wrap lebih dari dua baris.

### 2. Token Warna Latar Belakang & Permukaan
- **Pilihan**: `bg-white` untuk kanvas utama dan card container, dengan `bg-slate-50` (`#f8fafc`) untuk section selang-seling dan header tabel.
- **Rasional**: Memberikan ritme visual yang nyaman tanpa kesan monoton, mirip standar publikasi PwC/Gartner dan LinkedIn enterprise.
- **Alternatif**: Cream/beige dilarang keras oleh aturan desain proyek (`AGENTS.md`).

### 3. Navbar & Header Styling
- **Pilihan**: Background putih solid bersih dengan border bawah tipis (`border-b border-slate-200`). Teks navigasi menggunakan `text-slate-700 hover:text-bumn-blue` dengan satu CTA primer yang dominan.
- **Rasional**: Terlihat modern, bersih, dan memberi ruang fokus pada logo resmi Daya Solusi Integra dan CTA konsultasi.

### 4. Penataan Kartu & Pembatas (Single Surface Grouping)
- **Pilihan**: Menghilangkan `bg-slate-900/80` dan `border-slate-800`. Menggantinya dengan permukaan solid `bg-white border border-slate-200` dengan pembagian data menggunakan garis pemisah tipis (*editorial ledger*).
- **Rasional**: Menjaga estetika flat & clean sesuai aturan anti-slop (*no fake glassmorphism, no ambient glow blobs*).

### 5. Aksen BUMN Blue & BUMN Gold
- **Pilihan**: BUMN Blue (`#0b4596`) tetap menjadi warna primer untuk tombol CTA (`bg-[#0b4596] hover:bg-[#083574] text-white`). BUMN Gold diatur menjadi `#9a7318` untuk elemen teks atau badge agar kontras di latar putih tetap tinggi (> 4.5:1).

## Risks / Trade-offs

- **[Risk]** Kontras teks lama yang menggunakan class `text-slate-400` atau `text-gray-300` menjadi tidak terlihat atau pudar di latar putih.
  → **Mitigasi**: Lakukan audit menyeluruh pada komponen inti dan ganti token `text-slate-400` menjadi `text-slate-600` / `text-slate-700`.
- **[Risk]** Komponen SVG grafis atau ikon yang di-hardcode dengan warna putih menjadi hilang di latar putih.
  → **Mitigasi**: Pastikan ikon SVG menggunakan class dinamis `text-bumn-blue` atau `text-slate-700`.
- **[Risk]** Kode blok markdown pada artikel blog menjadi kurang kontras.
  → **Mitigasi**: Gunakan styling kode `bg-slate-100 text-slate-900 border border-slate-200` untuk inline code dan styling monokrom kontras tinggi untuk block pre/code.
