import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  ArrowRight, 
  Award, 
  FileText, 
  Layers, 
  ChevronRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import Breadcrumbs from '../Breadcrumbs';

interface CaseStudiesPageProps {
  onNavigate?: (path: string) => void;
}

interface MetricHighlight {
  label: string;
  value: string;
  sublabel: string;
}

interface CaseStudyItem {
  id: string;
  sector: 'holding' | 'perbankan' | 'infrastruktur';
  sectorLabel: string;
  clientBadge: string;
  title: string;
  synopsis: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  metrics: MetricHighlight[];
  publishedDate: string;
  featuredArticleUrl?: string;
  featuredArticleText?: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'holding-multisektor-wtp',
    sector: 'holding',
    sectorLabel: 'Holding BUMN Multisektor',
    clientBadge: 'Aset Konsolidasi > Rp 50 Triliun (Anonim)',
    title: 'Eliminasi 42 Defisiensi Pengendalian Menuju Opini WTP Tanpa Catatan Auditor Eksternal',
    synopsis: 'Transformasi tata kelola pengendalian pelaporan keuangan pada induk holding dan 8 anak perusahaan, menstandarisasi 120 proses bisnis, dan memangkas waktu rekonsiliasi antar-entitas.',
    challenge: 'Pemeriksaan BPKP dan KAP mengidentifikasi 42 defisiensi signifikan terkait saldo akun antar-perusahaan (intercompany), pengujian sampel TOE yang tidak seragam, dan keterlambatan asersi Lini 2 akibat pelaporan berbasis spreadsheet.',
    solution: 'Penyelarasan Risk and Control Matrix (RCM) multi-entitas berbasis 5 pilar COSO 2013, otomatisasi perhitungan sampel normatif Tabel 22 SK-5/DKU.MBU/11/2024, dan penerapan repositori digital audit trail Lini 2 GRC Integra.',
    keyOutcomes: [
      'Eliminasi 100% dari 42 defisiensi signifikan pada audit tahun buku berikutnya',
      'Penyelesaian asersi Direksi H-14 sebelum batas akhir pelaporan Kementerian BUMN',
      'Standarisasi kertas kerja TOE pada 8 entitas anak holding tanpa deviasi metodologi'
    ],
    metrics: [
      { label: 'Defisiensi Pengendalian', value: '42 -> 0', sublabel: 'Temuan Signifikan Tuntas' },
      { label: 'Siklus Pengujian TOE', value: '-70%', sublabel: 'Dari 90 Menjadi 24 Hari' },
      { label: 'Kepatuhan SK-5', value: '100%', sublabel: 'Asersi Tepat Waktu' }
    ],
    publishedDate: '2025-01-15',
    featuredArticleUrl: '/blog/studi-kasus-icofr-holding-bumn-wtp',
    featuredArticleText: 'Baca Laporan Lengkap Studi Kasus Holding BUMN'
  },
  {
    id: 'perbankan-bumn-itgc-corebanking',
    sector: 'perbankan',
    sectorLabel: 'Perbankan & Lembaga Keuangan',
    clientBadge: 'Bank BUMN / BPD Tier-1 (Anonim)',
    title: 'Harmonisasi ITGC Core Banking dan Validasi CKPN PSAK 71 Berbasis POJK & SK-5',
    synopsis: 'Penyelarasan kontrol umum teknologi informasi (ITGC) dan pengendalian otomatis aplikasi pada sistem perbankan inti untuk menjamin integritas estimasi cadangan kerugian penurunan nilai.',
    challenge: 'Tingginya kompleksitas integrasi antara sistem core banking, modul treasury, dan perhitungan CKPN PSAK 71. Auditor eksternal menyoroti lemahnya segregasi tugas (SoD) dan jejak audit perubahan parameter suku bunga kredit.',
    solution: 'Implementasi automated control testing untuk ITGC hak akses pengguna dan manajemen perubahan, penyusunan automated control matrix untuk batch run perhitungan CKPN, serta asersi kepatuhan berjenjang Lini 1 hingga Direktur Kepatuhan.',
    keyOutcomes: [
      'Nol temuan audit material pada perimeter ITGC Core Banking oleh OJK dan KAP',
      'Validasi otomatis parameter CKPN PSAK 71 mencakup 100% populasi portofolio kredit',
      'Mitigasi risiko segregasi tugas (SoD conflict) pada level database dan sistem operasi'
    ],
    metrics: [
      { label: 'Temuan ITGC Material', value: '0 Temuan', sublabel: 'Audit KAP & OJK Bersih' },
      { label: 'Waktu Rekonsiliasi CKPN', value: '4 Jam', sublabel: 'Sebelumnya 3 Hari Kerja' },
      { label: 'Cakupan Otomasi Kontrol', value: '88%', sublabel: 'Preventive & Detective' }
    ],
    publishedDate: '2025-02-10'
  },
  {
    id: 'bumn-karya-infrastruktur-psak72',
    sector: 'infrastruktur',
    sectorLabel: 'Infrastruktur & Konstruksi Karya',
    clientBadge: 'BUMN Konstruksi Nasional (Anonim)',
    title: 'Pengendalian Pengakuan Pendapatan PSAK 72 dan Verifikasi Tagihan Subkontraktor Proyek',
    synopsis: 'Restrukturisasi tata kelola pengakuan pendapatan berbasis persentase penyelesaian (percentage of completion) dan pengetatan verifikasi opname fisik lapangan untuk mencegah deviasi biaya proyek.',
    challenge: 'Potensi selisih antara pencatatan akuntansi progres proyek dengan fisik lapangan, risiko keterlambatan sertifikasi progres oleh pemilik proyek (owner), serta beban administrasi verifikasi ratusan dokumen vendor subkontraktor.',
    solution: 'Integrasi matriks pengendalian proyek berbasis BPMN 2.0 Lampiran 3 SK-5, penetapan batas toleransi deviasi estimasi biaya penyelesaian (EAC), dan protokol validasi Lini 2 sebelum pengakuan milestone pendapatan.',
    keyOutcomes: [
      'Penyelarasan 100% pengakuan progres pendapatan dengan berita acara opname fisik terverifikasi',
      'Pencegahan potensi beban tak tertagih melalui pengetatan klausul asersi Lini 1 project manager',
      'Kesiapan kertas kerja audit LKPP dan BPKP dengan jejak dokumen digital terenkripsi'
    ],
    metrics: [
      { label: 'Deviasi Progres Fisik-Buku', value: '< 1%', sublabel: 'Akurasi Persentase Proyek' },
      { label: 'Verifikasi Invoice Subkon', value: '5 Hari', sublabel: 'Dari Rata-Rata 18 Hari' },
      { label: 'Kepatuhan Regulasi KAK', value: '100%', sublabel: 'Standar LKPP & BUMN' }
    ],
    publishedDate: '2025-03-01'
  }
];

export default function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
  const [activeSector, setActiveSector] = useState<'all' | 'holding' | 'perbankan' | 'infrastruktur'>('all');

  const filteredStudies = activeSector === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(item => item.sector === activeSector);

  // Structured Data JSON-LD
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Studi Kasus & Benchmark Kinerja ICOFR BUMN : Daya Solusi Integra',
    description: 'Kumpulan studi kasus implementasi ICOFR BUMN, eliminasi defisiensi audit, efisiensi waktu TOE, dan kesiapan asersi direksi sesuai SK-5/DKU.MBU/11/2024.',
    url: 'https://dsintegra.co.id/studi-kasus',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Daya Solusi Integra',
      url: 'https://dsintegra.co.id'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: CASE_STUDIES.map((study, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CaseStudy',
          name: study.title,
          description: study.synopsis,
          datePublished: study.publishedDate,
          provider: {
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
      {/* JSON-LD Injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Breadcrumbs items={[{ label: 'Studi Kasus & Benchmark Kinerja BUMN' }]} onNavigate={onNavigate} />

        {/* Hero Section */}
        <section className="mt-8 mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#cca43b]/40 bg-[#cca43b]/10 text-[#cca43b] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Rekam Jejak Kepatuhan Terverifikasi
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Studi Kasus & Benchmark Kinerja ICOFR BUMN
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Pelajari bagaimana implementasi metodologi terstruktur SK-5/DKU.MBU/11/2024 dan platform GRC Integra membantu dewan direksi, komite audit, dan Satuan Pengawasan Intern (SPI) mentransformasi tata kelola pengendalian intern: dari remedi defisiensi temuan auditor hingga efisiensi operasional audit tahunan.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-6">
            <span className="flex items-center gap-2 text-slate-300">
              <Lock className="w-4 h-4 text-[#cca43b]" />
              Identitas Klien Dilindungi Ketentuan NDA
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sesuai Metodologi Standar BPKP & KAP
            </span>
          </div>
        </section>

        {/* Aggregated Performance Scoreboard */}
        <section className="mb-20">
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#cca43b]" />
                  Agregat Benchmark Dampak Implementasi
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Rata-rata peningkatan efisiensi dan kepatuhan dari entitas BUMN yang didampingi Daya Solusi Integra.
                </p>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                Basis Data: Periode Tahun Buku 2024 : 2025
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1">
                  100%
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  Tuntas Defisiensi
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seluruh temuan signifikan auditor eksternal terselesaikan sebelum periode tutup buku.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black text-[#cca43b] mb-1">
                  -70%
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  Durasi Siklus TOE
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Penghematan waktu pengujian efektivitas kontrol Tabel 22 menggunakan kalkulator otomatis.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black text-blue-400 mb-1">
                  H-14
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  Asersi Direksi
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Penyelesaian pernyataan efektivitas pengendalian sebelum batas akhir regulasi Kementerian BUMN.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  0 Sanksi
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  Keterlambatan Pelaporan
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Kepatuhan formal penuh terhadap Peraturan Menteri BUMN PER-2/MBU/03/2023.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectoral Filter */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
              Filter Sektor:
            </span>
            <button
              onClick={() => setActiveSector('all')}
              className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                activeSector === 'all'
                  ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                  : 'bg-[#0f172a] text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Semua Sektor ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveSector('holding')}
              className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                activeSector === 'holding'
                  ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                  : 'bg-[#0f172a] text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Holding Multisektor
            </button>
            <button
              onClick={() => setActiveSector('perbankan')}
              className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                activeSector === 'perbankan'
                  ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                  : 'bg-[#0f172a] text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Perbankan & Keuangan
            </button>
            <button
              onClick={() => setActiveSector('infrastruktur')}
              className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                activeSector === 'infrastruktur'
                  ? 'bg-[#0b4596] text-white border border-[#0b4596]'
                  : 'bg-[#0f172a] text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Infrastruktur & Karya
            </button>
          </div>
        </section>

        {/* Case Studies Ledger */}
        <section className="space-y-10 mb-20">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-10 transition-all hover:border-slate-700"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#0b4596]/20 text-blue-300 border border-[#0b4596]/40">
                    {study.sectorLabel}
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {study.clientBadge}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Dipublikasikan: {study.publishedDate}
                </div>
              </div>

              {/* Title & Synopsis */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {study.title}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                {study.synopsis}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 rounded-lg bg-[#0b0f19] border border-slate-800/80">
                {study.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center sm:text-left">
                    <div className="text-xs text-slate-400 font-medium mb-1">
                      {m.label}
                    </div>
                    <div className="text-2xl font-bold text-[#cca43b] mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500">
                      {m.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-slate-800/80">
                <div>
                  <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Tantangan Pengendalian Awal
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Solusi Metodologi & Platform GRC
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="mb-6 pt-6 border-t border-slate-800/80">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
                  Hasil & Dampak Audit Konkret:
                </h3>
                <ul className="space-y-2">
                  {study.keyOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read Full Case Study Link (if exists) */}
              {study.featuredArticleUrl && (
                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <a
                    href={study.featuredArticleUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#cca43b] hover:text-[#e5bf55] transition-colors"
                  >
                    <span>{study.featuredArticleText || 'Baca Studi Kasus Mendalam'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </section>

        {/* Consultation CTA Banner */}
        <section className="bg-gradient-to-r from-[#0b1b36] to-[#0f172a] border border-[#0b4596]/60 rounded-xl p-8 sm:p-12 mb-20 text-center max-w-4xl mx-auto">
          <Building2 className="w-10 h-10 text-[#cca43b] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ingin Mengukur Kesiapan ICOFR Organisasi Anda?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Jadwalkan sesi evaluasi awal dengan konsultan Daya Solusi Integra untuk memetakan kesiapan kepatuhan SK-5/DKU.MBU/11/2024, mengkaji ulang Risk and Control Matrix (RCM), atau merencanakan otomasi siklus pengujian TOE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:marketing@dsintegra.co.id?subject=Permintaan%20Sesi%20Diskusi%20Studi%20Kasus%20ICOFR%20BUMN"
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#0b4596] hover:bg-[#0d54b8] text-white font-semibold text-sm transition-colors text-center"
            >
              Hubungi Tim Konsultan BUMN
            </a>
            <a
              href="/toolkit-regulasi"
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#0f172a] border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-sm transition-colors text-center"
            >
              Unduh Kertas Kerja SK-5
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
