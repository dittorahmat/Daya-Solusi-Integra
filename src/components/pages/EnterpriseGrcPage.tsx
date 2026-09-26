import React from "react";
import { 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Award, 
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react";
import GlossaryTooltip from "../GlossaryTooltip";

import Breadcrumbs from "../Breadcrumbs";

interface ServicePageProps {
  onNavigate: (path: string) => void;
  onOpenAdvisor: () => void;
}

export default function EnterpriseGrcPage({ onNavigate, onOpenAdvisor }: ServicePageProps) {
  React.useEffect(() => {
    document.title = "Konsultan GRC BUMN, Skor GCG & ISO 31000 Terintegrasi | Daya Solusi Integra";
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
              { label: "Enterprise GRC BUMN" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span>PER-5/MBU/09/2022 & ISO 31000:2018</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              Tata Kelola Terintegrasi <span className="text-bumn-gold">Enterprise GRC</span> BUMN
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              Penyelarasan pilar Governance, Risk management, dan Compliance (<GlossaryTooltip acronym="GRC">GRC</GlossaryTooltip>) untuk mendukung akuntabilitas korporasi, pencapaian target KPI holding, dan perolehan skor <GlossaryTooltip acronym="GCG">Good Corporate Governance (GCG)</GlossaryTooltip> berpredikat sangat baik.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("/#contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 active:scale-[0.98] rounded-xl transition-all cursor-pointer border border-blue-400/20 shadow-sm"
              >
                Konsultasikan Kerangka GRC
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/asesmen-maturitas")}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all hover:bg-slate-800"
              >
                Coba Uji Kematangan Mandiri
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-bumn-gold" />
              Manfaat Implementasi GRC
            </h3>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Optimasi Skor GCG:</strong> Panduan teknis pemenuhan indikator Kepmen BUMN SK-16/MBU/2012.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Three Lines Model:</strong> Harmonisasi peran operasional (Lini 1), manajemen risiko (Lini 2), dan audit internal (Lini 3).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Anti-Bribery (ISO 37001):</strong> Integrasi sistem manajemen anti penyuapan dan whistleblowing system.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Tingkatkan Maturitas Tata Kelola Korporasi Anda
            </h3>
            <p className="text-sm text-slate-300">
              Tim penasihat GRC Daya Solusi Integra siap membantu holding dan anak perusahaan BUMN mencapai tata kelola berstandar global.
            </p>
          </div>
          <button
            onClick={() => onNavigate("/#contact")}
            className="px-6 py-3.5 bg-bumn-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            Hubungi Tim GRC
          </button>
        </div>

      </div>
    </div>
  );
}
