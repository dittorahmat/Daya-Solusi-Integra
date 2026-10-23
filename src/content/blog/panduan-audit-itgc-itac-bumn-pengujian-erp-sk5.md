---
id: "panduan-audit-itgc-itac-bumn-pengujian-erp-sk5"
title: "Panduan Audit ITGC dan ITAC BUMN: Metodologi Pengujian ERP, Kontrol Otomatis, dan Kepatuhan SK-5"
slug: "panduan-audit-itgc-itac-bumn-pengujian-erp-sk5"
excerpt: "Panduan teknis pengujian IT General Controls (ITGC) dan IT Application Controls (ITAC) pada sistem ERP BUMN: checklist pengujian akses logis, change management, three-way match, dan kepatuhan SK-5."
category: "Tata Kelola & Kepatuhan"
author: "Humbul Kristiawan"
authorRole: "Principal Partner & Senior GRC Advisor"
date: "24 Oktober 2026"
readTime: "12 menit"
coverImage: "/images/blog/u-photo-1451187580459-43490279c0fa-1200.webp"
tags: ["ITGC", "ITAC", "Audit Sistem ERP", "ICOFR BUMN", "SK-5 BUMN", "Kontrol Otomatis"]
featured: false
---

> **Ringkasan Eksekutif (Key Takeaways):**
> 1. **Fondasi Integritas Keuangan**: Pengujian pengendalian internal pelaporan keuangan (ICOFR) BUMN tidak dapat bertumpu pada kontrol manual semata. Keandalan angka buku besar bermuara pada integritas kontrol umum teknologi informasi (ITGC) dan kontrol aplikasi (ITAC).
> 2. **Hubungan Dependensi ITGC dan ITAC**: Kontrol aplikasi otomatis (seperti toleransi three-way matching pada SAP atau Oracle) hanya dapat diandalkan oleh auditor jika kontrol umum TI (manajemen akses dan change management) terbukti efektif.
> 3. **Efisiensi Beban Sampel**: Dengan ITGC yang efektif dan teruji, pengujian TOE atas kontrol otomatis cukup menggunakan strategi *test-of-one*, mereduksi puluhan sampel pengujian manual yang membebani tim kepatuhan.

## Daftar Isi
- [Urgensi Audit ITGC dan ITAC dalam Kepatuhan Regulasi SK-5 BUMN](#urgensi-audit-itgc-dan-itac-dalam-kepatuhan-regulasi-sk-5-bumn)
- [Perbedaan Mendasar ITGC vs ITAC: Konseptual dan Arsitektural](#perbedaan-mendasar-itgc-vs-itac-konseptual-dan-arsitektural)
- [Empat Domain Kunci Pengujian ITGC pada Lingkungan ERP BUMN](#empat-domain-kunci-pengujian-itgc-pada-lingkungan-erp-bumn)
- [Metodologi Pengujian IT Application Controls (ITAC)](#metodologi-pengujian-it-application-controls-itac)
- [Tabel Matriks Komparasi dan Checklist Pengujian ITGC vs ITAC](#tabel-matriks-komparasi-dan-checklist-pengujian-itgc-vs-itac)
- [Panduan Langkah Demi Langkah Pengujian ITGC dan ITAC](#panduan-langkah-demi-langkah-pengujian-itgc-dan-itac)
- [Dampak Kegagalan ITGC terhadap Asersi Direksi dan Opini Audit BPK](#dampak-kegagalan-itgc-terhadap-asersi-direksi-dan-opini-audit-bpk)
- [Otomasi Pengujian dan Dokumentasi Kertas Kerja di GRC Integra](#otomasi-pengujian-dan-dokumentasi-kertas-kerja-di-grc-integra)

## Urgensi Audit ITGC dan ITAC dalam Kepatuhan Regulasi SK-5 BUMN

Seiring dengan transformasi digital yang bergulir di seluruh Badan Usaha Milik Negara (BUMN), proses pencatatan jurnal akuntansi, rekonsiliasi kas, dan konsolidasi laporan keuangan tidak lagi dilakukan di atas kertas kerja fisik. Mayoritas transaksi diproses secara terotomasi di dalam sistem *Enterprise Resource Planning* (ERP) seperti SAP S/4HANA, Oracle ERP Cloud, maupun Microsoft Dynamics.

Kondisi ini membawa perubahan mendasar dalam tata kelola pengendalian internal. **Surat Keputusan Menteri BUMN Nomor SK-5/DKU.MBU/11/2024** secara tegas menginstruksikan bahwa pengujian pengendalian internal atas pelaporan keuangan ([ICOFR](/glosarium/icofr)) wajib mencakup evaluasi lingkungan teknologi informasi.

Auditor eksternal, baik Badan Pemeriksa Keuangan (BPK) maupun Kantor Akuntan Publik (KAP), tidak akan mempercayai laporan keuangan entitas jika sistem pendukungnya memiliki celah keamanan siber, akses pengguna istimewa yang tidak terpantau, atau perubahan kode program yang dipindahkan ke lingkungan produksi tanpa pengujian memadai.

## Perbedaan Mendasar ITGC vs ITAC: Konseptual dan Arsitektural

Meskipun saling melengkapi, ITGC dan ITAC beroperasi pada lapisan arsitektur yang berbeda:

1. **IT General Controls (ITGC) adalah** payung pengendalian umum yang diterapkan pada seluruh infrastruktur teknologi informasi, sistem operasi, manajemen basis data (DBMS), jaringan, serta tata kelola departemen teknologi informasi. Tujuannya adalah memastikan lingkungan tempat aplikasi keuangan berjalan stabil, aman, dan terlindungi dari manipulasi data tidak sah.
2. **IT Application Controls (ITAC) adalah** pengendalian terprogram yang dikonfigurasi secara spesifik di dalam modul aplikasi bisnis (seperti modul Financial Accounting, Material Management, atau Sales & Distribution) untuk menegakkan aturan bisnis tertentu pada tingkat transaksi individual.

Secara hierarkis, ITGC berfungsi sebagai fondasi. Jika ITGC dinilai tidak efektif (misalnya pengembang aplikasi memiliki akses tulis langsung ke database produksi tanpa audit log), maka seluruh kontrol otomatis ITAC di atasnya kehilangan integritasnya. Sebaliknya, bila ITGC terbukti kokoh, auditor dapat memanfaatkan keterandalan ITAC untuk memangkas ukuran sampel pengujian substantif secara signifikan.

## Empat Domain Kunci Pengujian ITGC pada Lingkungan ERP BUMN

Dalam pengujian desain ([TOD](/glosarium/tod)) dan efektivitas operasi ([TOE](/glosarium/toe)), auditor menguji empat domain utama ITGC:

### 1. Manajemen Akses Logis (Logical Access Management)
Domain ini memastikan hanya pengguna yang sah dan berwenang yang dapat mengakses data finansial:
- **Pemberian dan Pencabutan Hak Akses**: Prosedur formal onboarding dan offboarding pengguna. Akun karyawan yang mutasi atau berhenti wajib dinonaktifkan maksimal 1x24 jam.
- **Pemisahan Tugas (Segregation of Duties)**: Pencegahan peran ganda berisiko tinggi pada otorisasi ERP (seperti hak membuat vendor sekaligus menyetujui pembayaran).
- **Pengawasan Pengguna Istimewa (Privileged User / Firefighter ID)**: Penggunaan akun super-user (seperti `SAP*` atau `SYSTEM`) wajib memerlukan tiket persetujuan tertulis dan log aktivitasnya direviu secara berkala.

### 2. Manajemen Perubahan Program (Change Management)
Domain ini mencegah masuknya kode program berbahaya atau perubahan tidak sah ke lingkungan produksi:
- **Pemisahan Lingkungan (Segregation of Environments)**: Pemisahan fisik dan logis yang ketat antara lingkungan Pengembangan (Development), Pengujian (Quality Assurance), dan Produksi (Production).
- **Pengujian Pengguna (User Acceptance Testing / UAT)**: Setiap modifikasi program wajib diuji dan ditandatangani oleh pemilik proses bisnis sebelum migrasi.
- **Transport Request Management**: Pemindahan program ke produksi wajib dilakukan oleh tim basis atau administrator independen, bukan oleh programmer pembuat kode.

### 3. Operasi Teknologi Informasi (IT Operations)
Domain ini memastikan kelangsungan operasional dan pemulihan data transaksi:
- **Pencadangan Data (Backup and Recovery)**: Prosedur backup harian, mingguan, dan bulanan atas basis data keuangan serta pengujian pemulihan (restore test) secara berkala.
- **Monitoring Batch Job Scheduling**: Pengawasan atas eksekusi batch interface otomatis antar aplikasi (misal pengiriman data transaksi POS ke GL pusat) agar tidak ada file yang gagal terkirim atau terduplikasi.

### 4. Pengembangan Sistem Baru (System Development Life Cycle)
Diterapkan saat BUMN melakukan implementasi modul baru atau migrasi sistem ERP besar, mencakup validasi konversi data saldo awal (*cut-over data migration*) dan pengujian integritas tabel laporan keuangan.

## Metodologi Pengujian IT Application Controls (ITAC)

Pengujian ITAC difokuskan pada logika program terkonfigurasi. Tiga tipologi utama pengujian ITAC meliputi:

1. **Kontrol Validasi Input (Input Validation Controls)**: Memastikan kelengkapan dan keakuratan data saat pertama kali dimasukkan. Contoh: field tanggal transaksi tidak boleh diisi tanggal masa depan, nomor faktur pajak wajib sesuai format numerik DJP, dan pembatasan batas kredit pelanggan.
2. **Kontrol Pemrosesan dan Matching Otomatis (Processing Controls)**: Sistem secara otomatis mencocokkan data dari berbagai dokumen sebelum memproses jurnal. Contoh paling krusial pada siklus pengadaan adalah *Three-Way Matching* (mencocokkan kuantitas dan harga antara Purchase Order, Goods Receipt, dan Vendor Invoice dalam batas toleransi 0 persen).
3. **Pemeriksaan Duplikasi dan Urutan (Sequence and Duplicate Checks)**: Sistem menolak input nomor invoice vendor yang sama untuk mencegah pembayaran ganda (*double payment*).

## Tabel Matriks Komparasi dan Checklist Pengujian ITGC vs ITAC

Berikut adalah ringkasan matriks perbandingan dan prosedur pengujian untuk kertas kerja audit ICOFR:

| Parameter Evaluasi | IT General Controls (ITGC) | IT Application Controls (ITAC) |
|---|---|---|
| **Fokus Pengendalian** | Lingkungan TI, sistem operasi, DBMS, dan tata kelola akses pengguna | Logika bisnis terkonfigurasi di dalam modul aplikasi transaksi spesifik |
| **Frekuensi Evaluasi** | Dievaluasi per periode (semesteran atau tahunan) dan saat ada perubahan arsitektur | Dijalankan oleh sistem secara otomatis pada setiap kejadian transaksi (*per occurrence*) |
| **Beban Sampel TOE** | Menguji sampel penambahan user, tiket perubahan program, dan log restore backup | Menggunakan strategi *Test-of-One* (uji 1 transaksi) bila ITGC dinyatakan efektif |
| **Contoh Kontrol Kunci** | Penonaktifan akun ex-karyawan 1x24 jam; review privilege user kuartalan | Validasi three-way matching otomatis; penguncian posting periode akuntansi tertutup |
| **Dampak Kegagalan** | Merusak integritas seluruh aplikasi keuangan yang berada di bawah infrastruktur tersebut | Salah saji terlokalisir pada akun laporan keuangan dan proses bisnis terkait |
| **Regulasi Rujukan** | SK-5 BUMN Lampiran ITGC, POJK 11/2022, COBIT 2019, ISO 27001 | SK-5 BUMN Tahap Pengujian RCM, COSO Control Activities, Pedoman Akuntansi BUMN |



## Panduan Langkah Demi Langkah Pengujian ITGC dan ITAC

Bagi tim Lini 2 kepatuhan dan Satuan Pengawasan Intern (SPI) BUMN yang hendak menyusun rencana kerja pengujian sistem, berikut adalah tahapan sistematis yang direkomendasikan:

1. **Scoping Aplikasi Finansial Signifikan**: Identifikasi seluruh sistem informasi yang berdampak langsung pada siklus pelaporan keuangan. Mulai dari sistem ERP inti, aplikasi front-end penagihan (billing), aplikasi e-procurement, hingga basis data warehouse pelaporan manajemen.
2. **Identifikasi Akun Pengguna Istimewa (Super-User)**: Buat inventaris lengkap pemegang hak akses basis data tingkat administrator (DBA), administrator sistem operasi server produksi, dan akun fungsional SAP/Oracle berlevel tinggi. Pastikan seluruh akun tersebut memiliki personil penanggung jawab individual dan tidak digunakan secara bersama-sama.
3. **Pengujian Sampel Tiket Perubahan Sistem (Change Request)**: Ambil sampel tiket perubahan aplikasi dari sistem ticketing IT sepanjang tahun buku berjalan. Verifikasi keberadaan tiga dokumen utama: formulir permintaan perubahan bisnis, hasil pengujian user acceptance test (UAT), dan persetujuan tertulis kepala divisi TI sebelum kode ditransfer ke server produksi.
4. **Verifikasi Pengujian Test of One Kontrol ITAC**: Lakukan simulasi langsung pada sistem pengujian (QA/Staging) yang konfigurasinya identik dengan server produksi. Masukkan data transaksi yang sengaja dibuat tidak cocok (misalnya nilai invoice melebihi Purchase Order) untuk memastikan sistem secara konsisten menolak transaksi tersebut dan menampilkan pesan kesalahan yang valid.
5. **Evaluasi Tindak Lanjut Temuan Audit**: Dokumentasikan setiap deviasi yang ditemukan ke dalam lembar ringkasan defisiensi. Klasifikasikan dampaknya terhadap asersi laporan keuangan serta susun Corrective Action Plan (CAP) bersama tim teknologi informasi sebelum batas waktu audit tahunan.

## Dampak Kegagalan ITGC terhadap Asersi Direksi dan Opini Audit BPK

Ketika pengujian kepatuhan menemukan kegagalan operasional pada domain ITGC, konsekuensinya berdampak langsung pada asersi kepatuhan:

1. **Efek Domino ke Kontrol Otomatis**: Jika manajemen perubahan (change management) gagal, auditor eksternal tidak dapat mengandalkan kontrol ITAC apa pun. Auditor terpaksa membatalkan strategi audit berbasis kontrol (*controls reliance approach*) dan beralih ke pengujian substantif manual secara masif.
2. **Potensi Temuan Defisiensi Signifikan**: Ketiadaan pengawasan akun istimewa atau pelanggaran matriks SoD ERP yang meluas secara otomatis diklasifikasikan sebagai [defisiensi signifikan atau kelemahan material](/blog/significant-deficiency-vs-material-weakness-icofr-remediasi).
3. **Kredibilitas Asersi Manajemen**: Direktur Utama dan Direktur Keuangan menandatangani surat asersi tanggung jawab tahunan. Temuan kelemahan ITGC yang diangkat oleh BPK dapat mencoreng kredibilitas tata kelola korporasi dan mengancam opini Wajar Tanpa Pengecualian (WTP).

## Otomasi Pengujian dan Dokumentasi Kertas Kerja di GRC Integra

Mendokumentasikan ratusan kontrol ITGC dan ribuan konfigurasi ITAC menggunakan spreadsheet manual adalah sumber kesalahan umum di BUMN. Format kertas kerja yang berserakan di berbagai folder menyulitkan pembuktian audit trail saat audit interim berlangsung.

Platform **GRC Integra** dirancang khusus untuk menyederhanakan siklus tata kelola teknologi informasi dan pelaporan keuangan:
- **Katalog RCM Terintegrasi**: Memetakan kontrol ITGC dan ITAC langsung ke akun signifikan laporan keuangan.
- **Repositori Bukti Audit Digital**: Menyimpan tangkapan layar konfigurasi sistem, persetujuan perubahan program, dan berita acara review akses pengguna secara terenkripsi.
- **Sinkronisasi Tiga Lini**: Memfasilitasi kolaborasi tanpa friksi antara Divisi TI (Lini 1), Divisi Manajemen Risiko dan Kepatuhan (Lini 2), serta Satuan Pengawasan Intern (Lini 3).

Konsultasikan kesiapan infrastruktur dan audit sistem pelaporan keuangan BUMN Anda melalui layanan [ITGC Audit Readiness](/layanan/itgc-audit-readiness) atau jadwalkan sesi demonstrasi platform di [GRC Integra Platform](/platform/grc-integra).
