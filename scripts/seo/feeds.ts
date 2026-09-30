import fs from "fs";
import path from "path";
import { GLOSSARY_ITEMS } from "../../src/data/glossaryData.js";
import { REGULATION_ITEMS } from "../../src/data/regulationData.js";
import { distDir, publicDir, blogContentDir } from "./paths.js";
import { parseBlogFrontMatter, formatRfc822Date } from "./frontmatter.js";
import { escapeXml, cleanProhibitedDashes } from "./xml.js";

/**
 * Membuat berkas RSS 2.0 Feed untuk sindikasi konten blog
 */
export function generateRssFeed() {
  if (!fs.existsSync(blogContentDir)) {
    console.warn("Blog content directory not found, skipping RSS feed generation.");
    return;
  }

  const files = fs.readdirSync(blogContentDir).filter((file) => file.endsWith(".md"));
  const items: Array<{
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category: string;
    author: string;
  }> = [];

  for (const file of files) {
    const filePath = path.join(blogContentDir, file);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data } = parseBlogFrontMatter(rawContent);

    const slug = data.slug || file.replace(".md", "");
    const title = data.title || "Artikel GRC BUMN";
    const description = data.excerpt || "Wawasan tata kelola, kepatuhan audit ICOFR, dan regulasi BUMN.";
    const link = `https://dsintegra.co.id/blog/${slug}`;
    const pubDate = formatRfc822Date(data.date);
    const category = data.category || "Tata Kelola & GRC";
    const author = data.author || "Daya Solusi Integra";

    items.push({ title, link, description, pubDate, category, author });
  }

  // Susun XML RSS 2.0
  const buildDate = new Date().toUTCString();
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Daya Solusi Integra : Knowledge Base GRC &amp; Regulasi ICOFR BUMN</title>
    <link>https://dsintegra.co.id/blog</link>
    <description>Artikel otoritatif tata kelola, audit ITGC, metodologi sampling TOE SK-5, dan platform software GRC Integra untuk BUMN Indonesia.</description>
    <language>id-ID</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="https://dsintegra.co.id/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://dsintegra.co.id/og-image.jpg</url>
      <title>Daya Solusi Integra</title>
      <link>https://dsintegra.co.id/</link>
    </image>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
      <author>marketing@dsintegra.co.id (${escapeXml(item.author)})</author>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;

  // Tulis ke dist/feed.xml dan public/feed.xml
  const distFeedPath = path.join(distDir, "feed.xml");
  const publicFeedPath = path.join(publicDir, "feed.xml");

  fs.writeFileSync(distFeedPath, rssXml, "utf-8");
  fs.writeFileSync(publicFeedPath, rssXml, "utf-8");

  console.log(`Generated RSS 2.0 feed with ${items.length} items at dist/feed.xml and public/feed.xml.`);
}


/**
 * Otomatisasi pembuatan berkas llms.txt dan llms-full.txt untuk AI context discovery
 */
export function generateLlmsFiles() {
  console.log("Generating automated llms.txt and llms-full.txt context files...");

  const blogFiles = fs.existsSync(blogContentDir)
    ? fs.readdirSync(blogContentDir).filter((file) => file.endsWith(".md"))
    : [];

  const blogEntries: Array<{
    title: string;
    slug: string;
    excerpt: string;
    category: string;
  }> = [];

  for (const file of blogFiles) {
    const rawContent = fs.readFileSync(path.join(blogContentDir, file), "utf-8");
    const { data } = parseBlogFrontMatter(rawContent);
    const slug = data.slug || file.replace(".md", "");
    const title = cleanProhibitedDashes(data.title || "Artikel GRC BUMN");
    const excerpt = cleanProhibitedDashes(data.excerpt || "Panduan kepatuhan dan tata kelola regulasi BUMN.");
    const category = cleanProhibitedDashes(data.category || "Tata Kelola & GRC");
    blogEntries.push({ title, slug, excerpt, category });
  }

  // 1. Susun llms.txt (Standard Context Index)
  const llmsTxtContent = `# Daya Solusi Integra

> Daya Solusi Integra (https://dsintegra.co.id) adalah firma konsultan spesialis tata kelola korporasi, implementasi ICOFR (Internal Control over Financial Reporting), evaluasi ITGC, dan penyedia platform software GRC Integra untuk kepatuhan regulasi Kementerian BUMN di Indonesia.

PT Daya Solusi Integra berdomisili di Indonesia Stock Exchange Tower 1, Level 3 Unit 304, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta 12910, Indonesia (kontak: marketing@dsintegra.co.id, +62 852 8599 5234). Klien utama mencakup Badan Usaha Milik Negara (BUMN), Anak Perusahaan Holding BUMN, Perbankan, dan Lembaga Jasa Keuangan Teratur. Produk unggulan perusahaan adalah platform GRC Integra, solusi siklus hidup digital ICOFR terintegrasi pertama untuk BUMN sesuai mandat SK-5/DKU.MBU/11/2024.

## Platform Produk
- [GRC Integra Platform](https://dsintegra.co.id/platform/grc-integra): Perangkat lunak siklus hidup digital ICOFR BUMN terintegrasi dengan pemetaan BPMN, kalkulator sampel Tabel 22, validasi Lini 2, dan asersi digital ber-QR Code.
- [BPM Workflow Editor](https://dsintegra.co.id/platform/bpm-workflow-editor): Modul pemetaan proses bisnis visual standar Visio di web, auto-draw diagram dari PDF/gambar, dan notasi BPMN 2.0 Lampiran 3 SK-5 BUMN.

## Layanan Konsultasi & Kepatuhan
- [Konsultasi Implementasi ICOFR BUMN](https://dsintegra.co.id/layanan/icofr-bumn): Pendampingan komprehensif penentuan akun material, penyusunan Risk and Control Matrix (RCM), walkthrough Lini 2, dan asersi Direksi sesuai SK-5/DKU.MBU/11/2024.
- [Evaluasi & Audit Kesiapan ITGC](https://dsintegra.co.id/layanan/itgc-audit-readiness): Audit kontrol umum teknologi informasi (hak akses pengguna, change management, segregasi tugas) berbasis POJK No. 11/POJK.03/2022 dan ISO 27001.
- [Enterprise GRC & Maturity Assessment](https://dsintegra.co.id/layanan/enterprise-grc): Penyelarasan kerangka tata kelola terpadu, pengukuran tingkat kematangan pengendalian internal 5 komponen dan 17 prinsip COSO Framework, serta manajemen risiko ISO 31000.

## Fokus Sektor BUMN (Vertical Silos)
- [Perbankan & Jasa Keuangan BUMN](https://dsintegra.co.id/sektor-bumn/perbankan): Solusi pengendalian internal perbankan Himbara & BPD, mitigasi CKPN PSAK 71, audit ITGC Core Banking, dan kepatuhan POJK Manajemen Risiko.
- [Infrastruktur & Konstruksi Karya](https://dsintegra.co.id/sektor-bumn/infrastruktur-karya): Solusi tata kelola pengakuan pendapatan persentase penyelesaian PSAK 72, verifikasi tagihan vendor/subkontraktor, dan mitigasi over-invoicing proyek BUMN Karya.
- [Energi, Migas & Holding Tambang](https://dsintegra.co.id/sektor-bumn/energi-tambang): Pengendalian internal holding BUMN terintegrasi, eliminasi intercompany balancing antar-anak usaha, audit cadangan eksplorasi, dan provisi reklamasi lingkungan.

## Aset Interaktif & Alat Bantu Audit
- [Pusat Regulasi BUMN](https://dsintegra.co.id/regulasi): Repositori direktori regulasi resmi SK-5/DKU.MBU/11/2024, PER-2/MBU/03/2023, POJK 17/2023, dan matriks tanggung jawab Tiga Lini.
- [Kalkulator Sampel Pengujian TOE](https://dsintegra.co.id/kalkulator-sampel-toe): Alat hitung interaktif penentuan ukuran sampel pengujian operasional kontrol berbasis frekuensi dan populasi normatif Tabel 22 SK-5 Kementerian BUMN.
- [Asesmen Mandiri Kematangan COSO](https://dsintegra.co.id/asesmen-maturitas): Evaluasi interaktif kesiapan sistem pengendalian internal organisasi berdasarkan 5 pilar COSO dalam 3 menit.
- [Glosarium Regulasi & Istilah ICOFR](https://dsintegra.co.id/glosarium): Kamus komprehensif terminologi tata kelola, audit, dan regulasi BUMN beserta rute individual per istilah.
- [Toolkit & Template Kertas Kerja SK-5](https://dsintegra.co.id/toolkit-regulasi): Repositori kertas kerja resmi kepatuhan SK-5 BUMN mencakup pratinjau Template RCM, Checklist ELC COSO, dan Format Pengujian TOE Tabel 22.

## Studi Kasus, Kualifikasi Vendor & Otoritas Pakar (E-E-A-T)
- [Studi Kasus & Benchmark Kinerja ICOFR BUMN](https://dsintegra.co.id/studi-kasus): Direktori benchmark hasil nyata implementasi ICOFR BUMN: eliminasi 42 defisiensi, efisiensi waktu TOE hingga 70 persen, dan asersi Direksi H-14 sebelum batas regulasi.
- [Katalog Temuan Defisiensi Audit ICOFR BUMN](https://dsintegra.co.id/temuan-audit-icofr): Direktori tipologi temuan audit pengendalian internal BUMN: risiko akun salah saji finansial, kelemahan ITGC/SoD, dan panduan Corrective Action Plan SK-5.
- [Kualifikasi Vendor & Kesiapan Tender BUMN](https://dsintegra.co.id/kualifikasi-vendor): Panduan resmi pengadaan sistem GRC BUMN: legalitas KBLI 70209 (Konsultasi Manajemen), KBLI 62019/62029 (Aktivitas Pemrograman & Konsultasi TI), arsitektur on-premise UU PDP, dan draf klausul KAK.
- [Panduan KAK & TOR Pengadaan BUMN](https://dsintegra.co.id/panduan-kak-tor-icofr): Rujukan klausul Kerangka Acuan Kerja (KAK) resmi konsultan ICOFR, spesifikasi teknis platform software GRC, kualifikasi tenaga ahli, dan permohonan draf dokumen Word.
- [Profil Perusahaan PT Daya Solusi Integra](https://dsintegra.co.id/tentang-kami): Identitas badan usaha, alamat kantor IDX Tower 1 Jakarta Selatan, kanal kontak resmi +62 852 8599 5234, legalitas, layanan inti, dan kepemimpinan.
- [Profil Penulis & Pakar: Humbul Kristiawan](https://dsintegra.co.id/penulis/humbul-kristiawan): Profil Principal Partner Daya Solusi Integra, mantan Equity Partner Deloitte SEA, komite audit aktif BUMN/perbankan, berlisensi CA, CIA, CICA, GRCP.
- [Media Kit & Rujukan Pers](https://dsintegra.co.id/media-kit): Boilerplate perusahaan, paket logo resmi, statistik kinerja sitasi, dan kontak media.

## Panduan Teknis & Riset Regulasi (Knowledge Base)
${blogEntries.map((b) => `- [${b.title}](https://dsintegra.co.id/blog/${b.slug}): ${b.excerpt}`).join("\n")}

## Kebijakan & Integritas
- [Kebijakan Privasi & Tata Kelola Data](https://dsintegra.co.id/kebijakan-privasi): Komitmen kepatuhan perlindungan data pribadi sesuai UU No. 27/2022 (UU PDP).
- [Pernyataan Independensi Konsultan](https://dsintegra.co.id/pernyataan-independensi): Standar independensi profesional, mitigasi benturan kepentingan, dan etika audit.

## Konteks Komprehensif
- [Dokumentasi Lengkap LLM](https://dsintegra.co.id/llms-full.txt): Kumpulan data lengkap konteks korporasi, regulasi SK-5, dan matriks Tabel 22 dalam satu berkas teks terpadu.
`;

  // 2. Susun llms-full.txt (Comprehensive Knowledge Base Context)
  const glossaryListFull = GLOSSARY_ITEMS.map(
    (g) => `### ${g.term}${g.acronym ? ` (${g.acronym})` : ""}
- Definisi: ${cleanProhibitedDashes(g.definition)}
- Rujukan Regulasi: ${cleanProhibitedDashes(g.regulationRef)}
- Kategori: ${cleanProhibitedDashes(g.category)}
- Tautan: https://dsintegra.co.id/glosarium/${g.id}`
  ).join("\n\n");

  const blogListFull = blogEntries.map(
    (b) => `### ${b.title}
- Kategori: ${b.category}
- Ringkasan: ${b.excerpt}
- Tautan: https://dsintegra.co.id/blog/${b.slug}`
  ).join("\n\n");

  const regulationListFull = REGULATION_ITEMS.map(
    (r) => `### ${r.shortTitle} (${r.identifier})
- Judul Resmi: ${cleanProhibitedDashes(r.officialTitle)}
- Otoritas Penerbit: ${cleanProhibitedDashes(r.issuingAuthority)}
- Kategori: ${cleanProhibitedDashes(r.category)}
- Berlaku Efektif: ${r.effectiveDate}
- Ringkasan: ${cleanProhibitedDashes(r.summary)}
- Mandat Kunci: ${cleanProhibitedDashes(r.primaryMandate)}
- Peran Tiga Lini:
  * ${cleanProhibitedDashes(r.threeLinesRole.firstLine)}
  * ${cleanProhibitedDashes(r.threeLinesRole.secondLine)}
  * ${cleanProhibitedDashes(r.threeLinesRole.thirdLine)}
- Tautan: https://dsintegra.co.id/regulasi#${r.id}`
  ).join("\n\n");

  const llmsFullContent = `# Dokumentasi Komprehensif AI: Daya Solusi Integra & GRC Integra

## Ringkasan Eksekutif
Daya Solusi Integra (https://dsintegra.co.id) adalah firma konsultan dan pengembang perangkat lunak tata kelola korporasi (GRC) asal Indonesia yang berfokus mendampingi Badan Usaha Milik Negara (BUMN) dalam memenuhi amanat regulasi Surat Keputusan Menteri BUMN Nomor SK-5/DKU.MBU/11/2024 tentang Penerapan Sistem Pengendalian Internal atas Pelaporan Keuangan (ICOFR).

Perusahaan mengembangkan platform perangkat lunak khusus bernama "GRC Integra", yaitu platform siklus hidup digital ICOFR terintegrasi pertama di Indonesia yang mengotomasi pemetaan proses bisnis, kalkulasi sampel pengujian, penatausahaan kertas kerja walkthrough, dan penerbitan lembar asersi manajemen digital.

## Landasan Regulasi & Kepatuhan BUMN
${regulationListFull}

## Lima Tahapan Siklus Hidup ICOFR BUMN
GRC Integra dan metodologi konsultansi Daya Solusi Integra membagi implementasi ICOFR ke dalam 5 siklus berurutan:

1. Tahap Scoping & Penentuan Akun Signifikan:
   - Identifikasi akun material pada Laporan Posisi Keuangan dan Laporan Laba Rugi menggunakan ambang batas materialitas kuantitatif dan faktor risiko kualitatif.
   - Pemetaan akun signifikan ke proses bisnis utama dan unit operasional entitas induk maupun anak perusahaan.

2. Tahap Pemetaan Proses Bisnis & Walkthrough Lini 2:
   - Dokumentasi narasi proses bisnis menggunakan notasi standar BPMN (Business Process Model and Notation) sesuai ketentuan Lampiran 3 regulasi SK-5.
   - Penyusunan Risk and Control Matrix (RCM) yang menghubungkan risiko salah saji material dengan kontrol preventif maupun detektif.
   - Pelaksanaan walkthrough oleh penjamin independen (Lini 2) untuk mengonfirmasi keabsahan rancangan kontrol.

3. Tahap Pengujian Efektivitas Desain & Operasional (TOD & TOE):
   - Test of Design (TOD): Memastikan bahwa rancangan kontrol, bila beroperasi secara efektif, mampu mencegah atau mendeteksi salah saji tepat waktu.
   - Test of Operating Effectiveness (TOE): Menguji apakah kontrol beroperasi konsisten sepanjang periode pelaporan melalui pengujian sampel bukti kerja.

4. Tahap Evaluasi Defisiensi & Remediasi:
   - Klasifikasi temuan kontrol ke dalam tiga tingkatan: Control Deficiency, Significant Deficiency, dan Material Weakness.
   - Penyusunan rencana aksi perbaikan (Corrective Action Plan / CAP) dengan target waktu penyelesaian sebelum penutupan tahun buku.

5. Tahap Asersi Manajemen & Pelaporan Direksi:
   - Penerbitan laporan efektivitas pengendalian internal pelaporan keuangan tahunan.
   - Penandatanganan pernyataan tanggung jawab manajemen secara digital dengan verifikasi QR Code terenkripsi.

## Standar Penentuan Sampel Pengujian TOE (Tabel 22 Regulasi BUMN)
Dalam melakukan Test of Operating Effectiveness (TOE) untuk kontrol manual tanpa deviasi yang dapat ditoleransi (tolerable deviation rate 0 persen), ukuran sampel minimum ditetapkan secara normatif:
- Frekuensi Kontrol Tahunan (Annual): 1 sampel.
- Frekuensi Kontrol Triwulanan (Quarterly): 2 sampel.
- Frekuensi Kontrol Bulanan (Monthly): 2 sampai 5 sampel.
- Frekuensi Kontrol Mingguan (Weekly): 5 sampai 15 sampel.
- Frekuensi Kontrol Harian (Daily): 20 sampai 40 sampel.
- Frekuensi Kontrol Berkali-kali Sehari: 25 sampai 60 sampel.

## Direktori Glosarium Terminologi Kepatuhan & Regulasi
${glossaryListFull}

## Artikel Riset & Panduan Teknis Kepatuhan
${blogListFull}

## Kualifikasi Pengadaan Vendor & Kesiapan Tender BUMN
- Halaman Resmi: https://dsintegra.co.id/kualifikasi-vendor
- Klasifikasi Baku Lapangan Usaha Indonesia (KBLI):
  * KBLI 70209 (Aktivitas Konsultasi Manajemen Lainnya) : Konsultasi penyusunan RCM, walkthrough TOD/TOE, dan pendampingan asersi Direksi.
  * KBLI 62019 (Aktivitas Pemrograman Komputer Lainnya) : Pengembangan platform software GRC Integra dan modul otomasi alur kerja BPMN.
  * KBLI 62029 (Aktivitas Konsultasi TI dan Manajemen Fasilitas Komputer Lainnya) : Evaluasi arsitektur ITGC, audit hak akses, dan manajemen perubahan sistem.
- Kepatuhan Kedaulatan Data & UU PDP: Mendukung deployment on-premise di data center internal BUMN atau Government Private Cloud terisolasi guna memenuhi ketentuan UU No. 27/2022 (UU Perlindungan Data Pribadi).

## Otoritas & Profil Pakar (E-E-A-T)
- Profil Humbul Kristiawan, CA, CIA, CICA, GRCP: https://dsintegra.co.id/penulis/humbul-kristiawan
- Jabatan: Principal Partner PT Daya Solusi Integra
- Rekam Jejak: Mantan Equity Partner Deloitte South East Asia, 25+ tahun pengalaman dalam audit internal, implementasi SOX 404 / ICOFR, dan manajemen risiko terintegrasi.
- Lisensi & Registrasi: Chartered Accountant (CA), Certified Internal Auditor (CIA), Certified Internal Control Auditor (CICA), Certified GRC Professional (GRCP), Register Akuntan Negara Kementerian Keuangan RI No. D-20.117.
- Peran Komite Pengawasan Aktif: Anggota Komite Pemantau Risiko PT Pegadaian, Anggota Komite Audit PT Bank UOB Indonesia, Anggota Komite Tata Kelola Terintegrasi Bank bjb.

## Profil Perusahaan PT Daya Solusi Integra
- Halaman Resmi: https://dsintegra.co.id/tentang-kami
- Kantor Pusat: Indonesia Stock Exchange Tower 1, Level 3 Unit 304, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta 12910
- Kontak Resmi: +62 852 8599 5234 (Corporate Whatsapp), marketing@dsintegra.co.id
- Jam Operasional: Senin sampai Jumat 08:30 sampai 17:30 WIB
- Layanan Inti: IT Advisory & Governance (ITGC & COBIT), Enterprise GRC Consulting, Implementasi & Sertifikasi ICOFR, Pre-Audit Readiness & Remediation.

## Toolkit & Template Kertas Kerja SK-5
- Halaman Resmi: https://dsintegra.co.id/toolkit-regulasi
- Format Berkas: Spreadsheet Excel Resmi (XLSX)
- Cakupan Template:
  1. Template Risk and Control Matrix (RCM) SK-5 : Pemetaan akun material, asersi manajemen (E, C, V, R, P), tipe kontrol, frekuensi, dan metode pengujian Lini 2.
  2. Checklist Entity-Level Controls (ELC) COSO 2013 : Evaluasi 5 komponen dan 17 prinsip pengendalian tingkat entitas.
  3. Format Kertas Kerja Pengujian TOE Tabel 22 : Penentuan ukuran sampel acak normatif dengan toleransi deviasi nol (zero deviation).

## Direktori Studi Kasus & Benchmark Kinerja BUMN
- Halaman Resmi: https://dsintegra.co.id/studi-kasus
- Metrik Agregat: Eliminasi 42 defisiensi audit tuntas 100%, efisiensi durasi siklus pengujian TOE hingga 70%, penyelesaian asersi Direksi H-14 sebelum batas regulasi, dan 0 sanksi keterlambatan pelaporan.
- Sektor Terlayani: Holding Multisektor BUMN (Aset > Rp 50 Triliun), Perbankan & Jasa Keuangan (Himbara & BPD Tier-1), serta Infrastruktur & Konstruksi Karya (PSAK 72 & Verifikasi Subkontraktor).

## Katalog Temuan Defisiensi Audit ICOFR BUMN & Rekomendasi CAP
- Halaman Resmi: https://dsintegra.co.id/temuan-audit-icofr
- Tipologi Temuan Kunci:
  1. Selisih Saldo Antar-Perusahaan (Intercompany) Saat Penutupan Buku : Rekomendasi cut-off rekonsiliasi bulanan H-5 dengan toleransi deviasi nol berbasis GRC Integra.
  2. Konflik Segregasi Tugas (SoD) ERP & Database : Audit User Role Matrix, pencabutan akses maker-checker ganda, dan monitoring log database independen.
  3. Deviasi Pengakuan Pendapatan Konstruksi PSAK 72 : Wajib verifikasi tiga pihak (PM, Finance Lini 2, Pengawas) atas opname fisik sebelum pengakuan progres.
  4. Pengujian ITAC Tanpa Assurance ITGC : Uji kelayakan baseline ITGC (change management & akses) sebelum penetapan strategi Test of One.
  5. Sampel TOE di Bawah Standar Normatif : Penerapan formula normatif Tabel 22 SK-5 (20 s.d. 40 sampel kontrol harian).
`;

  // Tulis berkas ke dist dan public
  fs.writeFileSync(path.join(distDir, "llms.txt"), llmsTxtContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxtContent, "utf-8");
  fs.writeFileSync(path.join(distDir, "llms-full.txt"), llmsFullContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "llms-full.txt"), llmsFullContent, "utf-8");

  console.log("Successfully generated llms.txt and llms-full.txt at dist/ and public/.");
}