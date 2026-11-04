import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve(process.cwd(), 'src');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const INDEX_CSS = path.resolve(SRC_DIR, 'index.css');

const BANNED_PATTERNS = [
  { name: 'Sparkles Icon / Gimmick', regex: /\bSparkles\b/ },
  { name: 'Cosmetic animate-pulse', regex: /\banimate-pulse\b/ },
  { name: 'Em-dash / En-dash character', regex: /[—–]/ },
  { name: 'Fake Glassmorphism (backdrop-blur)', regex: /\bbackdrop-blur(?:-[a-z0-9]+)?\b/ },
  { name: 'Dark Hover on Light Canvas', regex: /\bhover:bg-slate-(?:800|850|900|950)\b/ },
  { name: 'White Text Hover on Light Canvas', regex: /\bhover:text-white\b/ }
];

const BANNED_CSS_PATTERNS = [
  { 
    name: 'Hardcoded BUMN Blue Hex in CSS (Gunakan var(--color-bumn-blue))', 
    regex: /(?<!var\(--color-bumn-blue\)\s*)#0b4596\b/i 
  }
];

const BANNED_PUBLIC_PATTERNS = [
  { name: 'Em-dash / En-dash character', regex: /[—–]/ },
  { name: 'Speculative Foreign Currency (USD) in Domestic BUMN scope', regex: /\bUSD\b|\$\s*\d+/i }
];

function getAllFiles(dirPath: string, extensions: string[]): string[] {
  let files: string[] = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (entry.isFile() && extensions.some((ext) => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

function runLintTaste() {
  const targetFiles = getAllFiles(SRC_DIR, ['.tsx', '.ts']);
  let violationCount = 0;

  console.log(`🔍 Menjalankan Taste Linting (Anti-Slop & Light Corporate) pada ${targetFiles.length} berkas...`);

  for (const filePath of targetFiles) {
    const relativePath = path.relative(process.cwd(), filePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      for (const pattern of BANNED_PATTERNS) {
        if (pattern.regex.test(line)) {
          // Abaikan pengecualian jika ada komentar lint-ignore eksplisit
          if (line.includes('// taste-ignore')) return;

          console.error(
            `❌ [${pattern.name}] di ${relativePath}:${index + 1}\n   ${line.trim()}`
          );
          violationCount++;
        }
      }
    });
  }

  if (violationCount > 0) {
    console.error(`\n❌ Ditemukan ${violationCount} pelanggaran aturan desain frontend (Anti-Slop / Light Corporate).`);
    process.exit(1);
  } else {
    // Audit berkas markdown & teks pada direktori public
    const publicFiles = fs.existsSync(PUBLIC_DIR) ? getAllFiles(PUBLIC_DIR, ['.md', '.txt']) : [];
    for (const filePath of publicFiles) {
      const relativePath = path.relative(process.cwd(), filePath);
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        for (const pattern of BANNED_PUBLIC_PATTERNS) {
          if (pattern.regex.test(line)) {
            if (line.includes('// taste-ignore')) return;
            console.error(
              `❌ [${pattern.name}] di ${relativePath}:${index + 1}\n   ${line.trim()}`
            );
            violationCount++;
          }
        }
      });
    }

    // Audit CSS rules (melarang penggunaan hardcoded hex di luar deklarasi @theme)
    if (fs.existsSync(INDEX_CSS)) {
      const cssContent = fs.readFileSync(INDEX_CSS, 'utf-8');
      const lines = cssContent.split('\n');
      let inThemeBlock = false;

      lines.forEach((line, index) => {
        if (line.includes('@theme')) inThemeBlock = true;
        if (inThemeBlock && line.includes('}')) inThemeBlock = false;

        if (!inThemeBlock) {
          for (const pattern of BANNED_CSS_PATTERNS) {
            if (pattern.regex.test(line)) {
              if (line.includes('/* taste-ignore */')) return;
              console.error(
                `❌ [${pattern.name}] di src/index.css:${index + 1}\n   ${line.trim()}`
              );
              violationCount++;
            }
          }
        }
      });
    }

    if (violationCount > 0) {
      console.error(`\n❌ Ditemukan ${violationCount} pelanggaran aturan konten publik / CSS tokenization.`);
      process.exit(1);
    }

    console.log('✅ Semua berkas frontend dan materi publik bersih dari pola slop, em-dash, dan valuta asing terlarang (0 pelanggaran).');
    process.exit(0);
  }
}

runLintTaste();
