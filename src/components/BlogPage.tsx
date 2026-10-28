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
    <div className="min-h-screen pt-28 pb-20 bg-[#ffffff] text-slate-900 relative">
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
