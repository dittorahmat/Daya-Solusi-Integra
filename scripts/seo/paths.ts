import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const distDir = path.resolve(__dirname, "../../dist");
export const publicDir = path.resolve(__dirname, "../../public");
export const blogContentDir = path.resolve(__dirname, "../../src/content/blog");
export const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("Error: dist/index.html not found. Please run 'vite build' first.");
  process.exit(1);
}

export const templateHtml = fs.readFileSync(templatePath, "utf-8");

console.log("Generating static route snapshots for SEO and Social Crawlers...");
