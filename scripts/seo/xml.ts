/**
 * Escape karakter khusus XML
 */
export function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Helper pembersih karakter em-dash / en-dash terlarang.
 * Pola memakai unicode escape agar sumber tetap ASCII murni.
 */
export function cleanProhibitedDashes(text: string): string {
  return text.replace(/[\u2014\u2013]/g, ":");
}

/**
 * Sisip-atau-ganti tag head: ganti bila pola cocok, sisipkan sebelum </head>
 * bila template belum memilikinya (misal theme-color, og:image:alt, article:time).
 */
export function upsertHeadTag(routeHtml: string, pattern: RegExp, tag: string): string {
  if (pattern.test(routeHtml)) {
    return routeHtml.replace(pattern, tag);
  }
  return routeHtml.replace(/<\/head>/i, `  ${tag}\n  </head>`);
}

/**
 * Sisipkan tag standar Google Site Name (og:site_name) secara konsisten
 */
export function applySiteNameHeadTag(html: string): string {
  return upsertHeadTag(
    html,
    /<meta\s+property="og:site_name"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:site_name" content="Daya Solusi Integra" />`
  );
}
