export interface GlossaryItem {
  id: string;
  term: string;
  acronym?: string;
  category: "Regulasi & Kerangka Kerja" | "Metodologi Pengujian" | "Klasifikasi Kontrol" | "Evaluasi Defisiensi" | "Pengadaan & Kualifikasi";
  regulationRef: string;
  definition: string;
  keyTakeaway: string;
  practicalExample?: string;
  relatedTermIds?: string[];
  relatedServiceUrl?: string;
  relatedServiceLabel?: string;
}

export const GLOSSARY_CATEGORIES = [
  "Semua",
  "Regulasi & Kerangka Kerja",
  "Metodologi Pengujian",
  "Klasifikasi Kontrol",
  "Evaluasi Defisiensi",
  "Pengadaan & Kualifikasi"
] as const;

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: "icofr",
    term: "Internal Control over Financial Reporting",
    acronym: "ICOFR",
    category: "Regulasi & Kerangka Kerja",
    regulationRef: "SK-5/DKU.MBU/11/2024 & COSO Framework",
    definition: "Suatu proses yang dirancang dan dijalankan oleh Dewan Direksi, manajemen, dan personel entitas lainnya untuk memberikan keyakinan memadai mengenai keandalan pelaporan keuangan dan penyusunan laporan keuangan untuk pihak eksternal sesuai dengan prinsip akuntansi yang berlaku umum.",
    keyTakeaway: "Wajib diterapkan oleh seluruh BUMN dan anak perusahaannya di Indonesia dengan penandatanganan asersi manajemen tahunan oleh Direktur Utama dan Direktur Keuangan.",
    practicalExample: "Penerapan matriks pemisahan tugas (Segregation of Duties) pada ERP SAP BUMN antara pembuat pesanan pembelian (purchase order) dan pihak yang menyetujui pembayaran (payment release).",
    relatedTermIds: ["asersi-manajemen", "tod", "toe", "elc"],
    relatedServiceUrl: "/layanan/icofr-bumn",
    relatedServiceLabel: "Konsultasi Implementasi ICOFR"
  },
  {
    id: "tod",
    term: "Test of Design",
    acronym: "TOD",
    category: "Metodologi Pengujian",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab IV Tahap Pengujian",
    definition: "Pengujian evaluasi untuk memastikan bahwa aktivitas pengendalian yang dirancang, jika dioperasikan sebagaimana mestinya oleh personel yang berwenang, mampu mencegah atau mendeteksi dan mengoreksi salah saji material pada pelaporan keuangan secara tepat waktu.",
    keyTakeaway: "Dilakukan sebelum pengujian efektivitas operasi (TOE). Jika rancangan kontrol dinyatakan tidak efektif (defisiensi desain), kontrol tersebut tidak dapat diuji efektivitas operasinya.",
    practicalExample: "Evaluasi formulir Standard Operating Procedure (SOP) rekonsiliasi bank apakah telah mensyaratkan tanda tangan verifikasi dari Pejabat Lini 2 sebelum jurnal dicatat.",
    relatedTermIds: ["toe", "walkthrough-lini-2", "defisiensi-kontrol"],
    relatedServiceUrl: "/platform/grc-integra",
    relatedServiceLabel: "Otomasi Pengujian TOD di GRC Integra"
  },
  {
    id: "toe",
    term: "Test of Operating Effectiveness",
    acronym: "TOE",
    category: "Metodologi Pengujian",
    regulationRef: "SK-5/DKU.MBU/11/2024 Tabel 22",
    definition: "Pengujian untuk mengumpulkan bukti audit yang cukup memadai mengenai apakah aktivitas pengendalian beroperasi secara efektif dan konsisten sepanjang periode yang dicakup dalam asersi manajemen, termasuk siapa yang menjalankannya dan bagaimana konsistensinya.",
    keyTakeaway: "Ukuran sampel pengujian TOE wajib mengacu secara normatif pada frekuensi pelaksanaan kontrol (Tabel 22 regulasi BUMN).",
    practicalExample: "Menguji 25 dokumen tiket perubahan sistem ITGC secara acak sepanjang tahun buku untuk memastikan seluruhnya memiliki bukti otorisasi tertulis Kepala Divisi TI.",
    relatedTermIds: ["tod", "tabel-22", "defisiensi-material"],
    relatedServiceUrl: "/blog/panduan-sampel-toe-tabel-22-icofr-bumn",
    relatedServiceLabel: "Panduan Sampel Tabel 22"
  },
  {
    id: "tabel-22",
    term: "Tabel 22 Ukuran Sampel Pengujian Kontrol Manual",
    category: "Metodologi Pengujian",
    regulationRef: "SK-5/DKU.MBU/11/2024 Lampiran Pengujian Kontrol",
    definition: "Matriks panduan resmi Kementerian BUMN yang menetapkan rentang jumlah sampel minimum yang wajib diuji untuk kontrol manual dengan tingkat deviasi nol (zero tolerable deviation) berdasarkan frekuensi keterjadian kontrol.",
    keyTakeaway: "Tahunan: 1 sampel; Triwulanan: 2 sampel; Bulanan: 2 sampai 5 sampel; Mingguan: 5 sampai 15 sampel; Harian: 25 sampai 40 sampel; Berulang kali sehari: 25 sampai 60 sampel.",
    practicalExample: "Kontrol rekonsiliasi kas bulanan wajib diuji dengan mengambil 2 hingga 5 bulan sampel acak tanpa boleh ditemukan satu pun deviasi.",
    relatedTermIds: ["toe", "tod", "tlc"],
    relatedServiceUrl: "/platform/grc-integra",
    relatedServiceLabel: "Kalkulator Tabel 22 GRC Integra"
  },
  {
    id: "walkthrough-lini-2",
    term: "Walkthrough Pengendalian Internal",
    category: "Metodologi Pengujian",
    regulationRef: "SK-5/DKU.MBU/11/2024 Pedoman Tata Kerja Tiga Lini",
    definition: "Prosedur penelusuran transaksi dari awal terjadinya proses bisnis, pencatatan dalam sistem akuntansi, pemrosesan transaksi, hingga pelaporan dalam laporan keuangan untuk mengonfirmasi pemahaman alur kerja dan mengevaluasi rancangan kontrol.",
    keyTakeaway: "Regulasi Kementerian BUMN mewajibkan pelaksanaan walkthrough oleh pihak penjamin independen (Lini 2) untuk memastikan pemisahan tugas obyektif dari Lini 1.",
    practicalExample: "Penelusuran satu transaksi klaim garansi dari penerimaan berkas di loket cabang hingga pencatatan liabilitas di neraca keuangan kantor pusat BUMN.",
    relatedTermIds: ["tod", "tlc", "icofr"],
    relatedServiceUrl: "/blog/panduan-sk5-icofr-grc-integra",
    relatedServiceLabel: "Alur Walkthrough Lini 2"
  },
  {
    id: "elc",
    term: "Entity-Level Controls",
    acronym: "ELC",
    category: "Klasifikasi Kontrol",
    regulationRef: "COSO 17 Principles & SK-5 BUMN",
    definition: "Aktivitas pengendalian internal yang memiliki pengaruh pervasif atau melingkupi organisasi secara keseluruhan, mencakup lingkungan pengendalian, proses penilaian risiko korporat, kode etik, dan aktivitas pengawasan oleh Dewan Komisaris dan Komite Audit.",
    keyTakeaway: "ELC membentuk fondasi utama. Kelemahan pada tingkat ELC berpotensi menggagalkan efektivitas kontrol transaksional di tingkat operasional.",
    practicalExample: "Penandatanganan pakta integritas dan komitmen anti benturan kepentingan oleh seluruh jajaran Direksi dan Dewan Komisaris BUMN.",
    relatedTermIds: ["icofr", "tlc", "defisiensi-material"],
    relatedServiceUrl: "/layanan/enterprise-grc",
    relatedServiceLabel: "Evaluasi Maturitas ELC"
  },
  {
    id: "tlc",
    term: "Transaction-Level Controls",
    acronym: "TLC",
    category: "Klasifikasi Kontrol",
    regulationRef: "COSO Control Activities & SK-5 BUMN",
    definition: "Aktivitas pengendalian yang diterapkan pada proses bisnis spesifik (seperti siklus pendapatan, pengadaan barang dan jasa, penggajian, dan aset tetap) untuk memitigasi risiko salah saji pada asersi akun keuangan tertentu.",
    keyTakeaway: "TLC mencakup kontrol preventif (seperti otorisasi dual approval) dan kontrol detektif (seperti rekonsiliasi bulanan).",
    practicalExample: "Pemeriksaan otomatis three-way matching pada sistem procurement antara Purchase Order, Goods Receipt, dan Vendor Invoice.",
    relatedTermIds: ["elc", "itgc", "tod"],
    relatedServiceUrl: "/layanan/icofr-bumn",
    relatedServiceLabel: "Penyusunan RCM TLC"
  },
  {
    id: "itgc",
    term: "Information Technology General Controls",
    acronym: "ITGC",
    category: "Klasifikasi Kontrol",
    regulationRef: "POJK No. 11/POJK.03/2022 & COBIT",
    definition: "Kebijakan dan prosedur pengendalian umum yang diterapkan pada infrastruktur teknologi informasi, sistem operasi, basis data, dan aplikasi keuangan untuk memastikan kelangsungan operasional dan integritas data keuangan.",
    keyTakeaway: "Mencakup 3 domain kritis: Manajemen Akses Logis (IAM/SoD), Manajemen Perubahan (Change Management), dan Operasi TI (Backup & Job Scheduling).",
    practicalExample: "Pencabutan hak akses login ke basis data akuntansi maksimal 1x24 jam setelah status karyawan dinyatakan berhenti atau mutasi.",
    relatedTermIds: ["tlc", "tod", "toe"],
    relatedServiceUrl: "/layanan/itgc-audit-readiness",
    relatedServiceLabel: "Audit Kesiapan ITGC"
  },
  {
    id: "defisiensi-kontrol",
    term: "Defisiensi Kontrol",
    acronym: "Control Deficiency",
    category: "Evaluasi Defisiensi",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab V Evaluasi Defisiensi",
    definition: "Kondisi di mana rancangan atau pelaksanaan pengendalian tidak memungkinkan manajemen atau karyawan, dalam pelaksanaan fungsi normalnya, untuk mencegah atau mendeteksi salah saji pada laporan keuangan secara tepat waktu.",
    keyTakeaway: "Tingkat defisiensi paling ringan yang dapat diatasi melalui perbaikan operasional internal tanpa kewajiban modifikasi asersi publik.",
    practicalExample: "Keterlambatan verifikasi rekonsiliasi aset tetap selama 2 hari dari tanggal cutoff yang tidak berdampak pada saldo material neraca.",
    relatedTermIds: ["defisiensi-signifikan", "defisiensi-material", "tod"],
    relatedServiceUrl: "/layanan/icofr-bumn",
    relatedServiceLabel: "Konsultasi Remediasi Defisiensi"
  },
  {
    id: "defisiensi-signifikan",
    term: "Defisiensi Signifikan",
    acronym: "Significant Deficiency",
    category: "Evaluasi Defisiensi",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab V Evaluasi Defisiensi",
    definition: "Suatu defisiensi, atau kombinasi dari beberapa defisiensi dalam pengendalian internal atas pelaporan keuangan, yang tingkat keparahannya lebih rendah daripada kelemahan material, namun cukup penting untuk diperhatikan oleh pihak yang bertanggung jawab atas tata kelola (Komite Audit).",
    keyTakeaway: "Wajib dilaporkan kepada Direksi dan Komite Audit untuk segera diformulasikan Corrective Action Plan (CAP).",
    practicalExample: "Tidak dilakukannya review berkala terhadap akun pengguna istimewa (privileged user) pada server database pelaporan keuangan.",
    relatedTermIds: ["defisiensi-kontrol", "defisiensi-material", "asersi-manajemen"],
    relatedServiceUrl: "/platform/grc-integra",
    relatedServiceLabel: "Pelacakan Temuan di GRC Integra"
  },
  {
    id: "defisiensi-material",
    term: "Kelemahan Material",
    acronym: "Material Weakness",
    category: "Evaluasi Defisiensi",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab V Evaluasi Defisiensi",
    definition: "Suatu defisiensi, atau kombinasi defisiensi pengendalian internal, sedemikian rupa sehingga terdapat kemungkinan yang wajar bahwa salah saji material pada laporan keuangan tahunan atau interim entitas tidak akan dapat dicegah atau dideteksi secara tepat waktu.",
    keyTakeaway: "Jika terdapat satu saja kelemahan material yang belum diremediasi pada tanggal pelaporan, Direksi tidak dapat menyatakan bahwa pengendalian internal efektif.",
    practicalExample: "Ketiadaan prosedur verifikasi pencadangan kerugian penurunan nilai piutang yang menyebabkan salah saji di atas batas materialitas perencanaan audit.",
    relatedTermIds: ["defisiensi-signifikan", "asersi-manajemen", "icofr"],
    relatedServiceUrl: "/layanan/icofr-bumn",
    relatedServiceLabel: "Pendampingan Asersi Manajemen"
  },
  {
    id: "asersi-manajemen",
    term: "Asersi Manajemen Pelaporan Keuangan",
    category: "Regulasi & Kerangka Kerja",
    regulationRef: "SK-5/DKU.MBU/11/2024 Lampiran Pernyataan Direksi",
    definition: "Pernyataan formal tertulis yang ditandatangani oleh Direktur Utama dan Direktur Keuangan yang menyatakan tanggung jawab manajemen atas perancangan, penerapan, dan penilaian efektivitas sistem pengendalian internal atas pelaporan keuangan.",
    keyTakeaway: "Surat pernyataan asersi dilampirkan dalam Laporan Tahunan BUMN dan menjadi obyek verifikasi audit oleh Kantor Akuntan Publik (KAP) serta BPK.",
    practicalExample: "Pernyataan eksplisit Direksi dalam Laporan Tahunan bahwa pengendalian internal entitas efektif berdasarkan evaluasi per 31 Desember tahun buku bersangkutan.",
    relatedTermIds: ["icofr", "defisiensi-material", "elc"],
    relatedServiceUrl: "/platform/grc-integra",
    relatedServiceLabel: "Penerbitan Asersi Ber-QR Code"
  },
  {
    id: "rcm",
    term: "Risk and Control Matrix",
    acronym: "RCM",
    category: "Metodologi Pengujian",
    regulationRef: "SK-5/DKU.MBU/11/2024 Tahap Dokumentasi Pengendalian",
    definition: "Matriks kerja yang memetakan setiap risiko signifikan atas asersi laporan keuangan dengan aktivitas pengendalian yang dirancang untuk memitigasinya, mencakup pemilik kontrol, frekuensi pelaksanaan, tipe kontrol (manual, otomatis, atau campuran), serta prosedur pengujian yang akan diterapkan.",
    keyTakeaway: "RCM adalah tulang punggung kertas kerja ICOFR: tanpa RCM yang lengkap dan disetujui Lini 2, pengujian TOD dan TOE tidak memiliki acuan yang dapat diaudit.",
    practicalExample: "Baris RCM untuk siklus pengadaan: risiko mark-up harga vendor dimitigasi kontrol verifikasi tiga penawaran dan persetujuan berjenjang sesuai batas kewenangan.",
    relatedTermIds: ["tod", "toe", "walkthrough-lini-2"],
    relatedServiceUrl: "/toolkit-regulasi",
    relatedServiceLabel: "Template RCM di Toolkit Regulasi"
  },
  {
    id: "scoping-materialitas",
    term: "Scoping dan Materialitas",
    category: "Metodologi Pengujian",
    regulationRef: "SK-5/DKU.MBU/11/2024 Tahap Perencanaan & Standar Audit Keuangan",
    definition: "Tahap awal siklus ICOFR untuk menentukan entitas, akun laporan keuangan, dan proses bisnis signifikan yang masuk dalam cakupan pengujian, berdasarkan ambang materialitas kuantitatif dan pertimbangan kualitatif seperti kompleksitas transaksi dan riwayat temuan audit.",
    keyTakeaway: "Scoping yang terlalu sempit meninggalkan risiko tidak teruji, sedangkan scoping yang terlalu luas memboroskan sumber daya pengujian.",
    practicalExample: "Akun kas dan piutang usaha holding ditetapkan signifikan karena nilainya melebihi 5 persen total aset dan memiliki riwayat selisih rekonsiliasi.",
    relatedTermIds: ["rcm", "elc", "icofr"],
    relatedServiceUrl: "/layanan/icofr-bumn",
    relatedServiceLabel: "Pendampingan Scoping ICOFR"
  },
  {
    id: "three-lines-model",
    term: "Three Lines Model",
    category: "Regulasi & Kerangka Kerja",
    regulationRef: "Model Tiga Lini IIA 2020 & SK-5/DKU.MBU/11/2024",
    definition: "Model tata kelola yang membagi peran menjadi Lini 1 (manajemen operasional pemilik risiko dan kontrol), Lini 2 (fungsi kepatuhan, manajemen risiko, dan pengendalian yang memvalidasi), serta Lini 3 (audit internal independen yang memberikan asurans).",
    keyTakeaway: "SK-5 menuntut pemisahan tegas peran Lini 1 dan Lini 2, termasuk walkthrough independen oleh Lini 2 sebelum pengujian efektivitas.",
    practicalExample: "Staf akuntansi (Lini 1) menjalankan rekonsiliasi, Manajer Kepatuhan (Lini 2) memvalidasi kertas kerja, dan SPI (Lini 3) mengaudit keduanya.",
    relatedTermIds: ["walkthrough-lini-2", "elc", "icofr"],
    relatedServiceUrl: "/regulasi",
    relatedServiceLabel: "Matriks Tiga Lini di Pusat Regulasi"
  },
  {
    id: "coso-framework",
    term: "COSO Internal Control Framework",
    acronym: "COSO",
    category: "Regulasi & Kerangka Kerja",
    regulationRef: "COSO 2013 & SK-5/DKU.MBU/11/2024",
    definition: "Kerangka kerja pengendalian internal yang diterbitkan Committee of Sponsoring Organizations of the Treadway Commission, terdiri dari 5 komponen (lingkungan pengendalian, penilaian risiko, aktivitas pengendalian, informasi dan komunikasi, pemantauan) dan 17 prinsip yang menjadi acuan SK-5 bagi BUMN.",
    keyTakeaway: "Seluruh evaluasi maturitas dan asersi ICOFR BUMN dirumuskan dalam bahasa 5 komponen dan 17 prinsip COSO.",
    practicalExample: "Checklist ELC menilai 17 prinsip COSO untuk menyimpulkan apakah fondasi pengendalian tingkat entitas memadai.",
    relatedTermIds: ["elc", "tlc", "icofr"],
    relatedServiceUrl: "/asesmen-maturitas",
    relatedServiceLabel: "Asesmen Maturitas COSO"
  },
  {
    id: "sod",
    term: "Segregation of Duties",
    acronym: "SoD",
    category: "Klasifikasi Kontrol",
    regulationRef: "SK-5/DKU.MBU/11/2024 Lampiran ITGC & POJK 11/2022",
    definition: "Prinsip pemisahan tugas yang memastikan tidak ada satu individu pun yang mengendalikan seluruh tahapan transaksi kritis (otorisasi, pencatatan, dan kustodi aset), sehingga kecurangan memerlukan kolusi dan lebih mudah terdeteksi.",
    keyTakeaway: "Konflik SoD pada ERP dan core banking adalah temuan ITGC paling umum dan hampir selalu diklasifikasikan sebagai defisiensi signifikan.",
    practicalExample: "Pengguna yang dapat membuat purchase order tidak boleh sekaligus menyetujui pembayaran atas order tersebut di sistem ERP.",
    relatedTermIds: ["itgc", "tlc", "defisiensi-signifikan"],
    relatedServiceUrl: "/layanan/itgc-audit-readiness",
    relatedServiceLabel: "Audit SoD & ITGC"
  },
  {
    id: "compensating-control",
    term: "Compensating Control",
    acronym: "Kontrol Kompensasi",
    category: "Klasifikasi Kontrol",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab Evaluasi Defisiensi",
    definition: "Aktivitas pengendalian pengganti yang dirancang untuk memitigasi risiko ketika kontrol utama tidak dapat diterapkan secara ideal, misalnya karena keterbatasan sistem atau struktur organisasi yang kecil, sepanjang efektivitasnya dapat dibuktikan melalui pengujian.",
    keyTakeaway: "Kontrol kompensasi harus didokumentasikan dan diuji seperti kontrol utama; ia bukan alasan untuk membiarkan defisiensi desain.",
    practicalExample: "Review bulanan independen atas seluruh jurnal manual oleh Kepala Akuntansi sebagai kompensasi atas ketiadaan pemisahan tugas pada staf yang sedikit.",
    relatedTermIds: ["key-control", "defisiensi-kontrol", "remediasi-kontrol"],
    relatedServiceUrl: "/temuan-audit-icofr",
    relatedServiceLabel: "Katalog Temuan & CAP"
  },
  {
    id: "key-control",
    term: "Key Control",
    acronym: "Kontrol Kunci",
    category: "Klasifikasi Kontrol",
    regulationRef: "SK-5/DKU.MBU/11/2024 Tahap Identifikasi Kontrol",
    definition: "Aktivitas pengendalian yang secara utama diandalkan untuk mencegah atau mendeteksi salah saji material pada suatu asersi, sehingga menjadi fokus wajib pengujian TOD dan TOE serta penentu kesimpulan efektivitas pengendalian.",
    keyTakeaway: "Salah mengidentifikasi key control berarti menguji kontrol yang salah: hasil TOE menjadi tidak relevan bagi asersi manajemen.",
    practicalExample: "Rekonsiliasi bank bulanan yang ditandatangani Lini 2 ditetapkan sebagai key control atas asersi keberadaan dan kelengkapan akun kas.",
    relatedTermIds: ["rcm", "tod", "toe"],
    relatedServiceUrl: "/toolkit-regulasi",
    relatedServiceLabel: "Identifikasi Key Control di RCM"
  },
  {
    id: "remediasi-kontrol",
    term: "Remediasi Pengendalian",
    acronym: "Remediation",
    category: "Evaluasi Defisiensi",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab Tindak Lanjut & CAP",
    definition: "Rangkaian tindakan perbaikan terstruktur (Corrective Action Plan) untuk menutup defisiensi pengendalian yang ditemukan, mencakup analisis akar masalah, perbaikan desain kontrol, pengujian ulang efektivitas, dan pemantauan keberlanjutan hingga defisiensi dinyatakan tuntas.",
    keyTakeaway: "Defisiensi dinyatakan tuntas hanya setelah kontrol perbaikan diuji efektif selama periode yang memadai, bukan sekadar setelah dokumen diperbaiki.",
    practicalExample: "CAP atas temuan SoD: pencabutan akses ganda, redesain matriks peran ERP, lalu pengujian ulang sampel transaksi selama satu kuartal.",
    relatedTermIds: ["defisiensi-signifikan", "defisiensi-material", "compensating-control"],
    relatedServiceUrl: "/temuan-audit-icofr",
    relatedServiceLabel: "Panduan CAP per Tipologi Temuan"
  },
  {
    id: "kak",
    term: "Kerangka Acuan Kerja",
    acronym: "KAK",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "Perpres 16/2018 jo. 12/2021 & Pedoman Pengadaan BUMN",
    definition: "Dokumen perencanaan pengadaan yang memuat latar belakang kebutuhan, maksud dan tujuan pekerjaan, ruang lingkup kegiatan, keluaran (deliverables) yang diharapkan, jangka waktu pelaksanaan, pagu anggaran berbasis HPS, kualifikasi penyedia dan tenaga ahli, serta kriteria evaluasi penawaran. Dalam pengadaan pendampingan ICOFR dan software GRC BUMN, KAK menjadi instrumen utama Panitia Pengadaan dan Pejabat Pembuat Komitmen untuk memastikan penawaran yang masuk sebanding dan dapat dievaluasi secara objektif. KAK yang baik merumuskan ruang lingkup berbasis tahapan SK-5 (scoping, RCM, walkthrough Lini 2, pengujian TOD/TOE Tabel 22, asersi Direksi), mensyaratkan sertifikasi tenaga ahli yang relevan (seperti CA, CIA, CISA, CRMA), menetapkan arsitektur data (on-premise atau private cloud sesuai UU PDP), serta mencantumkan SLA, ketentuan alih pengetahuan, dan denda keterlambatan secara eksplisit.",
    keyTakeaway: "KAK yang longgar menghasilkan penawaran yang tidak sebanding dan sengketa interpretasi saat eksekusi; KAK yang presisi adalah separuh keberhasilan pengadaan.",
    practicalExample: "KAK pengadaan konsultan ICOFR yang mencantumkan jumlah entitas anak dalam scoping, volume sampel TOE acuan Tabel 22, dan format keluaran RCM digital yang wajib diserahkan.",
    relatedTermIds: ["hps", "tor", "rcm"],
    relatedServiceUrl: "/panduan-kak-tor-icofr",
    relatedServiceLabel: "Panduan & Draf KAK ICOFR"
  },
  {
    id: "hps",
    term: "Harga Perkiraan Sendiri",
    acronym: "HPS",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "Perpres 16/2018 jo. 12/2021 Pasal Estimasi Biaya",
    definition: "Perkiraan biaya pekerjaan yang disusun oleh Panitia Pengadaan atau PPK berdasarkan survei harga pasar, kontrak sejenis sebelumnya, dan analisis komponen biaya (tenaga ahli per orang-bulan, lisensi perangkat lunak, perjalanan dinas, serta overhead dan margin wajar). HPS berfungsi sebagai pagu: penawaran yang melampaui HPS dinyatakan gugur, sedangkan HPS yang ditetapkan terlalu rendah berisiko gagal lelang karena tidak ada penyedia yang mampu memenuhi spesifikasi. Untuk jasa konsultan ICOFR, komponen HPS lazimnya meliputi tim inti (team leader, auditor senior/junior), durasi penugasan per tahapan SK-5, biaya lisensi atau langganan platform GRC bila dibundel, serta biaya penjaminan mutu independen. Penyusunan HPS wajib didokumentasikan sebagai bukti akuntabilitas dan dapat diaudit oleh SPI maupun auditor eksternal.",
    keyTakeaway: "HPS bukan sekadar angka pagu, melainkan dokumen pertanggungjawaban metodologi estimasi yang harus bertahan saat diaudit.",
    practicalExample: "HPS jasa pendampingan ICOFR satu tahun buku yang dihitung dari 3 orang-bulan team leader, 8 orang-bulan auditor, dan lisensi GRC untuk 50 pengguna.",
    relatedTermIds: ["kak", "tor", "kap"],
    relatedServiceUrl: "/blog/panduan-hps-pengadaan-icofr-bumn",
    relatedServiceLabel: "Panduan Menyusun HPS ICOFR"
  },
  {
    id: "tor",
    term: "Terms of Reference",
    acronym: "TOR",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "Praktik Pengadaan Jasa Konsultan & Perpres 16/2018",
    definition: "Dokumen acuan penugasan jasa konsultan yang setara fungsi dengan KAK, lazim dipakai untuk pengadaan jasa konsultansi: memuat latar belakang, tujuan, ruang lingkup layanan, metodologi yang diharapkan, profil dan personil kunci beserta CV, jadwal pelaporan (inception, interim, final report), serta kriteria penilaian teknis dan biaya. Dalam konteks BUMN, TOR kerap dipakai bergantian dengan KAK untuk paket pendampingan implementasi ICOFR, maturity assessment COSO, maupun audit ITGC. TOR yang berkualitas menuntut penyedia menjelaskan pendekatan kerja per tahapan (misalnya strategi sampling TOE Tabel 22 dan rencana walkthrough Lini 2), sehingga panitia dapat menilai kompetensi substantif, bukan sekadar kelengkapan administratif. TOR juga menjadi lampiran kontrak yang mengikat sehingga deviasi pelaksanaan dapat diklaim sebagai wanprestasi.",
    keyTakeaway: "TOR adalah kontrak mini sebelum kontrak: semakin rinci metodologi yang dituntut, semakin kecil ruang sengketa saat pelaksanaan.",
    practicalExample: "TOR maturity assessment yang mewajibkan kuesioner berbasis 17 prinsip COSO, wawancara Lini 1 sampai Direksi, dan laporan benchmarking antar anak holding.",
    relatedTermIds: ["kak", "hps", "spi"],
    relatedServiceUrl: "/panduan-kak-tor-icofr",
    relatedServiceLabel: "Klausul TOR Pengadaan GRC"
  },
  {
    id: "spi",
    term: "Satuan Pengawasan Intern",
    acronym: "SPI",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "PER-2/MBU/03/2023 & Model Tiga Lini IIA",
    definition: "Unit kerja independen di BUMN yang menjalankan fungsi audit internal (Lini 3): menyusun rencana audit tahunan berbasis risiko, menguji kecukupan dan efektivitas tata kelola, manajemen risiko, dan pengendalian internal, lalu melaporkan hasilnya langsung kepada Direktur Utama dengan tembusan kepada Dewan Komisaris dan Komite Audit. Dalam siklus ICOFR berbasis SK-5, SPI berperan ganda: sebagai pelaksana atau penguji independen atas efektivitas pengendalian sebelum asersi Direksi, sekaligus sebagai mitra Panitia Pengadaan dalam mereviu kewajaran HPS dan proses tender agar terhindar dari temuan BPK. Kualitas SPI diukur dari independensi organisasinya, kompetensi auditor (diutamakan bersertifikat CIA, CISA, atau CICA), serta tindak lanjut temuan yang terdokumentasi dalam sistem pemantauan. Penguatan kapabilitas SPI kerap menjadi rekomendasi utama Corrective Action Plan atas temuan defisiensi pemantauan.",
    keyTakeaway: "SPI yang kuat adalah benteng terakhir sebelum temuan menjadi opini audit atau sanksi regulator.",
    practicalExample: "SPI holding yang melakukan pengujian TOE independen atas 40 sampel kontrol harian sebelum KAP memulai audit akhir tahun.",
    relatedTermIds: ["three-lines-model", "toe", "kap"],
    relatedServiceUrl: "/layanan/enterprise-grc",
    relatedServiceLabel: "Penguatan Kapabilitas SPI"
  },
  {
    id: "kap",
    term: "Kantor Akuntan Publik",
    acronym: "KAP",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "UU 5/2011 tentang Akuntan Publik & SPAP",
    definition: "Firma jasa profesional berizin yang memberikan jasa asurans (audit atas laporan keuangan), reviu, dan jasa terkait lainnya sesuai Standar Profesional Akuntan Publik. Bagi BUMN, KAP ditunjuk melalui mekanisme pengadaan untuk mengaudit laporan keuangan tahunan, menguji efektivitas pengendalian internal yang diasersikan Direksi, dan menerbitkan opini audit (WTP hingga disclaimer). Independensi KAP dijaga melalui rotasi wajib setelah masa penugasan tertentu, larangan pemberian jasa non-asurans yang menimbulkan benturan kepentingan, serta pengawasan mutu oleh Pusat Pembinaan Profesi Keuangan. Temuan KAP atas defisiensi signifikan dan kelemahan material menjadi dasar utama Corrective Action Plan dan sering dirujuk BPK dalam pemeriksaan lanjutan. Pemilihan KAP mensyaratkan pengalaman audit BUMN sejenis, kecukupan partner dan manajer, serta metodologi audit berbasis risiko yang terdokumentasi.",
    keyTakeaway: "KAP bukan sekadar penilai akhir tahun, melainkan penentu standar bukti yang harus disiapkan Lini 1 dan Lini 2 sepanjang tahun buku.",
    practicalExample: "KAP yang menerbitkan management letter berisi 12 defisiensi signifikan ITGC sehingga BUMN menyusun CAP sebelum audit tahun berikutnya.",
    relatedTermIds: ["wtp", "asersi-manajemen", "spi"],
    relatedServiceUrl: "/studi-kasus",
    relatedServiceLabel: "Studi Kasus Lolos Audit KAP"
  },
  {
    id: "wtp",
    term: "Wajar Tanpa Pengecualian",
    acronym: "WTP",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "SPAP SA 700 & Opini Pemeriksaan BPK",
    definition: "Opini audit tertinggi yang menyatakan bahwa laporan keuangan entitas menyajikan secara wajar dalam semua hal yang material sesuai kerangka pelaporan yang berlaku, tanpa pengecualian. Opini WTP atas laporan keuangan BUMN mensyaratkan tidak adanya salah saji material yang tidak dikoreksi dan tidak adanya kelemahan material pengendalian internal yang belum diremediasi pada tanggal pelaporan. Mempertahankan WTP dari tahun ke tahun menuntut disiplin siklus ICOFR penuh: scoping tepat, RCM mutakhir, pengujian TOD/TOE sesuai Tabel 22, remediasi tuntas, dan asersi Direksi yang didukung kertas kerja memadai. Kehilangan WTP berdampak reputasional serius: menurunkan kepercayaan Kementerian BUMN selaku pemegang saham, mempersulit pendanaan, dan memicu pemeriksaan khusus. Karena itu target WTP menjadi kompas seluruh program penguatan pengendalian internal BUMN.",
    keyTakeaway: "WTP adalah garis finis tahunan; ICOFR yang berjalan sepanjang tahun adalah lintasan larinya.",
    practicalExample: "Holding BUMN yang mempertahankan WTP lima tahun beruntun setelah mengeliminasi 42 defisiensi melalui siklus ICOFR terdisiplin.",
    relatedTermIds: ["kap", "defisiensi-material", "asersi-manajemen"],
    relatedServiceUrl: "/studi-kasus",
    relatedServiceLabel: "Benchmark BUMN Beropini WTP"
  },
  {
    id: "psak-71",
    term: "PSAK 71 Instrumen Keuangan",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "PSAK 71 (adopsi IFRS 9) & POJK Manajemen Risiko",
    definition: "Pernyataan Standar Akuntansi Keuangan tentang instrumen keuangan yang mengatur klasifikasi dan pengukuran aset/liabilitas keuangan, penurunan nilai berbasis expected credit loss (ECL), serta akuntansi lindung nilai. Bagi perbankan BUMN dan BPD, PSAK 71 berdampak langsung pada perhitungan CKPN (cadangan kerugian penurunan nilai) yang menjadi akun paling material dan paling disorot auditor. Implementasi PSAK 71 menuntut pengendalian kunci atas kualitas data portofolio kredit, validasi model ECL dan parameter (probability of default, loss given default), serta rekonsiliasi antara core banking dan general ledger. Kegagalan kontrol di area ini hampir pasti berujung pada salah saji material dan temuan KAP. Karena itu RCM sektor perbankan selalu menempatkan proses CKPN sebagai proses signifikan dengan key control berlapis dan pengujian TOE berfrekuensi tinggi.",
    keyTakeaway: "Di bank BUMN, ICOFR tanpa pengendalian PSAK 71 yang teruji sama dengan asersi tanpa bukti untuk akun terbesarnya.",
    practicalExample: "Key control validasi parameter ECL oleh Lini 2 sebelum batch CKPN bulanan dijalankan di core banking.",
    relatedTermIds: ["key-control", "rcm", "itgc"],
    relatedServiceUrl: "/sektor-bumn/perbankan",
    relatedServiceLabel: "ICOFR Perbankan & CKPN"
  },
  {
    id: "psak-72",
    term: "PSAK 72 Pendapatan dari Kontrak",
    category: "Pengadaan & Kualifikasi",
    regulationRef: "PSAK 72 (adopsi IFRS 15)",
    definition: "Pernyataan Standar Akuntansi Keuangan tentang pengakuan pendapatan dari kontrak dengan pelanggan melalui model lima langkah: identifikasi kontrak, identifikasi kewajiban pelaksanaan, penetapan harga transaksi, alokasi harga, dan pengakuan saat kewajiban dipenuhi. Bagi BUMN karya, konstruksi, dan infrastruktur, PSAK 72 mengatur pengakuan pendapatan berbasis persentase penyelesaian (progress toward completion) yang sangat sensitif terhadap estimasi total biaya penyelesaian (EAC) dan validasi progres fisik lapangan. Manipulasi atau kelalaian estimasi EAC adalah sumber klasik salah saji material dan temuan BPK di sektor ini. Pengendalian kuncinya meliputi verifikasi tiga pihak atas berita acara progres (Project Manager, Finance Lini 2, konsultan pengawas), reviu kuartalan atas EAC, dan cut-off pencatatan yang disiplin. RCM BUMN karya selalu menempatkan siklus pendapatan sebagai proses signifikan prioritas tertinggi.",
    keyTakeaway: "Pendapatan konstruksi diakui dari estimasi, dan estimasi tanpa kontrol adalah undangan bagi salah saji.",
    practicalExample: "Berita acara opname fisik yang ditandatangani pengawas independen sebelum progres 5 persen dicatat sebagai pendapatan proyek tol.",
    relatedTermIds: ["key-control", "rcm", "defisiensi-signifikan"],
    relatedServiceUrl: "/sektor-bumn/infrastruktur-karya",
    relatedServiceLabel: "ICOFR BUMN Karya & PSAK 72"
  }
];
