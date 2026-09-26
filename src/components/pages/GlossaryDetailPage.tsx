import React, { useEffect } from "react";
import { 
  BookOpen, 
  ChevronRight, 
  ShieldCheck, 
  FileText, 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2,
  HelpCircle,
  Layers
} from "lucide-react";
import { GLOSSARY_ITEMS, GlossaryItem } from "../../data/glossaryData";

interface GlossaryDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAdvisor?: () => void;
}

export default function GlossaryDetailPage({ slug, onNavigate, onOpenAdvisor }: GlossaryDetailPageProps) {
  const currentItem = GLOSSARY_ITEMS.find((item) => item.id === slug);

  // Istilah terkait dalam kategori yang sama (selain item aktif)
  const relatedItems = React.useMemo(() => {
    if (!currentItem) return [];
    return GLOSSARY_ITEMS.filter(
      (item) => item.category === currentItem.category && item.id !== currentItem.id
    ).slice(0, 3);
  }, [currentItem]);

  // Dynamic Schema.org injection: DefinedTerm & BreadcrumbList
  useEffect(() => {
    if (!currentItem) return;

    const schemaId = "glossary-defined-term-schema";
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const termJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTerm",
          "@id": `https://dsintegra.co.id/glosarium/${currentItem.id}#term`,
          "name": currentItem.acronym ? `${currentItem.term} (${currentItem.acronym})` : currentItem.term,
          "description": currentItem.definition,
          "inDefinedTermSet": "https://dsintegra.co.id/glosarium",
          "url": `https://dsintegra.co.id/glosarium/${currentItem.id}`
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://dsintegra.co.id/glosarium/${currentItem.id}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Beranda",
              "item": "https://dsintegra.co.id/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glosarium Kepatuhan ICOFR BUMN",
              "item": "https://dsintegra.co.id/glosarium"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": currentItem.term,
              "item": `https://dsintegra.co.id/glosarium/${currentItem.id}`
            }
          ]
        }
      ]
    };

    script.textContent = JSON.stringify(termJsonLd);

    return () => {
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [currentItem]);

  // Fallback 404 jika istilah tidak ditemukan
  if (!currentItem) {
    return (
      <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-slate-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Istilah Glosarium Tidak Ditemukan
          </h1>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Istilah dengan rujukan URL tersebut tidak terdaftar di dalam kamus kepatuhan regulasi kami.
          </p>
          <button
            onClick={() => onNavigate("/glosarium")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Glosarium
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Hierarchy */}
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
          <button 
            onClick={() => onNavigate("/")} 
            className="hover:text-slate-200 transition-colors focus:outline-none"
          >
            Beranda
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={() => onNavigate("/glosarium")} 
            className="hover:text-slate-200 transition-colors focus:outline-none"
          >
            Glosarium ICOFR BUMN
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium truncate max-w-[200px] sm:max-w-none">
            {currentItem.term}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate("/glosarium")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Lihat Seluruh Direktori Glosarium
          </button>
        </div>

        {/* Main Entity Header Card */}
        <article className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-10 mb-10 shadow-sm">
          
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60">
              <Layers className="w-3.5 h-3.5" />
              {currentItem.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-900 text-[#cca43b] border border-amber-900/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cca43b]" />
              {currentItem.regulationRef}
            </span>
          </div>

          {/* Heading Term */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {currentItem.term}
            {currentItem.acronym && (
              <span className="ml-3 inline-block text-xl sm:text-2xl font-bold text-[#cca43b] px-3 py-1 rounded-lg bg-amber-950/40 border border-amber-800/40 align-middle">
                {currentItem.acronym}
              </span>
            )}
          </h1>

          {/* Section: Definisi Resmi */}
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              Definisi & Pengertian Regulasi
            </h2>
            <div className="bg-[#0b0f19] border border-slate-800/90 rounded-xl p-5 sm:p-7">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {currentItem.definition}
              </p>
            </div>
          </div>

          {/* Section: Amanat & Key Takeaway */}
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#cca43b]" />
              Amanat Regulasi & Catatan Implementasi
            </h2>
            <div className="bg-amber-950/20 border border-amber-900/30 rounded-xl p-5 sm:p-7">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {currentItem.keyTakeaway}
              </p>
            </div>
          </div>

          {/* Solution & Implementation Link */}
          {currentItem.relatedServiceUrl && (
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Solusi Terkait di Platform Kami:</span>
                <span className="text-sm font-semibold text-white">{currentItem.relatedServiceLabel}</span>
              </div>
              <button
                onClick={() => onNavigate(currentItem.relatedServiceUrl!)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0"
              >
                <span>Pelajari Solusi Terkait</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </article>

        {/* Section: Istilah Terkait Lainnya (Internal Link Web) */}
        {relatedItems.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Istilah Terkait dalam Kategori: {currentItem.category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedItems.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(`/glosarium/${rel.id}`)}
                  className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 cursor-pointer hover:border-blue-500/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block mb-2">
                      {rel.regulationRef}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {rel.term}
                      {rel.acronym && (
                        <span className="ml-1.5 text-xs text-[#cca43b]">({rel.acronym})</span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {rel.definition}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-blue-400 font-medium">
                    <span>Baca Definisi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Conversion Box */}
        <section className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Otomasi Kepatuhan Regulasi SK-5 BUMN Bersama GRC Integra
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tinggalkan pengelolaan kertas kerja manual yang rentan kesalahan formula dan temuan auditor. GRC Integra mengintegrasikan alur walkthrough Lini 2, matriks RCM, dan asersi digital bersertifikasi.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate("/platform/grc-integra")}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
            >
              Lihat Demo Platform GRC Integra
            </button>
            {onOpenAdvisor && (
              <button
                onClick={onOpenAdvisor}
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-colors"
              >
                Tanya Konsultan AI Kepatuhan
              </button>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
