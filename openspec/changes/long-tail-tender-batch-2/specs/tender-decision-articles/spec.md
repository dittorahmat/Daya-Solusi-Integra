# Spec Delta

## Purpose

Menambah empat artikel long-tail tahap keputusan tender yang mengubah pencarian evaluatif PPK dan panitia (harga jasa, penilaian 70/30, kualifikasi vendor, timeline) menjadi permintaan penawaran konsultasi dan demo platform GRC Integra.

## ADDED Requirements

### Requirement: Artikel harga jasa implementasi ICOFR dengan breakdown budget

Sistem SHALL menyediakan artikel `harga-jasa-implementasi-icofr-bumn-2026` min. 2200 kata yang memuat breakdown orang-bulan, lisensi platform, range budget, faktor penentu harga, jebakan underpricing, FAQ min. 4, dan CTA ke layanan + kontak.

#### Scenario: PPK menyusun pagu realistis

- **WHEN** pengguna mencari `harga jasa implementasi icofr bumn` dan membuka artikel
- **THEN** pengguna menemukan komponen biaya, contoh range, faktor penentu, dan CTA konsultasi penyusunan HPS

#### Scenario: Artikel harga terindeks penuh

- **WHEN** `npm run build` dijalankan
- **THEN** entri `seoMeta.ts` + `sitemap.xml` dengan image lokal ada, snapshot prerender memuat 10 paragraf pertama + FAQ, dan guards hijau

### Requirement: Artikel evaluasi penawaran teknis bobot 70-30 dengan simulasi skor

Sistem SHALL menyediakan artikel `evaluasi-penawaran-teknis-icofr-bobot-70-30` min. 2200 kata yang memuat kriteria teknis, tabel simulasi skor 70/30, ambang kelulusan, kesalahan umum panitia, FAQ min. 4, dan CTA ke halaman pengadaan.

#### Scenario: Panitia menilai penawaran secara defensibel

- **WHEN** pengguna mencari `evaluasi penawaran teknis icofr 70 30` dan membuka artikel
- **THEN** pengguna menemukan matriks skor, contoh perhitungan, checklist evaluasi, dan CTA pendampingan tender

#### Scenario: Artikel evaluasi terhubung ke KAK-TOR dan HPS

- **WHEN** pengguna membaca artikel evaluasi sampai akhir
- **THEN** pengguna menemukan tautan ke artikel KAK/TOR batch-1, artikel HPS, dan artikel harga jasa batch ini

### Requirement: Artikel syarat kualifikasi vendor GRC dengan checklist dokumen

Sistem SHALL menyediakan artikel `syarat-kualifikasi-vendor-grc-bumn-pengalaman` min. 2200 kata yang memuat syarat administratif, pengalaman sejenis, tenaga ahli kunci, checklist dokumen, jebakan diskualifikasi, FAQ min. 4, dan CTA asesmen.

#### Scenario: Vendor menyiapkan dokumen kualifikasi

- **WHEN** pengguna mencari `syarat kualifikasi vendor grc bumn` dan membuka artikel
- **THEN** pengguna menemukan checklist dokumen, contoh pengalaman sejenis, dan CTA cek kesiapan kualifikasi DSI

#### Scenario: Artikel kualifikasi menerima inbound pengadaan

- **WHEN** pengguna membaca artikel KAK/TOR atau HPS yang sudah ada
- **THEN** pengguna menemukan tautan kontekstual ke artikel kualifikasi ini sebagai langkah lanjutan

### Requirement: Artikel timeline implementasi phased 3-6-12 bulan

Sistem SHALL menyediakan artikel `timeline-implementasi-icofr-3-6-12-bulan` min. 2400 kata yang memuat phased plan scoping sampai asersi, milestone triwulanan, dependensi entitas anak, tabel peran Lini 1/2/3, FAQ min. 4, dan CTA enterprise.

#### Scenario: Direksi merencanakan program setahun buku

- **WHEN** pengguna mencari `timeline implementasi icofr bumn berapa lama` dan membuka artikel
- **THEN** pengguna menemukan fase 3/6/12 bulan, milestone asersi, risiko keterlambatan, dan CTA roadmap enterprise DSI

#### Scenario: Artikel timeline memperkuat cluster scoping

- **WHEN** pengguna membaca artikel timeline sampai akhir
- **THEN** pengguna menemukan tautan ke artikel scoping holding-anak batch-1, artikel RCM procurement, dan halaman enterprise GRC

### Requirement: Metadata SEO, prerender, dan arsitektur internal-link batch-2

Sistem SHALL mendaftarkan keempat slug batch-2 di `seoMeta.ts` + `sitemap.xml` dengan cover image lokal, memastikan snapshot prerender memuat 10 paragraf pertama + FAQ tiap artikel, memasang 6-8 outbound link per artikel sesuai design.md, memastikan tiap artikel menerima min. 3 inbound, dan menjaga keempat artikel saling terhubung segitiga tanpa link mati.

#### Scenario: Batch-2 terindeks tanpa link mati

- **WHEN** `npm run build` dijalankan
- **THEN** keempat slug memiliki entri `seoMeta.ts` + `sitemap.xml`, snapshot prerender lengkap, guards slug/link/image hijau, dan tidak ada link internal ke slug yang tidak ada

#### Scenario: Pembaca berpindah antar artikel keputusan tender

- **WHEN** pengguna membaca salah satu dari empat artikel batch-2 sampai akhir
- **THEN** pengguna menemukan tautan ke tiga artikel batch-2 lainnya serta ke artikel batch-1 yang relevan dan halaman konversi
