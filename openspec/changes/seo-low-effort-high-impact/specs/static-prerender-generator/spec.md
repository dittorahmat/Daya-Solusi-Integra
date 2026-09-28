# Spec Delta

## MODIFIED Requirements

### Requirement: Integritas Struktur Skema dan Konten Statis
Setiap berkas HTML hasil generasi rute SHALL mempertahankan script bundle JS aplikasi sehingga browser pengguna tetap dapat melakukan hidrasi interaktif normal, dan setiap internal link yang dirender ke snapshot statis SHALL menunjuk ke rute atau slug yang ada (tidak ada link internal yang mengarah ke 404 yang diketahui saat build).

#### Scenario: Pemuatan halaman statis oleh pengguna
- **WHEN** pengguna mengakses URL subhalaman hasil generasi statis langsung melalui web server
- **THEN** halaman dimuat secara instan dan aplikasi React melakukan hidrasi tanpa error console.

#### Scenario: Snapshot blog bebas broken internal link
- **WHEN** generator prerender membangun snapshot `/blog` dan artikel
- **THEN** seluruh href internal `/blog/<slug>` cocok dengan slug aktual di `src/content/blog/` (6/6 valid), dan build gagal atau mencetak peringatan eksplisit bila ada slug yang tidak cocok.
