## MODIFIED Requirements

### Requirement: Pengaturan Robots.txt untuk AI Crawlers
Sistem SHALL mengonfigurasi `robots.txt` agar mendeklarasikan lokasi file peta sitemap dan panduan AI `https://dsintegra.co.id/llms.txt`, serta secara eksplisit memberikan izin penjelajahan (Allow) kepada bot AI utama mencakup GPTBot, PerplexityBot, ClaudeBot, Applebot-Extended, dan Google-Extended.

#### Scenario: Validasi perizinan robots.txt
- **WHEN** bot AI membaca `https://dsintegra.co.id/robots.txt`
- **THEN** bot menemukan baris rujukan `llms.txt` dan tidak terblokir oleh aturan `Disallow`.
