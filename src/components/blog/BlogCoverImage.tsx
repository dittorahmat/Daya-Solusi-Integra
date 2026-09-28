import { blogImageSet, BLOG_IMAGE_SIZES } from "../../utils/blogImage";

interface BlogCoverImageProps {
  src: string;
  alt: string;
  className?: string;
  /** true untuk gambar LCP (hero artikel/featured): fetchPriority high tanpa lazy */
  eager?: boolean;
}

/**
 * Cover artikel responsif: WebP via <picture> + JPEG fallback,
 * srcset 640/960/1200. Atribut width/height/alt/loading dipertahankan
 * seperti semula agar tidak ada regresi CLS maupun LCP.
 */
export default function BlogCoverImage({ src, alt, className, eager }: BlogCoverImageProps) {
  const set = blogImageSet(src);
  if (!set) {
    return (
      <img
        src={src}
        alt={alt}
        width="1200"
        height="675"
        loading={eager ? undefined : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        className={className}
      />
    );
  }
  return (
    <picture>
      <source type="image/webp" srcSet={set.webpSrcSet} sizes={BLOG_IMAGE_SIZES} />
      <source type="image/jpeg" srcSet={set.jpgSrcSet} sizes={BLOG_IMAGE_SIZES} />
      <img
        src={set.fallbackSrc}
        alt={alt}
        width="1200"
        height="675"
        loading={eager ? undefined : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
