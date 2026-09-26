import React from "react";
import { ChevronRight } from "lucide-react";
import GrcIntegraPlatform from "../GrcIntegraPlatform";
import FaqSection from "../FaqSection";
import { ROUTE_FAQS } from "../../data/faqData";

import Breadcrumbs from "../Breadcrumbs";

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
        <div className="mb-4 text-left">
          <Breadcrumbs
            items={[
              { label: "Software", path: "/#platform" },
              { label: "GRC Integra Platform" }
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Reusable Core Interactive Platform Component */}
      <GrcIntegraPlatform onRequestDemo={onRequestDemo} />

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <FaqSection
          items={ROUTE_FAQS["/platform/grc-integra"]}
          badge="FAQ Platform & Integrasi Enterprise"
          title="Pertanyaan Seputar Software GRC Integra"
          subtitle="Informasi arsitektur deployment on-premise, integrasi sistem ERP SAP atau Oracle, keamanan data, dan migrasi RCM spreadsheet."
        />
      </div>
    </div>
  );
}
