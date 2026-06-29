import React from "react";
import { clientSectors } from "../data";
import { Building2, Landmark, HelpCircle, ArrowUpRight, ShieldAlert, BadgeCheck } from "lucide-react";

export default function Clients() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-8 h-8 text-blue-400" />;
      case "Landmark":
        return <Landmark className="w-8 h-8 text-blue-400" />;
      default:
        return <Building2 className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="clients" className="py-24 relative bg-[#0b0f19] border-t border-slate-900 overflow-hidden">
      {/* Decorative vector lines */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute -bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold font-mono">
            Fokus Sektor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Fokus Industri & Solusi Spesifik Sektor
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Daya Solusi Integra hadir dengan pemahaman regulatori mendalam untuk mengawal kepatuhan dan integritas laporan keuangan pada dua pilar strategis ekonomi Indonesia.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12" id="sectors-grid">
          {clientSectors.map((sector) => (
            <div
              key={sector.name}
              id={`sector-card-${sector.sector.toLowerCase()}`}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-[#0f172a]/20 flex flex-col justify-between hover:border-slate-700/60 transition-colors"
            >
              <div className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-blue-950/40 text-blue-400 p-3.5 rounded-xl shrink-0">
                    {renderIcon(sector.logo)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {sector.name}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-bumn-gold font-mono font-bold">
                      Fokus Utama DSI
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-light text-left">
                  {sector.description}
                </p>

                {/* Challenges and Solutions Columns */}
                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800/60">
                  
                  {/* Challenges List */}
                  <div className="space-y-3.5 text-left">
                    <h4 className="text-xs font-bold text-red-400 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      Tantangan Utama
                    </h4>
                    <ul className="space-y-2">
                      {sector.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-slate-400 leading-relaxed font-light flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions List */}
                  <div className="space-y-3.5 text-left">
                    <h4 className="text-xs font-bold text-bumn-gold flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 shrink-0" />
                      Solusi DSI
                    </h4>
                    <ul className="space-y-2">
                      {sector.solutions.map((sol, idx) => (
                        <li key={idx} className="text-sm text-slate-300 leading-relaxed font-medium flex items-start gap-2">
                          <span className="text-bumn-gold font-bold mt-0.5">✓</span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Bottom tag */}
              <div className="pt-6 border-t border-slate-800/40 mt-6 flex justify-between items-center text-left">
                <span className="text-xs font-mono text-slate-500">
                  Kesesuaian Regulasi Terjamin
                </span>
                <span className="text-xs font-bold text-blue-400 font-mono">
                  {sector.sector === "BUMN" ? "Kementerian BUMN" : "OJK & Bank Indonesia"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic regulatory standards log strip */}
        <div className="mt-16 bg-slate-950/40 rounded-2xl py-6 px-8 border border-slate-800/60 flex flex-wrap justify-center items-center gap-x-12 gap-y-4" id="regulatory-strip">
          <span className="text-xs font-mono text-slate-500">Standar Pengendalian Eksternal:</span>
          <div className="flex flex-wrap gap-6 sm:gap-10 text-xs text-slate-400 font-mono font-semibold">
            <span className="hover:text-white transition-colors">COSO INTERNAL CONTROL</span>
            <span className="hover:text-white transition-colors">COBIT 2019</span>
            <span className="hover:text-white transition-colors">ISO 31000 RISK MGT</span>
            <span className="hover:text-white transition-colors">ISO 27001 SECURE</span>
            <span className="hover:text-white transition-colors">SOX SECTION 404 (ICOFR)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
