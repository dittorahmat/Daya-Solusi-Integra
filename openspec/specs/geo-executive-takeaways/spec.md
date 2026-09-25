# geo-executive-takeaways Specification

## Purpose
Menyediakan blok visual ringkasan eksekutif dan poin fakta regulasi kunci di awal setiap artikel blog guna memfasilitasi kutipan langsung (direct quotation) oleh mesin pencari AI dan memberikan gambaran cepat bagi pembaca eksekutif BUMN.

## Requirements

### Requirement: Tampilan Blok Ringkasan Eksekutif Artikel
Sistem SHALL menampilkan blok ringkasan eksekutif berlabel tegas di bawah gambar utama artikel dan di atas daftar isi, menyajikan intisari artikel dan matriks ringkas fakta kepatuhan regulasi.

#### Scenario: Pembaca atau crawler AI mengakses artikel blog
- **WHEN** halaman detail artikel dibuka pada rute `/blog/:slug`
- **THEN** sistem menampilkan kontainer visual solid bertajuk "Ringkasan Eksekutif & Jawaban Kunci" yang memuat teks kutipan ringkas dan 3 pilar klasifikasi (Fokus Regulasi, Sasaran Pemangku Kepentingan, dan Kesiapan Audit) tanpa tanda em-dash (— atau –).
