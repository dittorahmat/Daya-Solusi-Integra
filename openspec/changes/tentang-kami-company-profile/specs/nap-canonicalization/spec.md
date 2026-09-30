## Purpose

Menjamin satu nilai kebenaran tunggal untuk identitas kontak perusahaan di seluruh situs agar prospek dan mesin pencari tidak menerima informasi bertentangan.

## ADDED Requirements

### Requirement: Nilai NAP Kanonik Tunggal
Sistem SHALL menggunakan nilai kanonik berikut sebagai satu-satunya data identitas kontak perusahaan:
- Nama: PT Daya Solusi Integra
- Alamat: Indonesia Stock Exchange Tower 1, Level 3 Unit 304, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta 12910
- Telepon: +62 852 8599 5234 (Corporate Whatsapp)
- Surel: marketing@dsintegra.co.id
- Jam operasional: Senin - Jumat 08:30 - 17:30 WIB; Sabtu, Minggu, dan Hari Libur Nasional tutup.

#### Scenario: Audit konsistensi seluruh permukaan
- **WHEN** auditor membandingkan alamat jalan dan nomor telepon pada section kontak homepage, halaman kebijakan privasi (bagian kontak DPO), payload JSON-LD, dan berkas `llms.txt`
- **THEN** seluruh permukaan menampilkan nilai kanonik yang sama tanpa varian competing (tidak ada alamat Talavera, tidak ada nomor 0811).

### Requirement: NAP Mesin-Readable Selaras NAP Manusiawi
Sistem SHALL memastikan data terstruktur mesin (JSON-LD organisasi, berkas AI-discovery) memuat alamat jalan (`streetAddress` + lokalitas + kode pos) dan nomor telepon yang sama dengan yang tampil pada permukaan manusiawi.

#### Scenario: Validasi entitas oleh Rich Results Test
- **WHEN** validator membaca node organisasi pada halaman utama
- **THEN** node memuat `streetAddress` IDX Tower 1, `telephone` +62 852 8599 5234, `email` marketing@dsintegra.co.id, dan `logo`/`image` yang merujuk ke berkas gambar yang ada (bukan URL 404).
