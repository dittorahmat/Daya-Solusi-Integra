---
id: "contoh-rcm-siklus-pengadaan-bumn-tod-toe"
title: "Contoh RCM Siklus Pengadaan BUMN untuk Uji TOD dan TOE: Risiko, Kontrol, dan Assertion"
slug: "contoh-rcm-siklus-pengadaan-bumn-tod-toe"
excerpt: "Contoh Risk and Control Matrix siklus Purchase-to-Pay BUMN yang siap adaptasi: 8 risiko pengadaan, assertion COSO, kontrol preventif dan detektif, frekuensi, pemilik Lini 1, bukti, dan strategi uji TOD serta TOE."
category: "Panduan Teknis"
author: "Humbul Kristiawan"
authorRole: "Principal Partner & Senior GRC Advisor"
date: "2 Oktober 2026"
readTime: "14 menit"
coverImage: "/images/blog/u-photo-1551288049-bebda4e38f71-1200.webp"
tags: ["RCM ICOFR", "Siklus Pengadaan BUMN", "Purchase to Pay", "TOD TOE", "SK-5 BUMN", "Audit Internal"]
featured: false
---

## Daftar Isi
- [Mengapa siklus pengadaan paling rawan salah saji](#mengapa-siklus-pengadaan-paling-rawan-salah-saji)
- [Delapan risiko Purchase-to-Pay dan assertion-nya](#delapan-risiko-purchase-to-pay-dan-assertion-nya)
- [Tabel RCM contoh yang siap adaptasi](#tabel-rcm-contoh-yang-siap-adaptasi)
- [Cara membaca kolom-kolom RCM](#cara-membaca-kolom-kolom-rcm)
- [Walkthrough satu transaksi dari PR sampai bayar](#walkthrough-satu-transaksi-dari-pr-sampai-bayar)
- [Kekurangan RCM berbasis Excel](#kekurangan-rcm-berbasis-excel)
- [Frekuensi kontrol dan beban sampel TOE](#frekuensi-kontrol-dan-beban-sampel-toe)
- [Checklist kesiapan RCM sebelum TOD](#checklist-kesiapan-rcm-sebelum-tod)
- [Migrasi RCM ke platform GRC dan CTA demo](#migrasi-rcm-ke-platform-grc-dan-cta-demo)

## Mengapa siklus pengadaan paling rawan salah saji

Siklus pengadaan (Purchase-to-Pay) hampir selalu masuk akun signifikan dalam scoping ICOFR BUMN. Alasannya kuantitatif dan kualitatif sekaligus: nilai belanja modal dan operasional membentang dari ratusan miliar hingga triliunan rupiah, transaksi terjadi ribuan kali setahun di banyak unit kerja, dan setiap tahap — permintaan, pemilihan vendor, penerimaan barang, pembayaran — melibatkan judgment manusia yang dapat disalahgunakan. Tidak heran temuan BPK atas pengadaan BUMN berulang dari tahun ke tahun dengan pola yang sama.

Bagi Lini 1 (pemilik proses pengadaan), tantangan utamanya bukan ketiadaan SOP melainkan ketiadaan peta yang menghubungkan risiko ke kontrol secara eksplisit. SOP bercerita tentang alur; RCM bercerita tentang keyakinan. RCM menjawab pertanyaan yang ditanyakan setiap penguji [TOD](/glosarium/tod): untuk risiko salah saji X pada assertion Y, kontrol apa yang — bila dijalankan sebagaimana dirancang — mencegah atau mendeteksinya tepat waktu, siapa pemiliknya, seberapa sering dijalankan, dan bukti apa yang membuktikan ia berjalan.

Artikel ini memberi satu tabel RCM pengadaan yang lengkap dan siap adaptasi, bukan teori generik. Salin strukturnya, ganti nilai ambang dan pemiliknya dengan kondisi entitas Anda, dan tabel ini langsung dapat diuji.

## Delapan risiko Purchase-to-Pay dan assertion-nya

Setiap baris RCM berpangkal pada risiko salah saji yang dipetakan ke assertion COSO: keberadaan dan keterjadian (existence/occurrence), kelengkapan (completeness), penilaian dan alokasi (valuation), hak dan kewajiban (rights/obligations), serta penyajian dan pengungkapan (presentation). Delapan risiko berikut menutup hampir seluruh permukaan salah saji material siklus pengadaan BUMN.

**R1 — Pembelian fiktif atau mark-up kepada vendor afiliasi.** Assertion keberadaan dan penilaian. Modusnya: purchase order diterbitkan untuk vendor yang tidak memasok barang senilai itu, atau harga dimark-up di atas harga pasar dengan kickback. Ini risiko fraud tertinggi dan wajib memiliki kontrol preventif berlapis.

**R2 — Pemecahan paket (split PO) untuk menghindari ambang tender.** Assertion kelengkapan dan penyajian. Satu kebutuhan dipecah menjadi beberapa PO di bawah ambang batas metode pemilihan langsung, sehingga proses kompetisi yang diwajibkan regulasi pengadaan tidak terjadi.

**R3 — Three-way match tidak dilakukan sebelum pembayaran.** Assertion keberadaan dan penilaian. Invoice vendor dibayar tanpa mencocokkan purchase order, bukti penerimaan barang (goods receipt), dan invoice secara tiga arah — membuka pintu pembayaran atas barang yang tidak diterima atau harga yang tidak sesuai kontrak.

**R4 — Segregation of duties dilanggar satu orang memegang ujung ke ujung.** Assertion keberadaan. Personil yang sama membuat permintaan, menyetujui PO, menerima barang, dan memverifikasi pembayaran. Tanpa pemisahan tugas, seluruh kontrol lain dapat dielakkan oleh satu orang.

**R5 — Penerimaan barang dicatat tanpa pemeriksaan fisik.** Assertion keberadaan dan penilaian. Goods receipt diterbitkan berdasarkan dokumen pengiriman tanpa opname, sehingga kuantitas dan kualitas yang dibayar tidak mencerminkan realita gudang.

**R6 — Cut-off pencatatan lintas tahun buku.** Assertion kelengkapan dan cut-off penyajian. Barang diterima Desember tetapi kewajiban dicatat Januari (atau sebaliknya), menggeser beban antar periode dan mendistorsi laba tahun berjalan.

**R7 — Uang muka dan retensi tidak dimonitor penyelesaiannya.** Assertion penilaian dan hak. Down payment kepada vendor menggantung tanpa amortisasi, atau retensi garansi tidak dicairkan dan tidak ditagih — aset tercatat overstated.

**R8 — Vendor tidak lolos kualifikasi masuk daftar penyedia.** Assertion keberadaan dan kepatuhan. Vendor tanpa KBLI, tanpa laporan keuangan audited, atau masuk daftar hitam tetap memenangkan paket karena evaluasi kualifikasi bersifat formalitas.

## Tabel RCM contoh yang siap adaptasi

Tabel berikut memakai ambang ilustratif (PO di atas Rp 500 juta wajib tender terbatas, persetujuan berjenjang dua level). Gantilah angka dan jabatan pemilik dengan ketentuan internal entitas Anda — strukturnya yang menjadi standar.

| ID | Risiko | Assertion | Kontrol | Tipe | Frekuensi | Pemilik Lini 1 | Bukti | Uji |
|---|---|---|---|---|---|---|---|---|
| C1 | R1 pembelian fiktif | Keberadaan, Penilaian | PO di atas ambang wajib melampirkan hasil survei harga pasar dan disetujui 2 level (manajer + VP) di sistem e-procurement | Preventif | Per kejadian | Manajer Pengadaan + VP Operasi | PO elektronik + lampiran survei + log approval | [TOD](/glosarium/tod): reviu desain alur approval; [TOE](/glosarium/toe): sampel PO per Tabel 22 |
| C2 | R2 split PO | Kelengkapan, Penyajian | Monitoring otomatis: sistem menolak PR baru bila total permintaan satu kebutuhan dalam 30 hari melampaui ambang metode | Preventif otomatis | Per kejadian | Admin e-procurement + Manajer Pengadaan | Log penolakan sistem + laporan agregasi PR | TOD: uji logika agregasi; TOE: test-of-one + reviu log bulanan |
| C3 | R3 tanpa three-way match | Keberadaan, Penilaian | Pembayaran dicairkan hanya bila status three-way match (PO-GR-invoice) berstatus cocok di ERP; selisih di atas toleransi 2 persen dikunci | Preventif | Per kejadian | Staf Keuangan (AP) | Status match ERP + berita acara selisih | TOD: reviu konfigurasi kunci sistem; TOE: sampel pembayaran |
| C4 | R4 pelanggaran SoD | Keberadaan | Matriks SoD: pembuat PR, approver PO, penerima barang, dan verifikator bayar adalah 4 peran berbeda; review akses tiap semester | Preventif | Semesteran | TI + Kepatuhan | Matriks SoD + berita acara user access review | TOD: evaluasi matriks; TOE: 2 sampel semesteran + uji 1 pelanggaran simulasi |
| C5 | R5 GR tanpa opname | Keberadaan, Penilaian | Berita acara penerimaan wajib mencantumkan hasil hitung fisik dan foto kondisi, ditandatangani penerima + penyedia | Detektif | Per kejadian | Kepala Gudang | BAP fisik + foto + GR | TOD: reviu format BAP; TOE: sampel GR per Tabel 22 |
| C6 | R6 cut-off lintas tahun | Kelengkapan, Penyajian | Rekonsiliasi GR-belum-invoice (accrued liability) tiap akhir bulan dan cut-off audit tiap Desember oleh Akuntansi | Detektif | Bulanan + tahunan | Manajer Akuntansi | Rekonsiliasi + jurnal penyesuaian | TOD: reviu prosedur cut-off; TOE: 2-5 sampel bulanan + 1 tahunan |
| C7 | R7 uang muka menggantung | Penilaian, Hak | Aging schedule uang muka dan retensi direviu tiap bulan; saldo di atas 90 hari wajib action plan tertulis | Detektif | Bulanan | Manajer Keuangan | Aging + action plan | TOD: reviu desain aging; TOE: 2-5 sampel bulanan |
| C8 | R8 vendor tak berkualitas | Keberadaan | Evaluasi kualifikasi oleh tim independen (bukan pengguna barang) dengan scoring terdokumentasi; blacklist check sebelum penetapan pemenang | Preventif | Per paket | Tim Evaluasi Pengadaan | Lembar scoring + hasil blacklist check | TOD: reviu kriteria scoring; TOE: sampel paket pengadaan |

## Cara membaca kolom-kolom RCM

Kolom Assertion menentukan teknik pengujian. Risiko keberadaan dan penilaian (R1, R3, R5) diuji dengan vouching — telusuri dari catatan ke bukti sumber. Risiko kelengkapan (R2, R6) diuji dengan tracing arah sebaliknya — dari populasi sumber (semua PR, semua GR Desember) ke catatan. Kesalahan paling umum Lini 1 adalah menguji keduanya dengan arah yang sama sehingga salah satu assertion tidak pernah benar-benar teruji.

Kolom Tipe menentukan beban sampel. Kontrol preventif otomatis (C2, C3) yang didukung ITGC efektif dapat diuji dengan test-of-one ditambah reviu log periodik — jauh lebih ringan daripada kontrol manual per kejadian yang menuntut 25-60 sampel. Inilah alasan [penentuan sampel TOE berbasis Tabel 22](/blog/panduan-sampel-toe-tabel-22-icofr-bumn) harus dibaca bersama RCM: desain kontrol yang tepat menekan biaya pengujian tahunan secara dramatis.

Kolom Pemilik menegaskan akuntabilitas Lini 1. Setiap kontrol memiliki satu pemilik jabatan yang namanya tercantum — bukan "bagian" atau "tim". Saat walkthrough Lini 2 menemukan kontrol tidak berjalan, deficiency sheet langsung menunjuk action owner-nya. Tanpa kolom ini RCM hanyalah dokumen pajangan.

## Walkthrough satu transaksi dari PR sampai bayar

Walkthrough adalah penelusuran satu transaksi nyata dari ujung ke ujung untuk mengonfirmasi pemahaman alur dan mengevaluasi desain kontrol sebelum [TOD](/glosarium/tod) formal. Pilih satu PO bernilai menengah dari kuartal berjalan, lalu ikuti jejaknya bersama pemilik kontrol — bukan dengan membaca SOP di ruang rapat.

Langkahnya: (1) minta purchase requisition asal dan verifikasi persetujuan peminta; (2) telusuri ke dokumen pemilihan vendor dan lembar scoring — cocokkan dengan C8; (3) buka PO di e-procurement, periksa lampiran survei harga dan log dua level approval — C1; (4) tarik goods receipt dan berita acara fisik berfoto — C5; (5) buka layar three-way match di ERP dan pastikan status cocok sebelum tanggal pembayaran — C3; (6) periksa bukti bayar dan pastikan verifikatornya bukan pembuat PO — C4; (7) untuk transaksi Desember, pastikan jurnal cut-off tercatat di periode yang benar — C6.

Dokumentasikan setiap langkah dengan siapa yang diwawancarai, dokumen apa yang dilihat, dan di mana kontrol tampak mampu atau tidak mampu mencegah salah saji. Satu walkthrough yang didokumentasikan dengan baik bernilai lebih dari sepuluh halaman narasi SOP — dan format [KAK TOR yang mengikat walkthrough independen](/blog/panduan-penyusunan-kak-tor-icofr-bumn-2025) memastikan pekerjaan ini menjadi kewajiban kontrak, bukan inisiatif sukarela.

Lengkapi dokumentasi dengan tiga lampiran. Pertama, fotokopi atau tangkapan layar setiap bukti yang dilihat, diberi nomor referensi yang sama dengan langkah walkthrough-nya — pemeriksa BPK tidak menerima pernyataan "dokumen telah dilihat" tanpa lampiran. Kedua, daftar hadir dan jabatan setiap orang yang diwawancarai beserta tanggal wawancaranya, untuk membuktikan independensi (pewawancara Lini 2, bukan pemilik kontrol). Ketiga, kesimpulan desain per kontrol dalam satu kalimat tegas: "mampu mencegah" atau "defisiensi desain karena ..." — kalimat yang ragu-ragu akan dikembalikan Lini 2 dan mengulang seluruh kunjungan lapangan.

Alokasikan waktu secara realistis: satu walkthrough pengadaan ujung-ke-ujung membutuhkan setengah hingga satu hari kerja termasuk penulisan kertas kerjanya. Panitia yang menekan jadwal walkthrough menjadi dua jam per siklus praktis memesan kertas kerja tipis — dan kertas kerja tipis adalah temuan pertama yang dicatat KAP saat reviu.

## Kekurangan RCM berbasis Excel

Tabel di atas terlihat sederhana di layar, tetapi mengelolanya dalam spreadsheet untuk ratusan kontrol di banyak entitas anak menimbulkan empat risiko yang kami bedah pada [analisis risiko RCM Excel](/blog/risiko-rcm-excel-vs-software-grc-bumn): versi file bercabang sehingga Lini 2 menguji RCM kedaluwarsa; formula dan filter rusak saat disunting bersamaan; tidak ada audit trail siapa mengubah kontrol kapan; dan SoD tidak terpantau karena matriks akses terpisah dari RCM.

Dampaknya langsung ke temuan: defisiensi yang sebenarnya sudah diperbaiki tidak terlacak status remediasinya, atau sebaliknya kontrol yang gagal terus lolos karena bukti TOE terselip di folder yang salah. Pada skala holding, kekacauan administratif ini sendiri dapat diagregasi menjadi [significant deficiency](/blog/significant-deficiency-vs-material-weakness-icofr-remediasi) — temuan atas proses, bukan atas angka.

## Frekuensi kontrol dan beban sampel TOE

Kolom frekuensi pada RCM bukan informasi administratif — ia menentukan biaya pengujian setahun penuh melalui Tabel 22. Tabel ringkas berikut membantu Lini 1 memperkirakan beban sebelum pengujian dimulai. Angka rentang mengikuti ketentuan normatif SK-5 dengan toleransi deviasi nol; detail metodologi penarikan sampelnya dibaca pada [panduan sampel TOE Tabel 22](/blog/panduan-sampel-toe-tabel-22-icofr-bumn).

| Frekuensi kontrol | Rentang sampel TOE | Contoh pada siklus pengadaan | Strategi hemat yang sah |
|---|---|---|---|
| Per kejadian (transaksional) | Menyesuaikan volume populasi | C1 approval PO, C3 three-way match | Otomatisasi kunci sistem + test-of-one bila ITGC efektif |
| Harian | 25-40 | Rekonsiliasi GR-belum-invoice harian di gudang pusat | Agregasi ke kontrol detektif mingguan yang dirancang baik |
| Mingguan | 5-15 | Review aging uang muka mingguan | Fokus pada minggu tutup bulan (risiko cut-off tertinggi) |
| Bulanan | 2-5 | Rekonsiliasi accrued liability, aging retensi | 2 sampel + perluasan hanya bila deviasi |
| Kuartalan | 2 | Evaluasi kualifikasi vendor kuartalan | Uji desain ketat, sampel minimal |
| Semesteran | 2 | User access review dan SoD review | Dokumentasi berita acara sebagai bukti tunggal yang kuat |
| Tahunan | 1 | Cut-off audit Desember | Satu sampel yang didokumentasikan sempurna |

Tiga implikasi praktis. Pertama, desain ulang kontrol sebelum menguji: kontrol harian manual yang dapat diganti kontrol mingguan detektif yang efektif memangkas sampel dari 40 menjadi 15 tanpa mengurangi keyakinan — tetapi perubahan desain harus lolos TOD ulang. Kedua, kontrol otomatis adalah pengungkit terbesar: satu konfigurasi kunci three-way match yang didukung ITGC efektif diuji sekali, menggantikan puluhan sampel manual. Ketiga, jangan menawar toleransi: Tabel 22 memakai zero deviation, sehingga satu deviasi berarti perluasan sampel atau temuan — anggaran waktu tim harus mencadangkan slot re-testing sejak awal.

## Checklist kesiapan RCM sebelum TOD

RCM dinyatakan siap diuji desain bila delapan syarat berikut terpenuhi. Gunakan sebagai gerbang mutu (quality gate) yang ditandatangani Lini 1 dan Lini 2 sebelum walkthrough dimulai.

Pertama, setiap risiko memiliki assertion yang benar arah ujinya — vouching untuk keberadaan dan penilaian, tracing untuk kelengkapan. Kedua, setiap kontrol diberi label preventif atau detektif secara jujur; kontrol yang diklaim preventif tetapi dijalankan setelah transaksi adalah detektif yang menyamar. Ketiga, frekuensi setiap kontrol realistis dan konsisten dengan bukti yang tersedia — kontrol "harian" tanpa log harian akan gagal TOE sebelum dimulai.

Keempat, setiap kontrol memiliki satu pemilik jabatan bernama, bukan unit kerja. Kelima, kolom bukti menyebut dokumen spesifik (PO elektronik bernomor, BAP berfoto, log approval) bukan frasa kabur seperti "dokumen pendukung". Keenam, matriks SoD untuk peran dalam RCM sudah dievaluasi dan tidak ada rangkap ujung-ke-ujung. Ketujuh, RCM versi yang diuji adalah versi terkunci dengan nomor revisi — bukan file yang masih disunting pemilik proses. Kedelapan, kontrol kompensasi atas kelemahan yang diketahui sudah diidentifikasi, sehingga penguji TOD dapat menilai desain secara utuh bukan sepotong.

RCM yang lolos delapan gerbang ini membuat TOD berjalan cepat: penguji memverifikasi desain yang memang sudah dirancang untuk diverifikasi. RCM yang belum siap membuat TOD berubah menjadi lokakarya perbaikan desain yang mahal — dan temuan desain di tahap ini berarti kontrol tersebut tidak boleh lanjut ke TOE sama sekali.

## Migrasi RCM ke platform GRC dan CTA demo

Migrasi yang benar bukan memindahkan file Excel ke aplikasi, melainkan memindahkan akuntabilitas ke alur kerja: setiap kontrol memiliki pemilik, frekuensi memicu pengingat bukti, setiap perubahan tercatat, dan deficiency sheet mengalir otomatis ke dashboard remediasi. Kriteria platform yang mampu melakukannya — RCM digital, kalkulator Tabel 22, kertas kerja walkthrough, asersi terverifikasi — dirinci pada [platform GRC Integra](/platform/grc-integra).

Bagi tim yang sedang menyusun RCM pengadaan tahun buku berjalan, mulailah dari tabel contoh di artikel ini sebagai draf, validasi ambang dan pemiliknya dengan Lini 1 dalam satu lokakarya walkthrough, lalu pindahkan hasilnya ke platform sebelum pengujian TOE kuartal IV dimulai. Lokakarya validasi cukup satu hari: pagi memetakan risiko dan assertion per baris, siang menetapkan pemilik dan bukti, sore menyepakati frekuensi dan strategi sampel. Hasil lokakarya ditandatangani Lini 1 dan Lini 2 sebagai RCM versi terkunci — titik awal yang sah untuk TOD dan acuan yang mengikat saat sengketa cakupan muncul di tengah tahun berjalan. Dan bila ruang lingkup Anda mencakup banyak entitas anak, baca lanjutannya pada [panduan scoping konsolidasi holding-anak](/blog/scoping-akun-signifikan-konsolidasi-icofr-holding-anak-bumn) agar sampel dan pemilik terdistribusi dengan benar sejak awal.
