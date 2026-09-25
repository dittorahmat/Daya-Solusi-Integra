## ADDED Requirements

### Requirement: Skema Terstruktur FAQPage JSON-LD
Sistem SHALL menyertakan skema `@type: "FAQPage"` pada payload Schema.org JSON-LD untuk setiap rute yang memiliki data FAQ terstruktur, dengan `mainEntity` berupa array entitas `Question` dan `acceptedAnswer` bertipe `Answer`.

#### Scenario: Validasi crawler terhadap rute ber-FAQ
- **WHEN** crawler mesin pencari atau validator Rich Results mengaudit halaman `/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, atau `/platform/grc-integra`
- **THEN** output JSON-LD memuat blok `@type: "FAQPage"` yang valid berisi seluruh daftar pertanyaan dan jawaban teks lengkap.
