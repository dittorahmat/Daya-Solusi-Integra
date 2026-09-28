# Spec Delta

## MODIFIED Requirements

### Requirement: Filter dan Pencarian Istilah Cepat
Sistem SHALL menyediakan mekanisme filter kategori (misal: "Semua", "Regulasi & Kerangka Kerja", "Metodologi Pengujian", "Klasifikasi Kontrol", "Evaluasi Defisiensi", "Pengadaan & Kualifikasi") serta kotak pencarian instan tanpa reload halaman.

#### Scenario: Pengguna mencari istilah spesifik
- **WHEN** pengguna mengetikkan kata kunci seperti "TOD", "Tabel 22", atau "Walkthrough" pada input pencarian
- **THEN** sistem langsung menyaring dan menampilkan kartu definisi istilah yang cocok beserta rujukan klausul regulasi resminya.

#### Scenario: Filter kategori pengadaan
- **WHEN** pengguna memilih filter "Pengadaan & Kualifikasi"
- **THEN** sistem menampilkan kedelapan istilah pengadaan (KAK, HPS, TOR, SPI, KAP, WTP, PSAK 71, PSAK 72) dan tidak menampilkan istilah kategori lain.
