# Proposal

## Why

Tampilan saat ini menggunakan tema gelap pekat (*Ink Navy*) yang meskipun berkesan teknologi tinggi, memiliki tingkat keterbacaan (*readability*) yang melelahkan bagi pemangku kepentingan korporat (Direksi BUMN, Komite Audit, dan auditor SPI) yang membaca artikel regulasi panjang, matriks kepatuhan, serta panduan teknis ICOFR. Mengadopsi tema terang korporat (*Light Corporate* berbasis dominasi putih dan aksen BUMN Deep Blue ala LinkedIn / portal institusi resmi) meningkatkan keterbacaan, memenuhi standar kontras WCAG AA, dan memberikan impresi otoritas regulasi yang profesional, bersih, dan formal.

## What Changes

- **Transformasi Desain Global ke Light Mode**: Mengubah warna kanvas latar belakang dari Ink Navy (`#0b0f19`) menjadi putih dan off-white slate (`#ffffff` / `#f8fafc`).
- **Standardisasi Tipografi & Kontras Tinggi**: Mengubah warna teks utama menjadi Slate-900 (`#0f172a`) dan teks sekunder menjadi Slate-600 (`#475569`) guna menjamin keterbacaan tajam dan kontras rasio di atas 12:1.
- **Hierarki Kartu & Permukaan Arsitektural Bersih**: Menghilangkan efek glow/glassmorphism gelap, menggantikannya dengan kartu putih solid berbingkai garis halus (`border-slate-200`) dan bayangan lembut (*subtle elevated shadow*).
- **Penyesuaian Aksen Resmi BUMN**: Mempertahankan BUMN Blue (`#0b4596`) sebagai warna aksen primer (navbar brand, primary CTA, link aktif) dan mengkalibrasi BUMN Gold menjadi versi kontras tinggi (*darkened gold* `#9a7318` / `#b8860b`) agar terbaca jelas di atas latar putih.
- **Konsistensi Komponen Interaktif**: Menyelaraskan seluruh kalkulator sampel ToE, matriks regulasi, drawer navigasi, serta blok daftar isi agar berpenampilan light corporate yang lapang dan profesional.

## Capabilities

### New Capabilities
- `corporate-light-theme`: Menetapkan sistem desain dan token visual berbasis Light Mode korporat (palet putih/slate, tipografi kontras tinggi, kartu berbingkai tegas, dan aksen BUMN Blue) untuk seluruh halaman publik dan artikel pengetahuan.

### Modified Capabilities
<!-- Tidak ada perubahan requirement fungsional pada capability yang sudah ada -->

## Impact

- **Frontend Core**: `src/index.css`, `tailwind.config.js`, dan tata letak dasar `src/App.tsx`.
- **Komponen UI Bersama**: Komponen navigasi (`Navbar.tsx`), footer (`Footer.tsx`), card container, dan tombol CTA.
- **Halaman Konten & Fitur**: Komponen blog markdown/artikel, tabel regulasi, kalkulator sampel ToE, dan asesmen interaktif.
- **Dokumentasi Desain**: Pembaruan acuan sistem desain di `DESIGN.md` dan aturan visual pada `.agents/AGENTS.md`.
