# glossary-expansion-sk5 Specification

## Purpose
Memperluas cakupan taksonomi kepatuhan ICOFR dan regulasi SK-5 BUMN dengan menambahkan 8 istilah terstruktur berotoritas tinggi untuk menguasai kata kunci pencarian teknis di Google SERP.

## Requirements

### Requirement 1: Comprehensive Glossary Item Model
Setiap istilah baru dalam `GLOSSARY_ITEMS` wajib memiliki atribut:
- `id`: Slug URL kanonikal unik (kebab-case).
- `term`: Nama lengkap istilah resmi.
- `acronym`: Singkatan istilah (opsional jika ada).
- `category`: Salah satu dari kategori tata kelola yang valid.
- `regulationRef`: Landasan hukum spesifik (misal `SK-5/DKU.MBU/11/2024`, `COSO Framework`, `POJK`).
- `definition`: Definisi kepatuhan formal.
- `keyTakeaway`: Implikasi langsung bagi BUMN.
- `practicalExample`: Contoh riil penerapan kontrol di lapangan.
- `relatedTermIds`: Referensi silang ke istilah terkait.
- `relatedServiceUrl` & `relatedServiceLabel`: Tautan silo ke layanan atau platform GRC Integra.

### Requirement 2: 8 Mandatory New Glossary Terms
8 istilah baru yang wajib ditambahkan adalah:
1. `rcm`: Risk and Control Matrix (RCM)
2. `sod`: Segregation of Duties (SoD)
3. `three-lines-model`: Three Lines Model SK-5 BUMN
4. `kertas-kerja-toe`: Kertas Kerja Pengujian TOE
5. `coso-17-prinsip`: 17 Prinsip Pengendalian Internal COSO
6. `substantive-testing`: Pengujian Substantif Audit
7. `compensating-control`: Pengendalian Pengganti (Compensating Control)
8. `itac`: Information Technology Application Controls (ITAC)
