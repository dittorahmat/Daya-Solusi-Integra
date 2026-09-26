## Purpose

Menyediakan komponen navigasi daftar isi mengambang (sticky Table of Contents) pada halaman detail artikel blog untuk mempermudah navigasi pembaca dan memicu Google SERP jump-to sitelinks.

## ADDED Requirements

### Requirement: Interactive Sticky Table of Contents
Sistem HARUS menyediakan komponen daftar isi interaktif pada tata letak desktop yang tetap terlihat saat pengguna menggulir halaman, menyorot judul bagian aktif, dan memungkinkan navigasi instan ke anchor target.

#### Scenario: Heading Extraction and Click Navigation
- **WHEN** pengguna membuka artikel blog yang memiliki judul bagian H2
- **THEN** komponen daftar isi menampilkan daftar judul dengan tautan anchor yang melompat mulus ke elemen target saat diklik.

#### Scenario: Scroll-spy Active Section Tracking
- **WHEN** pengguna menggulir konten artikel melewati batas judul H2 tertentu
- **THEN** item daftar isi yang bersesuaian dengan judul yang sedang dibaca otomatis mendapatkan status aktif tanpa mengganggu performa gulir halaman.
