# Tasks

## 1. Keputusan dan Akses Operasional

- [ ] 1.1 Tetapkan pemilik akun Google/Bing organisasi, masa retensi log peristiwa (usulan 13 bulan), dan penerima rekap mingguan; verifikasi: ketiganya tertulis sebagai komentar balasan pada change ini sebelum grup 2–4 dikerjakan.
- [ ] 1.2 Verifikasi properti Search Console (memakai file verifikasi yang sudah live) dan registrasi Bing Webmaster; verifikasi: kedua konsol berstatus terverifikasi dan dapat dibuka tim.
- [ ] 1.3 Submit `sitemap.xml` di kedua konsol lalu inspeksi + minta pengindeksan 6 money-page (`/`, `/layanan/icofr-bumn`, `/platform/grc-integra`, `/kalkulator-sampel-toe`, `/kualifikasi-vendor`, `/panduan-kak-tor-icofr`); verifikasi: laporan Coverage menampilkan URL terkirim, bukan galat submit.
- [ ] 1.4 Pasang backlink awal (profil LinkedIn perusahaan, humbulkristiawan.com → dsintegra.co.id, 1–2 direktori bisnis, Google Business Profile); verifikasi: tiap tautan live, memakai URL kanonis tanpa parameter, dan tercatat dalam daftar di change ini.

## 2. Atribusi Sumber Lead

- [ ] 2.1 Implementasikan perekam first-touch sesi (halaman pendaratan pertama, referrer, UTM ternormalisasi) di `sessionStorage` dengan try/catch; verifikasi: kunjungan ber-UTM lalu pindah halaman tetap membawa nilai first-touch yang benar di devtools.
- [ ] 2.2 Lampirkan data sumber pada POST `/api/contact` sebagai field tambahan dengan nilai kosong eksplisit bila tak tersedia; verifikasi: submit valid dengan dan tanpa data sumber sama-sama sukses tanpa galat baru.
- [ ] 2.3 Perluas sanitasi server ke field sumber (batas panjang, tolak non-string) dan cantumkan blok sumber teks-polos pada surel text+HTML marketing; verifikasi: surel uji menampilkan sumber readable, dan payload injeksi script terkirim sebagai teks inert tanpa mengeksekusi markup.
- [ ] 2.4 Uji privasi aliran data sesi formulir; verifikasi: tidak ada permintaan ke domain pihak-ketiga mana pun selama kunjungan + submit, dan pengunjung DNT tidak menghasilkan perekaman.

## 3. Instrumentasi Analitik

- [ ] 3.1 Implementasikan pageview sadar-`normalizedPath` (termasuk navigasi client-side; rute tak dikenal bertanda 404) via endpoint same-origin non-blocking; verifikasi: tiga navigasi berurutan tercatat dengan path benar dan 404 tercatat sebagai 404.
- [ ] 3.2 Implementasikan peristiwa klik CTA demo berisi halaman asal + konteks layanan; verifikasi: klik "Jadwalkan Demo Teknis" tercatat satu peristiwa akurat, sedangkan klik navigasi biasa tidak tercatat sebagai peristiwa demo.
- [ ] 3.3 Terapkan penghormatan DNT, sesi tanpa lintas-kunjungan, dan gagal-diam saat endpoint diblokir; verifikasi: sesi DNT nihil rekaman, pemblokiran endpoint tidak memunculkan galat dan tidak mengganggu submit formulir.
- [ ] 3.4 Pastikan tidak ada script synchronous analitik di `<head>` prerender dan jalur render kritis tak berubah; verifikasi: perbandingan gabungan skrip render-blocking `dist/index.html` sebelum–sesudah menunjukkan nol penambahan.

## 4. Jalur Konversi Demo

- [ ] 4.1 Audit kesembilan halaman niat-beli dan catat titik CTA yang hilang; verifikasi: matriks 9 halaman × (CTA atas tanpa scroll, CTA sesudah konten) terisi status aktual sebagai lampiran change ini.
- [ ] 4.2 Tambahkan CTA demo 1-klik (memakai ulang mekanisme `prefill`) pada halaman niat-beli yang buntu, tanpa mengubah gaya visual yang ada; verifikasi: tiap CTA mengantar ke `/#contact` dengan konteks layanan halaman asal dalam 1 klik.
- [ ] 4.3 Amankan fallback konteks tak dikenal ke nilai default valid; verifikasi: navigasi dengan konteks layanan asing tetap menghasilkan formulir valid yang lolos seluruh validasi.
- [ ] 4.4 Tambahkan ajakan kontekstual (ke alat interaktif/demo) pada artikel pilar, glosarium populer, dan `/regulasi`; verifikasi: tiap halaman itu memiliki minimal satu ajakan relevan yang tidak mengganggu alur baca.

## 5. Integrasi dan Rilis

- [ ] 5.1 Jalankan `npm run build` + `npm run lint` hingga hijau termasuk cek konsistensi slug/gambar sitemap; verifikasi: build sukses tanpa peringatan drift dan seluruh 46+ rute prerender tetap tergenerate.
- [ ] 5.2 Uji submit formulir ujung-ke-ujung di produksi (UTM → sesi → lead → surel berisi sumber); verifikasi: satu lead uji terkirim lengkap dan terklasifikasi kanal dengan benar, lalu didokumentasikan sebagai baseline atribusi.
- [ ] 5.3 Rekap Coverage GSC minggu ke-1 dan ke-4 pasca-rilis; verifikasi: dua rekap tertulis (halaman terindeks, impresi/klik awal, backlog "Discovered/Crawled, not indexed") tersimpan sebagai komentar change ini.
