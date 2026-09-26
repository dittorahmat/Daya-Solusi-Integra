## Purpose

Menyajikan tabel matriks komparasi regulasi interaktif lintas regulator (Kementerian BUMN, OJK, dan BPK RI) guna memicu Google Featured Snippet dan memberikan kejelasan kepatuhan bagi manajemen BUMN.

## ADDED Requirements

### Requirement: Cross-Regulatory Comparison Matrix Data
Sistem SHALL menyediakan dataset terstruktur yang membandingkan minimal 4 pilar regulasi utama:
1. SK-5/DKU.MBU/11/2024 (Kementerian BUMN)
2. PER-2/MBU/03/2023 (Tata Kelola & Manajemen Risiko BUMN)
3. POJK No. 17/2023 & POJK 11/2022 (Tata Kelola & Ketahanan TI Perbankan)
4. SPKN BPK RI (Standar Pemeriksaan Keuangan Negara)

Dataset SHALL mencakup dimensi: Regulator Penerbit, Subjek Entitas Wajib, Kerangka Kerja Utama (COSO/ISO/Cobit), Mandat Asersi Direksi, Frekuensi & Cakupan Pengujian, serta Implikasi Temuan Audit.

#### Scenario: Data access and categorization
- **WHEN** komponen matriks regulasi dimuat di halaman repositori regulasi
- **THEN** sistem berhasil membaca seluruh dimensi komparasi tanpa data yang kosong atau undefined.

### Requirement: Interactive Comparison Matrix UI Component
Sistem SHALL menampilkan tabel perbandingan visual responsif dengan wadah arsitektural solid (`#0f172a`), scroll horizontal yang lancar untuk tampilan mobile, filter kategori cepat (Holding BUMN, Perbankan/Finansial, Audit BPKP/BPK), dan tanda pembeda yang jelas tanpa karakter em-dash.

#### Scenario: Responsive table rendering
- **WHEN** pengguna mengakses halaman `/regulasi` dan menggulir ke bagian "Matriks Komparasi Regulasi"
- **THEN** sistem merender tabel HTML semantik dengan header kolom yang jelas dan baris perbandingan yang mudah dibaca (*glanceable*).

#### Scenario: Filter switching
- **WHEN** pengguna memilih filter kategori (misal: "Sektor Perbankan")
- **THEN** tabel secara reaktif menyorot atau menyaring regulasi yang relevan dengan sektor tersebut.
