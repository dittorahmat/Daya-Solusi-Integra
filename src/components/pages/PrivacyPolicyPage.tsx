import React from "react";
import { ShieldCheck, Lock, FileText, ChevronRight, CheckCircle2 } from "lucide-react";

import Breadcrumbs from "../Breadcrumbs";

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Kebijakan Privasi" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Kepatuhan Regulasi & Perlindungan Data
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Kebijakan Privasi & Tata Kelola Data Perusahaan
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-4">
            PT Daya Solusi Integra berkomitmen menjaga kerahasiaan, integritas, dan ketersediaan data institusional serta data pribadi mitra korporasi kami sesuai amanat Undang-Undang Perlindungan Data Pribadi (UU No. 27 Tahun 2022).
          </p>
          <div className="text-xs text-slate-500 font-mono">
            Terakhir Diperbarui: 25 September 2026 | Versi Dokumen: PDP-DSI-2026.1
          </div>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-800/50 text-blue-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">
                Prinsip Kerahasiaan Sektor Korporasi & BUMN
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Seluruh informasi yang diproses melalui portal interaktif, formulir konsultasi, instrumen kalkulator, maupun komunikasi konsultansi internal diperlakukan sebagai informasi rahasia bernilai tinggi. Kami tidak memperjualbelikan, mendistribusikan, atau membagikan data apa pun kepada pihak ketiga tanpa persetujuan eksplisit tertulis dari pengendali data.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-slate-300 font-light leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                01
              </span>
              Ruang Lingkup & Dasar Hukum Pengolahan Data
            </h2>
            <p className="mb-4">
              Kebijakan ini berlaku bagi seluruh pemangku kepentingan yang berinteraksi dengan situs resmi PT Daya Solusi Integra (https://dsintegra.co.id), layanan evaluasi kesiapan audit, perangkat asesmen maturitas, serta demonstrasi software GRC Integra.
            </p>
            <p className="mb-4">
              Dasar hukum pemrosesan data pribadi dan korporasi mengacu pada regulasi Republik Indonesia berikut:
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik beserta perubahan terbarunya.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Peraturan Menteri BUMN Nomor PER-2/MBU/03/2023 tentang Tata Kelola dan Kegiatan Korporasi Signifikan BUMN.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Surat Keputusan Menteri BUMN SK-5/DKU.MBU/11/2024 tentang Pedoman Evaluasi Pengendalian Internal atas Pelaporan Keuangan (ICOFR).</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                02
              </span>
              Kategori Data yang Dikumpulkan
            </h2>
            <p className="mb-4">
              Dalam operasional konsultasi dan interaksi web, data yang kami kelola terbagi dalam dua kategori utama:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-white mb-2 text-base">A. Data Kontak & Profesional (Lead Intake)</h3>
                <ul className="space-y-1.5 text-slate-300">
                  <li>• Nama lengkap pejabat perwakilan atau auditor</li>
                  <li>• Alamat surat elektronik korporat (@company.co.id)</li>
                  <li>• Nomor kontak telepon operasional / WhatsApp dinas</li>
                  <li>• Nama entitas BUMN, perbankan, atau anak perusahaan</li>
                  <li>• Jabatan fungsional atau divisi kerja (Risk, Compliance, SPI)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-white mb-2 text-base">B. Data Telemetri & Input Simulasi</h3>
                <ul className="space-y-1.5 text-slate-300">
                  <li>• Parameter simulasi kalkulator sampel TOE (frekuensi kontrol)</li>
                  <li>• Skor agregat kuis kematangan pengendalian internal</li>
                  <li>• Metadata teknis peramban dan protokol keamanan jaringan</li>
                  <li>• Tidak ada pencatatan data keuangan sensitif atau kredensial ERP</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                03
              </span>
              Tujuan Pemrosesan & Dasar Kepentingan yang Sah
            </h2>
            <p className="mb-4">
              PT Daya Solusi Integra memproses data yang dihimpun semata-mata untuk tujuan profesional yang sah:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#cca43b] font-bold">1.</span>
                <span>Penyediaan proposal jasa konsultasi implementasi ICOFR, audit ITGC, atau penyesuaian tata kelola BUMN.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#cca43b] font-bold">2.</span>
                <span>Penyelenggaraan demonstrasi langsung platform GRC Integra sesuai skenario arsitektur teknologi klien.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#cca43b] font-bold">3.</span>
                <span>Pemberian rekomendasi awal hasil evaluasi asesmen kematangan COSO yang diajukan pengguna.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#cca43b] font-bold">4.</span>
                <span>Pemenuhan kepatuhan hukum dan kewajiban audit forensik TI terhadap keamanan infrastruktur web.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                04
              </span>
              Standar Pengamanan & Penyimpanan Data
            </h2>
            <p className="mb-4">
              Kami menerapkan kontrol keamanan teknologi informasi yang ketat merujuk pada standar ISO/IEC 27001 dan POJK No. 11/POJK.03/2022:
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1">Enkripsi Data Transit & Data Rest</div>
                <div className="text-slate-400">Seluruh lalu lintas transmisi data dilindungi enkripsi SSL/TLS 1.3 berkekuatan tinggi, dan data tersimpan diamankan dengan mekanisme kriptografi berstandar industri.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1">Pemisahan Lingkungan Komputasi (Isolation)</div>
                <div className="text-slate-400">Data hasil konsultansi klien tersimpan dalam basis data tertutup dengan autentikasi multifaktor (MFA) dan segregasi hak akses berjenjang.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1">Retensi Data Proporsional</div>
                <div className="text-slate-400">Data korespondensi lead disimpan selama maksimum 24 bulan sejak kontak terakhir atau dihapus lebih cepat atas permintaan resmi tertulis pengendali data.</div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                05
              </span>
              Hak Subjek Data Sesuai UU No. 27/2022
            </h2>
            <p className="mb-4">
              Sebagai subjek data, perwakilan institusi memiliki hak penuh yang dijamin oleh peraturan perundang-undangan:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Hak mendapatkan informasi mengenai kejelasan identitas, dasar kepentingan hukum, dan tujuan permintaan data.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Hak melengkapi, memperbarui, atau memperbaiki kesalahan data pribadi milik subjek data.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Hak mengakhiri pemrosesan, menghapus, atau memusnahkan data pribadi yang tersimpan (right to erasure).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Hak menarik kembali persetujuan pemrosesan data pribadi yang telah diberikan kepada pengendali data.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                06
              </span>
              Kontak Petugas Perlindungan Data (DPO)
            </h2>
            <p className="mb-4">
              Untuk mengajukan pertanyaan, permintaan pembaruan, atau permohonan penghapusan data, silakan hubungi unit tata kelola kepatuhan kami melalui kanal resmi berikut:
            </p>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-sm space-y-1.5 font-mono text-slate-300">
              <div>PT Daya Solusi Integra (Compliance & Legal Division)</div>
              <div>Surel Khusus: privacy@dsintegra.co.id / legal@dsintegra.co.id</div>
              <div>Surel Umum: marketing@dsintegra.co.id</div>
              <div>Alamat: Gedung Talavera Office Park, Lantai 28, TB Simatupang Kav. 22-26, Cilandak Barat, Jakarta Selatan 12430</div>
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
              onClick={() => onNavigate("/pernyataan-independensi")}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Baca Pernyataan Independensi Konsultan →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
