## ADDED Requirements

### Requirement: Entri Gambar pada Sitemap
Setiap URL artikel blog pada `sitemap.xml` SHALL menyertakan entri `image:image` berisi `image:loc` dari `coverImage` front-matter markdown dan `image:title` dari judul artikel, memakai namespace `xmlns:image` yang valid.

#### Scenario: Crawler gambar memindai sitemap
- **WHEN** Googlebot-Image atau validator sitemap membaca `sitemap.xml`
- **THEN** setiap URL `/blog/<slug>` memuat anak `image:image` yang menunjuk ke cover image artikel tersebut dan sitemap lolos validasi skema.
