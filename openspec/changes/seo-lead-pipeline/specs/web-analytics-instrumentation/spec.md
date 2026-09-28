# Spec Delta

## Purpose

Memberi tim visibilitas dasar atas perilaku pengunjung (halaman dilihat, tombol demo diklik) dengan instrumentasi hemat-privasi pihak-pertama, sehingga volume kunjungan qualified dan titik bocor menuju formulir dapat diukur tanpa melanggar UU PDP.

## ADDED Requirements

### Requirement: Pengukuran Pageview Sadar-Rute SPA
Sistem SHALL mencatat satu pageview untuk setiap halaman yang benar-benar dilihat pengunjung, mengikuti `normalizedPath` yang dipakai router (termasuk navigasi client-side tanpa reload). Rute tidak dikenal (halaman 404) SHALL tercatat dengan penanda 404, bukan sebagai pageview halaman valid.

#### Scenario: Navigasi antar halaman tanpa reload
- **WHEN** pengunjung membuka `/` lalu bernavigasi ke `/platform/grc-integra` dan `/kalkulator-sampel-toe` via navigasi client-side
- **THEN** tercatat tiga pageview dengan path yang benar sesuai urutan kunjungan.

#### Scenario: Kunjungan ke slug salah
- **WHEN** pengunjung membuka `/blog/slug-yang-tidak-ada`
- **THEN** kunjungan tercatat sebagai pageview bertanda 404, bukan sebagai artikel valid.

### Requirement: Pengukuran Klik CTA Demo dengan Konteks Halaman
Sistem SHALL mencatat setiap klik ajakan demo (mis. "Jadwalkan Demo Teknis" dan variannya) beserta halaman tempat klik terjadi dan layanan yang di-prefill. Klik yang tidak mengarah ke permintaan demo (navigasi biasa, tautan baca) DILARANG tercatat sebagai peristiwa demo.

#### Scenario: Klik demo di halaman platform
- **WHEN** pengunjung mengklik "Jadwalkan Demo Teknis" di `/platform/grc-integra`
- **THEN** tercatat satu peristiwa demo berisi halaman asal dan konteks layanan GRC Integra, sebelum navigasi ke formulir terjadi.

### Requirement: Patuh-Privasi dan Anti-Blokir
Instrumentasi SHALL menghormati sinyal Do-Not-Track browser (tidak merekam sesi yang mengaktifkannya), SHALL menyimpan pengenal sesi maksimal selama sesi browser berjalan (tidak ada pelacakan lintas-kunjungan), dan SHALL gagal-diam (silent fail) ketika pemblokir iklan atau jaringan menggagalkan pengiriman peristiwa — pengalaman pengunjung DILARANG terganggu dalam kondisi apa pun.

#### Scenario: Pengunjung mengaktifkan Do-Not-Track
- **WHEN** browser mengirim sinyal Do-Not-Track dan pengunjung menjelajah tiga halaman
- **THEN** tidak ada pageview maupun peristiwa demo yang direkam untuk sesi tersebut, dan situs tetap berfungsi penuh.

#### Scenario: Pemblokir menggagalkan endpoint peristiwa
- **WHEN** pengiriman peristiwa diblokir di sisi klien
- **THEN** tidak ada galat terlihat, tidak ada retry yang membebani, dan pengiriman formulir kontak tetap bekerja normal.

### Requirement: Tanpa Beban Render
Sistem SHALL mengirim peristiwa analitik secara non-blocking (diutamakan setelah halaman interaktif) dan DILARANG menambah permintaan render-blocking pada HTML prerender.

#### Scenario: Audit performa halaman dengan instrumentasi aktif
- **WHEN** halaman money-page dimuat dengan instrumentasi menyala
- **THEN** tidak ada script analitik synchronous di `<head>` dan jalur render kritis identik dengan sebelum instrumentasi dipasang.
