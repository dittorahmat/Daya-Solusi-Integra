# clean-url-ssg-serving Specification

## Purpose
Menyajikan berkas HTML statis prerender dari folder `dist/` untuk setiap rute yang cocok secara langsung tanpa memicu pengalihan (redirect) direktori otomatis dari Express static.

## Requirements

### Requirement 1: Prerender Static File Direct Serving
- Server harus memeriksa apakah terdapat berkas HTML prerender yang valid pada path `dist/<cleanPath>/index.html` (di mana `<cleanPath>` adalah jalur permintaan GET tanpa trailing slash).
- Jika berkas tersebut ada, server harus langsung mengirimkannya kepada klien dengan status 200 OK (`res.sendFile(candidateFile)`) tanpa mendelegasikan ke `express.static` yang memicu redirect direktori 301.

### Requirement 2: Strict Canonical Trailing Slash Enforcement
- Jika permintaan GET yang masuk memiliki panjang lebih dari 1 dan berakhiran tanda garis miring `/` (misalnya `/glosarium/elc/`), server harus mengalihkan secara permanen (301) ke URL tanpa garis miring (`/glosarium/elc`).
- Pengalihan ini tidak boleh memicu siklus berulang (loop) karena URL tanpa garis miring akan langsung ditangani oleh Requirement 1.

### Requirement 3: SPA Fallback
- Jika permintaan tidak cocok dengan berkas statis atau berkas prerender spesifik rute, server harus menyajikan `dist/index.html` sebagai fallback untuk ditangani oleh klien React.
