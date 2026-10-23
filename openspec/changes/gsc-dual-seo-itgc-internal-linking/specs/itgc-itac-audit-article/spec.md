# Spec Delta

## Purpose

Menyediakan artikel pilar komprehensif mengenai metodologi pengujian ITGC dan ITAC pada sistem ERP Core BUMN sesuai mandat regulasi SK-5/DKU.MBU/11/2024 untuk mendominasi kata kunci audit sistem dan mengalirkan traffic ke platform GRC Integra.

## ADDED Requirements

### Requirement: Artikel Pilar ITGC dan ITAC BUMN
Sistem SHALL menyediakan berkas artikel blog `panduan-audit-itgc-itac-bumn-pengujian-erp-sk5.md` dengan panjang minimal 1.500 kata, frontmatter terstruktur lengkap, coverImage korporat Unsplash beresolusi tinggi, H2 ber-anchor di Daftar Isi, tabel komparasi pengujian, dan internal link menuju platform GRC Integra serta layanan konsultansi ICOFR.

#### Scenario: Akses Halaman Artikel Blog ITGC dan ITAC
- **WHEN** pengguna atau mesin perayap mengakses URL `https://dsintegra.co.id/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5`
- **THEN** sistem menyajikan artikel lengkap dengan metadata SEO, JSON-LD BlogPosting schema, cover image, daftar isi anchor, tabel matriks pengujian ITGC vs ITAC, dan tombol CTA ke platform/layanan tanpa tanda pisah em-dash

### Requirement: Pendaftaran Artikel di Sitemap XML
Sistem SHALL mendaftarkan URL artikel blog baru ke dalam `public/sitemap.xml` dengan basis domain resmi `https://dsintegra.co.id/blog/panduan-audit-itgc-itac-bumn-pengujian-erp-sk5`, atribut priority `0.9`, dan changefreq `weekly`.

#### Scenario: Validasi Sitemap XML
- **WHEN** mesin pencari membaca `public/sitemap.xml`
- **THEN** berkas sitemap memuat URL canonical resmi artikel dengan prioritas 0.9 dan tanggal lastmod terkini
