## Context

Lihat `proposal.md` untuk motivasi. Repositori Daya Solusi Integra menggunakan stack React, Tailwind CSS, Vite, prerender engine Node (`scripts/generate-static-routes.ts`), dan server Express. Mandat `.agents/AGENTS.md` melarang keras penggunaan tanda pisah em-dash/en-dash (`—`/`–`), melarang `Sparkles`, dan melarang scroll event listener manual (`window.addEventListener("scroll")`).

## Goals / Non-Goals

**Goals:**
- Menyediakan data terstruktur Schema.org/HowTo di `src/data/howtoData.ts` dan menginjeksikannya ke dalam HTML statis prerender serta DOM dinamis saat artikel panduan dibuka.
- Membangun komponen UI Sticky Table of Contents (TOC) di samping artikel blog yang membaca heading H2, mendukung scroll-spy dengan `IntersectionObserver`, dan memiliki scroll-padding/offset agar judul tidak tertutup fixed header saat anchor diklik.

**Non-Goals:**
- Mengubah arsitektur markdown loader atau parser markdown yang sudah ada.
- Menambahkan library eksternal baru untuk TOC (cukup memanfaatkan vanilla React dan `IntersectionObserver`).

## Decisions

### 1. Struktur Data HowTo
- Membuat `src/data/howtoData.ts` yang memetakan `blogSlug` ke array langkah `steps` (`name`, `text`, `url`, `position`).
- Alternatif: Menyematkan HowTo di frontmatter markdown. Keputusan: Memakai berkas TypeScript terpusat agar kompatibel langsung dengan `generate-static-routes.ts` tanpa perlu regex parsing kompleks pada frontmatter.

### 2. Implementasi Scroll-Spy Menggunakan IntersectionObserver
- Sesuai larangan Section 5.D di `.agents/AGENTS.md` (Banned Janky Scroll Listeners), scroll tracking wajib menggunakan `IntersectionObserver`, bukan listener scroll langsung.
- Setiap judul `<h2>` di markdown yang memiliki ID akan diobservasi dengan rootMargin yang sesuai (misal `-20% 0px -70% 0px`) untuk mendeteksi judul yang sedang aktif dibaca.

### 3. Layout Desktop vs Mobile
- Pada layar desktop (`lg:block`), TOC diletakkan di sidebar kanan berdampingan dengan teks artikel (`sticky top-28`).
- Pada layar mobile, daftar isi tetap memanfaatkan daftar isi inline yang sudah ada di bagian awal artikel markdown agar layar tidak sesak.

## Risks / Trade-offs

- [Risk: Judul H2 tertutup oleh fixed header saat anchor diklik] → Mitigation: Tambahkan kelas CSS `scroll-mt-28` atau `scroll-mt-32` pada elemen heading.
- [Risk: Pelanggaran anti-slop pada simbol tanda pisah] → Mitigation: Memastikan seluruh teks langkah HowTo dan teks UI TOC hanya menggunakan titik dua (`:`) atau tanda kurung.
