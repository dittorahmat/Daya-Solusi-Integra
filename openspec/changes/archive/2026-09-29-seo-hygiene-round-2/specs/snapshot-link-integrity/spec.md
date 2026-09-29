# Spec Delta

## Purpose

Menjamin tidak ada tautan internal mati pada HTML yang disajikan ke crawler dengan memvalidasi seluruh href internal snapshot prerender saat build.

## ADDED Requirements

### Requirement: All Internal Snapshot Links Resolve
Sistem SHALL memvalidasi setiap `href="/..."` pada seluruh `dist/**/index.html` saat build dan menggagalkan build (exitCode=1) bila target tidak resolve ke berkas atau direktori snapshot yang ada (setelah mengabaikan query string dan hash anchor).

#### Scenario: Link kalkulator valid
- **WHEN** `npm run build` dijalankan
- **THEN** tidak ada href ke `/kalkulator-toe` atau `/kalkulator-tabel-22` yang tersisa, dan guard melaporkan 0 broken internal link.

#### Scenario: Aset dan anchor dilewati dengan benar
- **WHEN** guard memindai href seperti `/assets/*.js`, `/images/*`, `/#contact`, atau `/media-kit#statistik-kinerja`
- **THEN** href tersebut dinilai valid tanpa memerlukan entri rute (file statis ada / anchor sehalaman).
