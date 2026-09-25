import React from "react";
import { ArrowRight, ShieldCheck, Milestone, Landmark, MessageSquare, Lock } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenAdvisor: () => void;
}

export default function Hero({ onScrollToSection, onOpenAdvisor }: HeroProps) {

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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Editorial & Positioning Text */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-text-content">
            
            {/* Regulatory Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Praktik Independen Konsultasi TI & GRC Korporasi</span>
            </div>

            {/* Main Heading - Clean editorial authority */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.12] font-display">
              Menyelaraskan Tata Kelola TI &{" "}
              <span className="text-bumn-gold">
                Pengendalian Internal
              </span>{" "}
              di Sektor Terregulasi.
            </h1>

            {/* Clear, natural, professional description without excessive bolding */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-[1.8] max-w-2xl">
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

          {/* Clean Executive Governance Ledger */}
          <div className="lg:col-span-5" id="hero-visual-frame">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 text-left shadow-lg">
              
              {/* Dossier Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase block">
                    Matriks Pengawalan Tata Kelola
                  </span>
                  <h3 className="text-base font-semibold text-white tracking-tight mt-0.5">
                    3 Pilar Strategis Terintegrasi
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-bumn-gold bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  Resmi Terverifikasi
                </span>
              </div>

              {/* Three Clean Editorial Rows */}
              <div className="divide-y divide-slate-800/80">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue-400">
                        {pillar.code} : {pillar.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded border border-slate-800/70">
                        {pillar.standard}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Substantive Bottom Meta */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  Sesuai SK-5 Kementerian BUMN
                </span>
                <button
                  type="button"
                  onClick={() => onScrollToSection("services")}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  Lihat Detail →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Statistics Strip - Clean Technical Precision */}
        <div className="mt-16 border border-slate-800/80 bg-slate-900/30 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 divide-slate-800/80" id="hero-stats">
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
