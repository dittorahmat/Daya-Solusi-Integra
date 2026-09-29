import React from "react";
import { Newspaper, Download, BarChart3, Quote, Mail, CheckCircle2 } from "lucide-react";

import Breadcrumbs from "../Breadcrumbs";

interface MediaKitPageProps {
  onNavigate: (path: string) => void;
}

const BOILERPLATE = "PT Daya Solusi Integra adalah firma konsultan spesialis tata kelola korporasi, implementasi ICOFR (Internal Control over Financial Reporting), evaluasi ITGC, dan penyedia platform software GRC Integra untuk kepatuhan regulasi SK-5/DKU.MBU/11/2024 Kementerian BUMN. Berbasis di Jakarta Selatan, perusahaan mendampingi BUMN, anak holding, perbankan, dan lembaga jasa keuangan dalam membangun pengendalian internal yang teruji audit.";

const STATS = [
  {
    id: "statistik-defisiensi",
    value: "42",
    label: "Defisiensi pengendalian holding BUMN dieliminasi hingga tuntas menuju opini WTP tanpa catatan.",
  },
  {
    id: "statistik-efisiensi-toe",
    value: "70%",
    label: "Efisiensi waktu pengujian kontrol TOE Tabel 22 melalui kalkulator otomatis dan platform digital.",
  },
  {
    id: "statistik-asersi",
    value: "H-14",
    label: "Asersi Direksi diselesaikan sebelum batas akhir regulasi Kementerian BUMN.",
  },
  {
    id: "statistik-kepatuhan",
    value: "100%",
    label: "Corrective Action Plan atas temuan signifikan auditor eksternal diselesaikan sebelum tutup buku.",
  },
];

const LOGOS = [
  { label: "Logo utama (SVG, latar gelap)", href: "/favicon.svg" },
  { label: "Logo putih (PNG, 612x408)", href: "/og-logo-white.png" },
  { label: "Ikon aplikasi (PNG, 512x512)", href: "/icon-512.png" },
  { label: "OG image perusahaan (JPG, 1200x630)", href: "/og-image.jpg" },
];

export default function MediaKitPage({ onNavigate }: MediaKitPageProps) {
  const copyBoilerplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(BOILERPLATE).catch(() => undefined);
    }
  };

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Media Kit" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            Rujukan Pers & Sitasi
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Media Kit Daya Solusi Integra
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-4">
            Boilerplate perusahaan, paket logo resmi, dan statistik kinerja yang dapat dikutip jurnalis, blogger, dan peneliti — dengan atribusi tautan ke dsintegra.co.id.
          </p>
        </div>

        {/* Boilerplate */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-800/50 text-blue-400 shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-2">Boilerplate Siap Salin</h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">{BOILERPLATE}</p>
              <button
                onClick={copyBoilerplate}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/40 border border-blue-800/60 text-blue-300 text-sm font-semibold hover:bg-blue-900/60 transition-colors"
              >
                Salin boilerplate
              </button>
            </div>
          </div>
        </section>

        {/* Logo pack */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-400" />
            Paket Logo Resmi
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LOGOS.map((logo) => (
              <li key={logo.href}>
                <a
                  href={logo.href}
                  download
                  className="flex items-center justify-between px-5 py-4 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-600 transition-colors"
                >
                  <span className="text-sm text-slate-200">{logo.label}</span>
                  <Download className="w-4 h-4 text-slate-500" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">Aturan pakai: jangan ubah warna, proporsi, atau tambahkan efek; gunakan versi putih di atas latar gelap dan jaga ruang kosong minimal setinggi ikon.</p>
        </section>

        {/* Citable stats */}
        <section id="statistik-kinerja" className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            Statistik Kinerja yang Dapat Dikutip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <article
                key={stat.id}
                id={stat.id}
                className="rounded-xl bg-[#0f172a] border border-slate-800 p-6"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{stat.label}</p>
                <a
                  href={`/media-kit#${stat.id}`}
                  className="inline-flex items-center gap-1 mt-3 text-xs text-blue-400 hover:text-blue-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Tautan kutipan persisten
                </a>
              </article>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">Sumber: direktori <a href="/studi-kasus" onClick={(e) => { e.preventDefault(); onNavigate("/studi-kasus"); }} className="text-blue-400 hover:text-blue-300">studi kasus & benchmark ICOFR BUMN</a>. Mohon sertakan atribusi tautan ke dsintegra.co.id pada setiap kutipan.</p>
        </section>

        {/* Media contact */}
        <section className="rounded-xl bg-[#0f172a] border border-slate-800 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" />
            Kontak Media
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Permintaan wawancara, data, dan materi tambahan: <a href="mailto:marketing@dsintegra.co.id" className="text-blue-400 hover:text-blue-300 font-semibold">marketing@dsintegra.co.id</a>. Sebutkan tenggat publikasi agar tim dapat memprioritaskan respons.
          </p>
        </section>

      </div>
    </div>
  );
}
