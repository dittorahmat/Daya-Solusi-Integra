# Spec Delta

## Purpose

Memungkinkan setiap lead yang masuk lewat formulir kontak diatribusikan ke sumber kedatangannya (halaman pertama, referrer, UTM), sehingga klaim "lead dari web/SEO" dapat dibuktikan dan belanja SEO dapat dipertanggungjawabkan terhadap target 2-3 lead demo per bulan.

## ADDED Requirements

### Requirement: Pencatatan Sumber Sesi Pihak-Pertama
Sistem SHALL merekam, pada awal sesi kunjungan, tiga data sumber: halaman pendaratan pertama (path dalam situs), referrer pihak-luar (jika ada dan terbaca browser), serta parameter UTM (`utm_source`, `utm_medium`, `utm_campaign`) dari URL pendaratan. Data sumber disimpan selama sesi berlangsung dan DILARANG memakai cookie lintas-situs atau penyimpanan pihak-ketiga.

#### Scenario: Pengunjung datang dari hasil pencarian Google
- **WHEN** pengunjung pertama kali membuka `/blog/panduan-sampel-toe-tabel-22-icofr-bumn` dengan referrer `https://www.google.com/` lalu berpindah ke `/#contact` dan mengirim formulir
- **THEN** pengiriman formulir melampirkan halaman pendaratan pertama `/blog/panduan-sampel-toe-tabel-22-icofr-bumn` dan referrer Google, bukan halaman formulir itu sendiri.

#### Scenario: Pengunjung datang lewat tautan ber-UTM
- **WHEN** pengunjung membuka `https://dsintegra.co.id/kualifikasi-vendor?utm_source=linkedin&utm_medium=social&utm_campaign=vendor-awareness`
- **THEN** ketiga nilai UTM terekam untuk sesi tersebut dan tetap terlampir walau pengunjung bernavigasi ke halaman lain sebelum mengisi formulir.

### Requirement: Sumber Terlampir pada Pengiriman Formulir Kontak
Sistem SHALL menyertakan data sumber sesi pada setiap pengiriman ke `/api/contact` bersama tujuh field formulir yang sudah ada (nama, perusahaan, surel, telepon, sektor, layanan, pesan). Field sumber yang kosong atau tidak terbaca WAJIB dikirim sebagai nilai kosong eksplisit, bukan menghilangkan pengiriman atau menggagalkan validasi.

#### Scenario: Submit dengan data sumber lengkap
- **WHEN** formulir valid dikirim pada sesi yang memiliki data sumber
- **THEN** payload memuat seluruh field formulir plus data sumber, dan pengiriman berhasil persis seperti sebelum perubahan ini.

#### Scenario: Submit saat data sumber tidak tersedia
- **WHEN** browser memblokir akses referrer dan tidak ada UTM pada sesi tersebut
- **THEN** formulir tetap terkirim normal dengan field sumber bernilai kosong, tanpa pesan galat tambahan bagi pengirim.

### Requirement: Sumber Tampil pada Notifikasi Marketing dan Disanitasi
Server SHALL memvalidasi dan membatasi panjang setiap field sumber seperti field formulir lainnya (batas wajar, potong kelebihan, tolak tipe non-string) dan SHALL mencantumkan sumber (halaman pendaratan, referrer, UTM) pada surel notifikasi ke marketing. Field sumber DILARANG dirender sebagai HTML aktif pada surel.

#### Scenario: Notifikasi lead dari SEO
- **WHEN** lead masuk dengan halaman pendaratan `/layanan/icofr-bumn` dan referrer Google
- **THEN** surel ke marketing menampilkan ketujuh data pengirim plus baris sumber yang readable, sehingga tim dapat mengklasifikasikan lead sebagai "dari SEO" tanpa menebak.

#### Scenario: Serangan injeksi via field sumber
- **WHEN** payload mengandung field sumber berupa markup script atau string melebihi batas
- **THEN** server memotong/menolak bagian berbahaya tersebut namun tetap memproses lead-nya, dan surel yang terkirim tidak mengeksekusi markup apa pun.

### Requirement: Privasi Data Sumber
Sistem SHALL memastikan data sumber tidak memuat informasi identitas pribadi (tidak ada pengambilan email, nomor telepon, atau isi formulir ke dalam field sumber) dan data sumber DILARANG dikirim ke domain pihak-ketiga mana pun. Seluruh perekaman dan pengiriman terjadi antara browser pengunjung dan server `dsintegra.co.id` saja.

#### Scenario: Audit privasi aliran data
- **WHEN** seluruh permintaan jaringan sesi formulir diperiksa
- **THEN** tidak ada satu pun permintaan ke domain analitik/iklan pihak-ketiga yang membawa data sumber maupun data formulir.
