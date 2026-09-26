export interface RegulatoryAlignmentItem {
  sk5Requirement: string;
  sectorRegulation: string;
  challenge: string;
  solutionByDsi: string;
}

export interface TypicalRcmBlueprint {
  processName: string;
  financialRisk: string;
  keyControl: string;
  frequency: string;
  testingMethod: string;
}

export interface SectorFaq {
  question: string;
  answer: string;
}

export interface SectorData {
  slug: string;
  shortTitle: string;
  navTitle: string;
  heroBadge: string;
  heroHeading: string;
  heroHighlight: string;
  heroDescription: string;
  executiveSummary: string;
  targetEntities: string[];
  primaryRegulation: string;
  sectorRegulationName: string;
  keyChallenges: Array<{
    title: string;
    description: string;
  }>;
  regulatoryAlignment: RegulatoryAlignmentItem[];
  rcmBlueprints: TypicalRcmBlueprint[];
  strategicBenefits: Array<{
    title: string;
    desc: string;
  }>;
  faqs: SectorFaq[];
}

export const SECTOR_DATA_MAP: Record<string, SectorData> = {
  "perbankan": {
    slug: "perbankan",
    shortTitle: "Perbankan & Jasa Keuangan",
    navTitle: "BUMN Perbankan & Jasa Keuangan",
    heroBadge: "Harmonisasi SK-5 BUMN, POJK & Basel Framework",
    heroHeading: "Pengendalian Internal ICOFR Sektor",
    heroHighlight: "Perbankan & Jasa Keuangan",
    heroDescription: "Solusi tata kelola pengendalian internal atas pelaporan keuangan (ICOFR) dan audit ITGC terintegrasi untuk Bank BUMN (Himbara), Bank Pembangunan Daerah, dan institusi pembiayaan negara.",
    executiveSummary: "Institusi perbankan BUMN menghadapi regulasi ganda: kepatuhan Surat Edaran Kementerian BUMN SK-5/DKU.MBU/11/2024 serta kerangka ketat Otoritas Jasa Keuangan (POJK Tata Kelola & Manajemen Risiko). Keselarasan antara Lini 1 (Operasional Cabang & Kredit), Lini 2 (Kepatuhan & Manajemen Risiko), serta Lini 3 (SKAI/Audit Internal) menjadi pilar utama guna mencegah fraud pembukuan, salah saji pencadangan kerugian (CKPN PSAK 71), dan celah keamanan ITGC Core Banking.",
    targetEntities: [
      "Bank BUMN Anggota Himbara",
      "Bank Syariah Milik BUMN / BSI",
      "BUMN Pembiayaan & Asuransi Keuangan (Danareksa, Jamkrindo, Askrindo)",
      "Bank Pembangunan Daerah (BPD) Binaan"
    ],
    primaryRegulation: "SK-5/DKU.MBU/11/2024",
    sectorRegulationName: "POJK No. 17/2023 & SEOJK Tata Kelola TI",
    keyChallenges: [
      {
        title: "Kalkulasi Estimasi Kerugian Penurunan Nilai (CKPN PSAK 71)",
        description: "Penetapan model risiko kredit masa depan (forward-looking probability of default) sangat kompleks dan rentan manipulasi estimasi akuntansi tanpa kontrol automated application control yang kuat."
      },
      {
        title: "Audit ITGC Core Banking & Hak Akses Segregation of Duties (SoD)",
        description: "Audit terhadap hak otorisasi superuser transaksi, batch processing akhir hari, serta rekonsiliasi data antara core banking dan sub-ledger keuangan utama."
      },
      {
        title: "Pencegahan Fraud Kredit & Transaksi Kas Operasional Cabang",
        description: "Pengawasan kontrol preventif terhadap limit persetujuan kredit bertingkat, verifikasi agunan, dan rekonsiliasi kas ATM/teller di ribuan unit kerja kantor cabang."
      }
    ],
    regulatoryAlignment: [
      {
        sk5Requirement: "Pasal 4: Kewajiban penetapan akun signifikan dan scoping laporan keuangan konsolidasian",
        sectorRegulation: "POJK 17/2023: Kewajiban transparansi publikasi laporan keuangan dan asersi Direksi Kepatuhan",
        challenge: "Scoping aset produktif kredit yang tersebar di ratusan cabang dengan portofolio triliunan rupiah",
        solutionByDsi: "GRC Integra menyediakan scoping kuantitatif otomatis dan integrasi RCM akun kredit material secara tersentralisasi"
      },
      {
        sk5Requirement: "Pasal 7: Pengujian efektivitas pengendalian (TOE) sesuai Tabel 22 frekuensi sampling",
        sectorRegulation: "SEOJK IT: Evaluasi berkala keamanan sistem elektronik perbankan & Disaster Recovery",
        challenge: "Pengambilan sampel manual jutaan transaksi perbankan harian menghabiskan waktu auditor SKAI",
        solutionByDsi: "Kalkulator sampel TOE terintegrasi serta pengujian kontrol ITGC terotomasi untuk akses basis data nasabah"
      },
      {
        sk5Requirement: "Pasal 10: Asersi formal Direksi atas kecukupan rancangan dan efektivitas operasi",
        sectorRegulation: "Standar Basel II/III: Pilar 3 Disiplin Pasar dan Pelaporan Risiko Komprehensif",
        challenge: "Konsolidasi kertas kerja dari divisi kepatuhan, akuntansi, dan SKAI lambat saat audit tutup tahun",
        solutionByDsi: "Dashboard maturitas digital Lini 2 dengan riwayat audit trail lengkap dan QR-Code asersi eksekutif"
      }
    ],
    rcmBlueprints: [
      {
        processName: "Penyaluran Kredit Komersial & Sindikasi",
        financialRisk: "Kredit disetujui tanpa validasi komite kredit atau agunan tidak sah, berisiko kredit macet dan salah saji CKPN",
        keyControl: "Sistem core banking menolak pencairan pinjaman sebelum terdapat digital approval 3 tingkat komite dan validasi hukum agunan",
        frequency: "Setiap Kejadian (Event-driven)",
        testingMethod: "Pemeriksaan 25 sampel acak berkas persetujuan kredit dan uji batasan wewenang sistem (dual control)"
      },
      {
        processName: "Penutupan Hari (EOD Batch Processing) Core Banking",
        financialRisk: "Gagal penyeimbangan data debit/kredit antara transaksi ATM/Teller dan General Ledger (GL)",
        keyControl: "Automated batch job menghasilkan laporan selisih suspensi secara otomatis dan mewajibkan tanda tangan kepala akuntansi sebelum pembukaan hari berikutnya",
        frequency: "Harian",
        testingMethod: "Inspeksi 25 log harian laporan rekonsiliasi GL dan verifikasi penanganan outstanding item > 24 jam"
      },
      {
        processName: "Manajemen Akses Istimewa Database Rekening Nasabah",
        financialRisk: "Perubahan saldo atau parameter suku bunga secara tidak sah oleh personel teknologi informasi internal",
        keyControl: "Aktivasi log audit tabel saldo perbankan dengan pemantauan SIEM dan larangan direct database update tanpa emergency ticket resmi",
        frequency: "Berkelanjutan (Automated Monitoring)",
        testingMethod: "Pengujian konfigurasi database, peninjauan log perubahan parameter, dan verifikasi izin akses DBA"
      }
    ],
    strategicBenefits: [
      {
        title: "Kepercayaan Pengawas Regulator (OJK & BPKP)",
        desc: "Dokumentasi kertas kerja terstruktur yang memudahkan proses pemeriksaan tahunan tanpa temuan materialitas sistemik."
      },
      {
        title: "Pengurangan Biaya Audit Eksternal KAP",
        desc: "KAP dapat mengandalkan pengendalian internal Lini 2 sehingga lingkup pengujian substantif eksternal menjadi jauh lebih efisien."
      },
      {
        title: "Percepatan Waktu Penutupan Buku Akhir Tahun",
        desc: "Penutupan buku keuangan konsolidasian bank dapat diselesaikan lebih cepat dengan rekonsiliasi antar-cabang yang terotomasi."
      }
    ],
    faqs: [
      {
        question: "Apakah implementasi ICOFR BUMN perbankan bertentangan dengan audit internal SKAI?",
        answer: "Tidak bertentangan. SK-5/DKU.MBU/11/2024 justru memperkuat model Tiga Lini (Three Lines Model). Lini 1 (bisnis) dan Lini 2 (manajemen risiko/kepatuhan) membangun serta menguji kontrol rancangan, sehingga SKAI di Lini 3 mendapatkan asersi objektif sebelum diaudit KAP atau BPK."
      },
      {
        question: "Bagaimana integrasi pengujian ITGC pada sistem perbankan warisan (legacy core banking)?",
        answer: "Daya Solusi Integra melakukan evaluasi interface transfer data, kontrol input terkompensasi, dan pemantauan log logis pada terminal host perbankan guna memastikan integritas data tetap terbukti secara forensik."
      },
      {
        question: "Berapa lama durasi implementasi pendampingan ICOFR untuk Bank BUMN?",
        answer: "Rata-rata pendampingan siklus penuh (scoping, penyusunan RCM, walkthrough TOD/TOE, hingga penyusunan asersi Direksi) memakan waktu 3 sampai 5 bulan tergantung skala cabang dan kesiapan dokumentasi SOP."
      }
    ]
  },

  "infrastruktur-karya": {
    slug: "infrastruktur-karya",
    shortTitle: "Infrastruktur & Konstruksi Karya",
    navTitle: "BUMN Infrastruktur & Konstruksi Karya",
    heroBadge: "Pengendalian Kepatuhan PSAK 72 & Verifikasi Subkontraktor",
    heroHeading: "Pengendalian Internal ICOFR Sektor",
    heroHighlight: "Infrastruktur, Proyek & BUMN Karya",
    heroDescription: "Solusi tata kelola kepatuhan SK-5/DKU.MBU/11/2024 khusus BUMN konstruksi, pengelola jalan tol, pelabuhan, dan bandara untuk mengawal akurasi pengakuan pendapatan proyek dan pengendalian vendor.",
    executiveSummary: "Sektor BUMN Infrastruktur dan Konstruksi (Karya) memiliki karakter proyek jangka panjang dengan kompleksitas tinggi pada pengakuan pendapatan kontrak PSAK 72 berbasis persentase penyelesaian (Percentage of Completion/PoC). Titik rawan audit SPI dan BPK terletak pada potensi klaim progres fisik fiktif, keterlambatan pencatatan tagihan subkontraktor (unbilled payables), serta penyimpangan pengadaan material bernilai masif di lokasi proyek yang terdesentralisasi.",
    targetEntities: [
      "BUMN Kontraktor & Karya (Adhi Karya, Hutama Karya, Wijaya Karya, Waskita, PP)",
      "BUMN Pengelola Infrastruktur Transportasi (Jasa Marga, Pelindo, InJourney)",
      "Anak Perusahaan EPC, Beton Pracetak & Pabrikasi Baja",
      "Konsorsium Proyek Strategis Nasional (PSN)"
    ],
    primaryRegulation: "SK-5/DKU.MBU/11/2024",
    sectorRegulationName: "PSAK 72 (Pendapatan Kontrak Pelanggan) & Pedoman Pengadaan BUMN",
    keyChallenges: [
      {
        title: "Akurasi Perhitungan Persentase Penyelesaian (PoC) PSAK 72",
        description: "Risiko pengakuan pendapatan mendahului progres fisik aktual (overstatement revenue) akibat estimasi sisa biaya penyelesaian proyek (cost to complete) yang tidak diperbarui secara disiplin."
      },
      {
        title: "Pengendalian Verifikasi Tagihan Subkontraktor & Mandor",
        description: "Pengawasan kontrol terhadap bukti opname lapangan, berita acara serah terima sementara, dan validitas faktur pajak vendor untuk mencegah double-invoicing atau proyek fiktif."
      },
      {
        title: "Monitoring Pengeluaran Capex dan Pengadaan Material Proyek",
        description: "Pemisahan tugas otorisasi belanja di kantor proyek lapangan (site project) terhadap kas operasional kantor pusat."
      }
    ],
    regulatoryAlignment: [
      {
        sk5Requirement: "Pasal 5: Dokumentasi proses bisnis dan identifikasi titik risiko salah saji material",
        sectorRegulation: "PSAK 72: Penentuan kewajiban pelaksanaan (performance obligations) kontrak proyek",
        challenge: "Variasi klausul kontrak konstruksi yang memuat eskalasi harga, denda keterlambatan (LD), dan variasi pekerjaan (addendum)",
        solutionByDsi: "Standardisasi RCM siklus pendapatan konstruksi dengan kontrol validasi addendum kontrak berkala"
      },
      {
        sk5Requirement: "Pasal 7: Pengujian Test of Operating Effectiveness (TOE) pengendalian operasional",
        sectorRegulation: "Peraturan Pengadaan BUMN: Verifikasi kualifikasi rekanan dan kewajaran harga lelang",
        challenge: "Lokasi proyek yang tersebar di pelosok nusantara menyulitkan pengujian fisik kontrol langsung",
        solutionByDsi: "Kertas kerja pengujian TOE digital berbasis cloud terintegrasi untuk verifikasi berita acara opname lapangan"
      },
      {
        sk5Requirement: "Pasal 9: Tindak lanjut dan perbaikan defisiensi pengendalian (remediasi)",
        sectorRegulation: "Audit BPK / BPKP: Rekomendasi penyelesaian selisih volume fisik pekerjaan proyek",
        challenge: "Keterlambatan penyelesaian temuan audit menyebabkan sanksi administratif dan penahanan termin pencairan APBN",
        solutionByDsi: "Modul pelacakan defisiensi otomatis dengan penanggung jawab Project Manager dan alarm jatuh tempo tindakan perbaikan"
      }
    ],
    rcmBlueprints: [
      {
        processName: "Pengakuan Pendapatan Termin & Estimasi Cost to Complete",
        financialRisk: "Estimasi biaya penyelesaian proyek sengaja dikecilkan agar laba proyek terlihat tinggi pada periode berjalan",
        keyControl: "Rekalkulasi estimasi sisa biaya wajib ditinjau setiap triwulan oleh Tim Quantity Surveyor independen dan disetujui Direktur Operasi",
        frequency: "Kuartalan",
        testingMethod: "Pengujian 100% kontrak bernilai material (> Rp 100 Miliar) terhadap kesesuaian estimasi biaya dengan realisasi aktual"
      },
      {
        processName: "Verifikasi Berita Acara Opname Pekerjaan Subkontraktor",
        financialRisk: "Pembayaran diterbitkan untuk pekerjaan subkontraktor yang belum terpasang atau tidak memenuhi spesifikasi teknis",
        keyControl: "Sistem ERP mewajibkan lampiran foto dokumentasi geolokasi progres fisik dan tanda tangan konsultan pengawas sebelum voucher pembayaran terbit",
        frequency: "Setiap Invoice Masuk",
        testingMethod: "Pengujian sampel 40 voucher pembayaran subkontraktor dan pencocokan silang dengan log konsultan supervisi"
      },
      {
        processName: "Pencatatan Pembelian & Penerimaan Material Konstruksi (Semen/Baja)",
        financialRisk: "Material diterima tidak sesuai surat jalan gudang proyek namun langsung diakui sebagai biaya langsung proyek",
        keyControl: "Three-way matching otomatis antara Purchase Order, Good Receipt Note tim logistik gudang, dan Surat Jalan pemasok",
        frequency: "Setiap Transaksi Penerimaan",
        testingMethod: "Inspeksi sampel 45 transaksi penerimaan barang material dan uji fisik saldo sisa inventori proyek"
      }
    ],
    strategicBenefits: [
      {
        title: "Perlindungan Direksi dari Risiko Hukum Pengadaan",
        desc: "Dokumentasi kontrol yang kedap dan terverifikasi digital membuktikan itikad baik (Business Judgment Rule) dalam tata kelola belanja proyek."
      },
      {
        title: "Arus Kas Proyek Lebih Sehat & Terkendali",
        desc: "Mencegah kebocoran dana ke subkontraktor dan memastikan piutang termin segera tertagih ke pemilik proyek pemerintah/swasta."
      },
      {
        title: "Kelancaran Restrukturisasi Keuangan",
        desc: "Laporan keuangan yang bersih dari asersi salah saji material meningkatkan keyakinan perbankan kreditur dan investor obligasi."
      }
    ],
    faqs: [
      {
        question: "Bagaimana solusi ICOFR mengatasi masalah proyek di lokasi terpencil tanpa internet stabil?",
        answer: "GRC Integra mendukung pengumpulan bukti kontrol secara offline (mobile evidence snapshot) yang akan tersinkronisasi otomatis saat personel proyek terhubung kembali ke jaringan internet."
      },
      {
        question: "Apakah sistem ini dapat diintegrasikan dengan ERP eksisting seperti SAP atau Oracle?",
        answer: "Ya, arsitektur data GRC Integra dirancang untuk dapat bertukar data dengan modul ERP SAP (FI/CO/PS) guna mengekstrak jurnal materialitas dan status purchase order proyek secara seamless."
      },
      {
        question: "Mengapa BUMN Karya sering mendapatkan temuan audit BPK terkait PSAK 72?",
        answer: "Sebagian besar temuan bersumber dari tidak adanya kontrol validasi berkala terhadap kenaikan harga material di lapangan, sehingga estimasi sisa biaya (Cost to Complete) tidak realistis dan menggelembungkan laba semu."
      }
    ]
  },

  "energi-tambang": {
    slug: "energi-tambang",
    shortTitle: "Energi, Migas & Holding Tambang",
    navTitle: "BUMN Energi, Migas & Holding Tambang",
    heroBadge: "Tata Kelola Holding Konsolidasi & Rekonsiliasi Aset Masif",
    heroHeading: "Pengendalian Internal ICOFR Sektor",
    heroHighlight: "Energi, Migas & Holding Tambang",
    heroDescription: "Solusi tata kelola pengendalian pelaporan keuangan untuk induk holding dan anak perusahaan BUMN sektor energi, kelistrikan, minyak bumi, gas alam, serta mineral batubara.",
    executiveSummary: "Holding BUMN Energi dan Tambang (seperti Pertamina, PLN, dan MIND ID) memiliki struktur korporasi bertingkat dengan ratusan anak dan cucu perusahaan. Kompleksitas audit laporan keuangan konsolidasian berpusat pada eliminasi transaksi antar-entitas (intercompany reconciliations), regulasi transfer pricing, pengujian penurunan nilai aset modal eksplorasi (impairment of assets), serta kewajiban provisi lingkungan pasca-tambang (decommissioning liabilities).",
    targetEntities: [
      "Holding & Sub-Holding Sektor Minyak dan Gas Bumi",
      "BUMN Kelistrikan Nasional & Pembangkit Listrik",
      "Holding Industri Pertambangan & Mineral Logam (MIND ID, Antam, Bukit Asam, Timah, Inalum)",
      "Anak Perusahaan Jasa Logistik Energi & Pengeboran"
    ],
    primaryRegulation: "SK-5/DKU.MBU/11/2024",
    sectorRegulationName: "Pedoman Tata Kelola Holding BUMN & Standar ESG / Reklamasi Lingkungan",
    keyChallenges: [
      {
        title: "Rekonsiliasi Transaksi Antar-Perusahaan (Intercompany Balancing)",
        description: "Selisih angka piutang-utang dan jual-beli antar-anak perusahaan holding yang belum tereleminasi dengan sempurna saat penyusunan laporan keuangan konsolidasi."
      },
      {
        title: "Penilaian Penurunan Nilai Aset Eksplorasi & Cadangan Tambang (PSAK 48)",
        description: "Fluktuasi harga komoditas global mewajibkan uji penurunan nilai aset pembangkit, kilang, dan blok tambang secara berkala dengan parameter estimasi diskonto yang teruji."
      },
      {
        title: "Estimasi Kewajiban Pembongkaran Fasilitas & Reklamasi Tambang (ASR)",
        description: "Ketidakpastian jangka panjang atas biaya penutupan tambang dan pemulihan lingkungan hidup (Asset Retirement Obligations) yang berisiko under-accrual."
      }
    ],
    regulatoryAlignment: [
      {
        sk5Requirement: "Pasal 3: Penerapan ICOFR mencakup entitas induk dan seluruh anak perusahaan terkonsolidasi",
        sectorRegulation: "Pedoman Holding BUMN: Standarisasi sistem tata kelola seluruh portofolio holding",
        challenge: "Tingkat kematangan kontrol anak perusahaan sangat beragam, dari anak usaha TBK hingga entitas baru",
        solutionByDsi: "Penyusunan Master RCM Holding yang dapat diwariskan (cascading) ke seluruh anak perusahaan sesuai proporsi materialitas"
      },
      {
        sk5Requirement: "Pasal 8: Evaluasi defisiensi pengendalian tingkat holding dan anak perusahaan",
        sectorRegulation: "Regulasi Kementerian ESDM: Kepatuhan laporan cadangan dan royalti PNBP negara",
        challenge: "Konsolidasi pelaporan defisiensi manual via spreadsheet antar-entitas memakan waktu berminggu-minggu",
        solutionByDsi: "Platform GRC Integra menyediakan portal multi-tenant dengan konsolidasi dashboard status kepatuhan real-time"
      },
      {
        sk5Requirement: "Pasal 10: Pernyataan asersi Direksi Utama dan Direktur Keuangan Holding",
        sectorRegulation: "Standar Akuntansi PSAK 65: Penyusunan Laporan Keuangan Konsolidasian",
        challenge: "Direksi Holding membutuhkan keyakinan terukur bahwa asersi anak perusahaan telah divalidasi Lini 2 entitas bersangkutan",
        solutionByDsi: "Mekanisme sub-certification berjenjang dari Direksi Anak Usaha ke Direksi Holding sebelum asersi final ditandatangani"
      }
    ],
    rcmBlueprints: [
      {
        processName: "Eliminasi Saldo & Margin Intercompany Holding",
        financialRisk: "Keuntungan internal penjualan komoditas antar-anak perusahaan belum tereliminasi, menyebabkan laba holding overstated",
        keyControl: "Sistem pelaporan holding mewajibkan konfirmasi saldo transaksi bilateral sebelum tanggal cut-off bulanan dengan toleransi selisih nol",
        frequency: "Bulanan",
        testingMethod: "Peninjauan kertas kerja eliminasi 12 periode konsolidasi bulanan dan investigasi selisih jurnal eliminasi"
      },
      {
        processName: "Pengukuran Provisi Reklamasi & Pascatambang (ASR)",
        financialRisk: "Estimasi biaya lingkungan hidup dicatat terlalu rendah sehingga menimbulkan kewajiban tak tercatat saat audit BPK",
        keyControl: "Perhitungan liabilitas lingkungan wajib dihitung bersama konsultan independen ESDM dan disesuaikan dengan tingkat inflasi tahunan",
        frequency: "Tahunan",
        testingMethod: "Evaluasi asumsi aktuaria dan studi lingkungan independen serta verifikasi pencadangan dana jaminan reklamasi di bank pemerintah"
      },
      {
        processName: "Audit Fisik Persediaan Komoditas (Batu Bara / Minyak Mentah / Spareparts EAM)",
        financialRisk: "Penyusutan komoditas (losses) atau suku cadang bernilai miliaran rupiah hilang tanpa penyesuaian nilai buku inventori",
        keyControl: "Stock opname gabungan antara tim operasi, akuntansi, dan pengawas independen (surveyor) menggunakan teknologi drone/sounding berkala",
        frequency: "Triwulanan",
        testingMethod: "Inspeksi 15 berita acara hasil stock opname surveyor dan verifikasi penyesuaian jurnal selisih inventori ke laba rugi"
      }
    ],
    strategicBenefits: [
      {
        title: "Kepastian Validitas Laporan Konsolidasi Holding",
        desc: "Proses eliminasi transaksi antar-anak usaha berjalan otomatis dan transparan tanpa menyisakan saldo gantung yang menjadi temuan auditor."
      },
      {
        title: "Perlindungan Nilai Aset Strategis Negara",
        desc: "Pengendalian inventori energi dan suku cadang pabrik terlindungi dengan prosedur pengujian efektivitas pengendalian berstandar internasional."
      },
      {
        title: "Kesiapan Menghadapi Audit SPI, BPKP, dan BPK RI",
        desc: "Kertas kerja audit terstruktur memudahkan pemenuhan permintaan data audit kepatuhan negara maupun audit investigatif."
      }
    ],
    faqs: [
      {
        question: "Bagaimana cara menyelaraskan ICOFR di anak perusahaan yang berstatus perseroan terbuka (Tbk)?",
        answer: "Anak perusahaan Tbk tetap mengacu pada ketentuan pasar modal (OJK) sekaligus mengadopsi standar reporting induk holding sesuai mandat SK-5 Kementerian BUMN. GRC Integra memfasilitasi integrasi matriks kontrol ini tanpa menduplikasi pekerjaan."
      },
      {
        question: "Apakah sistem mendukung pengelolaan kontrol ESG dan kepatuhan lingkungan?",
        answer: "Ya, matriks risiko pada GRC Integra dapat diperluas untuk mencakup kontrol pelaporan non-keuangan, termasuk provisi rehabilitasi lingkungan, pajak karbon, dan royalti pertambangan."
      },
      {
        question: "Berapa lama proses implementasi ICOFR untuk skala holding berskala besar?",
        answer: "Implementasi pada tingkat holding umumnya dilakukan bertahap (pilot project pada induk dan 2-3 anak usaha strategis) dalam durasi 4 sampai 6 bulan, dilanjutkan dengan rollout menyeluruh ke seluruh portofolio."
      }
    ]
  }
};
