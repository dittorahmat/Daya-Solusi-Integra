## ADDED Requirements

### Requirement: Penandaan Dataset Terstruktur Tabel 22
Sistem SHALL menyertakan penandaan Schema.org `@type: "Dataset"` pada payload JSON-LD untuk rute `/kalkulator-sampel-toe`, yang merinci parameter ukuran populasi dan batas sampel pengujian kontrol normatif BUMN.

#### Scenario: Crawler Google memindai halaman kalkulator sampel TOE
- **WHEN** crawler search engine memindai metadata halaman `/kalkulator-sampel-toe`
- **THEN** payload JSON-LD memuat entitas `@type: "Dataset"` dengan atribut `name`, `description`, `variableMeasured`, dan penerbit resmi Daya Solusi Integra.
