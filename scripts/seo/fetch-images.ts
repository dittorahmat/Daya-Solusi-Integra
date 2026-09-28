/**
 * Unduh cover artikel blog dari Unsplash sekali, simpan lokal responsif.
 *
 * Sumber kebenaran: `coverImage` front-matter src/content/blog/*.md.
 * Output per foto unik: public/images/blog/u-<photoid>-<640|960|1200>.{webp,jpg}
 * + ATTRIBUTION.txt (daftar URL sumber untuk higiene lisensi).
 *
 * Cara pakai: npx tsx scripts/seo/fetch-images.ts
 * Idempoten: lewati berkas yang sudah ada kecuali flag --force.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { blogContentDir } from "./paths.js";
import { parseBlogFrontMatter } from "./frontmatter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, "../../public/images/blog");
const WIDTHS = [640, 960, 1200];
const FORCE = process.argv.includes("--force");

function photoIdFromUrl(url: string): string | null {
  const m = url.match(/images\.unsplash\.com\/(photo-[a-z0-9\-]+)/i);
  return m ? m[1] : null;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const sources = new Map<string, string>(); // photoId -> sample source URL
  for (const file of fs.readdirSync(blogContentDir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(raw);
    if (typeof data.coverImage !== "string") continue;
    const id = photoIdFromUrl(data.coverImage);
    if (id && !sources.has(id)) {
      sources.set(id, data.coverImage);
    }
  }

  console.log(`Ditemukan ${sources.size} foto unik dari ${fs.readdirSync(blogContentDir).length} artikel.`);

  let generated = 0;
  for (const [photoId, sampleUrl] of sources) {
    const originUrl = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=80`;
    const needed = WIDTHS.flatMap((w) => [`u-${photoId}-${w}.webp`, `u-${photoId}-${w}.jpg`]);
    const missing = needed.filter((f) => !fs.existsSync(path.join(outDir, f)));
    if (missing.length === 0 && !FORCE) {
      console.log(`- ${photoId}: sudah lengkap, dilewati.`);
      continue;
    }
    console.log(`- ${photoId}: mengunduh (dari ${sampleUrl})...`);
    const res = await fetch(originUrl);
    if (!res.ok) {
      throw new Error(`Gagal mengunduh ${originUrl}: HTTP ${res.status}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    for (const w of WIDTHS) {
      const base = path.join(outDir, `u-${photoId}-${w}`);
      await sharp(buf).resize(w).webp({ quality: 75 }).toFile(`${base}.webp`);
      await sharp(buf).resize(w).jpeg({ quality: 78, mozjpeg: true }).toFile(`${base}.jpg`);
      generated += 2;
    }
  }

  const attribution = [
    "Atribusi sumber foto (Unsplash License, bebas dipakai komersial):",
    ...[...sources.keys()].map((id) => `- https://images.unsplash.com/${id}`),
  ].join("\n");
  fs.writeFileSync(path.join(outDir, "ATTRIBUTION.txt"), attribution + "\n", "utf-8");

  console.log(`Selesai: ${generated} berkas gambar ditulis ke public/images/blog/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
