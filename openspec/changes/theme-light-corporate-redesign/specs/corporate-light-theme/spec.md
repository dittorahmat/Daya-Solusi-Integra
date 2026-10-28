# Spec Delta

## Purpose

Menyediakan fondasi sistem desain tema terang korporat (Light Corporate Theme) dengan kontras tinggi, keterbacaan artikel maksimal, dan tampilan bersih profesional untuk seluruh antarmuka publik dan modul interaktif.

## ADDED Requirements

### Requirement: Global Light Corporate Canvas
Sistem antarmuka web SHALL menerapkan kanvas latar belakang berwarna terang (putih solid atau off-white slate) untuk seluruh halaman publik tanpa latar belakang gelap pekat ink navy.

#### Scenario: User visits any public page
- **WHEN** pengguna membuka halaman beranda, artikel blog, glosarium, atau halaman platform
- **THEN** halaman dimuat dengan kanvas dasar bernuansa terang (#ffffff atau #f8fafc) dengan kontras teks gelap yang tajam.

### Requirement: High Contrast Typography
Sistem tipografi SHALL menggunakan warna teks gelap pekat (Slate-900 / #0f172a) untuk teks utama dan Slate-600 (#475569) untuk teks sekunder sehingga memenuhi rasio kontras WCAG AA.

#### Scenario: User reads long form regulatory article
- **WHEN** pengguna membaca konten panduan regulasi ICOFR atau artikel kepatuhan BUMN
- **THEN** teks judul dan paragraf memiliki kontras rasio minimal 4.5:1 terhadap latar belakang putih dengan line-height yang nyaman.

### Requirement: BUMN Brand Accent Adaptation
Sistem SHALL mempertahankan BUMN Blue (#0b4596) sebagai warna aksen primer dan mengadaptasi aksen sekunder ke versi darkened gold berakar kontras tinggi (#9a7318 / #b8860b) di atas latar terang.

#### Scenario: Primary call to action and highlights rendering
- **WHEN** tombol aksi utama (CTA), tautan aktif, atau badge penghargaan ditampilkan
- **THEN** tombol utama berlatar BUMN Blue dengan teks putih yang tajam, dan elemen emas mempertahankan tingkat keterbacaan yang jelas tanpa menyilaukan.

### Requirement: Elevated Crisp Card Containers
Seluruh kartu konten, kontainer asesmen, dan tabel data SHALL menggunakan permukaan putih solid dengan garis tepi tipis (border-slate-200) dan bayangan lembut tanpa efek neon atau blur glow.

#### Scenario: Card presentation on dashboard or index
- **WHEN** kartu fitur, preview artikel blog, atau kartu layanan dirender di viewport
- **THEN** kartu tampil dengan latar putih solid, border tegas slate-200, dan pembagian hierarki visual yang rapi.
