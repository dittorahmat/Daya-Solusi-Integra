## ADDED Requirements

### Requirement: Generasi Snapshot Statis Rute Komparasi GRC BUMN
Sistem SHALL mengikutsertakan rute artikel komparasi `/blog/risiko-rcm-excel-vs-software-grc-bumn` dan `/blog/alternatif-software-grc-global-bumn` dalam daftar snapshot SSG prerender saat eksekusi build produksi.

#### Scenario: Pengecekan hasil build prerender HTML
- **WHEN** perintah build produksi selesai dieksekusi
- **THEN** berkas `dist/blog/risiko-rcm-excel-vs-software-grc-bumn/index.html` dan `dist/blog/alternatif-software-grc-global-bumn/index.html` terbentuk dengan meta tag lengkap dan markup konten ter-render.
