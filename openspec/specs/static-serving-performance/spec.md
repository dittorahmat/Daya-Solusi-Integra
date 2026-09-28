# static-serving-performance Specification

## Purpose
Mempercepat pengiriman aset statis produksi melalui kompresi dan cache jangka panjang agar Largest Contentful Paint membaik dan crawl budget mesin pencari tidak terbuang untuk download ulang yang tidak perlu.

## Requirements

### Requirement: Compression and Immutable Static Cache
Sistem SHALL mengompresi respons HTTP produksi (Brotli/Gzip) dan mengirim header `Cache-Control: public, max-age=31536000, immutable` untuk file di bawah `/assets/*` yang memiliki hash konten pada namanya, tanpa mengubah perilaku rate-limit atau endpoint `/api/*`.

#### Scenario: Aset hashed di-cache immutable
- **WHEN** klien meminta `/assets/index-<hash>.js` di produksi
- **THEN** respons menyertakan `Content-Encoding` kompresi dan `Cache-Control` immutable dengan max-age satu tahun.

#### Scenario: HTML dan API tidak di-cache agresif
- **WHEN** klien meminta dokumen HTML rute atau endpoint `/api/*`
- **THEN** respons TIDAK memakai header immutable satu tahun tersebut dan rate-limit tetap berlaku.
