## Purpose

Mengotomasi injeksi data terstruktur JSON-LD bertipe FAQPage pada snapshot HTML statis untuk seluruh rute yang memiliki daftar pertanyaan dan jawaban resmi, guna memicu Google Rich Snippets akordeon di SERP.

## ADDED Requirements

### Requirement: Otomasi Injeksi Skema FAQPage
Script pembangun snapshot statis (`scripts/generate-static-routes.ts`) SHALL memeriksa keberadaan data pertanyaan dan jawaban di `ROUTE_FAQS` untuk setiap rute yang diproses, dan menginjeksi skema bertipe `@type: FAQPage` ke dalam array skema `@graph`.

#### Scenario: Script prerender memproses rute dengan FAQ
- **WHEN** script `generate-static-routes.ts` memproses rute yang memiliki entri di `ROUTE_FAQS` (misal: `/platform/grc-integra` atau `/kalkulator-sampel-toe`)
- **THEN** script menambahkan objek `@type: FAQPage` ke `@graph` dengan array `mainEntity` berisi entitas `Question` dan `Answer` yang terisi lengkap tanpa tanda baca terlarang (em-dash / en-dash)

#### Scenario: Script prerender memproses rute tanpa FAQ
- **WHEN** script `generate-static-routes.ts` memproses rute yang tidak memiliki entri di `ROUTE_FAQS`
- **THEN** script tidak menyertakan objek `@type: FAQPage` dan mempertahankan skema BreadcrumbList, WebPage, atau TechArticle yang sudah ada
