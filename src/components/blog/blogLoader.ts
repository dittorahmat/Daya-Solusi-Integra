// Data loading untuk artikel blog: glob markdown, parsing front-matter,
// dan daftar posting termuat. Diimpor App (validasi slug 404) dan view blog.
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
  /** Tanggal revisi eksplisit (opsional). Badge tampil bila ada dan beda dari date. */
  updated?: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

// Dynamically import all .md files in /src/content/blog/ using Vite glob import
const markdownFiles = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

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
    updated: typeof data.updated === "string" && data.updated.trim().length > 0 ? data.updated : undefined,
    readTime: data.readTime || "5 min read",
    coverImage: data.coverImage || "/images/blog/u-photo-1454165804606-c3d57bc86b40-1200.webp",
    tags: Array.isArray(data.tags) ? data.tags : ["GRC", "BUMN"],
    featured: Boolean(data.featured)
  };
});
