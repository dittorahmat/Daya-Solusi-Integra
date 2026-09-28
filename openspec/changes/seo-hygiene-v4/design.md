# Design

## Context

Lihat `proposal.md` (Why) untuk motivasi. Keadaan saat ini yang membentuk pendekatan:

- `server.ts:504-523`: interceptor prerender menyajikan `dist/<path>/index.html` bila ada, lalu `express.static`, lalu fallback `app.get("*")` ke `index.html` dengan status 200. Tidak ada pembedaan antara rute valid dan URL ngawur.
- `src/App.tsx:275`: path tak dikenal jatuh ke homepage (render, bukan 404).
- `scripts/generate-static-routes.ts:352-353,783`: `datePublished`/`dateModified` hardcode `2026-09-25`; image sitemap hanya untuk 12 artikel blog; head prerender belum mencakup `theme-color`, `twitter:site`, `og:image:alt`, `article:*_time`.
- `index.html`: graph `WebSite` tanpa `SearchAction`; `ProfessionalService.image` string polos (sudah aset brand resmi sejak v2, tapi belum `logo` ImageObject).
- Pola yang sudah ada dan wajib dipakai ulang: validasi drift slug di `generate-static-routes.ts` (v2), OG JPEG per silo (v3), `updateDocumentMeta` di `src/utils/seoMeta.ts` untuk sinkronisasi client-side.

## Goals / Non-Goals

**Goals:**
- Soft-404 hilang: setiap URL tak dikenal berstatus 404 + `noindex`, tanpa mengubah respons rute valid.
- Freshness jujur: tanggal berasal dari sumber kebenaran (front-matter + mtime), bukan konstanta.
- Head dan schema lengkap tanpa duplikasi JSON-LD client-side (pertahankan aturan v2: prerender satu-satunya sumber JSON-LD).

**Non-Goals:**
- Tidak menyentuh konten artikel, desain visual halaman valid, atau struktur routing valid.
- Tidak menambah library, tidak self-host Unsplash, tidak menambah video/sitemap-video.
- Tidak mengubah `/api/*` (tetap JSON 404) dan tidak mengubah redirect trailing-slash 301 yang sudah ada.

## Decisions

1. **404 sebagai rute prerender `dist/404/index.html` + komponen SPA `NotFoundPage`, bukan redirect.**
   Rationale: redirect ke homepage = soft-404 klasik; halaman 404 mandiri memberi sinyal jujur ke crawler dan UX kembali yang baik.
   Alternatif dipertimbangkan: redirect 301 ke homepage (ditolak: memperparah duplikat), redirect ke `/blog` (ditolak: menyesatkan intent).

2. **Server membedakan "prerender ada" vs "tidak ada" sebelum fallback.**
   Rationale: interceptor sudah memeriksa `fs.existsSync(candidateFile)`; fallback `*` diperketat menjadi: kirim `dist/404/index.html` dengan `res.status(404)` untuk GET non-API yang tidak cocok berkas statis maupun prerender. `express.static` tetap lebih dulu sehingga aset tidak terdampak.
   Alternatif: tangani 404 murni di client (ditolak: status tetap 200 bagi crawler non-JS).

3. **Tanggal: front-matter untuk terbit, mtime untuk modifikasi.**
   Rationale: `date` front-matter sudah jadi sumber kebenaran slug (v2); mtime adalah proksi modifikasi termurah tanpa kolom baru. `lastmod` sitemap memakai `dateModified` yang sama agar konsisten.
   Alternatif: kolom `updated:` baru di front-matter (ditolak untuk v4: menambah beban editorial; bisa diadopsi nanti bila mtime terbukti berisik di CI).

4. **Image sitemap non-blog memakai OG per silo yang sudah ada.**
   Rationale: v3 sudah merender 4 JPEG valid; tidak perlu photoshoot baru. Pemetaan silo mengikuti `ROUTE_METADATA_MAP.image` bila ada, fallback `og-image.jpg`.
   Alternatif: satu gambar global (ditolak: mengulang kesalahan pra-v2).

5. **SearchAction target memakai `/blog?q={query}` dengan dukungan param query yang baru diwire.**
   Rationale: `BlogPage.tsx:112` sudah punya state `searchQuery` client-side tapi tidak membaca URL; menambahkan pembacaan `?q=` saat mount (dan sinkronisasi balik saat mengetik) adalah kerja kecil yang membuat target SearchAction benar-benar berfungsi dan lolos validasi, sekaligus memberi pengguna halaman hasil pencarian yang bisa dibagikan.
   Alternatif: target fiktif tanpa halaman (ditolak: gagal validasi Rich Results), menunda SearchAction (ditolak: kehilangan sitelinks searchbox yang murah).

## Risks / Trade-offs

- [Risk] mtime di CI selalu "baru" karena checkout segar → seluruh `lastmod` terlihat baru dan sinyal freshness tercemar → Mitigasi: lebih utamakan git log (`git log -1 --format=%cI -- <file>`) dengan fallback mtime; dokumentasikan pilihan di tasks.
- [Risk] Fallback 404 yang terlalu agresif memakan rute client dinamis yang sah (misal `#contact`) → Mitigasi: hanya terapkan untuk path non-akar yang tidak cocok prerender/statis; verifikasi manual tiap rute resmi pasca-perubahan.
- [Risk] `SearchAction` ditolak validator bila target tidak melayani query → Mitigasi: verifikasi Rich Results Test sebelum merge; bila gagal, keluarkan SearchAction dari change ini dan catat sebagai follow-up.
- [Trade-off] Image yang sama dipakai banyak URL non-blog (satu OG per silo) → cakupan naik 12→54 tapi diversitas rendah; dapat diterima untuk v4 karena tujuannya validitas dan Discover, bukan keunikan per halaman.

## Migration Plan

1. Deploy seperti biasa (`npm run build` menghasilkan `dist/404/index.html` + sitemap baru).
2. Verifikasi pasca-deploy: curl status untuk 1 URL valid (200), 1 URL ngawur (404), 1 slug blog ngawur (404); Rich Results Test homepage + 1 artikel; validasi skema sitemap.
3. Minta re-crawl di Search Console untuk 1 URL per silo; pantau laporan "Not found (404)" — angka 404 yang jujur boleh naik sementara (itu sehat: sebelumnya tersembunyi sebagai 200).
4. Rollback: kembalikan `server.ts` fallback dan `App.tsx` seperti semula; tidak ada migrasi data sehingga rollback aman.

## Open Questions

Tidak ada. Satu-satunya pertanyaan terbuka (target SearchAction) terjawab di Keputusan 5: wire param `?q=` pada `/blog`.
