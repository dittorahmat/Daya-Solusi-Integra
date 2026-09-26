## Purpose

Menyediakan mekanisme pengalihan HTTP 301 Permanent Redirect di sisi server untuk setiap permintaan URL dengan trailing slash guna menyatukan otoritas indeks kanonikal, serta menyediakan pengiriman otomatis daftar URL ke protokol IndexNow saat build untuk akselerasi pengindeksan instan.

## ADDED Requirements

### Requirement: Server-Side 301 Trailing Slash Redirect
Server HTTP Express SHALL mengalihkan seluruh permintaan GET yang memiliki garis miring penutup (*trailing slash*) menuju URL kanonikal tanpa garis miring dengan status HTTP 301 (Moved Permanently).

#### Scenario: Request halaman dengan trailing slash
- **WHEN** klien atau bot perayap mengirimkan HTTP GET ke `/blog/manfaat-aplikasi-icofr-bumn-spreadsheet/`
- **THEN** server merespons dengan status 301 dan header `Location: /blog/manfaat-aplikasi-icofr-bumn-spreadsheet`

#### Scenario: Request root homepage
- **WHEN** klien mengirimkan HTTP GET ke `/`
- **THEN** server melayani beranda secara normal dan tidak melakukan perulangan pengalihan (*no redirect loop*)

#### Scenario: Request dengan query string
- **WHEN** klien mengirimkan HTTP GET ke `/blog/panduan-sk5-icofr-grc-integra/?ref=google`
- **THEN** server merespons dengan status 301 menuju `/blog/panduan-sk5-icofr-grc-integra?ref=google`

### Requirement: Automated IndexNow Submission
Pipeline build SHALL mengumpulkan seluruh URL rute kanonikal dan mengirimkannya ke endpoint protokol IndexNow secara otomatis.

#### Scenario: Eksekusi pengiriman IndexNow saat build
- **WHEN** skrip build `generate-static-routes.ts` selesai membangun file statis
- **THEN** sistem menyusun payload JSON yang memuat host `dsintegra.co.id`, kunci verifikasi token, dan daftar URL, lalu mengirimkannya via HTTP POST ke `https://api.indexnow.org/indexnow`
