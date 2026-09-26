import React from "react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logoImg from "../../assets/dsi-logo-removebg-preview.png";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12" id="footer-top">
          
          {/* Logo block */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button 
              className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl p-1 border-none bg-transparent"
              onClick={handleScrollToTop}
              aria-label="Daya Solusi Integra - Kembali ke atas"
            >
              <img 
                src={logoImg} 
                alt="Daya Solusi Integra" 
                className="h-20 w-auto object-contain brightness-0 invert transition-transform duration-300 hover:scale-105"
              />
            </button>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-sm">
              Konsultan TI dan manajemen risiko independen yang menyediakan solusi tata kelola TI, GRC (Governance, Risk, and Compliance), serta implementasi ICOFR untuk BUMN dan Sektor Perbankan.
            </p>
          </div>

          {/* Quick links block 1 */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Layanan Kami</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/platform/grc-integra" onClick={(e) => handleLinkClick(e, "/platform/grc-integra")} className="text-[#cca43b] hover:text-amber-300 font-semibold transition-colors">Platform GRC Integra</a></li>
              <li><a href="/platform/bpm-workflow-editor" onClick={(e) => handleLinkClick(e, "/platform/bpm-workflow-editor")} className="hover:text-blue-400 transition-colors">BPM Workflow Editor</a></li>
              <li><a href="/kalkulator-sampel-toe" onClick={(e) => handleLinkClick(e, "/kalkulator-sampel-toe")} className="hover:text-blue-400 transition-colors">Kalkulator Tabel 22 TOE</a></li>
              <li><a href="/layanan/icofr-bumn" onClick={(e) => handleLinkClick(e, "/layanan/icofr-bumn")} className="hover:text-blue-400 transition-colors">Implementasi ICOFR BUMN</a></li>
              <li><a href="/layanan/itgc-audit-readiness" onClick={(e) => handleLinkClick(e, "/layanan/itgc-audit-readiness")} className="hover:text-blue-400 transition-colors">ITGC & Kesiapan Audit</a></li>
              <li><a href="/layanan/enterprise-grc" onClick={(e) => handleLinkClick(e, "/layanan/enterprise-grc")} className="hover:text-blue-400 transition-colors">Enterprise GRC Framework</a></li>
              <li><a href="/regulasi" onClick={(e) => handleLinkClick(e, "/regulasi")} className="hover:text-blue-400 transition-colors">Pusat Regulasi BUMN</a></li>
              <li><a href="/toolkit-regulasi" onClick={(e) => handleLinkClick(e, "/toolkit-regulasi")} className="hover:text-blue-400 transition-colors">Toolkit &amp; Template SK-5</a></li>
              <li><a href="/glosarium" onClick={(e) => handleLinkClick(e, "/glosarium")} className="hover:text-blue-400 transition-colors">Glosarium ICOFR BUMN</a></li>
              <li><a href="/asesmen-maturitas" onClick={(e) => handleLinkClick(e, "/asesmen-maturitas")} className="hover:text-blue-400 transition-colors">Asesmen Kematangan Mandiri</a></li>
              <li><a href="/kualifikasi-vendor" onClick={(e) => handleLinkClick(e, "/kualifikasi-vendor")} className="hover:text-blue-400 transition-colors">Kualifikasi Vendor &amp; Tender</a></li>
              <li><a href="/panduan-kak-tor-icofr" onClick={(e) => handleLinkClick(e, "/panduan-kak-tor-icofr")} className="hover:text-blue-400 transition-colors">Panduan KAK &amp; TOR BUMN</a></li>
              <li><a href="/studi-kasus" onClick={(e) => handleLinkClick(e, "/studi-kasus")} className="hover:text-blue-400 transition-colors">Studi Kasus &amp; Benchmark</a></li>
              <li><a href="/temuan-audit-icofr" onClick={(e) => handleLinkClick(e, "/temuan-audit-icofr")} className="text-amber-400 hover:text-amber-300 font-medium transition-colors">Katalog Temuan Audit &amp; CAP</a></li>
            </ul>
          </div>

          {/* Quick links block 2 */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Fokus Sektor</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/sektor-bumn/perbankan" onClick={(e) => handleLinkClick(e, "/sektor-bumn/perbankan")} className="hover:text-blue-400 transition-colors">Bank BUMN &amp; Finansial</a></li>
              <li><a href="/sektor-bumn/infrastruktur-karya" onClick={(e) => handleLinkClick(e, "/sektor-bumn/infrastruktur-karya")} className="hover:text-blue-400 transition-colors">Infrastruktur &amp; Karya</a></li>
              <li><a href="/sektor-bumn/energi-tambang" onClick={(e) => handleLinkClick(e, "/sektor-bumn/energi-tambang")} className="hover:text-blue-400 transition-colors">Energi &amp; Holding Tambang</a></li>
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">Auditor Eksternal KAP</a></li>
            </ul>
          </div>

          {/* Back to top scroll button */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-start">
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 shadow-md"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 text-left" id="footer-bottom">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} PT Daya Solusi Integra. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="font-light text-xs text-slate-700">
              COSO®, COBIT®, ISO®, dan standar terkait adalah merek dagang dari masing-masing pemilik lisensi internasional.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-500">
            <a 
              href="/kebijakan-privasi" 
              onClick={(e) => handleLinkClick(e, "/kebijakan-privasi")}
              className="hover:text-slate-300 transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a 
              href="/pernyataan-independensi" 
              onClick={(e) => handleLinkClick(e, "/pernyataan-independensi")}
              className="hover:text-slate-300 transition-colors"
            >
              Pernyataan Independensi
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
