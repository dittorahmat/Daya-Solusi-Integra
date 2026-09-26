## Context

Lihat `proposal.md` untuk motivasi. Repositori Daya Solusi Integra menggunakan React, Lucide Icons, dan Tailwind CSS dengan strict anti-slop mandate di `.agents/AGENTS.md`.

## Goals / Non-Goals

**Goals:**
- Menambahkan ikon copy link interaktif di samping setiap elemen `h2` pada artikel blog dengan salin instan ke `navigator.clipboard` beserta status visual feedback (ikon `Check` selama 2 detik).
- Menambahkan kartu unduhan toolkit regulasi BUMN kontekstual di dalam artikel sebelum bagian FAQ.

**Non-Goals:**
- Membuat sistem otentikasi login untuk mengunduh template (tautan langsung mengarahkan ke halaman `/toolkit-regulasi`).

## Decisions

### 1. Interaksi Copy Link pada H2
- Setiap elemen `h2` yang dihasilkan oleh `ReactMarkdown` memiliki `group relative flex items-center justify-between`.
- Tombol ikon tautan (`Link2` / `Check`) tersembunyi secara default dan muncul saat hover (`opacity-0 group-hover:opacity-100 sm:opacity-70`).
- Saat diklik:
  `navigator.clipboard.writeText(`${window.location.origin}/blog/${activePost.slug}#${id}`)`.

### 2. Penempatan Toolkit Callout
- Diletakkan tepat di bawah badan artikel (setelah Tags) sebelum Related Entities Widget dan FAQs, sehingga pembaca yang baru menyelesaikan materi teoritis langsung disajikan solusi praktis berupa toolkit template.

## Risks / Trade-offs

- [Risk: Perilaku Clipboard API di browser non-HTTPS] → Mitigation: Gunakan fallback `document.execCommand('copy')` jika `navigator.clipboard` tidak tersedia.
- [Risk: Pelanggaran anti-slop pada simbol tanda pisah] → Mitigation: Seluruh teks kartu callout menggunakan titik dua atau tanda kurung tanpa em-dash (`—`/`–`).
