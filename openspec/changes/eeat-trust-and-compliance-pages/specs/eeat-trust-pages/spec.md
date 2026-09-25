## Purpose

Menyediakan halaman legal dan komitmen transparansi independensi institusional di rute `/kebijakan-privasi` dan `/pernyataan-independensi` untuk memperkuat sinyal E-E-A-T Google dan kepatuhan hukum perlindungan data.

## ADDED Requirements

### Requirement: Halaman Kebijakan Privasi
Sistem SHALL menyediakan rute publik `https://dsintegra.co.id/kebijakan-privasi` yang menguraikan kebijakan pemrosesan, penyimpanan, dan perlindungan data pribadi sesuai dengan Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP).

#### Scenario: Akses rute kebijakan privasi
- **WHEN** pengguna atau bot membuka rute `/kebijakan-privasi`
- **THEN** sistem merender naskah kebijakan privasi lengkap dengan ketentuan pengumpulan data kontak, penggunaan analitik non-invasif, hak subjek data, dan enkripsi.

### Requirement: Halaman Pernyataan Independensi
Sistem SHALL menyediakan rute publik `https://dsintegra.co.id/pernyataan-independensi` yang memuat piagam etika profesional konsultan independen dalam mengawal siklus hidup ICOFR, evaluasi ITGC, dan penyusunan asersi manajemen BUMN.

#### Scenario: Akses rute pernyataan independensi
- **WHEN** calon klien institusional atau auditor memeriksa kredensial etis di `/pernyataan-independensi`
- **THEN** sistem menyajikan piagam integritas tanpa benturan kepentingan sesuai prinsip tata kelola SPKN dan COSO Framework.

### Requirement: Tautan Footer Berfungsi Penuh
Sistem SHALL mengubah elemen tautan kebijakan privasi dan pernyataan independensi pada komponen footer menjadi tautan navigasi aktif yang mengarahkan pengguna ke halaman masing-masing secara instan.

#### Scenario: Klik tautan footer
- **WHEN** pengguna mengeklik tautan "Kebijakan Privasi" atau "Pernyataan Independensi" pada footer
- **THEN** sistem melakukan navigasi mulus ke rute yang sesuai tanpa error atau link mati.
