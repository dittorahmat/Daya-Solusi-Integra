## Purpose

Menyediakan halaman profil penulis mandiri terverifikasi untuk memperkuat E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) serta menghubungkan entitas Humbul Kristiawan dengan seluruh publikasi artikel dan kepakaran GRC.

## ADDED Requirements

### Requirement: Halaman Publik Profil Penulis Mandiri
Sistem SHALL menyediakan rute publik `/penulis/humbul-kristiawan` yang menampilkan profil kepakaran, riwayat profesional, sertifikasi, dan daftar artikel yang ditulis oleh Humbul Kristiawan.

#### Scenario: Pengguna mengakses rute profil penulis
- **WHEN** pengguna atau crawler mengunjungi URL `https://dsintegra.co.id/penulis/humbul-kristiawan`
- **THEN** sistem merender halaman profil lengkap dengan foto avatar lokal, badge gelar sertifikasi (CA, CIA, CICA, GRCP), ikhtisar pengalaman eksekutif, dan tautan ke seluruh artikel yang relevan

### Requirement: Structured Data ProfilePage & Person
Halaman profil penulis SHALL memuat data terstruktur Schema.org JSON-LD bertipe `@type: ProfilePage` dengan entitas utama bertipe `Person` yang memuat kredensial, afiliasi organisasi, dan tautan identitas eksternal (`sameAs`).

#### Scenario: Search engine crawler memproses halaman profil penulis
- **WHEN** crawler mengekstrak JSON-LD pada halaman `/penulis/humbul-kristiawan`
- **THEN** sistem menyajikan skema ProfilePage dengan mainEntity Person bernama "Humbul Kristiawan", memiliki jobTitle "Principal Founder & Managing Director", alumni, sertifikasi, dan sameAs LinkedIn serta URL resmi perusahaan

### Requirement: Sinkronisasi Internal Byline Artikel
Komponen halaman blog (`BlogPage.tsx`) SHALL menautkan byline nama penulis ke rute resmi `/penulis/humbul-kristiawan`.

#### Scenario: Pengunjung mengklik nama penulis pada artikel blog
- **WHEN** pengunjung mengklik tautan atau kartu biografi penulis di halaman artikel
- **THEN** sistem menavigasikan pengunjung ke halaman `/penulis/humbul-kristiawan`
