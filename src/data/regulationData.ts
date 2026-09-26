export interface RegulationKeyArticle {
  article: string;
  title: string;
  summary: string;
  complianceImpact: string;
}

export interface RegulationThreeLinesRole {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
}

export interface RegulationFaq {
  question: string;
  answer: string;
}

export interface RegulationItem {
  id: string;
  identifier: string;
  officialTitle: string;
  shortTitle: string;
  issuingAuthority: string;
  effectiveDate: string;
  category: "Keputusan Sekretaris Kementerian" | "Peraturan Menteri" | "Peraturan OJK" | "Standar Pemeriksaan";
  targetAudience: string;
  summary: string;
  primaryMandate: string;
  threeLinesRole: RegulationThreeLinesRole;
  keyArticles: RegulationKeyArticle[];
  faqs: RegulationFaq[];
  relatedSolutions: {
    label: string;
    url: string;
  }[];
}

export const REGULATION_CATEGORIES = [
  "Semua",
  "Keputusan Sekretaris Kementerian",
  "Peraturan Menteri",
  "Peraturan OJK",
  "Standar Pemeriksaan"
] as const;

export const REGULATION_ITEMS: RegulationItem[] = [
  {
    id: "sk-5-dku-mbu-11-2024",
    identifier: "SK-5/DKU.MBU/11/2024",
    officialTitle: "Surat Keputusan Sekretaris Kementerian BUMN Nomor SK-5/DKU.MBU/11/2024 tentang Petunjuk Teknis Penerapan dan Evaluasi Pengendalian Internal atas Pelaporan Keuangan (ICOFR) pada BUMN",
    shortTitle: "Petunjuk Teknis ICOFR BUMN (SK-5)",
    issuingAuthority: "Kementerian Badan Usaha Milik Negara Republik Indonesia",
    effectiveDate: "2024-11-20",
    category: "Keputusan Sekretaris Kementerian",
    targetAudience: "Direksi BUMN, Holding BUMN, Komite Audit, Satuan Pengawas Intern (SPI), dan Unit Pengelola Risiko",
    summary: "Regulasi rujukan utama yang mewajibkan seluruh BUMN dan anak perusahaannya menyusun kerangka pengendalian intern atas pelaporan keuangan (ICOFR) berbasis COSO 2013, melakukan pengujian efektivitas pengendalian, serta menandatangani asersi tahunan manajemen atas keandalan laporan keuangan.",
    primaryMandate: "Wajib asersi manajemen formal yang ditandatangani oleh Direktur Utama dan Direktur Keuangan dalam Laporan Tahunan BUMN, serta kewajiban pengujian Test of Design (TOD) dan Test of Operating Effectiveness (TOE).",
    threeLinesRole: {
      firstLine: "Lini 1 (Pemilik Proses Bisnis): Bertanggung jawab menyusun Risk and Control Matrix (RCM), melaksanakan aktivitas kontrol harian/periodik, dan mendokumentasikan bukti operasional.",
      secondLine: "Lini 2 (Manajemen Risiko & Kepatuhan): Bertanggung jawab merancang metodologi pengujian, memantau gap kepatuhan, serta mengoordinasikan evaluasi defisiensi dan rencana perbaikan.",
      thirdLine: "Lini 3 (Satuan Pengawas Intern / SPI): Melakukan evaluasi independen, pengujian sampel audit secara objektif, dan menyampaikan laporan efektivitas kepada Komite Audit dan Direksi."
    },
    keyArticles: [
      {
        article: "Bab II Klausul 4",
        title: "Penerapan 5 Komponen dan 17 Prinsip COSO",
        summary: "Penetapan kerangka kerja COSO Internal Control 2013 sebagai standar tunggal evaluasi pengendalian internal di lingkungan BUMN.",
        complianceImpact: "BUMN wajib mendokumentasikan alignment seluruh 17 prinsip pengendalian intern ke dalam proses bisnis utama perusahaan."
      },
      {
        article: "Bab IV Bagian A",
        title: "Pengujian Desain Kontrol (Test of Design - TOD)",
        summary: "Evaluasi logis rancangan kontrol untuk memastikan kontrol mampu mencegah atau mendeteksi salah saji material sebelum pengujian efektivitas dilakukan.",
        complianceImpact: "Kontrol yang mengalami defisiensi desain tidak diperkenankan diuji pada tahap Test of Operating Effectiveness (TOE)."
      },
      {
        article: "Tabel 22 Lampiran",
        title: "Ketentuan Jumlah Sampel Pengujian Kontrol Manual",
        summary: "Tabel normatif batas minimum pengujian sampel kontrol manual tanpa toleransi deviasi (zero tolerable deviation).",
        complianceImpact: "Auditor dan penguji Lini 2/Lini 3 wajib mengambil sampel sesuai frekuensi (misal: kontrol bulanan wajib diuji 2 sampai 5 sampel)."
      },
      {
        article: "Bab VI Bagian B",
        title: "Format Asersi Tahunan Direksi",
        summary: "Format baku pernyataan tanggung jawab Direksi atas keandalan dan efektivitas pengendalian internal pelaporan keuangan.",
        complianceImpact: "Ditandatangani secara hukum oleh Direktur Utama dan Direktur Keuangan untuk disertakan dalam Laporan Tahunan BUMN."
      }
    ],
    faqs: [
      {
        question: "Apakah SK-5/DKU.MBU/11/2024 wajib diterapkan untuk anak perusahaan BUMN?",
        answer: "Ya, ketentuan petunjuk teknis ini berlaku untuk seluruh BUMN induk serta entitas anak yang material terhadap konsolidasi laporan keuangan BUMN."
      },
      {
        question: "Kapan asersi tahunan manajemen ICOFR wajib dipublikasikan?",
        answer: "Asersi tahunan wajib ditandatangani bersamaan dengan penerbitan Laporan Tahunan auditan (Audited Financial Statements) tahun buku berjalan."
      }
    ],
    relatedSolutions: [
      {
        label: "Konsultasi Implementasi ICOFR BUMN",
        url: "/layanan/icofr-bumn"
      },
      {
        label: "Platform GRC Integra Kepatuhan SK-5",
        url: "/platform/grc-integra"
      }
    ]
  },
  {
    id: "per-2-mbu-03-2023",
    identifier: "PER-2/MBU/03/2023",
    officialTitle: "Peraturan Menteri Badan Usaha Milik Negara Nomor PER-2/MBU/03/2023 tentang Pedoman Tata Kelola dan Kegiatan Korporasi Signifikan Badan Usaha Milik Negara",
    shortTitle: "Pedoman Tata Kelola BUMN (PER-2)",
    issuingAuthority: "Kementerian Badan Usaha Milik Negara Republik Indonesia",
    effectiveDate: "2023-03-24",
    category: "Peraturan Menteri",
    targetAudience: "Dewan Komisaris, Direksi, Organ Pendukung Dewan Komisaris, dan Pemegang Saham BUMN",
    summary: "Peraturan menteri payung tata kelola BUMN yang menyatukan regulasi Good Corporate Governance (GCG), manajemen risiko terintegrasi, fungsi pengawasan Dewan Komisaris, serta penguatan peran Satuan Pengawas Intern.",
    primaryMandate: "Kewajiban implementasi tata kelola berbasis Three Lines Model, optimalisasi fungsi komite audit, dan integrasi manajemen risiko ke dalam setiap keputusan strategis korporasi.",
    threeLinesRole: {
      firstLine: "Lini 1: Mengelola risiko operasional harian dan memastikan kepatuhan prosedur internal di seluruh unit bisnis.",
      secondLine: "Lini 2: Menetapkan arsitektur Enterprise Risk Management (ERM) dan mengawasi batas toleransi risiko korporasi.",
      thirdLine: "Lini 3: Memberikan assurance independen kepada Komite Audit dan Dewan Komisaris atas efektivitas tata kelola dan manajemen risiko."
    },
    keyArticles: [
      {
        article: "Pasal 18 ayat (2)",
        title: "Penguatan Peran Satuan Pengawas Intern (SPI)",
        summary: "Mandat penempatan SPI yang independen dan memiliki jalur pelaporan langsung kepada Direktur Utama dan Komite Audit.",
        complianceImpact: "SPI wajib menyusun piagam audit internal dan rencana audit tahunan berbasis risiko yang disetujui Komite Audit."
      },
      {
        article: "Pasal 27",
        title: "Sistem Pengendalian Intern Korporasi",
        summary: "Kewajiban Direksi memelihara sistem pengendalian intern yang andal pada setiap lini proses bisnis perusahaan.",
        complianceImpact: "Evaluasi berkala terhadap kepatuhan kebijakan korporasi dan mitigasi risiko kecurangan (fraud risk assessment)."
      }
    ],
    faqs: [
      {
        question: "Apa hubungan antara PER-2/MBU/03/2023 dengan SK-5/DKU.MBU/11/2024?",
        answer: "PER-2/MBU/03/2023 adalah peraturan payung tingkat kementerian tentang tata kelola dan pengendalian intern secara umum, sedangkan SK-5/DKU.MBU/11/2024 adalah petunjuk teknis pelaksanaan khusus untuk pengendalian internal atas pelaporan keuangan (ICOFR)."
      }
    ],
    relatedSolutions: [
      {
        label: "Layanan Konsultasi Enterprise GRC",
        url: "/layanan/enterprise-grc"
      },
      {
        label: "Asesmen Maturitas Tata Kelola",
        url: "/asesmen-maturitas"
      }
    ]
  },
  {
    id: "pojk-17-2023",
    identifier: "POJK No. 17/2023",
    officialTitle: "Peraturan Otoritas Jasa Keuangan Republik Indonesia Nomor 17 Tahun 2023 tentang Penerapan Tata Kelola bagi Bank Umum",
    shortTitle: "Tata Kelola Bank Umum (POJK 17/2023)",
    issuingAuthority: "Otoritas Jasa Keuangan (OJK)",
    effectiveDate: "2023-09-15",
    category: "Peraturan OJK",
    targetAudience: "Direksi dan Dewan Komisaris Bank Himbara, Bank Umum Swasta, dan Bank Pembangunan Daerah (BPD)",
    summary: "Standar tata kelola sektor perbankan Indonesia yang mengatur komposisi dewan, penanganan benturan kepentingan, manajemen risiko teknologi informasi, serta penguatan pengendalian internal di lembaga perbankan.",
    primaryMandate: "Bank umum termasuk bank BUMN (Himbara) wajib melakukan self-assessment tata kelola secara semesteran dan memelihara pengendalian internal yang komprehensif atas seluruh proses perbankan.",
    threeLinesRole: {
      firstLine: "Lini 1 (Business Unit / Branch): Melakukan verifikasi KYC, otorisasi kredit, dan penerapan dual control atas transaksi harian.",
      secondLine: "Lini 2 (Risk Management & Compliance Directorate): Mengawasi profil risiko perbankan, kepatuhan regulasi OJK/BI, dan kecukupan modal.",
      thirdLine: "Lini 3 (Internal Audit Division): Menguji keandalan sistem perbankan inti (core banking) dan kepatuhan kebijakan perkreditan."
    },
    keyArticles: [
      {
        article: "Pasal 34",
        title: "Manajemen Risiko Teknologi Informasi dan ITGC",
        summary: "Kewajiban bank menerapkan pengamanan sistem informasi dan pengendalian umum teknologi informasi yang kokoh.",
        complianceImpact: "Bank wajib melakukan audit berkala terhadap sistem keamanan siber, manajemen hak akses, dan manajemen perubahan sistem."
      },
      {
        article: "Pasal 52",
        title: "Penilaian Mandiri (Self-Assessment) Tata Kelola",
        summary: "Kewajiban bank melakukan dan melaporkan penilaian mandiri pelaksanaan tata kelola kepada OJK.",
        complianceImpact: "Laporan self-assessment wajib disampaikan paling lambat 1 bulan setelah berakhirnya semester bersangkutan."
      }
    ],
    faqs: [
      {
        question: "Apakah Bank BUMN wajib patuh ke POJK 17/2023 sekaligus SK-5 BUMN?",
        answer: "Ya, Bank BUMN (Himbara) memiliki kepatuhan ganda: POJK 17/2023 sebagai entitas perbankan di bawah OJK, dan SK-5/DKU.MBU/11/2024 sebagai BUMN di bawah Kementerian BUMN."
      }
    ],
    relatedSolutions: [
      {
        label: "Kesiapan Audit ITGC & Keamanan Data",
        url: "/layanan/itgc-audit-readiness"
      },
      {
        label: "Konsultasi ICOFR Perbankan BUMN",
        url: "/layanan/icofr-bumn"
      }
    ]
  },
  {
    id: "spkn-bpk-ri",
    identifier: "SPKN BPK RI (Peraturan BPK No. 1/2017)",
    officialTitle: "Peraturan Badan Pemeriksa Keuangan Republik Indonesia Nomor 1 Tahun 2017 tentang Standar Pemeriksaan Keuangan Negara (SPKN)",
    shortTitle: "Standar Pemeriksaan Keuangan Negara (SPKN)",
    issuingAuthority: "Badan Pemeriksa Keuangan Republik Indonesia (BPK RI)",
    effectiveDate: "2017-01-06",
    category: "Standar Pemeriksaan",
    targetAudience: "Pemeriksa BPK, Auditor BPKP, Kantor Akuntan Publik (KAP) penilai BUMN, dan Satuan Pengawas Intern",
    summary: "Standar acuan normatif yang digunakan oleh BPK RI dan auditor eksternal pemerintah dalam melakukan pemeriksaan keuangan, pemeriksaan kinerja, dan pemeriksaan dengan tujuan tertentu atas entitas pengelola keuangan negara, termasuk BUMN.",
    primaryMandate: "Auditor eksternal BPK wajib menguji dan melaporkan efektivitas sistem pengendalian intern entitas serta kepatuhan terhadap peraturan perundang-undangan dalam setiap audit keuangan negara.",
    threeLinesRole: {
      firstLine: "Lini 1: Menyiapkan dokumentasi transaksi yang valid dan dapat ditelusuri (audit trail) untuk kepentingan pemeriksaan.",
      secondLine: "Lini 2: Menjamin kepatuhan proses administrasi dan perpajakan terhadap regulasi keuangan negara yang berlaku.",
      thirdLine: "Lini 3: Mengoordinasikan penyerahan kertas kerja pemeriksaan dan menindaklanjuti rekomendasi hasil pemeriksaan BPK (TLHP)."
    },
    keyArticles: [
      {
        article: "Kerangka Konseptual Bagian 4",
        title: "Pengujian Pengendalian Internal Pemerintah & BUMN",
        summary: "Pemeriksa harus memperoleh pemahaman yang cukup mengenai pengendalian internal entitas yang diperiksa untuk merencanakan audit.",
        complianceImpact: "Kelemahan material pengendalian intern di BUMN akan dicantumkan secara terbuka dalam Laporan Hasil Pemeriksaan (LHP) BPK."
      },
      {
        article: "Standar Pelaksanaan 05",
        title: "Pemantauan Tindak Lanjut Rekomendasi (TLHP)",
        summary: "Kewajiban entitas BUMN menindaklanjuti rekomendasi temuan pemeriksaan paling lambat 60 hari setelah LHP diterima.",
        complianceImpact: "Direksi dan Komite Audit BUMN wajib memantau matriks penyelesaian rekomendasi BPK secara berkala."
      }
    ],
    faqs: [
      {
        question: "Bagaimana kaitan asersi ICOFR dengan pemeriksaan BPK?",
        answer: "Asersi ICOFR yang ditandatangani Direksi menjadi salah satu bukti kunci bagi auditor BPK dalam mengevaluasi apakah sistem pengendalian intern BUMN telah beroperasi efektif dalam mencegah kerugian negara."
      }
    ],
    relatedSolutions: [
      {
        label: "Konsultasi Mitigasi Temuan Audit ICOFR",
        url: "/layanan/icofr-bumn"
      },
      {
        label: "Workflow Tracking TLHP di GRC Integra",
        url: "/platform/bpm-workflow-editor"
      }
    ]
  }
];

export interface RegulatoryComparisonRow {
  id: string;
  shortCode: string;
  regulationTitle: string;
  issuingBody: string;
  scopeEntities: string;
  categoryTag: "Holding BUMN" | "Sektor Finansial & Bank" | "Standar Audit Eksternal" | "Tata Kelola Umum";
  framework: string;
  directorAssertionMandate: string;
  testingFrequency: string;
  samplingStandard: string;
  auditConsequence: string;
  recommendedSolutionUrl: string;
  recommendedSolutionLabel: string;
}

export const REGULATORY_COMPARISON_MATRIX: RegulatoryComparisonRow[] = [
  {
    id: "sk-5-2024-matrix",
    shortCode: "SK-5 BUMN",
    regulationTitle: "SK-5/DKU.MBU/11/2024",
    issuingBody: "Kementerian BUMN RI",
    scopeEntities: "Seluruh BUMN (Persero & Perum), Holding BUMN, dan Anak Perusahaan BUMN",
    categoryTag: "Holding BUMN",
    framework: "COSO 2013 (5 Komponen & 17 Prinsip) + ITGC 4 Domain",
    directorAssertionMandate: "Wajib: Ditandatangani Direktur Utama & Direktur Keuangan secara tahunan pada Laporan Tahunan",
    testingFrequency: "Pengujian Desain (ToD) & Pengujian Efektivitas Operasional (ToE) Triwulanan dan Tahunan",
    samplingStandard: "Normatif Tabel 22 Ukuran Sampel (Rentang 1 s.d. 60 sampel berdasar frekuensi kontrol)",
    auditConsequence: "Defisiensi Material wajib dilaporkan ke Menteri BUMN; mempengaruhi keyakinan opini WTP auditor eksternal",
    recommendedSolutionUrl: "/platform/grc-integra",
    recommendedSolutionLabel: "Platform GRC Integra"
  },
  {
    id: "per-2-2023-matrix",
    shortCode: "PER-2 BUMN",
    regulationTitle: "PER-2/MBU/03/2023",
    issuingBody: "Kementerian BUMN RI",
    scopeEntities: "Induk Holding BUMN dan Badan Usaha Milik Negara secara menyeluruh",
    categoryTag: "Holding BUMN",
    framework: "Three Lines Model IIA + ISO 31000 Risk Management Framework",
    directorAssertionMandate: "Wajib: Evaluasi kematangan SPI dan pernyataan kepatuhan tata kelola di Annual Report",
    testingFrequency: "Evaluasi maturitas SPI tahunan dan pemantauan profil risiko secara triwulanan",
    samplingStandard: "Berdasarkan penilaian maturitas audit internal (skala 1 s.d. 5)",
    auditConsequence: "Penilaian Key Performance Indicators (KPI) Direksi dan evaluasi Dewan Komisaris",
    recommendedSolutionUrl: "/layanan/enterprise-grc",
    recommendedSolutionLabel: "Konsultasi Enterprise GRC"
  },
  {
    id: "pojk-17-2023-matrix",
    shortCode: "POJK 17/2023",
    regulationTitle: "POJK No. 17/2023 & POJK 11/2022",
    issuingBody: "Otoritas Jasa Keuangan (OJK)",
    scopeEntities: "Bank Himbara (BUMN), Bank Umum Swasta, dan Bank Pembangunan Daerah (BPD)",
    categoryTag: "Sektor Finansial & Bank",
    framework: "Basel Accord + Cobit IT Governance + Standar Kepatuhan OJK",
    directorAssertionMandate: "Wajib: Self-assessment tata kelola semesteran & laporan kepatuhan komite audit ke OJK",
    testingFrequency: "Audit operasional harian (dual control), pengujian ITGC berkala, dan review tahunan",
    samplingStandard: "Metodologi audit internal perbankan berbasis risiko (Risk-Based Internal Audit)",
    auditConsequence: "Sanksi administratif OJK, pembatasan ekspansi produk/kantor cabang, dan penurunan tingkat kesehatan bank",
    recommendedSolutionUrl: "/sektor-bumn/perbankan",
    recommendedSolutionLabel: "Solusi GRC Sektor Perbankan"
  },
  {
    id: "spkn-bpk-matrix",
    shortCode: "SPKN BPK",
    regulationTitle: "Peraturan BPK No. 1/2017 (SPKN)",
    issuingBody: "Badan Pemeriksa Keuangan (BPK RI)",
    scopeEntities: "Kementerian, Lembaga Negara, BUMN, BUMD, dan Badan Pengelola Keuangan Negara",
    categoryTag: "Standar Audit Eksternal",
    framework: "Standar Pemeriksaan Keuangan Negara (SPKN) + INTOSAI Framework",
    directorAssertionMandate: "Entitas wajib menyajikan Laporan Keuangan audited beserta sistem SPI yang dapat diuji",
    testingFrequency: "Pemeriksaan Keuangan Tahunan (LKPP/LKBUMN) dan Pemeriksaan Dengan Tujuan Tertentu (PDTT)",
    samplingStandard: "Sampling audit statistik BPK RI dan pengujian substansif transaksi",
    auditConsequence: "Temuan dimuat di Laporan Hasil Pemeriksaan (LHP) BPK; kewajiban tindak lanjut maksimal 60 hari",
    recommendedSolutionUrl: "/layanan/itgc-audit-readiness",
    recommendedSolutionLabel: "Audit Readiness & SPKN"
  }
];

