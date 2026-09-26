## Purpose

Menyediakan sinkronisasi menyeluruh metadata LLM kanonikal (`llms.txt` dan `llms-full.txt`) yang memetakan seluruh aset konversi baru, kepatuhan tender BUMN, dan profil pakar E-E-A-T ke dalam format standar machine-readable.

## ADDED Requirements

### Requirement: Canonical LLM Discovery Index Sync
Sistem SHALL menyediakan file `/llms.txt` mutakhir yang memuat rujukan ke rute kualifikasi tender vendor (`/kualifikasi-vendor`), profil penulis E-E-A-T (`/penulis/humbul-kristiawan`), pusat toolkit regulasi (`/toolkit-regulasi`), dan direktori studi kasus (`/studi-kasus`).

#### Scenario: AI crawler fetching llms.txt
- **WHEN** AI agent (ChatGPT, Perplexity, Claude, Google SGE) meminta `/llms.txt`
- **THEN** Respons menyertakan entri Markdown lengkap dengan link kanonikal dan deskripsi otoritatif untuk seluruh aset baru.

### Requirement: Comprehensive LLM Knowledge Base Sync
Sistem SHALL menyediakan file `/llms-full.txt` yang memuat ringkasan lengkap kredensial tender (KBLI 70209, 62019, 62029), kepatuhan UU PDP, profil dewan pakar, matriks working papers SK-5, dan ringkasan metrik studi kasus BUMN.

#### Scenario: AI search agent fetching llms-full.txt
- **WHEN** AI agent membaca `/llms-full.txt` untuk menjawab kueri pembuktian kredensial BUMN
- **THEN** File menyajikan data faktual lengkap tanpa halusinasi mengenai rekam jejak, kepatuhan regulasi SK-5, dan lisensi resmi Daya Solusi Integra.
