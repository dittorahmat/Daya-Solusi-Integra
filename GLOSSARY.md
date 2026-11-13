# Domain Model & Kamus Konseptual BUMN GRC dan ICOFR

Dokumen ini mendefinisikan batasan konseptual kanonikal untuk terminologi inti Tata Kelola, Manajemen Risiko, Kepatuhan (GRC), dan Pengendalian Internal atas Pelaporan Keuangan (ICOFR) di lingkungan Badan Usaha Milik Negara (BUMN) Republik Indonesia, berlandaskan mandat Peraturan Menteri BUMN PER-2/MBU/03/2023 dan Surat Keputusan Deputi Bidang Keuangan dan Manajemen Risiko SK-5/DKU.MBU/11/2024.

Kamus ini bersifat strictly conceptual: tidak memuat kode sumber, implementasi runtime, atau detail arsitektur teknis perangkat lunak. Untuk implementasi data terstruktur runtime dan representasi schema.org, rujuk dokumen ADR 0001 (`docs/adr/0001-seo-gsc-glossary-parity.md`) dan modul data aplikasi.

---

## 1. ITGC (Information Technology General Controls)

### Definisi Konseptual
Pengendalian umum teknologi informasi yang mencakup kebijakan, prosedur, dan tata kelola infrastruktur teknologi informasi guna menjamin integritas, ketersediaan, kerahasiaan, serta keandalan operasional sistem informasi pendukung pelaporan keuangan.

### Batasan dan Cakupan
- **Domain Utama**:
  1. Tata Kelola Akses Data dan Program (Access to Programs and Data): pengelolaan hak akses, autentikasi berbasis peran (*Role-Based Access Control* / RBAC), tinjauan akses periodik, pemisahan tugas (*Segregation of Duties* / SoD), dan pengamanan akun istimewa (*privileged accounts*).
  2. Manajemen Perubahan Program (Program Changes): siklus otorisasi modifikasi kode, pemisahan lingkungan pengembangan (*development*), pengujian (*staging* / UAT), dan produksi (*production*), serta prosedur rilis darurat.
  3. Pengembangan Program Baru (Program Development): metodologi siklus hidup pengembangan sistem (*System Development Life Cycle* / SDLC), persetujuan spesifikasi fungsional, dan pengujian penerimaan pengguna.
  4. Operasi Komputer (Computer Operations): otomasi penjadwalan *job batch*, manajemen cadangan data (*backup*) dan pemulihan bencana (*Disaster Recovery* / DRP), penanganan insiden, serta pemantauan kapasitas infrastruktur.
- **Peran Fondasional**: Keandalan ITGC merupakan prasyarat mutlak sebelum pengendalian aplikasi otomatis (ITAC) dapat diandalkan. Apabila ITGC mengalami kegagalan, efektivitas seluruh ITAC dan kalkulasi otomatis yang berjalan di atas sistem terkait diragukan integritasnya.

---

## 2. ITAC (Information Technology Application Controls)

### Definisi Konseptual
Pengendalian terprogram yang tertanam langsung di dalam logika aplikasi bisnis untuk memastikan bahwa transaksi keuangan diotorisasi, dicatat, diproses, dan dilaporkan secara lengkap, akurat, tepat waktu, dan sah.

### Batasan dan Cakupan
- **Bentuk Pengendalian**:
  1. Validasi Input (Input Validation): pengecekan kelengkapan data (field wajib), validasi format (nomor identitas pajak, tanggal akuntansi), dan toleransi batas numerik (limit otorisasi approval).
  2. Pengecekan Duplikasi (Duplicate Checks): pencegahan input nomor faktur, kode voucher, atau transaksi pembayaran ganda secara otomatis.
  3. Rekonsiliasi Otomatis (Automated Reconciliation): pencocokan sistematis antar-tabel, jurnal pembantu terhadap buku besar, atau transaksi bank dengan catatan perbendaharaan (*auto-matching*).
  4. Pengendalian Urutan dan Integritas Pemrosesan: penomoran urut otomatis (*pre-numbered sequence*), pencegahan posting transaksi yang tidak seimbang (*unbalanced journal entries*), dan kunci periode akuntansi otomatis.
- **Ketergantungan Struktur**: ITAC mengandalkan integritas kode logika dan konfigurasi basis data yang dilindungi oleh ITGC. Pengujian ITAC mencakup verifikasi parameter konfigurasi dan pengujian logika pemrosesan data sistem.

---

## 3. TOD (Test of Design)

### Definisi Konseptual
Pengujian evaluatif yang dilakukan pada titik waktu tertentu (*point-in-time*) untuk menilai apakah suatu aktivitas pengendalian telah dirancang secara memadai dan tepat guna memitigasi risiko salah saji material pada asersi laporan keuangan yang bersangkutan.

### Batasan dan Cakupan
- **Kriteria Keberhasilan**: Desain pengendalian dinilai efektif apabila aktivitas pengendalian yang dirumuskan, jika beroperasi secara konsisten sesuai deskripsi kebijakannya, mampu mencegah atau mendeteksi serta mengoreksi salah saji material tepat waktu.
- **Metode Pengujian**:
  - Penelaahan dokumentasi kebijakan, standar operasional prosedur (SOP), dan matriks risiko dan pengendalian (RCM: *Risk and Control Matrix*).
  - Wawancara mendalam (*in-depth interview*) dengan pemilik kontrol (*control owner*).
  - *Walkthrough test*: penelusuran satu transaksi tunggal dari titik awal inisiasi transaksi, pencatatan di sistem, pemrosesan verifikasi, hingga posting akhir pada laporan keuangan untuk mengonfirmasi bahwa pengendalian benar-benar ada dan diterapkan (*placed in operation*).
- **Implikasi Tata Kelola**: Apabila desain kontrol terbukti cacat (*ineffective design*), pengujian efektivitas operasi (TOE) tidak perlu dilakukan karena kontrol yang cacat rancangannya tidak akan menghasilkan mitigasi risiko yang andal betapapun seringnya dijalankan.

---

## 4. TOE (Test of Operating Effectiveness)

### Definisi Konseptual
Pengujian evaluatif yang dilakukan sepanjang periode pelaporan (*period-of-time*) untuk memastikan bahwa pengendalian internal yang telah lolos uji desain (TOD) benar-benar beroperasi secara konsisten, berulang, dan efektif oleh personil yang memiliki wewenang serta kompetensi yang dipersyaratkan.

### Batasan dan Cakupan
- **Dimensi Pengujian**:
  - Konsistensi penerapan pengendalian di seluruh siklus pelaporan (triwulan, semester, atau tahunan).
  - Otoritas dan kompetensi pelaksana kontrol: apakah pihak yang menandatangani atau memvalidasi memiliki kewenangan sah sesuai limit delegasi wewenang (*Delegation of Authority* / DoA).
  - Deviasi operasional: identifikasi tingkat kegagalan pelaksanaan kontrol terhadap populasi transaksi yang diuji.
- **Teknik Pengujian**:
  1. *Inquiry*: konfirmasi lisan atau tertulis kepada personel pengelola kontrol.
  2. *Observation*: pengamatan langsung atas pelaksanaan aktivitas kontrol secara fisik atau digital.
  3. *Inspection*: pemeriksaan bukti fisik/digital, dokumen otorisasi, laporan pengecualian, jejak audit, dan tiket persetujuan sistem.
  4. *Re-performance*: pelaksanaan ulang independen oleh penguji atas prosedur pengendalian yang dilakukan oleh pemilik kontrol.
- **Prinsip Bukti**: *Inquiry* semata tidak pernah cukup untuk membuktikan efektivitas operasi kontrol; inquiry wajib dikuatkan dengan inspeksi bukti atau re-performance.

---

## 5. Defisiensi Kontrol (Control Deficiency)

### Definisi Konseptual
Kondisi di mana rancangan atau pelaksanaan suatu pengendalian internal tidak memungkinkan manajemen atau karyawan, dalam pelaksanaan tugas normalnya, untuk mencegah atau mendeteksi dan mengoreksi salah saji laporan keuangan secara tepat waktu.

### Batasan dan Tingkatan
- **Defisiensi Desain**: Terjadi ketika suatu pengendalian yang diperlukan untuk mencapai tujuan pengendalian tidak ada, atau pengendalian yang ada tidak dirancang secara tepat sehingga tujuan pengendalian tidak tercapai meskipun pengendalian beroperasi sesuai rancangan.
- **Defisiensi Operasi**: Terjadi ketika pengendalian yang dirancang secara memadai tidak beroperasi sesuai rancangan, atau personel yang melaksanakan pengendalian tidak memiliki otorisasi atau kompetensi yang diperlukan untuk melaksanakannya secara efektif.
- **Bobot Dampak**: Berada pada tingkat keparahan paling rendah dalam hierarki evaluasi defisiensi; tidak berdampak signifikan terhadap kewajaran asersi laporan keuangan secara keseluruhan, namun tetap memerlukan tindakan korektif manajemen dan dilaporkan kepada pimpinan unit kerja.

---

## 6. Defisiensi Signifikan (Significant Deficiency)

### Definisi Konseptual
Suatu defisiensi pengendalian, atau kombinasi dari beberapa defisiensi pengendalian internal atas pelaporan keuangan, yang tingkat keparahannya lebih rendah daripada kelemahan material (Material Weakness), namun cukup penting untuk mendapatkan perhatian dari pihak yang bertanggung jawab atas tata kelola (Direksi dan Komite Audit Dewan Komisaris).

### Batasan dan Ambang Evaluasi
- **Karakteristik Penilaian**:
  - Terdapat kemungkinan wajar (*reasonable possibility*) bahwa pengendalian internal gagal mencegah atau mendeteksi salah saji pada laporan keuangan.
  - Besaran potensi salah saji lebih dari tidak material (*more than inconsequential*), namun belum mencapai ambang batas materialitas laporan keuangan konsolidasian.
- **Kewajiban Pelaporan**:
  - Wajib dilaporkan secara tertulis oleh tim asersi/auditor internal kepada Direksi, Direktur Keuangan, dan Komite Audit Dewan Komisaris.
  - Menuntut penyusunan Rencana Tindak Lanjut (RTL) terstruktur dengan penanggung jawab definitif dan batas waktu penyelesaian yang tegas.

---

## 7. Kelemahan Material (Material Weakness)

### Definisi Konseptual
Suatu defisiensi pengendalian, atau kombinasi dari beberapa defisiensi pengendalian internal, sedemikian rupa sehingga terdapat kemungkinan wajar (*reasonable possibility*) bahwa salah saji material pada laporan keuangan tahunan atau interim korporasi tidak akan dapat dicegah, atau dideteksi dan dikoreksi secara tepat waktu oleh sistem pengendalian internal entitas.

### Batasan dan Konsekuensi Yuridis
- **Tolok Ukur Penilaian**:
  1. Kemungkinan Terjadinya (*Likelihood*): tingkat probabilitas wajar (*reasonably possible*) atau pasti (*probable*).
  2. Besaran Dampak (*Magnitude*): potensi dampak salah saji melampaui ambang batas materialitas perencanaan (*planning materiality*) laporan keuangan entitas BUMN bersangkutan.
- **Indikator Otomatis Kelemahan Material**:
  - Ditemukannya kecurangan (*fraud*) oleh manajemen senior atau personil kunci pengendalian internal, baik bernilai material maupun tidak.
  - Penyajian kembali (*restatement*) laporan keuangan periode sebelumnya untuk mengoreksi salah saji material akibat kekeliruan atau kecurangan.
  - Terdeteksinya salah saji material periode berjalan oleh auditor eksternal/BPK yang luput dari deteksi sistem pengendalian internal internal perusahaan.
  - Pengawasan tata kelola dan pelaporan keuangan yang tidak efektif oleh Komite Audit atau Dewan Komisaris.
- **Konsekuensi Pelaporan Resmi**:
  - Mengakibatkan opini kesimpulan pengendalian internal manajemen menjadi "Tidak Efektif" (*Ineffective ICOFR Assessment*).
  - Wajib diungkapkan secara formal dalam Laporan Tahunan korporasi, dokumen asersi Direksi, dan dilaporkan secara resmi kepada Pemegang Saham Seri A Dwiwarna / Kementerian BUMN.

---

## 8. Compensating Control

### Definisi Konseptual
Pengendalian alternatif atau kompensasi yang dirancang dan dioperasikan untuk memitigasi risiko yang timbul akibat kegagalan, ketiadaan, atau kelemahan pada pengendalian utama (*primary control*), sehingga potensi salah saji material tetap dapat dicegah atau dideteksi.

### Batasan dan Kriteria Keabsahan
- **Syarat Kelayakan**:
  - Beroperasi pada tingkat presisi yang setara atau lebih tinggi dibandingkan pengendalian primer yang digantikannya.
  - Mampu mendeteksi atau mencegah potensi salah saji pada asersi laporan keuangan yang identik secara tepat waktu.
  - Harus diuji efektivitas desainnya (TOD) dan efektivitas operasinya (TOE) secara mandiri; pengendalian kompensasi tidak dapat diasumsikan efektif tanpa bukti pengujian empiris.
- **Contoh Aplikasi**:
  - Ketika terdapat keterbatasan personil pada entitas anak yang menghalangi pemisahan tugas (*Segregation of Duties* / SoD) yang sempurna antara penginput transaksi dan penyetuju pembayaran, maka tinjauan analitis mendalam dan rekonsiliasi rinci bulanan oleh manajemen tingkat yang lebih tinggi (*higher-level supervisory review*) dapat berfungsi sebagai *compensating control*.

---

## 9. Tabel 22 (Panduan Ukuran Sampel TOE Berbasis Frekuensi)

### Definisi Konseptual
Tabel standar resmi yang ditetapkan dalam Lampiran Surat Keputusan Deputi Bidang Keuangan dan Manajemen Risiko Kementerian BUMN Nomor SK-5/DKU.MBU/11/2024 (merujuk pada Bab V Butir 5.2.2 Tabel 22) yang menetapkan ambang batas minimum jumlah sampel pengujian efektivitas operasi (TOE) untuk pengendalian manual berdasarkan frekuensi keterjadian kontrol dalam satu tahun buku.

### Matriks Ukuran Sampel Berdasarkan Frekuensi Kontrol
Sesuai rujukan kanonikal SK-5/DKU.MBU/11/2024:

1. **Tahunan (Annually)**: Frekuensi populasi 1 kali per tahun; ukuran sampel minimum: 1 sampel.
2. **Kuartalan (Quarterly)**: Frekuensi populasi 4 kali per tahun; ukuran sampel minimum: 2 sampel.
3. **Bulanan (Monthly)**: Frekuensi populasi 12 kali per tahun; ukuran sampel minimum: 2 hingga 5 sampel.
4. **Mingguan (Weekly)**: Frekuensi populasi 52 kali per tahun; ukuran sampel minimum: 5 hingga 15 sampel.
5. **Harian (Daily)**: Frekuensi populasi 250 hingga 300 kali per tahun (hari kerja); ukuran sampel minimum: 20 hingga 40 sampel.
6. **Berulang Berkali-kali dalam Sehari (Multiple Times per Day)**: Frekuensi populasi lebih dari 250 transaksi hingga puluhan ribu kali per tahun; ukuran sampel minimum: 25 hingga 60 sampel.
7. **Pengendalian Otomatis Aplikasi (ITAC)**: Jika ITGC telah teruji efektif dan dibuktikan tidak ada perubahan konfigurasi (benchmarking), ukuran sampel pengujian aplikasi: 1 transaksi teruji.

### Prinsip Deviasi Nol (Zero-Tolerance Deviation)
- Seluruh ukuran sampel minimum dalam Tabel 22 didasarkan pada asumsi tingkat deviasi yang dapat diterima adalah nol (*zero tolerable exceptions*).
- Apabila ditemukan 1 deviasi dalam sampel yang diuji, pengendalian dinyatakan gagal beroperasi secara efektif, kecuali jika dilakukan perluasan sampel (*sample expansion*) sesuai metodologi audit yang sah dan terbukti bahwa deviasi tersebut merupakan anomali terisolasi yang tidak sistemik.

---

## Ketentuan Tata Kelola Dokumen
- Dokumen ini merupakan acuan istilah kanonikal untuk tim fungsional tata kelola, konsultan implementasi ICOFR, dan pimpinan unit kepatuhan.
- Perubahan batasan konseptual hanya dapat dilakukan melalui kajian penyesuaian regulasi Kementerian BUMN atau amandemen standar pengendalian internal nasional (SPKN/COSO).
