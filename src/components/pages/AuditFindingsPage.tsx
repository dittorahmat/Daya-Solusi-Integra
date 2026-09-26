import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  FileCheck2, 
  ShieldAlert, 
  Layers, 
  Search, 
  ArrowRight, 
  BookOpen,
  Scale,
  ShieldCheck,
  Server,
  Lock,
  Building2,
  FileSpreadsheet
} from 'lucide-react';
import Breadcrumbs from '../Breadcrumbs';

interface AuditFindingItem {
  id: string;
  category: 'financial' | 'itgc' | 'operational';
  categoryLabel: string;
  deficiencyLevel: 'Significant Deficiency' | 'Control Deficiency';
  title: string;
  affectedAccounts: string;
  rootCause: string;
  financialRisk: string;
  correctiveActionPlan: string;
  sk5Reference: string;
}

const AUDIT_FINDINGS_DATA: AuditFindingItem[] = [
  {
    id: 'intercompany-balancing-discrepancy',
    category: 'financial',
    categoryLabel: 'Finansial & Pelaporan Akuntansi',
    deficiencyLevel: 'Significant Deficiency',
    title: 'Selisih Saldo Akun Antar-Perusahaan (Intercompany) yang Tidak Terekonsiliasi Saat Penutupan Buku',
    affectedAccounts: 'Piutang/Utang Usaha Antar-Entitas, Pendapatan/Beban Manajemen Holding',
    rootCause: 'Ketiadaan jadwal rekonsiliasi periodik yang seragam antara induk holding dan anak perusahaan serta perbedaan cut-off transaksi pengakuan faktur.',
    financialRisk: 'Salah saji material saldo eliminasi konsolidasian dan keterlambatan penerbitan laporan keuangan tahunan audited.',
    correctiveActionPlan: 'Tetapkan kebijakan rekonsiliasi intercompany bulanan dengan toleransi selisih nol sebelum tanggal tutup buku (H-5) dan terapkan repositori konfirmasi saldo terpusat pada platform GRC Integra.',
    sk5Reference: 'Lampiran 2 SK-5 (Scoping & Rekonsiliasi Akun Signifikan)'
  },
  {
    id: 'sod-conflict-erp-database',
    category: 'itgc',
    categoryLabel: 'ITGC & Keamanan Sistem',
    deficiencyLevel: 'Significant Deficiency',
    title: 'Konflik Segregasi Tugas (Segregation of Duties / SoD) pada Sistem ERP dan Akses Database Finansial',
    affectedAccounts: 'Seluruh Akun Buku Besar (General Ledger), Kas dan Setara Kas, Pembelian',
    rootCause: 'Pemberian profil hak akses superuser (SAP All / Administrator) kepada staf operasional akuntansi dan ketiadaan pemantauan berkala log perubahan langsung di database.',
    financialRisk: 'Potensi manipulasi entri jurnal manual tanpa otorisasi berjenjang yang tidak terdeteksi oleh pengendalian pencegahan (preventive control).',
    correctiveActionPlan: 'Lakukan audit matriks peran pengguna (User Role Matrix), cabut akses ganda pembuat dan penyetuju (maker-checker), serta aktifkan database activity monitoring independen.',
    sk5Reference: 'POJK No. 11/2022 & Lampiran 5 SK-5 (IT General Controls)'
  },
  {
    id: 'psak72-revenue-recognition-deviation',
    category: 'financial',
    categoryLabel: 'Finansial & Pelaporan Akuntansi',
    deficiencyLevel: 'Significant Deficiency',
    title: 'Deviasi Pengakuan Pendapatan Konstruksi Persentase Penyelesaian PSAK 72 Tanpa Berita Acara Opname Fisik',
    affectedAccounts: 'Pendapatan Kontrak Konstruksi, Piutang Retensi, Aset Kontrak',
    rootCause: 'Estimasi total biaya penyelesaian proyek (Estimate at Completion / EAC) tidak diperbarui secara kuartalan dan pengakuan progres hanya mengandalkan estimasi internal manajer proyek.',
    financialRisk: 'Pengakuan pendapatan terlalu dini (premature revenue recognition) yang berisiko pembalikan saldo (reversal) signifikan pada periode berikutnya.',
    correctiveActionPlan: 'Wajibkan verifikasi tiga pihak (Project Manager, Finance Lini 2, dan Konsultan Pengawas) atas berita acara kemajuan fisik sebelum pengakuan persentase progres di sistem akuntansi.',
    sk5Reference: 'PSAK 72 & Lampiran 4 SK-5 (Walkthrough Siklus Pendapatan Proyek)'
  },
  {
    id: 'itac-tested-without-itgc-assurance',
    category: 'itgc',
    categoryLabel: 'ITGC & Keamanan Sistem',
    deficiencyLevel: 'Control Deficiency',
    title: 'Pengujian Kontrol Otomatis Sistem (ITAC) Mengandalkan Test of One Tanpa Bukti Kesiapan ITGC yang Memadai',
    affectedAccounts: 'Perhitungan Bunga Kredit, Amortisasi CKPN PSAK 71, Depresiasi Otomatis Aset Tetap',
    rootCause: 'Tim penguji Lini 2 menguji kontrol aplikasi otomatis hanya dengan 1 sampel transaksi tanpa terlebih dahulu memastikan pengujian change management dan kontrol akses sistem telah efektif.',
    financialRisk: 'Logika perhitungan otomatis dapat berubah sewaktu-waktu di tengah periode laporan tanpa terpantau, sehingga hasil pengujian Test of One menjadi tidak valid.',
    correctiveActionPlan: 'Selesaikan pengujian ITGC terlebih dahulu sebelum menetapkan strategi pengujian Test of One untuk kontrol otomatis (ITAC); jika ITGC belum teruji efektif, lakukan perluasan sampel pengujian substantif.',
    sk5Reference: 'Lampiran 6 SK-5 (Pengujian IT Application Controls & ITGC Baseline)'
  },
  {
    id: 'unnormative-toe-sample-sizing',
    category: 'operational',
    categoryLabel: 'Operasional & Tata Kelola',
    deficiencyLevel: 'Control Deficiency',
    title: 'Penentuan Ukuran Sampel Pengujian Efektivitas Operasional (TOE) di Bawah Batas Minimum Normatif Tabel 22',
    affectedAccounts: 'Beban Operasional, Pembayaran Vendor, Rekonsiliasi Kas Harian',
    rootCause: 'Penguji kontrol menentukan ukuran sampel secara arbitrer (misal hanya 5 sampel untuk kontrol yang berjalan harian) tanpa justifikasi evaluasi risiko yang memadai.',
    financialRisk: 'Kertas kerja pengujian ditolak oleh auditor eksternal (BPK/BPKP/KAP) karena derajat keyakinan statistik audit tidak terpenuhi.',
    correctiveActionPlan: 'Adopsi secara ketat formula penentuan sampel Tabel 22 SK-5 (20 s.d. 40 sampel untuk kontrol harian) menggunakan kalkulator terstandarisasi untuk menjamin validitas audit trail.',
    sk5Reference: 'Tabel 22 SK-5/DKU.MBU/11/2024 (Ketentuan Normatif Sampel TOE)'
  },
  {
    id: 'outstanding-bank-reconciliation-items',
    category: 'financial',
    categoryLabel: 'Finansial & Pelaporan Akuntansi',
    deficiencyLevel: 'Control Deficiency',
    title: 'Item Rekonsiliasi Bank Menggantung Lebih dari 60 Hari Tanpa Tindak Lanjut Penelusuran',
    affectedAccounts: 'Kas di Bank, Pendapatan Jasa Giro, Biaya Administrasi Bank, Kas Dalam Perjalanan',
    rootCause: 'Aktivitas rekonsiliasi bank dilakukan sebagai formalitas akhir bulan tanpa adanya protokol eskalasi atas transaksi yang tidak cocok (unmatched transactions).',
    financialRisk: 'Potensi kerugian akibat fraud kas yang tersembunyi di balik pos penyesuaian sementara dan salah saji posisi likuiditas riil entitas.',
    correctiveActionPlan: 'Tetapkan Service Level Agreement (SLA) penuntasan item menggantung maksimal 14 hari kerja dan berlakukan review berkala oleh pejabat setingkat Manajer Keuangan Lini 2.',
    sk5Reference: 'Lampiran 7 SK-5 (Pengendalian Kas & Rekonsiliasi Perbankan)'
  },
  {
    id: 'subcontractor-verification-documentation-gap',
    category: 'operational',
    categoryLabel: 'Operasional & Tata Kelola',
    deficiencyLevel: 'Significant Deficiency',
    title: 'Kelemahan Dokumentasi Pembuktian Serah Terima Pekerjaan Vendor Subkontraktor Sebelum Pembayaran Tagihan',
    affectedAccounts: 'Utang Usaha, Beban Pokok Pendapatan, Uang Muka Proyek',
    rootCause: 'Verifikasi invoice hanya mencocokkan purchase order dan faktur pajak tanpa melampirkan laporan verifikasi fisik lapangan yang ditandatangani pengawas independen.',
    financialRisk: 'Risiko kelebihan pembayaran (overpayment), tagihan fiktif, atau sanksi pemeriksaan kepatuhan pengadaan barang dan jasa negara.',
    correctiveActionPlan: 'Terapkan prosedur Three-Way Matching ketat berbasis sistem (PO, BAST Fisik Terverifikasi, Invoice) dan integrasikan kontrol persetujuan bertingkat sebelum proses kas keluar.',
    sk5Reference: 'PER-2/MBU/03/2023 & Lampiran 8 SK-5 (Pengendalian Pengadaan & Vendor)'
  },
  {
    id: 'delayed-management-assertion-signoff',
    category: 'operational',
    categoryLabel: 'Operasional & Tata Kelola',
    deficiencyLevel: 'Control Deficiency',
    title: 'Keterlambatan Konsolidasi Lembar Asersi Pengendalian Internal Direksi Menjelang RUPS Tahunan',
    affectedAccounts: 'Pelaporan Asersi Direksi dalam Laporan Tahunan (Annual Report)',
    rootCause: 'Pengumpulan kertas kerja deficiency sheet dari belasan unit bisnis dan anak perusahaan masih mengandalkan pertukaran email manual yang lambat dan rawan hilang.',
    financialRisk: 'Potensi pelanggaran batas waktu penyampaian laporan kepatuhan kepada Kementerian BUMN dan catatan negatif dalam laporan tata kelola.',
    correctiveActionPlan: 'Gunakan modul digital asersi pada platform GRC Integra yang menyajikan dashboard progres evaluasi defisiensi secara real-time dan tanda tangan digital terverifikasi QR Code.',
    sk5Reference: 'Lampiran 11 SK-5 (Tata Cara Penerbitan Surat Asersi Direksi)'
  }
];

interface AuditFindingsPageProps {
  onNavigate?: (path: string) => void;
}

export default function AuditFindingsPage({ onNavigate }: AuditFindingsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'financial' | 'itgc' | 'operational'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = AUDIT_FINDINGS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.affectedAccounts.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rootCause.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Katalog Temuan Defisiensi Audit ICOFR BUMN & Rekomendasi CAP : Daya Solusi Integra',
    description: 'Direktori komprehensif tipologi temuan audit pengendalian internal BUMN, risiko akun salah saji finansial, dan panduan Corrective Action Plan sesuai regulasi SK-5/DKU.MBU/11/2024.',
    url: 'https://dsintegra.co.id/temuan-audit-icofr',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Daya Solusi Integra',
      url: 'https://dsintegra.co.id'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: AUDIT_FINDINGS_DATA.map((finding, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Article',
          headline: finding.title,
          description: finding.financialRisk,
          articleSection: finding.categoryLabel,
          publisher: {
            '@type': 'Organization',
            name: 'PT Daya Solusi Integra',
            url: 'https://dsintegra.co.id'
          }
        }
      }))
    }
  };

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Breadcrumbs items={[{ label: 'Temuan Defisiensi Audit ICOFR BUMN' }]} onNavigate={onNavigate} />

        {/* Hero Section */}
        <section className="mt-8 mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            Katalog Remediasi Audit &amp; Kepatuhan BUMN
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Katalog Temuan Defisiensi Audit ICOFR BUMN &amp; Solusi CAP
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Panduan mitigasi dan Corrective Action Plan (CAP) resmi berbasis regulasi SK-5/DKU.MBU/11/2024 dan kerangka kerja COSO 2013: membedah akar masalah temuan auditor eksternal (BPK, BPKP, KAP), dampak salah saji laporan keuangan, dan rekomendasi perbaikan kontrol Lini 1 dan Lini 2.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-6">
            <span className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sesuai Standar Pemeriksaan SPKN &amp; IAPI
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <BookOpen className="w-4 h-4 text-[#cca43b]" />
              Rujukan Mandat SK-5/DKU.MBU/11/2024
            </span>
          </div>
        </section>

        {/* Search & Filter Controls */}
        <section className="mb-10 bg-[#0f172a] border border-slate-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Cari kata kunci temuan (misal: intercompany, SoD, PSAK 72, sampel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded bg-[#0b0f19] border border-slate-700 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#0b4596]"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                    : 'bg-[#0b0f19] text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                Semua ({AUDIT_FINDINGS_DATA.length})
              </button>
              <button
                onClick={() => setSelectedCategory('financial')}
                className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCategory === 'financial'
                    ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                    : 'bg-[#0b0f19] text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                Finansial &amp; Akuntansi
              </button>
              <button
                onClick={() => setSelectedCategory('itgc')}
                className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCategory === 'itgc'
                    ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                    : 'bg-[#0b0f19] text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                ITGC &amp; ERP
              </button>
              <button
                onClick={() => setSelectedCategory('operational')}
                className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCategory === 'operational'
                    ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                    : 'bg-[#0b0f19] text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                Operasional &amp; Tata Kelola
              </button>
            </div>
          </div>
        </section>

        {/* Findings Directory Cards */}
        <section className="space-y-8 mb-20">
          {filteredData.map((item, idx) => (
            <article
              key={item.id}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-slate-700 transition-colors"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#0b4596]/20 text-blue-300 border border-[#0b4596]/40">
                    {item.categoryLabel}
                  </span>
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded border ${
                      item.deficiencyLevel === 'Significant Deficiency'
                        ? 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                        : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                    }`}
                  >
                    {item.deficiencyLevel}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  {item.sk5Reference}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {idx + 1}. {item.title}
              </h2>

              {/* Affected Accounts */}
              <div className="mb-6 p-3 rounded bg-[#0b0f19] border border-slate-800 text-xs text-slate-300">
                <strong className="text-slate-200">Akun Finansial Terkait:</strong> {item.affectedAccounts}
              </div>

              {/* Root Cause & Financial Risk Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pt-4 border-t border-slate-800/80">
                <div>
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Akar Masalah Kontrol Internal
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.rootCause}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Dampak Risiko Salah Saji Keuangan
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.financialRisk}
                  </p>
                </div>
              </div>

              {/* Corrective Action Plan */}
              <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-800/40">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Rekomendasi Corrective Action Plan (CAP) SK-5
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {item.correctiveActionPlan}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Consultation Callout */}
        <section className="bg-gradient-to-r from-[#0b1b36] to-[#0f172a] border border-[#0b4596]/60 rounded-xl p-8 sm:p-12 mb-20 text-center max-w-4xl mx-auto">
          <Building2 className="w-10 h-10 text-[#cca43b] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Perlu Pendampingan Tindak Lanjut Temuan Audit BUMN?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Tim konsultan senior Daya Solusi Integra berpengalaman mendampingi penyusunan Corrective Action Plan (CAP), mediasi konfirmasi kertas kerja dengan KAP/BPKP, serta otomasi pengendalian pada platform GRC Integra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:marketing@dsintegra.co.id?subject=Konsultasi%20Remediasi%20Temuan%20Audit%20ICOFR%20BUMN"
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#0b4596] hover:bg-[#0d54b8] text-white font-semibold text-sm transition-colors text-center"
            >
              Konsultasi Remediasi Defisiensi
            </a>
            <a
              href="/toolkit-regulasi"
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#0f172a] border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-sm transition-colors text-center"
            >
              Unduh Format RCM &amp; TOE
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
