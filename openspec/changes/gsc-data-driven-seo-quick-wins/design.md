# Design: GSC Data-Driven SEO Quick Wins & Internal Link Funnel

## Context

Berdasarkan analisis live Google Search Console (`https://dsintegra.co.id/`), situs telah memperoleh ranking halaman 1 Google untuk kueri-kueri utama seperti `sk5 icofr`, `compensating control adalah`, `itgc adalah`, dan `segregation of duties adalah`. Namun konversi klik (CTR) masih rendah, dan pengunjung glosarium terisolasi tanpa navigasi kontekstual menuju landing page komersial.

Aturan desain wajib yang harus dipatuhi:
- Mengikuti skill `design-taste-frontend`: Kanvas solid Ink Navy (`#0b0f19`), border tegas `border-slate-800`, tidak ada fake glassmorphism/ambient gradient blob.
- Aturan ketat **Zero Em-Dash (`—` / `–`)**: Menggunakan titik dua (`:`), kurung, atau titik koma.
- Format Markdown Blog: Wajib struktur anchor H2, gambar Unsplash resmi, dan tabel komparasi.

## Goals / Non-Goals

**Goals:**
1. Merevisi title dan meta description pada 3 artikel pilar bervolume tinggi agar lebih *click-enticing* dan secara presisi menargetkan kueri aktual GSC.
2. Mengintegrasikan komponen *Commercial Bridge Card* di halaman detail glosarium bervolume tinggi (`/glosarium/sod`, `/glosarium/elc`, `/glosarium/compensating-control`, `/glosarium/spi`, `/glosarium/itgc`) yang menghubungkan teori audit dengan software `GRC Integra` dan jasa konsultansi.
3. Menambahkan contextual internal link dari artikel blog menuju `/platform/grc-integra` (peringkat 11.2) dan `/layanan/icofr-bumn` (peringkat 8.5) untuk mendorong kenaikan ke Top 3 Google.

**Non-Goals:**
1. Mengubah struktur URL permalink atau slug halaman (mencegah broken link dan kehilangan histori index GSC).
2. Mendesain ulang tata letak dasar layout halaman glosarium secara keseluruhan.

## Decisions

### 1. Injeksi Jembatan Komersial pada Komponen Glosarium
- **Pilihan:** Menambahkan properti opsional `commercialBridge` pada objek data glosarium (`src/data/glossaryData.ts` atau komponen renderer glosarium `src/pages/glosarium/[slug].tsx`).
- **Alternatif yang ditolak:** Menempelkan banner promosi generik di sidebar. Kartu banner generik sering diabaikan (banner blindness) oleh audiens profesional BUMN; kartu kontekstual yang relevan dengan topik (misal SOD $\rightarrow$ SOD Matrix Software) memiliki tingkat konversi jauh lebih tinggi.

### 2. Format Key Takeaway Box di Artikel Blog
- **Pilihan:** Menambahkan callout box terstruktur menggunakan blockquote ber-border emas BUMN (`border-l-4 border-amber-500/80 bg-slate-900/60 p-5 rounded-r-lg`) di bawah paragraf pembuka.
- **Rasional:** Format ini dirancang khusus untuk memicu Google Featured Snippet (posisi 0) saat pengguna menanyakan definisi klausul regulasi.

## Risks / Trade-offs

- **[Risk] Keyword Cannibalization:** Perubahan judul artikel pilar berisiko tumpang tindih dengan halaman landing page utama.  
  $\rightarrow$ **Mitigasi:** Bedakan intent secara tegas: artikel blog fokus pada intent edukasi/informasional (*panduan, klausul, contoh matriks*), sedangkan landing page fokus pada intent komersial/transaksional (*software, jasa konsultansi, request demo*).
- **[Risk] Pelanggaran Aturan Lint & Design Mandate:** Adanya karakter em-dash atau class terlarang.  
  $\rightarrow$ **Mitigasi:** Jalankan pre-flight verification script (`npm run lint` & `tsc --noEmit`) sebelum finalisasi.
