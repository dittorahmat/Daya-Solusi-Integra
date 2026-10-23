# Spec Delta

## MODIFIED Requirements

### Requirement: Tautan Internal Kontekstual ke Layanan & Platform
Setiap kartu istilah SHALL menyertakan tag kategori, kutipan regulasi (seperti SK-5 atau COSO), dan tautan internal kontekstual ke halaman layanan terkait (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`) atau produk (`/platform/grc-integra`). Istilah dengan impresi pencarian tinggi wajib dilengkapi kartu jembatan komersial (`commercialBridge`) yang memuat ajakan bertindak (CTA) eksplisit ke platform atau konsultansi DSI.

#### Scenario: Menampilkan Jembatan Komersial pada Entri Glosarium Prioritas
- **WHEN** pengguna membuka halaman detail istilah dengan impresi tinggi seperti `three-lines-model`, `coso-17-prinsip`, atau `rcm`
- **THEN** sistem menyajikan kartu Commercial Bridge di akhir penjelasan istilah dengan judul solusi, deskripsi nilai tambah, dan tombol CTA langsung menuju `/layanan/icofr-bumn` atau `/platform/grc-integra`

#### Scenario: Tautan Internal Kontekstual Standar
- **WHEN** entri glosarium tidak memiliki jembatan komersial khusus
- **THEN** sistem tetap menampilkan tautan layanan terkait melalui properti `relatedServiceUrl` dan `relatedServiceLabel`
