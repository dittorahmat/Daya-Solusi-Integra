import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Utilitas Mandiri Ekstraksi Teks PDF Regulasi BUMN & Dokumen Kebijakan
 * Penggunaan: npx tsx scripts/extract-pdf-toc.ts <path-to-pdf> [start-page] [end-page]
 */
async function main() {
  const args = process.argv.slice(2);
  const pdfPath = args[0] || "public/docs/sk-5-dku-mbu-11-2024-icofr-bumn.pdf";
  const startPage = args[1] ? parseInt(args[1], 10) : 1;
  const endPage = args[2] ? parseInt(args[2], 10) : 12;

  const resolvedPath = path.resolve(process.cwd(), pdfPath);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`File PDF tidak ditemukan: ${resolvedPath}`);
    process.exit(1);
  }

  console.log(`Membaca PDF: ${pdfPath} (Halaman ${startPage} s.d. ${endPage})...`);
  const pythonCmd = `python -c "import pypdf; r = pypdf.PdfReader(r'${resolvedPath}'); print('Total:', len(r.pages)); [print(f'=== Page {i+1} ===\\n', r.pages[i].extract_text()[:600]) for i in range(${startPage - 1}, min(${endPage}, len(r.pages)))]"`;
  try {
    const output = execSync(pythonCmd, { encoding: "utf-8" });
    console.log(output);
  } catch (err: any) {
    console.error("Gagal mengekstrak PDF via Python pypdf:", err.message);
  }
}

main().catch(console.error);
