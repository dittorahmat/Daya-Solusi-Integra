---
id: "panduan-sampel-toe-tabel-22-icofr-bumn"
title: "Panduan Penentuan Sampel Pengujian TOE ICOFR Berdasarkan Tabel 22 Regulasi BUMN"
slug: "panduan-sampel-toe-tabel-22-icofr-bumn"
excerpt: "Pelajari formula resmi penentuan ukuran sampel pengujian efektivitas operasi (Test of Operating Effectiveness / TOE) sesuai Tabel 22 Regulasi SK-5 BUMN, justifikasi batas bawah, dan dokumentasi audit SPKN."
category: "Panduan Teknis"
author: "Humbul Kristiawan"
authorRole: "Principal Partner & Senior GRC Advisor"
date: "25 September 2026"
readTime: "9 menit"
coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
tags: ["Tabel 22 Regulasi BUMN", "Sampel Pengujian TOE", "Aplikasi ICOFR", "Metodologi Audit", "SK-5 BUMN", "Test of Operating Effectiveness"]
featured: false
---

## Daftar Isi
- [Pentingnya Standarisasi Ukuran Sampel Pengujian Pengendalian](#pentingnya-standarisasi-ukuran-sampel-pengujian-pengendalian)
- [Tabel 22: Matriks Resmi Penentuan Jumlah Sampel TOE BUMN](#tabel-22-matriks-resmi-penentuan-jumlah-sampel-toe-bumn)
- [Syarat Ketat Justifikasi Homogenitas untuk Rentang Batas Bawah](#syarat-ketat-justifikasi-homogenitas-untuk-rentang-batas-bawah)
- [Metodologi Pengambilan Sampel: Random, Stratifikasi, dan Systematic Sampling](#metodologi-pengambilan-sampel-random-stratifikasi-dan-systematic-sampling)
- [Dokumentasi Kertas Kerja Pengujian untuk Standar BPK dan KAP Tier-1](#dokumentasi-kertas-kerja-pengujian-untuk-standar-bpk-dan-kap-tier-1)
- [Otomasi Pengujian Sampel Melalui Aplikasi GRC Integra](#otomasi-pengujian-sampel-melalui-aplikasi-grc-integra)

---

## Pentingnya Standarisasi Ukuran Sampel Pengujian Pengendalian

Dalam tahapan pengujian efektivitas operasi (*Test of Operating Effectiveness* / TOE), penentuan jumlah sampel transaksi sering menjadi perdebatan antara tim audit internal, lini 2 manajemen risiko, dan auditor eksternal.

Jika sampel yang diuji terlalu sedikit, auditor berisiko menarik kesimpulan keliru bahwa kontrol beroperasi efektif padahal terdapat kegagalan tersembunyi (*sampling risk*). Sebaliknya, jika sampel terlalu banyak tanpa dasar ilmiah, waktu dan biaya audit membengkak tanpa menambah nilai keyakinan.

Guna menghadirkan kepastian hukum dan objektivitas di seluruh lingkungan Badan Usaha Milik Negara, Kementerian BUMN menerbitkan panduan baku melalui **Tabel 22 pada Regulasi SK-5/DKU.MBU/11/2024**.

---

## Tabel 22: Matriks Resmi Penentuan Jumlah Sampel TOE BUMN

Regulasi menetapkan bahwa ukuran sampel minimum wajib berkorelasi langsung dengan frekuensi eksekusi kontrol internal:

| Frekuensi Pelaksanaan Kontrol | Estimasi Populasi Tahunan | Rentang Jumlah Sampel Minimum (Tabel 22) | Rekomendasi Standar Pengujian |
| :--- | :--- | :--- | :--- |
| **Kontinu / Otomatis Sistem** | Ribuan / Jutaan transaksi | 1 sampel (jika ITGC efektif) | 1 transaksi riil via uji IT General Controls |
| **Beberapa Kali Sehari** | > 250 transaksi | 25 hingga 40 sampel | 25 sampel (homogen) / 40 sampel (populasi variatif) |
| **Harian (*Daily*)** | ~ 250 transaksi kerja | 20 hingga 40 sampel | 25 sampel acak sepanjang tahun buku |
| **Mingguan (*Weekly*)** | ~ 52 transaksi | 5 hingga 10 sampel | 5 sampel (homogen) / 10 sampel jika personel berganti |
| **Bulanan (*Monthly*)** | 12 transaksi | 2 hingga 4 sampel | 2 sampel (minimum kuartalan) atau 4 sampel |
| **Triwulanan (*Quarterly*)**| 4 transaksi | 2 sampel | 2 transaksi kuartal berbeda |
| **Tahunan (*Annually*)** | 1 transaksi | 1 sampel | 1 sampel utuh (100 persen populasi) |

---

## Syarat Ketat Justifikasi Homogenitas untuk Rentang Batas Bawah

Seringkali auditor atau penguji Lini 2 ingin memilih jumlah sampel pada batas bawah (misalnya 25 sampel untuk kontrol harian alih-alih 40 sampel). 

Berdasarkan ketentuan Lampiran Regulasi SK-5, pemilihan batas bawah hanya diperbolehkan apabila penguji memenuhi dan mendokumentasikan kriteria homogenitas berikut:
1. **Stabilitas Sistem dan Personel**: Tidak ada perubahan pejabat penandatangan atau perubahan konfigurasi sistem ERP selama periode berjalan.
2. **Ketiadaan Riwayat Defisiensi**: Pada tahun buku sebelumnya, kontrol terkait terbukti efektif tanpa ada catatan kelemahan rancangan atau operasional.
3. **Kompleksitas Transaksi Rendah**: Transaksi bersifat rutin, memiliki kriteria nilai nominal yang seragam, dan tidak melibatkan estimasi akuntansi rumit.

Jika salah satu kriteria di atas tidak terpenuhi, penguji wajib menggunakan rentang sampel maksimum guna menjaga integritas opini audit.

---

## Metodologi Pengambilan Sampel: Random, Stratifikasi, dan Systematic Sampling

Selain kuantitas sampel, teknik pemilihan populasi memegang peran krusial:

### 1. Simple Random Sampling
Setiap transaksi dalam daftar populasi memiliki peluang sama untuk terpilih. Pendekatan ini ideal untuk kontrol kas kecil atau verifikasi faktur rutin.

### 2. Systematic Sampling dengan Interval Teratur
Penguji memilih sampel dengan interval tetap (misalnya memilih setiap kelipatan transaksi ke-15) setelah menentukan titik awal secara acak.

### 3. Stratified Sampling (Pengelompokan Nilai Material)
Populasi dipisahkan menjadi beberapa tingkatan (*strata*), misalnya transaksi bernilai di atas ambang materialitas tertentu wajib diuji 100 persen, sedangkan transaksi di bawah ambang diuji menggunakan sampel proporsional.

---

## Dokumentasi Kertas Kerja Pengujian untuk Standar BPK dan KAP Tier-1

Pemeriksa dari BPK RI, BPKP, maupun Kantor Akuntan Publik (KAP) Tier-1 mewajibkan kelengkapan kertas kerja pengujian (*working papers*) yang memuat 5 elemen pembuktian:
- **Identifikasi Kontrol dan Atribut Pengujian**: Uraian spesifik mengenai apa yang diuji (misal: verifikasi kelengkapan dokumen 3-way matching dan tanggal persetujuan berwenang).
- **Daftar Lengkap Populasi (*Population Completeness*)**: Rekonsiliasi antara total populasi transaksi di sistem ERP dengan total buku besar.
- **Tautan Bukti Riil (*Evidence Attachments*)**: Lampiran dokumen pendukung untuk setiap nomor sampel terpilih.
- **Catatan Deviasi**: Penjelasan mendalam jika ditemukan 1 transaksi yang tidak memenuhi atribut pengendalian, termasuk analisis akar penyebab (*root-cause analysis*).
- **Kesimpulan Pengujian**: Pernyataan tegas apakah kontrol beroperasi secara efektif (*Operating Effectively*) atau mengalami defisiensi (*Deficient*).

---

## Otomasi Pengujian Sampel Melalui Aplikasi GRC Integra

Menghitung dan memvalidasi sampel secara manual pada ribuan kartu kontrol di ratusan unit kerja BUMN sangat rentan terhadap kekeliruan administratif.

Platform **GRC Integra** menghadirkan modul **Kalkulator Sampel Tabel 22 Terintegrasi**:
- **Pemilihan Frekuensi Otomatis**: Frekuensi kontrol yang dipilih langsung mengunci formula rentang sampel minimum.
- **Formulir Justifikasi Homogenitas Mandatori**: Sistem secara otomatis mengunci opsi batas bawah dan mewajibkan penguji melampirkan alasan jika tidak menggunakan rentang penuh.
- **Pengambilan Sampel Teracak Sistem**: Fitur generator sampel acak digital yang langsung menarik nomor referensi dokumen transaksi dari data ERP.
- **Audit Trail Pengujian**: Kertas kerja tersimpan aman dengan enkripsi digital yang siap diekspor ke format standar pemeriksaan BPK/BPKP dalam satu klik.

Tingkatkan standar akuntabilitas pengendalian internal organisasi Anda. Pelajari modul [Platform GRC Integra](https://dsintegra.co.id/platform/grc-integra) atau konsultasikan kesiapan audit tim Anda bersama pakar kami di [Layanan Audit Readiness ICOFR](https://dsintegra.co.id/layanan/icofr-bumn).
