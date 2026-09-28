# Design

## Context

Lihat `proposal.md` (Why) untuk motivasi. Keadaan berjalan yang membentuk pendekatan:

- Formulir kontak (`src/components/Contact.tsx`, 2 tahap) mem-POST tujuh field sebagai JSON ke `/api/contact`; `server.ts` men-sanitize tiap field (`sanitizeInput` + batas panjang), mewajibkan nama/surel/pesan, lalu mengirim surel text+HTML ke marketing. Tidak ada field sumber hari ini.
- Jalur demo berjalan memakai mekanisme `prefill` (`App.tsx` → `navigateTo("/#contact")` + `{ company, sector, service }`); halaman platform sudah memakainya ("Jadwalkan Demo Teknis"), halaman niat-beli lain belum tentu.
- Router SPA memakai `normalizedPath`; `updateDocumentMeta` dipanggil tiap navigasi — titik alami untuk pageview sadar-rute.
- Tidak ada script pihak-ketiga, cookie pelacakan, atau endpoint peristiwa apa pun. Batasan: UU PDP (UU No. 27/2022) — transfer data ke luar negeri dan cookie pelacakan butuh dasar hukum/persetujuan; situs menargetkan BUMN yang sensitif terhadap ini.

## Goals / Non-Goals

**Goals:**
- Atribusi "lead dari SEO/web" dapat dibuktikan ujung-ke-ujung (klik → sesi → lead → surel marketing) tanpa ketergantungan pihak-ketiga.
- Pengukuran cukup untuk menjawab mingguan: berapa kunjungan qualified, di halaman apa, berapa klik demo, berapa lead — untuk skala 60–100 kunjungan/bulan.
- Semua mekanisme baru gagal-diam dan tidak mengubah keberhasilan pengiriman formulir dalam kondisi apa pun.

**Non-Goals:**
- Dasbor analitik real-time / funnel visualization (cukup kueri/ekspor berkala pada skala ini).
- Menyentuh prerender SSG, sitemap, JSON-LD, atau visual/CTA styling system (CTA memakai komponen dan gaya yang sudah ada).
- Skrip analitik pihak-ketiga (GA4, Plausible Cloud, dsb.) — ditunda sadar, lihat Keputusan 3.

## Decisions

1. **First-touch attribution di `sessionStorage`, bukan cookie.**
   Rasional: bertahan melintasi navigasi client-side, mati bersama sesi/tab sehingga tidak ada pelacakan lintas-kunjungan, dan tidak memicu kebutuhan banner persetujuan cookie. Alternatif ditolak: cookie first-party (perlu manajemen persetujuan + retensi), threading parameter lewat URL (rapuh saat navigasi internal dan mengotori canonical/berbagi tautan), murni `Referer` server-side (tidak bertahan antar-halaman, tidak membawa UTM).

2. **Sumber dikirim sebagai field tambahan dalam POST `/api/contact` yang sama, bukan endpoint beacon terpisah.**
   Rasional: atomik dengan lead (tidak ada peristiwa yatim atau race), kompatibel-mundur (server memperlakukan field hilang sebagai kosong), dan tidak menambah permukaan API. Alternatif ditolak: endpoint `/api/attribution` terpisah (risiko lead tanpa sumber dan sebaliknya).

3. **Analitik first-party same-origin, tanpa skrip pihak-ketiga pada change ini.**
   Rasional: satu-satunya cara memenuhi spec privasi (DNT, tanpa cookie lintas-situs, tanpa transfer lintas-batas) tanpa banner persetujuan — penting untuk audiens BUMN. Pengiriman non-blocking (`sendBeacon` dengan fallback `fetch keepalive`) setelah halaman interaktif; tidak ada script synchronous di `<head>` prerender. Alternatif ditolak untuk change ini: GA4 (ketergantungan eksternal + isu transfer data UU PDP), Plausible Cloud (lebih ringan tapi tetap pihak-ketiga dan butuh langganan/keputusan vendor). Keduanya dicatat sebagai peningkatan masa depan, bukan bagian change ini.

4. **CTA memakai ulang mekanisme `prefill`, diperluas nilai layanannya.**
   Rasional: plumbing sudah terbukti (platform pages); yang kurang hanya cakupan halaman dan konsistensi konteks layanan. Nilai konteks tak dikenal jatuh ke default valid. Alternatif ditolak: query-param `?service=` di URL (mengotori canonical dan bisa terindeks sebagai duplikat).
   Untuk halaman edukasi: ajakan kontekstual mengarah dulu ke alat interaktif terkait (kalkulator, asesmen) sebagai jembatan niat, bukan banner demo generik — logika funnel, bukan sekadar tombol.

5. **Server: perluas pola sanitasi yang ada ke field sumber; sumber masuk ke kedua versi surel (text+HTML) sebagai teks polos.**
   Rasional: konsisten dengan `sanitizeInput`/batas-panjang yang sudah ada; surel HTML men-escape nilai sumber (tidak ada render HTML aktif). Rate limiter `/api/contact` tidak berubah — payload hanya bertambah tiga string pendek.

## Risks / Trade-offs

- [Risk] Pemblokir iklan/privasi menggagalkan `sessionStorage` atau endpoint peristiwa → Mitigasi: seluruh akses storage dibungkus try/catch; kegagalan gagal-diam; pengiriman formulir tidak pernah bergantung pada data sumber (sesuai spec).
- [Risk] `Referer` kosong (HTTPS→downgrade, strict-origin policies) membuat sebagian lead berlabel "sumber tak diketahui" → Mitigasi: diterima sebagai batas ukur; server mencatat header `Referer` saat submit sebagai sinyal fallback independen; keputusan kanal memakai agregat, bukan kasus tunggal.
- [Risk] Variasi kapitalisasi/format UTM (`UTM_Source`, nilai ber-spasi) memecah agregat → Mitigasi: normalisasi key huruf-kecil + trim di klien; nilai asing panjang dipotong server.
- [Risk] Surel notifikasi membesar dan berisik → Mitigasi: blok sumber ringkas (3 baris) di bawah tabel pengirim yang sudah ada; tidak mengubah subjek.
- [Trade-off] Tanpa dasbor, analisis butuh kueri manual berkala → Diterima: pada 60–100 kunjungan/bulan, rekap mingguan 15 menit cukup; dasbor dibangun hanya bila volume membenarkannya.

## Migration Plan

1. Deploy server lebih dulu (menerima + mengabaikan-dengan-aman field sumber tak dikenal), lalu klien — atau satu rilis atomik; keduanya aman karena server memperlakukan field hilang sebagai kosong dan klien lama tanpa field sumber tetap valid.
2. Verifikasi pasca-deploy: submit uji dengan UTM → surel berisi sumber benar; submit tanpa sumber → tetap sukses; simulasi DNT/adblock → situs normal.
3. Rollback: kembalikan ke build sebelumnya; tidak ada migrasi data (penyimpanan sesi di browser, bukan server) sehingga rollback tanpa sisa.
4. Operasional paralel (tugas non-kode, dilacak di tasks): verifikasi GSC → submit sitemap → inspeksi URL money-pages → registrasi Bing Webmaster → backlink awal → rekap Coverage mingguan.

## Open Questions

- Siapa pemilik akun Google/Bing (alamat surel organisasi) untuk verifikasi Search Console dan Webmaster — menentukan pelaksana ritual indexing, bukan isi kode.
- Retensi log peristiwa analitik (usulan: 13 bulan, selaras praktik umum) dan siapa penerima rekap mingguan — tidak mengubah spec, diputuskan sebelum tasks dieksekusi.
