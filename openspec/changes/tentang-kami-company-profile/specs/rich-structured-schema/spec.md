## MODIFIED Requirements

### Requirement: Pengayaan Entitas Korporat Schema.org
Sistem SHALL memperkaya skema `@type: "ProfessionalService"` pada `index.html` dengan atribut `knowsAbout`, `sameAs`, referensi entitas resmi untuk regulasi BUMN, identitas badan usaha (`legalName`), alamat jalan kanonik (`streetAddress` beserta lokalitas, region, kode pos, dan negara), nomor telepon kanonik, serta `logo`/`image` yang merujuk ke berkas gambar valid. Payload JSON-LD route `/tentang-kami` SHALL bertipe `AboutPage` dengan entitas utama merujuk node organisasi kanonik.

#### Scenario: Validasi data terstruktur Organization
- **WHEN** validator Schema.org atau Google Rich Results Test membaca tag JSON-LD pada halaman utama
- **THEN** entitas mencakup bidang keahlian resmi seperti "ICOFR BUMN", "SK-5/DKU.MBU/11/2024", "ITGC Audit", dan "COSO Internal Control".

#### Scenario: Validasi NAP kanonik pada node organisasi
- **WHEN** validator membaca node organisasi pada halaman utama
- **THEN** node memuat `streetAddress` Indonesia Stock Exchange Tower 1 Level 3 Unit 304 Jl. Jend. Sudirman Kav. 52-53, `addressLocality` Jakarta Selatan, `postalCode` 12910, `telephone` +62 852 8599 5234, dan `image` yang tidak mengembalikan 404.

#### Scenario: Validasi skema halaman profil perusahaan
- **WHEN** validator membaca payload JSON-LD pada route `/tentang-kami`
- **THEN** payload bertipe `AboutPage` dan entitas `mainEntity` merujuk `@id` node organisasi kanonik yang sama dengan halaman utama.
