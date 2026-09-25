## Context

Lihat `proposal.md` untuk motivasi dan latar belakang perubahan.
Saat ini sistem telah memiliki file dasar `public/llms.txt`, `public/llms-full.txt`, dan `public/robots.txt`. Namun pada sisi frontend, pembaca artikel blog belum memiliki jembatan langsung yang menghubungkan materi artikel ke alat interaktif (`/kalkulator-sampel-toe`, `/asesmen-maturitas`) dan direktori glosarium istilah kepatuhan.

## Goals / Non-Goals

**Goals:**
- Memperkaya dan menyelaraskan `llms.txt` dan `llms-full.txt` dengan seluruh katalog URL pilar resmi, kalkulator, dan studi regulasi SK-5 BUMN terbaru.
- Mengonfigurasi `robots.txt` agar ramah crawler LLM (GPTBot, PerplexityBot, ClaudeBot, dsb.) dengan deklarasi izin `Allow: /` dan tautan ke `llms.txt`.
- Membangun komponen antarmuka `src/components/RelatedEntitiesWidget.tsx` yang bersih, elegan, dan informatif untuk diletakkan di akhir setiap artikel blog.
- Memetakan topik/tag artikel ke alat kalkulator regulasi dan entitas glosarium secara deterministik dan dinamis.
- Mematuhi mandat anti-slop: zero em-dash, tanpa gradient berlebih, serta kanvas solid arsitektural.

**Non-Goals:**
- Tidak mengubah algoritma internal penghitungan kalkulator TOE atau logika skoring asesmen maturitas yang sudah berjalan.
- Tidak mengubah format markdown blog post yang ada di `src/content/blog/`.

## Decisions

### 1. Desain Pemetaan Entitas (Deterministic Topic Matcher)
- **Keputusan**: Membuat kamus pemetaan konteks (`ENTITY_MAPPINGS`) di dalam atau mendampingi `RelatedEntitiesWidget` yang memeriksa slug atau tag artikel.
  - Artikel bertopik sampel/TOE (seperti `panduan-sampel-toe-tabel-22-icofr-bumn`, `fitur-kunci-aplikasi-icofr-bumn`) -> Callout utama: Kalkulator Sampel TOE (Tabel 22 SK-5), istilah glosarium: TOE, TOD, Tabel 22.
  - Artikel bertopik efektivitas/maturitas/aplikasi -> Callout utama: Asesmen Maturitas Pengendalian Internal, istilah glosarium: ICOFR, Lini 1 & Lini 2, RCM.
- **Alternatif**: Memasukkan konfigurasi manual di frontmatter markdown tiap artikel. Ditolak karena mewajibkan edit semua file `.md` satu per satu, sedangkan pemetaan deterministik berbasis topik lebih *maintainable* dan otomatis bekerja untuk artikel baru.

### 2. Standarisasi Format GEO (`llms.txt` & `llms-full.txt`)
- **Keputusan**: Mengikuti spesifikasi komunitas [llmstxt.org](https://llmstxt.org/) dengan struktur Markdown terstruktur: H1, Blockquote, Entitas Resmi, Software GRC Integra, Tautan Layanan Silo, Alat Interaktif, dan Glosarium Regulasi.
- **Alternatif**: Menyediakan format JSON. Ditolak karena standar crawler LLM web saat ini mengutamakan Markdown `llms.txt` yang ringkas dan padat konteks.

### 3. Penempatan Widget di Komponen `BlogPage.tsx`
- **Keputusan**: Menempatkan `RelatedEntitiesWidget` tepat di bawah tag artikel dan di atas Bottom Lead Intake CTA Box (`Diskusi dengan Tim Konsultan`). Ini memberi transisi alami bagi pembaca: setelah membaca materi, mereka mencoba alat interaktif atau membaca istilah terkait, lalu terdorong menghubungi tim konsultan.

## Risks / Trade-offs

- **[Risk]** Tampilan widget terlalu padat pada layar ponsel.  
  → **Mitigasi**: Menggunakan layout grid responsif (`grid-cols-1 md:grid-cols-2`), padding proporsional (`p-6`), dan tipografi yang lapang (`leading-relaxed`).
- **[Risk]** Kemunculan karakter em-dash tidak sengaja pada teks widget.  
  → **Mitigasi**: Pengecekan teks ketat menggunakan titik dua (`:`) atau tanda kurung `()` sesuai aturan skill `design-taste-frontend`.
