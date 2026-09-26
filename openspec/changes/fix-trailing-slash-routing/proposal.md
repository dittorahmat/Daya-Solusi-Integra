## Why

Ketika pengguna mengunjungi URL terindeks Google yang memiliki *trailing slash* (misalnya `https://dsintegra.co.id/blog/manfaat-aplikasi-icofr-bumn-spreadsheet/`), sistem Single Page Application (SPA) gagal mencocokkan rute dan slug artikel karena evaluasi pathname saat ini tidak mentoleransi karakter slash di akhir string. Akibatnya, `activePost` bernilai `null` dan halaman me-render tampilan katalog fallback alih-alih artikel blog yang dimaksud.

Hal serupa juga berdampak pada halaman rute statis lainnya (seperti `/layanan/icofr-bumn/`) dan rute dinamis (seperti `/glosarium/:slug/` dan `/sektor-bumn/:slug/`), yang berpotensi melempar pengunjung langsung ke beranda (*homepage*) jika diakses dengan trailing slash dari hasil pencarian web atau tautan eksternal.

## What Changes

- Menambahkan normalisasi global terhadap `currentPath` di `src/App.tsx` dengan membersihkan trailing slash (kecuali untuk root `/`).
- Memperbaiki parsing parameter slug dinamis (`blogSlug`, `glossarySlug`, dan `sectorSlug`) di `src/App.tsx` agar menghapus slash di awal dan akhir slug (`slug.replace(/^\/+|\/+$/g, '')`).
- Memastikan pencocokan rute statis (layanan, platform, kalkulator, dsb.) bekerja konsisten baik URL diakses dengan maupun tanpa trailing slash.
- Memastikan pembaruan meta dokumen SEO (`updateDocumentMeta`) menerima rute yang sudah dinormalisasi sehingga canonical dan tag meta terpasang dengan tepat.

## Capabilities

### New Capabilities
- `client-routing-resilience`: Menjamin toleransi trailing slash dan sanitasi slug dinamis untuk semua rute SPA, mencegah fallback yang salah saat URL dikunjungi dari mesin pencari atau tautan luar.

### Modified Capabilities
<!-- Tidak ada perubahan requirement pada kapabilitas yang sudah ada -->

## Impact

- File terdampak: `src/App.tsx`
- Pengalaman pengguna: Pengguna yang mengklik tautan dari Google SERP atau membagikan tautan berakhiran slash akan langsung melihat halaman artikel/konten yang relevan tanpa terlempar ke katalog atau homepage.
- Beban dependensi: Nol (tidak memerlukan pustaka baru, murni perbaikan logika routing internal SPA).
