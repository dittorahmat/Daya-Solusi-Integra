import React from 'react';
import {
  Workflow,
  FileUp,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  FileText,
  Download,
  Monitor,
  Users,
  Building2,
  Calendar,
  Eye,
  CheckSquare
} from 'lucide-react';
import FaqSection from '../FaqSection';
import { ROUTE_FAQS } from '../../data/faqData';

interface BpmWorkflowEditorPageProps {
  onRequestDemo: () => void;
  onNavigate: (path: string) => void;
}

export const BpmWorkflowEditorPage: React.FC<BpmWorkflowEditorPageProps> = ({
  onRequestDemo,
  onNavigate
}) => {
  const faqs = ROUTE_FAQS['/platform/bpm-workflow-editor'] || [];

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen pt-28 pb-20 selection:bg-blue-600/30">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-blue-400 transition-colors focus:outline-none"
          >
            Beranda
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('/platform/grc-integra')}
            className="hover:text-blue-400 transition-colors focus:outline-none"
          >
            Software GRC Integra
          </button>
          <span>/</span>
          <span className="text-slate-200 font-medium">BPM Workflow Editor</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <Workflow className="w-3.5 h-3.5" />
            Modul Arsitektur Proses Bisnis & Dokumentasi SOP
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Visual BPM Workflow Editor: Desain SOP Native Web Rasa Visio
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Modernisasi pemetaan proses bisnis dan diagram alir SOP perusahaan Anda ke kanvas digital native web yang presisi. Dukung impor dokumen eksisting (PDF, JPG, PNG) dengan rekonstruksi otomatis menjadi diagram interaktif, siap dihubungkan ke pengujian pengendalian internal.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              Jadwalkan Sesi Demo Eksklusif
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => onNavigate('/platform/grc-integra')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-colors"
            >
              Kembali ke Platform Utama
            </button>
          </div>
        </div>

        {/* Visio-Style Web Canvas Mockup Preview */}
        <div className="mt-16 rounded-xl border border-slate-800 bg-[#0f172a] shadow-2xl overflow-hidden">
          {/* Top Bar Window Chrome (Architectural / Professional, No fake macOS lights) */}
          <div className="border-b border-slate-800 bg-[#0a0f1d] px-4 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-blue-400" />
                GRC Integra : BPM Canvas
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono">SOP-PROC-04: Pengadaan Barang & Jasa Strategis</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                v2.4 Disetujui
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[11px] hidden sm:inline">Standar: BPMN 2.0 Compliant</span>
              <div className="h-4 w-px bg-slate-800 hidden sm:block" />
              <button
                onClick={onRequestDemo}
                className="text-xs px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                Undang Demo
              </button>
            </div>
          </div>

          {/* 3-Column Studio Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* Left: Shape Library & Stencils */}
            <div className="lg:col-span-3 border-r border-slate-800 bg-[#0c1322] p-4 text-xs">
              <div className="text-slate-400 font-semibold uppercase tracking-wider mb-3 text-[10px]">
                Pustaka Simbol BPMN & Flowchart
              </div>

              <div className="space-y-2 mb-6">
                <div className="p-2.5 rounded border border-slate-800 bg-slate-900/80 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 inline-block" />
                    Start Event (Awal Proses)
                  </span>
                  <span className="text-slate-500 text-[10px]">BPMN</span>
                </div>
                <div className="p-2.5 rounded border border-slate-800 bg-slate-900/80 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-2.5 rounded border border-blue-400 inline-block" />
                    Task / Aktivitas Manual
                  </span>
                  <span className="text-slate-500 text-[10px]">Lini 1</span>
                </div>
                <div className="p-2.5 rounded border border-slate-800 bg-slate-900/80 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rotate-45 border border-amber-400 inline-block" />
                    Exclusive Gateway (Keputusan)
                  </span>
                  <span className="text-slate-500 text-[10px]">Logika</span>
                </div>
                <div className="p-2.5 rounded border border-slate-800 bg-slate-900/80 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    Control Point (Titik Kontrol)
                  </span>
                  <span className="text-slate-500 text-[10px]">ICOFR</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-slate-400 font-semibold uppercase tracking-wider mb-2 text-[10px]">
                  Smart File Import
                </div>
                <div className="p-3 rounded border border-dashed border-slate-700 bg-slate-900/40 text-center">
                  <FileUp className="w-5 h-5 text-blue-400 mx-auto mb-1.5" />
                  <p className="text-[11px] text-slate-300 font-medium">Unggah Alur Eksisting</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Dukung PDF, JPG, PNG alur SOP lama</p>
                </div>
              </div>
            </div>

            {/* Middle: Canvas Workspace */}
            <div className="lg:col-span-6 p-6 bg-[#090d16] flex flex-col justify-between relative overflow-hidden">
              {/* Subtle Canvas Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Lane Headers */}
              <div className="relative z-10 space-y-4">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>SWIMLANE 1: UNIT PENGADAAN (USER)</span>
                  <span className="text-slate-500">SNAP TO GRID: ON (10px)</span>
                </div>

                {/* Workflow Simulation Nodes */}
                <div className="space-y-6 pt-2">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-emerald-400 bg-emerald-950/40 flex items-center justify-center text-[10px] text-emerald-300 font-bold shrink-0">
                      01
                    </div>
                    <div className="flex-1 p-3 rounded border border-slate-700 bg-slate-900/90 shadow-sm">
                      <div className="text-xs font-semibold text-white">Penyusunan Kerangka Acuan Kerja (KAK)</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Input kebutuhan spesifikasi barang/jasa oleh Pemilik Anggaran</div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-6 bg-slate-700 ml-4" />

                  {/* Step 2 with Control Point */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-md border border-blue-400 bg-blue-950/40 flex items-center justify-center text-[10px] text-blue-300 font-bold shrink-0">
                      02
                    </div>
                    <div className="flex-1 p-3 rounded border border-blue-500/50 bg-blue-950/30 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Verifikasi Kelayakan HPS & Anggaran</span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-blue-300 px-1.5 py-0.5 rounded bg-blue-900/60 border border-blue-400/40 font-mono">
                          <ShieldCheck className="w-3 h-3" />
                          KONTROL ICOFR-04
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Pemeriksaan kewajaran harga oleh Tim Verifikator Independen</div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-6 bg-slate-700 ml-4" />

                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded border border-amber-400 bg-amber-950/40 flex items-center justify-center text-[10px] text-amber-300 font-bold shrink-0">
                      03
                    </div>
                    <div className="flex-1 p-3 rounded border border-slate-700 bg-slate-900/90 shadow-sm">
                      <div className="text-xs font-semibold text-white">Persetujuan Otorisasi Tender</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Tanda tangan digital pejabat berwenang sesuai limit delegasi kewenangan (DoA)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Canvas Footer Status */}
              <div className="relative z-10 pt-4 mt-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Total 14 Node Langkah Alur</span>
                <span className="text-emerald-400 font-medium">Validitas Alur: 100% Terhubung (No Dangling Nodes)</span>
              </div>
            </div>

            {/* Right: Inspector Panel & Properties */}
            <div className="lg:col-span-3 border-l border-slate-800 bg-[#0c1322] p-4 text-xs">
              <div className="text-slate-400 font-semibold uppercase tracking-wider mb-3 text-[10px]">
                Atribut Elemen Terpilih
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">ID Elemen</label>
                  <input
                    type="text"
                    readOnly
                    value="TASK-PROC-02"
                    aria-label="ID Elemen"
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-300 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Penanggung Jawab (PIC)</label>
                  <input
                    type="text"
                    readOnly
                    value="Manager Perencanaan & Pengadaan"
                    aria-label="Penanggung Jawab (PIC)"
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Klasifikasi Langkah</label>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                    Key Activity dengan Titik Kontrol Finansial
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Hubungan Pengendalian Internal</label>
                  <div className="p-2 rounded bg-blue-950/30 border border-blue-900/60 text-[11px] text-blue-200">
                    Terhubung ke RCM (Risk & Control Matrix) Siklus Pengadaan
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="text-slate-400 font-semibold uppercase tracking-wider mb-2 text-[10px]">
                  Format Ekspor Dokumen
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <span className="p-1.5 rounded border border-slate-800 bg-slate-900 text-slate-300">PDF SOP</span>
                  <span className="p-1.5 rounded border border-slate-800 bg-slate-900 text-slate-300">PNG Hi-Res</span>
                  <span className="p-1.5 rounded border border-slate-800 bg-slate-900 text-slate-300">XML BPMN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Smart Migration Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Migrasi Instan SOP Konvensional
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Bagaimana Smart Auto-Draw Mengubah File Alur Lama Anda
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Tidak perlu lagi menggambar ulang ratusan diagram SOP dari awal. Unggah dokumen yang sudah Anda miliki dan biarkan sistem merekonstruksinya ke kanvas modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-slate-800 bg-[#0d1527]">
            <div className="w-10 h-10 rounded bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold mb-4">
              <FileUp className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-blue-400 mb-1">LANGKAH 01</div>
            <h3 className="text-base font-semibold text-white mb-2">Unggah Dokumen SOP Eksisting</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kumpulkan file alur kerja yang sudah digunakan di organisasi Anda dalam format PDF, gambar scan JPG, atau PNG hasil ekspor diagram lawas.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-slate-800 bg-[#0d1527]">
            <div className="w-10 h-10 rounded bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-blue-400 mb-1">LANGKAH 02</div>
            <h3 className="text-base font-semibold text-white mb-2">Auto-Draw & Rekonstruksi Diagram</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Engine pengenalan bentuk membaca urutan langkah alur, percabangan keputusan, dan teks deskripsi, lalu menyusunnya menjadi diagram terstruktur di kanvas.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-slate-800 bg-[#0d1527]">
            <div className="w-10 h-10 rounded bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-blue-400 mb-1">LANGKAH 03</div>
            <h3 className="text-base font-semibold text-white mb-2">Edit Bebas & Integrasi Pengendalian</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Diagram yang terbentuk sepenuhnya interaktif. Anda dapat menggeser node, memperbarui teks PIC, menyematkan titik kontrol, dan mengekspor hasilnya kapan saja.
            </p>
          </div>
        </div>
      </section>

      {/* Visio Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Perbandingan Solusi
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Mengapa Beralih dari Diagram Terpisah ke GRC Integra BPM?
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Bandingkan antara menggambar alur di aplikasi desktop konvensional dengan kanvas terintegrasi governance perusahaan.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-800 bg-[#0d1527]">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-800 bg-[#0a0f1d] text-slate-300 text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4">Dimensi Kapabilitas</th>
                <th scope="col" className="px-6 py-4 text-slate-400">Software Diagram Terpisah (Standalone)</th>
                <th scope="col" className="px-6 py-4 text-blue-400">BPM Workflow Editor GRC Integra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              <tr>
                <td className="px-6 py-4 font-medium text-white">Lingkungan Kerja (Aksesibilitas)</td>
                <td className="px-6 py-4 text-slate-400">Aplikasi desktop berbayar per lisensi komputer atau browser silo</td>
                <td className="px-6 py-4 text-slate-200">Native Web Canvas terpusat, dapat diakses multi-pengguna tanpa instalasi khusus</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Migrasi Diagram Eksisting</td>
                <td className="px-6 py-4 text-slate-400">Harus digambar ulang manual dari nol satu demi satu</td>
                <td className="px-6 py-4 text-slate-200">Fitur Auto-Draw dari unggahan file format PDF, JPG, maupun PNG alur lama</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Koneksi ke Matriks Pengendalian</td>
                <td className="px-6 py-4 text-slate-400">Terputus (hanya gambar kosmetik, dokumentasi manual di Excel terpisah)</td>
                <td className="px-6 py-4 text-slate-200">Setiap node langkah dapat dipetakan langsung ke titik kontrol internal (RCM)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Standar Notasi & Simbol</td>
                <td className="px-6 py-4 text-slate-400">Bebas tanpa validasi relasi alur antar swimlane</td>
                <td className="px-6 py-4 text-slate-200">Standar BPMN 2.0 dengan validasi orthogonal connector dan swimlane terstruktur</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Kesiapan Audit Pengendalian</td>
                <td className="px-6 py-4 text-slate-400">SOP sulit dibuktikan sinkronisasinya dengan uji kepatuhan aktual</td>
                <td className="px-6 py-4 text-slate-200">Single Source of Truth untuk audit kepatuhan, pengujian TOD, dan TOE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo Scheduling Options Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Konsultasi & Demonstrasi Langsung
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Pilih Format Sesi Demo Bersama Tim Spesialis GRC Kami
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Kami siap memandu tim tata kelola, manajemen risiko, atau pemilik proses bisnis di instansi Anda untuk melihat langsung kapabilitas BPM Workflow Editor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option A: Offline Demo */}
          <div className="p-8 rounded-xl border border-slate-800 bg-[#0d1527] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Building2 className="w-4 h-4" />
                Khusus Wilayah Jabodetabek
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Sesi Demo Offline: Tatap Muka di Kantor Anda
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Tim konsultan kami akan hadir langsung ke kantor instansi atau kantor holding BUMN Anda di wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi untuk presentasi interaktif dan uji sampel pemetaan alur SOP organisasi Anda.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Diskusi mendalam arsitektur proses bersama lintas divisi
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Simulasi langsung rekonstruksi dokumen SOP lama instansi Anda
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Kesesuaian dengan mandat pedoman tata kelola BUMN terbaru
                </li>
              </ul>
            </div>

            <button
              onClick={onRequestDemo}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              Ajukan Demo Tatap Muka (Jabodetabek)
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Option B: Online Demo */}
          <div className="p-8 rounded-xl border border-slate-800 bg-[#0d1527] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Monitor className="w-4 h-4" />
                Nasional & Seluruh Indonesia
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Sesi Demo Online: Daring Fleksibel via Video Conference
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Sesi presentasi dan demo langsung dari layar editor secara daring melalui platform video conference (Google Meet, Zoom, atau Microsoft Teams), dirancang fleksibel bagi tim kantor pusat maupun unit kerja regional di seluruh wilayah Indonesia.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Jadwal fleksibel dapat disesuaikan dengan kalender tim internal Anda
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Dapat dihadiri oleh perwakilan berbagai kantor cabang wilayah
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Materi rekaman dan panduan produk langsung dikirimkan pasca-sesi
                </li>
              </ul>
            </div>

            <button
              onClick={onRequestDemo}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-colors"
            >
              Ajukan Demo Daring (Online Nasional)
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-slate-800/80">
        <FaqSection
          items={faqs}
          title="Tanya Jawab Seputar BPM Workflow Editor"
          subtitle="Pertanyaan umum mengenai kanvas pembuatan alur proses bisnis, migrasi dokumen lama, dan penjadwalan sesi demo."
        />
      </section>

      {/* Final Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-slate-800/80">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Siap Mentransformasi Dokumentasi Proses Bisnis Organisasi Anda?
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Tinggalkan cara lama yang terfragmentasi. Integrasikan peta proses alur kerja Anda dengan kerangka pengendalian internal BUMN secara seamless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              Jadwalkan Sesi Presentasi & Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => onNavigate('/platform/grc-integra')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-colors"
            >
              Jelajahi Modul Platform Lainnya
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BpmWorkflowEditorPage;
