import React, { useState, useMemo } from "react";
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUpRight, 
  FileText,
  Filter
} from "lucide-react";
import { GLOSSARY_ITEMS, GLOSSARY_CATEGORIES, GlossaryItem } from "../../data/glossaryData";

interface GlossaryPageProps {
  onNavigate: (path: string) => void;
  onOpenAdvisor?: () => void;
}

export default function GlossaryPage({ onNavigate, onOpenAdvisor }: GlossaryPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredItems = useMemo(() => {
    return GLOSSARY_ITEMS.filter((item: GlossaryItem) => {
      const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.term.toLowerCase().includes(q) ||
        (item.acronym && item.acronym.toLowerCase().includes(q)) ||
        item.definition.toLowerCase().includes(q) ||
        item.regulationRef.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
          <button 
            onClick={() => onNavigate("/")} 
            className="hover:text-slate-200 transition-colors focus:outline-none"
          >
            Beranda
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-blue-400 font-medium">Glosarium ICOFR BUMN</span>
        </nav>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Kamus & Rujukan Regulasi
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Glosarium Tata Kelola & Pengendalian Internal ICOFR BUMN
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Kompilasi definisi resmi, singkatan istilah teknis, dan standar evaluasi pengendalian internal atas pelaporan keuangan berdasarkan Surat Keputusan Menteri BUMN Nomor SK-5/DKU.MBU/11/2024 dan COSO Internal Control Integrated Framework.
          </p>
        </div>

        {/* Filter and Instant Search Bar */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 sm:p-6 mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari istilah, akronim (TOD, TOE, ELC, TLC), atau regulasi..."
                className="w-full bg-[#0b0f19] border border-slate-700/80 rounded-lg pl-11 pr-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1 hidden sm:flex">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {GLOSSARY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-[#0b0f19] text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-slate-400 mb-6 px-1">
          <span>Menampilkan {filteredItems.length} istilah terdaftar</span>
          {selectedCategory !== "Semua" && (
            <span className="text-blue-400 font-medium">Kategori: {selectedCategory}</span>
          )}
        </div>

        {/* Glossary Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-12 text-center">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-base mb-1">Istilah tidak ditemukan</p>
            <p className="text-slate-500 text-xs mb-4">Coba cari dengan kata kunci lain atau pilih kategori Semua.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); }}
              className="text-xs px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <article 
                key={item.id} 
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Category Badge & Regulation Reference */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-blue-300 border border-slate-700/60">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3 h-3 text-[#cca43b]" />
                      {item.regulationRef}
                    </span>
                  </div>

                  {/* Term Title & Acronym */}
                  <h2 className="text-xl font-bold text-white mb-3">
                    {item.term}
                    {item.acronym && (
                      <span className="ml-2 text-sm font-semibold text-[#cca43b] px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                        {item.acronym}
                      </span>
                    )}
                  </h2>

                  {/* Definition Body */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.definition}
                  </p>

                  {/* Regulatory Key Takeaway */}
                  <div className="p-3 rounded-lg bg-[#0b0f19] border border-slate-800/80 mb-4">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <FileText className="w-3 h-3 text-blue-400" />
                      Amanat Regulasi
                    </div>
                    <p className="text-xs text-slate-300 leading-normal">
                      {item.keyTakeaway}
                    </p>
                  </div>
                </div>

                {/* Internal Linking Anchor */}
                {item.relatedServiceUrl && (
                  <div className="pt-3 border-t border-slate-800/60 mt-2">
                    <button
                      onClick={() => onNavigate(item.relatedServiceUrl!)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      <span>Lihat Solusi Terkait: {item.relatedServiceLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Bottom Lead Banner */}
        <div className="mt-16 bg-[#0f172a] border border-slate-800 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            Perlu Pendampingan Kepatuhan SK-5 BUMN?
          </h3>
          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Daya Solusi Integra menyediakan pendampingan konsultansi dan platform software GRC Integra untuk menyederhanakan alur siklus hidup pengendalian internal Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate("/platform/grc-integra")}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
            >
              Eksplorasi Platform GRC Integra
            </button>
            {onOpenAdvisor && (
              <button
                onClick={onOpenAdvisor}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-colors"
              >
                Konsultasi AI Advisor
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
