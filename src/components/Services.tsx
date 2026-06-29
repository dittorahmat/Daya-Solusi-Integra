import React, { useState } from "react";
import { servicesList } from "../data";
import { ShieldAlert, Briefcase, Cpu, ClipboardCheck, CheckCircle2, ArrowUpRight, HelpCircle } from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-blue-400" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-6 h-6 text-blue-400" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" ref={sectionRef} className={`py-24 relative bg-[#090d16] border-t border-slate-900 ${hasEntered ? "animate-in" : ""}`}>
      {/* Decorative backdrop */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Spesialisasi GRC & <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> Tingkat Korporasi
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Menjawab kebutuhan akuntabilitas yang tinggi, kami mendampingi BUMN dan institusi perbankan dalam memitigasi risiko salah saji keuangan, kegagalan sistem TI, dan ketidakpatuhan regulasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8" id="services-grid">
          {servicesList.map((service, idx) => {
            const isExpanded = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                style={{ "--delay": `${idx * 100}ms` } as React.CSSProperties}
                className={`stagger-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-bumn-navy/40 hover:bg-bumn-navy/60 hover:border-slate-700/60 shadow-sm transition-all duration-300 flex flex-col justify-between group ${
                  isExpanded ? "ring-2 ring-blue-500/30 bg-slate-950/90" : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Top Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-950/40 text-blue-400 p-3.5 rounded-xl">
                      {renderIcon(service.icon)}
                    </div>
                    <button
                      onClick={() => setSelectedServiceId(isExpanded ? null : service.id)}
                      className="text-slate-500 group-hover:text-blue-400 p-2 rounded-full hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
                      title="Klik untuk detail layanan"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Header Title & Short Description */}
                  <div className="text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-bumn-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2.5 font-light leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 pt-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-bumn-gold mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded Long Description */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-300 text-left">
                      <h4 className="text-xs font-bold text-bumn-gold mb-2">Metodologi & Deliverables:</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {service.longDesc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 border-t border-slate-800/40 mt-6 text-left">
                  <button
                    id={`service-toggle-btn-${service.id}`}
                    onClick={() => setSelectedServiceId(isExpanded ? null : service.id)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 focus:outline-none"
                  >
                    {isExpanded ? "Tutup detail layanan" : "Selengkapnya"}
                    <span className={`text-[10px] transform transition-transform ${isExpanded ? "rotate-180" : ""}`}>▼</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ICOFR Focus Special Callout */}
        <div className="mt-16 bg-[#0d1e3d]/50 shadow-sm rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col lg:flex-row items-center gap-8 text-left" id="icofr-callout">
          <div className="bg-blue-500/10 p-4 rounded-2xl text-blue-400 shrink-0">
            <HelpCircle className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white">Mengapa <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> Menjadi Mandatori Kritis Bagi BUMN & Perbankan?</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-3xl">
              Undang-Undang Republik Indonesia dan peraturan pelaksana BUMN mengamanatkan tanggung jawab penuh bagi Direksi atas integritas laporan keuangan. Kegagalan mendokumentasikan pengendalian internal (defisiensi material) berisiko memicu kecurangan pelaporan keuangan, sanksi administratif, hingga opini audit yang buruk (Adverse atau Disclaimer) dari KAP/BPK yang dapat merusak kepercayaan pasar dan pemegang saham.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
