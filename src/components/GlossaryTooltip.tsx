import React, { useState, useRef, useEffect } from "react";

const GLOSSARY_DB: Record<string, { term: string; definition: string }> = {
  ICOFR: {
    term: "Internal Control over Financial Reporting",
    definition: "Pengendalian internal atas pelaporan keuangan untuk memastikan keandalan laporan keuangan korporasi."
  },
  COSO: {
    term: "Committee of Sponsoring Organizations of the Treadway Commission",
    definition: "Kerangka kerja tata kelola & pengendalian internal terstandar global."
  },
  ITGC: {
    term: "IT General Controls",
    definition: "Pengendalian umum TI yang menjamin integritas data, keamanan, dan keandalan operasional sistem informasi keuangan."
  },
  GCG: {
    term: "Good Corporate Governance",
    definition: "Prinsip transparansi, akuntabilitas, tanggung jawab, independensi, dan kewajaran dalam pengelolaan korporasi."
  },
  WTP: {
    term: "Wajar Tanpa Pengecualian",
    definition: "Opini audit tertinggi dari BPK/KAP yang menyatakan laporan keuangan menyajikan data secara wajar dalam semua hal material."
  },
  OJK: {
    term: "Otoritas Jasa Keuangan",
    definition: "Lembaga independen negara yang mengawasi seluruh kegiatan di dalam sektor jasa keuangan di Indonesia."
  }
};

interface GlossaryTooltipProps {
  acronym: keyof typeof GLOSSARY_DB;
  children?: React.ReactNode;
}

export default function GlossaryTooltip({ acronym, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const data = GLOSSARY_DB[acronym];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen]);

  if (!data) return <>{children || acronym}</>;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const tooltipId = `glossary-tooltip-${acronym}`;

  return (
    <span 
      ref={containerRef}
      className="relative inline-block group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="underline decoration-dotted decoration-bumn-gold/80 hover:decoration-bumn-gold text-white font-semibold cursor-help transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-1 focus-visible:ring-offset-[#0b0f19] rounded px-0.5"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-describedby={isOpen ? tooltipId : undefined}
        aria-label={`${acronym}: ${data.term}`}
      >
        {children || acronym}
      </button>
      
      {/* Tooltip Overlay */}
      {isOpen && (
        <span 
          id={tooltipId}
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 max-w-[85vw] p-3.5 z-50 rounded-xl bg-[#0d1e3d] border border-blue-900/60 shadow-2xl text-left pointer-events-none animate-in fade-in zoom-in-95 duration-150 flex flex-col gap-1 sm:max-w-xs"
        >
          <span className="text-xs font-bold text-bumn-gold font-sans leading-tight">
            {acronym}
          </span>
          <span className="text-xs font-semibold text-white font-sans leading-tight">
            {data.term}
          </span>
          <span className="text-xs text-slate-300 font-sans leading-normal font-light mt-1">
            {data.definition}
          </span>
          {/* Subtle triangle indicator */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#0d1e3d]" />
        </span>
      )}
    </span>
  );
}
