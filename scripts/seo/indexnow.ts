import fs from "fs";
import path from "path";
import { RouteMeta } from "../../src/utils/seoMeta.js";
import { blogContentDir } from "./paths.js";
import { parseBlogFrontMatter } from "./frontmatter.js";

/**
 * Otomatisasi pengiriman seluruh URL ke IndexNow API (Bing, Yandex, Seznam, Naver)
 */
export async function submitToIndexNow(allRoutes: Record<string, RouteMeta>) {
  const host = "dsintegra.co.id";
  const key = "d51n739r4c01d1nd3xn0wk3y202609";
  const keyLocation = `https://${host}/${key}.txt`;

  // Kumpulkan seluruh URL kanonikal resmi
  const urlSet = new Set<string>();
  urlSet.add(`https://${host}/`);

  for (const routePath of Object.keys(allRoutes)) {
    if (routePath !== "/") {
      urlSet.add(`https://${host}${routePath}`);
    }
  }

  // Tambahkan juga blog posts
  if (fs.existsSync(blogContentDir)) {
    const files = fs.readdirSync(blogContentDir).filter((file) => file.endsWith(".md"));
    for (const file of files) {
      const filePath = path.join(blogContentDir, file);
      const rawContent = fs.readFileSync(filePath, "utf-8");
      const { data } = parseBlogFrontMatter(rawContent);
      const slug = data.slug || file.replace(".md", "");
      urlSet.add(`https://${host}/blog/${slug}`);
    }
  }

  const urlList = Array.from(urlSet);
  const payload = {
    host,
    key,
    keyLocation,
    urlList
  };

  console.log(`Submitting ${urlList.length} URLs to IndexNow API endpoint...`);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`Successfully submitted ${urlList.length} URLs to IndexNow (Status: ${response.status}).`);
    } else {
      console.warn(`IndexNow API responded with status ${response.status}: ${response.statusText}`);
    }
  } catch (error: any) {
    // Non-blocking catch to ensure local build succeeds even without Internet access
    console.warn(`Note: IndexNow submission skipped or timed out (${error?.message || error}). Build completed successfully.`);
  }
}