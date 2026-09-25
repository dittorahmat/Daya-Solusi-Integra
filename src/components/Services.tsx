import React from "react";
import { servicesList } from "../data";
import { CheckCircle2, ChevronRight } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

export default function Services() {

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

        {/* Executive Editorial Capability Ledger (All 4 Practices Visible & Clear) */}
        <div className="border-t border-slate-800 divide-y divide-slate-800" id="services-ledger">
          {servicesList.map((service, index) => {
            const meta = serviceFrameworks[service.id] || serviceFrameworks["icofr"];
            const subpageLinks: Record<string, { label: string; href: string }> = {
              "icofr": { label: "Eksplorasi Layanan ICOFR BUMN SK-5", href: "/layanan/icofr-bumn" },
              "itgc": { label: "Eksplorasi Layanan ITGC & Audit Kesiapan TI", href: "/layanan/itgc-audit-readiness" },
              "grc": { label: "Eksplorasi Layanan Enterprise GRC", href: "/layanan/enterprise-grc" },
              "audit-ready": { label: "Uji Kesiapan Audit Lewat Asesmen", href: "/asesmen-maturitas" }
            };
            const subpage = subpageLinks[service.id];

            return (
              <div 
                key={service.id} 
                id={`service-practice-${service.id}`}
                className="py-10 grid lg:grid-cols-12 gap-8 items-start hover:bg-slate-900/20 transition-colors rounded-xl px-2 sm:px-4"
              >
                {/* Column 1: Index & Title */}
                <div className="lg:col-span-4 space-y-3 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-bumn-gold">
                      0{index + 1}.
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      Praktik Spesialisasi
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <div className="pt-1">
                    <span className="inline-block text-[11px] font-mono text-blue-400 bg-blue-950/50 border border-blue-800/40 px-2.5 py-1 rounded">
                      {meta.framework}
                    </span>
                  </div>
                </div>

                {/* Column 2: Narrative & Scope Checklist */}
                <div className="lg:col-span-5 space-y-4 text-left">
                  <p className="text-sm text-slate-300 leading-[1.8] font-normal">
                    {service.longDesc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-bumn-gold shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Regulation, Deliverable & Silo Link */}
                <div className="lg:col-span-3 space-y-4 text-left bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Rujukan Regulasi
                    </span>
                    <span className="text-xs font-medium text-slate-200 mt-0.5 block">
                      {meta.standard}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Keluaran Resmi
                    </span>
                    <span className="text-xs font-medium text-slate-300 mt-0.5 block leading-relaxed">
                      {meta.output}
                    </span>
                  </div>

                  {subpage && (
                    <div className="pt-3 border-t border-slate-800/80">
                      <a
                        href={subpage.href}
                        className="inline-flex items-center gap-1.5 text-xs text-bumn-gold hover:text-amber-300 font-semibold group"
                      >
                        <span>{subpage.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Consultation Pathway */}
        <div className="mt-14 p-6 sm:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base font-semibold text-white tracking-tight">
              Butuh telaah awal terhadap kesiapan kepatuhan entitas Anda?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Tim penasihat DSI siap melakukan evaluasi awal berbasis ketentuan Kementerian BUMN, BPK, dan OJK.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 px-6 py-3 rounded-xl border border-blue-400/20 transition-all shrink-0 active:scale-[0.98]"
          >
            <span>Hubungi Tim Konsultan</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
