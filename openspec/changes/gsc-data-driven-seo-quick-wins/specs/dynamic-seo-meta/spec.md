# Spec Delta

## ADDED Requirements

### Requirement: Optimasi Snippet SERP dan Header Key Takeaways Berbasis Kueri GSC
Sistem SHALL menyediakan metadata judul (`title`), deskripsi (`metaDescription`), dan blok ringkasan eksekutif (*Key Takeaways*) pada artikel pilar bertrafik tinggi untuk mengoptimalkan Click-Through Rate (CTR) terhadap kueri aktual Google Search Console.

#### Scenario: Pemuatan metadata artikel pilar panduan SK-5
- **WHEN** crawler atau browser memuat `/blog/panduan-sk5-icofr-grc-integra`
- **THEN** judul dan meta description menargetkan kata kunci `SK5 ICOFR` dan kepatuhan audit BUMN secara presisi, serta memuat ringkasan eksekutif di awal artikel.

#### Scenario: Pemuatan metadata artikel RCM Siklus Pengadaan
- **WHEN** crawler atau browser memuat `/blog/contoh-rcm-siklus-pengadaan-bumn-tod-toe`
- **THEN** judul dan meta description menonjolkan ketersediaan format matriks risiko dan pengujian TOD TOE guna memicu klik pencarian berniat praktis.
