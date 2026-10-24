# Spec Delta

## MODIFIED Requirements

### Requirement: Dokumentasi Komprehensif llms-full.txt
Sistem SHALL menyediakan file `/llms-full.txt` yang memuat dokumentasi rinci 5 tahapan siklus hidup ICOFR BUMN, matriks sampel Tabel 22, taksonomi evaluasi defisiensi kontrol, serta glosarium istilah otoritatif (Compensating Control, Control Deficiency, Entity Level Control) untuk sitasi mendalam oleh model bahasa besar (LLM).

#### Scenario: Penelusuran dokumentasi mendalam AI
- **WHEN** LLM agent memerlukan konteks lengkap tentang tata kelola ICOFR BUMN melalui `/llms-full.txt`
- **THEN** sistem menyajikan konten tekstual lengkap dengan kutipan regulasi, glosarium istilah kunci, dan metodologi pengujian pengendalian internal tanpa karakter em-dash.
