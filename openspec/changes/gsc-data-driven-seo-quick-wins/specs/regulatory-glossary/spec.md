# Spec Delta

## ADDED Requirements

### Requirement: Commercial Solution Bridge Callout pada Halaman Detail Glosarium
Sistem SHALL menyediakan kartu jembatan komersial kontekstual (*Commercial Solution Bridge*) pada halaman istilah glosarium yang memiliki volume pencarian tinggi di Google Search Console, yang menghubungkan definisi teori dengan kapabilitas platform software (`/platform/grc-integra`) atau jasa konsultansi (`/layanan/icofr-bumn`, `/layanan/itgc-audit-readiness`).

#### Scenario: Menampilkan Solution Bridge pada Glosarium SOD
- **WHEN** pengguna membuka halaman glosarium `/glosarium/sod`
- **THEN** sistem merender kartu solusi kontekstual yang mengarahkan pembaca ke solusi otomatisasi matriks SOD pada platform GRC Integra dan asesmen ITGC.

#### Scenario: Menampilkan Solution Bridge pada Glosarium ELC dan Compensating Control
- **WHEN** pengguna membuka halaman glosarium `/glosarium/elc` atau `/glosarium/compensating-control`
- **THEN** sistem merender kartu solusi kontekstual dengan tautan internal menuju pendampingan evaluasi ELC BUMN dan panduan remediasi defisiensi kontrol.
