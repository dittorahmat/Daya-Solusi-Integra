import React from "react";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  Layers, 
  Building2, 
  ChevronRight,
  FileSpreadsheet,
  Briefcase,
  HelpCircle
} from "lucide-react";
import Breadcrumbs from "../Breadcrumbs";
import GlossaryTooltip from "../GlossaryTooltip";
import { SECTOR_DATA_MAP, SectorData } from "../../data/sectorsData";

interface SectorDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAdvisor: () => void;
}

export default function SectorDetailPage({ slug, onNavigate, onOpenAdvisor }: SectorDetailPageProps) {
  const sector: SectorData | undefined = SECTOR_DATA_MAP[slug];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!sector) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#080c15] text-slate-100 text-center px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Sektor Tidak Ditemukan</h1>
        <p className="text-slate-400 mb-6">Informasi sektor BUMN yang Anda cari tidak tersedia.</p>
        <button
          onClick={() => onNavigate("/")}
          className="px-5 py-2.5 bg-bumn-blue text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  // Sektor lain untuk cross-navigation
  const otherSectors = Object.values(SECTOR_DATA_MAP).filter((s) => s.slug !== sector.slug);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080c15] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Sektor BUMN", path: "/#clients" },
              { label: sector.shortTitle }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{sector.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              {sector.heroHeading} <span className="text-bumn-gold">{sector.heroHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              {sector.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("/#contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 active:scale-[0.98] rounded-xl transition-all cursor-pointer border border-blue-400/20 shadow-sm"
              >
                Konsultasikan Solusi Sektor Ini
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/platform/grc-integra")}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all hover:bg-slate-800"
              >
                Platform GRC Integra
              </button>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-left space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-bumn-gold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Profil Entitas Target</span>
            </div>
            <div className="space-y-3">
              {sector.targetEntities.map((entity, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{entity}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-200">Regulasi Utama:</strong> {sector.primaryRegulation}</p>
              <p><strong className="text-slate-200">Regulasi Sektoral:</strong> {sector.sectorRegulationName}</p>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-20 text-left">
          <h2 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">Ringkasan Eksekutif & Lanskap Risiko</h2>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Tantangan Kepatuhan Khusus {sector.shortTitle}</h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
            {sector.executiveSummary}
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80">
            {sector.keyChallenges.map((challenge, idx) => (
              <div key={idx} className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Titik Risiko #{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{challenge.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Alignment Matrix Table */}
        <div className="mb-20 text-left">
          <div className="mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-bumn-gold">
              <Scale className="w-3.5 h-3.5" />
              <span>Matriks Komparasi Regulasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Harmonisasi Mandat SK-5 dengan Regulasi Sektor
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Memetakan titik temu antara kewajiban SK-5/DKU.MBU/11/2024 dan regulasi operasional industri untuk menghindari duplikasi pekerjaan kontrol.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-950">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300 font-mono text-xs">
                  <th className="py-3.5 px-4 font-semibold w-1/4">Mandat SK-5 Kementerian BUMN</th>
                  <th className="py-3.5 px-4 font-semibold w-1/4">Regulasi Spesifik Sektor</th>
                  <th className="py-3.5 px-4 font-semibold w-1/4">Tantangan Lapangan</th>
                  <th className="py-3.5 px-4 font-semibold w-1/4 text-blue-400">Solusi Daya Solusi Integra</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {sector.regulatoryAlignment.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-4 font-medium text-white align-top">{item.sk5Requirement}</td>
                    <td className="py-4 px-4 text-slate-300 align-top">{item.sectorRegulation}</td>
                    <td className="py-4 px-4 text-slate-400 align-top">{item.challenge}</td>
                    <td className="py-4 px-4 text-blue-300 font-medium align-top">{item.solutionByDsi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Typical RCM Blueprint Cards */}
        <div className="mb-20 text-left">
          <div className="mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-blue-400">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Arsitektur RCM Standar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Contoh Blueprint Risk and Control Matrix (RCM) Khas Sektor
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Tiga contoh titik kontrol kunci yang dirancang konsultan Daya Solusi Integra untuk menghadapi audit SPI, BPKP, dan KAP.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sector.rcmBlueprints.map((rcm, idx) => (
              <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-bumn-gold uppercase tracking-wider">RCM Item #{idx + 1}</span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">{rcm.frequency}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{rcm.processName}</h3>
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <p className="text-xs text-rose-300 font-medium">Risiko Finansial:</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{rcm.financialRisk}</p>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <p className="text-xs text-emerald-400 font-medium">Aktivitas Pengendalian Kunci:</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{rcm.keyControl}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">Metode Pengujian (TOE):</strong> {rcm.testingMethod}
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Link to TOE Calculator & Regulatory Hub */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-300 text-left">
              Ingin menghitung jumlah sampel audit untuk pengujian kontrol sektor ini sesuai kaidah Tabel 22?
            </span>
            <button
              onClick={() => onNavigate("/kalkulator-sampel-toe")}
              className="inline-flex items-center gap-1.5 text-bumn-gold hover:text-amber-300 font-semibold transition-colors shrink-0"
            >
              Gunakan Kalkulator Sampel TOE
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Strategic Benefits */}
        <div className="mb-20 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
            Dampak Strategis Implementasi Terpadu
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sector.strategicBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mb-2" />
                <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-20 text-left">
          <div className="mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Tanya Jawab Regulasi Sektor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {sector.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-2">
                <h3 className="text-base font-bold text-white">{faq.question}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Silo Navigation */}
        <div className="mb-20 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-left">
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">
            Eksplorasi Sektor BUMN Lainnya
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherSectors.map((other) => (
              <button
                key={other.slug}
                onClick={() => onNavigate(`/sektor-bumn/${other.slug}`)}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900 transition-all text-left group flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {other.navTitle}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                    {other.heroBadge}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Siap Memperkuat Kepatuhan SK-5 di Sektor {sector.shortTitle}?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan tata kelola, pendampingan penyusunan RCM, atau demo software GRC Integra bersama tim konsultan senior Daya Solusi Integra.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate("/#contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-bumn-blue hover:bg-blue-600 rounded-xl transition-all cursor-pointer shadow-md"
            >
              Hubungi Konsultan Sekarang
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/asesmen-maturitas")}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-all hover:bg-slate-800"
            >
              Asesmen Maturitas Mandiri
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
