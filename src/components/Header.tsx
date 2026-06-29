import React, { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight, MessageSquareCode } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdvisor: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenAdvisor }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Beranda" },
    { id: "services", label: "Layanan GRC & ICOFR" },
    { id: "clients", label: "Target Market & Sektor" },
    { id: "assessment", label: "Asesmen Mandiri" },
    { id: "contact", label: "Hubungi Kami" }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-3 cursor-pointer group"
            id="dsi-logo-container"
          >
            <div className="bg-gradient-to-tr from-bumn-blue to-blue-700 p-2.5 rounded-xl shadow-lg shadow-blue-950/30 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-bumn-gold transition-colors">
                Daya Solusi Integra
              </span>
              <span className="text-[10px] uppercase tracking-widest text-bumn-gold font-mono -mt-0.5">
                IT & GRC Consulting
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-slate-800/80 px-2 py-1.5 rounded-full" id="desktop-navbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-bumn-blue to-blue-700 text-white shadow-md font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Extra CTAs */}
          <div className="hidden lg:flex items-center gap-3" id="header-cta-group">
            <button
              id="header-ai-chat-btn"
              onClick={onOpenAdvisor}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-500/60 bg-blue-950/20 rounded-xl transition-all duration-200"
            >
              <MessageSquareCode className="w-4 h-4" />
              AI GRC Consultant
            </button>
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick("assessment")}
              className="flex items-center gap-2 px-4.5 py-2 text-sm font-semibold text-slate-950 bg-white hover:bg-bumn-gold rounded-xl transition-all duration-200 shadow-md shadow-blue-500/5"
            >
              Coba Asesmen
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1322] border-b border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-200" id="mobile-drawer">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-bumn-blue text-white font-semibold"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800/60 flex flex-col gap-3">
              <button
                id="mobile-ai-chat-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAdvisor();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-blue-400 bg-blue-950/30 border border-blue-500/30"
              >
                <MessageSquareCode className="w-4 h-4" />
                AI Consultant GRC
              </button>
              <button
                id="mobile-assessment-btn"
                onClick={() => handleNavClick("assessment")}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-950 bg-white hover:bg-bumn-gold"
              >
                Mulai Asesmen Mandiri
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
