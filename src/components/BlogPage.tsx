import { LOADED_BLOG_POSTS } from "./blog/blogLoader";
import BlogList from "./blog/BlogList";
import BlogArticle from "./blog/BlogArticle";


interface BlogPageProps {
  currentSlug?: string | null;
  onNavigate: (path: string) => void;
}

export default function BlogPage({ currentSlug, onNavigate }: BlogPageProps) {
  const cleanSlug = currentSlug ? currentSlug.replace(/^\/+|\/+$/g, "") : null;
  const activePost = cleanSlug ? LOADED_BLOG_POSTS.find(p => p.slug === cleanSlug) : null;


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
          <BlogArticle post={activePost} onNavigate={onNavigate} />
        ) : (
          <BlogList onNavigate={onNavigate} />
        )}

      </div>
    </div>
  );
}
