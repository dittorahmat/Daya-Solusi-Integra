import React, { useState } from "react";
import { 
  FileSpreadsheet, 
  Download, 
  Layers, 
  CheckCircle2, 
  Table, 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  FileText,
  AlertTriangle,
  Info
} from "lucide-react";
import Breadcrumbs from "../Breadcrumbs";

interface RegulatoryToolkitPageProps {
  onNavigate: (path: string) => void;
}

export default function RegulatoryToolkitPage({ onNavigate }: RegulatoryToolkitPageProps) {
  const [activeTab, setActiveTab] = useState<"rcm" | "elc" | "toe">("rcm");
  const [formData, setFormData] = useState({
    name: "",
    bumnName: "",
    email: "",
    phone: "",
    role: "SPI / Internal Audit",
    interestDemo: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DataCatalog",
        "@id": "https://dsintegra.co.id/toolkit-regulasi#catalog",
        "name": "Katalog Toolkit & Kertas Kerja Regulasi SK-5 BUMN",
        "url": "https://dsintegra.co.id/toolkit-regulasi",
        "description": "Kumpulan template kertas kerja standar audit kepatuhan ICOFR SK-5/DKU.MBU/11/2024: Template Risk & Control Matrix (RCM), Checklist ELC COSO, dan Kertas Kerja Pengujian Efektivitas (TOE).",
        "publisher": {
          "@type": "Organization",
          "name": "PT Daya Solusi Integra",
          "url": "https://dsintegra.co.id"
        },
        "dataset": [
          {
            "@type": "Dataset",
            "name": "Template Risk and Control Matrix (RCM) SK-5",
            "description": "Matriks pemetaan risiko salah saji material, asersi manajemen, frekuensi kontrol, dan prosedur pengujian TOD/TOE.",
            "fileFormat": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          },
          {
            "@type": "Dataset",
            "name": "Checklist Evaluasi Entity-Level Control (ELC) COSO",
            "description": "Kertas kerja pengujian pengendalian tingkat entitas mencakup 5 komponen dan 17 prinsip COSO Framework.",
            "fileFormat": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          },
          {
            "@type": "Dataset",
            "name": "Kertas Kerja Pengujian TOE Tabel 22 Kementerian BUMN",
            "description": "Panduan penentuan batas minimum sampel acak dan evaluasi defisiensi kontrol nol toleransi penyimpangan.",
            "fileFormat": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }
        ]
      }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.bumnName) return;

    const subject = encodeURIComponent(`Permohonan Paket Template Spreadsheet SK-5 : ${formData.bumnName}`);
    const body = encodeURIComponent(
      `Halo Tim Kemitraan PT Daya Solusi Integra,\n\n` +
      `Saya mengajukan permohonan pengiriman paket template resmi spreadsheet kepatuhan SK-5 BUMN (RCM, ELC, dan Kertas Kerja TOE Tabel 22).\n\n` +
      `Detail Pemohon:\n` +
      `- Nama Lengkap: ${formData.name}\n` +
      `- Instansi / BUMN: ${formData.bumnName}\n` +
      `- Unit / Jabatan: ${formData.role}\n` +
      `- Surel Resmi: ${formData.email}\n` +
      `- Nomor Kontak / WA: ${formData.phone || "-"}\n` +
      `- Minat Presentasi / Demo Platform GRC Integra: ${formData.interestDemo ? "Ya, Tertarik" : "Hanya Template"}\n\n` +
      `Mohon berkas template dapat dikirimkan ke surel tersebut. Terima kasih.`
    );

    window.location.href = `mailto:marketing@dsintegra.co.id?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Pusat Regulasi", path: "/regulasi" },
              { label: "Toolkit & Kertas Kerja SK-5" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#cca43b]" />
            Regulatory Toolkit &amp; Working Papers Hub
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Template Kertas Kerja Kepatuhan ICOFR SK-5 BUMN
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-6">
            Standar arsitektur kertas kerja bagi Satuan Pengawasan Intern (SPI), Manajemen Risiko, dan Tim Keuangan BUMN: struktur Risk &amp; Control Matrix (RCM), checklist Entity-Level Control (ELC), dan format pengujian TOE Tabel 22.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            Rujukan Regulasi: SK-5/DKU.MBU/11/2024 jo. PER-2/MBU/03/2023 | Kerangka Kerja COSO 2013
          </div>
        </div>

        {/* 3 Core Artifact Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div 
            onClick={() => setActiveTab("rcm")}
            className={`cursor-pointer rounded-xl p-6 border transition-all ${
              activeTab === "rcm" 
                ? "bg-[#0f1d38] border-blue-500/80 shadow-lg shadow-blue-950/40" 
                : "bg-[#0f172a] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#cca43b] px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/60">
                Artefak 01
              </span>
              <Table className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Template RCM Standar SK-5</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
              Matriks pemetaan risiko tingkat proses, asersi manajemen, tipe pengendalian (preventif/detektif), dan frekuensi uji.
            </p>
            <div className="text-[11px] font-mono text-blue-400 flex items-center gap-1 font-medium">
              <span>Lihat Struktur Kolom</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div 
            onClick={() => setActiveTab("elc")}
            className={`cursor-pointer rounded-xl p-6 border transition-all ${
              activeTab === "elc" 
                ? "bg-[#0f1d38] border-blue-500/80 shadow-lg shadow-blue-950/40" 
                : "bg-[#0f172a] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#cca43b] px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/60">
                Artefak 02
              </span>
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Checklist ELC 17 Prinsip COSO</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
              Kertas kerja evaluasi pengendalian tingkat entitas: lingkungan pengendalian, penilaian risiko, dan pemantauan Lini 2.
            </p>
            <div className="text-[11px] font-mono text-blue-400 flex items-center gap-1 font-medium">
              <span>Lihat Struktur Kolom</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div 
            onClick={() => setActiveTab("toe")}
            className={`cursor-pointer rounded-xl p-6 border transition-all ${
              activeTab === "toe" 
                ? "bg-[#0f1d38] border-blue-500/80 shadow-lg shadow-blue-950/40" 
                : "bg-[#0f172a] border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#cca43b] px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/60">
                Artefak 03
              </span>
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Kertas Kerja TOE Tabel 22</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
              Format lembar pengujian efektivitas operasional, rentang sampel minimum SK-5, dan evaluasi defisiensi kontrol.
            </p>
            <div className="text-[11px] font-mono text-blue-400 flex items-center gap-1 font-medium">
              <span>Lihat Struktur Kolom</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Interactive Structure Preview Ledger */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-20 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                <span>Pratinjau Arsitektur Format Data:</span>
                <span className="uppercase font-bold text-[#cca43b]">
                  {activeTab === "rcm" ? "Risk and Control Matrix (RCM)" : activeTab === "elc" ? "Entity-Level Control (ELC)" : "Test of Operating Effectiveness (TOE)"}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white">
                {activeTab === "rcm" 
                  ? "Arsitektur Kolom Risk & Control Matrix (RCM) SK-5" 
                  : activeTab === "elc" 
                  ? "Arsitektur Evaluasi Entity-Level Control (5 Komponen COSO)" 
                  : "Arsitektur Kertas Kerja Pengujian TOE & Evaluasi Defisiensi"}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Standar Format Terverifikasi
            </span>
          </div>

          {activeTab === "rcm" && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                RCM adalah tulang punggung kepatuhan ICOFR yang mendokumentasikan kaitan antara akun laporan keuangan material, risiko salah saji, kontrol mitigasi, serta pembagian asersi manajemen.
              </p>
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0b1329] border-b border-slate-800 text-slate-300 font-mono">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Kode Kontrol</th>
                      <th className="py-3 px-4 font-semibold">Sub-Proses / Akun</th>
                      <th className="py-3 px-4 font-semibold">Deskripsi Aktivitas Kontrol</th>
                      <th className="py-3 px-4 font-semibold">Asersi Manajemen</th>
                      <th className="py-3 px-4 font-semibold">Tipe &amp; Frekuensi</th>
                      <th className="py-3 px-4 font-semibold">Metode Uji</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300 font-light">
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-mono text-[#cca43b] font-semibold whitespace-nowrap">CTL-REV-01</td>
                      <td className="py-3 px-4 font-medium text-white">Pendapatan &amp; Piutang</td>
                      <td className="py-3 px-4 text-slate-400">Pencocokan tiga arah (Three-Way Matching) antara Surat Jalan, Faktur Penjualan, dan Berita Acara Serah Terima (BAST).</td>
                      <td className="py-3 px-4 font-mono text-blue-400">E, C, V</td>
                      <td className="py-3 px-4 whitespace-nowrap">Preventif | Harian</td>
                      <td className="py-3 px-4 whitespace-nowrap">Inspeksi &amp; Reperformance</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-mono text-[#cca43b] font-semibold whitespace-nowrap">CTL-FA-02</td>
                      <td className="py-3 px-4 font-medium text-white">Aset Tetap &amp; Properti</td>
                      <td className="py-3 px-4 text-slate-400">Rekonsiliasi berkala antara register aktiva tetap fisik di lapangan dengan saldo buku besar umum (General Ledger).</td>
                      <td className="py-3 px-4 font-mono text-blue-400">E, R, V</td>
                      <td className="py-3 px-4 whitespace-nowrap">Detektif | Bulanan</td>
                      <td className="py-3 px-4 whitespace-nowrap">Walkthrough &amp; Inspeksi Dokumen</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-mono text-[#cca43b] font-semibold whitespace-nowrap">CTL-ITGC-03</td>
                      <td className="py-3 px-4 font-medium text-white">Sistem IT / ERP Finansial</td>
                      <td className="py-3 px-4 text-slate-400">Tinjauan segregasi tugas (Segregation of Duties) hak akses pengguna aplikasi pelaporan keuangan setiap akhir kuartal.</td>
                      <td className="py-3 px-4 font-mono text-blue-400">E, C</td>
                      <td className="py-3 px-4 whitespace-nowrap">Detektif | Triwulanan</td>
                      <td className="py-3 px-4 whitespace-nowrap">Pengujian Log Sistem (ITGC)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-slate-300 font-light flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Catatan Asersi:</strong> E = Existence / Occurence, C = Completeness, V = Valuation / Allocation, R = Rights &amp; Obligations, P = Presentation &amp; Disclosure.
                </span>
              </div>
            </div>
          )}

          {activeTab === "elc" && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Checklist ELC mengevaluasi iklim tata kelola dan integritas korporasi secara makro. Dalam SK-5 Kementerian BUMN, defisiensi pada level ELC dapat langsung membatalkan asersi efektivitas pengendalian secara keseluruhan.
              </p>
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0b1329] border-b border-slate-800 text-slate-300 font-mono">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Pilar Komponen COSO</th>
                      <th className="py-3 px-4 font-semibold">Prinsip Kunci SK-5</th>
                      <th className="py-3 px-4 font-semibold">Fokus Pengujian Dokumen Bukti</th>
                      <th className="py-3 px-4 font-semibold">Kriteria Efektivitas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300 font-light">
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-medium text-white whitespace-nowrap">Control Environment</td>
                      <td className="py-3 px-4 text-[#cca43b] font-mono">Prinsip 1 &amp; 2</td>
                      <td className="py-3 px-4 text-slate-400">Pakta integritas Direksi/Dekom, piagam Komite Audit, dan sosialisasi whistleblowing system (WBS).</td>
                      <td className="py-3 px-4 text-emerald-400 font-medium">Ada, Aktif &amp; Tersosialisasi</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-medium text-white whitespace-nowrap">Risk Assessment</td>
                      <td className="py-3 px-4 text-[#cca43b] font-mono">Prinsip 6 &amp; 8</td>
                      <td className="py-3 px-4 text-slate-400">Profil risiko salah saji material, penilaian risiko kecurangan (fraud risk assessment) tahun buku berjalan.</td>
                      <td className="py-3 px-4 text-emerald-400 font-medium">Dimutakhirkan Tahunan</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-medium text-white whitespace-nowrap">Monitoring Activities</td>
                      <td className="py-3 px-4 text-[#cca43b] font-mono">Prinsip 16 &amp; 17</td>
                      <td className="py-3 px-4 text-slate-400">Laporan evaluasi berkala Lini 2, charter audit SPI, serta pemantauan tindak lanjut rekomendasi audit KAP/BPK.</td>
                      <td className="py-3 px-4 text-emerald-400 font-medium">Tercatat &amp; Terlaporkan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "toe" && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Kertas kerja TOE mendokumentasikan pengambilan sampel acak sesuai kaidah normatif Tabel 22 Kementerian BUMN dengan toleransi 0 deviasi (Zero Deviation Rule) untuk memastikan keterandalan asersi laporan keuangan.
              </p>
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0b1329] border-b border-slate-800 text-slate-300 font-mono">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Frekuensi Kontrol</th>
                      <th className="py-3 px-4 font-semibold">Populasi Tahunan</th>
                      <th className="py-3 px-4 font-semibold">Batas Sampel Minimum</th>
                      <th className="py-3 px-4 font-semibold">Toleransi Deviasi</th>
                      <th className="py-3 px-4 font-semibold">Simpulan Hasil Audit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300 font-light">
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-medium text-white">Tahunan (Annual)</td>
                      <td className="py-3 px-4 text-slate-400">1 kali</td>
                      <td className="py-3 px-4 font-mono text-[#cca43b]">1 sampel</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">0 deviasi</td>
                      <td className="py-3 px-4 text-slate-300">Efektif / Tidak Efektif</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-medium text-white">Bulanan (Monthly)</td>
                      <td className="py-3 px-4 text-slate-400">12 kali</td>
                      <td className="py-3 px-4 font-mono text-[#cca43b]">2 s.d. 5 sampel</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">0 deviasi</td>
                      <td className="py-3 px-4 text-slate-300">Efektif / Tidak Efektif</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-medium text-white">Harian (Daily)</td>
                      <td className="py-3 px-4 text-slate-400">250 kali</td>
                      <td className="py-3 px-4 font-mono text-[#cca43b]">20 s.d. 40 sampel</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">0 deviasi</td>
                      <td className="py-3 px-4 text-slate-300">Efektif / Tidak Efektif</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* Comparison: Spreadsheet Manual vs Platform GRC Integra */}
        <div className="bg-[#0d1527] border border-amber-900/40 rounded-2xl p-6 sm:p-8 mb-20 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-800 text-[#cca43b] shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Mengapa Pengelolaan Spreadsheet Manual Berisiko Tinggi Saat Audit BUMN?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                Mengelola ratusan baris RCM di lembar kerja Excel rentan terhadap konflik versi dokumen (*version control failure*), rumus yang rusak, bukti uji yang terselip, dan minimnya jejak audit digital (*digital audit trail*). Platform <strong>GRC Integra</strong> mengotomasi seluruh siklus ini dengan repositori RCM terpusat, pengujian Lini 2 kolaboratif, dan asersi digital ber-QR Code yang terbukti lolos pemeriksaan KAP dan BPK.
              </p>
              <button
                onClick={() => onNavigate("/platform/grc-integra")}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#cca43b] hover:text-amber-300 transition-colors"
              >
                <span>Pelajari Platform GRC Integra untuk Pengganti Spreadsheet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Lead Capture: Request Template Package Form */}
        <section className="bg-[#0f172a] border border-blue-900/60 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Download className="w-3.5 h-3.5 text-[#cca43b]" />
              Akses Berkas Lengkap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Permohonan Paket Template Spreadsheet Resmi (XLSX)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
              Isi data di bawah ini untuk menerima paket file kerja terpadu (RCM SK-5, Checklist ELC COSO, dan Kertas Kerja TOE) langsung ke surel resmi instansi Anda.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-blue-950/60 border border-blue-800 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Permohonan Telah Disiapkan</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Klien email Anda akan otomatis terbuka dengan draf permohonan terstruktur menuju <strong>marketing@dsintegra.co.id</strong>. Tim konsultan kami akan memverifikasi dan mengirimkan paket spreadsheet ke surel Anda dalam 1x24 jam kerja.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Pratama, SE, Ak."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Nama Instansi / BUMN *</label>
                  <input
                    type="text"
                    required
                    value={formData.bumnName}
                    onChange={(e) => setFormData({ ...formData, bumnName: e.target.value })}
                    placeholder="Contoh: PT Kereta Api Indonesia (Persero)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Surel Perusahaan / BUMN *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.co.id"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Nomor WhatsApp / Kontak</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Peran / Unit Kerja</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="SPI / Internal Audit">Satuan Pengawasan Intern (SPI / Internal Audit)</option>
                  <option value="Manajemen Risiko & Kepatuhan">Divisi Manajemen Risiko &amp; Kepatuhan (Lini 2)</option>
                  <option value="Akuntansi & Keuangan">Divisi Akuntansi / Pelaporan Keuangan (Lini 1)</option>
                  <option value="Komite Audit / Dewan Komisaris">Komite Audit / Dewan Komisaris</option>
                  <option value="Konsultan / Eksternal Auditor">Konsultan / Auditor Eksternal</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.interestDemo}
                    onChange={(e) => setFormData({ ...formData, interestDemo: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Saya juga tertarik dijadwalkan sesi demonstrasi langsung platform software GRC Integra</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-950/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Permohonan Paket Template Spreadsheet</span>
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
