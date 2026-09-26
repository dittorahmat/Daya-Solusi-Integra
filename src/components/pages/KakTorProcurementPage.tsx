import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Building2, 
  Users, 
  Clock, 
  Server, 
  Cpu, 
  AlertCircle,
  FileCheck2
} from "lucide-react";
import Breadcrumbs from "../Breadcrumbs";

interface KakTorProcurementPageProps {
  onNavigate: (path: string) => void;
}

export default function KakTorProcurementPage({ onNavigate }: KakTorProcurementPageProps) {
  const [activeTab, setActiveTab] = useState<"consulting" | "software" | "experts">("consulting");
  const [formData, setFormData] = useState({
    name: "",
    bumnName: "",
    email: "",
    phone: "",
    role: "Pejabat Pembuat Komitmen (PPK) / Panitia Pengadaan",
    packageType: "Konsultan ICOFR & Software GRC",
    needsHpsConsultation: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://dsintegra.co.id/panduan-kak-tor-icofr#article",
        "headline": "Panduan Penyusunan KAK dan TOR Pengadaan Konsultan ICOFR serta Software GRC BUMN",
        "url": "https://dsintegra.co.id/panduan-kak-tor-icofr",
        "description": "Panduan klausul Kerangka Acuan Kerja (KAK / TOR) resmi untuk tender jasa konsultan evaluasi pengendalian internal pelaporan keuangan SK-5/DKU.MBU/11/2024 dan spesifikasi teknis software GRC BUMN.",
        "author": {
          "@type": "Person",
          "name": "Humbul Kristiawan",
          "jobTitle": "Lead GRC & IT Governance Specialist",
          "url": "https://dsintegra.co.id/penulis/humbul-kristiawan"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PT Daya Solusi Integra",
          "url": "https://dsintegra.co.id"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://dsintegra.co.id/panduan-kak-tor-icofr#howto",
        "name": "Cara Menyusun KAK Pengadaan Kepatuhan ICOFR BUMN",
        "description": "Tahapan penyusunan dokumen Kerangka Acuan Kerja pengadaan kepatuhan pengendalian internal BUMN sesuai regulasi SK-5.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Penetapan Ruang Lingkup dan Batasan Materialitas Akun",
            "text": "Menentukan cakupan entitas induk dan anak perusahaan serta akun laporan keuangan material."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Penyusunan Spesifikasi Teknis Perangkat Lunak GRC",
            "text": "Menetapkan kriteria sistem otomasi mencakup visualisasi BPMN, kalkulator Tabel 22, dan modul asersi digital."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Penetapan Standar Kompetensi Tenaga Ahli",
            "text": "Menyusun kriteria kualifikasi sertifikasi profesi tim pelaksana seperti CRMA, CISA, dan Akuntan Beregister."
          }
        ]
      }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.bumnName) return;

    const subject = encodeURIComponent(`Permohonan Draf KAK & Spesifikasi Teknis Tender : ${formData.bumnName}`);
    const body = encodeURIComponent(
      `Halo Tim Kemitraan & Tender PT Daya Solusi Integra,\n\n` +
      `Saya mengajukan permohonan pengiriman berkas draf dokumen Word (.DOCX) Kerangka Acuan Kerja (KAK) dan Rincian Spesifikasi Teknis Pengadaan Kepatuhan SK-5 BUMN.\n\n` +
      `Informasi Pemohon:\n` +
      `- Nama Lengkap: ${formData.name}\n` +
      `- Instansi BUMN / Anak Usaha: ${formData.bumnName}\n` +
      `- Jabatan / Peran Pengadaan: ${formData.role}\n` +
      `- Surel Resmi: ${formData.email}\n` +
      `- Nomor Kontak / WhatsApp: ${formData.phone || "-"}\n` +
      `- Fokus Paket Pengadaan: ${formData.packageType}\n` +
      `- Minat Konsultasi Estimasi HPS / Review RKAP: ${formData.needsHpsConsultation ? "Ya, Butuh Pendampingan" : "Hanya Dokumen KAK"}\n\n` +
      `Mohon draf dokumen dapat dikirimkan ke surel tersebut. Terima kasih.`
    );

    window.location.href = `mailto:marketing@dsintegra.co.id?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Beranda", path: "/" },
            { label: "Kualifikasi Vendor", path: "/kualifikasi-vendor" },
            { label: "Panduan KAK & TOR Pengadaan BUMN" }
          ]}
        />

        {/* Header Section */}
        <div className="mt-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            Standard Operating Procurement : SK-5/DKU.MBU/11/2024
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Panduan Penyusunan KAK &amp; TOR Pengadaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#cca43b]">Konsultan ICOFR &amp; Software GRC</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            Rujukan resmi klausul Kerangka Acuan Kerja (KAK), rincian spesifikasi teknis platform sistem, 
            dan standar kompetensi personil tenaga ahli untuk Panitia Pengadaan, Pejabat Pembuat Komitmen (PPK), 
            serta Satuan Pengawasan Intern (SPI) Badan Usaha Milik Negara.
          </p>
        </div>

        {/* Legal Context & Framework Banner */}
        <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Landasan Hukum Pengadaan</span>
              <h2 className="text-lg font-bold text-white">Dasar Regulasi Wajib Tender Pengendalian Internal BUMN</h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                Pengadaan jasa pendampingan konsultan dan sistem perangkat lunak berpedoman pada Peraturan Menteri BUMN No. PER-2/MBU/03/2023 
                dan Surat Keputusan No. SK-5/DKU.MBU/11/2024 yang mewajibkan asersi kepatuhan laporan keuangan tahunan.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  const element = document.getElementById("kak-download-form");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-900/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Permohonan Draf Dokumen KAK (.DOCX)
              </button>
            </div>
          </div>
        </div>

        {/* Main Tab Switcher */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("consulting")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "consulting"
                ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            <FileText className="w-4 h-4" />
            1. Klausul KAK Jasa Konsultan ICOFR
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "software"
                ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            <Server className="w-4 h-4" />
            2. Spesifikasi Teknis Software GRC
          </button>
          <button
            onClick={() => setActiveTab("experts")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "experts"
                ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            <Users className="w-4 h-4" />
            3. Standar Kualifikasi Tenaga Ahli
          </button>
        </div>

        {/* Tab 1: Klausul KAK Konsultan ICOFR */}
        {activeTab === "consulting" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-[#0d1527] border border-blue-900/40">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Pasal Baku Ruang Lingkup Pekerjaan Konsultan (Scope of Work)</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Klausul standar yang disarankan untuk dicantumkan dalam Bab Ruang Lingkup KAK Pengadaan Jasa Konsultasi Pendampingan Pengendalian Internal:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-mono text-blue-400 font-semibold block mb-1">Klausul 1.1 : Scoping Materialitas &amp; Entity-Level Assessment</span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Penyedia jasa wajib melakukan penentuan batas materialitas akun laporan keuangan (kuantitatif dan kualitatif), 
                    identifikasi entitas anak usaha dalam ruang lingkup konsolidasi, serta evaluasi pengendalian tingkat entitas (ELC) 
                    berdasarkan 5 komponen dan 17 prinsip kerangka kerja COSO 2013.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-mono text-blue-400 font-semibold block mb-1">Klausul 1.2 : Penyusunan dan Validasi Risk &amp; Control Matrix (RCM)</span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Penyedia jasa wajib menyusun matriks risiko dan pengendalian (RCM) yang memetakan proses bisnis utama, 
                    mengidentifikasi What Could Go Wrong (WCGW), menghubungkan dengan asersi manajemen laporan keuangan 
                    (Existence, Completeness, Valuation, Rights &amp; Obligations, Presentation), serta membedakan kontrol kunci (Key Control) dan sekunder.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-mono text-blue-400 font-semibold block mb-1">Klausul 1.3 : Pelaksanaan Walkthrough TOD &amp; Pengujian Sampel TOE</span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Penyedia jasa wajib mendampingi pengujian rancangan (Test of Design - Test of One) bersama Lini 1 dan Lini 2, 
                    serta melaksanakan pengujian efektivitas operasional (Test of Operating Effectiveness) menggunakan ukuran sampel 
                    normatif Tabel 22 Regulasi SK-5 BUMN dengan standar toleransi penyimpangan nol (zero deviation).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-mono text-blue-400 font-semibold block mb-1">Klausul 1.4 : Evaluasi Defisiensi &amp; Perumusan Surat Asersi Direksi</span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Penyedia jasa wajib mengklasifikasikan temuan pengujian ke dalam Control Deficiency, Significant Deficiency, 
                    atau Material Weakness, menyusun Corrective Action Plan (CAP) terstruktur, dan merumuskan draf formal 
                    Surat Pernyataan Asersi Pengendalian Internal Direksi sesuai format baku Lampiran 11 SK-5.
                  </p>
                </div>
              </div>
            </div>

            {/* Deliverables Table */}
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">Daftar Dokumen Luaran Wajib (Mandatory Deliverables)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono">
                      <th className="py-3 px-4">No</th>
                      <th className="py-3 px-4">Dokumen Luaran</th>
                      <th className="py-3 px-4">Format Dokumen</th>
                      <th className="py-3 px-4">Ketentuan Kepatuhan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    <tr>
                      <td className="py-3 px-4 font-mono text-slate-500">D-01</td>
                      <td className="py-3 px-4 font-medium text-white">Laporan Scoping Akun &amp; ELC COSO</td>
                      <td className="py-3 px-4">PDF &amp; Spreadsheet Terstruktur</td>
                      <td className="py-3 px-4">Disetujui Komite Audit &amp; Direktur Keuangan</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-slate-500">D-02</td>
                      <td className="py-3 px-4 font-medium text-white">Risk and Control Matrix (RCM) Lengkap</td>
                      <td className="py-3 px-4">Format Digital Terintegrasi</td>
                      <td className="py-3 px-4">Mencakup 100% akun material dan proses pendukung</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-slate-500">D-03</td>
                      <td className="py-3 px-4 font-medium text-white">Kertas Kerja Pengujian TOD &amp; TOE</td>
                      <td className="py-3 px-4">Berita Acara &amp; Kertas Kerja Audit</td>
                      <td className="py-3 px-4">Sampel terverifikasi sesuai Tabel 22 Kementerian BUMN</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-slate-500">D-04</td>
                      <td className="py-3 px-4 font-medium text-white">Deficiency Sheet &amp; Remediation Plan (CAP)</td>
                      <td className="py-3 px-4">Matriks Rekomendasi Terjadwal</td>
                      <td className="py-3 px-4">Tanggung jawab unit pemilik kontrol (Lini 1) jelas</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-slate-500">D-05</td>
                      <td className="py-3 px-4 font-medium text-white">Draf Final Surat Asersi Direksi (Lampiran 11)</td>
                      <td className="py-3 px-4">Naskah Dinas Format SK-5</td>
                      <td className="py-3 px-4">Siap ditandatangani Direksi dan diserahkan ke Kementerian</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Spesifikasi Teknis Software GRC */}
        {activeTab === "software" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-[#0d1527] border border-blue-900/40">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Spesifikasi Kebutuhan Sistem Perangkat Lunak GRC (Software Specification)</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Kriteria teknis minimum perangkat lunak yang disarankan bagi panitia pengadaan untuk mencegah risiko kegagalan audit dan ketidaksesuaian regulasi:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <Server className="w-4 h-4" />
                    1. Kedaulatan Data &amp; Opsi Deployment
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                      <span>Wajib mendukung instalasi on-premise di pusat data lokal BUMN atau private cloud terisolasi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                      <span>Mematuhi UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                      <span>Tidak mengalirkan data keuangan atau RCM ke server publik pihak ketiga.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <Layers className="w-4 h-4" />
                    2. Visualisasi BPMN 2.0 Native
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                      <span>Menyediakan canvas pemetaan diagram proses bisnis standar BPMN (Lampiran 3 SK-5).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                      <span>Setiap simbol proses dapat dihubungkan langsung ke titik risiko dan kontrol RCM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                      <span>Mendukung impor bagan alir dari dokumen SOP eksisting.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    3. Kalkulator Sampel Normatif Tabel 22
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                      <span>Menyediakan kalkulator ukuran sampel otomatis sesuai Tabel 22 SK-5 berdasarkan frekuensi kontrol.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                      <span>Pemberitahuan otomatis deviasi kontrol dengan aturan toleransi kesalahan nol (zero deviation).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                      <span>Log pengujian audit elektronik dengan pelacakan waktu (timestamped audit trail).</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <FileCheck2 className="w-4 h-4" />
                    4. Asersi Digital Ber-QR Code
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                      <span>Kemampuan merangkum status seluruh kontrol menjadi ringkasan asersi Direksi secara digital.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                      <span>Verifikasi keaslian dokumen asersi melalui QR Code cryptographic hash unik.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                      <span>Ekspor laporan siap cetak sesuai standar Lampiran 11 regulasi Kementerian BUMN.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Standar Kualifikasi Tenaga Ahli */}
        {activeTab === "experts" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Standar Kualifikasi Minimum Tim Tenaga Ahli</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Untuk memastikan akurasi dan kredibilitas di hadapan auditor eksternal KAP maupun BPK RI, KAK wajib menetapkan syarat kompetensi personil:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-white text-base">1. Team Leader / Senior GRC Specialist</span>
                    <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">Pengalaman Minimum 10 Tahun</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Pendidikan minimum S1 Akuntansi / Manajemen / Sistem Informasi. Memiliki sertifikasi profesional internasional 
                    yang relevan seperti CRMA (Certification in Risk Management Assurance), CIA (Certified Internal Auditor), 
                    atau Akuntan Beregister Negara (CA/CPA), serta pengalaman memimpin minimal 3 proyek implementasi ICOFR atau GRC di lingkungan BUMN.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-white text-base">2. ITGC &amp; Information Security Specialist</span>
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">Pengalaman Minimum 7 Tahun</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Pendidikan minimum S1 Teknik Informatika / Sistem Informasi. Memiliki sertifikasi resmi CISA (Certified Information Systems Auditor) 
                    atau CISM, menguasai audit pengendalian umum TI (access control, change management, backup &amp; DR), 
                    serta regulasi POJK No. 11/POJK.03/2022 dan ISO 27001.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-white text-base">3. Financial Process &amp; Accounting Specialist</span>
                    <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Pengalaman Minimum 5 Tahun</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Pendidikan minimum S1 Akuntansi. Memahami PSAK terkini (PSAK 71, PSAK 72, PSAK 73) dan siklus transaksi akuntansi BUMN 
                    (Procure-to-Pay, Order-to-Cash, Fixed Assets, Financial Close), berpengalaman menyusun RCM dan walkthrough Lini 2.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Matrix */}
            <div className="p-6 rounded-2xl bg-[#0d1527] border border-blue-900/40">
              <div className="flex items-center gap-2 mb-4 text-white font-bold">
                <Clock className="w-5 h-5 text-blue-400" />
                Matriks Estimasi Jadwal Pelaksanaan Tipikal (Timeline 4 Bulan)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-blue-400 mb-1">Bulan 1 (M1)</div>
                  <div className="text-xs font-semibold text-white">Tahap I: Scoping &amp; ELC</div>
                  <p className="text-[11px] text-slate-400 mt-1">Materialitas laporan keuangan dan evaluasi 17 prinsip COSO.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-blue-400 mb-1">Bulan 2 (M2)</div>
                  <div className="text-xs font-semibold text-white">Tahap II: RCM &amp; ITGC</div>
                  <p className="text-[11px] text-slate-400 mt-1">Pemetaan proses bisnis, WCGW, dan review kontrol umum TI.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-blue-400 mb-1">Bulan 3 (M3)</div>
                  <div className="text-xs font-semibold text-white">Tahap III: Walkthrough TOD</div>
                  <p className="text-[11px] text-slate-400 mt-1">Uji rancangan Test of One bersama pemilik kontrol Lini 1.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-amber-400 mb-1">Bulan 4 (M4)</div>
                  <div className="text-xs font-semibold text-white">Tahap IV: Pengujian TOE</div>
                  <p className="text-[11px] text-slate-400 mt-1">Uji efektivitas sampel Tabel 22 dan evaluasi defisiensi kontrol.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-amber-400 mb-1">Bulan 4 Akhir</div>
                  <div className="text-xs font-semibold text-white">Tahap V: Asersi Direksi</div>
                  <p className="text-[11px] text-slate-400 mt-1">Finalisasi CAP dan penandatanganan Lampiran 11 SK-5.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lead Capture Form for KAK / TOR Docx Request */}
        <div id="kak-download-form" className="mt-16 p-8 rounded-3xl bg-[#0f172a] border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 text-xs font-mono uppercase tracking-wider">
                Official Tender Kit Request
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Permohonan Berkas Draf Dokumen KAK (.DOCX) &amp; Estimasi HPS
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Dapatkan paket draf Kerangka Acuan Kerja format Word yang siap disesuaikan oleh Panitia Pengadaan, 
                lengkap dengan lembar spesifikasi teknis software dan rincian kualifikasi personil.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/60 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Permohonan Anda Telah Disiapkan</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Aplikasi email Anda telah dibuka dengan detail permohonan resmi. Tim kemitraan Daya Solusi Integra 
                  akan segera menindaklanjuti pengiriman berkas ke surel Anda.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer"
                >
                  Ajukan permohonan untuk unit kerja lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Nama Lengkap Pemohon <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama & Gelar"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Instansi BUMN / Anak Perusahaan <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.bumnName}
                      onChange={(e) => setFormData({ ...formData, bumnName: e.target.value })}
                      placeholder="PT BUMN (Persero) / Unit Kerja"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Surel Resmi Kedinasan <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@bumn.co.id"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Nomor Telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Jabatan / Peran Pengadaan
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option>Pejabat Pembuat Komitmen (PPK) / Panitia Pengadaan</option>
                      <option>Satuan Pengawasan Intern (SPI) / Internal Audit</option>
                      <option>Divisi Manajemen Risiko &amp; Kepatuhan</option>
                      <option>Divisi Akuntansi &amp; Keuangan</option>
                      <option>Divisi Teknologi Informasi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Paket KAK yang Dibutuhkan
                    </label>
                    <select
                      value={formData.packageType}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option>Konsultan ICOFR &amp; Software GRC</option>
                      <option>Hanya Jasa Konsultan Pendampingan ICOFR</option>
                      <option>Hanya Pengadaan Lisensi Software GRC Integra</option>
                      <option>Audit Kesiapan ITGC &amp; Tata Kelola TI</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsHpsConsultation}
                      onChange={(e) => setFormData({ ...formData, needsHpsConsultation: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      Sertakan panduan estimasi Harga Perkiraan Sendiri (HPS) dan reviu kesesuaian ruang lingkup RKAP dari Tim Tender Daya Solusi Integra.
                    </span>
                  </label>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-bold shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    Kirim Permohonan Draf KAK &amp; Spesifikasi Teknis
                  </button>
                  <p className="mt-3 text-[11px] text-slate-500">
                    Permintaan resmi akan diverifikasi langsung oleh Tim Kemitraan PT Daya Solusi Integra demi menjaga kerahasiaan proses pengadaan.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Strategic Cross-Linking Silo */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => onNavigate("/kualifikasi-vendor")}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-700/50 transition-all cursor-pointer group"
          >
            <Building2 className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Profil Kualifikasi Vendor BUMN</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Tinjau status legalitas perseroan, NIB, NPWP, rekam jejak, dan kelayakan teknis kemitraan tender kami.
            </p>
          </div>

          <div 
            onClick={() => onNavigate("/platform/grc-integra")}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-700/50 transition-all cursor-pointer group"
          >
            <Cpu className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Platform Software GRC Integra</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Jelajahi kapabilitas digital otomasi kepatuhan SK-5, mesin BPMN, dan pelaporan asersi manajemen ber-QR Code.
            </p>
          </div>

          <div 
            onClick={() => onNavigate("/toolkit-regulasi")}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-700/50 transition-all cursor-pointer group"
          >
            <Layers className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Toolkit &amp; Template Kertas Kerja</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Pratinjau struktur kolom RCM Excel, checklist ELC 17 prinsip COSO, dan format pengujian TOE Tabel 22.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
