import React, { useState } from "react";
import { 
  Layers, 
  Workflow, 
  Calculator, 
  QrCode, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  FileCheck2, 
  Database, 
  ExternalLink 
} from "lucide-react";

interface GrcIntegraPlatformProps {
  onRequestDemo: () => void;
}

export default function GrcIntegraPlatform({ onRequestDemo }: GrcIntegraPlatformProps) {
  const [activeTab, setActiveTab] = useState<"bpm" | "calculator" | "walkthrough" | "signoff">("bpm");

  return (
    <section id="platform" className="relative py-24 bg-[#080d1a] border-t border-b border-slate-800/80 overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#cca43b]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#cca43b]" />
            Enterprise Digital Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Memperkenalkan <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-[#cca43b] bg-clip-text text-transparent">GRC Integra</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Platform siklus hidup ICOFR digital pertama yang dirancang 100% patuh terhadap mandat 
            <strong className="text-white font-medium"> Regulasi Kementerian BUMN SK-5/DKU.MBU/11/2024</strong>.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Tinggalkan pengelolaan spreadsheet terpecah-pecah. Standardisasi Scoping, Walkthrough Lini 2, Pengujian TOE/TOD, hingga Asersi Manajemen CEO & CFO dalam satu sistem terintegrasi.
          </p>
        </div>

        {/* Interactive Feature Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Navigation / Feature Tabs (Left column) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            
            <button
              onClick={() => setActiveTab("bpm")}
              className={`text-left p-5 rounded-xl border transition-all duration-300 relative ${
                activeTab === "bpm"
                  ? "bg-slate-900 border-blue-500 shadow-lg shadow-blue-950/50"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "bpm" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Standardized BPM Visual</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Visualisasi pemetaan proses bisnis sesuai notasi resmi Lampiran 3 (Oval, Hexagon Risiko, Silinder Arsip, dan Aktivitas Kontrol).
              </p>
              {activeTab === "bpm" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("walkthrough")}
              className={`text-left p-5 rounded-xl border transition-all duration-300 relative ${
                activeTab === "walkthrough"
                  ? "bg-slate-900 border-blue-500 shadow-lg shadow-blue-950/50"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "walkthrough" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Validasi Lini 2 & Walkthrough</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eksekusi formal "Test of One" untuk validasi rancangan kontrol (TOD) dengan kewajiban upload bukti otentik (Bab III.4).
              </p>
              {activeTab === "walkthrough" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("calculator")}
              className={`text-left p-5 rounded-xl border transition-all duration-300 relative ${
                activeTab === "calculator"
                  ? "bg-slate-900 border-blue-500 shadow-lg shadow-blue-950/50"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "calculator" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Kalkulator Sampel Tabel 22</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Penentuan ukuran sampel pengujian TOE otomatis berbasis frekuensi kontrol dan justifikasi homogenitas wajib (Bab V.1.3).
              </p>
              {activeTab === "calculator" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("signoff")}
              className={`text-left p-5 rounded-xl border transition-all duration-300 relative ${
                activeTab === "signoff"
                  ? "bg-slate-900 border-blue-500 shadow-lg shadow-blue-950/50"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "signoff" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Digital Sign-off CEO/CFO</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Asersi manajemen formal (Lampiran 11) berfitur Sign & Lock dengan verifikasi QR Code dinamis untuk integritas laporan audit.
              </p>
              {activeTab === "signoff" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r" />
              )}
            </button>

          </div>

          {/* Interactive Screen Preview Container (Right column) */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">grc-integra.dsintegra.co.id/workspace</span>
              </div>
              <span className="text-[11px] font-semibold tracking-wide text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/40">
                SK-5 BUMN Compliant
              </span>
            </div>

            {/* Tab 1: BPM Visual */}
            {activeTab === "bpm" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Visual Business Process Mapping (BPM)</h4>
                    <p className="text-xs text-slate-400">Pemetaan alur transaksi siklus signifikan berbasis notasi baku regulasi BUMN</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Notasi Baku Lampiran 3
                  </span>
                </div>

                <div className="p-6 bg-slate-950/80 border border-slate-800/80 rounded-xl font-mono text-xs text-slate-300 space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
                    <span className="px-3 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-950/40 text-emerald-300 font-sans">
                      Start (Oval)
                    </span>
                    <span className="text-slate-600">➔</span>
                    <span className="px-3 py-1.5 rounded-lg border border-blue-500/50 bg-blue-950/40 text-blue-300 font-sans">
                      Aktivitas Transaksi (Kotak)
                    </span>
                    <span className="text-slate-600">➔</span>
                    <span className="px-3 py-1.5 rounded border border-red-500/50 bg-red-950/40 text-red-300 font-sans">
                      Titik Risiko (Hexagon)
                    </span>
                    <span className="text-slate-600">➔</span>
                    <span className="px-3 py-1.5 rounded border border-[#cca43b]/60 bg-amber-950/30 text-[#cca43b] font-sans">
                      Kontrol Kunci (Belah Ketupat)
                    </span>
                  </div>
                  <div className="border-t border-slate-800/80 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 font-sans">
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <strong className="text-white block text-sm mb-1">Pre-loaded 11 Klaster BUMN</strong>
                      <p className="text-xs text-slate-400">Tersedia ribuan template risiko & kontrol siap pakai untuk sektor Energi, Tambang, Finansial, Perkebunan, dan Manufaktur.</p>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <strong className="text-white block text-sm mb-1">BPM to RCM Auto-Sync</strong>
                      <p className="text-xs text-slate-400">Setiap perubahan node proses di diagram alur secara otomatis memperbarui Risk Control Matrix tanpa risiko desinkronisasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Walkthrough */}
            {activeTab === "walkthrough" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Validasi Independen Lini 2 & Walkthrough</h4>
                    <p className="text-xs text-slate-400">Pemisahan peran ketat antara Pemilik Kontrol (Lini 1) dan Tim Validasi Risiko (Lini 2)</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-800/40">
                    <FileCheck2 className="w-3.5 h-3.5" /> Bab III Pasal 4 Mandat
                  </span>
                </div>

                <div className="p-5 bg-slate-950/80 border border-slate-800/80 rounded-xl space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg">
                      <span className="text-xs text-slate-400 block mb-1">Langkah 1</span>
                      <strong className="text-sm text-white">CSA Process Owner</strong>
                      <span className="text-[11px] text-emerald-400 block mt-1">Lini 1 Mengisi</span>
                    </div>
                    <div className="p-3 bg-blue-950/40 border border-blue-500/40 rounded-lg">
                      <span className="text-xs text-blue-300 block mb-1">Langkah 2</span>
                      <strong className="text-sm text-white">Test of One Walkthrough</strong>
                      <span className="text-[11px] text-blue-400 block mt-1">Lini 2 Memvalidasi</span>
                    </div>
                    <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg">
                      <span className="text-xs text-slate-400 block mb-1">Langkah 3</span>
                      <strong className="text-sm text-white">Evidence Repository</strong>
                      <span className="text-[11px] text-amber-400 block mt-1">Audit Trail Kunci</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Setiap desain kontrol wajib diverifikasi melalui 1 transaksi contoh nyata. Sistem mengunci status kontrol dan menolak pengesahan jika belum ada dokumen pendukung (voucher, invoice, approval log) yang diunggah.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Calculator */}
            {activeTab === "calculator" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Automated Sample Size Calculator</h4>
                    <p className="text-xs text-slate-400">Perhitungan sampel pengujian kepatuhan otomatis sesuai Tabel 22 Regulasi BUMN</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-800/40">
                    <Calculator className="w-3.5 h-3.5" /> Bab V 1.3 Matriks Sampel
                  </span>
                </div>

                <div className="p-5 bg-slate-950/80 border border-slate-800/80 rounded-xl space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-300">
                      <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider text-[10px]">
                        <tr>
                          <th className="p-2.5">Frekuensi Kontrol</th>
                          <th className="p-2.5">Populasi Sampel</th>
                          <th className="p-2.5 text-right">Ukuran Sampel Minimum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                        <tr>
                          <td className="p-2.5 text-white font-sans">Harian / Kontinu (Daily)</td>
                          <td className="p-2.5 text-slate-400">~250 - 365 kejadian</td>
                          <td className="p-2.5 text-right font-bold text-emerald-400">25 - 40 Sampel</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-white font-sans">Mingguan (Weekly)</td>
                          <td className="p-2.5 text-slate-400">~52 kejadian</td>
                          <td className="p-2.5 text-right font-bold text-emerald-400">5 - 10 Sampel</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-white font-sans">Bulanan (Monthly)</td>
                          <td className="p-2.5 text-slate-400">12 kejadian</td>
                          <td className="p-2.5 text-right font-bold text-emerald-400">2 - 5 Sampel</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-400">
                    *Mencakup formulir justifikasi homogenitas otomatis jika auditor internal memilih batas bawah sampel pengujian.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 4: Sign-off */}
            {activeTab === "signoff" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Digital Sign & Lock dengan Dynamic QR Code</h4>
                    <p className="text-xs text-slate-400">Pernyataan asersi manajemen eksekutif sesuai Lampiran 11 SK-5</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#cca43b] bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-800/40">
                    <QrCode className="w-3.5 h-3.5" /> Verifikasi Integritas Asersi
                  </span>
                </div>

                <div className="p-5 bg-slate-950/80 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center gap-6">
                  <div className="p-4 bg-white rounded-xl shadow-lg flex-shrink-0">
                    <QrCode className="w-24 h-24 text-slate-900" />
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <strong className="text-sm text-white block">Tanda Tangan Digital Direktur Utama & Direktur Keuangan</strong>
                    <p className="text-slate-400">
                      Setelah siklus pengujian dan remediasi selesai, sistem mengunci kertas kerja secara permanen (*immutable archive*) dan menerbitkan lembar asersi manajemen ber-QR Code untuk laporan tahunan BUMN.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-blue-400">
                      <ExternalLink className="w-3.5 h-3.5" /> Portal Khusus Akses Mandiri untuk Auditor KAP Eksternal (Bab VIII)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Call to Action inside container */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-white font-semibold text-sm block">Siap mentransformasi kepatuhan ICOFR organisasi Anda?</span>
                <span className="text-xs text-slate-400">Dapatkan demo langsung dan uji coba alur kerja GRC Integra.</span>
              </div>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-[#0b4596] hover:from-blue-500 hover:to-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 transition-all cursor-pointer"
              >
                <span>Jadwalkan Live Demo GRC Integra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Value Pillars Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-blue-400 font-extrabold text-2xl mb-1">60%</div>
            <strong className="text-white text-sm block mb-1">Efisiensi Siklus Audit</strong>
            <p className="text-xs text-slate-400">Mengeliminasi pengumpulan kertas kerja manual antar divisi dan unit bisnis.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-emerald-400 font-extrabold text-2xl mb-1">100%</div>
            <strong className="text-white text-sm block mb-1">Kepatuhan Mandat SK-5</strong>
            <p className="text-xs text-slate-400">Formulir baku, penomoran kode kontrol, dan metodologi telah selaras juknis BUMN.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-[#cca43b] font-extrabold text-2xl mb-1">11 Sektor</div>
            <strong className="text-white text-sm block mb-1">Pre-loaded Risk Library</strong>
            <p className="text-xs text-slate-400">Database risiko bawaan khusus industri BUMN untuk percepatan fase scoping.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-purple-400 font-extrabold text-2xl mb-1">KAP-Ready</div>
            <strong className="text-white text-sm block mb-1">Portal Auditor Eksternal</strong>
            <p className="text-xs text-slate-400">Mendukung independensi KAP rekanan BUMN dalam pengujian dan pemberian opini.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
