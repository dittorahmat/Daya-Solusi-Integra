import React from "react";
import { 
  Building2, 
  FileCheck2, 
  ShieldCheck, 
  Server, 
  Layers, 
  Lock, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Users,
  Award
} from "lucide-react";
import Breadcrumbs from "../Breadcrumbs";

interface BumnProcurementPageProps {
  onNavigate: (path: string) => void;
}

export default function BumnProcurementPage({ onNavigate }: BumnProcurementPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dsintegra.co.id/kualifikasi-vendor#service",
        "name": "Layanan Pengadaan Sistem & Konsultasi ICOFR BUMN",
        "serviceType": "B2B Regulatory Technology & Governance Advisory",
        "provider": {
          "@type": "ProfessionalService",
          "name": "PT Daya Solusi Integra",
          "url": "https://dsintegra.co.id",
          "founder": {
            "@type": "Person",
            "name": "Humbul Kristiawan",
            "jobTitle": "Principal Founder & Managing Director",
            "sameAs": [
              "https://www.linkedin.com/in/humbul-kristiawan-8991208/",
              "https://dsintegra.co.id/blog/penulis/humbul-kristiawan"
            ]
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "Indonesia"
        },
        "description": "Kualifikasi legalitas, kesiapan KAK tender, klasifikasi KBLI, dan arsitektur deployment on-premise software GRC Integra serta pendampingan kepatuhan SK-5/DKU.MBU/11/2024 bagi BUMN."
      }
    ]
  };

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Kualifikasi Vendor & Kesiapan Tender BUMN" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#cca43b]" />
            Kualifikasi Pengadaan B2B & BUMN
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Kualifikasi Vendor &amp; Panduan Pengadaan Solusi GRC BUMN
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-6">
            Informasi komprehensif bagi Panitia Pengadaan, Tim Procurement, dan Satuan Pengawasan Intern (SPI) BUMN: legalitas resmi, kesiapan arsitektur on-premise sesuai UU PDP, klasifikasi KBLI, serta klausul Kerangka Acuan Kerja (KAK) sistem ICOFR SK-5/2024.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            PT Daya Solusi Integra | Legalitas Korporasi, Tata Kelola TI &amp; Kepatuhan Regulasi RI
          </div>
        </div>

        {/* Executive Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-900/60 text-blue-400 w-fit mb-4">
              <Scale className="w-5 h-5 text-[#cca43b]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Legalitas &amp; Integritas Resmi</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Badan hukum berizin lengkap di Indonesia dengan NIB valid, NPWP badan usaha, dan kepatuhan perpajakan aktif untuk kelayakan administrasi tender BUMN.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-900/60 text-blue-400 w-fit mb-4">
              <Server className="w-5 h-5 text-[#cca43b]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Data Residency &amp; UU PDP</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Mendukung opsi On-Premise penuh di infrastruktur BUMN atau Private Cloud lokal di Indonesia. Menjamin kepatuhan mutlak atas UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-900/60 text-blue-400 w-fit mb-4">
              <Award className="w-5 h-5 text-[#cca43b]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Kepemimpinan Ahli Terakreditasi</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Dipimpin oleh praktisi senior pemegang sertifikasi CA, CIA, CICA, dan GRCP dengan rekam jejak kepemimpinan komite audit dan risiko di BUMN terkemuka.
            </p>
          </div>
        </div>

        {/* Section 1: Legalitas & KBLI Klasifikasi */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-950 border border-blue-900 text-blue-400">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-light mb-6 leading-relaxed max-w-3xl">
            Untuk memudahkan verifikasi klasifikasi izin berusaha dalam sistem pengadaan e-procurement BUMN maupun portal tender, berikut rincian kode KBLI yang menaungi ruang lingkup penugasan kami:
          </p>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b1329] border-b border-slate-800 text-slate-300 font-mono">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Kode KBLI</th>
                    <th className="py-4 px-6 font-semibold">Judul Klasifikasi Usaha</th>
                    <th className="py-4 px-6 font-semibold">Cakupan Relevansi Penugasan BUMN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 font-light">
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-4 px-6 font-mono text-[#cca43b] font-semibold whitespace-nowrap">70209</td>
                    <td className="py-4 px-6 font-medium text-white">Aktivitas Konsultasi Manajemen Lainnya</td>
                    <td className="py-4 px-6 text-slate-400">
                      Pendampingan penyusunan Risk and Control Matrix (RCM), evaluasi Entity-Level Control (ELC), metodologi pengujian TOD/TOE, perumusan asersi Direksi SK-5, dan tata kelola Three Lines Model.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-4 px-6 font-mono text-[#cca43b] font-semibold whitespace-nowrap">62019</td>
                    <td className="py-4 px-6 font-medium text-white">Aktivitas Pemrograman Komputer Lainnya</td>
                    <td className="py-4 px-6 text-slate-400">
                      Pengembangan dan kustomisasi platform software GRC Integra, otomasi alur kerja pengujian kontrol Lini 2, integrasi API sistem ERP (SAP, Oracle), serta engine alur persetujuan digital.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-4 px-6 font-mono text-[#cca43b] font-semibold whitespace-nowrap">62029</td>
                    <td className="py-4 px-6 font-medium text-white">Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya</td>
                    <td className="py-4 px-6 text-slate-400">
                      Audit kesiapan Information Technology General Controls (ITGC), asesmen segregasi tugas (SoD), evaluasi keamanan change management, dan rekayasa arsitektur data on-premise.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Arsitektur Keamanan & Pilihan Deployment */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-950 border border-blue-900 text-blue-400">
              <Lock className="w-5 h-5 text-[#cca43b]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Arsitektur Keamanan Data &amp; Kesiapan Deployment
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-light mb-6 leading-relaxed max-w-3xl">
            Sektor BUMN memiliki standar ketat terkait kerahasiaan informasi finansial dan kedaulatan data nasional. Kami menyediakan arsitektur fleksibel yang disesuaikan dengan regulasi internal IT Security korporasi Anda:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-blue-950 text-blue-400 border border-blue-800">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Opsi 1: On-Premise Bare-Metal / Private Virtualization</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                Platform GRC Integra diinstalasi langsung di Data Center atau server lokal milik BUMN (VMware, Proxmox, atau Nutanix).
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>Kedaulatan data 100% berada di bawah kendali firewall dan infrastruktur internal BUMN.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>Tidak ada transmisi data finansial atau bukti uji ke cloud pihak ketiga eksternal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>Mendukung integrasi Active Directory / LDAP korporat untuk single sign-on (SSO).</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-blue-950 text-blue-400 border border-blue-800">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Opsi 2: Dedicated Managed Private Cloud Lokal</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                Instans komputasi terisolasi yang dihosting pada penyedia cloud lokal tersertifikasi di wilayah Republik Indonesia (Tier-3 / Tier-4 Data Center).
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>Kepatuhan data residency sesuai amanat UU No. 27 Tahun 2022 (UU PDP).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>Enkripsi berlapis (AES-256 for data at rest dan TLS 1.3 for data in transit).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>Isolasi basis data mandiri (single-tenant architecture) tanpa pembagian resource dengan entitas lain.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Panduan Kerangka Acuan Kerja (KAK / TOR) */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-950 border border-blue-900 text-blue-400">
              <FileText className="w-5 h-5 text-[#cca43b]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Panduan Penyusunan Kerangka Acuan Kerja (KAK / TOR)
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-light mb-6 leading-relaxed max-w-3xl">
            Untuk mempermudah Satuan Pengawasan Intern (SPI), Divisi Manajemen Risiko, dan Panitia Pengadaan dalam merumuskan draf KAK pengadaan sistem atau konsultan ICOFR, berikut komponen standar yang direkomendasikan:
          </p>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8">
            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#cca43b] font-mono text-sm font-semibold">01.</span>
                Ruang Lingkup Teknis Kepatuhan SK-5 Kementerian BUMN
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Penyedia wajib mampu menyediakan metodologi dan perangkat lunak yang mencakup scoping akun material, penyusunan Risk &amp; Control Matrix (RCM), pengujian kontrol tingkat entitas (ELC), pengujian kontrol tingkat transaksional (TLC), kalkulasi ukuran sampel normatif Tabel 22, pengujian ITGC, dan pelaporan asersi Direksi.
              </p>
            </div>

            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#cca43b] font-mono text-sm font-semibold">02.</span>
                Kualifikasi Tenaga Ahli Utama (Key Personnel)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Tim pendamping wajib memiliki Tenaga Ahli Utama yang memegang sertifikasi profesional diakui (seperti Chartered Accountant: CA, Certified Internal Auditor: CIA, Certified Internal Control Auditor: CICA, atau Governance Risk Compliance Professional: GRCP) dengan pengalaman minimal 10 tahun di bidang tata kelola dan audit sistem keuangan korporasi besar.
              </p>
            </div>

            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#cca43b] font-mono text-sm font-semibold">03.</span>
                Pakta Integritas &amp; Kerahasiaan (Non-Disclosure Agreement)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Penyedia wajib menandatangani Non-Disclosure Agreement (NDA) sebelum penugasan dimulai. PT Daya Solusi Integra menjamin seluruh dokumentasi proses bisnis dan data keuangan klien dijaga kerahasiaannya dan tidak dapat dialihkan kepada pihak lain tanpa persetujuan tertulis resmi.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#cca43b] font-mono text-sm font-semibold">04.</span>
                Service Level Agreement (SLA) &amp; Pendampingan Pasca-Go-Live
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Dukungan teknis berkala selama siklus audit berlangsung, termasuk sesi transfer pengetahuan (knowledge transfer) kepada Lini 1 (Process Owner), Lini 2 (Risk/Compliance), dan Lini 3 (SPI BUMN), serta asistensi saat menghadapi pemeriksaan auditor eksternal KAP atau BPK.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Aksi Tunggal Kontak Pengadaan (Dominant CTA) */}
        <div className="bg-gradient-to-b from-[#0f172a] to-[#0d1527] border border-blue-900/60 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6">
            <Users className="w-3.5 h-3.5 text-[#cca43b]" />
            Kemitraan Resmi Pengadaan BUMN
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            Membutuhkan Draf KAK, Profil Perusahaan, atau Undangan Tender?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Hubungi Tim Kemitraan PT Daya Solusi Integra untuk mendapatkan dokumen profil legalitas lengkap, draf panduan KAK pengadaan sistem ICOFR, atau penjadwalan presentasi teknis di hadapan panitia pengadaan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:marketing@dsintegra.co.id?subject=Permohonan%20Profil%20Vendor%20dan%20Draf%20KAK%20Pengadaan%20ICOFR%20BUMN"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-950/50 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Email Tim Pengadaan: marketing@dsintegra.co.id</span>
            </a>
            <button
              onClick={() => onNavigate("/asesmen-maturitas")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition-colors w-full sm:w-auto"
            >
              <span>Uji Kematangan Kontrol Mandiri</span>
              <ArrowRight className="w-4 h-4 text-[#cca43b]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
