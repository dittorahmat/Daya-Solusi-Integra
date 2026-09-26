## ADDED Requirements

### Requirement: Registrasi Metadata SEO untuk Rute Komparasi GRC
Sistem SHALL mendaftarkan konfigurasi metadata SEO spesifik (title, description, keywords, OpenGraph) untuk rute artikel komparasi operasional dan strategis GRC BUMN di `src/utils/seoMeta.ts`.

#### Scenario: Navigasi ke artikel komparasi baru
- **WHEN** pengguna atau bot mengakses rute `/blog/risiko-rcm-excel-vs-software-grc-bumn` atau `/blog/alternatif-software-grc-global-bumn`
- **THEN** sistem menginjeksikan title dan meta description yang telah dioptimasi untuk penelusuran intent komparatif pengambil keputusan B2B BUMN.
