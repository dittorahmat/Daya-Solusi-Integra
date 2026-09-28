import React, { useEffect } from "react";
import { Compass, Home, BookOpen, Calculator, ArrowLeft } from "lucide-react";

import Breadcrumbs from "../Breadcrumbs";

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

const NOT_FOUND_TITLE = "Halaman Tidak Ditemukan | Daya Solusi Integra";
const NOT_FOUND_CANONICAL = "https://dsintegra.co.id/404";

/**
 * Halaman 404 khusus. Mengelola sendiri tag head (title + robots noindex)
 * karena App melewatkan updateDocumentMeta untuk path tak dikenal.
 */
export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  useEffect(() => {
    document.title = NOT_FOUND_TITLE;

    const setMeta = (nameAttr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameAttr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("name", "robots", "noindex, follow");
    setMeta("name", "description", "Halaman yang Anda cari tidak tersedia di portal Daya Solusi Integra. Kembali ke beranda, glosarium regulasi, atau gunakan kalkulator TOE Tabel 22.");
    setCanonical(NOT_FOUND_CANONICAL);

    window.scrollTo(0, 0);

    return () => {
      setMeta("name", "robots", "index, follow");
    };
  }, []);

  const quickLinks = [
    {
      path: "/",
      icon: Home,
      title: "Beranda",
      desc: "Profil firma, layanan konsultasi, dan platform GRC Integra."
    },
    {
      path: "/glosarium",
      icon: BookOpen,
      title: "Glosarium Regulasi",
      desc: "Kamus istilah ICOFR, COSO, ITGC, dan SK-5 BUMN."
    },
    {
      path: "/kalkulator-sampel-toe",
      icon: Calculator,
      title: "Kalkulator Sampel TOE",
      desc: "Hitung ukuran sampel Tabel 22 SK-5 dalam hitungan detik."
    }
  ];

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Beranda", path: "/" },
              { label: "Halaman Tidak Ditemukan" }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* 404 Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-950/60 border border-blue-800/60 text-blue-300 mb-6">
            <Compass className="w-8 h-8" />
          </div>
          <p className="text-sm font-mono text-slate-500 mb-2">Kode Respons: 404</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-8">
            Tautan yang Anda buka sudah dipindahkan, salah ketik, atau tidak lagi tersedia
            di portal Daya Solusi Integra. Pilih salah satu pintu kembali di bawah ini.
          </p>
          <button
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
        </div>

        {/* Quick Links */}
        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className="text-left bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-blue-700/60 hover:bg-slate-900/80 transition-colors group"
              >
                <Icon className="w-6 h-6 text-blue-400 mb-3 group-hover:text-blue-300" />
                <div className="text-white font-semibold mb-1">{link.title}</div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{link.desc}</p>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
