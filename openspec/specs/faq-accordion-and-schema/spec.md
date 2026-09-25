# faq-accordion-and-schema Specification

## Purpose
Menyediakan data tanya-jawab terstruktur, komponen UI accordion FAQ yang bersih dan aksesibel, serta integrasi penandaan Schema.org FAQPage pada halaman target guna meningkatkan CTR di mesin pencari dan memfasilitasi kutipan AI search engine.

## Requirements

### Requirement: Penyediaan Data FAQ Terstruktur per Rute
Sistem SHALL menyediakan kumpulan pertanyaan dan jawaban resmi terkait regulasi SK-5 BUMN, pengujian TOE, dan platform GRC Integra yang terpusat dan dapat diakses oleh komponen UI maupun skrip prerender.

#### Scenario: Akses data FAQ berdasarkan rute
- **WHEN** komponen halaman atau skrip prerender meminta data FAQ untuk rute `/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, atau `/platform/grc-integra`
- **THEN** sistem mengembalikan daftar pertanyaan dan jawaban lengkap tanpa tanda em-dash (— atau –) dengan format bahasa Indonesia formal.

### Requirement: Komponen UI Accordion FAQ Aksesibel
Sistem SHALL menampilkan komponen visual FAQ accordion yang responsif, mendukung pembukaan/penutupan interaktif, dan mematuhi panduan desain `design-taste-frontend` (permukaan slate solid, border halus, tanpa efek neon/glow sintetis).

#### Scenario: Interaksi pengguna pada item FAQ
- **WHEN** pengguna mengklik judul pertanyaan pada accordion FAQ
- **THEN** jawaban pertanyaan tersebut terbuka secara halus dan pertanyaan lainnya dapat dibuka atau ditutup secara mandiri dengan aksesibilitas keyboard (aria-expanded).
