import React from "react";
import Breadcrumbs from "../Breadcrumbs";
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
        <div className="mb-4 text-left">
          <Breadcrumbs
            items={[
              { label: "Tool Evaluasi", path: "/#assessment" },
              { label: "Asesmen Kematangan Mandiri" }
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Reusable Core Interactive Assessment Component */}
      <Assessment onComplete={onComplete} />
    </div>
  );
}
