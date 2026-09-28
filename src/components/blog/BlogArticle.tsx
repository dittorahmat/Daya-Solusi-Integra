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
  HelpCircle,
  Link2,
  Check,
  Download,
  FileSpreadsheet,
  ListOrdered,
  X
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import RelatedEntitiesWidget from "../RelatedEntitiesWidget";
import Breadcrumbs from "../Breadcrumbs";
import { getAuthorProfile } from "../../data/authors";
import { ROUTE_FAQS } from "../../data/faqData";
import { BlogPost, LOADED_BLOG_POSTS } from "./blogLoader";

interface BlogArticleProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export default function BlogArticle({ post: activePost, onNavigate }: BlogArticleProps) {
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
  const [copiedHeadingId, setCopiedHeadingId] = useState<string | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);

  // Close mobile TOC modal whenever active post changes
  useEffect(() => {
    setIsMobileTocOpen(false);
  }, [activePost]);

  const handleCopyAnchor = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blog/${activePost?.slug}#${id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedHeadingId(id);
        setTimeout(() => setCopiedHeadingId(null), 2000);
      });
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedHeadingId(id);
      setTimeout(() => setCopiedHeadingId(null), 2000);
    }
  };

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
  // Update page title on navigation. Structured data (JSON-LD) is served
  // solely from the prerendered HTML snapshot to avoid duplicate entities.
  useEffect(() => {
    document.title = activePost.title + " | Daya Solusi Integra";
    window.scrollTo(0, 0);
  }, [activePost]);

  return (
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
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
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
                width="1200"
                height="675"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-40" />
            </div>

            {/* Article Main Grid: Content + Sticky TOC */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
              {/* Left Column: Article Content */}
              <div className="lg:col-span-8 min-w-0 max-w-none">
                {/* Executive Takeaways & AI Direct Answer Callout */}
                <div 
                  itemProp="abstract"
                  className="mb-10 p-6 sm:p-7 rounded-2xl bg-[#0f172a] border border-slate-800 text-left relative overflow-hidden shadow-lg"
                >
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

                      const isCopied = copiedHeadingId === id;

                      return (
                        <h2 
                          id={id} 
                          className="group text-2xl sm:text-3xl font-bold font-display text-white mt-14 mb-6 pb-3 border-b border-slate-800 tracking-tight flex items-center justify-between gap-3 scroll-mt-28" 
                          {...props}
                        >
                          <span className="flex-1">{children}</span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyAnchor(e, id)}
                            className={`p-1.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                              isCopied
                                ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-400 opacity-100"
                                : "bg-slate-900/60 hover:bg-slate-800 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-bumn-gold opacity-0 group-hover:opacity-100 sm:opacity-50"
                            }`}
                            title={isCopied ? "Tautan bagian berhasil disalin!" : "Salin tautan ke bagian ini"}
                            aria-label="Salin tautan ke bagian ini"
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Link2 className="w-4 h-4" />
                            )}
                          </button>
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
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800 mt-8 mb-6">
                  <Tag className="w-4 h-4 text-slate-400 mr-1" />
                  {activePost.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-400 border border-slate-800 text-xs rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Contextual Regulatory Toolkit & Working Paper Callout */}
                <div className="p-6 rounded-2xl bg-[#0d1627] border border-blue-900/40 text-left my-8 shadow-xl relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bumn-gold font-bold">
                        <FileSpreadsheet className="w-4 h-4 text-bumn-gold" />
                        <span>Kertas Kerja &amp; Toolkit Kepatuhan Terkait</span>
                      </div>
                      <h4 className="text-base font-bold text-white font-display">
                        Butuh Template Excel RCM, Kertas Kerja TOE, atau Draf KAK BUMN?
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                        Akses modul kertas kerja standar SK-5/DKU.MBU/11/2024, formula penentuan sampel Tabel 22, dan matriks kontrol risiko siap pakai untuk tim internal Anda.
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate("/toolkit-regulasi")}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bumn-blue hover:bg-blue-600 text-white font-semibold text-xs transition-colors shrink-0 shadow-md cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Akses Kertas Kerja</span>
                    </button>
                  </div>
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
                        width="96"
                        height="96"
                        loading="lazy"
                        decoding="async"
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

            {/* Floating Mobile TOC Quick-Jump Button & Bottom-Sheet Modal */}
            {tableOfContents.length > 0 && (
              <>
                {/* Floating Button (Mobile Only) */}
                <div className="lg:hidden fixed bottom-6 right-6 z-40">
                  <button
                    type="button"
                    onClick={() => setIsMobileTocOpen(true)}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer group"
                    aria-label="Buka Daftar Isi Artikel"
                  >
                    <ListOrdered className="w-4 h-4 text-bumn-gold shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold tracking-wide">Daftar Isi</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-bumn-gold shrink-0" />
                  </button>
                </div>

                {/* Mobile TOC Bottom-Sheet Modal */}
                {isMobileTocOpen && (
                  <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
                    {/* Backdrop click to dismiss */}
                    <div
                      className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
                      onClick={() => setIsMobileTocOpen(false)}
                      aria-hidden="true"
                    />

                    {/* Bottom Sheet Container */}
                    <div 
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="mobile-toc-heading"
                      className="relative z-10 w-full max-h-[75vh] bg-[#0f172a] border-t border-slate-800 rounded-t-2xl p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-bottom duration-200"
                    >
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bumn-gold font-bold">
                          <BookOpen className="w-4 h-4 text-bumn-gold shrink-0" />
                          <span id="mobile-toc-heading">Daftar Isi Pembahasan</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsMobileTocOpen(false)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                          aria-label="Tutup Daftar Isi"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Headings List */}
                      <nav className="space-y-2 pb-6">
                        {tableOfContents.map((item, idx) => {
                          const isActive = activeHeadingId === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                setIsMobileTocOpen(false);
                                const targetEl = document.getElementById(item.id);
                                if (targetEl) {
                                  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                              }}
                              className={`w-full text-left flex items-start gap-3 py-2.5 px-3.5 rounded-xl text-xs transition-colors cursor-pointer ${
                                isActive
                                  ? "bg-bumn-blue/20 text-white font-semibold border-l-2 border-bumn-gold"
                                  : "text-slate-300 hover:text-white hover:bg-slate-900/80"
                              }`}
                            >
                              <span className="font-mono text-[10px] text-slate-500 mt-0.5 shrink-0">
                                0{idx + 1}.
                              </span>
                              <span className="leading-snug">{item.text}</span>
                            </button>
                          );
                        })}
                      </nav>

                      {/* Regulatory Notice in Drawer */}
                      <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-bumn-gold shrink-0" />
                        <span>Kepatuhan SK-5/DKU.MBU/11/2024 & COSO Framework</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
  );
}
