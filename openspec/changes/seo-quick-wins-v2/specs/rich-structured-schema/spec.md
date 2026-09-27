## MODIFIED Requirements

### Requirement: Pengayaan Entitas Korporat Schema.org
Sistem SHALL memperkaya skema `@type: "ProfessionalService"` pada `index.html` dengan atribut `knowsAbout`, `sameAs`, dan referensi entitas resmi untuk regulasi BUMN, serta atribut `image` WAJIB memakai aset brand resmi perusahaan (logo atau OG image resmi) dan DILARANG memakai placeholder template (seperti `vite.svg`).

#### Scenario: Validasi data terstruktur Organization
- **WHEN** validator Schema.org atau Google Rich Results Test membaca tag JSON-LD pada halaman utama
- **THEN** entitas mencakup bidang keahlian resmi seperti "ICOFR BUMN", "SK-5/DKU.MBU/11/2024", "ITGC Audit", dan "COSO Internal Control", dan atribut `image` menunjuk ke aset brand resmi `https://dsintegra.co.id/`.

## ADDED Requirements

### Requirement: Ketunggalan Blok JSON-LD per Halaman
Setiap halaman SHALL memuat maksimal satu blok `application/ld+json` per `@id` entitas; sumber tunggalnya adalah HTML hasil prerender. Injeksi JSON-LD client-side yang menduplikasi entitas prerender DILARANG dan wajib dihapus.

#### Scenario: Audit duplikasi schema halaman blog
- **WHEN** halaman artikel blog dimuat penuh di browser dan seluruh script `application/ld+json` dihitung
- **THEN** tidak ada dua blok dengan `@id` entitas yang sama (misalnya `#article`), dan validasi Rich Results tidak melaporkan entitas duplikat.
