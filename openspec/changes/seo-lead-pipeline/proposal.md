# Proposal

## Why

Situs dsintegra.co.id menghasilkan nol trafik SEO dan nol lead demo dari web. Investigasi (28 Sep 2026) membuktikan ini bukan kegagalan konten, melainkan tiga sumbatan berlapis: (1) Google belum mengindeks situs sama sekali — query `site:dsintegra.co.id` dan query nama brand mengembalikan 0 hasil, Search Console belum ada data, dan versi HTML yang bisa di-crawl (prerender SSG) baru lahir 26–28 Sep 2026; (2) target "2–3 lead demo/bulan" tidak bisa diukur — tidak ada analitik apa pun di codebase sehingga lead dari web tidak dapat diatribusikan; (3) konten yang ada mengajar (glosarium, panduan) sementara calon pembeli (panitia pengadaan, SPI, komite audit) butuh halaman niat-beli dengan jalan 1-klik ke demo. Perubahan ini diperlukan sekarang karena setiap minggu tanpa indexing ritual dan atribusi adalah minggu data hilang yang tidak bisa diulang.

## What Changes

- **Ritual indexing Google (operasional, tanpa ubah perilaku sistem):** verifikasi properti Search Console (file verifikasi sudah live), submit `sitemap.xml`, inspeksi + minta pengindeksan manual bertahap untuk money-pages (`/`, `/layanan/icofr-bumn`, `/platform/grc-integra`, `/kalkulator-sampel-toe`, `/kualifikasi-vendor`, `/panduan-kak-tor-icofr`), registrasi Bing Webmaster (melengkapi IndexNow yang sudah otomatis tiap build), dan kalender pemantauan Coverage 4 minggu pertama.
- **Backlink awal (off-site):** tautan dari aset yang dikuasai — profil LinkedIn perusahaan, humbulkristiawan.com ke dsintegra.co.id, direktori bisnis Indonesia, dan Google Business Profile — sebagai undangan crawl independen dari Google.
- **Atribusi lead (perilaku baru):** setiap pengiriman formulir kontak merekam sumber kedatangan (landing page pertama, referrer/UTM) sehingga "lead dari web/SEO" dapat dibuktikan; instrumentasi pageview + klik CTA demo yang patuh UU PDP.
- **Jalur konversi demo (perilaku baru):** setiap halaman niat-beli menyediakan jalan ke permintaan demo dalam 1 klik (CTA yang mengalir ke `/#contact` via prefill yang sudah ada); audit memetakan halaman yang jalurnya buntu.
- **Peta kata kunci niat-beli (riset, tanpa kode):** memprioritaskan 10–15 frasa pembeli ("konsultan ICOFR BUMN", "software GRC BUMN/Indonesia", "KAK pengadaan konsultan ICOFR", "kualifikasi vendor GRC", "contoh RCM ICOFR", "sampel TOE kontrol harian") di atas perluasan glosarium massal; matematika target: 60–100 kunjungan qualified/bulan pada konversi 3–5% menghasilkan 2–3 lead.
- **Non-goals (DILARANG dalam change ini):** mengubah desain visual, menambah halaman konten baru massal, optimasi Core Web Vitals/bundle, self-hosting gambar Unsplash, dan perluasan skema JSON-LD — itu change terpisah.

## Capabilities

### New Capabilities

- `lead-source-attribution`: sistem merekam sumber kedatangan setiap lead (landing page pertama, referrer, parameter UTM) pada pengiriman formulir kontak dan menyertakannya dalam notifikasi ke marketing.
- `web-analytics-instrumentation`: sistem mengukur pageview dan interaksi CTA demo secara patuh-privasi (tanpa cookie lintas-situs; menghormati Do-Not-Track) sebagai dasar atribusi kanal.
- `demo-conversion-paths`: setiap halaman niat-beli (layanan, platform, kalkulator, asesmen, kualifikasi-vendor, panduan KAK/TOR) menyediakan ajakan demo 1-klik yang mengantar ke formulir kontak dengan konteks layanan terisi.

### Modified Capabilities

- (kosong — tidak ada REQUIREMENT spec yang sudah ada berubah; ritual indexing dan backlink adalah aktivitas operasional yang dilacak di tasks, bukan perilaku sistem.)

## Impact

- Kode tersentuh saat implementasi nanti: `src/components/Contact.tsx` + `server.ts` (`/api/contact`), titik CTA di halaman niat-beli (`App.tsx` dan komponen pages terkait), dan satu modul instrumentasi analitik baru. Tidak ada perubahan API publik, skema prerender, sitemap, maupun JSON-LD.
- Sistem terdampak: Search Console, Bing Webmaster (akun dan akses dipegang tim), inbox `marketing@dsintegra.co.id` (format notifikasi lead bertambah kolom sumber).
- Ekspektasi jujur: data GSC 2–3 hari pasca-verifikasi; indexing bertahap minggu 1–4; impresi long-tail bulan 1–3; jendela realistis 2–3 lead/bulan pada bulan ke-3–6 bila halaman niat-beli terindeks dan jalur CTA beres.
