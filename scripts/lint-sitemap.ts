import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');
const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog');

function lintSitemap() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Error: public/sitemap.xml tidak ditemukan!');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  let hasErrors = false;

  // 1. Verifikasi seluruh blog artikel terdaftar di sitemap
  const blogFiles = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
  for (const file of blogFiles) {
    const slug = file.replace(/\.md$/, '');
    const expectedLoc = `https://dsintegra.co.id/blog/${slug}`;
    if (!sitemapContent.includes(expectedLoc)) {
      console.error(`❌ Sitemap Lint Error: Artikel '${file}' belum terdaftar di sitemap (${expectedLoc})`);
      hasErrors = true;
    }

    // Ekstrak blok URL spesifik blog tersebut
    const urlRegex = new RegExp(`<url>[\\s\\S]*?<loc>${expectedLoc}<\/loc>[\\s\\S]*?<\/url>`);
    const match = sitemapContent.match(urlRegex);
    if (match) {
      const urlBlock = match[0];
      if (urlBlock.includes('<image:image>')) {
        const hasTitle = /<image:title>[\s\S]*?<\/image:title>/.test(urlBlock);
        if (!hasTitle) {
          console.error(`❌ Sitemap Lint Error: Artikel '${slug}' memiliki <image:image> tanpa <image:title>!`);
          hasErrors = true;
        }
      }
    }
  }

  if (hasErrors) {
    process.exit(1);
  }

  console.log(`✅ Sitemap Lint: public/sitemap.xml valid (${blogFiles.length} artikel terdaftar dengan metadata lengkap).`);
}

lintSitemap();
