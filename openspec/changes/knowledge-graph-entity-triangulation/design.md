## Context

Lihat `proposal.md - Why` dan `specs/knowledge-graph-entities/spec.md`.
Skema terstruktur situs berada di file `index.html` (JSON-LD template utama) dan disalin ke 39 rute statis oleh `scripts/generate-static-routes.ts`.

## Goals / Non-Goals

**Goals:**
- Mengubah array `knowsAbout` di skema `ProfessionalService` ([index.html](file:///C:/backup/Daya-Solusi-Integra/index.html)) dari array of string menjadi array of schema objects (`@type: Thing`) yang memiliki tautan resmi Wikidata & Wikipedia bahasa Indonesia dan Inggris.
- Menambahkan relasi kepemimpinan `founder` / `employee` di node `ProfessionalService` yang menautkan profil Pak Humbul Kristiawan.
- Memastikan struktur JSON-LD yang dihasilkan valid dan lolos verifikasi Schema.org tanpa syntax error.
- Memperbarui skrip prerender `scripts/generate-static-routes.ts` jika relevan.

**Non-Goals:**
- Mengubah arsitektur rendering halaman frontend atau style visual.

## Decisions

### 1. Format Pemetaan Entitas Semantik `knowsAbout`
- Gunakan struktur standar Schema.org `Thing`:
```json
{
  "@type": "Thing",
  "name": "Kementerian Badan Usaha Milik Negara Republik Indonesia",
  "alternateName": "Kementerian BUMN",
  "sameAs": [
    "https://id.wikipedia.org/wiki/Kementerian_Badan_Usaha_Milik_Negara_Republik_Indonesia",
    "https://www.wikidata.org/wiki/Q4262194"
  ]
}
```
- Menargetkan 8 entitas kunci:
  1. Kementerian BUMN RI (Q4262194)
  2. BPKP RI (Q4924765)
  3. BPK RI (Q1029285)
  4. Otoritas Jasa Keuangan (Q7114251)
  5. Committee of Sponsoring Organizations of the Treadway Commission / COSO (Q2989392)
  6. Internal Control over Financial Reporting / ICOFR (Q796683)
  7. Sarbanes-Oxley Act (Q244439)
  8. ISO 31000 Risk Management (Q1654923)

### 2. Tautan Relasi Pakar di Skema Organisasi
- Menambahkan properti `founder` dan `employee` pada entitas `ProfessionalService`:
```json
"founder": {
  "@type": "Person",
  "@id": "https://dsintegra.co.id/#author-humbul-kristiawan",
  "name": "Humbul Kristiawan, SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP",
  "jobTitle": "Principal Partner & Senior GRC Advisor",
  "url": "https://humbulkristiawan.com/about-humbul/",
  "sameAs": [
    "https://www.linkedin.com/in/humbul-kristiawan-b0621360/",
    "https://humbulkristiawan.com/"
  ]
}
```

## Risks / Trade-offs

- **[Risk]** Ukuran payload `index.html` sedikit bertambah karena detail metadata objek entitas.
  - **Mitigasi:** Tambahan payload hanya sekitar ~1.5 KB yang terkompresi gzip dengan sangat efisien (< 300 bytes), jauh di bawah batas penalti Core Web Vitals, sementara keuntungan semantik SEO-nya masif.
