import React from "react";
import { BookOpen, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { LOADED_BLOG_POSTS } from "./blog/blogLoader";
import BlogCoverImage from "./blog/BlogCoverImage";

interface BlogPreviewSectionProps {
  onNavigateToBlog: (slug?: string) => void;
}

export default function BlogPreviewSection({ onNavigateToBlog }: BlogPreviewSectionProps) {
  // Take top 3 latest posts for the home page showcase
  const previewPosts = LOADED_BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 bg-[#f8fafc] border-t border-slate-200 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0b4596] uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Insight & Thought Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Artikel & Analisis <span className="text-amber-700">Regulasi GRC</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Rangkuman panduan praktis dan analisis risiko terkini bagi jajaran manajemen BUMN & sektor finansial.
            </p>
          </div>

          <button
            onClick={() => onNavigateToBlog()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm font-semibold rounded-xl transition-all cursor-pointer group shrink-0 shadow-xs"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Compact Post Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigateToBlog(post.slug)}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer shadow-sm text-left"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <BlogCoverImage
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[#0b4596] border border-slate-200 text-[10px] font-semibold rounded-lg shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3 h-3 text-slate-600" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3 text-slate-600" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-[#0b4596] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-5 pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500">{post.author}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0b4596] group-hover:text-blue-700">
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
