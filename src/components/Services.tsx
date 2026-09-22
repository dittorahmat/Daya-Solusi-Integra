import React, { useState } from "react";
import { servicesList } from "../data";
import { ShieldAlert, Briefcase, Cpu, ClipboardCheck, CheckCircle2, ChevronRight, Scale, BookOpen, Layers, Target } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>("icofr");

  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "ClipboardCheck":
        return <ClipboardCheck className={className} />;
      default:
        return <ShieldAlert className={className} />;
    }
  };

  const activeService = servicesList.find((s) => s.id === activeServiceId) || servicesList[0];

  // Specific regulatory framework mapping for each service to demonstrate deep competency
  const serviceFrameworks: Record<string, { framework: string; standard: string; output: string }> = {
    "itgc": {
      framework: "COBIT 2019 & ISO/IEC 27001",
      standard: "POJK No. 11/POJK.03/2022 & Surat Edaran BI",
      output: "ITGC Audit Matrix, IAM Evaluation Report & BCP Readiness Document"
    },
    "grc": {
      framework: "ISO 31000:2018 Risk Management & ISO 37001",
      standard: "Peraturan Menteri BUMN No. PER-5/MBU/09/2022",
      output: "GCG Assessment Scorecard, Fraud Risk Matrix & Whistleblowing Charter"
    },
    "icofr": {
      framework: "COSO Internal Control - Integrated Framework (2013)",
      standard: "Surat Edaran KBUMN & Asersi Direksi Akuntabilitas Keuangan",
      output: "RCM (Risk & Control Matrix), Entity-Level Checklist & Operating Test Results"
    },
    "audit-ready": {
      framework: "Standar Pemeriksaan Keuangan Negara (SPKN) & ISA",
      standard: "Kriteria Audit BPK, BPKP, & KAP Tier-1",
      output: "Audit Gap Matrix, Prioritized Remediation Roadmap & Mock Audit Opinion"
    }
  };

  const currentMeta = serviceFrameworks[activeService.id] || serviceFrameworks["icofr"];

  return (
    <section id="services" className="py-24 relative bg-[#080c15] border-t border-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display [text-wrap:balance]">
            Spesialisasi Teknis TI, GRC & <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip>
          </h2>
          <p className="text-slate-300 font-normal leading-relaxed text-sm sm:text-base">
            Pendekatan berbasis bukti dan pengujian substantif untuk memenuhi standar audit negara dan regulator industri keuangan.
          </p>
        </div>

        {/* Master-Detail Interactive Capability Explorer */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Service Selector Column */}
          <div className="lg:col-span-4 space-y-2.5">
            {servicesList.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-slate-900 border-blue-500/50 shadow-md text-white"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg shrink-0 ${
                      isSelected ? "bg-bumn-blue text-white" : "bg-slate-900 text-slate-400"
                    }`}>
                      {renderIcon(service.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        {service.id.toUpperCase()}
                      </div>
                      <div className="text-sm font-semibold tracking-tight mt-0.5">
                        {service.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${
                    isSelected ? "text-bumn-gold translate-x-1" : "text-slate-600"
                  }`} />
                </button>
              );
            })}

            {/* Quick Audit Lifecycle Flow */}
            <div className="mt-8 p-5 bg-slate-950 border border-slate-800/80 rounded-xl text-left">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-bumn-gold" />
                Siklus Konsultansi DSI
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-bumn-gold font-bold">01.</span>
                  <div>
                    <span className="font-semibold text-slate-200 block">Diagnostik & Gap Analysis</span>
                    <span>Audit kesesuaian awal dengan regulasi dan standar</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-bumn-gold font-bold">02.</span>
                  <div>
                    <span className="font-semibold text-slate-200 block">Desain Kontrol & RCM</span>
                    <span>Penyusunan matriks risiko dan rancangan mitigasi</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-bumn-gold font-bold">03.</span>
                  <div>
                    <span className="font-semibold text-slate-200 block">Pengujian & Remediasi</span>
                    <span>Testing efektivitas dan asistensi perbaikan celah</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-bumn-gold font-bold">04.</span>
                  <div>
                    <span className="font-semibold text-slate-200 block">Audit Kesiapan Final</span>
                    <span>Pendampingan asersi direksi dan kesiapan WTP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Capability Dossier */}
          <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 text-left shadow-lg">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs font-mono text-bumn-gold tracking-wider uppercase font-semibold">
                  Spesifikasi Layanan
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  {activeService.title}
                </h3>
              </div>
              <div className="p-3 bg-blue-950/40 text-blue-400 border border-blue-500/20 rounded-xl">
                {renderIcon(activeService.icon, "w-6 h-6")}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mt-5">
              {activeService.longDesc}
            </p>

            {/* Regulatory Alignment Box */}
            <div className="grid sm:grid-cols-3 gap-4 my-6 p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
              <div>
                <div className="text-[11px] font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  Framework Acuan
                </div>
                <div className="text-xs font-semibold text-white mt-1.5">
                  {currentMeta.framework}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-bumn-gold" />
                  Rujukan Regulasi
                </div>
                <div className="text-xs font-semibold text-white mt-1.5">
                  {currentMeta.standard}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Keluaran Kerja (Deliverable)
                </div>
                <div className="text-xs font-semibold text-white mt-1.5">
                  {currentMeta.output}
                </div>
              </div>
            </div>

            {/* Deliverables / Scope Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Ruang Lingkup Pekerjaan & Luaran Teknis:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-bumn-gold mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action within explorer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Konsultasikan kebutuhan spesifik entitas Anda bersama praktisi DSI.
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-bumn-blue hover:bg-blue-600 px-4 py-2.5 rounded-lg border border-blue-400/20 transition-colors"
              >
                Diskusikan Kebutuhan Ini
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
