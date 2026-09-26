# blog-itemlist-schema Specification

## Purpose
Menyediakan skema terstruktur Schema.org/ItemList pada berkas snapshot statis halaman katalog blog guna memperjelas hierarki dan urutan publikasi artikel bagi mesin pencari Google.

## Requirements

### Requirement: ItemList Schema on Blog Catalog
Sistem HARUS menginjeksi objek JSON-LD bertipe `ItemList` ke dalam halaman katalog `/blog` yang merangkum daftar seluruh artikel blog beserta nomor posisinya dan tautan kanonikal masing-masing.

#### Scenario: ItemList Injection on Prerendered Catalog
- **WHEN** skrip pembangun snapshot statis memproses rute `/blog`
- **THEN** berkas `dist/blog/index.html` memuat elemen skema `@type: "ItemList"` dengan `itemListElement` yang merinci seluruh artikel wawasan.
