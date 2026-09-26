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
import BpmWorkflowEditorPage from "./components/pages/BpmWorkflowEditorPage";
import AssessmentLandingPage from "./components/pages/AssessmentLandingPage";
import GlossaryPage from "./components/pages/GlossaryPage";
import GlossaryDetailPage from "./components/pages/GlossaryDetailPage";
import ToeCalculatorPage from "./components/pages/ToeCalculatorPage";
import RegulatoryHubPage from "./components/pages/RegulatoryHubPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import IndependenceStatementPage from "./components/pages/IndependenceStatementPage";
import SectorDetailPage from "./components/pages/SectorDetailPage";
import BumnProcurementPage from "./components/pages/BumnProcurementPage";
import AuthorProfilePage from "./components/pages/AuthorProfilePage";
import RegulatoryToolkitPage from "./components/pages/RegulatoryToolkitPage";
import { updateDocumentMeta } from "./utils/seoMeta";

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

  // Synchronize document <title>, canonical, and meta tags with current route
  useEffect(() => {
    updateDocumentMeta(currentPath);
  }, [currentPath]);

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
  const isBpmEditorPage = currentPath === "/platform/bpm-workflow-editor";
  const isAssessmentPage = currentPath === "/asesmen-maturitas";
  const isGlossaryPage = currentPath === "/glosarium";
  const isGlossaryDetailPage = currentPath.startsWith("/glosarium/") && currentPath.length > "/glosarium/".length;
  const glossarySlug = isGlossaryDetailPage ? currentPath.replace("/glosarium/", "") : null;
  const isRegulatoryPage = currentPath === "/regulasi";
  const isToeCalculatorPage = currentPath === "/kalkulator-sampel-toe";
  const isPrivacyPage = currentPath === "/kebijakan-privasi";
  const isIndependencePage = currentPath === "/pernyataan-independensi";
  const isProcurementPage = currentPath === "/kualifikasi-vendor";
  const isAuthorPage = currentPath === "/penulis/humbul-kristiawan" || currentPath === "/blog/penulis/humbul-kristiawan";
  const isToolkitPage = currentPath === "/toolkit-regulasi";
  const isSectorPage = currentPath.startsWith("/sektor-bumn/") && currentPath.length > "/sektor-bumn/".length;
  const sectorSlug = isSectorPage ? currentPath.replace("/sektor-bumn/", "") : null;
  const isSubPage = isBlogPage || isIcofrPage || isItgcPage || isGrcPage || isPlatformPage || isBpmEditorPage || isAssessmentPage || isGlossaryPage || isGlossaryDetailPage || isRegulatoryPage || isToeCalculatorPage || isPrivacyPage || isIndependencePage || isProcurementPage || isAuthorPage || isToolkitPage || isSectorPage;

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between" id="dsi-app-root">
      
      {/* Corporate Header */}
      <Header 
        activeTab={isBlogPage ? "blog" : isGlossaryPage || isGlossaryDetailPage ? "glosarium" : isRegulatoryPage ? "regulasi" : isToeCalculatorPage ? "kalkulator" : activeTab} 
        setActiveTab={(tab) => {
          if (tab === "blog") {
            navigateTo("/blog");
          } else if (tab === "glosarium") {
            navigateTo("/glosarium");
          } else if (tab === "regulasi") {
            navigateTo("/regulasi");
          } else if (tab === "kalkulator") {
            navigateTo("/kalkulator-sampel-toe");
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
        ) : isBpmEditorPage ? (
          /* DEDICATED BPM WORKFLOW EDITOR ROUTE (/platform/bpm-workflow-editor) */
          <BpmWorkflowEditorPage 
            onNavigate={navigateTo} 
            onRequestDemo={() => {
              setAssessmentPrefill({ company: "", sector: "BUMN", service: "BPM Workflow Editor Demo" });
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
        ) : isGlossaryDetailPage && glossarySlug ? (
          /* DEDICATED GLOSSARY DETAIL ROUTE (/glosarium/:slug) */
          <GlossaryDetailPage 
            slug={glossarySlug} 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
          />
        ) : isGlossaryPage ? (
          /* DEDICATED REGULATORY GLOSSARY ROUTE (/glosarium) */
          <GlossaryPage 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
          />
        ) : isRegulatoryPage ? (
          /* DEDICATED REGULATORY HUB ROUTE (/regulasi) */
          <RegulatoryHubPage 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
          />
        ) : isToeCalculatorPage ? (
          /* DEDICATED TOE SAMPLE CALCULATOR ROUTE (/kalkulator-sampel-toe) */
          <ToeCalculatorPage 
            onNavigate={navigateTo} 
            onRequestDemo={() => {
              setAssessmentPrefill({ company: "", sector: "BUMN", service: "GRC Integra Demo" });
              navigateTo("/#contact");
            }} 
          />
        ) : isPrivacyPage ? (
          /* DEDICATED PRIVACY POLICY ROUTE (/kebijakan-privasi) */
          <PrivacyPolicyPage 
            onNavigate={navigateTo} 
          />
        ) : isIndependencePage ? (
          /* DEDICATED INDEPENDENCE STATEMENT ROUTE (/pernyataan-independensi) */
          <IndependenceStatementPage 
            onNavigate={navigateTo} 
          />
        ) : isProcurementPage ? (
          /* DEDICATED BUMN PROCUREMENT & VENDOR READINESS ROUTE (/kualifikasi-vendor) */
          <BumnProcurementPage 
            onNavigate={navigateTo} 
          />
        ) : isAuthorPage ? (
          /* DEDICATED EEAT AUTHOR PROFILE ROUTE (/penulis/humbul-kristiawan) */
          <AuthorProfilePage 
            onNavigate={navigateTo} 
          />
        ) : isToolkitPage ? (
          /* DEDICATED REGULATORY TOOLKIT & TEMPLATES HUB ROUTE (/toolkit-regulasi) */
          <RegulatoryToolkitPage 
            onNavigate={navigateTo} 
          />
        ) : isSectorPage && sectorSlug ? (
          /* DEDICATED BUMN SECTOR ROUTE (/sektor-bumn/:slug) */
          <SectorDetailPage 
            slug={sectorSlug} 
            onNavigate={navigateTo} 
            onOpenAdvisor={() => setIsAdvisorOpen(true)} 
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
      <Footer onNavigate={navigateTo} />

      {/* Slide-over interactive AI Consultant Drawer */}
      <AiAdvisor 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)} 
      />

    </div>
  );
}
