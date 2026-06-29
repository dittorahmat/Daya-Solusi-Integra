import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Assessment from "./components/Assessment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AiAdvisor from "./components/AiAdvisor";
import { MessageSquareCode, Sparkles } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [isAdvisorOpen, setIsAdvisorOpen] = useState<boolean>(false);

  // Set up an intersection observer to dynamically highlight the active navbar tab on scroll
  useEffect(() => {
    const sections = ["hero", "services", "clients", "assessment", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px" // Trigger when section occupies the center of viewport
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
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
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between" id="dsi-app-root">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-500/5 blur-[200px]" />
        <div className="absolute top-[30vh] left-0 w-[40vw] h-[40vw] bg-teal-500/5 blur-[180px]" />
      </div>

      {/* Corporate Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenAdvisor={() => setIsAdvisorOpen(true)} 
      />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero 
          onScrollToSection={handleScrollToSection}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* Services Showcase */}
        <Services />

        {/* Target Markets Segment */}
        <Clients />

        {/* Interactive Self Assessment Tool */}
        <Assessment />

        {/* Consultation and Lead Intake Form */}
        <Contact />

      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating AI Consultant trigger badge (only shown when drawer is closed) */}
      {!isAdvisorOpen && (
        <button
          id="floating-ai-trigger"
          onClick={() => setIsAdvisorOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-xs font-display tracking-wider cursor-pointer group"
          title="Butuh konsultasi GRC? Tanya AI sekarang"
        >
          <div className="relative">
            <MessageSquareCode className="w-5 h-5 text-slate-950" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full animate-ping" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full" />
          </div>
          <span>Konsultasi AI DSI</span>
        </button>
      )}

      {/* Slide-over interactive AI Consultant Drawer */}
      <AiAdvisor 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)} 
      />

    </div>
  );
}
