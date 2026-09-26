import React, { useState, useMemo } from "react";
import { 
  Scale, 
  Search, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUpRight, 
  FileText, 
  BookOpen,
  Calendar,
  CheckCircle2,
  HelpCircle
} from "lucide-react";
import { 
  REGULATION_ITEMS, 
  REGULATION_CATEGORIES, 
  RegulationItem,
  REGULATORY_COMPARISON_MATRIX,
  RegulatoryComparisonRow
} from "../../data/regulationData";
import Breadcrumbs from "../Breadcrumbs";

interface RegulatoryHubPageProps {
  onNavigate: (path: string) => void;
  onOpenAdvisor?: () => void;
}

export default function RegulatoryHubPage({ onNavigate, onOpenAdvisor }: RegulatoryHubPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [matrixFilter, setMatrixFilter] = useState<string>("Semua");

  const filteredMatrix = useMemo(() => {
    if (matrixFilter === "Semua") return REGULATORY_COMPARISON_MATRIX;
    return REGULATORY_COMPARISON_MATRIX.filter((item: RegulatoryComparisonRow) => item.categoryTag === matrixFilter);
  }, [matrixFilter]);

  const filteredRegulations = useMemo(() => {
    return REGULATION_ITEMS.filter((item: RegulationItem) => {
      const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.identifier.toLowerCase().includes(q) ||
        item.shortTitle.toLowerCase().includes(q) ||
        item.officialTitle.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.issuingAuthority.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Pusat Regulasi BUMN" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            Repositori Hukum & Kepatuhan Audit
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Pusat Regulasi Pengendalian Internal & Tata Kelola BUMN
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Kompilasi direktori regulasi resmi Kementerian BUMN, OJK, dan standar pengawasan eksternal BPK RI yang mengatur kewajiban pengendalian internal pelaporan keuangan (ICOFR), pembagian peran Tiga Lini, serta tata kelola korporasi terintegrasi.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 sm:p-6 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari regulasi, nomor surat keputusan, atau otoritas penerbit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0b0f19] border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Category Select Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {REGULATION_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                    selectedCategory === category
                      ? "bg-blue-900/80 border-blue-600 text-white"
                      : "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-Regulatory Comparison Matrix Section (Featured Snippets & Direct Answers) */}
        <section id="matriks-komparasi" className="mb-16 scroll-mt-24">
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bumn-gold font-bold mb-2">
                  <ShieldCheck className="w-4 h-4 text-bumn-gold" />
                  <span>Matriks Komparasi Kepatuhan Lintas Regulator</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Perbandingan Mandat Regulasi Pengendalian Internal: BUMN vs OJK vs BPK RI
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  Tabel pemetaan normatif kewajiban asersi direksi, standar ukuran sampel pengujian, dan implikasi audit bagi Holding BUMN, perbankan, dan anak perusahaan.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 shrink-0">
                {["Semua", "Holding BUMN", "Sektor Finansial & Bank", "Standar Audit Eksternal"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setMatrixFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border cursor-pointer ${
                      matrixFilter === f
                        ? "bg-bumn-blue/30 border-blue-500 text-blue-300"
                        : "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Semantic Table Wrapper with Horizontal Scrolling */}
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#0b0f19]/80 text-slate-300 font-mono uppercase text-[11px] tracking-wider">
                    <th className="py-3.5 px-4 font-bold text-white min-w-[140px]">Regulasi</th>
                    <th className="py-3.5 px-4 font-bold min-w-[130px]">Penerbit</th>
                    <th className="py-3.5 px-4 font-bold min-w-[170px]">Subjek Entitas</th>
                    <th className="py-3.5 px-4 font-bold min-w-[160px]">Kerangka Acuan</th>
                    <th className="py-3.5 px-4 font-bold min-w-[200px]">Asersi Direksi</th>
                    <th className="py-3.5 px-4 font-bold min-w-[170px]">Metode & Sampel</th>
                    <th className="py-3.5 px-4 font-bold min-w-[210px]">Konsekuensi Audit</th>
                    <th className="py-3.5 px-4 font-bold min-w-[140px] text-right">Solusi Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredMatrix.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-4 px-4 align-top">
                        <span className="font-bold text-white block">{row.shortCode}</span>
                        <span className="text-[11px] font-mono text-slate-400 block mt-0.5">{row.regulationTitle}</span>
                        <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/80 text-blue-300 border border-blue-900/60">
                          {row.categoryTag}
                        </span>
                      </td>
                      <td className="py-4 px-4 align-top font-semibold text-slate-200">
                        {row.issuingBody}
                      </td>
                      <td className="py-4 px-4 align-top text-slate-300 leading-relaxed">
                        {row.scopeEntities}
                      </td>
                      <td className="py-4 px-4 align-top text-slate-300 leading-relaxed font-mono text-[11px]">
                        {row.framework}
                      </td>
                      <td className="py-4 px-4 align-top text-slate-300 leading-relaxed">
                        <span className="text-bumn-gold font-semibold block mb-0.5">Kewajiban Formal:</span>
                        {row.directorAssertionMandate}
                      </td>
                      <td className="py-4 px-4 align-top text-slate-300 leading-relaxed">
                        <span className="text-slate-400 font-mono text-[11px] block mb-1">{row.testingFrequency}</span>
                        <span className="text-[11px] text-blue-400">{row.samplingStandard}</span>
                      </td>
                      <td className="py-4 px-4 align-top text-slate-300 leading-relaxed">
                        {row.auditConsequence}
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <button
                          onClick={() => onNavigate(row.recommendedSolutionUrl)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900 border border-blue-800/80 text-blue-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <span>{row.recommendedSolutionLabel}</span>
                          <ArrowUpRight className="w-3 h-3 shrink-0" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <span>* Geser horizontal untuk melihat seluruh parameter perbandingan.</span>
              <div className="flex items-center gap-2">
                <span>Butuh kalkulasi sampel pengujian TOE normatif?</span>
                <button
                  onClick={() => onNavigate("/kalkulator-sampel-toe")}
                  className="text-blue-400 hover:text-blue-300 font-semibold underline cursor-pointer"
                >
                  Buka Kalkulator Tabel 22
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Regulation Directory Ledger */}
        <div className="space-y-12">
          {filteredRegulations.length === 0 ? (
            <div className="text-center py-16 bg-[#0f172a] border border-slate-800 rounded-xl">
              <FileText className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-300 text-base font-medium">Tidak ada regulasi yang sesuai dengan kriteria pencarian.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); }}
                className="mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
              >
                Reset Filter Pencarian
              </button>
            </div>
          ) : (
            filteredRegulations.map((reg) => (
              <div 
                key={reg.id}
                id={reg.id}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-slate-700 transition-all scroll-mt-24"
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded bg-blue-950 border border-blue-800 text-blue-300 font-mono text-xs font-semibold">
                        {reg.identifier}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium">
                        {reg.category}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                      {reg.shortTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
                      {reg.officialTitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0 bg-[#0b0f19] px-3.5 py-2 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Berlaku Efektif: {reg.effectiveDate}</span>
                  </div>
                </div>

                {/* Summary & Primary Mandate */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 border-b border-slate-800/80">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Ringkasan Eksekutif</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {reg.summary}
                    </p>
                    <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-900/50">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">Mandat Kunci Kepatuhan:</span>
                      <p className="text-xs text-blue-200 leading-relaxed font-medium">
                        {reg.primaryMandate}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 bg-[#0b0f19] p-4 rounded-lg border border-slate-800/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Entitas & Target Sasaran:</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {reg.targetAudience}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block pt-2">Otoritas Penerbit:</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {reg.issuingAuthority}
                    </p>
                  </div>
                </div>

                {/* Three Lines Model Matrix Table */}
                <div className="py-6 border-b border-slate-800/80">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Matriks Distribusi Tanggung Jawab Tiga Lini (Three Lines of Defense)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800">
                      <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Lini 1 (Operasional Bisnis)
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {reg.threeLinesRole.firstLine}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800">
                      <div className="text-xs font-semibold text-blue-400 mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Lini 2 (Risiko & Kepatuhan)
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {reg.threeLinesRole.secondLine}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800">
                      <div className="text-xs font-semibold text-amber-400 mb-2 flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5" />
                        Lini 3 (Satuan Pengawas Intern)
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {reg.threeLinesRole.thirdLine}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Articles Grid */}
                <div className="py-6 border-b border-slate-800/80">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Pasal & Klausul Penting Pelaksanaan
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {reg.keyArticles.map((article, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-mono font-semibold text-blue-400 block mb-1">
                            {article.article}
                          </span>
                          <h4 className="text-sm font-bold text-white mb-2">{article.title}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed mb-3">
                            {article.summary}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-800/60 text-xs text-slate-400 font-medium">
                          <span className="text-slate-300 font-semibold">Implikasi Kepatuhan: </span>
                          {article.complianceImpact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs & Related Solutions Footer */}
                <div className="pt-6 flex flex-col lg:flex-row gap-6 justify-between items-start">
                  <div className="space-y-3 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Pertanyaan Kunci:</span>
                    {reg.faqs.map((faq, idx) => (
                      <div key={idx} className="text-xs space-y-1">
                        <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          {faq.question}
                        </div>
                        <div className="text-slate-400 pl-5 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 pt-2 lg:pt-0">
                    {reg.relatedSolutions.map((sol, idx) => (
                      <button
                        key={idx}
                        onClick={() => onNavigate(sol.url)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0b0f19] border border-slate-800 hover:border-blue-600 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
                      >
                        {sol.label}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Bottom Banner Navigation */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-950/40 to-[#0f172a] border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ingin Menguji Kesiapan BUMN Anda Terhadap SK-5/2024?</h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Manfaatkan asesmen mandiri interaktif kami atau diskusikan kebutuhan penyusunan Risk and Control Matrix (RCM) bersama konsultan senior Daya Solusi Integra.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("/asesmen-maturitas")}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              Mulai Asesmen Maturitas
            </button>
            <button
              onClick={() => onNavigate("/glosarium")}
              className="px-5 py-2.5 rounded-lg bg-[#0b0f19] border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Buka Glosarium Istilah
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
