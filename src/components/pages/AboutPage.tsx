import React from "react";
import { Building2, MapPin, Phone, Mail, Clock, ChevronRight, CheckCircle2, UserCheck } from "lucide-react";

import Breadcrumbs from "../Breadcrumbs";
import { COMPANY_PROFILE } from "../../data/company";
import { servicesList } from "../../data";
import { getAuthorProfile } from "../../data/authors";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const SERVICE_ROUTES: Record<string, string> = {
  itgc: "/layanan/itgc-audit-readiness",
  grc: "/layanan/enterprise-grc",
  icofr: "/layanan/icofr-bumn",
  "audit-ready": "/asesmen-maturitas"
};

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const founder = getAuthorProfile("humbul-kristiawan");

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Tentang Kami" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Editorial Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Profil Perusahaan
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Profil PT Daya Solusi Integra
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-4">
            Konsultan TI dan manajemen risiko independen untuk BUMN dan perbankan: tata kelola TI, GRC terintegrasi, dan implementasi ICOFR.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            Kantor Pusat Jakarta Selatan | UU PDP | SK-5 Kementerian BUMN
          </div>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-300 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">
                Mitra Penasihat Independen, Bukan Auditor Eksternal
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {COMPANY_PROFILE.tagline} Kami mendampingi Direksi dan SPI mempersiapkan rancangan dan pengujian pengendalian internal sebelum diperiksa KAP atau BPK. Posisi independensi penuh kami nyatakan pada halaman pernyataan independensi.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10 text-slate-300 font-light leading-relaxed">

          {/* Section 01: Kantor & Kontak */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-300 text-xs font-mono font-bold border border-blue-800">
                01
              </span>
              Kantor Pusat & Kanal Resmi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Alamat Kantor</div>
                    {COMPANY_PROFILE.addressLines.map((line, idx) => (
                      <div key={idx} className="text-slate-300">{line}</div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Telepon</div>
                    <div className="text-slate-300">{COMPANY_PROFILE.phoneCanonical} ({COMPANY_PROFILE.phoneNote})</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Surel Resmi</div>
                    <div className="text-slate-300">{COMPANY_PROFILE.email}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Jam Operasional</div>
                    <div className="text-slate-300">{COMPANY_PROFILE.hoursPrimary}</div>
                    <div className="text-slate-300">{COMPANY_PROFILE.hoursSecondary}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-5 p-6 rounded-lg bg-slate-900/60 border border-slate-800">
                <img
                  src="/dsi-logo.png"
                  alt="Logo PT Daya Solusi Integra"
                  className="h-20 w-auto object-contain brightness-0 invert"
                />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seluruh kanal di halaman ini adalah kanal resmi perusahaan. Verifikasi identitas penelepon atau pengirim yang mengatasnamakan kami melalui nomor dan surel di atas.
                </p>
                <button
                  onClick={() => onNavigate("/#contact")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-950 bg-white hover:bg-bumn-gold rounded-xl transition-colors"
                >
                  Hubungi Kami
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Section 02: Layanan Inti */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-300 text-xs font-mono font-bold border border-blue-800">
                02
              </span>
              Layanan Inti Perusahaan
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Empat pilar pendampingan yang seluruhnya bermuara pada kesiapan audit dan kepatuhan regulasi.
            </p>
            <div className="divide-y divide-slate-800/80 border-y border-slate-800/80">
              {servicesList.map((service) => (
                <button
                  key={service.id}
                  onClick={() => onNavigate(SERVICE_ROUTES[service.id] || "/")}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                >
                  <div>
                    <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-light">
                      {service.shortDesc}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </section>

          {/* Section 03: Legalitas & Kualifikasi */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-300 text-xs font-mono font-bold border border-blue-800">
                03
              </span>
              Legalitas & Kualifikasi Vendor
            </h2>
            <p className="mb-5 text-sm">
              Badan hukum berizin lengkap di Indonesia dengan NIB valid, NPWP badan usaha, dan kepatuhan perpajakan aktif untuk kelayakan administrasi tender BUMN.
            </p>
            <ul className="space-y-2.5 text-sm mb-6">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Dokumen profil legalitas lengkap tersedia bagi panitia pengadaan melalui tim kemitraan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Pakta integritas dan NDA mengikat seluruh konsultan, analis risiko, dan staf pengembang.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <button
                onClick={() => onNavigate("/kualifikasi-vendor")}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Kualifikasi Vendor & Tender
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/pernyataan-independensi")}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Pernyataan Independensi
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Section 04: Pendiri */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-950 text-blue-300 text-xs font-mono font-bold border border-blue-800">
                04
              </span>
              Kepemimpinan
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <img
                src={founder.avatar}
                alt={founder.name}
                className="w-20 h-20 rounded-xl object-cover border border-slate-700 shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <UserCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-slate-400 font-mono">Principal Partner</span>
                </div>
                <h3 className="text-lg font-bold text-white">{founder.fullNameWithCredentials}</h3>
                <p className="text-sm text-slate-400 font-light mt-1 mb-4">{founder.headline}</p>
                <button
                  onClick={() => onNavigate(founder.profileUrl)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Lihat Profil Lengkap & Rekam Jejak
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
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
              onClick={() => onNavigate("/asesmen-maturitas")}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Mulai Asesmen Mandiri →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
