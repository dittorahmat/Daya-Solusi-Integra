import React from "react";
import { BookOpen, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { LOADED_BLOG_POSTS } from "./BlogPage";

interface BlogPreviewSectionProps {
  onNavigateToBlog: (slug?: string) => void;
}

export default function BlogPreviewSection({ onNavigateToBlog }: BlogPreviewSectionProps) {
  // Take top 3 latest posts for the home page showcase
  const previewPosts = LOADED_BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 bg-[#0b0f19] border-t border-slate-800/80 text-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[30vw] h-[30vw] bg-bumn-blue/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bumn-blue/10 border border-bumn-blue/30 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Insight & Thought Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Artikel & Analisis <span className="text-gradient-gold">Regulasi GRC</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Rangkuman panduan praktis dan analisis risiko terkini bagi jajaran manajemen BUMN & sektor finansial.
            </p>
          </div>

          <button
            onClick={() => onNavigateToBlog()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer group shrink-0"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-4 h-4 text-bumn-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Compact Post Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigateToBlog(post.slug)}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer shadow-lg"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
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
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white group-hover:text-bumn-gold transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/40">
                <span className="text-xs text-slate-400">{post.author}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
