import React, { useState } from "react";
import { 
  Calculator, 
  ChevronRight, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  FileSpreadsheet, 
  ArrowRight, 
  Layers,
  HelpCircle,
  Info
} from "lucide-react";
import FaqSection from "../FaqSection";
import { ROUTE_FAQS } from "../../data/faqData";

interface ToeCalculatorPageProps {
  onNavigate: (path: string) => void;
  onRequestDemo?: () => void;
}

interface FrequencyOption {
  id: string;
  name: string;
  periodLabel: string;
  populationRange: string;
  minSampleRange: string;
  recommendedSample: number;
  sampleDetail: string;
  auditGuidance: string;
}

const FREQUENCY_OPTIONS: FrequencyOption[] = [
  {
    id: "annual",
    name: "Tahunan (Annual)",
    periodLabel: "1 kali per tahun buku",
    populationRange: "1 kejadian",
    minSampleRange: "1 sampel",
    recommendedSample: 1,
    sampleDetail: "1 sampel representatif penutupan laporan keuangan tahunan.",
    auditGuidance: "Pengujian fokus pada ketepatan kalkulasi, dokumentasi otorisasi Direksi, dan kelengkapan lampiran pendukung."
  },
  {
    id: "quarterly",
    name: "Triwulanan (Quarterly)",
    periodLabel: "4 kali per tahun buku",
    populationRange: "4 kejadian",
    minSampleRange: "2 sampel",
    recommendedSample: 2,
    sampleDetail: "2 sampel dari total 4 kuartal (disarankan kuartal tengah dan kuartal akhir).",
    auditGuidance: "Pilih sampel dari periode dengan aktivitas transaksi paling signifikan untuk menguji konsistensi pengendalian."
  },
  {
    id: "monthly",
    name: "Bulanan (Monthly)",
    periodLabel: "12 kali per tahun buku",
    populationRange: "12 kejadian",
    minSampleRange: "2 sampai 5 sampel",
    recommendedSample: 4,
    sampleDetail: "2 sampai 5 sampel (umumnya 4 sampel mewakili kuartal 1, 2, 3, dan penutupan tahun).",
    auditGuidance: "Pastikan sampel mencakup bulan dengan volume tinggi atau periode penutupan semester."
  },
  {
    id: "weekly",
    name: "Mingguan (Weekly)",
    periodLabel: "52 kali per tahun buku",
    populationRange: "52 kejadian",
    minSampleRange: "5 sampai 15 sampel",
    recommendedSample: 10,
    sampleDetail: "5 sampai 15 sampel (standar industri merekomendasikan 10 sampel).",
    auditGuidance: "Gunakan metode sampling acak atau interval sistematis untuk mencakup keseluruhan periode berjalan."
  },
  {
    id: "daily",
    name: "Harian (Daily)",
    periodLabel: "Sekitar 250 hari kerja per tahun",
    populationRange: "250 kejadian",
    minSampleRange: "25 sampai 40 sampel",
    recommendedSample: 30,
    sampleDetail: "25 sampai 40 sampel (standar moderat adalah 30 sampel representatif).",
    auditGuidance: "Sebar sampel pada hari kerja normal, awal bulan, dan hari-hari kritis menjelang penutupan laporan keuangan."
  },
  {
    id: "multiple_daily",
    name: "Berulang Kali Sehari (Multiple Times Daily)",
    periodLabel: "Ratusan hingga ribuan transaksi per tahun",
    populationRange: "> 250 kejadian",
    minSampleRange: "25 sampai 60 sampel",
    recommendedSample: 40,
    sampleDetail: "25 sampai 60 sampel (standar audit BUMN merekomendasikan 40 sampel).",
    auditGuidance: "Bila kontrol dilaksanakan secara manual oleh staf operasional, terapkan teknik sampling acak representatif."
  }
];

export default function ToeCalculatorPage({ onNavigate, onRequestDemo }: ToeCalculatorPageProps) {
  const [selectedFreqId, setSelectedFreqId] = useState<string>("monthly");
  const [controlType, setControlType] = useState<"manual" | "automated">("manual");

  const currentOption = FREQUENCY_OPTIONS.find((opt) => opt.id === selectedFreqId) || FREQUENCY_OPTIONS[2];

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
          <button 
            onClick={() => onNavigate("/")} 
            className="hover:text-slate-200 transition-colors focus:outline-none"
          >
            Beranda
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-blue-400 font-medium">Kalkulator Sampel TOE (Tabel 22)</span>
        </nav>

        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Alat Bantu Audit Regulasi SK-5 BUMN
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Kalkulator Ukuran Sampel Pengujian Kontrol TOE (Tabel 22)
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hitung rekomendasi ukuran sampel minimum untuk pengujian efektivitas operasi kontrol (Test of Operating Effectiveness) secara presisi berdasarkan standar normatif Tabel 22 Surat Keputusan Menteri BUMN Nomor SK-5/DKU.MBU/11/2024.
          </p>
        </div>

        {/* Main Grid: Calculator & Results Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Input Form (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Parameter Pengujian Kontrol
              </h2>

              {/* Control Nature Selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Sifat Aktivitas Kontrol
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setControlType("manual")}
                    className={`px-4 py-2.5 rounded-lg text-xs font-semibold text-center transition-colors border ${
                      controlType === "manual"
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-[#0b0f19] border-slate-800 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    Kontrol Manual
                  </button>
                  <button
                    type="button"
                    onClick={() => setControlType("automated")}
                    className={`px-4 py-2.5 rounded-lg text-xs font-semibold text-center transition-colors border ${
                      controlType === "automated"
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-[#0b0f19] border-slate-800 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    Kontrol Otomatis (ITAC)
                  </button>
                </div>
              </div>

              {/* Frequency Selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Frekuensi Pelaksanaan Kontrol
                </label>
                <div className="space-y-2">
                  {FREQUENCY_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedFreqId(opt.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-xs font-medium flex justify-between items-center transition-colors border ${
                        selectedFreqId === opt.id
                          ? "bg-blue-950/60 border-blue-500 text-white"
                          : "bg-[#0b0f19] border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span>{opt.name}</span>
                      <span className="text-[11px] text-slate-400 font-mono">{opt.minSampleRange}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Rujukan resmi: SK-5/DKU.MBU/11/2024 Lampiran Tabel 22</span>
            </div>
          </div>

          {/* Right Column: Calculation Result Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-[#cca43b] uppercase tracking-wider block mb-1">
                    Hasil Rekomendasi Sampling
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {currentOption.name}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                  Populasi: {currentOption.populationRange}
                </div>
              </div>

              {controlType === "automated" ? (
                /* Special Guidance for Automated ITAC Controls */
                <div className="bg-blue-950/40 border border-blue-800/60 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm mb-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    Kaidah Pengujian Kontrol Otomatis (ITAC)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Untuk pengendalian yang sepenuhnya diotomasi oleh sistem aplikasi (IT Application Control), pengujian cukup dilakukan pada <strong>1 sampel transaksi</strong> dengan syarat kontrol umum teknologi informasi (ITGC) yang menaunginya telah teruji efektif.
                  </p>
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>• Bila ITGC belum teruji efektif, kontrol otomatis diperlakukan seperti kontrol manual.</p>
                    <p>• Pengujian wajib memverifikasi konfigurasi parameter sistem dan logika bisnis kode program.</p>
                  </div>
                </div>
              ) : (
                /* Manual Control Calculation Display */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0b0f19] border border-slate-800 rounded-lg p-5">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Rentang Sampel Normatif
                    </div>
                    <div className="text-3xl font-extrabold text-blue-400 mb-1">
                      {currentOption.minSampleRange}
                    </div>
                    <p className="text-xs text-slate-400">
                      Batas minimum regulasi SK-5
                    </p>
                  </div>

                  <div className="bg-[#0b0f19] border border-slate-800 rounded-lg p-5">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Sampel Rekomendasi DSI
                    </div>
                    <div className="text-3xl font-extrabold text-[#cca43b] mb-1">
                      {currentOption.recommendedSample} Sampel
                    </div>
                    <p className="text-xs text-slate-400">
                      Aman untuk audit eksternal KAP & BPK
                    </p>
                  </div>
                </div>
              )}

              {/* Zero Deviation Rule Warning */}
              <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#cca43b] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-200 mb-1">
                      Prinsip Toleransi Deviasi Nol (Zero Tolerable Deviation)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Ukuran sampel pada Tabel 22 didasarkan pada tingkat penyimpangan yang dapat ditoleransi sebesar 0 persen. Jika dalam pengujian ditemukan <strong>1 saja penyimpangan bukti kerja</strong>, aktivitas pengendalian langsung disimpulkan tidak efektif dalam operasi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audit Guidance Notes */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Panduan Pemilihan Sampel Representatif
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentOption.sampleDetail} {currentOption.auditGuidance}
                </p>
              </div>
            </div>

            {/* In-Card CTA to GRC Integra */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-white">Kelola Ribuan Sampel Kontrol Otomatis?</p>
                <p className="text-xs text-slate-400">GRC Integra menghitung dan melacak kertas kerja pengujian tanpa spreadsheet.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onRequestDemo) {
                    onRequestDemo();
                  } else {
                    onNavigate("/platform/grc-integra");
                  }
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Lihat Platform GRC Integra</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Full Table 22 Reference Section */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 mb-16">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Matriks Lengkap Tabel 22 Regulasi SK-5/DKU.MBU/11/2024
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Kutipan normatif tabel ukuran sampel pengujian kontrol manual untuk auditor internal BUMN, Satuan Pengawasan Intern (SPI), dan penguji Lini 1 & Lini 2.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0b0f19] text-slate-300 font-semibold">
                  <th className="py-3 px-4">Frekuensi Kontrol</th>
                  <th className="py-3 px-4">Populasi Keterjadian</th>
                  <th className="py-3 px-4">Rentang Sampel Minimum</th>
                  <th className="py-3 px-4">Tingkat Deviasi Ditoleransi</th>
                  <th className="py-3 px-4">Tindakan Jika Ada 1 Deviasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {FREQUENCY_OPTIONS.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-medium text-white">{row.name}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">{row.populationRange}</td>
                    <td className="py-3 px-4 font-mono font-bold text-blue-400">{row.minSampleRange}</td>
                    <td className="py-3 px-4 font-mono text-emerald-400">0% (Nol Deviasi)</td>
                    <td className="py-3 px-4 text-amber-300">Kontrol Tidak Efektif</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection
          items={ROUTE_FAQS["/kalkulator-sampel-toe"]}
          badge="FAQ Sampling Audit & Tabel 22"
          title="Pertanyaan Seputar Pengujian Sampel TOE"
          subtitle="Panduan teknis bagi auditor internal dan konsultan mengenai ukuran sampel minimum, deviasi kontrol, dan pengujian sistem otomatis."
        />

        {/* Bottom Lead Banner */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            Percepat Kepatuhan Audit ICOFR BUMN Bersama Kami
          </h3>
          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Daya Solusi Integra menyediakan konsultansi perancangan RCM, metodologi sampling Tabel 22, dan platform perangkat lunak GRC Integra untuk kepatuhan penuh regulasi BUMN.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate("/layanan/icofr-bumn")}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
            >
              Layanan Konsultansi ICOFR
            </button>
            <button
              onClick={() => onNavigate("/glosarium")}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-colors"
            >
              Buka Glosarium Kepatuhan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
