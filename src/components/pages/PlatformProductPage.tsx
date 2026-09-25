import React from "react";
import { ChevronRight } from "lucide-react";
import GrcIntegraPlatform from "../GrcIntegraPlatform";

interface PlatformPageProps {
  onNavigate: (path: string) => void;
  onRequestDemo: () => void;
}

export default function PlatformProductPage({ onNavigate, onRequestDemo }: PlatformPageProps) {
  React.useEffect(() => {
    document.title = "Software GRC Integra: Platform Siklus Hidup ICOFR BUMN SK-5 | Daya Solusi Integra";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080d1a] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-left">
          <ol className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <li>
              <button onClick={() => onNavigate("/")} className="hover:text-white transition-colors">
                Beranda
              </button>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li>
              <span className="text-slate-400">Software</span>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li className="text-bumn-gold font-semibold">GRC Integra Platform</li>
          </ol>
        </nav>
      </div>

      {/* Reusable Core Interactive Platform Component */}
      <GrcIntegraPlatform onRequestDemo={onRequestDemo} />
    </div>
  );
}
