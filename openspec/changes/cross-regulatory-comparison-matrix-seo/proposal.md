## Why

Para direksi, dewan komisaris, komite audit, dan tim SPI di BUMN maupun anak perusahaannya kerap menghadapi kebingungan yurisdiksi kepatuhan: regulasi mana yang berlaku untuk entitas mereka (SK-5 BUMN, Permen PER-2/2023, POJK 17/2023, atau Standar Pemeriksaan SPKN BPK RI), serta bagaimana perbedaan detail dalam hal kewajiban asersi direksi, pengujian Lini 2, dan sanksi audit.

Di sisi SEO, query perbandingan lintas regulasi (*"perbedaan sk-5 bumn dan pojk 17"*, *"kewajiban asersi direksi permen per 2 vs sk 5"*, *"matriks regulasi pengendalian internal bumn"*) memiliki intent pencarian kepatuhan yang sangat tinggi dan merupakan pemicu utama **Google Featured Snippets (Direct Table Answer)**. Dengan menambahkan komponen Matriks Komparasi Regulasi Interaktif pada repositori regulasi (`/regulasi`), situs web dapat merebut peringkat posisi nol di Google sekaligus memberikan kejelasan hukum instan bagi audiens eksekutif.

## What Changes

- Menambahkan struktur data komparasi lintas regulator pada dataset regulasi (`src/data/regulationData.ts`): memetakan dimensi regulasi (Penerbit, Subjek Entitas Wajib, Landasan Framework, Kewajiban Asersi Direksi, Frekuensi & Metode Pengujian, Implikasi & Sanksi Kepatuhan).
- Mengintegrasikan komponen antarmuka **Tabel Matriks Komparasi Regulasi Lintas Lembaga** di halaman `RegulatoryHubPage.tsx`:
  - Desain arsitektural B2B dark canvas yang responsif dengan scrolling horizontal mulus pada layar mobile/tablet.
  - Mematuhi aturan `design-taste-frontend` (zero em-dash, BUMN Blue & Gold tone, kanvas `#0f172a`, hierarki tipografi tegas).
  - Dilengkapi filter komparasi cepat (Semua Regulasi, Khusus Holding BUMN, Sektor Finansial/Perbankan, Standar Audit Eksternal).
- Menginjeksi structured data Schema.org `Table` / `Dataset` atau tabel semantik HTML pada snapshot SSR/SSG untuk mengunci Google Featured Snippet.

## Capabilities

### New Capabilities
- `regulatory-comparison-matrix`: Penyediaan data matriks komparasi regulasi dan komponen tabel interaktif responsif pada repositori regulasi `/regulasi`.

### Modified Capabilities

## Impact

- `src/data/regulationData.ts`: Penambahan dataset komparasi matriks lintas regulasi.
- `src/components/pages/RegulatoryHubPage.tsx`: Integrasi komponen visual tabel matriks komparasi.
- SEO & Featured Snippet: Memicu snippet tabel komparasi di SERP Google untuk kata kunci komparatif kepatuhan BUMN.
