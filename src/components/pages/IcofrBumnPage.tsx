import React from "react";
import { 
  ShieldCheck, 
  FileCheck2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileSpreadsheet, 
  Scale, 
  Lock, 
  BookOpen, 
  ChevronRight,
  Workflow,
  FileUp
} from "lucide-react";
import GlossaryTooltip from "../GlossaryTooltip";
import FaqSection from "../FaqSection";
import { ROUTE_FAQS } from "../../data/faqData";

import Breadcrumbs from "../Breadcrumbs";

interface ServicePageProps {
  onNavigate: (path: string) => void;
  onOpenAdvisor: () => void;
}

export default function IcofrBumnPage({ onNavigate, onOpenAdvisor }: ServicePageProps) {
  React.useEffect(() => {
    document.title = "Konsultan ICOFR BUMN & Evaluasi Pengendalian Internal SK-5 | Daya Solusi Integra";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080c15] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Layanan", path: "/#services" },
              { label: "ICOFR BUMN & SK-5" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Regulasi Mandatori Kementerian BUMN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              Konsultasi & Implementasi <span className="text-bumn-gold">ICOFR BUMN</span> Berbasis SK-5
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              Pendampingan holistik penerapan <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> (Internal Control over Financial Reporting) sesuai Surat Edaran dan Regulasi Kementerian BUMN <strong className="text-white">SK-5/DKU.MBU/11/2024</strong>. Kami menyusun Risk and Control Matrix (RCM), melaksanakan walkthrough pengujian kontrol, hingga memvalidasi asersi manajemen Direksi demi opini wajar tanpa pengecualian (WTP).
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("/#contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 active:scale-[0.98] rounded-xl transition-all cursor-pointer border border-blue-400/20 shadow-sm"
              >
                Konsultasikan Kebutuhan ICOFR
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/platform/grc-integra")}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all hover:bg-slate-800"
              >
                Lihat Software GRC Integra
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
              <Scale className="w-4 h-4 text-bumn-gold" />
              Landasan Kepatuhan Resmi
            </h3>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>SK-5/DKU.MBU/11/2024:</strong> Panduan Teknis Pengendalian Internal atas Pelaporan Keuangan BUMN.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>PER-2/MBU/03/2023:</strong> Tata Kelola dan Aktivitas Korporasi Signifikan BUMN.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>COSO Internal Control 2013:</strong> Kerangka Terintegrasi 5 Komponen dan 17 Prinsip Pengendalian.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Tahapan Metodologi ICOFR */}
        <div className="mb-20 text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Metodologi Pendampingan Siklus Hidup ICOFR
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Setiap langkah terstruktur rapi untuk memastikan kesiapan audit internal SPI, BPKP, BPK, dan Kantor Akuntan Publik (KAP Tier-1).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Scoping & Materialitas",
                desc: "Penentuan batas materialitas akun keuangan konsolidasi dan identifikasi siklus transaksi signifikan tingkat entitas."
              },
              {
                step: "02",
                title: "Walkthrough TOD",
                desc: "Pengujian rancangan kontrol (Test of Design) berbasis bukti nyata transaksi tunggal (Test of One) bersama Lini 2."
              },
              {
                step: "03",
                title: "Pengujian Operasi TOE",
                desc: "Pengambilan sampel acak berbasis frekuensi kontrol menggunakan Tabel 22 Regulasi BUMN untuk uji konsistensi pelaksanaan."
              },
              {
                step: "04",
                title: "Remediasi & Asersi",
                desc: "Perumusan deficiency sheet, rencana perbaikan kontrol, dan penyusunan draf surat asersi resmi Direksi (Lampiran 11)."
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-bumn-gold block">{phase.step}</span>
                <h3 className="text-base font-bold text-white">{phase.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          {/* Architectural Callout: BPM Workflow Editor Integration */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0d1527] border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                <Workflow className="w-4 h-4 text-blue-400" />
                <span>Teknologi Dokumentasi Proses: Lampiran 3 SK-5</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Modernisasi Dokumentasi SOP Eksisting: Hindari Menggambar Ulang dari Awal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Organisasi Anda sudah memiliki ratusan file alur kerja format PDF, JPG, atau PNG? Fitur Smart Auto-Draw di <a href="/platform/bpm-workflow-editor" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/40">BPM Workflow Editor GRC Integra</a> merekonstruksi file eksisting menjadi kanvas diagram alir BPMN interaktif yang langsung terhubung ke matriks risiko dan titik kontrol (RCM).
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/platform/bpm-workflow-editor"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-lg shadow-blue-600/20"
              >
                <span>Lihat BPM Workflow Editor</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection
          items={ROUTE_FAQS["/layanan/icofr-bumn"]}
          badge="FAQ Konsultasi & Regulasi SK-5"
          title="Pertanyaan Seputar Layanan & Kepatuhan ICOFR"
          subtitle="Jawaban terperinci mengenai kewajiban pelaporan, metodologi walkthrough TOD, pengujian TOE, dan sertifikasi asersi Direksi."
        />

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Siap Memastikan Kepatuhan Regulasi SK-5 BUMN?
            </h3>
            <p className="text-sm text-slate-300">
              Jadwalkan sesi konsultasi awal dengan tim spesialis GRC & ICOFR Daya Solusi Integra atau diskusikan kebutuhan sistem Anda.
            </p>
          </div>
          <button
            onClick={() => onNavigate("/#contact")}
            className="px-6 py-3.5 bg-bumn-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            Hubungi Konsultan Kami
          </button>
        </div>

      </div>
    </div>
  );
}
