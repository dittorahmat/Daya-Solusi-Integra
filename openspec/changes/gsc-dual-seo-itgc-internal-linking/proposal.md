# Proposal

## Why

Berdasarkan audit Google Search Console (GSC) 30 s.d. 90 hari terakhir, properti `https://dsintegra.co.id/` mencatat 2.923 impresi dengan posisi rata-rata 7,5. Namun terdapat peluang optimasi SEO ganda:
1. **Peluang Internal Linking & CTR Konversi:** Halaman entri glosarium dengan impresi tinggi di Halaman 1 Google seperti `three-lines-model` (176 impresi), `coso-17-prinsip` (71 impresi), `rcm` (7 impresi), dan `defisiensi-kontrol` (12 impresi) belum memiliki jembatan komersial (`commercialBridge`) menuju halaman layanan dan platform utama. Selain itu, artikel pengadaan RCM (`contoh-rcm-siklus-pengadaan-bumn-tod-toe`) memiliki 105 impresi namun 0 klik karena meta snippet kurang menonjolkan intent kueri *"tod dan toe adalah"*.
2. **Peluang Artikel Baru (Content Gap):** Kueri seputar audit sistem informasi BUMN seperti `itgc` (23 impresi, pos 13,6), `itgc adalah` (22 impresi, pos 15,1), `itac` (24 impresi, pos 4,3), dan `itac adalah` (7 impresi, pos 5,1) saat ini hanya ditangkap oleh entri glosarium ringkas. Belum ada artikel pilar komprehensif yang mengupas tuntas metodologi pengujian ITGC dan ITAC pada ERP BUMN sesuai mandat SK-5/DKU.MBU/11/2024.

Perubahan ini diperlukan sekarang untuk mengubah impresi pencarian organik yang sudah bertumbuh menjadi klik riil dan lead konsultansi/software GRC Integra.

## What Changes

- **Pembaruan Data Commercial Bridge Glosarium:** Menambahkan konfigurasi `commercialBridge` pada entri glosarium prioritas tinggi (`three-lines-model`, `coso-17-prinsip`, `rcm`, `defisiensi-kontrol`, `key-control`, dan `remediasi-kontrol`) di `src/data/glossaryData.ts` dengan anchor kontekstual ke `/platform/grc-integra`, `/layanan/icofr-bumn`, dan `/temuan-audit-icofr`.
- **Optimasi Meta Snippet & Quick Win:** Memperbarui `metaDescription` dan menambahkan sub-heading penjelas pada `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md` untuk menjawab langsung kueri *"tod dan toe adalah"* dan *"pengujian kontrol pengadaan"*.
- **Penerbitan Artikel Pilar Baru:** Menambahkan artikel panduan komprehensif `src/content/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5.md` (>1.500 kata) yang mengupas tuntas pengujian ITGC (keamanan akses, manajemen perubahan, operasi TI) dan ITAC (konfigurasi kontrol aplikasi, toleransi matching 3-way ERP) sesuai SK-5.
- **Pendaftaran Sitemap XML:** Mendaftarkan URL artikel baru ke `public/sitemap.xml` dengan basis `https://dsintegra.co.id/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5`, priority 0.9, dan changefreq weekly.

## Capabilities

### New Capabilities
- `itgc-itac-audit-article`: Menyediakan artikel pilar komprehensif mengenai pengujian ITGC dan ITAC pada sistem ERP Core BUMN sesuai mandat SK-5/DKU.MBU/11/2024 dengan struktur tabel komparasi, checklist pengujian, daftar isi ber-anchor, dan internal link ke platform serta layanan DSI.

### Modified Capabilities
- `regulatory-glossary`: Memperluas pemetaan jembatan komersial (`commercialBridge`) pada data entri glosarium strategis sehingga seluruh istilah dengan impresi tinggi di Google otomatis menyajikan kartu konversi langsung ke layanan konsultansi atau produk GRC Integra.

## Impact

- **Affected Code / Data:**
  - `src/data/glossaryData.ts`: Penambahan blok `commercialBridge` pada item target.
  - `src/content/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe.md`: Pembaruan meta deskripsi dan penajaman sub-heading TOD vs TOE.
  - `src/content/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5.md`: Berkas markdown artikel pilar baru.
  - `public/sitemap.xml`: Pendaftaran URL canonical baru.
- **Dependencies / Breaking Changes:** Tidak ada breaking changes pada arsitektur kode atau dependensi npm. Semua penambahan mematuhi desain dan aturan anti-slop repositori.
