import React from "react";
import { Shield, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12" id="footer-top">
          
          {/* Logo block */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button 
              className="flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl p-1 text-left border-none bg-transparent"
              onClick={handleScrollToTop}
            >
              <div className="bg-blue-950/60 border border-blue-500/20 p-2 rounded-xl">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">Daya Solusi Integra</span>
                <span className="text-[10px] uppercase tracking-widest text-bumn-gold font-mono -mt-0.5">IT & GRC Consulting</span>
              </div>
            </button>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-sm">
              Konsultan IT spesialis implementasi Governance, Risk, and Compliance (GRC) dan Internal Control over Financial Reporting (ICOFR) untuk BUMN dan Sektor Perbankan di Indonesia.
            </p>
          </div>

          {/* Quick links block 1 */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Layanan Kami</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Implementasi ICOFR</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Enterprise GRC Framework</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Audit ITGC & IT GRC</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Pre-Audit Readiness (WTP)</a></li>
              <li><a href="#assessment" className="hover:text-blue-400 transition-colors">Asesmen Kematangan GRC</a></li>
            </ul>
          </div>

          {/* Quick links block 2 */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Fokus Sektor</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">BUMN / Holding</a></li>
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">Perbankan Jasa Keuangan</a></li>
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">Lembaga Keuangan Publik</a></li>
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
            <p className="font-light text-[11px] text-slate-700">
              COSO®, COBIT®, ISO®, dan standar terkait adalah merek dagang dari masing-masing pemilik lisensi internasional.
            </p>
          </div>
          <div className="flex gap-6 text-[11px]">
            <span className="hover:text-slate-400 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-slate-400 cursor-pointer">Sarat & Ketentuan Layanan</span>
            <span className="hover:text-slate-400 cursor-pointer">Pernyataan Independensi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
