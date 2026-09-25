## Purpose

Menyediakan artikel studi kasus terstruktur dan benchmark implementasi ICOFR BUMN untuk memberikan bukti pengalaman empiris (E-E-A-T), memicu Google Featured Snippets, dan memperkuat konversi Komite Audit.

## ADDED Requirements

### Requirement: Publikasi Studi Kasus Terstruktur ICOFR BUMN
Sistem dokumentasi dan konten situs SHALL menyajikan artikel studi kasus lengkap dengan profil entitas anonim, daftar temuan baseline, metodologi penanganan berbasis SK-5/DKU.MBU/11/2024, serta metrik hasil kuantitatif.

#### Scenario: Akses Halaman Studi Kasus
- **WHEN** Pengguna atau perayap mesin pencari mengakses URL `/blog/studi-kasus-icofr-holding-bumn-wtp`
- **THEN** Sistem menampilkan artikel lengkap dengan metadata SEO, gambar cover resolusi tinggi berlisensi resmi, daftar isi ber-anchor, tabel perbandingan metrik sebelum vs sesudah, dan ringkasan eksekutif tanpa menggunakan em-dash atau animasi terlarang.

### Requirement: Pendaftaran dan Validasi Sitemap XML
Sistem penelusuran situs SHALL menyertakan URL studi kasus baru ke dalam berkas `public/sitemap.xml`.

#### Scenario: Verifikasi Entri URL di Sitemap
- **WHEN** Mesin pencari mengunduh `https://dsintegra.co.id/sitemap.xml`
- **THEN** Berkas sitemap memuat entri `https://dsintegra.co.id/blog/studi-kasus-icofr-holding-bumn-wtp` dengan `priority` 0.90 dan `changefreq` weekly.
