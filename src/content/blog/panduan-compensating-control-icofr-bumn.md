---
id: "panduan-compensating-control-icofr-bumn"
title: "Compensating Control Adalah: Panduan Mitigasi Defisiensi Kontrol dan Konflik SoD BUMN Sesuai SK-5"
slug: "panduan-compensating-control-icofr-bumn"
excerpt: "Pahami apa itu compensating control, kapan kontrol kompensasi sah digunakan dalam audit ICOFR BUMN, serta contoh matriks mitigasi defisiensi kontrol dan konflik SoD ERP sesuai standar SK-5."
category: "Metodologi Audit"
author: "Humbul Kristiawan"
authorRole: "Principal Partner & Senior GRC Advisor"
date: "31 Oktober 2026"
readTime: "8 menit"
coverImage: "/images/blog/u-photo-1451187580459-43490279c0fa-1200.webp"
tags: ["Compensating Control", "ICOFR BUMN", "Segregation of Duties", "Defisiensi Kontrol", "SK-5 BUMN", "ITGC"]
featured: false
---

> **Ringkasan Eksekutif (Key Takeaways):**
> - **Definisi Resmi**: Compensating control adalah prosedur pengendalian alternatif yang dirancang untuk memitigasi risiko finansial ketika kontrol utama (*primary control*) tidak dapat diterapkan atau mengalami kegagalan desain (*deficiency*).
> - **Standar Regulasi SK-5**: Kementerian BUMN melalui SK-5/DKU.MBU/11/2024 memperbolehkan kontrol kompensasi asalkan memenuhi kriteria presisi, keterujian, dan dioperasikan pada periode yang sama.
> - **Solusi Konflik SoD**: Menjadi benteng utama pada anak perusahaan BUMN dengan keterbatasan personel di mana pemisahan tugas (*Segregation of Duties*) di sistem ERP tidak dapat dipenuhi secara ideal.

## Daftar Isi
- [Definisi: Apa Itu Compensating Control dalam Audit ICOFR?](#definisi-apa-itu-compensating-control-dalam-audit-icofr)
- [Kapan BUMN Sah Menggunakan Kontrol Kompensasi?](#kapan-bumn-sah-menggunakan-kontrol-kompensasi)
- [3 Kriteria Mutlak Agar Compensating Control Diakui Auditor (BPK dan KAP)](#3-kriteria-mutlak-agar-compensating-control-diakui-auditor-bpk-dan-kap)
- [Contoh Matriks Kasus: Konflik SoD ERP vs Compensating Control](#contoh-matriks-kasus-konflik-sod-erp-vs-compensating-control)
- [Langkah Dokumentasi Kontrol Kompensasi dalam RCM GRC Integra](#langkah-dokumentasi-kontrol-kompensasi-dalam-rcm-grc-integra)
- [FAQ Seputar Compensating Control BUMN](#faq-seputar-compensating-control-bumn)
- [Kesimpulan dan Rekomendasi Tindak Lanjut](#kesimpulan-dan-rekomendasi-tindak-lanjut)

---

## Definisi: Apa Itu Compensating Control dalam Audit ICOFR?

Dalam evaluasi kepatuhan pengendalian internal atas pelaporan keuangan (*Internal Control over Financial Reporting* / ICOFR), tidak semua proses bisnis korporasi dapat menjalankan kontrol primer (*primary control*) secara sempurna. 

Menurut konsep tata kelola COSO dan petunjuk teknis **Regulasi Kementerian BUMN Nomor SK-5/DKU.MBU/11/2024**, **compensating control** (kontrol kompensasi) adalah pengendalian pengganti yang berfungsi memperkecil risiko salah saji material hingga ke tingkat yang dapat diterima (*acceptable low level*), ketika kontrol pencegahan langsung tidak dapat diterapkan atau ditemukan cacat desain (*design gap*).

Secara fundamental, kontrol kompensasi bukan pembenaran atas kelemahan sistem, melainkan instrumen pengendalian penyeimbang (*detective control*) yang diuji secara ketat agar suatu temuan defisiensi tidak meningkat statusnya menjadi *Significant Deficiency* atau *Material Weakness*. Pelajari definisi terminologinya secara terstruktur di halaman [Glosarium Compensating Control](/glosarium/compensating-control).

---

## Kapan BUMN Sah Menggunakan Kontrol Kompensasi?

Dalam ekosistem BUMN, implementasi kontrol kompensasi umumnya terjadi pada 3 skenario operasional:

1. **Keterbatasan Jumlah Personel pada Anak BUMN**: Unit bisnis atau kantor cabang memiliki jumlah staf terbatas sehingga fungsi otorisasi pembayaran dan perekaman akuntansi di sistem ERP terpaksa dipegang oleh pejabat yang sama.
2. **Keterbatasan Teknis Modul ERP Warisan (Legacy)**: Sistem aplikasi akuntansi belum mendukung matriks hak akses berbasis peran granular untuk menegakkan [Segregation of Duties (SoD)](/glosarium/sod).
3. **Kegagalan Operasional Kontrol Kunci Otomatis (ITAC)**: Selama masa migrasi database atau pemeliharaan server [ITGC](/glosarium/itgc), kontrol otomatis sementara digantikan oleh penelaahan rekonsiliasi manual harian oleh pejabat Lini 2.

---

## 3 Kriteria Mutlak Agar Compensating Control Diakui Auditor (BPK dan KAP)

Berdasarkan standar audit SPKN dan audit kepatuhan BUMN, pemeriksa eksternal (BPK RI, BPKP, dan KAP Tier-1) hanya akan menerima kontrol kompensasi jika memenuhi 3 kriteria ketat berikut:

### 1. Tingkat Presisi yang Setara (*Precision Level*)
Kontrol kompensasi harus mampu mendeteksi potensi salah saji material pada tingkat granularitas yang sama dengan kontrol primer yang hilang. Misalnya, penelaahan anggaran agregat bulanan tidak cukup presisi untuk mengompensasi ketiadaan approval transaksi individual di atas batas materialitas.

### 2. Periode dan Frekuensi Pengujian yang Relevan
Kontrol kompensasi wajib berjalan aktif pada periode yang sama saat kontrol utama mengalami defisiensi. Pembuktian efektivitas operasinya wajib diuji melalui kalkulasi sampel [Tabel 22 Regulasi BUMN](/blog/panduan-sampel-toe-tabel-22-icofr-bumn).

### 3. Kemandirian Pelaksana (*Independence of Reviewer*)
Pelaksana kontrol kompensasi tidak boleh terlibat dalam rantai transaksi yang sedang diawasi. Kontrol penelaahan harus dieksekusi oleh atasan langsung yang independen atau tim verifikasi Lini 2.

---

## Contoh Matriks Kasus: Konflik SoD ERP vs Compensating Control

Berikut adalah tabel komparasi penerapan kontrol kompensasi pada siklus pengeluaran kas dan pengadaan barang BUMN:

| Siklus Bisnis | Konflik / Defisiensi Primer | Risiko Salah Saji | Rancangan Compensating Control yang Sah |
| :--- | :--- | :--- | :--- |
| **Pengadaan & Hutang** | User ERP memiliki akses membuat Vendor Baru dan memproses Surat Jalan (*Goods Receipt*). | Pembentukan vendor fiktif untuk pencairan dana proyek tanpa penerimaan fisik riil. | Verifikasi independen bulanan oleh Manajer Pengadaan atas seluruh daftar penambahan master vendor baru disertai bukti verifikasi NPWP dan rekening bank rekening koran resmi. |
| **Pengeluaran Kas** | Kasir memegang token otorisasi transfer perbankan sekaligus mencatat jurnal kas masuk/keluar. | Penarikan kas tanpa otorisasi atau keterlambatan pencatatan mutasi bank. | Rekonsiliasi harian rekening koran (*daily bank reconciliation*) oleh supervisor akuntansi independen dengan pembuktian cap waktu (*timestamp*) sebelum kliring sore. |
| **Manajemen Aset** | Staf gudang berwenang menghitung fisik persediaan sekaligus menginput penyesuaian (*write-off*) di SAP. | Penghapusan inventaris tanpa justifikasi kehilangan yang sah (*theft masking*). | Persetujuan tertulis Direktur Operasional untuk setiap penyesuaian saldo di atas Rp 10.000.000 disertai berita acara *stock opname* tim gabungan SPI. |

---

## Langkah Dokumentasi Kontrol Kompensasi dalam RCM GRC Integra

Agar kontrol kompensasi memiliki kekuatan hukum saat diuji oleh auditor, korporasi wajib memetakannya secara formal ke dalam dokumen *Risk and Control Matrix* (RCM):

1. **Tautkan ke Kartu Kontrol Primer**: Di dalam modul RCM, tandai kontrol primer yang berstatus *Deficient* dan tautkan ID unik *Compensating Control* terkait.
2. **Unggah Bukti Pengujian Mandiri**: Lampirkan kertas kerja *Test of Operating Effectiveness* (TOE) beserta sampel eviden transaksi yang telah diverifikasi supervisor ke repositori dokumen terpusat.
3. **Validasi Melalui Platform Khusus**: Menggunakan [aplikasi ICOFR modern](/blog/fitur-kunci-aplikasi-icofr-bumn) seperti **GRC Integra**, status mitigasi risiko dapat dipantau langsung oleh Komite Audit secara *real-time* tanpa risiko hilangnya kertas kerja di spreadsheet manual.

---

## FAQ Seputar Compensating Control BUMN

### Apakah compensating control menghilangkan status temuan defisiensi?
Tidak. Kontrol kompensasi tidak menghapus defisiensi primer, melainkan memitigasi dampaknya agar tidak berkembang menjadi *Material Weakness*. Status temuan tetap dicatat dalam *Management Letter* dengan rekomendasi perbaikan jangka panjang.

### Siapa yang berhak menyetujui penerapan kontrol kompensasi di BUMN?
Rancangan kontrol kompensasi wajib dievaluasi oleh Tim Manajemen Risiko (Lini 2) dan disetujui secara formal oleh Kepala Satuan Pengawasan Intern (SPI) serta Direktur Keuangan sebelum diberlakukan dalam kertas kerja tahun buku berjalan.

### Bagaimana mendokumentasikan kontrol kompensasi di aplikasi GRC Integra?
Melalui [platform GRC Integra](/platform/grc-integra), pengguna dapat langsung memilih tipe kontrol kompensasi pada atribut matriks kontrol, menghubungkannya ke diagram proses bisnis BPM, dan mengeksekusi pengujian otomatis sesuai formula sampel SK-5.

---

## Kesimpulan dan Rekomendasi Tindak Lanjut

Compensating control adalah penyelamat integritas laporan keuangan BUMN di tengah kendala operasional dan keterbatasan infrastruktur TI. Dengan perancangan yang presisi, independen, dan terdokumentasi rapi, korporasi dapat mempertahankan opini Wajar Tanpa Pengecualian (WTP) tanpa khawatir asersi manajemen diragukan oleh pemeriksa eksternal.

Optimalkan mitigasi defisiensi kontrol dan matriks SoD organisasi Anda dengan [Layanan Pendampingan ICOFR BUMN](https://dsintegra.co.id/layanan/icofr-bumn) atau jadwalkan sesi konsultasi teknis melalui [Formulir Kontak Kami](/#contact).
