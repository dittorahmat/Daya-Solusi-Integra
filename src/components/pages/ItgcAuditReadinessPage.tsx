import React from "react";
import { 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Key, 
  RefreshCw, 
  FileCheck, 
  ChevronRight,
  Database
} from "lucide-react";
import GlossaryTooltip from "../GlossaryTooltip";

interface ServicePageProps {
  onNavigate: (path: string) => void;
  onOpenAdvisor: () => void;
}

export default function ItgcAuditReadinessPage({ onNavigate, onOpenAdvisor }: ServicePageProps) {
  React.useEffect(() => {
    document.title = "Konsultan ITGC & Kesiapan Audit TI Perbankan & BUMN | Daya Solusi Integra";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080c15] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <li>
              <button onClick={() => onNavigate("/")} className="hover:text-white transition-colors">
                Beranda
              </button>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li>
              <span className="text-slate-400">Layanan</span>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li className="text-bumn-gold font-semibold">ITGC & Audit Readiness</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Standar COBIT 2019, ISO 27001 & POJK 11/2022</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              Evaluasi <span className="text-bumn-gold">ITGC & Kesiapan Audit</span> Sistem Keuangan
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              Audit kontrol umum teknologi informasi (<GlossaryTooltip acronym="ITGC">ITGC</GlossaryTooltip>) untuk menjamin keandalan data finansial pada sistem perbankan (Core Banking) dan ERP korporasi. Kami mengidentifikasi celah hak akses istimewa, segregasi tugas (<GlossaryTooltip acronym="SOD">SoD</GlossaryTooltip>), serta proses manajemen perubahan agar kebal terhadap temuan audit eksternal.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("/#contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 active:scale-[0.98] rounded-xl transition-all cursor-pointer border border-blue-400/20 shadow-sm"
              >
                Jadwalkan Audit Assessment ITGC
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenAdvisor}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all hover:bg-slate-800"
              >
                Diskusi dengan AI Consultant
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
              <Lock className="w-4 h-4 text-bumn-gold" />
              4 Domain Kunci ITGC
            </h3>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Key className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Access to Programs and Data:</strong> Pengelolaan IAM, otorisasi privileged access, dan pencegahan konflik SoD.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <RefreshCw className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Change Management:</strong> Audit pengujian User Acceptance Testing (UAT) dan rilis kode ke production.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Database className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Computer Operations:</strong> Penjadwalan batch job pelaporan, backup data, dan prosedur pemulihan bencana (BCP/DRP).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Program Development:</strong> Standar SDLC dan kontrol implementasi sistem baru.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ingin Memastikan Sistem TI Kebal Temuan Audit?
            </h3>
            <p className="text-sm text-slate-300">
              Daya Solusi Integra menyediakan gap assessment dan simulasi mock audit ITGC sebelum jadwal audit resmi BPK atau KAP.
            </p>
          </div>
          <button
            onClick={() => onNavigate("/#contact")}
            className="px-6 py-3.5 bg-bumn-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            Hubungi Konsultan TI
          </button>
        </div>

      </div>
    </div>
  );
}
