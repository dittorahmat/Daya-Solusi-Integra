## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini aplikasi web Daya Solusi Integra menggunakan React (TypeScript) dengan Tailwind CSS, routing berbasis pathname di `src/App.tsx`, skrip SSG untuk pra-render file HTML (`scripts/generate-static-routes.ts`), dan utilitas SEO terpusat di `src/utils/seoMeta.ts`.

Halaman baru `/platform/bpm-workflow-editor` akan menonjolkan fitur BPM Workflow Editor dengan dua kapabilitas pembeda: kemudahan kanvas diagram sekelas Visio berbasis web, serta fitur ingest/auto-draw dari upload berkas (PDF, JPG, PNG). Halaman ini harus mematuhi panduan visual ketat `design-taste-frontend` (palet Ink Navy `#0b0f19`, zero em-dash, tanpa ornamen dekoratif generik, dan tipografi lapang).

## Goals / Non-Goals

**Goals:**
- Membuat komponen landing page mandiri `BpmWorkflowEditorPage.tsx` yang kaya konten teknis, terstruktur rapi, dan responsif.
- Merancang visual mockup arsitektur antarmuka editor yang elegan (menampilkan komponen stencil palette, kanvas bergrid dengan node BPMN & konektor presisi, serta panel inspector) yang mencerminkan look & feel sekelas Microsoft Visio.
- Menampilkan visual step-by-step pipeline migrasi dokumen SOP (Unggah PDF/JPG/PNG -> Rekonstruksi Alur Otomatis -> Penyuntingan Kanvas).
- Menyediakan formulir intake lead terarah dengan opsi demonstrasi offline (khusus Jabodetabek) dan online (nasional).
- Menambahkan metadata SEO lengkap, BreadcrumbList, SoftwareApplication schema, serta FAQPage JSON-LD.
- Memperbarui rute navigasi pada `src/App.tsx`, dropdown navigasi di `src/components/Header.tsx`, dan tautan di `src/components/Footer.tsx`.
- Memperbarui `scripts/generate-static-routes.ts` dan `public/sitemap.xml` agar halaman ter-render statis sempurna.

**Non-Goals:**
- Mengimplementasikan interactive canvas widget nyata / drag-and-drop functional sandbox di halaman publik (fokus konversi adalah mengarahkan audiens untuk menjadwalkan demo sistem).
- Menampilkan fitur deteksi otomatis key control / risiko audit internal pada versi ini (fokus pada diagramming & auto-draw dari file).
- Menambahkan backend pemrosesan file mandiri pada sisi website marketing.

## Decisions

### 1. Arsitektur Komponen Mandiri di `src/components/pages/BpmWorkflowEditorPage.tsx`
- **Pilihan:** Membuat komponen halaman tersendiri alih-alih menggabungkannya ke dalam `PlatformProductPage.tsx`.
- **Rasional:** Halaman produk utama `/platform/grc-integra` berfokus pada siklus hidup ICOFR end-to-end. Memisahkan BPM Workflow Editor ke halaman terdedikasi memaksimalkan kata kunci spesifik "BPM workflow editor", "software alur proses bisnis", dan "alternatif visio untuk SOP".
- **Alternatif yang ditolak:** Menaruh fitur ini hanya sebagai sub-tab di halaman platform utama (mereduksi potensi peringkat SERP Google).

### 2. Mockup Antarmuka Editor Visio-Style yang Solid & Autentik
- **Pilihan:** Membangun representasi antarmuka kanvas menggunakan styling solid dark (`#0f172a` dengan border `#1e293b`) dengan layout 3 kolom (Left Stencil Sidebar, Center Grid Canvas dengan konektor SVG presisi, Right Inspector Panel).
- **Rasional:** Mematuhi mandat `design-taste-frontend` (melarang fake window chrome 3 titik mac, melarang blur blobs berlebihan, melarang fake glassmorphism) guna menghadirkan wibawa software korporat enterprise.

### 3. Pilihan Aksi Konversi Lead: Demo Offline & Online
- **Pilihan:** Menyematkan kartu call-to-action dan form intake demo yang secara eksplisit menyediakan toggle/pilihan: "Sesi Tatap Muka Langsung (Khusus Jabodetabek)" dan "Sesi Daring Interaktif (Online)".
- **Rasional:** Memenuhi preferensi pengambil keputusan BUMN yang kerap meminta sesi presentasi langsung di kantor pusat (Jabodetabek) sekaligus membuka akses bagi korporasi di luar pulau Jawa.

### 4. Integrasi Skema JSON-LD Terstruktur
- **Pilihan:** Mendaftarkan konfigurasi metadata di `src/utils/seoMeta.ts` dengan skema ganda `SoftwareApplication` dan `FAQPage`.
- **Rasional:** Memperbesar peluang mendapatkan Google Featured Snippet dan Rich Snippet di halaman hasil pencarian.

## Risks / Trade-offs

- **[Risk]** Calon klien mengira website marketing sudah menyediakan editor fungsional langsung di browser.  
  → **Mitigasi:** Beri label yang jelas seperti "Pratinjau Antarmuka Editor Platform" dan sediakan tombol CTA "Jadwalkan Demo Langsung" yang menonjol.
- **[Risk]** Kepadatan konten teknis membuat halaman terasa sesak.  
  → **Mitigasi:** Terapkan breathing room (`py-24` sampai `py-32`), hierarki tipografi tegas, pembatas halus `divide-slate-800`, dan zero em-dash.
