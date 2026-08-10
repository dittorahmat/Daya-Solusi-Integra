import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import BlogPreviewSection from "./components/BlogPreviewSection";
import BlogPage from "./components/BlogPage";
import Assessment from "./components/Assessment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AiAdvisor from "./components/AiAdvisor";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [isAdvisorOpen, setIsAdvisorOpen] = useState<boolean>(false);
  const [assessmentPrefill, setAssessmentPrefill] = useState<{ company: string; sector: string } | null>(null);

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

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between" id="dsi-app-root">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/5 blur-[200px]" />
        <div className="absolute top-[30vh] left-0 w-[40vw] h-[40vw] bg-bumn-blue/5 blur-[180px]" />
      </div>

      {/* Corporate Header */}
      <Header 
        activeTab={isBlogPage ? "blog" : activeTab} 
        setActiveTab={(tab) => {
          if (tab === "blog") {
            navigateTo("/blog");
          } else {
            if (isBlogPage) {
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
