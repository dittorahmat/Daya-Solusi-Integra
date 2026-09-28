import fs from "fs";
import path from "path";
import { RouteMeta, ROUTE_METADATA_MAP } from "../../src/utils/seoMeta.js";
import { ROUTE_FAQS } from "../../src/data/faqData.js";
import { GLOSSARY_ITEMS } from "../../src/data/glossaryData.js";
import { REGULATION_ITEMS } from "../../src/data/regulationData.js";
import { SECTOR_DATA_MAP } from "../../src/data/sectorsData.js";
import { blogContentDir } from "./paths.js";
import { parseBlogFrontMatter } from "./frontmatter.js";
import { cleanProhibitedDashes } from "./xml.js";

/**
 * Membangun struktur HTML semantik (H1, Lead, Breadcrumb, FAQs, Content) untuk diinjeksi ke <div id="root">
 * Memungkinkan web crawler & bot AI mengindeks konten teks lengkap secara langsung tanpa eksekusi JavaScript.
 */
export function buildSemanticBodyHtmlForRoute(routePath: string, meta: RouteMeta): string {
  const pageTitle = cleanProhibitedDashes(meta.title.split("|")[0].trim());
  const pageDesc = cleanProhibitedDashes(meta.description || "");

  // Susun Breadcrumb semantic
  const segments = routePath.split("/").filter(Boolean);
  let breadcrumbLinks = `<a href="/">Beranda</a>`;
  let currentAccum = "";
  segments.forEach((seg, idx) => {
    currentAccum += `/${seg}`;
    const isLast = idx === segments.length - 1;
    const segName = cleanProhibitedDashes(seg.replace(/-/g, " "));
    if (isLast) {
      breadcrumbLinks += ` &gt; <span>${segName}</span>`;
    } else if (ROUTE_METADATA_MAP[currentAccum]) {
      breadcrumbLinks += ` &gt; <a href="${currentAccum}">${segName}</a>`;
    } else {
      // Segmen perantara tanpa rute (mis. /blog/penulis, /layanan)
      // dirender sebagai teks agar tidak menjadi broken internal link.
      breadcrumbLinks += ` &gt; <span>${segName}</span>`;
    }
  });

  let specificContent = "";

  // 1. Konten spesifik artikel blog
  if (routePath.startsWith("/blog/")) {
    const slug = routePath.replace("/blog/", "");
    const mdFile = path.join(blogContentDir, `${slug}.md`);
    if (fs.existsSync(mdFile)) {
      const rawMd = fs.readFileSync(mdFile, "utf-8");
      const { data, body } = parseBlogFrontMatter(rawMd);
      
      // Sederhanakan markdown paragraphs ke tag HTML semantik
      const paragraphs = body
        .split("\n\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0 && !p.startsWith("#"))
        .map((p) => `<p>${cleanProhibitedDashes(p).replace(/\n/g, " ")}</p>`)
        .slice(0, 10) // Ambil 10 paragraf pertama untuk raw HTML snapshot
        .join("\n      ");

      specificContent = `
      <article itemscope itemtype="https://schema.org/TechArticle">
        <header>
          <p>Kategori: <span itemprop="articleSection">${cleanProhibitedDashes(data.category || "Tata Kelola & GRC")}</span></p>
          <p>Penulis: <span itemprop="author">${cleanProhibitedDashes(data.author || "Daya Solusi Integra")}</span> | Tanggal: <time itemprop="datePublished">${data.date || "2026-09-25"}</time></p>
        </header>
        <section class="article-lead" itemprop="abstract">
          <p><strong>Ringkasan Eksekutif &amp; Jawaban Kunci:</strong> ${cleanProhibitedDashes(data.excerpt || pageDesc)}</p>
        </section>
        <section class="article-body" itemprop="articleBody">
          ${paragraphs}
        </section>
        <footer>
          <p>Pelajari lebih lanjut implementasi tata kelola dan konsultasi melalui <a href="/layanan/icofr-bumn">Layanan Konsultan ICOFR BUMN</a> atau evaluasi otomatisasi dengan <a href="/platform/grc-integra">Software GRC Integra</a>.</p>
        </footer>
      </article>
      `;
    }
  } else if (routePath === "/blog") {
    specificContent = `
    <section>
      <h2>Katalog Wawasan & Panduan Regulasi BUMN</h2>
      <p>Kumpulan panduan teknis, metodologi pengujian pengendalian internal, kepatuhan audit ITGC, dan asersi manajemen berbasis SK-5/DKU.MBU/11/2024.</p>
      <ul>
        <li><a href="/blog/panduan-sk5-icofr-grc-integra">Panduan Implementasi SK-5/DKU.MBU/11/2024 ICOFR BUMN</a></li>
        <li><a href="/blog/apa-itu-icofr-bumn-fungsi-regulasi-sk5">Apa Itu ICOFR BUMN: Fungsi, Tujuan, dan Landasan Hukum SK-5</a></li>
        <li><a href="/blog/panduan-sampel-toe-tabel-22-icofr-bumn">Panduan Penentuan Sampel Pengujian TOE Berdasarkan Tabel 22</a></li>
        <li><a href="/blog/studi-kasus-icofr-holding-bumn-wtp">Studi Kasus ICOFR BUMN: Eliminasi 42 Defisiensi Menuju Opini WTP</a></li>
        <li><a href="/blog/perbandingan-software-grc-integra-vs-modul-erp-bumn">Perbandingan Software GRC BUMN vs Modul ERP Global</a></li>
        <li><a href="/blog/manfaat-aplikasi-icofr-bumn-spreadsheet">Manfaat Aplikasi ICOFR Dibandingkan Spreadsheet Manual</a></li>
      </ul>
    </section>
    `;
  } else if (routePath.startsWith("/glosarium/")) {
    const slug = routePath.replace("/glosarium/", "");
    const item = GLOSSARY_ITEMS.find((g) => g.id === slug);
    if (item) {
      const termTitle = item.acronym ? `${item.term} (${item.acronym})` : item.term;
      specificContent = `
      <section>
        <h2>Definisi & Penjelasan Kepatuhan</h2>
        <p>${cleanProhibitedDashes(item.definition)}</p>
        <h3>Rujukan Regulasi Resmi</h3>
        <p>${cleanProhibitedDashes(item.regulationRef)}</p>
        <h3>Kategori Tata Kelola</h3>
        <p>${cleanProhibitedDashes(item.category)}</p>
        <p><a href="/glosarium">&larr; Kembali ke Glosarium Lengkap</a> | <a href="/layanan/icofr-bumn">Konsultasi Terkait ${cleanProhibitedDashes(termTitle)}</a></p>
      </section>
      `;
    }
  } else if (routePath === "/glosarium") {
    const listTerms = GLOSSARY_ITEMS
      .map((item) => `<li><a href="/glosarium/${item.id}"><strong>${cleanProhibitedDashes(item.term)}</strong>${item.acronym ? ` (${item.acronym})` : ""}</a>: ${cleanProhibitedDashes(item.definition.slice(0, 140))}...</li>`)
      .join("\n        ");
    specificContent = `
    <section>
      <h2>Daftar Istilah Pengendalian Internal & Regulasi BUMN</h2>
      <p>Kamus terminologi standar kepatuhan pengendalian internal atas pelaporan keuangan (ICOFR), audit teknologi informasi (ITGC), dan kerangka COSO/ISO 31000.</p>
      <ul>
        ${listTerms}
      </ul>
    </section>
    `;
  } else if (routePath === "/kualifikasi-vendor") {
    specificContent = `
    <section>
      <h2>Kualifikasi Vendor &amp; Panduan Pengadaan Solusi GRC BUMN</h2>
      <p>PT Daya Solusi Integra menyediakan profil kualifikasi resmi, legalitas korporasi, kesiapan arsitektur data on-premise, dan panduan Kerangka Acuan Kerja (KAK) pengadaan sistem serta konsultan pendampingan ICOFR berbasis SK-5/DKU.MBU/11/2024.</p>
      
      <h3>Klasifikasi Baku Lapangan Usaha Indonesia (KBLI):</h3>
      <ul>
        <li><strong>KBLI 70209:</strong> Aktivitas Konsultasi Manajemen Lainnya (Penyusunan RCM, ELC, Metodologi TOD/TOE, Asersi Direksi).</li>
        <li><strong>KBLI 62019:</strong> Aktivitas Pemrograman Komputer Lainnya (Software GRC Integra, Otomasi Alur Kerja Kepatuhan).</li>
        <li><strong>KBLI 62029:</strong> Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya (Audit ITGC, Evaluasi Keamanan Sistem).</li>
      </ul>

      <h3>Kedaulatan Data &amp; Kepatuhan UU PDP:</h3>
      <p>Mendukung opsi On-Premise penuh di server internal BUMN dan Private Cloud lokal di Indonesia. Menjamin kepatuhan penuh terhadap UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.</p>

      <h3>Panduan Kerangka Acuan Kerja (KAK / TOR):</h3>
      <p>Menyediakan klausul teknis standar mencakup ruang lingkup kepatuhan SK-5, kualifikasi tenaga ahli bersertifikasi (CA, CIA, CICA, GRCP), Non-Disclosure Agreement (NDA), dan Service Level Agreement (SLA).</p>
      
      <p>Unduh profil perusahaan lengkap atau diskusikan draf KAK pengadaan melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath === "/penulis/humbul-kristiawan") {
    specificContent = `
    <article>
      <h2>Profil Pakar &amp; Penulis: Humbul Kristiawan, SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP</h2>
      <p><strong>Jabatan:</strong> Principal Partner &amp; Senior GRC Advisor, PT Daya Solusi Integra</p>
      <p>Mantan Equity Partner Deloitte South East Asia dan Partner RSM Indonesia dengan pengalaman lebih dari seperempat abad dalam tata kelola korporasi, implementasi ICOFR, dan manajemen risiko terintegrasi di BUMN dan perbankan.</p>
      
      <h3>Sertifikasi Profesional:</h3>
      <ul>
        <li>Chartered Accountant (CA)</li>
        <li>Certified Internal Auditor (CIA)</li>
        <li>Certified Internal Control Auditor (CICA)</li>
        <li>Certified GRC Professional (GRCP)</li>
        <li>Certified in Audit Committee Practices (CACP)</li>
        <li>Register Akuntan Negara (Kemenkeu RI No. D-20.117)</li>
      </ul>

      <h3>Peran Komite Pengawasan Aktif:</h3>
      <ul>
        <li>Anggota Komite Pemantau Risiko PT Pegadaian</li>
        <li>Anggota Komite Audit PT Bank UOB Indonesia</li>
        <li>Anggota Komite Tata Kelola Terintegrasi Bank bjb</li>
      </ul>

      <h3>Katalog Publikasi Riset &amp; Artikel Tata Kelola BUMN:</h3>
      <p>Penulis utama 12 kajian pilar kepatuhan SK-5/DKU.MBU/11/2024, evaluasi ITGC, dan metodologi audit pengendalian internal. <a href="/blog">Lihat seluruh publikasi artikel di Katalog Blog &amp; Wawasan</a>.</p>
      <p>Profil profesional eksternal: <a href="https://www.linkedin.com/in/humbul-kristiawan-b0621360/" target="_blank" rel="noopener">LinkedIn Resmi</a> | <a href="https://humbulkristiawan.com/about-humbul/" target="_blank" rel="noopener">Biografi Eksekutif</a></p>
    </article>
    `;
  } else if (routePath === "/toolkit-regulasi") {
    specificContent = `
    <section>
      <h2>Katalog Toolkit &amp; Kertas Kerja Kepatuhan ICOFR SK-5 BUMN</h2>
      <p>Standar kertas kerja kepatuhan pengendalian internal pelaporan keuangan SK-5/DKU.MBU/11/2024 dan kerangka kerja COSO untuk Satuan Pengawasan Intern (SPI), Risk Management, dan Akuntansi BUMN.</p>
      
      <h3>3 Artefak Utama Kertas Kerja:</h3>
      <ul>
        <li><strong>Template Risk &amp; Control Matrix (RCM) SK-5:</strong> Matriks pemetaan risiko akun material, asersi manajemen (E, C, V, R, P), frekuensi kontrol, tipe kontrol, dan prosedur pengujian TOD/TOE.</li>
        <li><strong>Checklist Entity-Level Control (ELC) COSO:</strong> Kertas kerja evaluasi 5 komponen dan 17 prinsip pengendalian tingkat entitas.</li>
        <li><strong>Kertas Kerja Pengujian TOE Tabel 22:</strong> Format dokumentasi sampel acak normatif berfrekuensi dengan aturan deviasi nol (zero deviation).</li>
      </ul>

      <h3>Risiko Pengelolaan Spreadsheet Manual vs Software GRC Integra:</h3>
      <p>Pengelolaan manual rentan terhadap kegagalan kontrol versi (*versioning failure*), rumus rusak, dan ketiadaan jejak audit digital. Otomasi seluruh siklus ini dengan platform <a href="/platform/grc-integra">GRC Integra</a>.</p>
      
      <p>Permohonan paket lengkap file Excel resmi (XLSX) dapat diajukan melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath === "/panduan-kak-tor-icofr") {
    specificContent = `
    <section>
      <h2>Panduan Penyusunan KAK &amp; TOR Pengadaan Konsultan ICOFR &amp; Software GRC BUMN</h2>
      <p>Standar acuan klausul Kerangka Acuan Kerja (KAK) resmi bagi Panitia Pengadaan, Pejabat Pembuat Komitmen (PPK), dan Satuan Pengawasan Intern (SPI) BUMN sesuai mandat SK-5/DKU.MBU/11/2024 dan PER-2/MBU/03/2023.</p>

      <h3>3 Pilar Acuan Pengadaan:</h3>
      <ul>
        <li><strong>Ruang Lingkup Jasa Konsultan ICOFR:</strong> Klausul baku penetapan batasan materialitas akun, penyusunan RCM, walkthrough Lini 2 (TOD), pengujian efektivitas operasional TOE Tabel 22 nol deviasi, dan perumusan asersi Direksi Lampiran 11.</li>
        <li><strong>Spesifikasi Teknis Perangkat Lunak GRC:</strong> Kriteria fungsional sistem mencakup arsitektur on-premise/private cloud kedaulatan data, visualisasi alur BPMN Lampiran 3, kalkulator sampel normatif Tabel 22, dan verifikasi asersi QR Code.</li>
        <li><strong>Standar Kualifikasi Tenaga Ahli:</strong> Persyaratan kompetensi ketua tim dan auditor (CRMA, CISA, Akuntan Beregister CA/CPA) dengan rekam jejak BUMN.</li>
      </ul>

      <h3>Daftar Luaran Wajib (Mandatory Deliverables):</h3>
      <p>Laporan Scoping Akun &amp; ELC COSO, Risk and Control Matrix (RCM) digital, Kertas Kerja Pengujian TOD/TOE, Deficiency Sheet &amp; CAP, serta Draf Final Surat Asersi Direksi.</p>

      <p>Draf dokumen KAK format Word (.DOCX) dan telaah estimasi HPS dapat diajukan melalui formulir resmi atau email <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath === "/studi-kasus") {
    specificContent = `
    <section>
      <h2>Studi Kasus &amp; Benchmark Kinerja Implementasi ICOFR BUMN</h2>
      <p>Pembuktian hasil nyata implementasi kerangka kerja ICOFR SK-5/DKU.MBU/11/2024 dan platform software GRC Integra di berbagai entitas BUMN, holding klaster, dan lembaga jasa keuangan nasional.</p>
      
      <h3>Agregat Benchmark Dampak Implementasi:</h3>
      <ul>
        <li><strong>100% Tuntas Defisiensi:</strong> Seluruh temuan defisiensi signifikan auditor eksternal terselesaikan sebelum periode tutup buku.</li>
        <li><strong>70% Efisiensi Siklus TOE:</strong> Penghematan waktu pengujian kontrol Tabel 22 menggunakan kalkulator otomatis dan platform digital.</li>
        <li><strong>H-14 Asersi Direksi:</strong> Penyelesaian pernyataan efektivitas pengendalian sebelum batas akhir regulasi Kementerian BUMN.</li>
        <li><strong>0 Sanksi Keterlambatan:</strong> Kepatuhan penuh terhadap batas pelaporan PER-2/MBU/03/2023.</li>
      </ul>

      <h3>Daftar Studi Kasus Sektoral:</h3>
      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>1. Holding BUMN Multisektor (Aset Konsolidasi &gt; Rp 50 Triliun)</h4>
        <p><strong>Judul:</strong> Eliminasi 42 Defisiensi Pengendalian Menuju Opini WTP Tanpa Catatan Auditor Eksternal</p>
        <p><strong>Tantangan:</strong> Pemeriksaan BPKP dan KAP mengidentifikasi 42 defisiensi signifikan saldo antar-perusahaan (intercompany), pengujian TOE tidak seragam, dan keterlambatan asersi Lini 2 akibat spreadsheet manual.</p>
        <p><strong>Solusi &amp; Hasil:</strong> Penyelarasan RCM 8 anak holding, otomatisasi sampel Tabel 22 SK-5, eliminasi 100% defisiensi, dan efisiensi waktu TOE dari 90 menjadi 24 hari. <a href="/blog/studi-kasus-icofr-holding-bumn-wtp">Baca kajian lengkap studi kasus holding</a>.</p>
      </article>

      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>2. Perbankan &amp; Lembaga Keuangan (Bank BUMN / BPD Tier-1)</h4>
        <p><strong>Judul:</strong> Harmonisasi ITGC Core Banking dan Validasi CKPN PSAK 71 Berbasis POJK &amp; SK-5</p>
        <p><strong>Tantangan:</strong> Kompleksitas integrasi core banking, modul treasury, dan perhitungan CKPN PSAK 71 dengan segregasi tugas (SoD) yang disorot auditor.</p>
        <p><strong>Solusi &amp; Hasil:</strong> Pengujian otomatis ITGC hak akses dan change management, validasi parameter CKPN pada 100% populasi portofolio kredit, serta rekonsiliasi tuntas dalam 4 jam kerja.</p>
      </article>

      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>3. Infrastruktur &amp; Konstruksi Karya (BUMN Konstruksi Nasional)</h4>
        <p><strong>Judul:</strong> Pengendalian Pengakuan Pendapatan PSAK 72 dan Verifikasi Tagihan Subkontraktor Proyek</p>
        <p><strong>Tantangan:</strong> Potensi selisih progres akuntansi dan fisik lapangan, risiko keterlambatan sertifikasi owner, dan beban administrasi ratusan dokumen subkontraktor.</p>
        <p><strong>Solusi &amp; Hasil:</strong> Matriks kontrol proyek BPMN 2.0 Lampiran 3 SK-5, batas toleransi deviasi estimasi biaya penyelesaian (EAC), dan deviasi fisik-buku ditekan hingga di bawah 1%.</p>
      </article>

      <p>Jadwalkan sesi evaluasi awal dengan konsultan Daya Solusi Integra melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath === "/temuan-audit-icofr") {
    specificContent = `
    <section>
      <h2>Katalog Temuan Defisiensi Audit ICOFR BUMN &amp; Solusi CAP</h2>
      <p>Panduan komprehensif akar masalah, risiko laporan keuangan, dan rekomendasi Corrective Action Plan (CAP) resmi berbasis regulasi SK-5/DKU.MBU/11/2024 dan kerangka COSO 2013 untuk Satuan Pengawasan Intern (SPI), Risk Management, dan Akuntansi BUMN.</p>
      
      <h3>Tipologi Temuan Defisiensi Pengendalian Signifikan:</h3>
      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>1. Selisih Saldo Akun Antar-Perusahaan (Intercompany) Saat Penutupan Buku</h4>
        <p><strong>Klasifikasi:</strong> Significant Deficiency | <strong>Rujukan:</strong> Lampiran 2 SK-5</p>
        <p><strong>Akar Masalah:</strong> Ketiadaan jadwal rekonsiliasi periodik seragam antara holding dan anak perusahaan serta perbedaan cut-off transaksi.</p>
        <p><strong>Rekomendasi CAP:</strong> Tetapkan cut-off rekonsiliasi bulanan dengan toleransi selisih nol sebelum tutup buku (H-5) dan gunakan repositori konfirmasi saldo terpusat pada platform GRC Integra.</p>
      </article>

      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>2. Konflik Segregasi Tugas (SoD) pada ERP &amp; Database Keuangan</h4>
        <p><strong>Klasifikasi:</strong> Significant Deficiency | <strong>Rujukan:</strong> POJK 11/2022 &amp; Lampiran 5 SK-5 (ITGC)</p>
        <p><strong>Akar Masalah:</strong> Pemberian hak akses superuser (SAP All) kepada staf operasional akuntansi dan ketiadaan review berkala log database.</p>
        <p><strong>Rekomendasi CAP:</strong> Audit matriks peran pengguna (User Role Matrix), cabut akses maker-checker ganda, dan terapkan pemantauan log aktivitas database independen.</p>
      </article>

      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>3. Deviasi Pengakuan Pendapatan Konstruksi PSAK 72 Tanpa Opname Fisik</h4>
        <p><strong>Klasifikasi:</strong> Significant Deficiency | <strong>Rujukan:</strong> PSAK 72 &amp; Lampiran 4 SK-5</p>
        <p><strong>Akar Masalah:</strong> Estimasi total biaya penyelesaian proyek (EAC) tidak diperbarui kuartalan dan pengakuan progres tanpa validasi konsultan pengawas.</p>
        <p><strong>Rekomendasi CAP:</strong> Verifikasi tiga pihak (Project Manager, Finance Lini 2, Pengawas) atas berita acara fisik sebelum pencatatan persentase progres pendapatan.</p>
      </article>

      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>4. Pengujian ITAC Mengandalkan Test of One Tanpa Bukti Kesiapan ITGC</h4>
        <p><strong>Klasifikasi:</strong> Control Deficiency | <strong>Rujukan:</strong> Lampiran 6 SK-5 (IT Application Controls)</p>
        <p><strong>Akar Masalah:</strong> Pengujian kontrol otomatis dilakukan dengan 1 sampel tanpa evaluasi change management dan kontrol akses sistem.</p>
        <p><strong>Rekomendasi CAP:</strong> Selesaikan pengujian ITGC terlebih dahulu sebelum menetapkan strategi Test of One; jika ITGC belum teruji efektif, lakukan uji substantif.</p>
      </article>

      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h4>5. Penentuan Ukuran Sampel TOE di Bawah Batas Normatif Tabel 22</h4>
        <p><strong>Klasifikasi:</strong> Control Deficiency | <strong>Rujukan:</strong> Tabel 22 SK-5 (Ketentuan Sampel TOE)</p>
        <p><strong>Akar Masalah:</strong> Penguji kontrol mengambil sampel secara arbitrer tanpa justifikasi evaluasi risiko statistik audit SPKN.</p>
        <p><strong>Rekomendasi CAP:</strong> Adopsi secara ketat formula Tabel 22 SK-5 (20 s.d. 40 sampel kontrol harian) menggunakan <a href="/kalkulator-sampel-toe">Kalkulator Sampel TOE Tabel 22</a>.</p>
      </article>

      <p>Konsultasikan penuntasan temuan audit defisiensi BUMN Anda dengan konsultan senior kami di <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath === "/kalkulator-sampel-toe") {
    specificContent = `
    <section>
      <h2>Alat Bantu Penentuan Ukuran Sampel Uji Efektivitas Kontrol (TOE)</h2>
      <p>Kalkulator normatif ukuran sampel pengujian kontrol berdasarkan Tabel 22 Surat Keputusan Menteri BUMN SK-5/DKU.MBU/11/2024.</p>
      <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 1rem; width: 100%;">
        <thead>
          <tr>
            <th>Frekuensi Kontrol</th>
            <th>Populasi Kejadian</th>
            <th>Batas Sampel Minimum</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tahunan (Annual)</td><td>1 kali/tahun</td><td>1 sampel</td></tr>
          <tr><td>Triwulanan (Quarterly)</td><td>4 kali/tahun</td><td>2 sampel</td></tr>
          <tr><td>Bulanan (Monthly)</td><td>12 kali/tahun</td><td>2 sampai 5 sampel</td></tr>
          <tr><td>Mingguan (Weekly)</td><td>52 kali/tahun</td><td>5 sampai 15 sampel</td></tr>
          <tr><td>Harian (Daily)</td><td>250 kali/tahun</td><td>20 sampai 40 sampel</td></tr>
          <tr><td>Berkali-kali Sehari</td><td>&gt; 250 kali/tahun</td><td>25 sampai 60 sampel</td></tr>
        </tbody>
      </table>
    </section>
    `;
  } else if (routePath === "/platform/grc-integra") {
    specificContent = `
    <section>
      <h2>Kapabilitas Utama Platform GRC Integra</h2>
      <ul>
        <li><strong>Scoping & Akun Signifikan:</strong> Penentuan otomatis akun material dan asersi laporan keuangan.</li>
        <li><strong>Risk and Control Matrix (RCM) Repository:</strong> Sentralisasi pengendalian proses bisnis Lini 1 dan Lini 2.</li>
        <li><strong>Pengujian TOD & TOE:</strong> Dokumentasi kertas kerja audit, sampel acak Tabel 22, dan manajemen defisiensi.</li>
        <li><strong>Pelaporan Asersi Manajemen:</strong> Dashboard kepatuhan Direksi dan asersi kepatuhan regulasi SK-5 BUMN.</li>
      </ul>
      <p>Pelajari lebih lanjut atau jadwalkan sesi demonstrasi langsung dengan konsultan kami di <a href="/#contact">Hubungi Tim GRC Integra</a>.</p>
    </section>
    `;
  } else if (routePath === "/platform/bpm-workflow-editor") {
    specificContent = `
    <section>
      <h2>BPM Workflow Editor: Solusi Pemetaan Alur Kerja Proses Bisnis Seandal Visio di Web</h2>
      <p>BPM Workflow Editor pada GRC Integra menghadirkan kanvas pemetaan proses bisnis modern berbasis browser. Dirancang khusus untuk mempermudah tim Lini 1, Lini 2, dan auditor internal BUMN dalam memetakan standar operasional prosedur (SOP) secara visual, presisi, dan terstruktur.</p>
      
      <h3>Kapabilitas Utama Editor:</h3>
      <ul>
        <li><strong>Visio-Style Native Web Canvas:</strong> Antarmuka familiar dengan kemampuan drag-and-drop elemen BPMN (Swimlane, Event, Activity/Task, Gateway keputusan, Data Store) langsung di browser tanpa membutuhkan lisensi aplikasi desktop terpisah.</li>
        <li><strong>Smart Auto-Draw dari Dokumen SOP Eksisting:</strong> Unggah file alur proses dalam format PDF, gambar scan JPG, atau PNG. Mesin cerdas merekonstruksi urutan alur secara instan menjadi diagram digital yang dapat diedit langsung di kanvas.</li>
        <li><strong>Dokumentasi SOP Terstandarisasi:</strong> Ekspor hasil diagram ke format PDF vektor beresolusi tinggi, gambar, atau format data terstandar untuk lampiran dokumen kepatuhan korporasi.</li>
      </ul>

      <h3>Demonstrasi Langsung Bersama Konsultan:</h3>
      <p>Kami melayani sesi demonstrasi produk secara langsung (tatap muka offline) untuk kantor pusat dan unit kerja di wilayah <strong>Jabodetabek</strong>, serta sesi demo daring interaktif (online) untuk korporasi di seluruh Indonesia.</p>
      <p>Jadwalkan sesi konsultasi dan demo produk melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a> atau navigasikan ke formulir kontak kami.</p>
    </section>
    `;
  } else if (routePath === "/regulasi") {
    const regList = REGULATION_ITEMS.map((reg) => `
      <article style="margin-bottom: 2rem; border-bottom: 1px solid #1e293b; padding-bottom: 1.5rem;">
        <h3>${cleanProhibitedDashes(reg.shortTitle)} (${cleanProhibitedDashes(reg.identifier)})</h3>
        <p><strong>Judul Resmi:</strong> ${cleanProhibitedDashes(reg.officialTitle)}</p>
        <p><strong>Otoritas Penerbit:</strong> ${cleanProhibitedDashes(reg.issuingAuthority)} | <strong>Berlaku:</strong> ${reg.effectiveDate}</p>
        <p>${cleanProhibitedDashes(reg.summary)}</p>
        <p><strong>Mandat Kunci:</strong> ${cleanProhibitedDashes(reg.primaryMandate)}</p>
        <h4>Distribusi Tiga Lini (Three Lines Model):</h4>
        <ul>
          <li><strong>${cleanProhibitedDashes(reg.threeLinesRole.firstLine)}</strong></li>
          <li><strong>${cleanProhibitedDashes(reg.threeLinesRole.secondLine)}</strong></li>
          <li><strong>${cleanProhibitedDashes(reg.threeLinesRole.thirdLine)}</strong></li>
        </ul>
      </article>
    `).join("\n");

    specificContent = `
    <section>
      <h2>Pusat Regulasi & Landasan Hukum Pengendalian Internal BUMN</h2>
      <p>Kompilasi direktori regulasi resmi yang mengatur kepatuhan pengendalian internal atas pelaporan keuangan (ICOFR), tata kelola korporasi, serta standar pemeriksaan BPK.</p>
      ${regList}
    </section>
    `;
  } else if (routePath.startsWith("/glosarium/")) {
    const slug = routePath.replace("/glosarium/", "");
    const item = GLOSSARY_ITEMS.find((g) => g.id === slug);
    if (item) {
      const termTitle = item.acronym ? `${item.term} (${item.acronym})` : item.term;
      specificContent = `
      <article>
        <h2>${cleanProhibitedDashes(termTitle)}</h2>
        <p><strong>Kategori:</strong> ${cleanProhibitedDashes(item.category)} | <strong>Rujukan Regulasi:</strong> ${cleanProhibitedDashes(item.regulationRef)}</p>
        <h3>Definisi Kepatuhan:</h3>
        <p>${cleanProhibitedDashes(item.definition)}</p>
        <h3>Poin Kunci BUMN:</h3>
        <p>${cleanProhibitedDashes(item.keyTakeaway)}</p>
        ${item.practicalExample ? `<h3>Contoh Penerapan Praktis:</h3><p>${cleanProhibitedDashes(item.practicalExample)}</p>` : ""}
        <p><a href="/glosarium">&larr; Kembali ke Direktori Glosarium ICOFR BUMN</a></p>
      </article>
      `;
    }
  } else if (routePath.startsWith("/layanan/")) {
    specificContent = `
    <section>
      <h2>Ruang Lingkup & Metodologi Pendampingan</h2>
      <p>Daya Solusi Integra mendampingi BUMN, holding klaster, dan lembaga jasa keuangan dalam menerapkan tata kelola yang teruji, memenuhi uji kepatuhan BPKP, BPK, dan auditor independen.</p>
      <p>Konsultasikan kebutuhan implementasi, evaluasi kesiapan audit, atau integrasi sistem melalui email resmi <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a>.</p>
    </section>
    `;
  } else if (routePath.startsWith("/sektor-bumn/")) {
    const slug = routePath.replace("/sektor-bumn/", "");
    const sector = SECTOR_DATA_MAP[slug];
    if (sector) {
      const challengesHtml = sector.keyChallenges
        .map(
          (c, idx) => `
        <article style="margin-bottom: 1.5rem;">
          <h3>${idx + 1}. ${cleanProhibitedDashes(c.title)}</h3>
          <p>${cleanProhibitedDashes(c.description)}</p>
        </article>`
        )
        .join("\n");

      const matrixRows = sector.regulatoryAlignment
        .map(
          (m) => `
        <tr>
          <td style="padding: 0.75rem; border: 1px solid #334155;"><strong>${cleanProhibitedDashes(m.sk5Requirement)}</strong></td>
          <td style="padding: 0.75rem; border: 1px solid #334155;">${cleanProhibitedDashes(m.sectorRegulation)}</td>
          <td style="padding: 0.75rem; border: 1px solid #334155;">${cleanProhibitedDashes(m.challenge)}</td>
          <td style="padding: 0.75rem; border: 1px solid #334155; color: #93c5fd;">${cleanProhibitedDashes(m.solutionByDsi)}</td>
        </tr>`
        )
        .join("\n");

      const rcmCards = sector.rcmBlueprints
        .map(
          (r, idx) => `
        <div style="background: #0f172a; padding: 1.25rem; border: 1px solid #1e293b; border-radius: 8px; margin-bottom: 1rem;">
          <h4>Blueprint #${idx + 1}: ${cleanProhibitedDashes(r.processName)} (Frekuensi: ${cleanProhibitedDashes(r.frequency)})</h4>
          <p><strong>Risiko Finansial:</strong> ${cleanProhibitedDashes(r.financialRisk)}</p>
          <p><strong>Aktivitas Kontrol:</strong> ${cleanProhibitedDashes(r.keyControl)}</p>
          <p><strong>Metode Uji TOE:</strong> ${cleanProhibitedDashes(r.testingMethod)}</p>
        </div>`
        )
        .join("\n");

      specificContent = `
      <section>
        <h2>Ringkasan Eksekutif: Pengendalian Internal Sektor ${cleanProhibitedDashes(sector.shortTitle)}</h2>
        <p>${cleanProhibitedDashes(sector.executiveSummary)}</p>
        
        <h2>Titik Kritis & Tantangan Kepatuhan</h2>
        ${challengesHtml}

        <h2>Matriks Harmonisasi SK-5 dan Regulasi Sektoral</h2>
        <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 1rem; width: 100%; border: 1px solid #334155;">
          <thead>
            <tr style="background: #1e293b;">
              <th>Mandat SK-5 BUMN</th>
              <th>Regulasi Sektor</th>
              <th>Tantangan Lapangan</th>
              <th>Solusi Daya Solusi Integra</th>
            </tr>
          </thead>
          <tbody>
            ${matrixRows}
          </tbody>
        </table>

        <h2 style="margin-top: 2rem;">Contoh Arsitektur RCM (Risk and Control Matrix)</h2>
        ${rcmCards}

        <p><a href="/kalkulator-sampel-toe">Gunakan Kalkulator Sampel TOE Tabel 22</a> | <a href="/regulasi">Pelajari Pusat Regulasi BUMN</a></p>
      </section>
      `;
    }
  }

  // Tambahkan FAQ bila tersedia
  const faqs = ROUTE_FAQS[routePath];
  let faqContent = "";
  if (faqs && faqs.length > 0) {
    const faqList = faqs
      .map(
        (f) => `
        <details style="margin-bottom: 1rem;">
          <summary><strong>${cleanProhibitedDashes(f.question)}</strong></summary>
          <p>${cleanProhibitedDashes(f.answer)}</p>
        </details>`
      )
      .join("\n");

    faqContent = `
    <section style="margin-top: 2rem;">
      <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
      ${faqList}
    </section>
    `;
  }

  return `
    <header style="padding: 1.5rem; border-bottom: 1px solid #1e293b;">
      <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem;">
        ${breadcrumbLinks}
      </nav>
      <div style="font-size: 0.75rem; text-transform: uppercase; color: #cca43b; font-weight: bold;">
        PT Daya Solusi Integra : Solusi GRC &amp; Kepatuhan Regulasi BUMN
      </div>
    </header>

    <main style="max-width: 900px; margin: 2rem auto; padding: 0 1.5rem;">
      <h1>${pageTitle}</h1>
      <p style="font-size: 1.125rem; line-height: 1.7; color: #94a3b8;">${pageDesc}</p>

      ${specificContent}

      ${faqContent}

      <div style="margin-top: 3rem; padding: 1.5rem; background: #0f172a; border: 1px solid #1e293b; border-radius: 8px;">
        <h3>Konsultasi Kepatuhan &amp; Demo GRC Integra</h3>
        <p>Hubungi konsultan senior Daya Solusi Integra untuk konsultasi implementasi ICOFR BUMN, audit ITGC, atau otomasi software GRC Integra.</p>
        <p><strong>Surel:</strong> <a href="mailto:marketing@dsintegra.co.id">marketing@dsintegra.co.id</a> | <strong>Situs Resmi:</strong> <a href="https://dsintegra.co.id/">https://dsintegra.co.id</a></p>
      </div>
    </main>

    <footer style="padding: 2rem 1.5rem; border-top: 1px solid #1e293b; text-align: center; font-size: 0.875rem; color: #64748b;">
      <p>&copy; 2026 PT Daya Solusi Integra. Hak Cipta Dilindungi Undang-Undang.</p>
      <p>Jakarta Selatan, DKI Jakarta, Indonesia | Domain Resmi: https://dsintegra.co.id</p>
    </footer>
  `;
}