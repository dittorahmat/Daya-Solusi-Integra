import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search, 
  Tag, 
  Sparkles, 
  ArrowLeft,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import ReactMarkdown from "react-markdown";

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
  const activePost = currentSlug ? LOADED_BLOG_POSTS.find(p => p.slug === currentSlug) : null;

  // Update page title for SEO
  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} | Daya Solusi Integra`;
    } else {
      document.title = `Artikel & Insight GRC BUMN | Daya Solusi Integra`;
    }
    window.scrollTo(0, 0);
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
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
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

              {/* Author Badge */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-bumn-gold font-semibold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-200">{activePost.author}</div>
                  <div className="text-xs text-slate-400">{activePost.authorRole}</div>
                </div>
              </div>
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

            {/* Article Main Content (Rendered Markdown) */}
            <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-bumn-gold prose-blockquote:border-l-bumn-blue prose-blockquote:bg-slate-900/40 prose-blockquote:p-4 prose-blockquote:rounded-r-xl mb-12">
              <div className="text-lg leading-relaxed text-slate-200 font-medium mb-6 italic border-l-4 border-bumn-gold pl-4 py-1">
                {activePost.excerpt}
              </div>
              <ReactMarkdown>
                {activePost.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800 mb-12">
              <Tag className="w-4 h-4 text-slate-400 mr-1" />
              {activePost.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-400 border border-slate-800 text-xs rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>

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
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bumn-blue/10 border border-bumn-blue/30 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Pusat Informasi & Insight GRC</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Artikel, Edukasi & Regulasi <span className="text-gradient-gold">BUMN</span>
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
                        <Sparkles className="w-3 h-3" />
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
