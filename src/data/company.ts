/**
 * Sumber kebenaran tunggal identitas kontak PT Daya Solusi Integra.
 * Seluruh permukaan (komponen, JSON-LD, SSG, llms) WAJIB membaca dari modul ini.
 * Lihat kapabilitas `nap-canonicalization` pada change tentang-kami-company-profile.
 */
export interface CompanyProfile {
  legalName: string;
  shortName: string;
  tagline: string;
  addressLines: string[];
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  phoneCanonical: string;
  phoneNote: string;
  email: string;
  hoursPrimary: string;
  hoursSecondary: string;
  website: string;
}

export const COMPANY_PROFILE: CompanyProfile = {
  legalName: "PT Daya Solusi Integra",
  shortName: "Daya Solusi Integra",
  tagline:
    "Mitra tepercaya BUMN dan industri perbankan dalam membangun integritas laporan keuangan, keandalan ITGC, dan sistem kepatuhan GRC terintegrasi.",
  addressLines: [
    "Indonesia Stock Exchange Tower 1",
    "Level 3. Unit 304",
    "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan",
    "DKI Jakarta 12910"
  ],
  streetAddress:
    "Indonesia Stock Exchange Tower 1, Level 3 Unit 304, Jl. Jend. Sudirman Kav. 52-53",
  addressLocality: "Jakarta Selatan",
  addressRegion: "DKI Jakarta",
  postalCode: "12910",
  addressCountry: "ID",
  phoneCanonical: "+62 852 8599 5234",
  phoneNote: "Corporate Whatsapp",
  email: "marketing@dsintegra.co.id",
  hoursPrimary: "Senin - Jumat: 08:30 - 17:30 WIB",
  hoursSecondary: "Sabtu, Minggu & Hari Libur Nasional: Tutup",
  website: "https://dsintegra.co.id"
};
