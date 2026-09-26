import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search, 
  Tag, 
  Award, 
  ArrowLeft, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  HelpCircle
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import RelatedEntitiesWidget from "./RelatedEntitiesWidget";
import Breadcrumbs from "./Breadcrumbs";
import { getAuthorProfile } from "../data/authors";
import { ROUTE_FAQS } from "../data/faqData";
import { ROUTE_HOWTO } from "../data/howtoData";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

// Dynamically import all .md files in /src/content/blog/ using Vite glob import
const markdownFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

function parseFrontMatter(rawText: string): { data: Record<string, any>; content: string } {
  const match = rawText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: rawText };

  const frontMatterText = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  frontMatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          data[key] = JSON.parse(value);
        } catch {
          data[key] = value;
        }
      } else if (value === 'true') {
        data[key] = true;
      } else if (value === 'false') {
        data[key] = false;
      } else {
        data[key] = value;
      }
    }
  });

  return { data, content };
}

export const LOADED_BLOG_POSTS: BlogPost[] = Object.keys(markdownFiles).map((filePath, idx) => {
  const rawText = markdownFiles[filePath] as string;
  const { data, content } = parseFrontMatter(rawText);

  return {
    id: String(idx + 1),
    title: data.title || "Artikel GRC BUMN",
    slug: data.slug || filePath.split('/').pop()?.replace('.md', '') || `post-${idx}`,
    excerpt: data.excerpt || "",
    content: content || "",
    category: data.category || "Tata Kelola & GRC",
    author: data.author || "Tim Konsultan Daya Solusi Integra",
    authorRole: data.authorRole || "Senior GRC Consultant",
    date: data.date || "2026-08-10",
    readTime: data.readTime || "5 min read",
    coverImage: data.coverImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: Array.isArray(data.tags) ? data.tags : ["GRC", "BUMN"],
    featured: Boolean(data.featured)
  };
});

interface BlogPageProps {
  currentSlug?: string | null;
  onNavigate: (path: string) => void;
}

export default function BlogPage({ currentSlug, onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Semua", "Tata Kelola & GRC", "Manajemen Risiko (ISO 31000)", "Cybersecurity & IT Audit", "Compliance & BUMN"];

  const filteredPosts = LOADED_BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === "Semua" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featuredPost = LOADED_BLOG_POSTS.find(p => p.featured) || LOADED_BLOG_POSTS[0];
  const cleanSlug = currentSlug ? currentSlug.replace(/^\/+|\/+$/g, "") : null;
  const activePost = cleanSlug ? LOADED_BLOG_POSTS.find(p => p.slug === cleanSlug) : null;

  // Extract table of contents (H2 headings) from activePost content
  const tableOfContents = React.useMemo(() => {
    if (!activePost) return [];
    const lines = activePost.content.split("\n");
    const headings: { id: string; text: string }[] = [];
    lines.forEach((line) => {
      const match = line.match(/^##\s+(.+)$/);
      if (match) {
        const title = match[1].trim();
        if (!title.toLowerCase().includes("daftar isi")) {
          const id = title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
          headings.push({ id, text: title });
        }
      }
    });
    return headings;
  }, [activePost]);

  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  // Setup scroll-spy using IntersectionObserver for TOC (Section 5.D compliant: no janky scroll listeners)
  useEffect(() => {
    if (!activePost || tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1
      }
    );

    tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [activePost, tableOfContents]);

  // Update page title and inject Article + Person Schema.org for SEO & E-E-A-T
  useEffect(() => {
    const existingScript = document.getElementById("article-schema-ld");
    if (existingScript) {
      existingScript.remove();
    }

    if (activePost) {
      document.title = `${activePost.title} | Daya Solusi Integra`;
      const authorProfile = getAuthorProfile(activePost.author);

      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": `https://dsintegra.co.id/blog/${activePost.slug}#article`,
        "headline": activePost.title,
        "description": activePost.excerpt,
        "image": activePost.coverImage,
        "datePublished": activePost.date,
        "dateModified": activePost.date,
        "inLanguage": "id-ID",
        "mainEntityOfPage": `https://dsintegra.co.id/blog/${activePost.slug}`,
        "publisher": {
          "@id": "https://dsintegra.co.id/#organization"
        },
        "author": {
          "@type": "Person",
          "@id": `https://dsintegra.co.id/#author-${authorProfile.id}`,
          "name": authorProfile.fullNameWithCredentials,
          "jobTitle": authorProfile.role,
          "worksFor": {
            "@id": "https://dsintegra.co.id/#organization"
          },
          "image": `https://dsintegra.co.id${authorProfile.avatar}`,
          "description": authorProfile.headline,
          "url": authorProfile.profileUrl,
          "sameAs": authorProfile.sameAs,
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Universitas Padjadjaran"
            },
            {
              "@type": "EducationalOrganization",
              "name": "Institut Teknologi Bandung"
            }
          ],
          "knowsAbout": [
            "Internal Control over Financial Reporting (ICOFR)",
            "SK-5/DKU.MBU/11/2024",
            "COSO Internal Control Integrated Framework",
            "IT General Controls (ITGC)",
            "Sarbanes-Oxley Act (SOX)",
            "Enterprise Risk Management ISO 31000",
            "Tata Kelola BUMN & Perbankan"
          ]
        },
        "keywords": activePost.tags.join(", ")
      };

      // Injeksi skema FAQPage & HowTo bila artikel memiliki entri data terkait (Google Rich Results)
      const postFaqs = ROUTE_FAQS[`/blog/${activePost.slug}`];
      const postHowto = ROUTE_HOWTO[`/blog/${activePost.slug}`];
      const graphs: any[] = [articleSchema];

      if (postFaqs && postFaqs.length > 0) {
        graphs.push({
          "@type": "FAQPage",
          "@id": `https://dsintegra.co.id/blog/${activePost.slug}#faq`,
          "mainEntity": postFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        });
      }

      if (postHowto) {
        const howToGraph: Record<string, any> = {
          "@type": "HowTo",
          "@id": `https://dsintegra.co.id/blog/${activePost.slug}#howto`,
          "name": postHowto.name,
          "description": postHowto.description,
          "step": postHowto.steps.map((st) => ({
            "@type": "HowToStep",
            "position": st.position,
            "name": st.name,
            "text": st.text,
            "url": st.url || `https://dsintegra.co.id/blog/${activePost.slug}#step-${st.position}`
          }))
        };

        if (postHowto.totalTime) {
          howToGraph.totalTime = postHowto.totalTime;
        }
        if (postHowto.tool && postHowto.tool.length > 0) {
          howToGraph.tool = postHowto.tool.map((t) => ({
            "@type": "HowToTool",
            "name": t
          }));
        }
        if (postHowto.supply && postHowto.supply.length > 0) {
          howToGraph.supply = postHowto.supply.map((s) => ({
            "@type": "HowToSupply",
            "name": s
          }));
        }

        graphs.push(howToGraph);
      }

      const jsonLdPayload = graphs.length > 1
        ? {
            "@context": "https://schema.org",
            "@graph": graphs
          }
        : articleSchema;

      const script = document.createElement("script");
      script.id = "article-schema-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLdPayload);
      document.head.appendChild(script);
    } else {
      document.title = `Artikel & Insight GRC BUMN | Daya Solusi Integra`;
    }
    window.scrollTo(0, 0);

    return () => {
      const scriptOnCleanup = document.getElementById("article-schema-ld");
      if (scriptOnCleanup) {
        scriptOnCleanup.remove();
      }
    };
  }, [activePost]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0b0f19] text-slate-100 relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-bumn-blue/10 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-amber-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* -------------------------------------------------------------
            PAGE VIEW 1: SINGLE ARTICLE PAGE (/blog/:slug)
        ------------------------------------------------------------- */}
        {activePost ? (
          <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Blog & Wawasan", path: "/blog" },
                  { label: activePost.title }
                ]}
                onNavigate={onNavigate}
              />
            </div>

            {/* Back Button */}
            <button
              onClick={() => onNavigate("/blog")}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Katalog Blog</span>
            </button>

            {/* Post Header */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 bg-bumn-blue/20 text-blue-400 border border-bumn-blue/40 rounded-full font-medium">
                  {activePost.category}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white leading-tight">
                {activePost.title}
              </h1>

              {/* High Authority E-E-A-T Author Byline */}
              {(() => {
                const authorInfo = getAuthorProfile(activePost.author);
                return (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0f172a] border border-slate-800 text-left">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={authorInfo.avatar}
                        alt={authorInfo.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-bumn-blue/50 shrink-0 shadow-md"
                        onError={(e) => {
                          // Fallback if image fails
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white tracking-tight">{authorInfo.name}</span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-bumn-gold bg-bumn-gold/10 px-2 py-0.5 rounded border border-bumn-gold/30">
                            <CheckCircle2 className="w-3 h-3 text-bumn-gold" />
                            Verified GRC Expert
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 font-medium">{authorInfo.fullNameWithCredentials.replace(authorInfo.name + ", ", "")}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{authorInfo.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                      <a
                        href={authorInfo.sameAs[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
                        title="Lihat Profil LinkedIn Humbul Kristiawan"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                      <button
                        onClick={() => onNavigate(authorInfo.profileUrl)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-950/80 hover:bg-blue-900 text-blue-300 hover:text-white border border-blue-800/80 transition-colors cursor-pointer"
                        title="Lihat Profil Lengkap & Rekam Jejak Konsultasi"
                      >
                        <span>Profil Pakar</span>
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Cover Banner */}
            <div className="relative rounded-2xl overflow-hidden mb-10 border border-slate-800 aspect-video shadow-2xl">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-40" />
            </div>

            {/* Article Main Grid: Content + Sticky TOC */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
              {/* Left Column: Article Content */}
              <div className="lg:col-span-8 min-w-0 max-w-none">
                {/* Executive Takeaways & AI Direct Answer Callout */}
                <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-[#0f172a] border border-slate-800 text-left relative overflow-hidden shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bumn-gold font-bold mb-3">
                    <ShieldCheck className="w-4 h-4 text-bumn-gold shrink-0" />
                    <span>Ringkasan Eksekutif & Jawaban Kunci</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-5">
                    {activePost.excerpt}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs">
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block font-mono text-[10px] uppercase tracking-wider mb-1">Rujukan Regulasi</span>
                      <span className="font-semibold text-white">SK-5 BUMN / COSO 2013</span>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block font-mono text-[10px] uppercase tracking-wider mb-1">Audiens Kunci</span>
                      <span className="font-semibold text-white">Direksi, SPI & Lini 2</span>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block font-mono text-[10px] uppercase tracking-wider mb-1">Kesiapan Audit</span>
                      <span className="font-semibold text-white">Standar BPKP, BPK & KAP</span>
                    </div>
                  </div>
                </div>

                <ReactMarkdown
                  components={{
                    h2: ({ children, ...props }) => {
                      const text = String(children);
                      const isToc = text.toLowerCase().includes("daftar isi");
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      
                      if (isToc) {
                        return (
                          <div className="my-10 p-6 sm:p-7 rounded-2xl bg-[#0d1627] border-2 border-bumn-blue/40 shadow-xl relative overflow-hidden lg:hidden">
                            <div className="flex items-center gap-2.5 text-sm font-mono uppercase tracking-wider text-bumn-gold font-bold mb-1">
                              <BookOpen className="w-4 h-4 text-bumn-gold" />
                              <span>Daftar Isi Artikel</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-4">Klik judul di bawah untuk langsung menuju topik pembahasan:</p>
                            <div className="h-px w-full bg-slate-800 mb-2" />
                          </div>
                        );
                      }

                      return (
                        <h2 
                          id={id} 
                          className="text-2xl sm:text-3xl font-bold font-display text-white mt-14 mb-6 pb-3 border-b border-slate-800 tracking-tight flex items-center gap-2 scroll-mt-28" 
                          {...props}
                        >
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ children, ...props }) => (
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-100 mt-10 mb-4 tracking-tight scroll-mt-28" {...props}>
                        {children}
                      </h3>
                    ),
                    p: ({ children, ...props }) => (
                      <p className="text-slate-300 text-base sm:text-lg leading-[1.9] mb-8 font-normal" {...props}>
                        {children}
                      </p>
                    ),
                    ul: ({ children, ...props }) => (
                      <ul className="space-y-3.5 mb-8 pl-6 list-disc list-outside text-slate-300 text-base sm:text-lg leading-[1.8]" {...props}>
                        {children}
                      </ul>
                    ),
                    ol: ({ children, ...props }) => (
                      <ol className="space-y-3.5 mb-8 pl-6 list-decimal list-outside text-slate-300 text-base sm:text-lg leading-[1.8]" {...props}>
                        {children}
                      </ol>
                    ),
                    li: ({ children, ...props }) => (
                      <li className="pl-2 leading-relaxed" {...props}>
                        {children}
                      </li>
                    ),
                    a: ({ href, children, ...props }) => {
                      const isAnchor = href?.startsWith('#');
                      if (isAnchor) {
                        return (
                          <a
                            href={href}
                            className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg bg-blue-950/40 hover:bg-blue-900/60 border border-blue-500/20 hover:border-blue-400/50 text-blue-300 hover:text-white text-sm font-semibold transition-all my-1 group"
                            {...props}
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-bumn-gold group-hover:translate-x-0.5 transition-transform shrink-0" />
                            <span>{children}</span>
                          </a>
                        );
                      }
                      return (
                        <a
                          href={href}
                          className="text-bumn-gold hover:text-amber-300 font-semibold underline underline-offset-4 decoration-bumn-gold/50 hover:decoration-amber-300 transition-colors"
                          {...props}
                        >
                          {children}
                        </a>
                      );
                    },
                    strong: ({ children, ...props }) => (
                      <strong className="font-semibold text-white" {...props}>
                        {children}
                      </strong>
                    ),
                    hr: () => <hr className="my-10 border-slate-800/80" />,
                    blockquote: ({ children, ...props }) => (
                      <blockquote className="my-6 border-l-4 border-bumn-blue bg-slate-900/60 p-4 sm:p-5 rounded-r-xl text-slate-300 italic" {...props}>
                        {children}
                      </blockquote>
                    ),
                    table: ({ children, ...props }) => (
                      <div className="overflow-x-auto my-8 rounded-xl border border-slate-800 shadow-xl bg-slate-950/60">
                        <table className="w-full text-left text-sm text-slate-300 border-collapse" {...props}>
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children, ...props }) => (
                      <thead className="bg-slate-900/90 text-white font-semibold border-b border-slate-800 text-xs uppercase tracking-wider font-mono" {...props}>
                        {children}
                      </thead>
                    ),
                    tbody: ({ children, ...props }) => (
                      <tbody className="divide-y divide-slate-800/60 font-sans" {...props}>
                        {children}
                      </tbody>
                    ),
                    tr: ({ children, ...props }) => (
                      <tr className="hover:bg-slate-900/40 transition-colors" {...props}>
                        {children}
                      </tr>
                    ),
                    th: ({ children, ...props }) => (
                      <th className="px-4 py-3.5" {...props}>
                        {children}
                      </th>
                    ),
                    td: ({ children, ...props }) => (
                      <td className="px-4 py-3.5 align-top leading-relaxed" {...props}>
                        {children}
                      </td>
                    ),
                    pre: ({ children, ...props }) => (
                      <div className="my-6 p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto text-xs font-mono text-slate-300">
                        <pre {...props}>{children}</pre>
                      </div>
                    ),
                    code: ({ children, ...props }) => (
                      <code className="px-1.5 py-0.5 rounded bg-slate-800/80 text-bumn-gold font-mono text-xs" {...props}>
                        {children}
                      </code>
                    )
                  }}
                >
                  {activePost.content}
                </ReactMarkdown>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800 mt-8 mb-4">
                  <Tag className="w-4 h-4 text-slate-400 mr-1" />
                  {activePost.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-400 border border-slate-800 text-xs rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Sticky Table of Contents (Desktop) */}
              <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
                {tableOfContents.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 shadow-xl">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bumn-gold font-bold mb-4 pb-3 border-b border-slate-800">
                      <BookOpen className="w-4 h-4 text-bumn-gold" />
                      <span>Daftar Isi Pembahasan</span>
                    </div>
                    <nav className="space-y-1.5">
                      {tableOfContents.map((item, idx) => {
                        const isActive = activeHeadingId === item.id;
                        return (
                          <a
                            key={idx}
                            href={`#${item.id}`}
                            className={`group flex items-start gap-2.5 py-2 px-3 rounded-lg text-xs transition-colors ${
                              isActive
                                ? "bg-bumn-blue/20 text-white font-semibold border-l-2 border-bumn-gold"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                            }`}
                          >
                            <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-400 mt-0.5">
                              0{idx + 1}.
                            </span>
                            <span className="leading-snug line-clamp-2">{item.text}</span>
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Quick Regulatory Reference Badge */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Award className="w-4 h-4 text-bumn-gold" />
                    <span>Rujukan Regulasi Resmi</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    Seluruh panduan disusun berdasarkan SK-5/DKU.MBU/11/2024 dan standar COSO Internal Control 2013 untuk lingkungan BUMN.
                  </p>
                </div>
              </div>
            </div>

            {/* Author Authority Bio Card (E-E-A-T Trust Engine) */}
            {(() => {
              const authorProfile = getAuthorProfile(activePost.author);
              return (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1527] border border-slate-800 mb-10 text-left relative overflow-hidden shadow-xl">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                      src={authorProfile.avatar}
                      alt={authorProfile.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-bumn-blue/60 shrink-0 shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="space-y-3 flex-1">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-lg font-bold text-white font-display">{authorProfile.name}</span>
                          <span className="text-xs font-mono text-bumn-gold bg-bumn-gold/10 px-2.5 py-0.5 rounded border border-bumn-gold/30">
                            {authorProfile.role}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 font-mono">
                          {authorProfile.fullNameWithCredentials.replace(authorProfile.name + ", ", "")}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {authorProfile.bioSummary}
                      </p>

                      {/* Key Track Records */}
                      <div className="pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                          Rekam Jejak Penugasan Strategis:
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {authorProfile.trackRecordHighlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                              <ShieldCheck className="w-3.5 h-3.5 text-bumn-gold shrink-0 mt-0.5" />
                              <span className="leading-snug">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outbound Verifications */}
                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
                        <span className="text-xs text-slate-400">Verifikasi Profil Pakar:</span>
                        <a
                          href={authorProfile.sameAs[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 border border-slate-700/80 transition-colors"
                        >
                          <span>LinkedIn Profil</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <button
                          onClick={() => onNavigate(authorProfile.profileUrl)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-950/80 hover:bg-blue-900 text-blue-300 hover:text-white border border-blue-800/80 transition-colors cursor-pointer"
                        >
                          <span>Biografi Lengkap &amp; Publikasi</span>
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Contextual Related Entities & Interactive Tools Widget */}
            <RelatedEntitiesWidget
              postSlug={activePost.slug}
              postCategory={activePost.category}
              postTags={activePost.tags}
              onNavigate={onNavigate}
            />

            {/* Sequential Navigation & Related Cluster Articles */}
            {(() => {
              const currentIndex = LOADED_BLOG_POSTS.findIndex((p) => p.slug === activePost.slug);
              const prevPost = currentIndex > 0 ? LOADED_BLOG_POSTS[currentIndex - 1] : null;
              const nextPost = currentIndex >= 0 && currentIndex < LOADED_BLOG_POSTS.length - 1 ? LOADED_BLOG_POSTS[currentIndex + 1] : null;

              // Filter 2 related cluster articles
              const relatedClusterPosts = LOADED_BLOG_POSTS
                .filter((p) => p.slug !== activePost.slug && (p.category === activePost.category || p.tags.some((t) => activePost.tags.includes(t))))
                .slice(0, 2);

              return (
                <div className="my-12 space-y-8">
                  {/* Next / Previous Article Navigation Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prevPost ? (
                      <button
                        onClick={() => onNavigate(`/blog/${prevPost.slug}`)}
                        className="group flex flex-col items-start p-5 rounded-xl bg-[#0f172a] hover:bg-[#131f38] border border-slate-800 hover:border-bumn-blue/50 transition-all text-left cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-400 mb-2">
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                          Artikel Sebelumnya
                        </span>
                        <span className="text-sm font-semibold text-white group-hover:text-bumn-gold transition-colors line-clamp-2">
                          {prevPost.title}
                        </span>
                      </button>
                    ) : (
                      <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/40 text-left opacity-40">
                        <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                          Awal Katalog Artikel
                        </span>
                        <span className="text-xs text-slate-400">Ini adalah artikel pertama dalam katalog</span>
                      </div>
                    )}

                    {nextPost ? (
                      <button
                        onClick={() => onNavigate(`/blog/${nextPost.slug}`)}
                        className="group flex flex-col items-end p-5 rounded-xl bg-[#0f172a] hover:bg-[#131f38] border border-slate-800 hover:border-bumn-blue/50 transition-all text-right cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-400 mb-2">
                          Artikel Selanjutnya
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-sm font-semibold text-white group-hover:text-bumn-gold transition-colors line-clamp-2">
                          {nextPost.title}
                        </span>
                      </button>
                    ) : (
                      <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/40 text-right opacity-40">
                        <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                          Akhir Katalog Artikel
                        </span>
                        <span className="text-xs text-slate-400">Ini adalah artikel penutup dalam katalog</span>
                      </div>
                    )}
                  </div>

                  {/* Related Cluster Articles Cards */}
                  {relatedClusterPosts.length > 0 && (
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#0d1627] border border-slate-800 text-left">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-bumn-gold uppercase tracking-wider">
                          <BookOpen className="w-4 h-4 text-bumn-gold" />
                          Artikel Terkait dalam Kluster Ini
                        </div>
                        <button
                          onClick={() => onNavigate("/blog")}
                          className="text-xs text-blue-400 hover:text-white transition-colors cursor-pointer"
                        >
                          Lihat Semua Artikel
                        </button>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {relatedClusterPosts.map((related) => (
                          <div
                            key={related.slug}
                            onClick={() => onNavigate(`/blog/${related.slug}`)}
                            className="group p-4 rounded-xl bg-[#0f172a] hover:bg-[#131f38] border border-slate-800 hover:border-bumn-blue/50 transition-all cursor-pointer flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                                <span className="text-blue-400 font-medium">{related.category}</span>
                                <span>{related.readTime}</span>
                              </div>
                              <h4 className="text-sm font-semibold text-white group-hover:text-bumn-gold transition-colors line-clamp-2 mb-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                                {related.excerpt}
                              </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-blue-300">
                              <span>Baca Pembahasan Lengkap</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* On-Page Visual FAQs (Google Rich Snippets Alignment & High Information Gain) */}
            {(() => {
              const faqs = ROUTE_FAQS[`/blog/${activePost.slug}`];
              if (!faqs || faqs.length === 0) return null;

              return (
                <section className="my-12 p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-bumn-gold uppercase tracking-wider mb-2">
                    <HelpCircle className="w-4 h-4 text-bumn-gold" />
                    Tanya Jawab Regulasi &amp; Kepatuhan
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
                    Pertanyaan yang Sering Diajukan Seputar Topik Ini
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 transition-all duration-200 open:border-bumn-blue/50 open:bg-slate-900"
                      >
                        <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 text-sm sm:text-base">
                          <span>{faq.question}</span>
                          <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg shrink-0">
                            ▾
                          </span>
                        </summary>
                        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed pt-3 border-t border-slate-800/80">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })()}

            {/* Bottom Lead Intake CTA Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-bumn-blue/20 via-slate-900 to-amber-500/10 border border-bumn-blue/30 relative overflow-hidden shadow-xl">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-bumn-gold tracking-wider uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    Konsultasi Ahli Daya Solusi Integra
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Ingin Memperkuat Sistem GRC & ICOFR di Perusahaan Anda?
                  </h3>
                  <p className="text-sm text-slate-300">
                    Tim konsultan berpengalaman kami siap memberikan pendampingan penyesuaian regulasi BUMN, audit risiko, dan implementasi ISO 31000.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate("/#contact")}
                  className="px-6 py-3 bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 shrink-0 cursor-pointer flex items-center gap-2"
                >
                  <span>Diskusi dengan Tim Konsultan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (

          /* -------------------------------------------------------------
              PAGE VIEW 2: BLOG CATALOG PAGE (/blog)
          ------------------------------------------------------------- */
          <div>
            {/* Breadcrumb Navigation */}
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Blog & Wawasan" }
                ]}
                onNavigate={onNavigate}
              />
            </div>

            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bumn-blue/10 border border-bumn-blue/30 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Pusat Informasi & Insight GRC</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Artikel, Edukasi & Regulasi <span className="text-bumn-gold">BUMN</span>
              </h1>
              <p className="text-slate-400 text-base">
                Kumpulan panduan teknis, analisis risiko, dan artikel tata kelola TI terkini yang ditulis oleh praktisi & konsultan ahli Daya Solusi Integra.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-bumn-blue text-white shadow-md font-semibold"
                        : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari artikel / topik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-bumn-blue transition-all"
                />
              </div>
            </div>

            {/* Featured Hero Article */}
            {selectedCategory === "Semua" && !searchQuery && featuredPost && (
              <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all group relative overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-500/20 text-bumn-gold border border-amber-500/30 text-xs font-semibold rounded-full flex items-center gap-1">
                        <Award className="w-3 h-3 text-bumn-gold" />
                        Artikel Utama
                      </span>
                      <span className="text-xs text-slate-400">• {featuredPost.readTime}</span>
                    </div>

                    <h2 
                      onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                      className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white group-hover:text-bumn-gold transition-colors cursor-pointer leading-snug"
                    >
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <User className="w-3.5 h-3.5 text-bumn-blue" />
                        <span>{featuredPost.author}</span>
                      </div>

                      <button
                        onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                      >
                        <span>Baca Selengkapnya</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div 
                    onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                    className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 aspect-video cursor-pointer"
                  >
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Thumbnail */}
                    <div 
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="relative aspect-video overflow-hidden cursor-pointer bg-slate-950"
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-blue-400 border border-slate-800 text-[10px] font-semibold rounded-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3
                        onClick={() => onNavigate(`/blog/${post.slug}`)}
                        className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors cursor-pointer leading-snug line-clamp-2"
                      >
                        {post.title}
                      </h3>

                      <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Card */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/50 mt-4">
                    <span className="text-xs text-slate-400 truncate max-w-[150px]">
                      {post.author}
                    </span>
                    <button
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-bumn-gold hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <span>Baca</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
                <p className="text-slate-400 text-sm">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
