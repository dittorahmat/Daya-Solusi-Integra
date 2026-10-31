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
  Info,
  Server,
  ArrowUpRight,
  ExternalLink,
  Cpu
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

  // Structured data (JSON-LD) for this route is served solely from the
  // prerendered HTML snapshot (DataCatalog #catalog). No client injection
  // to avoid duplicate entities.

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
    <div className="w-full bg-[#ffffff] min-h-screen text-slate-900 py-12 md:py-20">
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
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-200 text-bumn-blue text-xs font-semibold uppercase tracking-wider mb-4">
            <FileSpreadsheet className="w-3.5 h-3.5 text-bumn-gold" />
            Regulatory Toolkit &amp; Working Papers Hub
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Template Kertas Kerja Kepatuhan ICOFR SK-5 BUMN
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
            Standar arsitektur kertas kerja bagi Satuan Pengawasan Intern (SPI), Manajemen Risiko, dan Tim Keuangan BUMN: struktur Risk &amp; Control Matrix (RCM), checklist Entity-Level Control (ELC), dan format pengujian TOE Tabel 22 serta verifikasi ITAC ERP.
          </p>
          <div className="text-xs text-slate-600 font-mono bg-slate-100 border border-slate-200 rounded-lg p-3 inline-block">
            Rujukan Regulasi: SK-5/DKU.MBU/11/2024 jo. PER-2/MBU/03/2023 | Kerangka Kerja COSO 2013 | Petunjuk Teknis Juknis ICOFR
          </div>
        </div>

        {/* Official Navigation Callout Bar (SK-5 / GRC Integra / Layanan ICOFR) */}
        <section aria-label="Navigasi Resmi Kepatuhan SK-5 dan Solusi Platform" className="mb-14">
          <div className="bg-gradient-to-r from-blue-50/80 via-white to-amber-50/40 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-bumn-blue text-xs font-bold font-mono border border-blue-200">
                    SK-5/DKU.MBU/11/2024 PDF &amp; Juknis
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Kementerian BUMN RI</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Transisi dari Spreadsheet Manual ke Otomasi Kepatuhan GRC Integra
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gunakan template kertas kerja ini untuk penyusunan awal atau migrasikan langsung ke sistem <strong>GRC Integra</strong> untuk pengujian efektivitas pengendalian otomatis, pembagian peran Tiga Lini, dan pembuatan asersi direksi ber-QR Code.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <button
                  onClick={() => onNavigate("/layanan/icofr-bumn")}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-bumn-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-amber-300" />
                  <span>Layanan Konsultasi ICOFR</span>
                </button>
                <button
                  onClick={() => onNavigate("/platform/grc-integra")}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Server className="w-3.5 h-3.5 text-bumn-blue" />
                  <span>Platform GRC Integra</span>
                </button>
                <button
                  onClick={() => onNavigate("/regulasi")}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Pusat Regulasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Artifact Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div 
            onClick={() => setActiveTab("rcm")}
            className={`cursor-pointer rounded-xl p-6 border transition-all ${
              activeTab === "rcm" 
                ? "bg-blue-50 border-blue-500/80 shadow-lg shadow-blue-950/40" 
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#cca43b] px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/60">
                Artefak 01
              </span>
              <Table className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Template RCM Standar SK-5</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
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
                ? "bg-blue-50 border-blue-500/80 shadow-lg shadow-blue-950/40" 
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#cca43b] px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/60">
                Artefak 02
              </span>
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Checklist ELC 17 Prinsip COSO</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
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
                ? "bg-blue-50 border-blue-500/80 shadow-lg shadow-blue-950/40" 
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#cca43b] px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/60">
                Artefak 03
              </span>
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Kertas Kerja TOE Tabel 22</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
              Format lembar pengujian efektivitas operasional, rentang sampel minimum SK-5, dan evaluasi defisiensi kontrol.
            </p>
            <div className="text-[11px] font-mono text-blue-400 flex items-center gap-1 font-medium">
              <span>Lihat Struktur Kolom</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Interactive Structure Preview Ledger */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-20 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-bumn-blue mb-1">
                <span>Pratinjau Arsitektur Format Data:</span>
                <span className="uppercase font-bold text-bumn-gold">
                  {activeTab === "rcm" ? "Risk and Control Matrix (RCM)" : activeTab === "elc" ? "Entity-Level Control (ELC)" : "Test of Operating Effectiveness (TOE)"}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
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
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                RCM adalah tulang punggung kepatuhan ICOFR yang mendokumentasikan kaitan antara akun laporan keuangan material, risiko salah saji, kontrol mitigasi, serta pembagian asersi manajemen.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Kode Kontrol</th>
                      <th className="py-3 px-4 font-semibold">Sub-Proses / Akun</th>
                      <th className="py-3 px-4 font-semibold">Deskripsi Aktivitas Kontrol</th>
                      <th className="py-3 px-4 font-semibold">Asersi Manajemen</th>
                      <th className="py-3 px-4 font-semibold">Tipe &amp; Frekuensi</th>
                      <th className="py-3 px-4 font-semibold">Metode Uji</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-bumn-gold font-semibold whitespace-nowrap">CTL-REV-01</td>
                      <td className="py-3 px-4 font-medium text-slate-900">Pendapatan &amp; Piutang</td>
                      <td className="py-3 px-4 text-slate-600">Pencocokan tiga arah (Three-Way Matching) antara Surat Jalan, Faktur Penjualan, dan Berita Acara Serah Terima (BAST).</td>
                      <td className="py-3 px-4 font-mono text-bumn-blue">E, C, V</td>
                      <td className="py-3 px-4 whitespace-nowrap">Preventif | Harian</td>
                      <td className="py-3 px-4 whitespace-nowrap">Inspeksi &amp; Reperformance</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-bumn-gold font-semibold whitespace-nowrap">CTL-FA-02</td>
                      <td className="py-3 px-4 font-medium text-slate-900">Aset Tetap &amp; Properti</td>
                      <td className="py-3 px-4 text-slate-600">Rekonsiliasi berkala antara register aktiva tetap fisik di lapangan dengan saldo buku besar umum (General Ledger).</td>
                      <td className="py-3 px-4 font-mono text-bumn-blue">E, R, V</td>
                      <td className="py-3 px-4 whitespace-nowrap">Detektif | Bulanan</td>
                      <td className="py-3 px-4 whitespace-nowrap">Walkthrough &amp; Inspeksi Dokumen</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-bumn-gold font-semibold whitespace-nowrap">CTL-ITGC-03</td>
                      <td className="py-3 px-4 font-medium text-slate-900">Sistem IT / ERP Finansial</td>
                      <td className="py-3 px-4 text-slate-600">Tinjauan segregasi tugas (Segregation of Duties) hak akses pengguna aplikasi pelaporan keuangan setiap akhir kuartal.</td>
                      <td className="py-3 px-4 font-mono text-bumn-blue">E, C</td>
                      <td className="py-3 px-4 whitespace-nowrap">Detektif | Triwulanan</td>
                      <td className="py-3 px-4 whitespace-nowrap">Pengujian Log Sistem (ITGC)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 font-normal flex items-start gap-3">
                <Info className="w-4 h-4 text-bumn-blue shrink-0 mt-0.5" />
                <span>
                  <strong>Catatan Asersi:</strong> E = Existence / Occurence, C = Completeness, V = Valuation / Allocation, R = Rights &amp; Obligations, P = Presentation &amp; Disclosure.
                </span>
              </div>
            </div>
          )}

          {activeTab === "elc" && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Checklist ELC mengevaluasi iklim tata kelola dan integritas korporasi secara makro. Dalam SK-5 Kementerian BUMN, defisiensi pada level ELC dapat langsung membatalkan asersi efektivitas pengendalian secara keseluruhan.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Pilar Komponen COSO</th>
                      <th className="py-3 px-4 font-semibold">Prinsip Kunci SK-5</th>
                      <th className="py-3 px-4 font-semibold">Fokus Pengujian Dokumen Bukti</th>
                      <th className="py-3 px-4 font-semibold">Kriteria Efektivitas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900 whitespace-nowrap">Control Environment</td>
                      <td className="py-3 px-4 text-bumn-gold font-mono">Prinsip 1 &amp; 2</td>
                      <td className="py-3 px-4 text-slate-600">Pakta integritas Direksi/Dekom, piagam Komite Audit, dan sosialisasi whistleblowing system (WBS).</td>
                      <td className="py-3 px-4 text-emerald-600 font-medium">Ada, Aktif &amp; Tersosialisasi</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900 whitespace-nowrap">Risk Assessment</td>
                      <td className="py-3 px-4 text-bumn-gold font-mono">Prinsip 6 &amp; 8</td>
                      <td className="py-3 px-4 text-slate-600">Profil risiko salah saji material, penilaian risiko kecurangan (fraud risk assessment) tahun buku berjalan.</td>
                      <td className="py-3 px-4 text-emerald-600 font-medium">Dimutakhirkan Tahunan</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900 whitespace-nowrap">Monitoring Activities</td>
                      <td className="py-3 px-4 text-bumn-gold font-mono">Prinsip 16 &amp; 17</td>
                      <td className="py-3 px-4 text-slate-600">Laporan evaluasi berkala Lini 2, charter audit SPI, serta pemantauan tindak lanjut rekomendasi audit KAP/BPK.</td>
                      <td className="py-3 px-4 text-emerald-600 font-medium">Tercatat &amp; Terlaporkan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "toe" && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Kertas kerja TOE mendokumentasikan pengambilan sampel acak sesuai kaidah normatif Tabel 22 Kementerian BUMN dengan toleransi 0 deviasi (Zero Deviation Rule) untuk memastikan keterandalan asersi laporan keuangan.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Frekuensi Kontrol</th>
                      <th className="py-3 px-4 font-semibold">Populasi Tahunan</th>
                      <th className="py-3 px-4 font-semibold">Batas Sampel Minimum</th>
                      <th className="py-3 px-4 font-semibold">Toleransi Deviasi</th>
                      <th className="py-3 px-4 font-semibold">Simpulan Hasil Audit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">Tahunan (Annual)</td>
                      <td className="py-3 px-4 text-slate-600">1 kali</td>
                      <td className="py-3 px-4 font-mono text-bumn-gold">1 sampel</td>
                      <td className="py-3 px-4 font-mono text-emerald-600">0 deviasi</td>
                      <td className="py-3 px-4 text-slate-700">Efektif / Tidak Efektif</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">Bulanan (Monthly)</td>
                      <td className="py-3 px-4 text-slate-600">12 kali</td>
                      <td className="py-3 px-4 font-mono text-bumn-gold">2 s.d. 5 sampel</td>
                      <td className="py-3 px-4 font-mono text-emerald-600">0 deviasi</td>
                      <td className="py-3 px-4 text-slate-700">Efektif / Tidak Efektif</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">Harian (Daily)</td>
                      <td className="py-3 px-4 text-slate-600">250 kali</td>
                      <td className="py-3 px-4 font-mono text-bumn-gold">20 s.d. 40 sampel</td>
                      <td className="py-3 px-4 font-mono text-emerald-600">0 deviasi</td>
                      <td className="py-3 px-4 text-slate-700">Efektif / Tidak Efektif</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* Special Callout: IT Application Controls (ITAC) ERP & Test of One */}
        <section aria-label="Panduan Pengujian IT Application Controls" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-100 text-bumn-blue font-mono text-xs font-bold border border-blue-200">
                  ITAC ERP &amp; Test of One
                </span>
                <span className="text-xs text-slate-500 font-medium">Lampiran Juknis SK-5</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Kaidah Pengujian Kontrol Otomatis ERP (IT Application Controls)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Berbeda dengan kontrol manual yang membutuhkan puluhan sampel acak (Tabel 22), kontrol otomatis sistem (ITAC) seperti *three-way match* toleransi nilai faktur pada SAP atau Oracle cukup diuji dengan <strong>1 sampel (Test of One)</strong>, dengan prasyarat integritas kontrol umum teknologi informasi (ITGC) telah terbukti efektif.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Prasyarat Mutlak: ITGC Change Management &amp; Akses Efektif
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Strategi Controls Reliance Auditor Eksternal
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate("/layanan/itgc-audit-readiness")}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-bumn-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Audit Kesiapan ITGC &amp; ITAC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate("/kalkulator-sampel-toe")}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Kalkulator Sampel Tabel 22</span>
              </button>
            </div>
          </div>
        </section>

        {/* Comparison: Spreadsheet Manual vs Platform GRC Integra */}
        <div className="bg-slate-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-20 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Mengapa Pengelolaan Spreadsheet Manual Berisiko Tinggi Saat Audit BUMN?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                Mengelola ratusan baris RCM di lembar kerja Excel rentan terhadap konflik versi dokumen (*version control failure*), rumus yang rusak, bukti uji yang terselip, dan minimnya jejak audit digital (*digital audit trail*). Platform <strong>GRC Integra</strong> mengotomasi seluruh siklus ini dengan repositori RCM terpusat, pengujian Lini 2 kolaboratif, dan asersi digital ber-QR Code yang terbukti lolos pemeriksaan KAP dan BPK.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate("/platform/grc-integra")}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-bumn-blue hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Pelajari Platform GRC Integra untuk Pengganti Spreadsheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate("/layanan/icofr-bumn")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span>Layanan Konsultasi ICOFR BUMN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture: Request Template Package Form */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-bumn-blue text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
              <Download className="w-3.5 h-3.5 text-bumn-gold" />
              Akses Berkas Lengkap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Permohonan Paket Template Spreadsheet Resmi (XLSX)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
              Isi data di bawah ini untuk menerima paket file kerja terpadu (RCM SK-5, Checklist ELC COSO, dan Kertas Kerja TOE) langsung ke surel resmi instansi Anda.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">Permohonan Telah Disiapkan</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Klien email Anda akan otomatis terbuka dengan draf permohonan terstruktur menuju <strong>marketing@dsintegra.co.id</strong>. Tim konsultan kami akan memverifikasi dan mengirimkan paket spreadsheet ke surel Anda dalam 1x24 jam kerja.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 font-mono">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Pratama, SE, Ak."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 font-mono">Nama Instansi / BUMN *</label>
                  <input
                    type="text"
                    required
                    value={formData.bumnName}
                    onChange={(e) => setFormData({ ...formData, bumnName: e.target.value })}
                    placeholder="Contoh: PT Kereta Api Indonesia (Persero)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 font-mono">Surel Perusahaan / BUMN *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.co.id"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 font-mono">Nomor WhatsApp / Kontak</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5 font-mono">Peran / Unit Kerja</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="SPI / Internal Audit">Satuan Pengawasan Intern (SPI / Internal Audit)</option>
                  <option value="Manajemen Risiko & Kepatuhan">Divisi Manajemen Risiko &amp; Kepatuhan (Lini 2)</option>
                  <option value="Akuntansi & Keuangan">Divisi Akuntansi / Pelaporan Keuangan (Lini 1)</option>
                  <option value="Komite Audit / Dewan Komisaris">Komite Audit / Dewan Komisaris</option>
                  <option value="Konsultan / Eksternal Auditor">Konsultan / Auditor Eksternal</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={formData.interestDemo}
                    onChange={(e) => setFormData({ ...formData, interestDemo: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Saya juga tertarik dijadwalkan sesi demonstrasi langsung platform software GRC Integra</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-lg bg-bumn-blue hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
