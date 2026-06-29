import { AssessmentQuestion, ClientProfile } from "./types";

export const servicesList = [
  {
    id: "icofr",
    title: "Implementasi & Sertifikasi ICOFR",
    shortDesc: "Kerangka pengendalian komprehensif atas pelaporan keuangan untuk kepatuhan BUMN dan audit perbankan.",
    longDesc: "Daya Solusi Integra membantu organisasi merancang, menguji, dan meremediasi Internal Control over Financial Reporting (ICOFR) berdasarkan standar COSO. Kami fokus pada penyusunan Risk and Control Matrix (RCM), pemetaan transaksi signifikan, hingga kesiapan menghadapi audit eksternal secara seamless.",
    icon: "ShieldAlert",
    features: [
      "Penyusunan Entity-Level & Transaction-Level Controls",
      "Dokumentasi Process Flowchart & RCM (Risk and Control Matrix)",
      "Pengujian Keandalan Operasional (Operating Effectiveness Testing)",
      "Remediasi Defisiensi Kontrol sebelum Audit Final"
    ]
  },
  {
    id: "grc",
    title: "Enterprise GRC Consulting",
    shortDesc: "Sinergi Tata Kelola, Manajemen Risiko, dan Kepatuhan regulasi secara menyeluruh dan terintegrasi.",
    longDesc: "Layanan GRC kami menyelaraskan strategi bisnis dengan regulasi eksternal (Kementerian BUMN & OJK) menggunakan framework global seperti ISO 31000 dan ISO 37001 (Anti-Bribery). Kami mentransformasikan kepatuhan dari beban administratif menjadi keunggulan kompetitif.",
    icon: "Briefcase",
    features: [
      "Penyusunan Framework Manajemen Risiko (ISO 31000)",
      "Implementasi GCG (Good Corporate Governance) Scorecard",
      "Kepatuhan Anti-Fraud & Whistleblowing System",
      "Sertifikasi Sistem Manajemen Kepatuhan"
    ]
  },
  {
    id: "itgc",
    title: "IT General Controls (ITGC) & IT GRC",
    shortDesc: "Pengendalian umum teknologi informasi untuk menjaga integritas data keuangan dan sistem operasional.",
    longDesc: "Di era digital, ICOFR tidak terpisahkan dari keandalan sistem IT. Kami memastikan ITGC Anda (Access Control, Change Management, System Operations, & Program Development) sesuai dengan standar COBIT dan regulasi keamanan informasi perbankan.",
    icon: "Cpu",
    features: [
      "Audit Hak Akses Sistem Keuangan & Core Banking",
      "Tata Kelola Manajemen Perubahan Sistem (Change Management)",
      "Kesiapan Manajemen Bencana & IT Disaster Recovery Plan",
      "Penyelarasan Kontrol Otomatis (Application Controls)"
    ]
  },
  {
    id: "audit-ready",
    title: "Pre-Audit Readiness & Remediation",
    shortDesc: "Simulasi audit independen dan pendampingan remediasi temuan auditor untuk memastikan opini WTP.",
    longDesc: "Kami bertindak sebagai mitra strategis internal Anda untuk mempersiapkan proses audit oleh BPK, BPKP, OJK, maupun KAP Internasional. Kami mengidentifikasi celah kepatuhan secara proaktif dan memberikan solusi perbaikan cepat sebelum audit resmi dimulai.",
    icon: "ClipboardCheck",
    features: [
      "Simulasi Audit (Mock Audit) GRC & ICOFR",
      "Asistensi Penyelesaian Temuan Audit Sebelumnya",
      "Penyusunan Asersi Manajemen secara Akuntabel",
      "Bimbingan Teknis bagi Tim Internal Audit & SPI"
    ]
  }
];

export const clientSectors: ClientProfile[] = [
  {
    name: "Badan Usaha Milik Negara (BUMN)",
    logo: "Building2",
    sector: "BUMN",
    description: "Sektor BUMN di Indonesia memiliki tanggung jawab besar untuk mengelola aset negara secara transparan. Tuntutan implementasi Good Corporate Governance (GCG) dan pengawasan dari Kementerian BUMN, BPKP, serta BPK mengharuskan sistem kontrol internal yang kokoh.",
    challenges: [
      "Pemenuhan KPI GCG Scorecard dengan bobot penilaian yang tinggi.",
      "Risiko kecurangan (fraud) dan kebocoran transaksi keuangan pada entitas anak perusahaan.",
      "Integrasi laporan keuangan konsolidasi holding yang rumit secara andal.",
      "Kepatuhan terhadap Surat Edaran Kementerian BUMN tentang efektivitas kontrol internal."
    ],
    solutions: [
      "Desain kerangka kerja ICOFR terpadu pada tingkat holding hingga anak perusahaan.",
      "Penyusunan Fraud Risk Assessment (FRA) dan otomatisasi Whistleblowing System.",
      "Standardisasi RCM (Risk and Control Matrix) untuk transaksi material lintas sektor.",
      "Pelatihan kapasitas internal audit / SPI BUMN secara intensif."
    ]
  },
  {
    name: "Sektor Perbankan & Lembaga Keuangan",
    logo: "Landmark",
    sector: "Banking",
    description: "Sektor perbankan merupakan industri dengan regulasi super ketat (highly regulated industry). Kepatuhan terhadap Otoritas Jasa Keuangan (OJK), Bank Indonesia, serta standar internasional (Basel III) menuntut keandalan operasional dan mitigasi risiko teknologi tanpa celah.",
    challenges: [
      "Regulasi OJK terkait manajemen risiko TI dan perlindungan data nasabah yang dinamis.",
      "Kewajiban pelaporan berkala (bulanan, triwulanan) dengan tingkat akurasi 100%.",
      "Tingginya ketergantungan pada sistem teknologi core banking yang kompleks.",
      "Tantangan Segregation of Duties (SoD) pada akses database keuangan."
    ],
    solutions: [
      "Audit independen ITGC (IT General Controls) berbasis COBIT dan SEOJK.",
      "Otomatisasi pengawasan akses pengguna (Identity & Access Management - IAM audit).",
      "Penyelarasan kontrol manual ke kontrol aplikasi otomatis (Application Controls).",
      "Pendampingan audit ICOFR khusus kesiapan asersi direksi perbankan."
    ]
  }
];

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "q1",
    category: "Control Environment",
    categoryIndo: "Lingkungan Pengendalian",
    text: "Bagaimana tingkat sosialisasi dan komitmen terhadap kode etik serta integritas di seluruh tingkatan organisasi Anda?",
    options: [
      { score: 1, text: "Tidak ada kode etik formal, atau ada namun jarang disosialisasikan secara aktif." },
      { score: 2, text: "Ada kode etik tertulis, tetapi sosialisasi dilakukan secara berkala tanpa evaluasi pemahaman." },
      { score: 3, text: "Kode etik disosialisasikan rutin, ditandatangani tahunan oleh karyawan, dan pelanggaran ditindaklanjuti secara tertib." },
      { score: 4, text: "Komitmen integritas terintegrasi penuh dalam budaya kerja, dipantau aktif oleh Direksi & Komite Audit dengan kepatuhan 100%." }
    ]
  },
  {
    id: "q2",
    category: "Control Environment",
    categoryIndo: "Lingkungan Pengendalian",
    text: "Bagaimana kejelasan struktur organisasi, wewenang, dan tanggung jawab terkait pengelolaan kontrol keuangan internal (ICOFR)?",
    options: [
      { score: 1, text: "Tidak ada unit khusus atau pembagian tanggung jawab formal atas evaluasi kontrol internal keuangan." },
      { score: 2, text: "Tanggung jawab melekat pada fungsi akuntansi umum tanpa adanya tim pemantau kepatuhan khusus." },
      { score: 3, text: "Terdapat fungsi internal audit / SPI atau tim GRC yang bertugas mengevaluasi kontrol secara formal." },
      { score: 4, text: "Struktur komite audit, fungsi internal control, dan SPI bekerja secara independen, solid, dan langsung melapor ke Direktur Utama." }
    ]
  },
  {
    id: "q3",
    category: "Risk Assessment",
    categoryIndo: "Penilaian Risiko",
    text: "Apakah organisasi Anda telah melakukan Fraud Risk Assessment (Penilaian Risiko Fraud) yang berfokus pada pelaporan keuangan?",
    options: [
      { score: 1, text: "Belum pernah dilakukan penilaian risiko fraud secara terstruktur." },
      { score: 2, text: "Penilaian risiko dilakukan informal, hanya didasarkan pada kejadian/temuan audit masa lalu." },
      { score: 3, text: "Fraud Risk Assessment dilakukan secara berkala (tahunan) untuk area-area transaksi material/signifikan." },
      { score: 4, text: "Fraud Risk Assessment komprehensif diperbarui setiap tahun, melibatkan seluruh kepala divisi, dan disetujui Komite Audit." }
    ]
  },
  {
    id: "q4",
    category: "Risk Assessment",
    categoryIndo: "Penilaian Risiko",
    text: "Bagaimana efektivitas identifikasi dan mitigasi risiko teknologi informasi (seperti keamanan data, integrasi ERP, core banking)?",
    options: [
      { score: 1, text: "Risiko TI jarang dikaji secara mendalam dalam konteks pengaruhnya terhadap laporan keuangan." },
      { score: 2, text: "Risiko TI diidentifikasi sebatas isu infrastruktur (hardware/jaringan) tanpa pemetaan risiko ke aplikasi keuangan." },
      { score: 3, text: "Memiliki IT Risk Register formal yang mencakup aspek keamanan data keuangan dan hak akses aplikasi transaksi." },
      { score: 4, text: "Risiko TI dimitigasi ketat melalui sertifikasi (misal ISO 27001), diaudit rutin dengan laporan berkala ke manajemen risiko." }
    ]
  },
  {
    id: "q5",
    category: "Control Activities",
    categoryIndo: "Aktivitas Pengendalian",
    text: "Bagaimana penerapan pemisahan fungsi (Segregation of Duties - SoD) pada proses transaksi keuangan kritikal Anda?",
    options: [
      { score: 1, text: "Sering terjadi perangkapan fungsi (misal: satu orang memegang otorisasi, pencatatan, sekaligus kas)." },
      { score: 2, text: "Kebijakan SoD ada, tetapi dalam praktiknya sering di-bypass karena keterbatasan staf atau sistem TI." },
      { score: 3, text: "SoD diterapkan secara ketat pada transaksi manual utama, dan akses sistem TI telah membatasi perangkapan fungsi dasar." },
      { score: 4, text: "SoD terotomasi penuh dalam ERP/Core Banking, dikonfigurasi secara sistematis dengan deteksi pertentangan peran (SoD Conflicts)." }
    ]
  },
  {
    id: "q6",
    category: "Control Activities",
    categoryIndo: "Aktivitas Pengendalian",
    text: "Apakah rancangan dan pengoperasian IT General Controls (ITGC) seperti kontrol manajemen perubahan (change management) berjalan tertib?",
    options: [
      { score: 1, text: "Perubahan sistem keuangan atau database dilakukan langsung oleh programmer tanpa otorisasi formal." },
      { score: 2, text: "Persetujuan perubahan sistem dilakukan via email informal tanpa adanya dokumentasi pengujian formal sebelum deploy." },
      { score: 3, text: "Proses manajemen perubahan sistem mengikuti alur pengujian formal, persetujuan tertulis, dan pemisahan hak akses development vs production." },
      { score: 4, text: "Seluruh siklus rilis sistem didokumentasikan otomatis, melalui QA ketat, disetujui komite IT, dan terbebas dari akses pengembang ke server produksi." }
    ]
  },
  {
    id: "q7",
    category: "Information & Communication",
    categoryIndo: "Informasi & Komunikasi",
    text: "Bagaimana ketersediaan informasi keuangan yang andal dan kelengkapan audit trail pada sistem informasi akuntansi Anda?",
    options: [
      { score: 1, text: "Data keuangan sering direkonsiliasi manual menggunakan spreadsheet yang tidak terkunci; tidak ada log perubahan." },
      { score: 2, text: "Sistem memiliki log dasar, tetapi tidak mencakup pencatatan perubahan data (audit trail) pada tabel keuangan utama." },
      { score: 3, text: "Sistem mencatat audit trail (siapa, kapan, apa yang diubah), andal untuk penelusuran transaksi akuntansi signifikan." },
      { score: 4, text: "Sistem akuntansi terintegrasi penuh, memiliki audit trail mutakhir yang tidak dapat diubah (immutable log), dan laporan keuangan disajikan realtime." }
    ]
  },
  {
    id: "q8",
    category: "Information & Communication",
    categoryIndo: "Informasi & Komunikasi",
    text: "Bagaimana tingkat efektivitas dan kerahasiaan whistleblowing system (saluran pengaduan pelanggaran) di organisasi Anda?",
    options: [
      { score: 1, text: "Tidak memiliki saluran whistleblowing resmi; laporan biasanya disampaikan melalui keluhan informal." },
      { score: 2, text: "Terdapat saluran whistleblowing (misal kotak saran/email), namun kerahasiaan pelapor tidak terjamin dengan baik." },
      { score: 3, text: "Saluran whistleblowing dikelola tim kepatuhan internal secara rahasia, dengan alur penanganan laporan yang jelas." },
      { score: 4, text: "Whistleblowing system dikelola oleh pihak ketiga independen, dijamin kerahasiaannya secara mutlak, dan diawasi langsung oleh Komite Audit." }
    ]
  },
  {
    id: "q9",
    category: "Monitoring",
    categoryIndo: "Aktivitas Pemantauan",
    text: "Seberapa sering dan terstrukturnya evaluasi berkala atas rancangan dan operasional seluruh kontrol ICOFR dilakukan?",
    options: [
      { score: 1, text: "Evaluasi kepatuhan kontrol tidak dilakukan secara terjadwal, melainkan hanya saat terjadi masalah besar." },
      { score: 2, text: "Evaluasi kepatuhan dilakukan sekali setahun menjelang audit eksternal tanpa adanya metodologi sampling yang konsisten." },
      { score: 3, text: "Fungsi internal audit / SPI mengevaluasi rancangan dan pengoperasian kontrol secara terjadwal dengan metodologi sampling yang baik." },
      { score: 4, text: "Evaluasi kontinu (Continuous Control Monitoring) berjalan terprogram, didukung oleh self-assessment manajer area secara kuartalan." }
    ]
  },
  {
    id: "q10",
    category: "Monitoring",
    categoryIndo: "Aktivitas Pemantauan",
    text: "Bagaimana mekanisme pelaporan dan tindak lanjut (remediasi) atas kelemahan kontrol (control deficiencies) yang teridentifikasi?",
    options: [
      { score: 1, text: "Kelemahan kontrol sering diabaikan atau ditindaklanjuti secara lambat tanpa tenggat waktu penyelesaian yang tegas." },
      { score: 2, text: "Temuan dilaporkan kepada manajemen puncak, tetapi penyelesaian celah kontrol bergantung pada inisiatif masing-masing divisi." },
      { score: 3, text: "Temuan dicatat secara formal, dibuatkan rencana aksi perbaikan, dipantau realisasinya, dan dilaporkan berkala ke Komite Audit." },
      { score: 4, text: "Rencana remediasi diawasi sistematis dengan sistem tracking otomatis, memiliki konsekuensi keterlambatan, dan divalidasi langsung oleh direksi." }
    ]
  }
];
