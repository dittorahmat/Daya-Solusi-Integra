## Purpose

Menyediakan infrastruktur Technical SEO yang bersih dari fragment URL tidak valid, memperluas skema data terstruktur Schema.org (BreadcrumbList & FAQPage), serta memastikan bot perayap menerima metadata relevan.

## ADDED Requirements

### Requirement: Fragment-Free XML Sitemap
Berkas `public/sitemap.xml` SHALL hanya memuat URL kanonikal bersih tanpa fragmen tanda pagar (`#`) dan menyertakan seluruh sub-halaman silo layanan dengan `lastmod` dan `priority` yang tepat.

#### Scenario: Search engine crawler fetches sitemap.xml
- **WHEN** Perayap Googlebot mengunduh berkas `https://dsintegra.co.id/sitemap.xml`
- **THEN** Berkas XML menyajikan daftar URL canonical valid (`/`, `/layanan/*`, `/platform/grc-integra`, `/asesmen-maturitas`, `/blog`, `/blog/*`) dan tidak ada satu pun URL yang mengandung karakter `#`.

### Requirement: BreadcrumbList and FAQ Structured Data
Sistem SHALL menyematkan data terstruktur Schema.org berjenis `BreadcrumbList` pada setiap sub-halaman dan `FAQPage` pada halaman utama dan halaman layanan untuk mendukung rich snippets di hasil pencarian Google.

#### Scenario: Rich snippet validation on service page
- **WHEN** Google Rich Results Test memindai halaman layanan atau beranda
- **THEN** Sistem menyajikan schema JSON-LD valid untuk `@type: BreadcrumbList` yang merefleksikan posisi hirarki dan `@type: FAQPage` yang memuat pertanyaan regulasi umum.

### Requirement: Server Bot Metadata Delivery
Server web (`server.ts`) SHALL mengembalikan dokumen HTML dengan OpenGraph tags, title, dan meta description yang telah disesuaikan dengan rute yang diminta saat merespons perayap web atau pratinjau media sosial.

#### Scenario: Social media crawler requests service page
- **WHEN** Bot Facebook, LinkedIn, atau Twitter merayapi URL `https://dsintegra.co.id/platform/grc-integra`
- **THEN** Respons HTML awal memuat `og:title`, `og:description`, dan `og:url` spesifik platform software GRC Integra sebelum eksekusi client-side JavaScript.
