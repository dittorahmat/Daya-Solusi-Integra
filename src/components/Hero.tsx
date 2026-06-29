import React from "react";
import { ArrowRight, ShieldCheck, Milestone, Landmark, MessageSquare } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenAdvisor: () => void;
}

export default function Hero({ onScrollToSection, onOpenAdvisor }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-radial from-slate-900 via-[#0b0f19] to-[#05070c]"
    >
      {/* Abstract Grid and Light Glares Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[180px]" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-text-content">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase font-mono shadow-inner shadow-blue-500/5">
              <ShieldCheck className="w-4 h-4" />
              GRC & ICOFR Specialization
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
              Tata Kelola Andal, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-bumn-gold">
                Pengendalian Finansial
              </span> <br />
              Tanpa Celah.
            </h1>

            {/* Description tailored for BUMN / Banking */}
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">Daya Solusi Integra (DSI)</strong> adalah konsultan IT & GRC spesialis yang merancang kerangka kerja <strong className="text-bumn-gold font-medium">ICOFR (Internal Control over Financial Reporting)</strong> terintegrasi. Kami memperkokoh kepatuhan regulasi, tata kelola korporasi sehat, dan mitigasi risiko operasional demi akuntabilitas prima <strong className="text-white font-medium">BUMN</strong> dan kepatuhan ketat <strong className="text-white font-medium">Sektor Perbankan</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2" id="hero-actions">
              <button
                id="hero-primary-cta"
                onClick={() => onScrollToSection("assessment")}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/10 cursor-pointer"
              >
                Uji Maturitas GRC Anda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={onOpenAdvisor}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-bumn-gold" />
                Konsultasi AI DSI
              </button>
            </div>

            {/* Micro Badges for target markets */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-slate-400 text-sm" id="hero-badges">
              <span className="flex items-center gap-2 font-medium text-slate-300">
                <Milestone className="w-4 h-4 text-bumn-blue" />
                Kementerian BUMN GCG
              </span>
              <span className="w-1.5 h-1.5 bg-slate-800 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2 font-medium text-slate-300">
                <Landmark className="w-4 h-4 text-bumn-gold" />
                Standar POJK & SEOJK Banking
              </span>
              <span className="w-1.5 h-1.5 bg-slate-800 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2 font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-bumn-blue" />
                Sertifikasi COSO / COBIT
              </span>
            </div>
          </div>

          {/* Visual Showcase (Modern Glass UI Frame) */}
          <div className="lg:col-span-5 relative" id="hero-visual-frame">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-bumn-blue to-bumn-gold opacity-25 blur-xl animate-pulse" />
              
              {/* Glass Interface Mockup */}
              <div className="relative glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-6">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 bg-rose-500 rounded-full inline-block" />
                    <span className="w-3.5 h-3.5 bg-amber-500 rounded-full inline-block" />
                    <span className="w-3.5 h-3.5 bg-blue-500 rounded-full inline-block" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">DSI-ICOFR_FRAMEWORK.V2</span>
                </div>

                {/* Simulated Chart/State Box */}
                <div className="space-y-4">
                  <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/60">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400 font-medium">Internal Audit Readiness</span>
                      <span className="text-xs text-bumn-gold font-mono font-bold">98.4%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-bumn-blue to-bumn-gold h-full w-[98.4%] rounded-full" />
                    </div>
                  </div>

                  {/* Core pillars visualization */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/40 text-left">
                      <span className="text-[10px] uppercase text-slate-500 tracking-wider block font-mono">Entity Level</span>
                      <span className="text-sm font-semibold text-white mt-1 block">COSO Compliant</span>
                    </div>
                    <div className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/40 text-left">
                      <span className="text-[10px] uppercase text-slate-500 tracking-wider block font-mono">IT Controls</span>
                      <span className="text-sm font-semibold text-white mt-1 block">ITGC Orchestrated</span>
                    </div>
                  </div>

                  {/* Trust highlight block */}
                  <div className="bg-blue-950/20 rounded-xl p-4 border border-blue-500/20 text-left flex gap-3.5">
                    <div className="bg-blue-500/20 p-2.5 rounded-lg text-blue-400 h-10 w-10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-bumn-gold">Targeting BUMN & Banking</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Sistem audit komprehensif yang dioptimalkan sesuai ketentuan BPK, BPKP, OJK, dan auditor internal perbankan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Score badge overlay */}
                <div className="absolute -bottom-6 -left-6 bg-[#0d1527] border border-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-bumn-blue to-bumn-gold font-display">WTP</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase leading-tight tracking-wider text-left">
                    Opini Wajar Tanpa<br />Pengecualian (WTP)
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Statistics Grid */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="hero-stats">
          {[
            { value: "100%", label: "Kepatuhan Regulasi", desc: "Sesuai regulasi OJK & BUMN" },
            { value: "WTP", label: "Target Opini Audit", desc: "Wajar Tanpa Pengecualian" },
            { value: "COSO", label: "Metodologi Standar", desc: "Kerangka Kerja Global" },
            { value: "15+", label: "Auditor Ahli Senior", desc: "Berpengalaman di BUMN & Bank" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              id={`stat-card-${idx}`} 
              className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/60 transition-colors text-left"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white font-display mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-bumn-gold uppercase tracking-wider mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-500 leading-normal">{stat.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
