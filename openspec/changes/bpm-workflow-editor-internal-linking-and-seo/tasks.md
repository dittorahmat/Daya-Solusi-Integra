## 1. Global Navigation Enhancement (Header)

- [x] 1.1 Perbarui navigasi platform di `src/components/Header.tsx` dengan dropdown interaktif untuk desktop yang memuat tautan "Ringkasan Platform GRC Integra" dan "BPM Workflow Editor", serta sub-link yang rapi di drawer navigasi mobile.
- [x] 1.2 Verifikasi navigasi desktop dan mobile: pastikan klik pada sub-item "BPM Workflow Editor" berhasil berpindah ke `/platform/bpm-workflow-editor` dan menutup drawer mobile dengan mulus.

## 2. Service Silo Integration (Callout Card)

- [x] 2.1 Tambahkan komponen banner callout arsitektural di `src/components/pages/IcofrBumnPage.tsx` yang mengedukasi tentang migrasi instan alur SOP format PDF/JPG/PNG ke diagram interaktif melalui BPM Workflow Editor tanpa AI slop.
- [x] 2.2 Verifikasi tampilan callout card di `/layanan/icofr-bumn`: pastikan styling solid navy, border tegas, hierarki teks lapang, dan tautan mengarah tepat ke `/platform/bpm-workflow-editor`.

## 3. Blog Content Expansion & Internal Linking

- [x] 3.1 Sisipkan variasi anchor text kontekstual menuju `/platform/bpm-workflow-editor` di 3 artikel blog eksisting (`fitur-kunci-aplikasi-icofr-bumn.md`, `manfaat-aplikasi-icofr-bumn-spreadsheet.md`, `perbandingan-software-grc-integra-vs-modul-erp-bumn.md`).
- [x] 3.2 Tulis artikel blog pilar penunjang baru di `src/content/blog/panduan-pemetaan-proses-bisnis-sop-flowchart-bumn.md` lengkap dengan cover image relevan, daftar isi anchor, tabel komparasi, dan tautan internal resmi.
- [x] 3.3 Daftarkan artikel blog baru ke `public/sitemap.xml` dan skrip SSG prerender di `scripts/generate-static-routes.ts`.

## 4. Pre-Flight Quality Verification & Build

- [x] 4.1 Jalankan scan larangan karakter em-dash/en-dash (`—`/`–`) dan ikon `Sparkles` untuk memastikan nol pelanggaran aturan anti-slop.
- [x] 4.2 Jalankan `npm run build` dan verifikasi seluruh rute statis (termasuk artikel blog baru dan halaman terkait) berhasil di-generate dengan exit code 0.
