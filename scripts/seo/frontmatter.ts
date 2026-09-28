import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { blogContentDir } from "./paths.js";

/**
 * Helper untuk parsing sederhana front-matter markdown blog
 */
export function parseBlogFrontMatter(rawContent: string): { data: Record<string, any>; body: string } {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: rawContent };

  const frontMatterText = match[1];
  const body = match[2];
  const data: Record<string, any> = {};

  frontMatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, body };
}

/**
 * Helper konversi tanggal teks Indonesia/ISO ke format tanggal RFC-822 (standar RSS 2.0)
 */
export function formatRfc822Date(dateStr?: string): string {
  if (!dateStr) return new Date("2026-09-25T00:00:00Z").toUTCString();

  // Handle format Indonesia seperti "25 September 2026"
  const monthMap: Record<string, string> = {
    januari: "01",
    februari: "02",
    maret: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    agustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    desember: "12"
  };

  const idMatch = dateStr.trim().toLowerCase().match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/);
  if (idMatch) {
    const day = idMatch[1].padStart(2, "0");
    const month = monthMap[idMatch[2]] || "09";
    const year = idMatch[3];
    const parsed = new Date(`${year}-${month}-${day}T07:00:00Z`);
    if (!isNaN(parsed.getTime())) {
      return parsed.toUTCString();
    }
  }

  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed.toUTCString();
  }

  return new Date("2026-09-25T00:00:00Z").toUTCString();
}

/**
 * Konversi tanggal teks Indonesia/ISO ke format ISO yyyy-mm-dd untuk
 * datePublished/dateModified JSON-LD dan lastmod sitemap.
 */
export function toIsoDate(dateStr?: string): string {
  const fallback = "2026-09-25";
  if (!dateStr) return fallback;

  const monthMap: Record<string, string> = {
    januari: "01",
    februari: "02",
    maret: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    agustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    desember: "12"
  };

  const idMatch = dateStr.trim().toLowerCase().match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/);
  if (idMatch && monthMap[idMatch[2]]) {
    return `${idMatch[3]}-${monthMap[idMatch[2]]}-${idMatch[1].padStart(2, "0")}`;
  }

  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return fallback;
}

/**
 * Tanggal modifikasi berkas sebagai ISO yyyy-mm-dd. Sumber utama git log
 * (stabil di CI), fallback ke mtime berkas bila git tidak tersedia.
 */
export function getDateModifiedIso(filePath: string): string {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", filePath], {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    if (out.length >= 10) {
      return out.slice(0, 10);
    }
  } catch {
    // Lanjut ke fallback mtime di bawah
  }
  try {
    const mtime = fs.statSync(filePath).mtime;
    if (!isNaN(mtime.getTime())) {
      return mtime.toISOString().slice(0, 10);
    }
  } catch {
    // Pakai fallback tanggal bawaan
  }
  return "2026-09-25";
}

/**
 * Meta artikel blog dari front-matter markdown: tanggal terbit, tanggal
 * modifikasi (git log, fallback mtime), dan cover image. Null bila markdown
 * tidak ada (misal alias non-artikel seperti /blog/penulis/...).
 */
export function getBlogArticleMeta(slug: string): { published: string; modified: string; coverImage: string } | null {
  const mdFile = path.join(blogContentDir, `${slug}.md`);
  if (!fs.existsSync(mdFile)) return null;
  const raw = fs.readFileSync(mdFile, "utf-8");
  const { data } = parseBlogFrontMatter(raw);
  const published = toIsoDate(data.date);
  const modifiedRaw = getDateModifiedIso(mdFile);
  return {
    published,
    modified: modifiedRaw > published ? modifiedRaw : published,
    coverImage: data.coverImage ? String(data.coverImage) : "https://dsintegra.co.id/og-image.jpg"
  };
}
