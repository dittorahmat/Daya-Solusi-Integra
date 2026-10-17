---
id: "panduan-segregation-of-duties-sod-bumn-matriks-konflik-erp"
title: "Panduan Segregation of Duties (SoD) BUMN: Matriks Konflik Kewenangan, Dampak Audit ITGC, dan Pencegahan Fraud"
slug: "panduan-segregation-of-duties-sod-bumn-matriks-konflik-erp"
excerpt: "Panduan lengkap penerapan Segregation of Duties (SoD) di lingkungan BUMN: analisis matriks konflik kewenangan pada ERP SAP dan Oracle, pemisahan 3 fungsi kritis, kontrol kompensasi, dan mitigasi temuan audit ITGC."
category: "Tata Kelola & Kepatuhan"
author: "Humbul Kristiawan"
authorRole: "Principal Partner & Senior GRC Advisor"
date: "18 Oktober 2026"
readTime: "9 menit"
coverImage: "/images/blog/u-photo-1454165804606-c3d57bc86b40-1200.webp"
tags: ["Segregation of Duties", "SoD BUMN", "ITGC", "ERP SAP Oracle", "ICOFR", "SK-5 BUMN"]
featured: false
---

> **Ringkasan Eksekutif (Key Takeaways):**
> 1. **Definisi & Esensi SoD**: Prinsip pemisahan tugas yang melarang satu individu mengendalikan seluruh siklus transaksi keuangan (otorisasi, kustodi aset, dan pencatatan).
> 2. **Fokus Audit ITGC**: Pelanggaran SoD pada sistem ERP (SAP, Oracle, Microsoft Dynamics) merupakan temuan paling umum auditor BPK dan KAP yang kerap diklasifikasikan sebagai defisiensi signifikan.
> 3. **Mitigasi Compensating Control**: Pada entitas anak dengan keterbatasan jumlah staf, kontrol kompensasi independen yang terdokumentasi wajib dijalankan untuk mencegah kegagalan audit.

## Daftar Isi
- [Urgensi Segregation of Duties dalam Tata Kelola BUMN](#urgensi-segregation-of-duties-dalam-tata-kelola-bumn)
- [Pemisahan Tiga Fungsi Kritis Transaksi Keuangan](#pemisahan-tiga-fungsi-kritis-transaksi-keuangan)
- [Tabel Matriks Konflik SoD Paling Umum pada ERP BUMN](#tabel-matriks-konflik-sod-paling-umum-pada-erp-bumn)
- [Dampak Temuan SoD terhadap Opini Audit dan Kepatuhan SK-5](#dampak-temuan-sod-terhadap-opini-audit-dan-kepatuhan-sk-5)
- [Strategi Mitigasi Menggunakan Compensating Control](#strategi-mitigasi-menggunakan-compensating-control)
- [Otomasi Pengawasan SoD Menggunakan Platform GRC Integra](#otomasi-pengawasan-sod-menggunakan-platform-grc-integra)

## Urgensi Segregation of Duties dalam Tata Kelola BUMN

Badan Usaha Milik Negara (BUMN) mengelola transaksi finansial dengan volume masif dan rantai birokrasi yang kompleks. Dalam pelaksanaannya, celah fraud dan salah saji laporan keuangan paling sering terjadi ketika tidak ada batas tegas kewenangan antar personel operasional.

Prinsip **Segregation of Duties (SoD)** atau Pemisahan Tugas merupakan pilar mendasar pengendalian internal atas pelaporan keuangan ([ICOFR](/glosarium/icofr)) sebagaimana diatur dalam **Surat Keputusan Kementerian BUMN Nomor SK-5/DKU.MBU/11/2024** dan **POJK No. 11/POJK.03/2022**.

Ketika satu pengguna memiliki hak akses berlebih pada sistem akuntansi atau *Enterprise Resource Planning* (ERP), integritas data keuangan berada dalam bahaya tinggi. Tindakan kecurangan dapat dieksekusi dan disembunyikan tanpa perlu kolusi dengan pihak lain.

## Pemisahan Tiga Fungsi Kritis Transaksi Keuangan

Dalam kerangka kerja pengendalian internal COSO, sistem proteksi SoD mensyaratkan pemisahan mutlak atas tiga fungsi bisnis:

1. **Fungsi Otorisasi (Authorization)**: Kewenangan menyetujui terjadinya suatu komitmen bisnis (misal: persetujuan Purchase Order, persetujuan batas kredit pelanggan, pelepasan pembayaran bank).
2. **Fungsi Kustodi Aset (Custody of Assets)**: Akses fisik atau logis terhadap aset perusahaan (misal: penanganan kas di kasir, penerimaan fisik barang di gudang logistik, hak transfer rekening bank).
3. **Fungsi Pencatatan (Recording / Accounting)**: Tanggung jawab mencatat jurnal akuntansi ke dalam buku besar umum (*General Ledger*) dan sub-ledger.

Pemeriksa dari Badan Pemeriksa Keuangan (BPK) maupun Kantor Akuntan Publik (KAP) akan menguji apakah terdapat peran ganda (role overlap) yang menggabungkan dua atau tiga fungsi di atas pada satu individu pengguna sistem.

## Tabel Matriks Konflik SoD Paling Umum pada ERP BUMN

Berikut adalah matriks konflik kewenangan berisiko tinggi yang kerap menjadi temuan audit dalam siklus pengadaan (Purchase-to-Pay), siklus pendapatan (Order-to-Cash), dan manajemen keuangan:

| Siklus Bisnis | Peran Pertama (Fungsi A) | Peran Kedua (Fungsi B) | Risiko Finansial / Celah Fraud | Tingkat Risiko Audit |
| :--- | :--- | :--- | :--- | :--- |
| **Pengadaan (P2P)** | Pembuat Purchase Order (PO) | Petugas Approval PO & Pelepasan Bayar | Pembelian fiktif dan transaksi tanpa tender independen | **Kritis (Tinggi)** |
| **Pengadaan (P2P)** | Pembuat Vendor Master Data | Pembayaran / Transfer Bank Vendor | Pembuatan rekening vendor palsu untuk penyaluran dana gelap | **Kritis (Tinggi)** |
| **Logistik** | Petugas Penerima Fisik Barang (GR) | Akuntansi Hutang (AP Invoice Entry) | Pencatatan penerimaan fiktif yang langsung ditagihkan | **Signifikan** |
| **Pendapatan (O2C)** | Pembuat Pesanan Penjualan (SO) | Otorisasi Penghapusan Piutang (Write-off) | Penggelapan piutang pelanggan dengan dalih piutang macet | **Kritis (Tinggi)** |
| **Treasury** | Pembuat Tagihan Pembayaran | Approval Token Internet Banking Bank | Transfer dana kas korporasi tanpa persetujuan berjenjang | **Kritis (Tinggi)** |
| **TI / ITGC** | Pengembang Aplikasi (Developer) | Administrator Akses Produksi (Prod Access) | Modifikasi kode program live tanpa melalui pengujian QA | **Signifikan** |

## Dampak Temuan SoD terhadap Opini Audit dan Kepatuhan SK-5

Dalam evaluasi kepatuhan audit regulasi SK-5, pelanggaran SoD tidak diperlakukan sebagai kesalahan administratif biasa:
- **Agregasi Defisiensi Signifikan**: Jika konflik SoD terjadi pada akun material (misal: pengadaan belanja modal senilai puluhan miliar), auditor eksternal akan mengklasifikasikannya sebagai *Significant Deficiency* atau bahkan *Material Weakness*.
- **Pelemahan Efektivitas ITGC**: Keberadaan akun dengan wewenang super-user (seperti profil `SAP_ALL` di lingkungan produksi) menggugurkan keandalan kontrol aplikasi otomatis (*IT Application Controls* / ITAC), sehingga seluruh pengujian kontrol terpaksa dialihkan ke pengujian substantif yang memakan biaya besar.
- **Tanggung Jawab Direksi**: Temuan kelemahan material akibat konflik SoD wajib diungkapkan secara eksplisit dalam surat asersi manajemen tahunan yang ditandatangani Direktur Utama dan Direktur Keuangan.

Pelajari lebih lanjut mengenai klasifikasi defisiensi pada [Panduan Remediasi Defisiensi Kontrol ICOFR](/blog/significant-deficiency-vs-material-weakness-icofr-remediasi).

## Strategi Mitigasi Menggunakan Compensating Control

Pada unit kerja regional atau anak perusahaan BUMN dengan struktur personel terbatas, pemisahan tugas secara sempurna terkadang sulit diwujudkan. Dalam kondisi tersebut, juknis SK-5 membolehkan penerapan [kontrol kompensasi](/glosarium/compensating-control) (*compensating control*):

1. **Independent Periodic Review**: Pemeriksaan harian atau mingguan oleh atasan independen (Lini 2) atas seluruh daftar transaksi yang dieksekusi oleh staf dengan peran rangkap.
2. **Automated Audit Logs**: Penguncian log transaksi sistem yang dikirimkan secara otomatis ke tim Satuan Pengawasan Intern ([SPI BUMN](/glosarium/spi)) tanpa dapat diubah oleh pelaksana.
3. **Threshold Dual Authorization**: Penetapan aturan limit nilai transaksi di mana setiap nilai di atas ambang tertentu wajib meminta persetujuan fisik kedua dari direksi.

Penting dicatat: Kontrol kompensasi harus dibuktikan operasionalnya melalui pengujian sampel berkala ([TOE](/glosarium/toe)), bukan sekadar kebijakan di atas kertas.

## Otomasi Pengawasan SoD Menggunakan Platform GRC Integra

Mengelola hak akses ribuan pengguna ERP secara manual menggunakan spreadsheet adalah sumber utama kelalaian kepatuhan. Melalui [Platform GRC Integra](/platform/grc-integra), BUMN dapat mendeteksi dan memitigasi konflik kewenangan secara terotomasi:
- **Mesin Analisis Aturan SoD Terpadu**: Memindai hak otorisasi pengguna ERP secara berkala dan menampilkan peta konflik peran (*SoD conflict dashboard*).
- **Alur Kerja Pengecualian Resmi**: Memfasilitasi pendaftaran kontrol kompensasi yang sah secara hukum internal dengan lampiran justifikasi bisnis.
- **Kesiapan Audit ITGC**: Menyediakan kertas kerja lengkap yang siap diserahkan kepada auditor KAP dan BPK, memangkas waktu klarifikasi audit lapangan hingga 70 persen.

Untuk mendiskusikan evaluasi matriks kewenangan dan kesiapan audit sistem informasi di organisasi Anda, konsultasikan kebutuhan Anda bersama tim ahli kami melalui [Layanan ITGC Audit Readiness](/layanan/itgc-audit-readiness) atau ajukan [Jadwal Demo Platform GRC Integra](/platform/grc-integra).
