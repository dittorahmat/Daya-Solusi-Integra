## 1. Penyusunan File Standar AI Engine (GEO)

- [x] 1.1 Buat file `public/llms.txt` berisi identitas korporat resmi, regulasi rujukan SK-5, profil software GRC Integra, kontak resmi, dan indeks tautan pilar, lalu verifikasi file dapat dibaca dengan benar.
- [x] 1.2 Buat file `public/llms-full.txt` berisi dokumentasi teknis mendalam tentang 5 tahapan siklus hidup ICOFR BUMN, matriks sampel Tabel 22, dan metodologi pengujian pengendalian internal, lalu verifikasi konten memenuhi standar tanpa tanda pisah em-dash.
- [x] 1.3 Perbarui `public/robots.txt` dengan menambahkan deklarasi `llms.txt` dan izin penelusuran bot AI terkemuka, lalu verifikasi integritas sintaks file.

## 2. Pengayaan Schema.org JSON-LD

- [x] 2.1 Perkaya skema entitas korporat `@type: "ProfessionalService"` di `index.html` dengan properti `knowsAbout` dan profil keahlian kepatuhan regulasi BUMN, lalu verifikasi validitas format JSON.
- [x] 2.2 Tambahkan struktur data `TechArticle` dan penandaan terkait pada daftar schema untuk mendukung visibilitas artikel panduan teknis regulasi, lalu verifikasi validitas skema melalui JSON lint/parse.

## 3. Verifikasi & Pre-flight Check

- [x] 3.1 Jalankan pemindaian anti-slop untuk memastikan tidak ada em-dash (`—`/`–`), `Sparkles`, atau `animate-pulse` sintetis pada file baru atau yang dimodifikasi.
- [x] 3.2 Jalankan `npm run lint` (`tsc --noEmit`) dan `npm run build` untuk memastikan seluruh build dan bundling proyek sukses dengan exit code 0.
