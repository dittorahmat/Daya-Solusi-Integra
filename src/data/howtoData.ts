export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  position: number;
}

export interface HowToItem {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 Duration, e.g. "P14D" or "PT4H"
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
}

export const ROUTE_HOWTO: Record<string, HowToItem> = {
  "/blog/panduan-sampel-toe-tabel-22-icofr-bumn": {
    name: "Panduan Penentuan Ukuran Sampel TOE Berdasarkan Tabel 22 SK-5 BUMN",
    description: "Langkah terstruktur menentukan populasi, frekuensi kontrol, dan ukuran sampel pengujian efektivitas pengendalian (TOE) sesuai regulasi Kementerian BUMN.",
    totalTime: "PT4H",
    tool: [
      "Kalkulator Sampel TOE GRC Integra",
      "Dokumen Risk and Control Matrix (RCM)",
      "Ekstraksi Log Transaksi ERP"
    ],
    supply: [
      "Bagan Akun Material",
      "Kertas Kerja Walkthrough TOD"
    ],
    steps: [
      {
        position: 1,
        name: "Identifikasi Frekuensi dan Sifat Kontrol",
        text: "Tentukan apakah kontrol bersifat manual atau otomatis, serta tetapkan frekuensi eksekusi kontrol apakah tahunan, kuartalan, bulanan, mingguan, harian, atau berulang kali dalam sehari."
      },
      {
        position: 2,
        name: "Evaluasi Efektivitas IT General Controls (ITGC)",
        text: "Pastikan pengujian kontrol umum teknologi informasi (ITGC) telah efektif. Jika kontrol otomatis (ITAC) didukung ITGC yang efektif, pengujian cukup dilakukan dengan 1 sampel (Test of One)."
      },
      {
        position: 3,
        name: "Tetapkan Populasi dan Batas Parameter Tabel 22",
        text: "Ekstraksi seluruh populasi transaksi selama periode laporan. Cocokkan frekuensi kontrol dengan rentang batas Tabel 22 Kementerian BUMN (contoh: 20 hingga 40 sampel untuk kontrol harian)."
      },
      {
        position: 4,
        name: "Pilih Sampel Representatif Secara Acak",
        text: "Lakukan penarikan sampel secara acak terdistribusi sepanjang tahun buku untuk memastikan tidak ada konsentrasi pengujian hanya pada akhir periode penutupan buku."
      },
      {
        position: 5,
        name: "Eksekusi Pengujian Bukti Operasional dan Catat Deviasi",
        text: "Periksa bukti audit (approval, rekonsiliasi, verifikasi fisik). Terapkan kriteria zero-deviation: jika ditemukan 1 penyimpangan, lakukan perluasan sampel atau catat sebagai temuan defisiensi kontrol."
      }
    ]
  },
  "/blog/panduan-penyusunan-kak-tor-icofr-bumn-2025": {
    name: "Panduan Penyusunan Dokumen KAK/TOR Pendampingan ICOFR BUMN",
    description: "Tata cara menyusun Kerangka Acuan Kerja (KAK) pengadaan jasa konsultan pendampingan tata kelola ICOFR berstandar Kementerian BUMN.",
    totalTime: "P7D",
    tool: [
      "Template Standar KAK Pengadaan BUMN",
      "Regulasi SK-5/DKU.MBU/11/2024"
    ],
    supply: [
      "Laporan Keuangan Tahunan Teraudit",
      "Struktur Organisasi Tiga Lini BUMN"
    ],
    steps: [
      {
        position: 1,
        name: "Penetapan Latar Belakang dan Dasar Hukum Regulasi",
        text: "Cantumkan dasar hukum wajib PER-2/MBU/03/2023 dan SK-5/DKU.MBU/11/2024 serta tujuan kepatuhan asersi Direksi pada Laporan Keuangan Audited."
      },
      {
        position: 2,
        name: "Perumusan Ruang Lingkup Pekerjaan Konsultan",
        text: "Bagi ruang lingkup ke dalam tahapan kunci: Scoping Entitas dan Akun Material, Reviu Desain Kontrol (TOD), Pengujian Efektivitas Operasional (TOE), dan Pendampingan Draf Asersi Manajemen."
      },
      {
        position: 3,
        name: "Penetapan Spesifikasi Kualifikasi Tim Tenaga Ahli",
        text: "Tentukan sertifikasi wajib personel konsultan seperti CIA (Certified Internal Auditor), CISA, CRMA, atau CA dengan pengalaman minimal pada audit industri sejenis."
      },
      {
        position: 4,
        name: "Penyusunan Jadwal Milestones dan Deliverables Terukur",
        text: "Tetapkan tenggat waktu penyelesaian laporan antara (Interim Report) dan laporan final sebelum batas penyerahan laporan keuangan konsolidasi ke Kementerian."
      },
      {
        position: 5,
        name: "Penyusunan Kerangka Evaluasi Teknis dan Harga",
        text: "Gunakan metode evaluasi kombinasi kualitas teknis dan biaya (Quality and Cost Based Selection) untuk memastikan kompetensi metodologi konsultan yang kredibel."
      }
    ]
  },
  "/blog/langkah-implementasi-icofr-sk-5-bumn": {
    name: "Langkah Implementasi Siklus Hidup ICOFR Berbasis SK-5 BUMN",
    description: "Panduan lima tahapan komprehensif implementasi pengendalian internal atas pelaporan keuangan dari scoping hingga surat asersi Direksi.",
    totalTime: "P90D",
    tool: [
      "Platform Manajemen Risiko GRC Integra",
      "Sistem ERP Terkonsolidasi"
    ],
    supply: [
      "Bagan Akun Korporat (Chart of Accounts)",
      "Piagam Satuan Pengawasan Intern"
    ],
    steps: [
      {
        position: 1,
        name: "Penentuan Materialitas dan Scoping Akun Keuangan",
        text: "Hitung ambang batas materialitas kuantitatif (persentase aset atau laba sebelum pajak) dan identifikasi akun-akun signifikan beserta entitas anak yang masuk konsolidasi."
      },
      {
        position: 2,
        name: "Dokumentasi Proses Bisnis dan Matriks RCM",
        text: "Susun diagram alir proses bisnis (flowchart) serta dokumentasikan Risk and Control Matrix (RCM) yang mencakup asersi keberadaan, kelengkapan, penilaian, hak, dan penyajian."
      },
      {
        position: 3,
        name: "Pengujian Kecukupan Desain Kontrol (Test of Design)",
        text: "Laksanakan walkthrough (Test of One) bersama pemilik kontrol di Lini 1 untuk memverifikasi bahwa rancangan kontrol mampu mencegah salah saji material."
      },
      {
        position: 4,
        name: "Pengujian Efektivitas Pengoperasian Kontrol (Test of Operating Effectiveness)",
        text: "Lakukan pengujian sampel transaksi sepanjang tahun buku menggunakan parameter Tabel 22 SK-5 dan evaluasi konsistensi bukti otorisasi."
      },
      {
        position: 5,
        name: "Remediasi Defisiensi dan Penyusunan Surat Asersi Direksi",
        text: "Perbaiki kelemahan kontrol sebelum cut-off audit eksternal, susun deficiency log penutup, dan siapkan draf Surat Asersi Pengendalian Internal untuk ditandatangani Direksi."
      }
    ]
  }
};
