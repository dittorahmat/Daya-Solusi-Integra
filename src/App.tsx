import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GrcIntegraPlatform from "./components/GrcIntegraPlatform";
import Clients from "./components/Clients";
import BlogPreviewSection from "./components/BlogPreviewSection";
import BlogPage from "./components/BlogPage";
import Assessment from "./components/Assessment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AiAdvisor from "./components/AiAdvisor";
import IcofrBumnPage from "./components/pages/IcofrBumnPage";
import ItgcAuditReadinessPage from "./components/pages/ItgcAuditReadinessPage";
import EnterpriseGrcPage from "./components/pages/EnterpriseGrcPage";
import PlatformProductPage from "./components/pages/PlatformProductPage";
import AssessmentLandingPage from "./components/pages/AssessmentLandingPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [isAdvisorOpen, setIsAdvisorOpen] = useState<boolean>(false);
  const [assessmentPrefill, setAssessmentPrefill] = useState<{ company: string; sector: string; service?: string } | null>(null);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Global shortcut (Ctrl + /) for AI Advisor
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        setIsAdvisorOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      handleScrollToSection(sectionId);
    } else {
      window.scrollTo(0, 0);
    }
  };

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

  const isBlogPage = currentPath.startsWith("/blog");
  const blogSlug = currentPath.startsWith("/blog/") ? currentPath.replace("/blog/", "") : null;
  const isIcofrPage = currentPath === "/layanan/icofr-bumn";
  const isItgcPage = currentPath === "/layanan/itgc-audit-readiness";
  const isGrcPage = currentPath === "/layanan/enterprise-grc";
  const isPlatformPage = currentPath === "/platform/grc-integra";
  const isAssessmentPage = currentPath === "/asesmen-maturitas";
  const isSubPage = isBlogPage || isIcofrPage || isItgcPage || isGrcPage || isPlatformPage || isAssessmentPage;

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between" id="dsi-app-root">
      
      {/* Corporate Header */}
      <Header 
        activeTab={isBlogPage ? "blog" : activeTab} 
        setActiveTab={(tab) => {
          if (tab === "blog") {
            navigateTo("/blog");
          } else {
            if (isSubPage) {
              navigateTo(`/#${tab}`);
            } else {
              handleScrollToSection(tab);
            }
          }
        }} 
        onOpenAdvisor={() => setIsAdvisorOpen(true)} 
      />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        {isBlogPage ? (
          /* DEDICATED BLOG ROUTE (/blog or /blog/:slug) */
          <BlogPage 
            currentSlug={blogSlug} 
            onNavigate={navigateTo} 
          />
        ) : isIcofrPage ? (
          /* DEDICATED ICOFR BUMN ROUTE (/layanan/icofr-bumn) */
          <IcofrBumnPage 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
          />
        ) : isItgcPage ? (
          /* DEDICATED ITGC AUDIT ROUTE (/layanan/itgc-audit-readiness) */
          <ItgcAuditReadinessPage 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
          />
        ) : isGrcPage ? (
          /* DEDICATED ENTERPRISE GRC ROUTE (/layanan/enterprise-grc) */
          <EnterpriseGrcPage 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
          />
        ) : isPlatformPage ? (
          /* DEDICATED GRC INTEGRA PLATFORM ROUTE (/platform/grc-integra) */
          <PlatformProductPage 
            onNavigate={navigateTo} 
            onRequestDemo={() => {
              setAssessmentPrefill({ company: "", sector: "BUMN", service: "GRC Integra Demo" });
              navigateTo("/#contact");
            }} 
          />
        ) : isAssessmentPage ? (
          /* DEDICATED ASSESSMENT LANDING ROUTE (/asesmen-maturitas) */
          <AssessmentLandingPage 
            onNavigate={navigateTo} 
            onComplete={(company, sector) => {
              setAssessmentPrefill({ company, sector });
              navigateTo("/#contact");
            }} 
          />
        ) : (
          /* MAIN HOME LANDING PAGE ROUTE (/) */
          <>
            {/* Hero Section */}
            <Hero 
              onScrollToSection={handleScrollToSection}
              onOpenAdvisor={() => setIsAdvisorOpen(true)}
            />

            {/* Services Showcase */}
            <Services />

            {/* Proprietary Digital Platform Showcase: GRC Integra */}
            <GrcIntegraPlatform 
              onRequestDemo={() => {
                setAssessmentPrefill({ company: "", sector: "BUMN", service: "GRC Integra Demo" });
                handleScrollToSection("contact");
              }}
            />

            {/* Target Markets Segment */}
            <Clients />

            {/* Compact Home Page Blog Preview Section */}
            <BlogPreviewSection 
              onNavigateToBlog={(slug) => navigateTo(slug ? `/blog/${slug}` : "/blog")}
            />

            {/* Interactive Self Assessment Tool */}
            <Assessment
              onComplete={(company, sector) => setAssessmentPrefill({ company, sector })}
            />

            {/* Consultation and Lead Intake Form */}
            <Contact prefill={assessmentPrefill} />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Slide-over interactive AI Consultant Drawer */}
      <AiAdvisor 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)} 
      />

    </div>
  );
}
