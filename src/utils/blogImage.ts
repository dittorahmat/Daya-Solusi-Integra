/**
 * Varian gambar blog lokal responsif.
 * Konvensi: coverImage = `/images/blog/u-<photoid>-1200.webp`
 * menghasilkan srcset WebP + JPEG fallback (640/960/1200).
 * Mengembalikan null bila URL bukan konvensi lokal (fallback: img biasa).
 */
const LOCAL_COVER_RE = /^(\/images\/blog\/u-photo-[a-z0-9\-]+)-1200\.webp$/;
const WIDTHS = [640, 960, 1200];

export interface BlogImageSet {
  webpSrcSet: string;
  jpgSrcSet: string;
  fallbackSrc: string;
}

export function blogImageSet(coverImage: string): BlogImageSet | null {
  const m = coverImage.match(LOCAL_COVER_RE);
  if (!m) return null;
  const base = m[1];
  return {
    webpSrcSet: WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(", "),
    jpgSrcSet: WIDTHS.map((w) => `${base}-${w}.jpg ${w}w`).join(", "),
    fallbackSrc: `${base}-1200.jpg`,
  };
}

export const BLOG_IMAGE_SIZES = "(max-width: 768px) 640px, (max-width: 1280px) 960px, 1200px";
