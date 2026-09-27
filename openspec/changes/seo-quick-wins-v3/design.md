# Design

## Context

Lihat `proposal.md` (Why). Kondisi kini: 4 berkas OG berekstensi `.jpg` berisi markup SVG 1200x630; produksi (Apache) menyajikan `Content-Type: image/jpeg` plus `nosniff`. Logo asli (`assets/dsi-logo-removebg-preview.png`, 612x408) terdiri dari 91 persen piksel gelap (rata-rata RGB 31,75,93) sehingga tenggelam di Ink Navy; buktinya `logo-demo.html` melabelinya "Masalah" dan Header/Footer produksi memakai `brightness-0 invert`. Batasan: OG adalah berkas statis (tanpa CSS filter), patuhi Impeccable + Zero Em-Dash, URL berkas OG tidak berubah.

## Goals / Non-Goals

**Goals:**
- Byte JPEG valid untuk 4 OG pada URL yang sama.
- Lockup Opsi A: logo putih baked plus headline ringkas, terbaca di 300px.
- Image sitemap dari `coverImage` front-matter plus validasi drift seperti slug.

**Non-Goals:**
- Tidak mengubah desain visual situs atau komponen React.
- Tidak menambah kanal gambar baru (mis. favicon, apple-touch-icon).
- Tidak memutuskan angka proof (tetap open question untuk iterasi berikutnya).

## Decisions

1. **Bake logo putih sekali, bukan filter saat render.** Alternatif: pakai filter SVG (`feColorMatrix`/CSS `invert`) pada elemen `<image>` saat rasterisasi. Ditolak: dukungan filter pada renderer batch tidak konsisten dan hasilnya sulit diuji. Maka invert dilakukan sekali pada PNG sumber menjadi `og-logo-white.png` permanen yang dipakai semua varian.
2. **Render SVG ke JPEG via rasterizer batch, bukan tulis tangan byte.** Alternatif: unduh dan edit manual di editor gambar. Ditolak: tidak terulang (repeatable) saat headline silo berubah. Desain lockup tetap sebagai SVG sumber, output JPEG 1200x630 adalah artefak build yang dikomit.
3. **URL OG tidak berubah.** Alternatif: nama berkas baru berversi. Ditolak: URL lama sudah tersebar di `og:image` snapshot prerender dan cache scraper; memakai URL sama membuat scraper me-refresh otomatis ke gambar yang benar.
4. **Image sitemap mengikuti pola validasi slug yang sudah ada.** `validateBlogSlugConsistency()` diperluas: selain slug, daftar `coverImage` markdown divalidasi silang dengan entri `image:loc` sitemap. Satu mekanisme, dua cakupan.

## Risks / Trade-offs

- [Risk] Rasterizer batch tidak tersedia di lingkungan build → Mitigasi: pilih perkakas yang sudah ada di CI (diverifikasi saat eksekusi task pertama); fallback terakhir adalah komit JPEG hasil render lokal sekali dengan sumber SVG tetap terarsip.
- [Risk] Kualitas JPEG menurunkan ketajaman teks headline → Mitigasi: render dengan kualitas tinggi dan uji keterbacaan 300px sebagai kriteria terima (sudah di spec).
- [Risk] Scraper menyimpan cache gambar lama berhari-hari → Mitigasi: setelah deploy, paksa re-scrape via validator Facebook/LinkedIn untuk URL utama tiap silo.
- [Risk] `coverImage` berisi URL jarak jauh yang mati → Mitigasi: validasi drift hanya memeriksa kesesuaian daftar, bukan reachability; reachability jadi cek manual rilis.

## Migration Plan

1. Hasilkan `og-logo-white.png` dan 4 JPEG, verifikasi header plus keterbacaan 300px secara lokal.
2. Perluas skrip prerender untuk image sitemap plus validasi; jalankan `npm run build` hijau.
3. Deploy; re-scrape manual tiap silo di validator Facebook/LinkedIn.
4. Rollback: revert komit (berkas OG lama kembali; URL tidak berubah sehingga tidak ada referensi yatim).

## Open Questions

- Angka proof satu baris (mis. aset yang didampingi) untuk iterasi lockup berikutnya: butuh sumber yang berani dipertanggungjawabkan, diputuskan di luar change ini.
- Apakah `dsi-logo.jpeg` (latar non-transparan) layak jadi cadangan lockup: tidak menghambat; diverifikasi saat eksekusi bila Opsi A terkendala.
