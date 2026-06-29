import React from "react";
import { ArrowRight, ShieldCheck, Milestone, Landmark, MessageSquare } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase font-mono shadow-inner shadow-blue-500/5">
              <ShieldCheck className="w-4 h-4" />
              GRC & <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> Specialization
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display" style={{ textWrap: "balance" }}>
              Tata Kelola Andal, <br />
              <span className="text-bumn-gold">
                Pengendalian Finansial
              </span> <br />
              Tanpa Celah.
            </h1>

            {/* Description tailored for BUMN / Banking */}
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">Daya Solusi Integra (DSI)</strong> adalah konsultan IT & GRC spesialis yang merancang kerangka kerja <strong className="text-bumn-gold font-medium"><GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> (Internal Control over Financial Reporting)</strong> terintegrasi. Kami memperkokoh kepatuhan regulasi, tata kelola korporasi sehat, dan mitigasi risiko operasional demi akuntabilitas prima <strong className="text-white font-medium">BUMN</strong> dan kepatuhan ketat <strong className="text-white font-medium">Sektor Perbankan</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2" id="hero-actions">
              <button
                id="hero-primary-cta"
                onClick={() => onScrollToSection("assessment")}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
              >
                Uji Maturitas GRC Anda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={onOpenAdvisor}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
              >
                <MessageSquare className="w-4 h-4 text-bumn-gold" />
                Konsultasi AI DSI
              </button>
            </div>

            {/* Micro Badges for target markets */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-slate-400 text-sm" id="hero-badges">
              <span className="flex items-center gap-2 font-medium text-slate-300">
                <Milestone className="w-4 h-4 text-bumn-blue" />
                Kementerian BUMN <GlossaryTooltip acronym="GCG">GCG</GlossaryTooltip>
              </span>
              <span className="w-1.5 h-1.5 bg-slate-800 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2 font-medium text-slate-300">
                <Landmark className="w-4 h-4 text-bumn-gold" />
                Standar POJK & SEOJK Banking
              </span>
              <span className="w-1.5 h-1.5 bg-slate-800 rounded-full hidden sm:inline" />
              <span className="flex items-center gap-2 font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-bumn-blue" />
                Sertifikasi <GlossaryTooltip acronym="COSO">COSO</GlossaryTooltip> / COBIT
              </span>
            </div>
          </div>

          {/* Visual Showcase (Modern Glass UI Frame) */}
          <div className="lg:col-span-5 relative" id="hero-visual-frame">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-0.5 rounded-2xl bg-blue-500/5 opacity-40 blur-2xl" />
              
              {/* Glass Interface Mockup */}
              <div className="relative glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 bg-rose-500 rounded-full inline-block" />
                    <span className="w-3.5 h-3.5 bg-amber-500 rounded-full inline-block" />
                    <span className="w-3.5 h-3.5 bg-blue-500 rounded-full inline-block" />
                  </div>
                  <span className="font-mono text-xs text-slate-500">DSI-ICOFR_FRAMEWORK.V2</span>
                </div>

                {/* Simulated Chart/State Box */}
                <div className="space-y-6">
                  {/* Readiness Progress Bar (Borderless) */}
                  <div className="py-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-400 font-semibold">Internal Audit Readiness</span>
                      <span className="text-xs text-bumn-gold font-mono font-bold">98.4%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-bumn-blue to-bumn-gold h-full w-[98.4%] rounded-full" />
                    </div>
                  </div>

                  {/* Core pillars visualization (Clean text columns separated by vertical divider) */}
                  <div className="grid grid-cols-3 divide-x divide-slate-800/80 py-2">
                    <div className="text-left pr-4">
                      <span className="text-xs uppercase text-slate-500 tracking-wider block font-mono">Level Entitas</span>
                      <span className="text-sm font-bold text-white mt-1 block">Kepatuhan <GlossaryTooltip acronym="COSO">COSO</GlossaryTooltip></span>
                    </div>
                    <div className="text-left px-4">
                      <span className="text-xs uppercase text-slate-500 tracking-wider block font-mono">Kontrol TI</span>
                      <span className="text-sm font-bold text-white mt-1 block">Tata Kelola <GlossaryTooltip acronym="ITGC">ITGC</GlossaryTooltip></span>
                    </div>
                    <div className="text-left pl-4">
                      <span className="text-xs uppercase text-slate-500 tracking-wider block font-mono">Target Audit</span>
                      <span className="text-sm font-bold text-bumn-gold mt-1 block">Opini <GlossaryTooltip acronym="WTP">WTP</GlossaryTooltip></span>
                    </div>
                  </div>

                  {/* Trust highlight block (Accented card instead of side-stripe) */}
                  <div className="bg-blue-950/20 border border-blue-500/10 rounded-xl p-3.5 text-left flex gap-3">
                    <div className="text-blue-400 shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-bumn-gold uppercase tracking-wider font-mono">Kepatuhan Regulasi Kritis</div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Sistem audit komprehensif yang dioptimalkan sesuai ketentuan BPK, BPKP, <GlossaryTooltip acronym="OJK">OJK</GlossaryTooltip>, dan auditor internal perbankan.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Statistics Strip */}
        <div className="mt-20 border border-slate-800/80 bg-slate-900/10 rounded-2xl p-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800/80 items-stretch gap-6 md:gap-0" id="hero-stats">
          {[
            { value: "100%", label: "Kepatuhan Regulasi", desc: "Sesuai OJK & BUMN" },
            { value: "WTP", label: "Target Opini Audit", desc: "Wajar Tanpa Pengecualian" },
            { value: "COSO", label: "Metodologi Standar", desc: "Kerangka Kerja Global" },
            { value: "15+", label: "Auditor Ahli Senior", desc: "Pengalaman di BUMN" }
          ].map((stat, idx) => {
            const getStyledValue = (val: string) => {
              if (val === "WTP") return <GlossaryTooltip acronym="WTP">WTP</GlossaryTooltip>;
              if (val === "COSO") return <GlossaryTooltip acronym="COSO">COSO</GlossaryTooltip>;
              return val;
            };
            const getStyledDesc = (desc: string) => {
              if (desc.includes("OJK")) {
                return (
                  <>
                    Sesuai <GlossaryTooltip acronym="OJK">OJK</GlossaryTooltip> & BUMN
                  </>
                );
              }
              return desc;
            };
            return (
              <div 
                key={idx}
                id={`stat-card-${idx}`} 
                className="flex-1 px-6 first:pl-0 last:pr-0 flex items-start gap-4 text-left py-4 md:py-0"
              >
                <div className="text-3xl font-extrabold text-white font-display shrink-0 mt-1">{getStyledValue(stat.value)}</div>
                <div>
                  <div className="text-xs font-semibold text-bumn-gold/90 tracking-wider uppercase font-mono">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-normal">{getStyledDesc(stat.desc)}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
