export interface FaqItem {
  question: string;
  answer: string;
}

export const ROUTE_FAQS: Record<string, FaqItem[]> = {
  "/layanan/icofr-bumn": [
    {
      question: "Apakah seluruh BUMN dan anak perusahaannya wajib menerapkan ICOFR berbasis SK-5?",
      answer: "Ya. Berdasarkan SK-5/DKU.MBU/11/2024 jo. PER-2/MBU/03/2023, kewajiban penyusunan dan pengujian pengendalian internal atas pelaporan keuangan berlaku bagi seluruh induk holding BUMN serta anak perusahaan terkonsolidasi yang memenuhi kriteria materialitas akun keuangan."
    },
    {
      question: "Kapan batas waktu penyampaian laporan asersi pengendalian internal Direksi?",
      answer: "Surat asersi Direksi (Lampiran 11 SK-5) wajib ditandatangani dan disampaikan bersamaan dengan penyampaian Laporan Keuangan Tahunan Audited kepada Kementerian BUMN serta Dewan Komisaris setiap penutupan tahun buku."
    },
    {
      question: "Apa perbedaan mendasar antara pengujian TOD (Test of Design) dan TOE (Test of Operating Effectiveness)?",
      answer: "TOD menguji kecukupan rancangan kontrol dalam memitigasi risiko salah saji material melalui metode walkthrough (Test of One). Sedangkan TOE menguji konsistensi penerapan kontrol operasional sepanjang periode laporan menggunakan ukuran sampel acak berfrekuensi berdasarkan Tabel 22 Regulasi BUMN."
    },
    {
      question: "Bagaimana pembagian peran Lini 1, Lini 2, dan Lini 3 dalam siklus hidup ICOFR?",
      answer: "Lini 1 (Operasional dan Keuangan) merancang dan mengeksekusi kontrol harian; Lini 2 (Manajemen Risiko, Kepatuhan, atau Konsultan Pendamping) memvalidasi RCM dan menguji kepatuhan operasional; Lini 3 (Satuan Pengawasan Intern/SPI) melakukan audit independen atas kecukupan tata kelola secara keseluruhan."
    },
    {
      question: "Apa luaran utama yang dihasilkan dari pendampingan konsultan Daya Solusi Integra?",
      answer: "Luaran mencakup dokumen scoping akun material, Risk and Control Matrix (RCM) berstandar SK-5, kertas kerja walkthrough TOD dan TOE, deficiency sheet rekomendasi perbaikan kontrol, serta draf surat asersi manajemen Direksi yang siap diaudit."
    }
  ],
  "/kalkulator-sampel-toe": [
    {
      question: "Bagaimana penentuan jumlah sampel pengujian operasional menurut Tabel 22 SK-5?",
      answer: "Tabel 22 Kementerian BUMN menetapkan rentang sampel berdasarkan frekuensi pelaksanaan kontrol: Tahunan (1 sampel), Triwulanan (2 sampel), Bulanan (2 s.d. 5 sampel), Mingguan (5 s.d. 15 sampel), Harian (20 s.d. 40 sampel), dan Berulang/Jam-jaman (25 s.d. 60 sampel)."
    },
    {
      question: "Apa konsekuensi audit jika ditemukan 1 deviasi atau penyimpangan saat pengujian sampel?",
      answer: "Sesuai standar pengujian pengendalian internal, toleransi kesalahan sampel pengujian umumnya adalah 0 (zero deviation). Jika ditemukan 1 penyimpangan, penguji wajib memperluas ukuran sampel (sample expansion) atau menetapkan kontrol tersebut tidak efektif (control deficiency)."
    },
    {
      question: "Apakah kontrol otomatis pada sistem aplikasi (ITAC) memerlukan sampel puluhan transaksi?",
      answer: "Tidak. Apabila kontrol umum teknologi informasi (ITGC) seperti manajemen perubahan (change management) dan akses sistem telah teruji efektif, kontrol aplikasi terotomatisasi cukup diuji dengan 1 sampel transaksi (Test of One)."
    },
    {
      question: "Kapan auditor internal atau konsultan harus memilih batas sampel tertinggi pada rentang Tabel 22?",
      answer: "Batas sampel tertinggi (misal 40 sampel untuk kontrol harian atau 60 sampel untuk kontrol berulang) dipilih ketika kontrol dimitigasi untuk risiko kecurangan (fraud), pergantian staf kunci yang tinggi, atau riwayat temuan defisiensi pada periode audit sebelumnya."
    }
  ],
  "/platform/grc-integra": [
    {
      question: "Apakah platform software GRC Integra mendukung instalasi on-premise di data center BUMN?",
      answer: "Ya. GRC Integra dirancang untuk fleksibilitas penerapan tinggi, mendukung instalasi on-premise di pusat data lokal BUMN maupun private cloud pemerintah terisolasi guna memenuhi standar kedaulatan data dan regulasi keamanan siber BSSN."
    },
    {
      question: "Apakah platform GRC Integra dapat diintegrasikan dengan ERP korporat seperti SAP atau Oracle?",
      answer: "Ya. Platform menyediakan antarmuka integrasi REST API dan modul konektor data untuk menyinkronkan bagan akun (Chart of Accounts), daftar transaksi material, serta log otorisasi persetujuan langsung dari sistem ERP eksisting tanpa mengganggu alur operasional."
    },
    {
      question: "Bagaimana proses migrasi dari lembar kerja spreadsheet RCM manual ke GRC Integra?",
      answer: "GRC Integra menyediakan fitur impor massal template Excel terstruktur. Data kontrol, risiko, pemilik kontrol, dan asersi laporan keuangan dapat diunggah dan otomatis terkonversi menjadi basis data matriks digital interaktif dalam hitungan menit."
    },
    {
      question: "Apakah asersi manajemen yang diterbitkan GRC Integra dilengkapi fitur verifikasi keabsahan?",
      answer: "Ya. Dokumen asersi akhir dilengkapi tanda tangan digital dan QR Code verifikasi kriptografis yang membuktikan keaslian dokumen asersi Direksi saat diverifikasi oleh auditor eksternal (KAP) maupun BPK RI."
    }
  ],
  "/platform/bpm-workflow-editor": [
    {
      question: "Apakah fitur BPM Workflow Editor memerlukan lisensi desktop tambahan seperti Microsoft Visio?",
      answer: "Tidak. BPM Workflow Editor adalah modul berbasis web murni yang terintegrasi langsung di platform GRC Integra. Tim Anda dapat merancang, mengedit, dan membagikan diagram alur proses bisnis secara kolaboratif melalui browser tanpa lisensi desktop pihak ketiga."
    },
    {
      question: "Bagaimana cara kerja fitur auto-draw saat mengunggah file SOP lama (PDF, JPG, PNG)?",
      answer: "Sistem cerdas kami memindai struktur dokumen atau gambar scan SOP yang diunggah, mengenali urutan langkah serta percabangan proses, lalu secara otomatis merekonstruksi dan menggambarnya kembali ke dalam kanvas digital interaktif. Anda dapat langsung mengedit teks, menggeser node, atau menyesuaikan swimlane."
    },
    {
      question: "Apakah organisasi kami bisa menjadwalkan sesi demonstrasi secara tatap muka (offline)?",
      answer: "Ya. Kami menyediakan layanan demo tatap muka langsung (offline) khusus untuk kantor pusat dan unit kerja di wilayah Jabodetabek. Untuk organisasi di luar wilayah Jabodetabek, kami menyediakan sesi demonstrasi interaktif secara daring (online) dengan pendampingan langsung oleh tim konsultan kami."
    },
    {
      question: "Apakah format diagram yang dibuat mematuhi standar notasi BPMN internasional?",
      answer: "Ya. BPM Workflow Editor mendukung standar elemen BPMN (Swimlane, Event, Activity/Task, Gateway keputusan, dan Data Store), sehingga hasil diagram siap digunakan baik untuk lampiran resmi dokumen SOP internal maupun keperluan pembuktian audit kepatuhan regulasi."
    },
    {
      question: "Format ekspor apa saja yang didukung oleh editor alur proses ini?",
      answer: "Diagram alur proses yang telah selesai dirancang dapat diekspor secara fleksibel ke berbagai format dokumen siap cetak maupun presentasi, termasuk PDF Vektor beresolusi tinggi, gambar PNG/JPG, serta file pertukaran data standar."
    }
  ],
  "/toolkit-regulasi": [
    {
      question: "Apakah template Risk and Control Matrix (RCM) ini sudah sesuai dengan regulasi SK-5 Kementerian BUMN?",
      answer: "Ya. Struktur kolom template RCM kami mengadopsi standar Lampiran SK-5/DKU.MBU/11/2024, mencakup pemetaan akun material, identifikasi risiko salah saji keuangan, asersi manajemen (E, C, V, R, P), tipe kontrol, frekuensi, dan metode pengujian Lini 2."
    },
    {
      question: "Bagaimana cara mendapatkan paket lengkap file spreadsheet Excel (XLSX)?",
      answer: "Anda cukup mengisi formulir permohonan resmi di halaman ini dengan menyertakan nama instansi BUMN dan surel dinas resmi. Tim kemitraan Daya Solusi Integra akan mengirimkan paket berkas spreadsheet kerja dalam waktu 1x24 jam kerja."
    },
    {
      question: "Apa risiko utama mengelola kertas kerja ICOFR secara manual menggunakan Excel?",
      answer: "Tantangan terbesar spreadsheet manual adalah tidak adanya jejak audit digital (audit trail), risiko benturan versi file antar-unit kerja (versioning failure), dan kerentanan rumus rusak saat konsolidasi di tingkat holding BUMN. Hal ini dapat diatasi secara permanen melalui platform GRC Integra."
    }
  ],
  "/panduan-kak-tor-icofr": [
    {
      question: "Apakah draf KAK ini dapat langsung disesuaikan oleh Panitia Pengadaan BUMN?",
      answer: "Ya. Draf Kerangka Acuan Kerja (KAK) dan spesifikasi teknis software yang kami sediakan berformat Word (.DOCX) terbuka dan dirancang modular, sehingga Pejabat Pembuat Komitmen (PPK) dapat dengan mudah menyesuaikan batasan anggaran, waktu pelaksanaan, dan struktur holding masing-masing BUMN."
    },
    {
      question: "Mengapa spesifikasi teknis software GRC wajib mensyaratkan arsitektur on-premise atau private cloud?",
      answer: "Kepatuhan terhadap UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) dan regulasi BSSN mewajibkan data keuangan strategis BUMN tidak dialirkan ke server publik pihak ketiga atau multi-tenant luar negeri. Opsi on-premise menjamin kedaulatan data penuh berada di bawah kendali BUMN."
    },
    {
      question: "Apakah Daya Solusi Integra dapat membantu penyusunan estimasi Harga Perkiraan Sendiri (HPS)?",
      answer: "Ya. Tim tender dan kemitraan kami dapat memberikan telaah kewajaran anggaran (market sounding) dan perhitungan HPS berbasis standar remunerasi Ikatan Akuntan Publik Indonesia (IAPI) dan INKINDO untuk tenaga ahli bersertifikasi CRMA, CISA, dan CA."
    }
  ],
  "/studi-kasus": [
    {
      "question": "Mengapa studi kasus yang disajikan menggunakan format profil anonim?",
      "answer": "Seluruh pelaksanaan audit kepatuhan, pengujian pengendalian internal, dan pendampingan ICOFR BUMN terikat oleh perjanjian kerahasiaan data yang ketat (Non-Disclosure Agreement / NDA). Kami menyamarkan nama entitas klien namun mempertahankan 100% akurasi metodologi teknis, kompleksitas masalah, dan metrik hasil audit yang dicapai."
    },
    {
      "question": "Bagaimana metodologi Daya Solusi Integra memangkas durasi pengujian TOE hingga 70 persen?",
      "answer": "Efisiensi dicapai melalui standarisasi formula ukuran sampel normatif berbasis frekuensi Tabel 22 SK-5, eliminasi redundancy pengujian kontrol terotomatisasi (ITAC) berbasis Test of One, serta integrasi platform digital GRC Integra yang menggantikan pelaporan lembar kerja spreadsheet manual yang rentan deviasi."
    },
    {
      "question": "Apakah hasil rekomendasi dan kertas kerja ICOFR diakui oleh auditor eksternal (BPK, BPKP, KAP)?",
      "answer": "Ya. Kertas kerja pengujian (TOD walkthrough dan TOE sampling) serta deficiency sheet yang kami susun mengikuti Standar Pemeriksaan Keuangan Negara (SPKN) dan standar audit Institut Akuntan Publik Indonesia (IAPI), sehingga memudahkan proses konfirmasi dan meminimalisir sanggahan audit."
    },
    {
      "question": "Bagaimana organisasi kami dapat meminta telaah awal atas defisiensi pengendalian internal saat ini?",
      "answer": "Anda dapat menghubungi tim konsultan kami melalui email resmi marketing@dsintegra.co.id untuk menjadwalkan sesi pendahuluan (scoping review) secara daring maupun luring guna menelaah catatan audit tahun sebelumnya dan merumuskan rencana tindak lanjut perbaikan."
    }
  ],
  "/temuan-audit-icofr": [
    {
      "question": "Apa perbedaan antara Material Weakness, Significant Deficiency, dan Control Deficiency?",
      "answer": "Control Deficiency terjadi ketika rancangan atau pelaksanaan kontrol tidak mampu mencegah salah saji. Significant Deficiency adalah defisiensi yang cukup penting untuk diperhatikan oleh Komite Audit meskipun belum tergolong material. Material Weakness adalah kelemahan signifikan di mana terdapat kemungkinan wajar bahwa salah saji material pada laporan keuangan tidak dapat dicegah atau dideteksi tepat waktu."
    },
    {
      "question": "Berapa lama batas waktu penyelesaian Corrective Action Plan (CAP) sebelum penutupan tahun buku?",
      "answer": "Sesuai petunjuk teknis SK-5 Kementerian BUMN, seluruh Corrective Action Plan atas defisiensi signifikan harus telah diuji ulang efektivitasnya (re-tested) minimal 30 s.d. 60 hari sebelum penutupan tahun buku (cut-off 31 Desember) agar Direksi dapat menyatakan asersi pengendalian internal secara wajar."
    },
    {
      "question": "Bagaimana pembagian peran antara Lini 1, Lini 2, dan Satuan Pengawasan Intern (SPI) dalam remediasi temuan?",
      "answer": "Lini 1 (Pemilik Proses) bertindak sebagai eksekutor yang memperbaiki SOP dan kontrol harian; Lini 2 merancang matriks remediasi dan melakukan validasi pengujian ulang; sedangkan Lini 3 (SPI) melakukan audit kepatuhan independen atas ketuntasan penyelesaian rekomendasi tindak lanjut hasil pemeriksaan (TLHP)."
    },
    {
      "question": "Bagaimana platform software GRC Integra mempermudah penatausahaan tindak lanjut defisiensi?",
      "answer": "GRC Integra menyediakan deficiency tracking dashboard otomatis dengan penugasan tiket perbaikan ke penanggung jawab (action owner), batas waktu SLA, repositori dokumen bukti tindak lanjut, dan jejak audit digital yang siap dikonfirmasi kepada auditor eksternal BPK/BPKP/KAP."
    }
  ],
  "/blog/manfaat-aplikasi-icofr-bumn-spreadsheet": [
    {
      "question": "Apa kelemahan paling krusial spreadsheet dibanding aplikasi ICOFR khusus?",
      "answer": "Ketiadaan jejak audit digital (audit trail) tak terbantahkan, kerentanan rusaknya formula kalkulasi, serta risiko manipulasi data kontrol saat ratusan personil Lini 1 dan Lini 2 menyunting berkas Excel secara bersamaan."
    },
    {
      "question": "Bagaimana aplikasi ICOFR GRC Integra mempercepat proses audit akhir tahun?",
      "answer": "Platform menyediakan akses baca khusus bagi auditor eksternal (BPK, BPKP, KAP Tier-1) untuk memeriksa repositori eviden, alur proses bisnis BPMN, dan kertas kerja walkthrough secara mandiri, memangkas waktu klarifikasi hingga 70 persen."
    },
    {
      "question": "Apakah aplikasi ICOFR menjamin kepatuhan regulasi SK-5/DKU.MBU/11/2024?",
      "answer": "Ya. Seluruh modul dirancang presisi mengikuti ketentuan Surat Keputusan Menteri BUMN Nomor SK-5, mulai dari format RCM, kalkulator sampel normatif Tabel 22, hingga draf surat pernyataan asersi Direksi."
    }
  ],
  "/blog/panduan-sk5-icofr-grc-integra": [
    {
      "question": "Apa sanksi atau risiko bagi BUMN yang tidak mematuhi mandat SK-5 ICOFR?",
      "answer": "Potensi temuan pemeriksaan kepatuhan oleh BPKP dan BPK RI, penurunan skor penilaian GCG tahunan korporasi, serta risiko hukum pribadi bagi Direksi atas laporan keuangan yang tidak dilengkapi pembuktian sistem pengendalian memadai."
    },
    {
      "question": "Kapan penentuan sampel pengujian operasional kontrol (TOE) harus diselesaikan?",
      "answer": "Pengujian TOE dilakukan berkala sepanjang tahun buku dan dievaluasi penuh pada kuartal IV (Oktober s.d. Desember) sebelum penutupan buku guna memastikan tidak ada defisiensi material yang belum tereduksi."
    },
    {
      "question": "Apakah seluruh anak perusahaan BUMN wajib menerapkan standar SK-5 yang sama?",
      "answer": "Kewajiban berlaku bagi entitas anak yang masuk dalam batas materialitas scoping laporan keuangan konsolidasian induk holding BUMN."
    }
  ],
  "/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5": [
    {
      "question": "Apa kepanjangan dan pengertian dasar dari ICOFR?",
      "answer": "ICOFR adalah singkatan dari Internal Control over Financial Reporting, yaitu sistem dan prosedur pengendalian internal yang dirancang untuk memberikan keyakinan memadai bahwa laporan keuangan disajikan secara andal dan sesuai standar akuntansi yang berlaku."
    },
    {
      "question": "Apa kaitan antara ICOFR dengan 5 komponen COSO Framework?",
      "answer": "Regulasi SK-5 BUMN mengadopsi kerangka COSO 2013 secara utuh, mencakup Lingkungan Pengendalian, Penilaian Risiko, Aktivitas Pengendalian, Informasi & Komunikasi, serta Pemantauan."
    },
    {
      "question": "Mengapa surat pernyataan asersi Direksi memerlukan pengujian kontrol berlapis?",
      "answer": "Asersi Direksi merupakan pernyataan hukum formal tanggung jawab manajemen. Tanpa pengujian validasi independen Lini 2 dan SPI, pernyataan asersi rentan dibantah oleh auditor eksternal apabila ditemukan salah saji material."
    }
  ],
  "/blog/panduan-sampel-toe-tabel-22-icofr-bumn": [
    {
      "question": "Berapa ukuran sampel normatif untuk kontrol yang berjalan harian?",
      "answer": "Berdasarkan Tabel 22 SK-5 Kementerian BUMN, kontrol harian dengan populasi sekitar 250 transaksi per tahun buku memerlukan ukuran sampel acak antara 20 hingga 40 transaksi dengan toleransi penyimpangan nol (zero deviation)."
    },
    {
      "question": "Apa yang harus dilakukan jika ditemukan satu kesalahan saat pengujian sampel TOE?",
      "answer": "Satu penyimpangan dalam sampel representatif menandakan kontrol gagal beroperasi efektif, sehingga penguji wajib melakukan perluasan sampel atau mengklasifikasikan temuan tersebut sebagai defisiensi kontrol."
    },
    {
      "question": "Apakah kontrol tahunan cukup diuji dengan 1 sampel?",
      "answer": "Ya. Untuk kontrol dengan frekuensi pelaksanaan tahunan (misal rekonsiliasi aktuaris imbalan kerja akhir tahun), ukuran sampel normatif Tabel 22 adalah 1 keterjadian."
    }
  ],
  "/blog/fitur-kunci-aplikasi-icofr-bumn": [
    {
      "question": "Mengapa modul editor BPMN penting dalam aplikasi ICOFR BUMN?",
      "answer": "Lampiran 3 SK-5 mewajibkan dokumentasi proses bisnis divisualisasikan dengan notasi standar BPMN terintegrasi yang memetakan titik risiko salah saji dan titik kontrol kunci secara transparan."
    },
    {
      "question": "Bagaimana asersi digital ber-QR Code melindungi keabsahan dokumen pelaporan?",
      "answer": "QR Code terenkripsi memastikan dokumen laporan efektivitas ICOFR dan tanda tangan Direksi tidak dapat diubah (tamper-proof) dan dapat diverifikasi keasliannya secara langsung oleh regulator."
    }
  ]
};
