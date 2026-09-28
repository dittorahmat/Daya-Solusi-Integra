import React, { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Award,
  ChevronRight
} from "lucide-react";
import Breadcrumbs from "../Breadcrumbs";
import { useBlogSearch } from "./useBlogSearch";
import BlogCoverImage from "./BlogCoverImage";

interface BlogListProps {
  onNavigate: (path: string) => void;
}

export default function BlogList({ onNavigate }: BlogListProps) {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories,
    filteredPosts,
    featuredPost
  } = useBlogSearch();

  useEffect(() => {
    document.title = `Artikel & Insight GRC BUMN | Daya Solusi Integra`;
    window.scrollTo(0, 0);
  }, []);

  return (
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
                    <BlogCoverImage
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      eager
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
                      <BlogCoverImage
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
  );
}
