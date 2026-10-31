import React from "react";
import { 
  BookOpen, 
  ChevronLeft, 
  ShieldCheck, 
  ArrowUpRight, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  Tag,
  ArrowRight,
  Layers,
  Award
} from "lucide-react";
import { GLOSSARY_ITEMS, GlossaryItem } from "../../data/glossaryData";
import Breadcrumbs from "../Breadcrumbs";

interface GlossaryDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAdvisor?: () => void;
}

export default function GlossaryDetailPage({ slug, onNavigate, onOpenAdvisor }: GlossaryDetailPageProps) {
  const cleanSlug = (slug || "").replace(/^\/+|\/+$/g, "").toLowerCase();
  const item: GlossaryItem | undefined = GLOSSARY_ITEMS.find((g) => g.id.toLowerCase() === cleanSlug);

  if (!item) {
    return (
      <div className="w-full bg-[#ffffff] min-h-screen text-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
          <h1 className="text-2xl font-bold text-slate-900">Istilah Glosarium Tidak Ditemukan</h1>
          <p className="text-sm text-slate-600">
            Istilah dengan pengenal "{slug}" tidak ditemukan dalam direktori kamus kepatuhan ICOFR kami.
          </p>
          <button
            onClick={() => onNavigate("/glosarium")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Kembali ke Katalog Glosarium
          </button>
        </div>
      </div>
    );
  }

  // Find related terms
  const relatedTerms = (item.relatedTermIds || [])
    .map((termId) => GLOSSARY_ITEMS.find((g) => g.id === termId))
    .filter((g): g is GlossaryItem => Boolean(g));

  const canonicalUrl = `https://dsintegra.co.id/glosarium/${item.id}`;

  // Structured Data: DefinedTerm Schema
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${canonicalUrl}#defined-term`,
    "name": item.term,
    "alternateName": item.acronym || undefined,
    "description": item.directAnswer || item.definition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Kamus Kepatuhan ICOFR BUMN & Tata Kelola Korporasi",
      "url": "https://dsintegra.co.id/glosarium"
    },
    "url": canonicalUrl
  };

  // Structured Data: FAQPage Schema (jika ada FAQ)
  const faqSchema = item.faqList && item.faqList.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": item.faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="w-full bg-[#ffffff] min-h-screen text-slate-900 py-12 md:py-20">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Glosarium ICOFR BUMN", path: "/glosarium" },
              { label: item.acronym ? `${item.term} (${item.acronym})` : item.term }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Back Link */}
        <button
          onClick={() => onNavigate("/glosarium")}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-400 transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Semua Istilah Glosarium
        </button>

        {/* Term Header Container */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-2.5 py-1 rounded bg-blue-950 border border-blue-800 text-blue-300 text-xs font-medium inline-flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {item.category}
            </span>
            {item.acronym && (
              <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-amber-300 font-mono text-xs font-bold">
                {item.acronym}
              </span>
            )}
            <span className="px-2.5 py-1 rounded bg-[#ffffff] border border-slate-200 text-slate-600 text-xs font-mono">
              Rujukan: {item.regulationRef}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
            {item.term} {item.acronym ? `(${item.acronym})` : ""}
          </h1>

          {/* Direct Answer Box (Inverted Pyramid for Featured Snippets & AI Engines) */}
          {item.directAnswer && (
            <div className="mb-8 p-5 sm:p-6 rounded-lg bg-blue-950/20 border border-blue-800/80">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Ringkasan Regulasi (Direct Answer)</span>
              </div>
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                {item.directAnswer}
              </p>
            </div>
          )}

          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Definisi Formal Kepatuhan
              </h2>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                {item.definition}
              </p>
            </div>

            {/* Key Takeaway Box */}
            <div className="p-5 rounded-lg bg-blue-950/30 border border-blue-900/50">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Poin Kunci untuk BUMN:
              </span>
              <p className="text-sm text-blue-100 leading-relaxed font-medium">
                {item.keyTakeaway}
              </p>
            </div>

            {/* Practical Example Box */}
            {item.practicalExample && (
              <div className="p-5 rounded-lg bg-[#ffffff] border border-slate-200">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Contoh Penerapan Praktis di Lapangan:
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.practicalExample}
                </p>
              </div>
            )}

            {/* Comparison Table Section (High Information Gain) */}
            {item.comparisonTable && (
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.comparisonTable.title}
                  </h3>
                </div>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        {item.comparisonTable.headers.map((hdr, hIdx) => (
                          <th key={hIdx} className="p-3.5 sm:p-4 font-mono text-xs">
                            {hdr}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70 bg-[#ffffff]">
                      {item.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 sm:p-4 font-semibold text-slate-800 align-top">
                            {row.aspect}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">
                            {row.primaryValue}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">
                            {row.secondaryValue}
                          </td>
                          {row.tertiaryValue && (
                            <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">
                              {row.tertiaryValue}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {item.faqList && item.faqList.length > 0 && (
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Pertanyaan Lazim Seputar {item.acronym || item.term}
                  </h3>
                </div>
                <div className="space-y-3">
                  {item.faqList.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-lg bg-[#ffffff] border border-slate-200">
                      <h4 className="text-xs sm:text-sm font-semibold text-blue-300 mb-1.5">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Commercial Solution Bridge Card */}
            {item.commercialBridge && (
              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-800/60 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Solusi Terkait
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {item.commercialBridge.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {item.commercialBridge.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate(item.commercialBridge!.primaryUrl)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    {item.commercialBridge.primaryLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {item.commercialBridge.secondaryUrl && (
                    <button
                      onClick={() => onNavigate(item.commercialBridge!.secondaryUrl!)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors"
                    >
                      {item.commercialBridge.secondaryLabel}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Terms Matrix */}
        {relatedTerms.length > 0 && (
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-4">
              Istilah Tata Kelola Terkait
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTerms.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(`/glosarium/${rel.id}`)}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-600/60 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs text-blue-400 font-mono font-medium">{rel.category}</span>
                      {rel.acronym && (
                        <span className="text-xs font-mono font-bold text-amber-300 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                          {rel.acronym}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{rel.term}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.definition}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-end text-xs font-semibold text-blue-400">
                    Pelajari Istilah
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Butuh Pendampingan Regulasi {item.acronym || item.term}?</h3>
            <p className="text-xs text-slate-700">
              Pelajari solusi implementasi teruji kami untuk memastikan kepatuhan penuh terhadap standar audit BUMN.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {item.relatedServiceUrl && (
              <button
                onClick={() => onNavigate(item.relatedServiceUrl!)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                {item.relatedServiceLabel || "Lihat Layanan Terkait"}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => onNavigate("/regulasi")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#ffffff] border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-colors"
            >
              Lihat Pusat Regulasi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
