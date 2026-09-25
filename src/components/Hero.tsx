import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Milestone, Landmark, MessageSquare, Layers, FileCheck, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenAdvisor: () => void;
}

export default function Hero({ onScrollToSection, onOpenAdvisor }: HeroProps) {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      code: "PILAR 01",
      title: "Tata Kelola TI & ITGC",
      standard: "COBIT 2019 / ISO 27001",
      target: "Keandalan Kontrol Akses, Change Management & Keamanan Core Banking",
      focus: "Mitigasi kerentanan sistem finansial & audit trail digital tanpa celah"
    },
    {
      code: "PILAR 02",
      title: "ICOFR & Audit Readiness",
      standard: "COSO Internal Control",
      target: "Sertifikasi Asersi Direksi & Validasi RCM (Risk & Control Matrix)",
      focus: "Pencegahan salah saji material dalam pelaporan keuangan konsolidasi"
    },
    {
      code: "PILAR 03",
      title: "Enterprise GRC BUMN",
      standard: "PER-5/MBU/09/2022 & POJK",
      target: "Pemenuhan GCG Scorecard & Efektivitas Pengendalian Internal",
      focus: "Kepatuhan multi-regulator: Kementerian BUMN, BPKP, BPK, dan OJK"
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] pt-32 pb-20 flex items-center bg-[#080c15] border-b border-slate-900"
    >
      {/* Subtle technical background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Hero Editorial & Positioning Text */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-text-content">
            
            {/* Regulatory Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Praktik Independen Konsultasi TI & GRC Korporasi</span>
            </div>

            {/* Main Heading - Clean editorial authority */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display">
              Menyelaraskan Tata Kelola TI &{" "}
              <span className="text-bumn-gold">
                Pengendalian Internal
              </span>{" "}
              di Sektor Terregulasi.
            </h1>

            {/* Clear, natural, professional description without excessive bolding */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Daya Solusi Integra mendampingi BUMN dan institusi jasa keuangan mengamankan infrastruktur TI, merancang kerangka <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> berbasis standar COSO, serta memitigasi risiko kepatuhan untuk memastikan akuntabilitas operasional dan kesiapan audit menyeluruh.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1" id="hero-actions">
              <button
                id="hero-primary-cta"
                onClick={() => onScrollToSection("assessment")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 active:scale-[0.98] rounded-xl transition-all cursor-pointer border border-blue-400/20 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c15]"
              >
                Mulai Uji Maturitas Mandiri
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={onOpenAdvisor}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 active:scale-[0.98] border border-slate-800 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c15]"
              >
                <MessageSquare className="w-4 h-4 text-bumn-gold" />
                <span>Konsultasi AI DSI</span>
                <kbd className="font-mono text-[11px] bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800 ml-1">Ctrl+/</kbd>
              </button>
            </div>

            {/* Authority Reference Matrix */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm" id="hero-badges">
              <div className="flex items-center gap-2 text-slate-300">
                <Milestone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Pedoman GCG Kementerian BUMN</span>
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-slate-300">
                <Landmark className="w-4 h-4 text-bumn-gold shrink-0" />
                <span>Ketentuan <GlossaryTooltip acronym="OJK">POJK & SEOJK</GlossaryTooltip> Banking</span>
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Standar <GlossaryTooltip acronym="COSO">COSO</GlossaryTooltip> & COBIT</span>
              </div>
            </div>
          </div>

          {/* Interactive Governance & Advisory Dossier (Replaces AI slop macOS mockup) */}
          <div className="lg:col-span-5" id="hero-visual-frame">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl text-left">
              
              {/* Dossier Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-bumn-gold" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase">
                    Arsitektur Tata Kelola DSI
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  Kerangka Terpadu
                </span>
              </div>

              {/* Interactive Pillar Selector Tabs */}
              <div className="space-y-2 mb-5">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePillar(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                        isActive 
                          ? "bg-slate-800/90 border-blue-500/40 text-white" 
                          : "bg-slate-950/40 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isActive ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-slate-900 text-slate-400"
                        }`}>
                          {pillar.code}
                        </span>
                        <span className="text-sm font-semibold">{pillar.title}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-bumn-gold rotate-90" : "text-slate-600"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Technical Card */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-300 uppercase">Standar Pengujian</span>
                  <span className="text-xs font-mono font-bold text-bumn-gold">
                    {pillars[activePillar].standard}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-200">Ruang Lingkup Validasi</div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {pillars[activePillar].target}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-start gap-2.5">
                  <FileCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {pillars[activePillar].focus}
                  </p>
                </div>
              </div>

              {/* Trust & Methodology Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-300" />
                  Kerahasiaan Data Terjamin
                </span>
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer" onClick={() => onScrollToSection("services")}>
                  Lihat Metodologi →
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Statistics Strip - Clean Technical Precision */}
        <div className="mt-16 border border-slate-800 bg-slate-900/40 rounded-xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 divide-slate-800/80" id="hero-stats">
          {[
            { value: "100%", label: "Kepatuhan Regulasi", desc: "Kementerian BUMN, BPK & OJK" },
            { value: "WTP", label: "Target Pelaporan", desc: "Opini Wajar Tanpa Pengecualian" },
            { value: "COSO", label: "Metodologi Pengendalian", desc: "Entity & Transaction Level Control" },
            { value: "15+", label: "Pengalaman Praktisi", desc: "Spesialisasi Sektor BUMN & Perbankan" }
          ].map((stat, idx) => {
            const getStyledValue = (val: string) => {
              if (val === "WTP") return <GlossaryTooltip acronym="WTP">WTP</GlossaryTooltip>;
              if (val === "COSO") return <GlossaryTooltip acronym="COSO">COSO</GlossaryTooltip>;
              return val;
            };
            return (
              <div 
                key={idx} 
                id={`stat-card-${idx}`} 
                className="flex items-start gap-4 text-left pt-4 sm:pt-0 first:pt-0"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums shrink-0">{getStyledValue(stat.value)}</div>
                <div>
                  <div className="text-xs font-semibold text-bumn-gold font-mono uppercase tracking-wider">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-normal">{stat.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
