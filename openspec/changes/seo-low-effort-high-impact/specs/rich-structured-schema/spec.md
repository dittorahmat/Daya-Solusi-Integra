# Spec Delta

## ADDED Requirements

### Requirement: Rating Claims Require Verifiable Reviews
Sistem SHALL HANYA menyertakan klaim `aggregateRating` pada JSON-LD bila didukung array `review` terverifikasi atau sumber rating yang dapat diaudit; bila tidak ada bukti tersebut, sistem SHALL menghapus blok `aggregateRating` dari markup.

#### Scenario: Tanpa bukti review maka tanpa klaim rating
- **WHEN** Rich Results Test membaca JSON-LD homepage tanpa data review terverifikasi
- **THEN** tidak ada properti `aggregateRating` pada output, dan validasi tidak melaporkan peringatan spammy structured markup untuk rating.

#### Scenario: Dengan bukti review maka klaim lengkap
- **WHEN** tersedia minimal satu ulasan terverifikasi dengan `author`, `reviewRating`, dan `datePublished`
- **THEN** `aggregateRating` boleh tampil bersama array `review` pendamping yang konsisten (`ratingCount` cocok dengan jumlah bukti yang dapat diaudit).
