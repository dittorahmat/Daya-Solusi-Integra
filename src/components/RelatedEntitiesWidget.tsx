import React from "react";
import { 
  Calculator, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck2, 
  ExternalLink 
} from "lucide-react";

interface RelatedEntitiesWidgetProps {
  postSlug: string;
  postCategory: string;
  postTags: string[];
  onNavigate: (path: string) => void;
}

interface InteractiveToolConfig {
  title: string;
  badge: string;
  description: string;
  targetUrl: string;
  ctaText: string;
  icon: React.ElementType;
}

interface GlossaryEntityLink {
  term: string;
  acronym?: string;
  snippet: string;
  targetSlug: string;
}

interface RelatedSiloService {
  title: string;
  category: string;
  targetUrl: string;
}

export default function RelatedEntitiesWidget({
  postSlug,
  postCategory,
  postTags,
  onNavigate
}: RelatedEntitiesWidgetProps) {
  // Determine relevant interactive tool based on post topic
  const isToeTopic = 
    postSlug.includes("toe") || 
    postSlug.includes("sampel") || 
    postTags.some(t => t.toLowerCase().includes("toe") || t.toLowerCase().includes("sampel") || t.toLowerCase().includes("pengujian"));

  const isItgcTopic = 
    postSlug.includes("itgc") || 
    postCategory.toLowerCase().includes("ti") || 
    postTags.some(t => t.toLowerCase().includes("itgc") || t.toLowerCase().includes("teknologi"));

  // Interactive Tool Target
  const tool: InteractiveToolConfig = isToeTopic
    ? {
        title: "Kalkulator Sampel Pengujian TOE (Tabel 22 SK-5)",
        badge: "Alat Interaktif Regulasi BUMN",
        description: "Hitung ukuran sampel minimum pengujian efektivitas pengendalian operasional secara otomatis berdasarkan frekuensi kontrol dan tingkat deviasi nol.",
        targetUrl: "/kalkulator-sampel-toe",
        ctaText: "Buka Kalkulator Sampel TOE",
        icon: Calculator
      }
    : {
        title: "Evaluasi Mandiri Kematangan Pengendalian Internal",
        badge: "Diagnostic Tool BUMN",
        description: "Ukur kesiapan implementasi pengendalian internal ICOFR dan kepatuhan kerangka COSO entitas Anda secara instan dalam 5 domain utama.",
        targetUrl: "/asesmen-maturitas",
        ctaText: "Mulai Asesmen Maturitas",
        icon: FileCheck2
      };

  // Curated Glossary Entities based on topic
  const glossaryEntities: GlossaryEntityLink[] = isToeTopic
    ? [
        {
          term: "Test of Operating Effectiveness",
          acronym: "TOE",
          snippet: "Pengujian kepatuhan konsistensi operasi kontrol sepanjang periode asersi manajemen.",
          targetSlug: "toe"
        },
        {
          term: "Tabel 22 Regulasi BUMN",
          snippet: "Matriks resmi penentuan sampel kontrol manual zero tolerable deviation.",
          targetSlug: "tabel-22"
        },
        {
          term: "Test of Design",
          acronym: "TOD",
          snippet: "Evaluasi kecukupan rancangan kontrol sebelum melangkah ke pengujian efektivitas operasi.",
          targetSlug: "tod"
        }
      ]
    : isItgcTopic
    ? [
        {
          term: "Information Technology General Controls",
          acronym: "ITGC",
          snippet: "Pengendalian umum atas manajemen akses, perubahan sistem, dan operasional TI korporat.",
          targetSlug: "itgc"
        },
        {
          term: "Internal Control over Financial Reporting",
          acronym: "ICOFR",
          snippet: "Proses terintegrasi penjaminan keandalan penyusunan laporan keuangan auditan BUMN.",
          targetSlug: "icofr"
        },
        {
          term: "Entity-Level Controls",
          acronym: "ELC",
          snippet: "Pengendalian payung tingkat entitas mencakup lingkungan kontrol dan tata kelola komisaris.",
          targetSlug: "elc"
        }
      ]
    : [
        {
          term: "Internal Control over Financial Reporting",
          acronym: "ICOFR",
          snippet: "Kerangka penjaminan keandalan pelaporan keuangan berlandaskan SK-5/DKU.MBU/11/2024.",
          targetSlug: "icofr"
        },
        {
          term: "Walkthrough Pengendalian Internal",
          snippet: "Penelusuran transaksi end-to-end oleh penjamin independen Lini 2.",
          targetSlug: "walkthrough-lini-2"
        },
        {
          term: "Asersi Manajemen",
          snippet: "Pernyataan tanggung jawab tahunan formal yang ditandatangani oleh CEO dan CFO.",
          targetSlug: "asersi-manajemen"
        }
      ];

  // Related Service Silo
  const relatedService: RelatedSiloService = isItgcTopic
    ? {
        title: "Audit Kesiapan ITGC & Keamanan Siber",
        category: "Layanan Spesialis",
        targetUrl: "/layanan/itgc-audit-readiness"
      }
    : isToeTopic
    ? {
        title: "Platform GRC Integra: Otomasi Siklus ICOFR",
        category: "Produk Software",
        targetUrl: "/platform/grc-integra"
      }
    : {
        title: "Pendampingan Implementasi ICOFR BUMN",
        category: "Layanan Konsultasi",
        targetUrl: "/layanan/icofr-bumn"
      };

  const ToolIcon = tool.icon;

  return (
    <section 
      aria-label="Aset dan Istilah Terkait"
      className="my-12 p-6 sm:p-8 rounded-2xl bg-[#0d1627] border border-slate-800 shadow-xl"
    >
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-6">
        <ShieldCheck className="w-4 h-4 text-blue-400" />
        <span>Aset Terkait & Kamus Regulasi</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Tool Callout */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full p-6 rounded-xl bg-[#0b0f19] border border-slate-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
              <ToolIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>{tool.badge}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-snug">
              {tool.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {tool.description}
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onNavigate(tool.targetUrl)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bumn-blue hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer group"
            >
              <span>{tool.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Regulatory Terms & Service Anchor */}
        <div className="lg:col-span-5 space-y-6">
          {/* Glossary Entity Pills */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-bumn-gold" />
                Istilah Glosarium Terkait
              </span>
              <button
                onClick={() => onNavigate("/glosarium")}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Semua</span>
                <ChevronRightSmall />
              </button>
            </div>

            <div className="space-y-2.5">
              {glossaryEntities.map((item) => (
                <div
                  key={item.targetSlug}
                  onClick={() => onNavigate("/glosarium")}
                  className="p-3 rounded-lg bg-[#0b0f19]/70 border border-slate-800/80 hover:border-slate-700 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                      {item.term} {item.acronym ? `(${item.acronym})` : ""}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {item.snippet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Service / Platform Anchor */}
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-1.5 mb-2.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Silo Terkait
            </span>
            <div
              onClick={() => onNavigate(relatedService.targetUrl)}
              className="p-3.5 rounded-lg bg-[#0b0f19]/70 border border-slate-800/80 hover:border-bumn-blue/50 transition-all cursor-pointer group flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-medium text-blue-400 block">
                  {relatedService.category}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {relatedService.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronRightSmall() {
  return (
    <svg 
      className="w-3.5 h-3.5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
