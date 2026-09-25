export interface GlossaryItem {
  id: string;
  term: string;
  acronym?: string;
  category: "Regulasi & Kerangka Kerja" | "Metodologi Pengujian" | "Klasifikasi Kontrol" | "Evaluasi Defisiensi";
  regulationRef: string;
  definition: string;
  keyTakeaway: string;
  relatedServiceUrl?: string;
  relatedServiceLabel?: string;
}

export const GLOSSARY_CATEGORIES = [
  "Semua",
  "Regulasi & Kerangka Kerja",
  "Metodologi Pengujian",
  "Klasifikasi Kontrol",
  "Evaluasi Defisiensi"
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
    relatedServiceUrl: "/platform/grc-integra",
    relatedServiceLabel: "Pelacakan Temuan di GRC Integra"
  },
  {
    id: "material-weakness",
    term: "Kelemahan Material",
    acronym: "Material Weakness",
    category: "Evaluasi Defisiensi",
    regulationRef: "SK-5/DKU.MBU/11/2024 Bab V Evaluasi Defisiensi",
    definition: "Suatu defisiensi, atau kombinasi defisiensi pengendalian internal, sedemikian rupa sehingga terdapat kemungkinan yang wajar bahwa salah saji material pada laporan keuangan tahunan atau interim entitas tidak akan dapat dicegah atau dideteksi secara tepat waktu.",
    keyTakeaway: "Jika terdapat satu saja kelemahan material yang belum diremediasi pada tanggal pelaporan, Direksi tidak dapat menyatakan bahwa pengendalian internal efektif.",
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
    relatedServiceUrl: "/platform/grc-integra",
    relatedServiceLabel: "Penerbitan Asersi Ber-QR Code"
  }
];
