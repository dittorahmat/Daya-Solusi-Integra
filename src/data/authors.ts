export interface AuthorProfile {
  id: string;
  name: string;
  fullNameWithCredentials: string;
  credentials: string[];
  role: string;
  organization: string;
  avatar: string;
  headline: string;
  bioSummary: string;
  trackRecordHighlights: string[];
  committees: string[];
  previousLeadership: string[];
  education: string[];
  sameAs: string[];
  profileUrl: string;
}

export const HUMBUL_KRISTIAWAN: AuthorProfile = {
  id: "humbul-kristiawan",
  name: "Humbul Kristiawan",
  fullNameWithCredentials: "Humbul Kristiawan, SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP",
  credentials: [
    "Chartered Accountant (CA)",
    "Certified Internal Auditor (CIA)",
    "Certified Internal Control Auditor (CICA)",
    "Certified GRC Professional (GRCP)",
    "Certified in Audit Committee Practices (CACP)",
    "Register Akuntan Negara (Kemenkeu RI No. D-20.117)"
  ],
  role: "Principal Partner & Senior GRC Advisor",
  organization: "Daya Solusi Integra",
  avatar: "/images/authors/humbul-kristiawan.jpg",
  headline: "Mantan Equity Partner Deloitte SEA & Partner RSM Consulting dengan 25+ Tahun Pengalaman Kepatuhan & ICOFR BUMN",
  bioSummary: "Humbul Kristiawan adalah praktisi tata kelola korporasi, asersi pengendalian internal pelaporan keuangan (ICOFR), dan manajemen risiko terintegrasi dengan pengalaman lebih dari seperempat abad di sektor publik dan korporasi terkemuka Indonesia. Beliau memimpin berbagai penugasan strategis implementasi ICOFR, perancangan Risk & Control Matrix (RCM), dan kesiapan audit sistem TI.",
  trackRecordHighlights: [
    "Engagement Partner implementasi ICOFR di PT Pertamina (Persero) beserta 9 anak perusahaan",
    "Engagement Partner review ICOFR & Enterprise Risk Management di PT Telekomunikasi Indonesia Tbk",
    "Pengujian SOX / ICFR di PT Indosat Tbk dan perbaikan proses bisnis telekomunikasi",
    "Penyusunan Pedoman & Manual Audit Internal untuk BPK RI, Bank Rakyat Indonesia, dan Bank Danamon",
    "Pengembangan kerangka kerja manajemen risiko untuk Lembaga Penjamin Simpanan (LPS) dan BTN"
  ],
  committees: [
    "Anggota Komite Pemantau Risiko PT Pegadaian (2020:sekarang)",
    "Anggota Komite Audit PT Bank UOB Indonesia (2021:sekarang)",
    "Anggota Komite Tata Kelola Terintegrasi Bank bjb (2022:sekarang)"
  ],
  previousLeadership: [
    "Equity Partner: Deloitte South East Asia (Business & Risk Consulting)",
    "Partner & Government Sector Leader: RSM AAJ Consulting",
    "Risk Manager: Citibank N.A.",
    "Associate Manager: Ernst & Young (Business & Risk Services)"
  ],
  education: [
    "Sarjana Ekonomi, Akuntan (SE, Ak.): Universitas Padjadjaran, Bandung",
    "Master of Business Administration (MBA): SBM Institut Teknologi Bandung"
  ],
  sameAs: [
    "https://www.linkedin.com/in/humbul-kristiawan-b0621360/",
    "https://humbulkristiawan.com/about-humbul/",
    "https://humbulkristiawan.com/"
  ],
  profileUrl: "/penulis/humbul-kristiawan"
};

export const AUTHORS_REGISTRY: Record<string, AuthorProfile> = {
  "humbul-kristiawan": HUMBUL_KRISTIAWAN,
  "humbul kristiawan": HUMBUL_KRISTIAWAN,
  "tim konsultan daya solusi integra": HUMBUL_KRISTIAWAN,
  "tim redaksi daya solusi integra": HUMBUL_KRISTIAWAN,
  "default": HUMBUL_KRISTIAWAN
};

export function getAuthorProfile(identifier?: string): AuthorProfile {
  if (!identifier) return HUMBUL_KRISTIAWAN;
  const key = identifier.toLowerCase().trim();
  return AUTHORS_REGISTRY[key] || HUMBUL_KRISTIAWAN;
}
