# Spec Delta

## ADDED Requirements

### Requirement: SearchAction Pada Entitas WebSite
Sistem SHALL menyertakan `potentialAction` bertipe `SearchAction` pada entitas `WebSite` di JSON-LD homepage dengan `target` menunjuk ke pola pencarian situs dan `query-input` yang valid.

#### Scenario: Validasi sitelinks searchbox
- **WHEN** validator Schema.org atau Google Rich Results Test membaca JSON-LD homepage
- **THEN** entitas `WebSite` memuat `potentialAction` `SearchAction` dengan target pencarian yang dapat diakses dan sintaks `query-input` yang lolos validasi.

#### Scenario: Pencarian via URL query didukung halaman blog
- **WHEN** pengguna atau crawler membuka `/blog?q=TOE`
- **THEN** daftar artikel terfilter dengan kata kunci "TOE" sejak pemuatan awal tanpa interaksi tambahan, sehingga target SearchAction benar-benar berfungsi.

### Requirement: Logo Organisasi Sebagai ImageObject Eksplisit
Sistem SHALL mendefinisikan `logo` organisasi sebagai `ImageObject` eksplisit dengan `url` aset brand resmi (bukan placeholder) pada entitas `ProfessionalService`/`Organization`.

#### Scenario: Validasi logo Knowledge Panel
- **WHEN** Rich Results Test mengaudit homepage
- **THEN** entitas organisasi memuat `logo` bertipe `ImageObject` dengan URL gambar brand yang mengembalikan status 200 dan content-type gambar.
