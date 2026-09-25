import React from "react";
import { Award, ShieldAlert, FileCheck2, ChevronRight, CheckCircle2 } from "lucide-react";

interface IndependenceStatementPageProps {
  onNavigate: (path: string) => void;
}

export default function IndependenceStatementPage({ onNavigate }: IndependenceStatementPageProps) {
  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
          <button 
            onClick={() => onNavigate("/")} 
            className="hover:text-slate-200 transition-colors focus:outline-none"
          >
            Beranda
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-blue-400 font-medium">Pernyataan Independensi</span>
        </nav>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/60 border border-amber-800/60 text-[#cca43b] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Integritas & Kode Etik Profesional
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Pernyataan Independensi & Integritas Konsultan
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-4">
            Komitmen transparansi, pencegahan benturan kepentingan, dan pemisahan tegas peran advisor implementasi dengan fungsi audit independen dalam penugasan tata kelola ICOFR BUMN.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            Kode Etik Profesi | Rujukan: Standar IIA, BPKP, IAPI & Regulasi SK-5 Kementerian BUMN
          </div>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-800/50 text-[#cca43b] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">
                Pemisahan Peran Konsultan Pendamping vs Lembaga Audit Eksternal
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                PT Daya Solusi Integra beroperasi sebagai mitra penasihat strategis (consulting advisor) dan penyedia solusi teknologi GRC. Kami tidak memberikan opini audit keuangan independen atas laporan keuangan korporasi. Peran kami difokuskan penuh untuk membantu manajemen (Direksi) memenuhi kesiapan rancangan dan pengujian pengendalian internal sebelum diperiksa oleh Kantor Akuntan Publik (KAP) atau Badan Pemeriksa Keuangan (BPK).
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-slate-300 font-light leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-amber-950 text-[#cca43b] text-xs font-mono font-bold border border-amber-800">
                01
              </span>
              Prinsip Objektivitas Bebas Benturan Kepentingan
            </h2>
            <p className="mb-4">
              Setiap konsultan, analis risiko, dan staf pengembang PT Daya Solusi Integra terikat oleh pakta integritas dan standar perilaku profesional yang ketat:
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                <span>Bebas dari hubungan kepemilikan saham, pinjaman terafiliasi, atau ikatan keluarga dengan jajaran Direksi dan Dewan Komisaris entitas yang didampingi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                <span>Dilarang menerima kompensasi, gratifikasi, atau imbalan non-kontraktual dalam bentuk apa pun dari vendor pihak ketiga yang dievaluasi dalam pengujian kontrol ITGC atau operasional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                <span>Menjaga batas independensi pikiran (independence of mind) dan independensi penampilan (independence in appearance) dalam menyusun evaluasi defisiensi kontrol.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-amber-950 text-[#cca43b] text-xs font-mono font-bold border border-amber-800">
                02
              </span>
              Kesesuaian dengan Model Tiga Lini (Three Lines Model)
            </h2>
            <p className="mb-4">
              Penerapan regulasi SK-5/DKU.MBU/11/2024 dan kerangka COSO menuntut pembagian peran yang tegas pada setiap lini pertahanan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-white mb-2">Lini Pertama (Operasional)</h3>
                <p className="text-slate-400 text-xs">
                  Pemilik proses bisnis bertanggung jawab menjalankan aktivitas pengendalian harian dan memelihara bukti transaksi.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-[#cca43b] mb-2">Lini Kedua & Advisor (DSI)</h3>
                <p className="text-slate-400 text-xs">
                  Daya Solusi Integra mendampingi Lini 2 dalam metodologi scoping, penyusunan RCM, dan pengujian independen TOD dan TOE.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-blue-400 mb-2">Lini Ketiga & Eksternal</h3>
                <p className="text-slate-400 text-xs">
                  Satuan Pengawasan Intern (SPI), BPKP, KAP, dan BPK melaksanakan audit asurans independen atas efektivitas tata kelola.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-amber-950 text-[#cca43b] text-xs font-mono font-bold border border-amber-800">
                03
              </span>
              Netralitas Platform Software GRC Integra
            </h2>
            <p className="mb-4">
              Perangkat lunak GRC Integra dibangun dengan prinsip auditabilitas netral dan dapat diverifikasi:
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1">Penerapan Audit Trail Kekal (Immutable Logging)</div>
                <div className="text-slate-400">Setiap perubahan data RCM, kertas kerja walkthrough, dan hasil evaluasi sampel dicatat secara kronologis tanpa celah manipulasi rekaman.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1">Segregasi Akses Pengujian</div>
                <div className="text-slate-400">Penguji Lini 1 tidak dapat merangkap menyetujui pengujian Lini 2, memastikan asersi Direksi mencerminkan kondisi pengendalian faktual di lapangan.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1">Keterbukaan Metodologi</div>
                <div className="text-slate-400">Formula penentuan ukuran sampel merujuk secara transparan pada Tabel 22 regulasi SK-5 BUMN tanpa algoritma tersembunyi yang menguntungkan salah satu pihak.</div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-amber-950 text-[#cca43b] text-xs font-mono font-bold border border-amber-800">
                04
              </span>
              Mekanisme Pelaporan Pelanggaran (Whistleblowing)
            </h2>
            <p className="mb-4">
              Apabila ditemukan indikasi benturan kepentingan atau pelanggaran independensi oleh personel kami dalam penugasan konsultansi, klien dapat melaporkan secara rahasia melalui saluran dewan pengawas etik kami:
            </p>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-sm space-y-1.5 font-mono text-slate-300">
              <div>Komite Etik & Tata Kelola PT Daya Solusi Integra</div>
              <div>Surel Saluran Rahasia: ethics@dsintegra.co.id / governance@dsintegra.co.id</div>
              <div>Laporan ditindaklanjuti secara langsung oleh Managing Partner dengan perlindungan kerahasiaan identitas pelapor.</div>
            </div>
          </section>

        </div>

        {/* CTA Return */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => onNavigate("/")}
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            ← Kembali ke Halaman Utama
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate("/kebijakan-privasi")}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Baca Kebijakan Privasi & Tata Kelola Data →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
