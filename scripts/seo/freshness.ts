/**
 * Audit kebusukan konten blog (penasihat, warn-only, selalu exit 0).
 *
 * Melaporkan per slug: tanggal terbit, tanggal modifikasi (git log,
 * fallback mtime), umur hari, dan status segar (<180 hari),
 * basi (180-365 hari), atau kritis (>365 hari).
 *
 * Cara pakai: npm run seo:freshness
 */
import fs from "fs";
import path from "path";
import { blogContentDir } from "./paths.js";
import { parseBlogFrontMatter, getBlogArticleMeta } from "./frontmatter.js";

const FRESH_DAYS = 180;
const STALE_DAYS = 365;
const DAY_MS = 86_400_000;

function main() {
  if (!fs.existsSync(blogContentDir)) {
    console.warn("Blog content directory not found, skipping freshness audit.");
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const rows: string[] = [];
  const unparseable: string[] = [];
  const counts = { segar: 0, basi: 0, kritis: 0 };

  const files = fs.readdirSync(blogContentDir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(raw);
    const slug = data.slug || file.replace(".md", "");
    if (!data.title || !data.date) {
      unparseable.push(`${file} (front-matter title/date tidak lengkap)`);
      continue;
    }
    const meta = getBlogArticleMeta(slug);
    if (!meta) {
      unparseable.push(`${file} (meta artikel null)`);
      continue;
    }
    const ageDays = Math.max(0, Math.round((Date.parse(today) - Date.parse(meta.modified)) / DAY_MS));
    const status = ageDays > STALE_DAYS ? "kritis" : ageDays >= FRESH_DAYS ? "basi" : "segar";
    counts[status]++;
    rows.push(`- [${status}] /blog/${slug} | terbit ${meta.published} | ubah ${meta.modified} | ${ageDays} hari`);
  }

  console.log(`Audit kesegaran konten per ${today}:`);
  for (const r of rows) console.log(r);
  console.log(`Ringkasan: ${counts.segar} segar, ${counts.basi} basi, ${counts.kritis} kritis dari ${files.length} artikel.`);
  if (unparseable.length > 0) {
    console.warn("Tidak terparsing (wajib ditindaklanjuti):");
    for (const u of unparseable) console.warn(`- ${u}`);
  }
  if (counts.kritis > 0) {
    console.warn("Saran: jadwalkan penyegaran untuk artikel kritis (perbarui data, contoh, dan tanggal revisi).");
  }
}

main();
