import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, MessageSquareCode, ChevronDown, Workflow, Layers } from "lucide-react";
import logoImg from "../../assets/dsi-logo-removebg-preview.png";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdvisor: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenAdvisor }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-20px 0px 0px 0px" }
    );

    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.width = "100%";
    sentinel.style.height = "1px";
    sentinel.style.pointerEvents = "none";
    sentinel.setAttribute("aria-hidden", "true");
    document.body.prepend(sentinel);

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  // Trap keyboard focus in mobile drawer
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
        }

        if (e.key === "Tab" && mobileDrawerRef.current) {
          const focusableElements = mobileDrawerRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const focusable = Array.from(focusableElements) as HTMLElement[];
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "hero", label: "Beranda" },
    { id: "services", label: "Layanan TI & GRC" },
    { id: "platform", label: "Platform GRC Integra" },
    { id: "kalkulator", label: "Kalkulator Tabel 22" },
    { id: "glosarium", label: "Glosarium" },
    { id: "clients", label: "Target Market" },
    { id: "blog", label: "Artikel & Insight" },
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
          <button 
            onClick={() => handleNavClick("hero")}
            className="flex items-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19] rounded-xl p-1"
            id="dsi-logo-container"
            aria-label="Daya Solusi Integra - Beranda"
          >
            <img 
              src={logoImg} 
              alt="Daya Solusi Integra" 
              className="h-20 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-slate-800/80 px-2 py-1.5 rounded-full" id="desktop-navbar">
            {navItems.map((item) => {
              if (item.id === "platform") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      setIsPlatformDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => {
                        setIsPlatformDropdownOpen(false);
                      }, 200);
                    }}
                  >
                    <button
                      id={`nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19] ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-bumn-blue to-blue-700 text-white shadow-md font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPlatformDropdownOpen ? "rotate-180 text-white" : "text-slate-400"}`} />
                    </button>

                    {/* Platform Dropdown Menu */}
                    {isPlatformDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-[#0f172a] border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <a
                          href="/platform/grc-integra"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsPlatformDropdownOpen(false);
                            window.history.pushState({}, '', '/platform/grc-integra');
                            window.dispatchEvent(new PopStateEvent('popstate'));
                          }}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors group"
                        >
                          <div className="p-2 rounded bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:text-blue-300 shrink-0">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                              Ringkasan Platform GRC Integra
                            </div>
                            <div className="text-[11px] text-slate-400 leading-snug mt-0.5">
                              Platform siklus hidup ICOFR BUMN berbasis SK-5
                            </div>
                          </div>
                        </a>

                        <a
                          href="/platform/bpm-workflow-editor"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsPlatformDropdownOpen(false);
                            window.history.pushState({}, '', '/platform/bpm-workflow-editor');
                            window.dispatchEvent(new PopStateEvent('popstate'));
                          }}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors group mt-1"
                        >
                          <div className="p-2 rounded bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:text-blue-300 shrink-0">
                            <Workflow className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                              <span>BPM Workflow Editor</span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-900/60 border border-blue-500/40 text-blue-300 font-mono">
                                Baru
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 leading-snug mt-0.5">
                              Desain SOP native web rasa Visio & auto-draw file
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19] ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-bumn-blue to-blue-700 text-white shadow-md font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Extra CTAs */}
          <div className="hidden lg:flex items-center gap-3" id="header-cta-group">
            <button
              id="header-ai-chat-btn"
              onClick={onOpenAdvisor}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-500/60 bg-blue-950/20 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>AI IT & GRC Consultant</span>
              <kbd className="inline-block font-mono text-xs bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800 ml-1">Ctrl+/</kbd>
            </button>
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick("assessment")}
              className="flex items-center gap-2 px-4.5 py-2 text-sm font-semibold text-slate-950 bg-white hover:bg-bumn-gold rounded-xl transition-all duration-200 shadow-md shadow-blue-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              Mulai Asesmen
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileDrawerRef}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0d1322] border-b border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto" 
          id="mobile-drawer"
        >
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              if (item.id === "platform") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      id={`mobile-nav-${item.id}`}
                      onClick={() => setIsMobilePlatformOpen(!isMobilePlatformOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-gold ${
                        activeTab === item.id
                          ? "bg-bumn-blue text-white font-semibold"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobilePlatformOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isMobilePlatformOpen && (
                      <div className="pl-4 pr-1 py-1 space-y-1">
                        <button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            window.history.pushState({}, '', '/platform/grc-integra');
                            window.dispatchEvent(new PopStateEvent('popstate'));
                          }}
                          className="w-full text-left p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 hover:text-white flex items-center gap-2"
                        >
                          <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>Ringkasan Platform GRC Integra</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            window.history.pushState({}, '', '/platform/bpm-workflow-editor');
                            window.dispatchEvent(new PopStateEvent('popstate'));
                          }}
                          className="w-full text-left p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs text-blue-300 hover:text-white flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <Workflow className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>BPM Workflow Editor</span>
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-900/80 text-blue-200 font-mono">
                            Baru
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-gold ${
                    activeTab === item.id
                      ? "bg-bumn-blue text-white font-semibold"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-2.5">
              <button
                id="mobile-ai-chat-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAdvisor();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold text-blue-400 bg-blue-950/30 border border-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-gold"
              >
                <MessageSquareCode className="w-4 h-4 shrink-0" />
                AI IT & GRC Consultant
              </button>
              <button
                id="mobile-assessment-btn"
                onClick={() => handleNavClick("assessment")}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-bumn-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-gold"
              >
                Mulai Asesmen Mandiri
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
