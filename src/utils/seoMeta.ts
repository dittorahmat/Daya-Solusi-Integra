import { GLOSSARY_ITEMS } from "../data/glossaryData";

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export const ROUTE_METADATA_MAP: Record<string, RouteMeta> = {
  "/": {
    title: "Konsultan ICOFR, Software GRC Integra & Pengendalian Internal BUMN | Daya Solusi Integra",
    description: "Layanan konsultasi ICOFR dan penyedia platform software GRC Integra untuk kepatuhan regulasi SK-5/DKU.MBU/11/2024, evaluasi ITGC, dan asersi manajemen BUMN Indonesia.",
    canonical: "https://dsintegra.co.id/",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Konsultan ICOFR & Platform GRC Integra BUMN | Daya Solusi Integra",
    ogDescription: "Tingkatkan keandalan pelaporan keuangan dan kepatuhan audit BUMN melalui software GRC Integra dan pendampingan konsultan senior Daya Solusi Integra."
  },
  "/layanan/icofr-bumn": {
    title: "Konsultan ICOFR BUMN: Kepatuhan Regulasi SK-5 & Pendampingan Asersi | Daya Solusi Integra",
    description: "Layanan konsultasi implementasi ICOFR BUMN sesuai SK-5/DKU.MBU/11/2024. Scoping akun material, penyusunan RCM, walkthrough Lini 2, dan perumusan asersi manajemen Direksi.",
    canonical: "https://dsintegra.co.id/layanan/icofr-bumn",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Konsultan Implementasi ICOFR BUMN | Daya Solusi Integra",
    ogDescription: "Pendampingan komprehensif kepatuhan siklus hidup ICOFR BUMN berbasis regulasi SK-5 Kementerian BUMN dan COSO Framework."
  },
  "/layanan/itgc-audit-readiness": {
    title: "Evaluasi & Audit Kesiapan ITGC Sektor Perbankan dan BUMN | Daya Solusi Integra",
    description: "Jasa evaluasi dan audit kesiapan ITGC berbasis POJK No. 11/POJK.03/2022 dan ISO 27001. Manajemen hak akses, segregasi tugas (SoD), dan change management sistem keuangan.",
    canonical: "https://dsintegra.co.id/layanan/itgc-audit-readiness",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Audit Kesiapan ITGC BUMN & Perbankan | Daya Solusi Integra",
    ogDescription: "Audit kontrol umum TI independen untuk memastikan keandalan sistem pelaporan keuangan dan kepatuhan regulasi OJK & BUMN."
  },
  "/layanan/enterprise-grc": {
    title: "Enterprise GRC & Maturity Assessment Pengendalian Internal COSO | Daya Solusi Integra",
    description: "Pengukuran tingkat kematangan pengendalian internal korporat berbasis 5 komponen dan 17 prinsip COSO Framework serta integrasi manajemen risiko ISO 31000.",
    canonical: "https://dsintegra.co.id/layanan/enterprise-grc",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Enterprise GRC Framework & COSO Maturity | Daya Solusi Integra",
    ogDescription: "Perkuat pilar tata kelola terpadu dan pengukuran maturitas pengendalian internal untuk BUMN dan holding korporasi."
  },
  "/platform/grc-integra": {
    title: "GRC Integra: Software Siklus Hidup Digital ICOFR Pertama untuk BUMN | Daya Solusi Integra",
    description: "Platform digital terintegrasi untuk automasi kepatuhan SK-5 BUMN: visualisasi proses bisnis BPMN, kalkulator sampel Tabel 22, walkthrough Lini 2, dan asersi digital ber-QR Code.",
    canonical: "https://dsintegra.co.id/platform/grc-integra",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Platform Software GRC Integra | Solusi Digital ICOFR BUMN",
    ogDescription: "Tinggalkan kerumitan spreadsheet manual. Otomasi siklus hidup pengendalian internal BUMN dengan platform GRC Integra."
  },
  "/platform/bpm-workflow-editor": {
    title: "BPM Workflow Editor: Buat Diagram Alur Proses Bisnis & Auto-Draw dari SOP | Daya Solusi Integra",
    description: "Software pemetaan diagram alur proses bisnis berbasis web sekelas Visio. Gambar manual dengan elemen BPMN atau unggah dokumen SOP (PDF, JPG, PNG) untuk auto-draw instan.",
    canonical: "https://dsintegra.co.id/platform/bpm-workflow-editor",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "BPM Workflow Editor | Diagram Proses Bisnis & Auto-Draw Dokumen SOP",
    ogDescription: "Solusi desain alur proses kerja korporasi modern. Gambar fleksibel seperti Visio di web atau unggah file PDF/JPG/PNG untuk direkonstruksi otomatis."
  },
  "/asesmen-maturitas": {
    title: "Asesmen Mandiri Kematangan Pengendalian Internal COSO BUMN | Daya Solusi Integra",
    description: "Evaluasi instan tingkat maturitas pengendalian internal pelaporan keuangan organisasi Anda berdasarkan 5 pilar COSO dan dapatkan rekomendasi tindak lanjut.",
    canonical: "https://dsintegra.co.id/asesmen-maturitas",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Asesmen Mandiri Kematangan ICOFR COSO | Daya Solusi Integra",
    ogDescription: "Ukur skor kesiapan kepatuhan pengendalian internal organisasi Anda secara interaktif dalam 3 menit."
  },
  "/glosarium": {
    title: "Glosarium Tata Kelola & Kamus Kepatuhan ICOFR BUMN | Daya Solusi Integra",
    description: "Kamus lengkap istilah kepatuhan ICOFR, regulasi SK-5 BUMN, kerangka kerja COSO, metodologi TOD/TOE, ELC, TLC, ITGC, dan evaluasi defisiensi kontrol.",
    canonical: "https://dsintegra.co.id/glosarium",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Glosarium Kepatuhan ICOFR BUMN | Daya Solusi Integra",
    ogDescription: "Kompilasi definisi resmi, singkatan istilah teknis, dan standar evaluasi pengendalian internal pelaporan keuangan BUMN."
  },
  "/regulasi": {
    title: "Pusat Regulasi Tata Kelola, ICOFR & Kepatuhan Audit BUMN | Daya Solusi Integra",
    description: "Kompilasi direktori regulasi resmi Kementerian BUMN, OJK, dan SPKN BPK RI: SK-5/DKU.MBU/11/2024, PER-2/MBU/03/2023, POJK 17/2023, serta matriks tanggung jawab Tiga Lini.",
    canonical: "https://dsintegra.co.id/regulasi",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Pusat Regulasi Pengendalian Internal & Tata Kelola BUMN | Daya Solusi Integra",
    ogDescription: "Katalog hukum dan pedoman teknis kepatuhan pengendalian internal pelaporan keuangan BUMN Indonesia."
  },
  "/kalkulator-sampel-toe": {
    title: "Kalkulator Ukuran Sampel TOE Tabel 22 Regulasi SK-5 BUMN | Daya Solusi Integra",
    description: "Hitung rekomendasi ukuran sampel pengujian kontrol manual (TOE) sesuai Tabel 22 regulasi SK-5/DKU.MBU/11/2024. Panduan normatif deviasi nol untuk auditor internal BUMN.",
    canonical: "https://dsintegra.co.id/kalkulator-sampel-toe",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Kalkulator Sampel Pengujian Kontrol TOE Tabel 22 | Daya Solusi Integra",
    ogDescription: "Alat bantu digital cepat penentu ukuran sampel pengujian pengendalian internal pelaporan keuangan BUMN."
  },
  "/kebijakan-privasi": {
    title: "Kebijakan Privasi & Tata Kelola Data Perusahaan | Daya Solusi Integra",
    description: "Kebijakan pelindungan data pribadi dan tata kelola kerahasiaan informasi mitra BUMN dan perbankan oleh PT Daya Solusi Integra sesuai UU No. 27 Tahun 2022.",
    canonical: "https://dsintegra.co.id/kebijakan-privasi",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Kebijakan Privasi & Tata Kelola Data | Daya Solusi Integra",
    ogDescription: "Komitmen kepatuhan regulasi perlindungan data pribadi dan standar pengamanan informasi korporasi PT Daya Solusi Integra."
  },
  "/pernyataan-independensi": {
    title: "Pernyataan Independensi & Integritas Konsultan ICOFR BUMN | Daya Solusi Integra",
    description: "Piagam etika independensi konsultan PT Daya Solusi Integra: mitigasi benturan kepentingan, objektivitas pengujian kontrol Lini 2, dan pemisahan peran dengan auditor eksternal.",
    canonical: "https://dsintegra.co.id/pernyataan-independensi",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Pernyataan Independensi & Integritas Konsultan | Daya Solusi Integra",
    ogDescription: "Transparansi dan standar integritas profesional konsultan independen dalam implementasi tata kelola ICOFR BUMN."
  },
  "/kualifikasi-vendor": {
    title: "Kualifikasi Vendor & Kesiapan Tender Solusi GRC BUMN | Daya Solusi Integra",
    description: "Informasi kualifikasi legalitas, KBLI 70209 & 62019/62029, arsitektur on-premise sesuai UU PDP, dan panduan KAK pengadaan sistem ICOFR SK-5 untuk panitia tender BUMN.",
    canonical: "https://dsintegra.co.id/kualifikasi-vendor",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Kualifikasi Vendor & Pengadaan GRC BUMN | Daya Solusi Integra",
    ogDescription: "Panduan pengadaan resmi sistem ICOFR BUMN: verifikasi KBLI, arsitektur data lokal on-premise, kualifikasi tenaga ahli CA/CIA, dan draf klausul KAK."
  },
  "/penulis/humbul-kristiawan": {
    title: "Humbul Kristiawan, CA, CIA, CICA, GRCP: Profil Pakar & Penulis | Daya Solusi Integra",
    description: "Profil profesional Humbul Kristiawan: Principal Partner Daya Solusi Integra, mantan Equity Partner Deloitte SEA, komite audit BUMN & perbankan, dan penulis artikel kepatuhan ICOFR.",
    canonical: "https://dsintegra.co.id/penulis/humbul-kristiawan",
    image: "https://dsintegra.co.id/images/authors/humbul-kristiawan.jpg",
    ogTitle: "Profil Pakar GRC: Humbul Kristiawan, CA, CIA, CICA | Daya Solusi Integra",
    ogDescription: "Rekam jejak 25+ tahun di bidang tata kelola korporasi, asersi ICOFR BUMN, dan audit kepatuhan regulasi Kementerian BUMN."
  },
  "/sektor-bumn/perbankan": {
    title: "Konsultan ICOFR Perbankan BUMN & Evaluasi ITGC Core Banking | Daya Solusi Integra",
    description: "Solusi tata kelola pengendalian internal ICOFR SK-5 dan audit ITGC terintegrasi untuk Bank BUMN (Himbara) dan BPD: mitigasi CKPN PSAK 71, SoD, dan kepatuhan POJK.",
    canonical: "https://dsintegra.co.id/sektor-bumn/perbankan",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "ICOFR Perbankan BUMN & Evaluasi ITGC Core Banking | Daya Solusi Integra",
    ogDescription: "Penyelarasan mandat SK-5 Kementerian BUMN dengan POJK Manajemen Risiko & SEOJK Tata Kelola TI Core Banking."
  },
  "/sektor-bumn/infrastruktur-karya": {
    title: "Konsultan ICOFR BUMN Karya & Pengendalian Kepatuhan PSAK 72 | Daya Solusi Integra",
    description: "Solusi implementasi ICOFR SK-5 khusus BUMN Karya, Tol, dan Pelabuhan: mitigasi risiko pengakuan pendapatan persentase penyelesaian PSAK 72 dan verifikasi subkontraktor.",
    canonical: "https://dsintegra.co.id/sektor-bumn/infrastruktur-karya",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "ICOFR BUMN Karya & Pengendalian Proyek PSAK 72 | Daya Solusi Integra",
    ogDescription: "Kawal akurasi pengakuan pendapatan kontrak konstruksi dan tertib verifikasi tagihan vendor/subkontraktor proyek infrastruktur."
  },
  "/sektor-bumn/energi-tambang": {
    title: "Konsultan ICOFR Holding Energi & Tambang BUMN SK-5 | Daya Solusi Integra",
    description: "Solusi tata kelola pengendalian internal pelaporan keuangan untuk holding BUMN migas, kelistrikan, dan mineral: eliminasi intercompany balancing dan audit cadangan aset.",
    canonical: "https://dsintegra.co.id/sektor-bumn/energi-tambang",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "ICOFR Holding Energi & Tambang BUMN | Daya Solusi Integra",
    ogDescription: "Otomasi rekonsiliasi transaksi antar-entitas anak holding, pengujian penurunan nilai aset eksplorasi, dan provisi reklamasi lingkungan."
  },
  "/blog": {
    title: "Artikel, Riset & Panduan Kepatuhan ICOFR BUMN | Daya Solusi Integra",
    description: "Kumpulan artikel pilar, riset regulasi SK-5, analisis ITGC, dan panduan praktis implementasi pengendalian internal pelaporan keuangan dari konsultan Daya Solusi Integra.",
    canonical: "https://dsintegra.co.id/blog",
    image: "https://dsintegra.co.id/og-image.jpg",
    ogTitle: "Knowledge Base & Insight ICOFR BUMN | Daya Solusi Integra",
    ogDescription: "Kajian mendalam tata kelola korporasi, regulasi BUMN, dan transformasi digital GRC."
  },
  "/blog/fitur-kunci-aplikasi-icofr-bumn": {
    title: "5 Fitur Wajib Aplikasi ICOFR BUMN Sesuai Regulasi SK-5 | Daya Solusi Integra",
    description: "Ulasan fitur esensial perangkat lunak ICOFR BUMN: visualisasi BPMN Lampiran 3, kalkulator sampel Tabel 22, kertas kerja walkthrough Lini 2, dan asersi digital terverifikasi.",
    canonical: "https://dsintegra.co.id/blog/fitur-kunci-aplikasi-icofr-bumn",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Fitur Wajib Software ICOFR BUMN | Daya Solusi Integra",
    ogDescription: "Pelajari kriteria teknis perangkat lunak ICOFR yang wajib dipenuhi BUMN untuk mematuhi regulasi SK-5."
  },
  "/blog/panduan-sk5-icofr-grc-integra": {
    title: "Panduan Implementasi SK-5/DKU.MBU/11/2024 ICOFR BUMN & Otomasi GRC Integra | Daya Solusi Integra",
    description: "Panduan teknis langkah demi langkah pemenuhan regulasi SK-5 Kementerian BUMN mulai dari scoping akun material, walkthrough Lini 2, pengujian TOD/TOE, hingga penerbitan asersi Direksi.",
    canonical: "https://dsintegra.co.id/blog/panduan-sk5-icofr-grc-integra",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Panduan SK-5 ICOFR & Platform GRC Integra | Daya Solusi Integra",
    ogDescription: "Strategi praktis kepatuhan regulasi pengendalian internal pelaporan keuangan bagi BUMN dan anak perusahaan."
  },
  "/blog/panduan-sampel-toe-tabel-22-icofr-bumn": {
    title: "Panduan Penentuan Sampel Pengujian TOE Berdasarkan Tabel 22 Regulasi BUMN | Daya Solusi Integra",
    description: "Standar normatif ukuran sampel pengujian efektivitas operasi kontrol (TOE) tanpa deviasi toleransi (zero deviation) berdasarkan frekuensi kontrol menurut regulasi Kementerian BUMN.",
    canonical: "https://dsintegra.co.id/blog/panduan-sampel-toe-tabel-22-icofr-bumn",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Panduan Sampel TOE Tabel 22 Regulasi BUMN | Daya Solusi Integra",
    ogDescription: "Matriks ukuran sampel resmi pengujian kontrol manual tahunan, bulanan, mingguan, hingga harian."
  },
  "/blog/manfaat-aplikasi-icofr-bumn-spreadsheet": {
    title: "Mengapa BUMN Perlu Beralih dari Spreadsheet ke Aplikasi ICOFR Terintegrasi | Daya Solusi Integra",
    description: "Analisis risiko penggunaan spreadsheet manual dalam pelaporan ICOFR: integritas formula, audit trail, segregasi tugas, dan efisiensi konsolidasi holding korporasi.",
    canonical: "https://dsintegra.co.id/blog/manfaat-aplikasi-icofr-bumn-spreadsheet",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Aplikasi ICOFR vs Spreadsheet Manual | Daya Solusi Integra",
    ogDescription: "Bahaya laten mengelola kertas kerja ICOFR dengan spreadsheet manual dan solusi otomasi GRC Integra."
  },
  "/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5": {
    title: "Apa Itu ICOFR BUMN? Definisi, Fungsi, dan Landasan Regulasi SK-5 | Daya Solusi Integra",
    description: "Pahami esensi Internal Control over Financial Reporting (ICOFR) untuk BUMN Indonesia, peran strategis bagi Direksi, dan konsekuensi ketidakpatuhan regulasi.",
    canonical: "https://dsintegra.co.id/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Apa Itu ICOFR BUMN & Regulasi SK-5 | Daya Solusi Integra",
    ogDescription: "Panduan dasar komprehensif sistem pengendalian internal pelaporan keuangan untuk eksekutif BUMN."
  },
  "/blog/efektivitas-icofr-bumn": {
    title: "Mengukur Efektivitas Penerapan ICOFR di Lingkungan BUMN | Daya Solusi Integra",
    description: "Metrik dan indikator kunci keberhasilan penerapan sistem pengendalian internal pelaporan keuangan yang sehat dan tahan uji audit KAP maupun BPK.",
    canonical: "https://dsintegra.co.id/blog/efektivitas-icofr-bumn",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Efektivitas ICOFR di Lingkungan BUMN | Daya Solusi Integra",
    ogDescription: "Tolak ukur evaluasi dan monitoring keberlanjutan sistem pengendalian internal korporat."
  },
  "/blog/iso-31000-bumn": {
    title: "Integrasi Kerangka Kerja ISO 31000 dan ICOFR COSO di BUMN | Daya Solusi Integra",
    description: "Harmonisasi antara manajemen risiko berbasis ISO 31000 dan pengendalian internal pelaporan keuangan COSO untuk menciptakan tata kelola yang terpadu.",
    canonical: "https://dsintegra.co.id/blog/iso-31000-bumn",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Integrasi ISO 31000 & ICOFR BUMN | Daya Solusi Integra",
    ogDescription: "Strategi integrasi manajemen risiko dan pengendalian internal pelaporan keuangan."
  },
  "/blog/studi-kasus-icofr-holding-bumn-wtp": {
    title: "Studi Kasus ICOFR BUMN: Eliminasi 42 Defisiensi Pengendalian Menuju Opini WTP | Daya Solusi Integra",
    description: "Transformasi tata kelola Holding BUMN dengan aset Rp 54T: eliminasi 42 defisiensi, akselerasi TOE 91%, kepatuhan ITGC SAP ERP, dan pencapaian opini WTP tanpa catatan.",
    canonical: "https://dsintegra.co.id/blog/studi-kasus-icofr-holding-bumn-wtp",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Studi Kasus ICOFR BUMN Menuju Opini WTP | Daya Solusi Integra",
    ogDescription: "Studi kasus pembuktian empiris transformasi kepatuhan SK-5/2024 dan eliminasi temuan material audit."
  },
  "/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn": {
    title: "Perbandingan Software GRC: Platform SK-5 BUMN vs Modul ERP Global | Daya Solusi Integra",
    description: "Evaluasi 5 dimensi antara platform GRC native SK-5 (GRC Integra) dengan modul ERP global (SAP/Oracle): kepatuhan, TCO lisensi rupiah, time-to-value, dan kesiapan audit BPK.",
    canonical: "https://dsintegra.co.id/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Software GRC BUMN vs Modul ERP Global | Daya Solusi Integra",
    ogDescription: "Panduan komprehensif bagi Komite Audit dan Divisi TI BUMN dalam memilih solusi kepatuhan ICOFR terbaik."
  },
  "/blog/panduan-pemetaan-proses-bisnis-sop-flowchart-bumn": {
    title: "Panduan Pemetaan Proses Bisnis dan Flowchart SOP BUMN SK-5 | Daya Solusi Integra",
    description: "Cara menyusun flowchart proses bisnis BUMN standar BPMN 2.0 Lampiran 3 SK-5: notasi baku, pemetaan RCM, dan rekonstruksi otomatis alur SOP lama via web canvas.",
    canonical: "https://dsintegra.co.id/blog/panduan-pemetaan-proses-bisnis-sop-flowchart-bumn",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Panduan Flowchart SOP & Pemetaan Proses Bisnis BUMN | Daya Solusi Integra",
    ogDescription: "Standarisasi diagram alur SOP BUMN sesuai Lampiran 3 SK-5/2024 dan integrasi pengujian pengendalian internal."
  },
  "/blog/risiko-rcm-excel-vs-software-grc-bumn": {
    title: "Risiko RCM Excel vs Software GRC Terdedikasi BUMN | Daya Solusi Integra",
    description: "Analisis kritis risiko audit pengelolaan RCM manual via spreadsheet Excel: integritas data, ketiadaan audit trail, risiko SOD, dan otomasi platform GRC Integra.",
    canonical: "https://dsintegra.co.id/blog/risiko-rcm-excel-vs-software-grc-bumn",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Risiko RCM Excel vs Platform GRC BUMN | Daya Solusi Integra",
    ogDescription: "Kelemahan spreadsheet untuk audit kepatuhan BUMN SK-5 dan manfaat otomasi kertas kerja audit terintegrasi."
  },
  "/blog/alternatif-software-grc-global-bumn": {
    title: "Evaluasi Software GRC: Platform Global vs Platform Native BUMN | Daya Solusi Integra",
    description: "Analisis komparatif pengadaan software GRC BUMN: TCO lisensi rupiah vs valas USD, kedaulatan data UU PDP, serta kepatuhan native regulasi SK-5/2024.",
    canonical: "https://dsintegra.co.id/blog/alternatif-software-grc-global-bumn",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ogTitle: "Alternatif Software GRC Global untuk BUMN | Daya Solusi Integra",
    ogDescription: "Panduan evaluasi pengadaan platform GRC enterprise bagi Direksi TI dan Komite Audit BUMN."
  }
};

/**
 * Memperbarui tag <head> dokumen di runtime client-side secara aman dan reaktif.
 */
export function updateDocumentMeta(pathname: string): void {
  let meta = ROUTE_METADATA_MAP[pathname];

  // Resolver dinamis untuk rute glosarium individual: /glosarium/:slug
  if (!meta && pathname.startsWith("/glosarium/")) {
    const slug = pathname.replace("/glosarium/", "");
    const item = GLOSSARY_ITEMS.find((g) => g.id === slug);
    if (item) {
      const termTitle = item.acronym ? `${item.term} (${item.acronym})` : item.term;
      meta = {
        title: `${termTitle}: Definisi & Kepatuhan Regulasi SK-5 BUMN | Daya Solusi Integra`,
        description: `${item.definition} Pelajari amanat regulasi ${item.regulationRef} dan solusi kepatuhan pengendalian internal BUMN.`,
        canonical: `https://dsintegra.co.id/glosarium/${item.id}`,
        image: "https://dsintegra.co.id/og-image.jpg",
        ogTitle: `${termTitle} - Glosarium Kepatuhan ICOFR BUMN`,
        ogDescription: item.definition
      };
    }
  }

  if (!meta) {
    meta = ROUTE_METADATA_MAP["/"];
  }

  // Update Title
  document.title = meta.title;

  // Helper untuk update atau create meta tag
  const setMeta = (nameAttr: "name" | "property", key: string, content: string) => {
    let el = document.querySelector(`meta[${nameAttr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(nameAttr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  // Helper untuk update canonical link
  const setCanonical = (href: string) => {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  };

  setMeta("name", "description", meta.description);
  setMeta("name", "title", meta.title);
  setCanonical(meta.canonical);

  // Open Graph
  setMeta("property", "og:title", meta.ogTitle || meta.title);
  setMeta("property", "og:description", meta.ogDescription || meta.description);
  setMeta("property", "og:url", meta.canonical);
  setMeta("property", "og:type", meta.ogType || "website");

  const imageUrl = meta.image || "https://dsintegra.co.id/og-image.jpg";
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:width", "1200");
  setMeta("property", "og:image:height", "630");

  // Twitter Cards
  setMeta("property", "twitter:card", "summary_large_image");
  setMeta("property", "twitter:title", meta.ogTitle || meta.title);
  setMeta("property", "twitter:description", meta.ogDescription || meta.description);
  setMeta("property", "twitter:url", meta.canonical);
  setMeta("property", "twitter:image", imageUrl);
}
