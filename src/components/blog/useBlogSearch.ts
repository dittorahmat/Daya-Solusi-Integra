import { useState, useEffect } from "react";
import { LOADED_BLOG_POSTS } from "./blogLoader";

export const BLOG_CATEGORIES = ["Semua", "Tata Kelola & GRC", "Manajemen Risiko (ISO 31000)", "Cybersecurity & IT Audit", "Compliance & BUMN"];

/**
 * State pencarian dan filter tampilan daftar artikel, termasuk sinkronisasi
 * dua arah dengan param ?q= (target SearchAction sitelinks). Hanya dipakai
 * pada tampilan daftar; komponen ini selalu terpasang saat hook aktif.
 */
export function useBlogSearch() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  // Nilai awal dari param ?q= agar target SearchAction (/blog?q=...) langsung terfilter
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("q") || "";
  });

  const filteredPosts = LOADED_BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === "Semua" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featuredPost = LOADED_BLOG_POSTS.find(p => p.featured) || LOADED_BLOG_POSTS[0];

  // Tulis kembali ?q= ke URL agar tautan hasil pencarian bisa dibagikan
  // dan target SearchAction sitelinks benar-benar berfungsi.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const current = params.get("q") || "";
    if (current !== searchQuery) {
      if (searchQuery) {
        params.set("q", searchQuery);
      } else {
        params.delete("q");
      }
      const next = params.toString();
      window.history.replaceState({}, "", next ? `/blog?${next}` : "/blog");
    }
  }, [searchQuery]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories: BLOG_CATEGORIES,
    filteredPosts,
    featuredPost
  };
}
