# Spec Delta

## MODIFIED Requirements

### Requirement: Sinkronisasi Tag Dokumen Head Sesuai Rute
Sistem SHALL menyediakan pengelola metadata yang memperbarui `document.title`, meta deskripsi, canonical link, tag OpenGraph/Twitter, `theme-color`, `og:image:alt`, serta `article:published_time`/`article:modified_time` (untuk rute artikel, prerender saja) saat pengguna bernavigasi ke rute mana pun di aplikasi.

Catatan cakupan: `twitter:site` sengaja TIDAK dipasang karena perusahaan belum memiliki akun X/Twitter resmi (keputusan pengguna saat implementasi). `article:*_time` hanya ditulis pada HTML prerender karena scraper sosial/search memakai HTML awal dan tidak mengeksekusi navigasi client-side.

#### Scenario: Navigasi ke subhalaman layanan atau glosarium
- **WHEN** pengguna berpindah rute ke `/glosarium` atau `/layanan/icofr-bumn`
- **THEN** judul jendela browser dan atribut meta deskripsi diperbarui sesuai identitas konten halaman tersebut tanpa reload halaman penuh, dan `og:image:alt` mencerminkan gambar OG rute tersebut.

### Requirement: Format Canonical URL dan Standar Domain Resmi
Sistem SHALL selalu mengonstruksi canonical link dengan basis domain resmi `https://dsintegra.co.id` diikuti dengan path rute aktif yang bersangkutan.

#### Scenario: Pengecekan canonical tag di browser DOM
- **WHEN** inspeksi tag `<link rel="canonical">` dilakukan pada rute `/platform/grc-integra`
- **THEN** nilai `href` adalah `https://dsintegra.co.id/platform/grc-integra`.
