# Proposal

## Why

Kartu share media sosial Daya Solusi Integra hampir pasti tampil tanpa gambar: berkas `og-image` disajikan sebagai `Content-Type: image/jpeg` plus `nosniff` sementara isinya markup SVG, sehingga scraper yang patuh (Facebook, LinkedIn, WhatsApp) gagal membangun pratinjau. Selain itu OG saat ini tidak memuat logo perusahaan dan memakai tipografi kecil yang tak terbaca di ukuran share. Memperbaiki ini memulihkan seluruh CTR kanal share sekaligus, tepat setelah tune-up CTR organik pada change sebelumnya.

## What Changes

- Mengonversi 4 berkas OG (`og-image`, `og-layanan`, `og-platform`, `og-toolkit`) menjadi byte raster JPEG asli 1200x630 dengan desain yang sama, sehingga header `image/jpeg` sesuai isi.
- Mendesain ulang lockup OG: logo DSI versi putih yang di-bake permanen (konsisten dengan header/footer yang memakai `brightness-0 invert`) plus headline 3-5 kata yang terbaca di lebar 300px; menghilangkan paragraf pilar kecil.
- Mempertahankan varian pesan per silo (layanan, platform, toolkit, beranda) pada URL yang sama sehingga cache scraper me-refresh tanpa perubahan referensi.
- Menambahkan entri gambar (`xmlns:image`) pada `sitemap.xml` dari `coverImage` front-matter setiap artikel untuk membuka kanal Google Images/Discover.

## Capabilities

### New Capabilities
- `social-preview-images`: Berkas OG valid secara byte, aturan lockup logo putih plus headline ringkas yang terbaca di ukuran share kecil, dan varian per silo.

### Modified Capabilities
- `static-prerender-generator`: Requirement berubah (sitemap wajib menyertakan entri gambar dari `coverImage` front-matter; drift antara daftar gambar sitemap dan markdown ditolak seperti drift slug).

## Impact

- File baru: 1 aset logo putih baked (`public/og-logo-white.png` atau setara), 4 JPEG OG hasil render.
- File diubah: `public/sitemap.xml` (namespace + entri gambar), `scripts/generate-static-routes.ts` (generasi image sitemap + validasi), `src/utils/seoMeta.ts` hanya bila URL OG berubah (tidak direncanakan).
- Tidak ada perubahan visual situs, routing, atau schema JSON-LD.
- Verifikasi: header `Content-Type` via curl, validator preview Facebook/LinkedIn, Google Search Console (image sitemap), build hijau.
