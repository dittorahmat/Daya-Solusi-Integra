## Purpose

Menyediakan widget entitas kontekstual (`RelatedEntitiesWidget`) pada halaman artikel blog untuk menghubungkan topik artikel ke alat kalkulator regulasi, glosarium, dan silo layanan.

## ADDED Requirements

### Requirement: Tampilan Contextual Related Entities & Interactive Tools
Sistem SHALL menampilkan bagian widget interaktif entitas terkait pada setiap halaman artikel blog (`/blog/:slug`) yang memetakan kategori/tag artikel ke alat interaktif relevan (misalnya Kalkulator Sampel TOE untuk artikel bertopik TOE atau Asesmen Maturitas untuk topik tata kelola/regulasi), entitas istilah glosarium terkait, dan silo layanan pilar.

#### Scenario: Navigasi dari artikel TOE ke kalkulator sampel
- **WHEN** pengguna membaca artikel bertopik TOE atau pengujian kontrol (seperti `panduan-sampel-toe-tabel-22-icofr-bumn`)
- **THEN** sistem menyajikan widget callout interaktif ke `/kalkulator-sampel-toe` dengan tombol aksi langsung dan rujukan istilah Tabel 22 di glosarium.

#### Scenario: Navigasi dari artikel tata kelola umum ke asesmen maturitas
- **WHEN** pengguna membaca artikel bertopik tata kelola atau regulasi umum BUMN
- **THEN** sistem menyajikan widget callout interaktif ke `/asesmen-maturitas` serta tautan istilah kunci regulasi SK-5 BUMN.

### Requirement: Kepatuhan Desain dan Larangan Tanda Pisah Em-Dash
Sistem SHALL merender widget entitas dan alat terkait dengan mematuhi prinsip desain anti-slop: kanvas solid arsitektural `#0f172a` atau `#0d1527`, garis pemisah tipis, hierarki visual jelas, dan tanpa penggunaan tanda pisah em-dash maupun en-dash.

#### Scenario: Pengecekan karakter tanda pisah pada widget entitas
- **WHEN** komponen widget entitas dirender di browser
- **THEN** seluruh teks judul, deskripsi, dan tombol aksi tidak memuat karakter em-dash maupun en-dash melainkan menggunakan titik dua atau tanda kurung.
