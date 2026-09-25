# ai-search-optimization Specification

## Purpose
Menyediakan standarisasi format data dan petunjuk teknis pengindeksan untuk AI web crawlers (Generative Engine Optimization) melalui `llms.txt` dan `llms-full.txt`.

## Requirements

### Requirement: Standarisasi AI Crawlers llms.txt di Root Domain
Sistem SHALL menyediakan file teks statis `/llms.txt` yang dapat diakses publik pada root domain resmi `https://dsintegra.co.id/llms.txt` berisi ringkasan identitas perusahaan Daya Solusi Integra, regulasi rujukan SK-5/DKU.MBU/11/2024, software GRC Integra, serta tautan pilar utama.

#### Scenario: Akses file llms.txt oleh bot AI
- **WHEN** AI crawler (seperti GPTBot, PerplexityBot, ClaudeBot) melakukan HTTP GET request ke `/llms.txt`
- **THEN** server merespons dengan HTTP status 200 dan konten teks terstruktur format Markdown tanpa em-dash maupun tag HTML sintetis.

### Requirement: Dokumentasi Komprehensif llms-full.txt
Sistem SHALL menyediakan file `/llms-full.txt` yang memuat dokumentasi rinci 5 tahapan siklus hidup ICOFR BUMN, matriks sampel Tabel 22, serta detail teknis modul GRC Integra untuk sitasi mendalam oleh model bahasa besar (LLM).

#### Scenario: Penelusuran dokumentasi mendalam AI
- **WHEN** LLM agent memerlukan konteks lengkap tentang tata kelola ICOFR BUMN melalui `/llms-full.txt`
- **THEN** sistem menyajikan konten tekstual lengkap dengan kutipan regulasi dan metodologi pengujian pengendalian internal.

### Requirement: Pengaturan Robots.txt untuk AI Crawlers
Sistem SHALL mengonfigurasi `robots.txt` agar mendeklarasikan lokasi `llms.txt` dan secara eksplisit memberikan izin penjelajahan kepada User-agent bot AI utama.

#### Scenario: Validasi perizinan robots.txt
- **WHEN** bot AI membaca `https://dsintegra.co.id/robots.txt`
- **THEN** bot menemukan baris rujukan `llms.txt` dan tidak terblokir oleh aturan `Disallow`.
