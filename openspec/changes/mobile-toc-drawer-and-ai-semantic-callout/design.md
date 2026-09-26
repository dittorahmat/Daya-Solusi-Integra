# Technical Design: Mobile TOC Drawer & AI Semantic Abstract

## Architecture Overview
Perubahan ini menambahkan dua optimasi berbiaya rendah dengan dampak tinggi untuk pembaca dan crawler mesin pencari:
1. **Mobile Quick-Jump Floating Drawer**: Menggunakan state lokal React `isMobileTocOpen` di [BlogPage.tsx](file:///C:/backup/Daya-Solusi-Integra/src/components/BlogPage.tsx) untuk menampilkan tombol pill mengambang di pojok kanan bawah (`lg:hidden fixed bottom-6 right-6 z-40`) dan modal bottom-sheet yang berisi daftar heading H2 artikel.
2. **AI Semantic Direct Answer**: Menambahkan atribut microdata `itemprop="abstract"` pada elemen ringkasan eksekutif dan menyelaraskannya dengan snapshot prerender di [generate-static-routes.ts](file:///C:/backup/Daya-Solusi-Integra/scripts/generate-static-routes.ts).

## UI/UX & Design Guidelines
- Mengikuti dial `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`.
- Tombol trigger: latar Slate 900 gelap (`bg-slate-900 border border-slate-700/80 text-white shadow-xl hover:bg-slate-800`), aksen ikon BUMN Gold (`text-[#cca43b]`), sudut membulat proporsional (`rounded-full py-2.5 px-4`).
- Bottom sheet: container `bg-[#0f172a] border-t border-slate-800 rounded-t-2xl p-6 max-h-[75vh] overflow-y-auto`.
- Zero em-dash: Dilarang menggunakan tanda pisah `—` atau `–`.
- Tanpa ikon `Sparkles` dan tanpa `animate-pulse` kosmetik.
