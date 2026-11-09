---
id: "panduan-pengujian-pengendalian-ipe-mrc-icofr-bumn"
title: "Panduan Pengujian Pengendalian IPE dan MRC Sesuai Juknis SK-5 BUMN"
slug: "panduan-pengujian-pengendalian-ipe-mrc-icofr-bumn"
excerpt: "Panduan teknis pengujian Information Produced by Entity (IPE) dan Management Review Controls (MRC) berdasarkan SK-5/DKU.MBU/11/2024: validasi kelengkapan & akurasi data ERP, spreadsheet EUC, serta reviu pertimbangan manajemen."
category: "Tata Kelola & GRC"
author: "Humbul Kristiawan"
authorRole: "Principal Partner & Senior GRC Advisor"
date: "9 November 2026"
readTime: "15 menit"
coverImage: "/images/blog/u-photo-1451187580459-43490279c0fa-1200.webp"
tags: ["Pengujian IPE", "Pengendalian MRC", "Audit ITGC", "SK-5 BUMN", "Validasi ERP", "Kertas Kerja ICOFR"]
featured: false
---

## Daftar Isi
- [Urgensi Pengujian IPE dan MRC dalam Audit ICOFR BUMN](#urgensi-pengujian-ipe-dan-mrc-dalam-audit-icofr-bumn)
- [Klasifikasi Information Produced by Entity (IPE) Menurut SK-5](#klasifikasi-information-produced-by-entity-ipe-menurut-sk-5)
- [Prosedur Validasi Kelengkapan dan Akurasi (C&A) Laporan IPE](#prosedur-validasi-kelengkapan-dan-akurasi-ca-laporan-ipe)
- [Tantangan Spreadsheet End-User Computing (EUC) dan Matriks Kontrolnya](#tantangan-spreadsheet-end-user-computing-euc-dan-matriks-kontrolnya)
- [Karakteristik dan Prinsip Pengendalian Management Review Control (MRC)](#karakteristik-dan-prinsip-pengendalian-management-review-control-mrc)
- [Langkah Validasi Rancangan dan Operasi MRC (Tabel 21 SK-5)](#langkah-validasi-rancangan-dan-operasi-mrc-tabel-21-sk-5)
- [Korelasi Pengujian IPE dan MRC dengan Efektivitas ITGC](#korelasi-pengujian-ipe-dan-mrc-dengan-efektivitas-itgc)
- [Kesiapan Audit Lini 1, Lini 2, dan Lini 3 Menjelang Asersi Tahunan](#kesiapan-audit-lini-1-lini-2-dan-lini-3-menjelang-asersi-tahunan)
- [Automasi Tata Kelola IPE dan MRC dengan Platform GRC Integra](#automasi-tata-kelola-ipe-dan-mrc-dengan-platform-grc-integra)

## Urgensi Pengujian IPE dan MRC dalam Audit ICOFR BUMN

> **Jawaban Ringkas (AI Overview Capsule):**
> **Pengujian IPE dan MRC dalam ICOFR BUMN adalah** prosedur pengujian audit wajib berdasarkan Keputusan Deputi Bidang Keuangan dan Manajemen Risiko Kementerian BUMN Nomor SK-5/DKU.MBU/11/2024 (Bab III & Tabel 15, 20, 21) untuk memvalidasi bahwa laporan atau data yang diekstraksi dari sistem ERP (*Information Produced by Entity*) terbukti lengkap dan akurat (*Completeness & Accuracy*), serta aktivitas penelaahan estimasi akuntansi oleh pimpinan (*Management Review Controls*) dijalankan secara presisi dengan bukti tindak lanjut terdokumentasi.

Dalam audit kepatuhan pengendalian internal atas pelaporan keuangan di lingkungan BUMN, salah satu temuan paling berulang yang diangkat oleh Kantor Akuntan Publik (KAP) maupun Badan Pengawasan Keuangan dan Pembangunan (BPKP) bukan terletak pada ketiadaan tanda tangan persetujuan pimpinan, melainkan pada **ketiadaan bukti validasi atas data pendukung yang digunakan pimpinan saat mengambil keputusan akuntansi**.

Fenomena ini bersumber dari dua pilar krusial:
1. **Kegagalan integritas IPE (Information Produced by Entity):** Manajemen mengandalkan lembar kerja Excel hasil download dari modul ERP atau query basis data tanpa memverifikasi apakah data tersebut telah terfilter, terpotong, atau diubah parameternya.
2. **Kelemahan pelaksanaan MRC (Management Review Controls):** Penelaahan laporan keuangan bulanan atau memo pencadangan aset hanya dibuktikan dengan paraf formalitas tanpa ada dokumentasi batas toleransi selisih (*threshold* investigasi), rincian pertanyaan klarifikasi, dan evaluasi kewajaran asumsi masa depan.

Petunjuk Teknis SK-5/DKU.MBU/11/2024 mendedikasikan panduan khusus pada Bab III (Sub-bab 2 dan 4) serta Tabel 14, 15, 20, dan 21 untuk memastikan seluruh BUMN menerapkan metodologi pengujian IPE dan MRC yang terstandarisasi.

## Klasifikasi Information Produced by Entity (IPE) Menurut SK-5

Berdasarkan definisi resmi SK-5, IPE adalah dokumen elektronik maupun fisik (seperti lembar kerja Excel, dokumen Word, file PDF, atau laporan cetak) yang diperoleh dari ekstraksi sistem informasi entitas dengan tujuan mendukung entri jurnal atau keputusan akuntansi dalam proses pelaporan keuangan.

SK-5 membagi IPE ke dalam tiga kelompok utama dengan risiko bawaan yang berbeda:

1. **Laporan Standar (Standard Report):** Laporan bawaan pabrikan (*out-of-the-box*) dari aplikasi ERP ternama (misal: laporan saldo piutang SAP FBL5N atau daftar aset tetap Oracle Assets) yang logikanya baku dan tidak dimodifikasi oleh pemrogram lokal.
2. **Laporan Kustom (Custom Report):** Laporan yang dirancang khusus oleh pengembang internal BUMN atau konsultan implementor (misal: program Z-report di SAP) untuk memenuhi kebutuhan pelaporan manajemen spesifik.
3. **Laporan Kueri Langsung (Query Report):** Data yang ditarik langsung dari basis data menggunakan bahasa query (SQL) atau antarmuka *quick-viewer* oleh pengguna operasional.

## Prosedur Validasi Kelengkapan dan Akurasi (C&A) Laporan IPE

Ketika suatu aktivitas kontrol bertumpu pada laporan sistem (dikenal sebagai *IT Dependent Manual Control / ITDM*), penguji Lini Kedua (Fungsi ICOFR) dan Lini Ketiga (SPI) dilarang langsung menyimpulkan kontrol tersebut efektif hanya dengan melihat laporan tersebut digunakan. Penguji wajib melakukan pengujian kelengkapan (*completeness*) dan akurasi (*accuracy*) mengacu pada **Tabel 15 dan Tabel 20 SK-5**:

| Kategori IPE | Prosedur Pengujian Minimum Sesuai Tabel 20 SK-5 | Fokus Verifikasi Audit |
| :--- | :--- | :--- |
| **Laporan Standar & Laporan Kustom** | 1. Memastikan seluruh kontrol umum teknologi informasi (ITGC) pada sistem aplikasi terkait telah teruji efektif sepanjang tahun buku.<br>2. Memeriksa dokumentasi parameter ekstraksi yang digunakan Control Owner (tanggal cut-off, kode cabang, status akun).<br>3. Menguji kelengkapan data dengan merekonsiliasi total saldo/baris pada laporan ke buku besar (General Ledger). | Konsistensi konfigurasi sistem dan kecukupan parameter filter penarikan. |
| **Laporan Query (Direct SQL)** | 1. Melakukan reviu teknis atas sintaks SQL yang digunakan (memastikan tabel sumber, klausa JOIN, WHERE, dan formula aggregasi sudah benar).<br>2. Membandingkan total baris (*record count*) pada sumber data asli dengan hasil ekstraksi laporan.<br>3. Melakukan penelusuran silang (*cross-tie*) sampel baris informasi pada laporan query dengan dokumen transaksi fisik/pendukung. | Ketiadaan bias query, filter tersembunyi, atau inkonsistensi relasi basis data. |

Pengujian kelengkapan dan akurasi ini wajib didokumentasikan dalam kertas kerja TOD untuk setiap sampel pengujian pengendalian ITDM.

## Tantangan Spreadsheet End-User Computing (EUC) dan Matriks Kontrolnya

Banyak unit kerja BUMN memanfaatkan spreadsheet Excel sebagai jembatan penghubung antara data ERP mentah dengan jurnal penyesuaian akhir (seperti perhitungan amortisasi PSAK 73, penurunan nilai piutang PSAK 109, atau kapitalisasi bunga pinjaman). Lembar kerja mandiri ini dikategorikan sebagai *End-User Computing (EUC)*.

Tabel 14 SK-5 menetapkan matriks pengendalian minimum yang wajib diterapkan pada lembar kerja spreadsheet berdasarkan tingkat kompleksitas rumusnya:

```
+---------------------------------------------------------------------------------------------------+
| TINGKAT KOMPLEKSITAS SPREADSHEET EUC VS PENGENDALIAN MINIMUM (TABEL 14 SK-5)                      |
+---------------------------------------------------------------------------------------------------+
| 1. Kompleksitas Rendah:                                                                           |
|    - Ciri: Rumus sederhana, tidak ada lembar kerja terhubung (misal: jadwal depresiasi linier).    |
|    - Kontrol Minimum: Pengendalian Integritas Data (penguncian sel rumus) & Ketersediaan (Backup).|
|                                                                                                   |
| 2. Kompleksitas Sedang:                                                                           |
|    - Ciri: Formula perkalian/penjumlahan antar sel, memiliki lembar kerja pendukung terhubung.    |
|    - Kontrol Minimum: Version Control, Data Integrity Control, Availability Control, serta       |
|      Access & Change Control bila sel rumus tidak dikunci secara permanen.                        |
|                                                                                                   |
| 3. Kompleksitas Tinggi:                                                                           |
|    - Ciri: Memuat macro VBA, integrasi data eksternal, model valuasi aktuarial, atau skenario rumit.|
|    - Kontrol Wajib Penuh (5 Kontrol):                                                             |
|      [x] Version Control (Log riwayat versi dan persetujuan perubahan model)                      |
|      [x] Access Control (Proteksi kata sandi terenkripsi pada file sensitif)                      |
|      [x] Change Control (Uji perubahan formula dan otorisasi independen sebelum dipakai)          |
|      [x] Data Integrity Control (Validasi input, rekonsiliasi total, penguncian sel formula)      |
|      [x] Availability Control (Pencadangan rutin di server aman dan pengujian restorasi berkala)  |
+---------------------------------------------------------------------------------------------------+
```

Kegagalan menerapkan lima kontrol minimum pada spreadsheet berkategori tinggi secara otomatis mendiskualifikasi keandalan IPE yang dihasilkan, sehingga memicu penetapan defisiensi pada rancangan kontrol akun terkait.

## Karakteristik dan Prinsip Pengendalian Management Review Control (MRC)

Management Review Control (MRC) adalah aktivitas pengendalian detektif di mana pejabat pimpinan (seperti General Manager Keuangan, CFO, atau Kepala Cabang) melakukan evaluasi kritis terhadap kelayakan data akuntansi yang sarat estimasi dan asumsi subjektif.

Contoh umum MRC di BUMN:
- Reviu bulanan realisasi biaya operasional dibandingkan anggaran kerja (RKAP) dan tahun sebelumnya.
- Reviu kuartalan cadangan kerugian penurunan nilai (CKPN) portofolio piutang atau pembiayaan.
- Reviu valuasi wajar aset properti investasi dan cadangan imbalan kerja karyawan.

Agar suatu MRC diakui memenuhi standar keandalan SK-5, rancangan kontrol harus memiliki empat pilar ketepatan (*precision of review*):
1. **Kewajaran ekspektasi pimpinan:** Pimpinan memiliki dasar pembanding objektif yang telah divalidasi (misal: data historis teruji, tren industri, atau model aktuaria resmi).
2. **Kriteria perbedaan yang jelas (investigation threshold):** Ditetapkannya ambang batas varians yang wajib diinvestigasi secara formal (contoh: selisih di atas Rp500 juta atau varians melampaui 10% wajib dibuatkan Berita Acara Analisis).
3. **Kompetensi dan skeptisisme profesional penelaah:** Penelaah memahami seluk-beluk bisnis operasional serta memiliki kewenangan formal untuk meminta data klarifikasi tambahan.
4. **Bukti granular atas tindak lanjut:** Adanya bukti tertulis bahwa pertanyaan penelaah telah dijawab oleh pelaksana operasional dan dilakukan penyesuaian jurnal bila ditemukan kesalahan.

## Langkah Validasi Rancangan dan Operasi MRC (Tabel 21 SK-5)

Untuk menghindari penolakan audit oleh KAP, tim Lini 2 dan Lini 3 wajib menjalankan 8 prosedur validasi MRC sebagaimana diatur pada **Tabel 21 SK-5/DKU.MBU/11/2024**:

1. **Evaluasi kemampuan mitigasi risiko:** Memastikan MRC mampu menutup potensi salah saji pada asersi yang relevan (terutama Existence, Completeness, dan Valuation).
2. **Evaluasi keandalan data pembanding:** Menilai apakah data historis atau proyeksi yang digunakan merupakan dasar yang valid untuk menetapkan ekspektasi pimpinan.
3. **Evaluasi ambang batas investigasi (*threshold*):** Menguji apakah batasan nilai perbedaan yang ditetapkan cukup sensitif untuk menangkap salah saji yang berpotensi menjadi material terhadap laporan keuangan.
4. **Evaluasi kompetensi penelaah:** Menelaah rekam jejak, latar belakang keahlian, dan wewenang penelaah dalam struktur organisasi.
5. **Evaluasi konsistensi operasi:** Memastikan penelaahan dilakukan tepat waktu sesuai frekuensi yang ditetapkan (misal: setiap sebelum penutupan pembukuan bulanan).
6. **Pelaksanaan kembali (*reperformance*):** Auditor internal mengambil data yang sama, mengidentifikasi perbedaan signifikan berdasarkan threshold, lalu membandingkan hasil temuan independen dengan hasil analisis pimpinan.
7. **Inspeksi dokumentasi notulen dan memo klarifikasi:** Memeriksa risalah rapat bulanan, lembar disposisi, memo analisis deviasi, dan bukti persetujuan penyesuaian jurnal koreksi.
8. **Verifikasi sumber data:** Memastikan data yang digunakan pimpinan dalam telaah berasal dari sistem ERP terpusat yang pengendalian ITGC-nya telah teruji efektif.

## Korelasi Pengujian IPE dan MRC dengan Efektivitas ITGC

Terdapat prinsip ketergantungan hierarkis yang tidak boleh diabaikan dalam SK-5: **Keandalan laporan IPE dan efektivitas MRC bergantung langsung pada kesehatan General IT Controls (ITGC)**.

Apabila pada sistem ERP BUMN terdapat kelemahan material pada area *Access to Program and Data* (seperti staf keuangan memiliki akses basis data langsung tanpa otorisasi) atau *Program Changes* (perubahan kode program di lingkungan produksi tanpa pengujian formal), maka seluruh laporan IPE yang diekstraksi dari sistem tersebut otomatis dianggap **tidak dapat diandalkan secara otomatis**.

Akibatnya, auditor eksternal tidak dapat lagi mengandalkan pengujian sampel minimal (Test of One) untuk kontrol otomatis, melainkan terpaksa memperluas prosedur substantif secara masif yang berpotensi menunda penerbitan opini audit tahunan.

## Kesiapan Audit Lini 1, Lini 2, dan Lini 3 Menjelang Asersi Tahunan

Untuk mencapai opini Wajar Tanpa Pengecualian (WTP) tanpa catatan defisiensi pengendalian, ketiga lini pertahanan BUMN harus membagi peran secara disiplin:
- **Lini 1 (Pemilik Proses & Akuntansi):** Mendokumentasikan setiap parameter tarikan laporan IPE, mengunci lembar kerja spreadsheet EUC, serta menyusun memo telaah analitis MRC yang komprehensif lengkap dengan bukti pendukung.
- **Lini 2 (Fungsi ICOFR & Manajemen Risiko):** Melakukan validasi rancangan (TOD) atas kontrol ITDM dan MRC, memastikan threshold investigasi realistis terhadap ambang Performance Materiality (PM), dan memantau status Control Self-Assessment (CSA).
- **Lini 3 (SPI / Auditor Internal):** Menguji pelaksanaan kembali (*reperformance*) atas sampel MRC triwulanan dan bulanan mengacu pada ukuran sampel Tabel 22 Regulasi BUMN, serta mencatat setiap deviasi yang belum diremediasi.

## Automasi Tata Kelola IPE dan MRC dengan Platform GRC Integra

Kelemahan terbesar pengelolaan IPE dan MRC secara manual adalah tercecernya dokumen tangkapan layar (*screenshot*), hilangnya jejak notulen rapat reviu pimpinan, dan risiko rusaknya rumus spreadsheet saat pergantian personel.

Platform **GRC Integra** menghadirkan solusi teknologi untuk menyederhanakan kepatuhan IPE dan MRC:
1. **Centralized IPE Data Repository:** Mengarsipkan seluruh laporan ekstraksi ERP pendukung jurnal secara digital dengan metadata penarikan lengkap (nama pengguna, waktu ekstraksi, parameter kueri, dan hash integritas berkas).
2. **Automated EUC Lifecycle Management:** Memantau inventaris spreadsheet penting perusahaan, menyediakan fitur version control otomatis, dan melacak perubahan formula secara transparan.
3. **Structured MRC Workflow:** Menggantikan paraf manual dengan modul reviu berbasis peran (*role-based workflow*). Sistem secara otomatis menandai varians yang melampaui ambang batas toleransi dan mewajibkan pimpinan mengunggah justifikasi analisis sebelum transaksi dapat ditutup.
4. **Audit-Ready Evidence Binder:** Menghasilkan bundel bukti pengujian IPE dan MRC berformat standar yang siap diperiksa oleh KAP dan BPKP hanya dengan satu klik.

Tingkatkan tata kelola pengendalian IPE dan MRC di organisasi Anda. Konsultasikan kebutuhan pendampingan teknis melalui [Layanan Konsultansi ICOFR BUMN](/layanan/icofr-bumn), uji kesiapan sistem di [Asesmen Kesiapan Audit ITGC](/itgc-audit-readiness), atau pelajari kemampuan integrasi kami di [Platform GRC Integra](/platform/grc-integra).
