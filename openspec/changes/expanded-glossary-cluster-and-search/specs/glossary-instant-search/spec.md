# glossary-instant-search Specification

## Purpose
Menyediakan fitur pencarian cepat di katalog glosarium `/glosarium` agar pengguna dapat menyaring daftar istilah secara instan berdasarkan nama, akronim, dan deskripsi.

## Requirements

### Requirement 1: Interactive Real-Time Search Bar
- Halaman katalog glosarium harus menampilkan elemen search input dengan ikon pencarian (`Search`), placeholder yang jelas (misal: "Cari istilah, akronim, atau rujukan regulasi..."), dan tombol clear jika teks terisi.
- Hasil pencarian harus terfilter secara real-time berdasarkan kecocokan teks pada nama istilah (`term`), singkatan (`acronym`), kategori (`category`), rujukan regulasi (`regulationRef`), atau definisi (`definition`).

### Requirement 2: Clean Zero-State Feedback
- Jika pencarian tidak membuahkan hasil, halaman harus menampilkan status kosong (*empty state*) yang informatif dan tombol untuk mereset kata kunci pencarian.
