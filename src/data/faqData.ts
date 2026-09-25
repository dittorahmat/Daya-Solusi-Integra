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
  ]
};
