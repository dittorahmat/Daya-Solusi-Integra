import React from "react";
import { 
  Workflow, 
  Calculator, 
  QrCode, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight
} from "lucide-react";

interface GrcIntegraPlatformProps {
  onRequestDemo: () => void;
}

export default function GrcIntegraPlatform({ onRequestDemo }: GrcIntegraPlatformProps) {
  return (
    <section id="platform" className="relative py-24 bg-[#080d1a] border-t border-b border-slate-850 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-bumn-gold" />
            <span>Arsitektur Perangkat Lunak GRC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-display">
            Platform Lifecycle <span className="text-bumn-gold">GRC Integra</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-[1.8]">
            Platform digital pertama yang dirancang 100% patuh terhadap mandat Regulasi Kementerian BUMN <strong className="text-white font-medium">SK-5/DKU.MBU/11/2024</strong>. Mengintegrasikan pemetaan proses bisnis, pengujian efektivitas pengendalian, hingga asersi direksi tanpa spreadsheet terpecah.
          </p>
        </div>

        {/* 4 Core Platform Modules (Clean Flat Grid Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-left space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Modul 01 : Lampiran 3</span>
                <h3 className="text-base font-bold text-white tracking-tight mt-0.5">BPM Visual Standar</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Visualisasi pemetaan proses bisnis dengan notasi resmi BUMN (Hexagon Risiko, Silinder Arsip, dan Aktivitas Kontrol) tersinkronisasi otomatis ke RCM.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-blue-400">Sinkronisasi RCM Otomatis</span>
              <a href="/platform/bpm-workflow-editor" className="text-bumn-gold hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors">
                <span>Detail Fitur</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-left space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Modul 02 : Bab III.4</span>
                <h3 className="text-base font-bold text-white tracking-tight mt-0.5">Walkthrough Lini 2</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Pemisahan peran pengisian Lini 1 dan validasi independen Lini 2. Uji Test of One dengan kewajiban upload bukti otentik tanpa celah audit.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-blue-400">
              Validasi Independen Lini 2
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-left space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Modul 03 : Bab V.1.3</span>
                <h3 className="text-base font-bold text-white tracking-tight mt-0.5">Kalkulator Tabel 22</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Penentuan ukuran sampel pengujian TOE otomatis berbasis frekuensi kontrol (Harian, Mingguan, Bulanan) lengkap dengan justifikasi homogenitas.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-blue-400">
              Kalkulasi Sampel Akurat
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-left space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-bumn-gold">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Modul 04 : Lampiran 11</span>
                <h3 className="text-base font-bold text-white tracking-tight mt-0.5">Asersi Direksi & QR Lock</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Kertas kerja terarsip secara permanen (immutable) dengan pernyataan asersi manajemen CEO & CFO berverifikasi Dynamic QR Code untuk laporan tahunan.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-bumn-gold">
              Tanda Tangan Terkunci Resmi
            </div>
          </div>

        </div>

        {/* Executive Spec Bar & Direct Action */}
        <div className="p-6 sm:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left mb-14">
          <div className="space-y-1.5 max-w-3xl">
            <span className="text-xs font-mono text-bumn-gold uppercase tracking-wider font-semibold">
              Kesiapan Implementasi BUMN
            </span>
            <h4 className="text-lg font-bold text-white tracking-tight">
              Pre-loaded 11 Klaster Industri BUMN & Portal Akses Auditor KAP
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Dilengkapi ratusan pustaka risiko industri dan portal independen khusus KAP auditor eksternal untuk pengujian substantif yang transparan.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/platform/grc-integra"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Dokumentasi Platform</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bumn-blue hover:bg-blue-600 border border-blue-400/20 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Jadwalkan Demo Teknis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Value Pillars Precision Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-800/80">
          <div className="text-left space-y-1">
            <div className="text-blue-400 font-bold text-2xl font-display tabular-nums">60%</div>
            <strong className="text-white text-sm block">Efisiensi Siklus Audit</strong>
            <p className="text-xs text-slate-400 leading-relaxed">Mengeliminasi pengumpulan kertas kerja manual antar divisi dan anak usaha.</p>
          </div>
          <div className="text-left space-y-1">
            <div className="text-emerald-400 font-bold text-2xl font-display tabular-nums">100%</div>
            <strong className="text-white text-sm block">Kepatuhan Mandat SK-5</strong>
            <p className="text-xs text-slate-400 leading-relaxed">Formulir baku, penomoran kontrol, dan metodologi telah selaras juknis BUMN.</p>
          </div>
          <div className="text-left space-y-1">
            <div className="text-bumn-gold font-bold text-2xl font-display tabular-nums">11 Sektor</div>
            <strong className="text-white text-sm block">Pustaka Risiko BUMN</strong>
            <p className="text-xs text-slate-400 leading-relaxed">Database risiko bawaan lintas klaster untuk percepatan fase scoping.</p>
          </div>
          <div className="text-left space-y-1">
            <div className="text-blue-400 font-bold text-2xl font-display tabular-nums">KAP-Ready</div>
            <strong className="text-white text-sm block">Portal Auditor Eksternal</strong>
            <p className="text-xs text-slate-400 leading-relaxed">Mendukung independensi KAP rekanan BUMN dalam pengujian dan pemberian opini.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
