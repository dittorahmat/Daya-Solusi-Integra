## Purpose

Menambah empat artikel long-tail ber-intent tender yang mengubah pencarian spesifik PPK, SPI, dan Komite Audit (KAK/TOR, contoh RCM, agregasi defisiensi, scoping holding-anak) menjadi lead konsultasi dan demo platform GRC Integra.

## ADDED Requirements

### Requirement: Artikel KAK/TOR konsultan ICOFR dengan template dan bobot teknis

Sistem SHALL menyediakan artikel `panduan-penyusunan-kak-tor-icofr-bumn-2025` (judul frontmatter memakai tahun 2026) min. 2200 kata yang memuat anatomi KAK/TOR SK-5, tabel bobot penilaian teknis 70/30 dengan kriteria knockout, checklist lampiran dokumen, perbandingan bundle jasa+software vs terpisah (TCO), FAQ min. 4, dan CTA ke halaman KAK/TOR pengadaan serta kontak; artikel ini sekaligus memperbaiki broken link dari `howtoData.ts`.

#### Scenario: Panitia pengadaan menemukan template KAK/TOR

- **WHEN** pengguna mencari `contoh kak tor konsultan icofr bumn` dan membuka artikel
- **THEN** pengguna menemukan struktur KAK/TOR siap salin, tabel bobot teknis, checklist lampiran, dan CTA ke halaman pengadaan + kontak DSI

#### Scenario: Broken link howto KAK/TOR teratasi

- **WHEN** `npm run build` dijalankan
- **THEN** entri `howtoData.ts` untuk `/blog/panduan-penyusunan-kak-tor-icofr-bumn-2025` resolve ke artikel yang ada, snapshot prerender memuat 10 paragraf pertama + FAQ, dan guards slug/link/image hijau

### Requirement: Artikel contoh RCM siklus pengadaan dengan tabel uji TOD/TOE

Sistem SHALL menyediakan artikel `contoh-rcm-siklus-pengadaan-bumn-tod-toe` min. 2400 kata yang memuat min. 7 risiko Purchase-to-Pay (termasuk 3-way match, split PO, vendor fiktif, SoD), satu tabel RCM contoh dengan kolom Risiko | Assertion (C/E/V) | Kontrol preventif/detektif | Frekuensi | Pemilik Lini 1 | Bukti | Uji TOD/TOE, panduan walkthrough 1 transaksi end-to-end, penjelasan kekurangan Excel (versi, audit trail), FAQ min. 4, dan CTA ke `/platform/grc-integra` + `/platform/bpm-workflow-editor`.

#### Scenario: Lini 1 menyalin pola RCM pengadaan

- **WHEN** pengguna mencari `contoh rcm pengadaan bumn` dan membuka artikel
- **THEN** pengguna menemukan tabel RCM siap adaptasi per siklus, cara uji walkthrough, dan CTA demo RCM di platform GRC Integra

#### Scenario: Artikel RCM terindeks penuh dengan tabel

- **WHEN** `npm run build` dijalankan
- **THEN** entri `seoMeta.ts` + `sitemap.xml` (dengan image lokal) ada untuk slug tersebut, snapshot prerender memuat tabel RCM + FAQ, dan guards hijau

### Requirement: Artikel agregasi defisiensi dan remediasi SK-5

Sistem SHALL menyediakan artikel `significant-deficiency-vs-material-weakness-icofr-remediasi` min. 2200 kata yang memuat definisi SK-5 (control deficiency, significant deficiency, material weakness), matriks/contoh agregasi (termasuk bagaimana beberapa defisiensi kecil menjadi material), timeline remediasi 30/60/90 hari + prosedur re-testing, contoh memo ke Komite Audit, dampak ke opini WTP/WDP dan asersi Dirut/Dirkeu, FAQ min. 4, dan CTA ke `/layanan/icofr-bumn` + `/layanan/enterprise-grc`.

#### Scenario: SPI menilai tingkat temuan dan menyusun remediasi

- **WHEN** pengguna mencari `perbedaan significant deficiency material weakness` dan membuka artikel
- **THEN** pengguna menemukan matriks agregasi, contoh konkret, timeline remediasi + re-testing, dan CTA assessment remediasi DSI

#### Scenario: Artikel defisiensi memperkuat cluster temuan

- **WHEN** pengguna membaca artikel defisiensi sampai akhir
- **THEN** terdapat tautan ke studi kasus WTP (eliminasi 42 defisiensi), artikel fraud, glosarium defisiensi/asersi, dan halaman layanan ICOFR/enterprise GRC

### Requirement: Artikel scoping dan konsolidasi ICOFR holding-anak

Sistem SHALL menyediakan artikel `scoping-akun-signifikan-konsolidasi-icofr-holding-anak-bumn` min. 2400 kata yang memuat kriteria kapan anak perusahaan wajib ikut SK-5, metode scoping top-down (konsolidasi ke akun signifikan ke proses), penjelasan materialitas kuantitatif + kualitatif, perlakuan eliminasi antar perusahaan, model operasi Lini 1/2/3 holding vs anak, FAQ min. 4, dan CTA ke `/layanan/enterprise-grc` + halaman sektor yang relevan.

#### Scenario: Direksi holding merencanakan scoping konsolidasi

- **WHEN** pengguna mencari `scoping icofr holding anak perusahaan` dan membuka artikel
- **THEN** pengguna menemukan langkah scoping top-down, contoh materialitas dan eliminasi, model operasi holding-anak, dan CTA konsultasi enterprise DSI

#### Scenario: Artikel holding terhubung ke sektor dan regulasi

- **WHEN** pengguna membaca artikel holding sampai akhir
- **THEN** terdapat tautan ke ketiga halaman `/sektor-bumn/*`, pusat `/regulasi` (SK-5, PER-2), studi kasus WTP, dan artikel KAK/TOR (untuk tender lanjutan)

### Requirement: Metadata SEO, prerender, dan arsitektur internal-link batch

Sistem SHALL mendaftarkan keempat slug di `seoMeta.ts` + `sitemap.xml` dengan cover image lokal, memastikan snapshot prerender memuat 10 paragraf pertama + FAQ untuk tiap artikel, memasang 6-8 outbound link per artikel sesuai matriks internal-link pada design.md, memastikan tiap artikel menerima min. 3 inbound (dari artikel lama, halaman layanan/sektor/regulasi, glosarium, atau data FAQ/howto), dan menjaga keempat artikel saling terhubung segitiga (A1<->A2<->A3<->A4) tanpa link mati.

#### Scenario: Batch terindeks tanpa link mati

- **WHEN** `npm run build` dijalankan
- **THEN** keempat slug memiliki entri `seoMeta.ts` + `sitemap.xml`, snapshot prerender lengkap, guards slug/link/image hijau, dan tidak ada link internal yang mengarah ke slug yang tidak ada

#### Scenario: Pembaca berpindah antar artikel tender

- **WHEN** pengguna membaca salah satu dari empat artikel sampai akhir
- **THEN** pengguna menemukan tautan ke tiga artikel batch lainnya (dengan anchor natural) serta ke halaman konversi yang relevan
