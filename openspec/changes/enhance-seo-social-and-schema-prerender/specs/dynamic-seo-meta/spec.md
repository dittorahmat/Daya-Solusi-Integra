## MODIFIED Requirements

### Requirement: Sinkronisasi Tag Dokumen Head Sesuai Rute
Sistem SHALL menyediakan pengelola metadata yang memperbarui `document.title`, meta deskripsi, canonical link, serta tag OpenGraph/Twitter (termasuk `og:image` dan `twitter:image`) saat pengguna bernavigasi ke rute mana pun di aplikasi.

#### Scenario: Navigasi ke subhalaman layanan atau glosarium
- **WHEN** pengguna berpindah rute ke `/glosarium` atau `/layanan/icofr-bumn`
- **THEN** judul jendela browser, atribut meta deskripsi, dan meta tag og:image diperbarui sesuai identitas konten halaman tersebut tanpa reload halaman penuh.

#### Scenario: Navigasi ke artikel blog
- **WHEN** pengguna berpindah rute ke artikel blog spesifik
- **THEN** tag `og:image` dan `twitter:image` diupdate secara reaktif menggunakan URL gambar sampul (`coverImage`) artikel tersebut.
