## Context

Aplikasi Daya Solusi Integra menggunakan perutean kustom berbasis status React di `src/App.tsx` yang membaca `window.location.pathname` dan mendengarkan event `popstate`. Saat ini, perutean memeriksa kecocokan string langsung (`currentPath === "/layanan/icofr-bumn"`) atau mengekstrak slug dengan `.replace("/blog/", "")` tanpa membersihkan garis miring di akhir URL.

Lihat `proposal.md` untuk latar belakang permasalahan selengkapnya.

## Goals / Non-Goals

**Goals:**
- Melakukan normalisasi trailing slash secara terpusat pada representasi path aktif di `src/App.tsx`.
- Memastikan ekstraksi parameter slug dinamis (`blogSlug`, `glossarySlug`, `sectorSlug`) membersihkan seluruh garis miring pembuka dan penutup.
- Menjaga sinkronisasi dengan `updateDocumentMeta` agar tag kanonikal dan judul halaman tetap akurat.
- Memastikan tidak ada regresi pada navigasi internal browser maupun klik tombol di antarmuka.

**Non-Goals:**
- Mengganti arsitektur routing kustom SPA dengan pustaka pihak ketiga (misalnya `react-router-dom`) karena arsitektur perutean statis dan SSR/prerender yang ada saat ini sudah bekerja optimal dan terintegrasi erat dengan skrip build.
- Mengubah struktur direktori build statis atau konfigurasi server produksi.

## Decisions

### 1. Normalisasi Path Terpusat (`normalizedPath`)
- **Pendekatan**: Membuat variabel turunan `normalizedPath` yang memotong trailing slash (`path.length > 1 ? path.replace(/\/+$/, "") : path`) sebelum melakukan evaluasi rute boolean.
- **Alternatif yang Dipertimbangkan**: Menambahkan pengecekan ganda di setiap percabangan ternary (`currentPath === '/...' || currentPath === '/.../'`). Pendekatan ini ditolak karena rawan inkonsistensi saat penambahan rute baru di masa mendatang.

### 2. Sanitasi Slug Dinamis dengan Pola Trim Slashes
- **Pendekatan**: Untuk ekstraksi slug dinamis dari `normalizedPath`:
  ```typescript
  const blogSlug = normalizedPath.startsWith("/blog/")
    ? normalizedPath.replace(/^\/blog\//, "").replace(/\/+$/, "")
    : null;
  ```
- **Alasan**: Mencegah slug membawa karakter `/` yang menyebabkan kegagalan pencarian `find(p => p.slug === currentSlug)`.

### 3. Normalisasi pada Fungsi `navigateTo`
- **Pendekatan**: Memastikan `window.history.pushState` tetap menyimpan URL kanonikal bersih tanpa trailing slash yang tidak perlu, kecuali untuk hash scroll anchor (`/#...`).

## Risks / Trade-offs

- **[Risk] Rute beranda `/` ikut terpotong menjadi string kosong `""`**:
  → *Mitigasi*: Logika normalisasi secara eksplisit mempertahankan single slash jika `path === "/"` (atau `path.length > 1 ? path.replace(/\/+$/, "") : "/"`).
- **[Risk] Hash routing `/#[section]` terganggu**:
  → *Mitigasi*: Pengecekan hash anchor `path.startsWith("/#")` diproses terlebih dahulu sebelum normalisasi path.
