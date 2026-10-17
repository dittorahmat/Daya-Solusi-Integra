# Spec Delta

## ADDED Requirements

### Requirement: Tautan Balik Glosarium ke Artikel Klaster Baru
Sistem SHALL menyediakan tautan artikel panduan komprehensif pada entri glosarium `sod`, `walkthrough-lini-2`, `spi`, dan `three-lines-model` yang merujuk langsung ke artikel pilar klaster baru yang relevan.

#### Scenario: Membuka istilah glosarium yang memiliki artikel pilar
- **WHEN** pengguna membuka `/glosarium/sod` atau `/glosarium/walkthrough-lini-2`
- **THEN** halaman menampilkan rekomendasi artikel panduan mendalam terkait topik tersebut.
