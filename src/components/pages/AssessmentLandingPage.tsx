import React from "react";
import { ChevronRight } from "lucide-react";
import Assessment from "../Assessment";

interface AssessmentPageProps {
  onNavigate: (path: string) => void;
  onComplete: (company: string, sector: string) => void;
}

export default function AssessmentLandingPage({ onNavigate, onComplete }: AssessmentPageProps) {
  React.useEffect(() => {
    document.title = "Uji Mandiri Maturitas Pengendalian Internal COSO & GRC | Daya Solusi Integra";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0b0f19] text-slate-100">
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
              <span className="text-slate-400">Tool Evaluasi</span>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li className="text-bumn-gold font-semibold">Asesmen Kematangan Mandiri</li>
          </ol>
        </nav>
      </div>

      {/* Reusable Core Interactive Assessment Component */}
      <Assessment onComplete={onComplete} />
    </div>
  );
}
