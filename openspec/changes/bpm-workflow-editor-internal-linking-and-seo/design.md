## Context

Situs Daya Solusi Integra menggunakan React 19 SPA dengan SSG prerendering (`scripts/generate-static-routes.ts`) untuk bot crawler dan SEO. Halaman `/platform/bpm-workflow-editor` telah tersedia namun membutuhkan penguatan distribusi *link equity* dari navigasi utama, service silo, dan ekosistem konten blog.

Aturan desain:
- Skill `design-taste-frontend`: warna Ink Navy (`#0b0f19`), Deep Navy (`#0d1527`), zero em-dash (`—`/`–`), tanpa ikon `Sparkles` atau dekorasi generik.
- Mandat Blog SEO: Cover image Unsplash teroptimasi web (`w=1200&q=80`), slug terdaftar di sitemap, daftar isi anchor (`## Daftar Isi`), dan tabel perbandingan.

## Goals / Non-Goals

**Goals:**
- Mengimplementasikan dropdown navigasi di `Header.tsx` untuk "Platform GRC Integra" yang memuat sub-item overview dan "BPM Workflow Editor".
- Menambahkan card callout arsitektural di `IcofrBumnPage.tsx` yang mengarahkan pembaca ke editor untuk migrasi SOP lawas.
- Menyuntikkan anchor text alami dan bervariasi pada artikel blog pilar eksisting.
- Menerbitkan artikel blog penunjang baru bertema flowchart SOP BUMN dan mendaftarkannya ke sitemap & SSG prerender.

**Non-Goals:**
- Mengubah skema database atau backend service.
- Menambahkan library dropdown pihak ketiga (cukup menggunakan Tailwind CSS state-controlled dropdown yang ringan dan accessible).

## Decisions

### 1. Dropdown Navigation di Desktop & Drawer Mobile
- **Keputusan**: Menggunakan state `isPlatformDropdownOpen` dengan event mouse hover (`onMouseEnter`/`onMouseLeave`) dan keyboard focus pada desktop, serta accordion/sub-list di mobile drawer.
- **Alternatif**: Mengubah teks nav bar tunggal langsung ke BPM Editor. Ditolak karena pengguna tetap memerlukan akses ke halaman induk platform GRC Integra.

### 2. Desain Callout Card di Service Silo Tanpa AI Slop
- **Keputusan**: Menggunakan container solid navy (`#0d1527`), border tegas (`border-slate-800`), aksen biru BUMN (`#0b4596`), dan ikon fungsional (`Workflow`, `FileUp`, `ArrowRight`). Tanpa glow blob blur atau efek frosted glass tebal.
- **Alternatif**: Floating sticky banner di bawah layar. Ditolak karena mengganggu konsentrasi pembaca pada dokumen kepatuhan BUMN.

### 3. Topik & Struktur Artikel Blog Baru
- **Keputusan**: Menulis artikel mendalam bertema *"Panduan Pemetaan Proses Bisnis dan Flowchart SOP BUMN Sesuai Mandat SK-5"* dengan slug `panduan-pemetaan-proses-bisnis-sop-flowchart-bumn`. Memuat matriks perbandingan antara diagram Visio silo vs. kanvas web BPM Integra, serta anchor text kontekstual ke `/platform/bpm-workflow-editor`.
- **Alternatif**: Hanya menyisipkan link di artikel lama tanpa artikel baru. Ditolak karena artikel baru menciptakan topical cluster baru yang membidik intent pencarian spesifik terkait SOP dan flowchart BUMN.

## Risks / Trade-offs

- [Hover flickering pada dropdown desktop] $\rightarrow$ Berikan delay kecil / margin transparan pada container dropdown agar mouse tidak kehilangan fokus saat berpindah dari tombol trigger ke menu item.
- [Kepadatan navigasi mobile] $\rightarrow$ Sub-link ditata dengan indentasi jelas dan font sedikit lebih ringkas agar hierarki visual mudah dipahami.
