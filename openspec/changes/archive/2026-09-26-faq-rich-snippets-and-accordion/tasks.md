## 1. Data Layer & Content Formulation

- [x] 1.1 Buat modul data `src/data/faqData.ts` yang mendefinisikan tipe `FaqItem` dan pemetaan `ROUTE_FAQS` untuk rute `/layanan/icofr-bumn`, `/kalkulator-sampel-toe`, dan `/platform/grc-integra` dengan bahasa regulasi presisi tanpa tanda em-dash (— atau –), lalu verifikasi file dapat diimpor tanpa kesalahan tipe.

## 2. Frontend UI Component & Integration

- [x] 2.1 Buat komponen visual `src/components/FaqSection.tsx` dengan container slate arsitektural solid (`bg-slate-900/60`, `border-slate-800`), interaktivitas accordion responsif, dan atribut aksesibilitas WAI-ARIA (`aria-expanded`), lalu verifikasi tidak ada pelanggaran `design-taste-frontend`.
- [x] 2.2 Pasang komponen `FaqSection` pada `src/components/pages/IcofrBumnPage.tsx` sebelum blok CTA penutup dan verifikasi rendering halaman.
- [x] 2.3 Pasang komponen `FaqSection` pada `src/components/pages/ToeCalculatorPage.tsx` di bawah kalkulator sampling dan verifikasi rendering halaman.
- [x] 2.4 Pasang komponen `FaqSection` pada `src/components/pages/PlatformProductPage.tsx` di atas blok form konsultasi dan verifikasi rendering halaman.

## 3. SEO Schema Prerender & Quality Verification

- [x] 3.1 Perbarui generator rute statis `scripts/generate-static-routes.ts` untuk menyuntikkan skema Schema.org `@type: "FAQPage"` lengkap dengan entitas `Question` dan `acceptedAnswer` ke dalam `@graph` rute yang memiliki FAQ, lalu verifikasi keluaran skema.
- [x] 3.2 Lakukan verifikasi menyeluruh: jalankan pemindaian anti-slop (`Select-String -Path "src\**\*.tsx", "src\**\*.ts" -Pattern "Sparkles|animate-pulse|—|–"`), jalankan `npm run lint` (`tsc --noEmit`), dan `npm run build` untuk memverifikasi file HTML statis di folder `dist/` berhasil dibuat dengan skema `FAQPage` valid.
