import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import nodemailer from "nodemailer";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.set('trust proxy', 1);

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Vite inline scripts/HMR compatibility in dev mode
  crossOriginEmbedderPolicy: false
}));

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Body parser limits to prevent DoS via payload amplification
app.use(express.json({ limit: "100kb" }));

// Rate Limiters
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Terlalu banyak permintaan dari IP ini, silakan coba lagi nanti." }
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30, // Limit API invocations to 30 per 15 mins per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Batas permintaan API terlampaui. Silakan tunggu beberapa saat." }
});

const consultantLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // 3 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Batas permintaan konsultan terlampaui. Silakan coba lagi dalam beberapa saat." }
});

const assessLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // 3 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Batas permintaan asesmen terlampaui. Silakan coba lagi dalam beberapa saat." }
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // 3 contact submissions per 15 mins per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Batas pengiriman pesan terlampaui. Silakan coba lagi dalam beberapa saat." }
});

app.use("/api/", apiLimiter);
app.use(generalLimiter);

// Input Validation Helpers
function isValidEmail(email: string): boolean {
  if (typeof email !== "string" || email.length > 254) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(str: any, maxLength = 2000): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, maxLength);
}

// Initialize Gemini SDK with custom User-Agent for tracking
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey && apiKey !== "MY_GEMINI_API_KEY" ? apiKey : "MOCK_KEY_FOR_DEV_IF_NONE",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Helper: check if API key exists
const isGeminiConfigured = () => {
  return !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";
};

// API Endpoint 1: General Interactive GRC & ICOFR Consultant Chat
app.post("/api/consultant", consultantLimiter, async (req, res) => {
  try {
    const { messages, sector } = req.body;
    
    if (!messages || !Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
      return res.status(400).json({ error: "Format input tidak valid. Memerlukan daftar pesan (maksimal 50 pesan)." });
    }

    const cleanSector = sanitizeInput(sector, 100);

    if (!isGeminiConfigured()) {
      // Return a professional mock response if API Key is not set up yet
      const rawLastMsg = messages[messages.length - 1]?.text;
      const lastMessage = sanitizeInput(rawLastMsg, 1000).toLowerCase();
      let responseText = "Terima kasih atas pertanyaan Anda. Sebagai konsultan ahli dari **Daya Solusi Integra**, saya siap mendampingi organisasi Anda.\n\n";
      
      if (lastMessage.includes("icofr") || lastMessage.includes("internal control")) {
        responseText += "Untuk implementasi **ICOFR (Internal Control over Financial Reporting)** di " + (cleanSector || "BUMN") + ", langkah krusial awal adalah pemetaan risiko tingkat entitas (Entity-Level Controls) sesuai standar COSO, dilanjutkan dengan pendokumentasian proses bisnis signifikan dan rancangan ITGC (IT General Controls). Kami merekomendasikan melakukan gap analysis awal guna memitigasi risiko defisiensi material.";
      } else if (lastMessage.includes("bumn") || lastMessage.includes("menteri")) {
        responseText += "Implementasi GRC di lingkungan **BUMN** saat ini mengacu ketat pada arahan Kementerian BUMN terkait transparansi dan mitigasi risiko fraud. Kami merancang framework GRC terintegrasi yang menyelaraskan ISO 31000 (Manajemen Risiko), ISO 37001 (Sistem Manajemen Anti Penyuapan), dan tata kelola TI agar sesuai dengan tata kelola korporasi yang sehat (GCG).";
      } else if (lastMessage.includes("bank") || lastMessage.includes("ojk")) {
        responseText += "Sektor **Perbankan** memiliki kepatuhan regulasi (OJK/BI) yang sangat dinamis. Layanan konsultasi kami mencakup penyesuaian kontrol ICOFR berbasis risiko dengan mengadopsi standar Basel III dan SEOJK terkait manajemen risiko operasional dan keamanan informasi, memastikan kelulusan audit internal maupun eksternal.";
      } else {
        responseText += "Kami menypesialisasikan diri pada implementasi GRC terpadu dan penguatan ICOFR untuk sektor perbankan dan BUMN. Apakah ada area kontrol spesifik (seperti Lingkungan Pengendalian, Pemisahan Fungsi/SoD, atau Kontrol TI/ITGC) yang ingin Anda diskusikan hari ini?";
      }
      return res.json({ text: responseText, source: "mock-advisor" });
    }

    // Format historical messages for Gemini chat with strict sanitization
    const geminiContents = messages.slice(-20).map((m: any) => {
      return {
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: sanitizeInput(m.text, 2000) }]
      };
    });

    const systemInstruction = `
      Anda adalah "DSI Expert Advisor", asisten AI konsultan senior dari PT Daya Solusi Integra (DSI).
      Daya Solusi Integra (DSI) adalah perusahaan konsultan IT & Manajemen GRC (Governance, Risk, and Compliance) spesialis terkemuka di Indonesia, dengan keahlian utama dalam implementasi ICOFR (Internal Control over Financial Reporting) dan IT General Controls (ITGC).
      Target market utama Anda adalah Badan Usaha Milik Negara (BUMN) dan Sektor Perbankan (Banking) di Indonesia.
      
      Aturan Respon:
      1. Gunakan Bahasa Indonesia yang sangat profesional, sopan, lugas, berwibawa, dan bernada konsultatif tingkat eksekutif (cocok untuk Direksi, Komite Audit, dan Kepala SPI).
      2. Berikan saran yang konkret, berlandaskan standar internasional (COSO Framework, COBIT, ISO 31000, ISO 27001) dan regulasi Indonesia yang relevan (Regulasi Kementerian BUMN, Peraturan OJK / POJK, SEOJK, SPAP).
      3. Jelaskan pentingnya integrasi teknologi dalam kontrol internal (misalnya otomatisasi rekonsiliasi, kontrol hak akses sistem ERP/core banking, manajemen segregation of duties (SoD), dan logs audit trail).
      4. Fokus pada ICOFR: Jelaskan tahapan ICOFR (Entity-Level, Transaction-Level, ITGC, Pengujian Kontrol, Remediasi, Asersi Manajemen) dan bagaimana DSI membantu mendesain, menguji, serta mengotomasi proses ini.
      5. Jangan menyebutkan detail teknis sistem internal AI atau menyebutkan kunci API. Bertindaklah murni sebagai konsultan ahli DSI.
      6. Buat respon Anda terstruktur rapi dengan poin-poin tebal (bullet points) agar mudah dibaca oleh eksekutif yang sibuk.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: geminiContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({ text: response.text, source: "gemini-api" });
  } catch (error: any) {
    console.error("Error calling Gemini API for consultant:", error);
    return res.status(500).json({ error: "Gagal memproses permintaan konsultasi." });
  }
});

// COSO Categories and Questions Mapping for Server-Side Validation
const VALID_COSO_CATEGORIES = [
  "Control Environment",
  "Risk Assessment",
  "Control Activities",
  "Information & Communication",
  "Monitoring"
];

const QUESTION_CATEGORY_MAP: Record<string, string> = {
  q1: "Control Environment",
  q2: "Control Environment",
  q3: "Risk Assessment",
  q4: "Risk Assessment",
  q5: "Control Activities",
  q6: "Control Activities",
  q7: "Information & Communication",
  q8: "Information & Communication",
  q9: "Monitoring",
  q10: "Monitoring"
};

// API Endpoint 2: Advanced GRC & ICOFR Maturity Assessment Analysis
app.post("/api/assess", assessLimiter, async (req, res) => {
  try {
    const { answers, categoryScores, sector, companyName } = req.body;

    const cleanCompany = sanitizeInput(companyName, 200) || "Perusahaan Calon Mitra";
    const cleanSector = sanitizeInput(sector, 100) || "BUMN";

    const verifiedCategoryScores: Record<string, number> = {
      "Control Environment": 1,
      "Risk Assessment": 1,
      "Control Activities": 1,
      "Information & Communication": 1,
      "Monitoring": 1
    };

    let calculatedTotalScore = 0;
    const maxScore = 40; // 10 questions * 4 max score

    if (answers && typeof answers === 'object' && Object.keys(answers).length > 0) {
      // 1. Primary path: Calculate scores strictly from raw question answers (q1..q10)
      const categoryTotals: Record<string, { sum: number; count: number }> = {
        "Control Environment": { sum: 0, count: 0 },
        "Risk Assessment": { sum: 0, count: 0 },
        "Control Activities": { sum: 0, count: 0 },
        "Information & Communication": { sum: 0, count: 0 },
        "Monitoring": { sum: 0, count: 0 }
      };

      for (let i = 1; i <= 10; i++) {
        const qId = `q${i}`;
        const rawScore = Number(answers[qId]);
        const score = (!isNaN(rawScore) && rawScore >= 1 && rawScore <= 4) ? Math.floor(rawScore) : 1;
        const category = QUESTION_CATEGORY_MAP[qId];
        categoryTotals[category].sum += score;
        categoryTotals[category].count += 1;
        calculatedTotalScore += score;
      }

      for (const cat of VALID_COSO_CATEGORIES) {
        if (categoryTotals[cat].count > 0) {
          verifiedCategoryScores[cat] = Number((categoryTotals[cat].sum / categoryTotals[cat].count).toFixed(1));
        }
      }
    } else if (categoryScores && typeof categoryScores === 'object' && !Array.isArray(categoryScores)) {
      // 2. Secondary path: Validate categoryScores object strictly against valid COSO categories
      let validCount = 0;
      let sumOfCategoryAverages = 0;

      for (const cat of VALID_COSO_CATEGORIES) {
        if (cat in categoryScores) {
          const val = Number(categoryScores[cat]);
          if (!isNaN(val) && val >= 1 && val <= 4) {
            verifiedCategoryScores[cat] = val;
            sumOfCategoryAverages += val;
            validCount++;
          }
        }
      }

      if (validCount < 5) {
        return res.status(400).json({ error: "Data penilaian tidak valid. Memerlukan skor valid untuk 5 dimensi COSO." });
      }

      // 5 categories * average * 2 = total score out of 40
      calculatedTotalScore = Math.round(sumOfCategoryAverages * 2);
    } else {
      return res.status(400).json({ error: "Data penilaian tidak valid. Harap sertakan jawaban kuesioner." });
    }

    const safeTotalScore = Math.max(10, Math.min(calculatedTotalScore, maxScore));
    const percentage = ((safeTotalScore / maxScore) * 100).toFixed(1);

    let level = 1;
    let levelLabel = "Initial / Ad-hoc";
    if (safeTotalScore >= 16 && safeTotalScore <= 23) {
      level = 2;
      levelLabel = "Repeatable but Informal";
    } else if (safeTotalScore >= 24 && safeTotalScore <= 31) {
      level = 3;
      levelLabel = "Defined & Documented";
    } else if (safeTotalScore >= 32 && safeTotalScore <= 37) {
      level = 4;
      levelLabel = "Managed & Measurable";
    } else if (safeTotalScore >= 38) {
      level = 5;
      levelLabel = "Optimized / Continuous Improvement";
    }

    if (!isGeminiConfigured()) {
      // Provide a structured professional mock analysis if API key is not configured
      const mockAnalysis = `
### LAPORAN ANALISIS MATURITAS GRC & ICOFR (MOCK REPORT)
**Klien:** ${cleanCompany}
**Sektor Industri:** ${cleanSector}
**Skor Kepatuhan:** ${safeTotalScore} / ${maxScore} (${percentage}%)
**Tingkat Kematangan (Maturity Level):** Level ${level} - ${levelLabel}

---

#### 1. Ringkasan Eksekutif
Berdasarkan jawaban evaluasi mandiri, tata kelola GRC dan kerangka kerja pengendalian internal atas pelaporan keuangan (ICOFR) organisasi Anda saat ini berada pada tingkatan **Level ${level} (${levelLabel})**. Ini mengindikasikan bahwa sebagian besar kontrol penting telah diidentifikasi, namun konsistensi operasional, dokumentasi formal, serta efektivitas pengujian berkala masih memerlukan penguatan strategis untuk memenuhi ekspektasi Auditor Eksternal, Regulator OJK, ataupun Kementerian BUMN.

#### 2. Analisis Kesenjangan (Gap Analysis) per Kategori
*   **Lingkungan Pengendalian:** Struktur tata kelola telah terbentuk, namun sosialisasi kode etik dan pembudayaan sadar risiko di lini operasional masih perlu ditingkatkan agar komitmen pencegahan fraud terdokumentasi dengan baik.
*   **Penilaian Risiko:** Risiko bisnis dan risiko keuangan sudah diidentifikasi, namun belum diselaraskan secara komprehensif dengan matriks risiko TI dan penilaian risiko fraud (Fraud Risk Assessment) yang dinamis.
*   **Aktivitas Pengendalian:** Pemisahan fungsi (SoD) pada transaksi kritikal telah berjalan, namun masih banyak bergantung pada kontrol manual (manual controls) yang rentan terhadap bypass manajemen, alih-alih kontrol otomatis sistem (system-automated controls).
*   **Informasi & Komunikasi:** Alur pelaporan keuangan tersedia, tetapi integrasi antara sistem operasional dengan buku besar (General Ledger) memerlukan rekonsiliasi manual yang masif, meningkatkan risiko human-error. Whistleblowing system juga membutuhkan independensi yang lebih kuat.
*   **Pemantauan:** SPI telah melakukan audit rutin, namun pengujian keandalan rancangan (Design Effectiveness) dan keandalan operasional (Operating Effectiveness) ICOFR secara formal belum terdokumentasi secara berkala dan terstruktur.

#### 3. Roadmap Rekomendasi dari Daya Solusi Integra (DSI)
1.  **Formalisasi & Standardisasi (Q1):** Menyusun matriks Kontrol & Risiko (Risk and Control Matrix - RCM) formal untuk siklus akuntansi signifikan.
2.  **Penerapan ITGC (Q2):** Melakukan audit hak akses (access rights) dan log audit pada sistem keuangan utama untuk memastikan integritas data keuangan.
3.  **Pengujian Independen (Q3):** Melaksanakan simulasi pengujian kepatuhan kontrol (mock-audit) oleh tim independen DSI sebelum audit akhir tahun berjalan.
4.  **Otomatisasi Monitoring (Q4):** Mengadopsi platform GRC guna memantau anomali transaksi dan efektivitas kontrol secara kontinu (Continuous Control Monitoring).

*Daya Solusi Integra siap mendampingi organisasi Anda untuk berakselerasi menuju Level 4 (Managed) dalam waktu 6-9 bulan.*
      `;
      return res.json({ text: mockAnalysis, source: "mock-report" });
    }

    const systemInstruction = `
      Anda adalah "Executive Report Generator" dari Daya Solusi Integra.
      Tugas Anda adalah memformulasikan laporan hasil analisis maturitas GRC & ICOFR eksekutif yang prestisius, berdasarkan hasil penilaian kuantitatif pengguna.
      
      Aturan Penulisan Laporan:
      1. Gunakan Bahasa Indonesia yang sangat formal, bernada profesional (gaya McKinsey/PwC), dan sarat dengan terminologi GRC & Finansial.
      2. Laporan harus dibagi menjadi beberapa bagian utama menggunakan Markdown yang indah:
         - **JUDUL LAPORAN** (mencantumkan Nama Perusahaan & Sektor).
         - **RINGKASAN EKSEKUTIF** (analisis tingkat kematangan saat ini berbasis COSO Internal Control Framework).
         - **ANALISIS GAP PER AREA** (ulas tiap area: Lingkungan Pengendalian, Penilaian Risiko, Aktivitas Pengendalian, Informasi & Komunikasi, Pemantauan, hubungkan dengan tantangan spesifik sektor BUMN atau Perbankan).
         - **REKOMENDASI STRATEGIS & ROADMAP REMEDIASI** (tahapan konkret 3, 6, dan 12 bulan yang ditawarkan Daya Solusi Integra).
      3. Kaitkan analisis dengan tantangan industri:
         - Jika **Sektor Perbankan (Banking)**: Tekankan kepatuhan terhadap POJK/SEOJK Manajemen Risiko TI, integritas data core banking, proteksi fraud transaksi, dan pelaporan keuangan triwulanan yang ketat.
         - Jika **Sektor BUMN**: Tekankan keselarasan dengan arahan tata kelola Kementerian BUMN (GCG), transparansi publik, pencegahan korupsi, serta akuntabilitas aset negara.
      4. Jadikan laporan ini sebagai instrumen penjualan yang meyakinkan bahwa berpartner dengan Daya Solusi Integra (DSI) adalah solusi paling tepat untuk menaikkan skor maturitas organisasi mereka secara berkelanjutan.
    `;

    const prompt = `
      Silakan buat laporan analisis maturitas GRC & ICOFR terperinci untuk:
      Nama Organisasi: ${cleanCompany}
      Sektor Industri: ${cleanSector}
      Skor Total: ${safeTotalScore} dari maksimal ${maxScore} (Maturitas: ${percentage}%)
      Tingkat Kematangan Saat Ini: Level ${level} - ${levelLabel}
      Rincian Skor Rata-rata Kategori (Skala 1-4):
      - Lingkungan Pengendalian: ${verifiedCategoryScores["Control Environment"]}
      - Penilaian Risiko: ${verifiedCategoryScores["Risk Assessment"]}
      - Aktivitas Pengendalian: ${verifiedCategoryScores["Control Activities"]}
      - Informasi & Komunikasi: ${verifiedCategoryScores["Information & Communication"]}
      - Pemantauan: ${verifiedCategoryScores["Monitoring"]}
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.6,
        },
      });

      return res.json({ text: response.text, source: "gemini-api" });
    } catch (apiErr: any) {
      console.warn("Gemini API call failed, returning server-verified analysis report:", apiErr?.message);
      const fallbackReport = `
### LAPORAN ANALISIS MATURITAS GRC & ICOFR (SERVER VERIFIED)
**Klien:** ${cleanCompany}
**Sektor Industri:** ${cleanSector}
**Skor Kepatuhan:** ${safeTotalScore} / ${maxScore} (${percentage}%)
**Tingkat Kematangan (Maturity Level):** Level ${level} - ${levelLabel}

---

#### 1. Ringkasan Eksekutif
Berdasarkan evaluasi mandiri terverifikasi server, tata kelola GRC dan kerangka kerja pengendalian internal atas pelaporan keuangan (ICOFR) organisasi Anda saat ini berada pada tingkatan **Level ${level} (${levelLabel})**.

#### 2. Rincian Skor Terverifikasi Server per Dimensi COSO
*   **Lingkungan Pengendalian:** ${verifiedCategoryScores["Control Environment"]}/4.0
*   **Penilaian Risiko:** ${verifiedCategoryScores["Risk Assessment"]}/4.0
*   **Aktivitas Pengendalian:** ${verifiedCategoryScores["Control Activities"]}/4.0
*   **Informasi & Komunikasi:** ${verifiedCategoryScores["Information & Communication"]}/4.0
*   **Pemantauan:** ${verifiedCategoryScores["Monitoring"]}/4.0

#### 3. Rekomendasi Strategis dari Daya Solusi Integra (DSI)
1. Formalisasi dan standardisasi Risk and Control Matrix (RCM) untuk siklus akuntansi utama.
2. Penguatan IT General Controls (ITGC) dan audit hak akses pengguna.
3. Otomatisasi pemantauan kontrol (Continuous Control Monitoring).
      `;
      return res.json({ text: fallbackReport, source: "verified-server-report" });
    }
  } catch (error: any) {
    console.error("Error in assessment endpoint:", error);
    return res.status(500).json({ error: "Gagal menganalisis penilaian maturitas." });
  }
});

// API Endpoint 3: Contact Form submission emailed to marketing@dsintegra.co.id
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, company, email, phone, sector, service, message } = req.body;

    const cleanName = sanitizeInput(name, 100);
    const cleanCompany = sanitizeInput(company, 150);
    const cleanEmail = sanitizeInput(email, 150);
    const cleanPhone = sanitizeInput(phone, 30);
    const cleanSector = sanitizeInput(sector, 50);
    const cleanService = sanitizeInput(service, 100);
    const cleanMessage = sanitizeInput(message, 3000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ error: "Nama, email, dan pesan wajib diisi secara valid." });
    }

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ error: "Format alamat email tidak valid." });
    }

    // Configure Nodemailer transporter sending through localhost SMTP on port 25
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: Number(process.env.SMTP_PORT) || 25,
      secure: process.env.SMTP_SECURE === "true",
      tls: {
        rejectUnauthorized: true
      }
    });

    const mailOptions = {
      from: `"DSI Web Contact" <no-reply@dsintegra.co.id>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "marketing@dsintegra.co.id",
      replyTo: cleanEmail,
      subject: `Inquiry Baru Website: ${cleanName} (${cleanCompany || "Individu"})`,
      text: `Anda mendapatkan pesan baru dari formulir kontak website dsintegra.co.id:\n\nNama: ${cleanName}\nPerusahaan: ${cleanCompany}\nSurel: ${cleanEmail}\nNo. Telepon: ${cleanPhone || "-"}\nSektor: ${cleanSector || "-"}\nLayanan: ${cleanService || "-"}\n\nPesan:\n${cleanMessage}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0b3c5d; border-bottom: 2px solid #f5f5f5; padding-bottom: 10px; margin-top: 0;">Pengajuan Diskusi / Inquiry Baru</h2>
          <p>Anda menerima formulir kontak baru dari website <strong>dsintegra.co.id</strong>:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Nama Lengkap</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Perusahaan</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${cleanCompany}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Surel Resmi</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${cleanEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">No. Telepon / HP</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${cleanPhone || "-"}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Sektor</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${cleanSector || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Layanan Diminati</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${cleanService || "-"}</td>
            </tr>
          </table>
          <div style="background-color: #fcfcfc; border-left: 4px solid #0b3c5d; padding: 15px; margin-top: 15px;">
            <strong style="display: block; margin-bottom: 5px; color: #555;">Pesan / Kebutuhan:</strong>
            <p style="margin: 0; white-space: pre-wrap; font-style: italic;">${cleanMessage}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0 15px;" />
          <p style="font-size: 11px; color: #999; margin: 0; text-align: center;">Email dikirim otomatis dari web server Daya Solusi Integra.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Pesan berhasil dikirim ke tim marketing." });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({ error: "Gagal mengirim pesan kontak." });
  }
});

// Centralized 404 Handler for Unmatched API Endpoints
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "Endpoint API tidak ditemukan." });
});

// Configure Vite or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[DSI Server] Berjalan di http://localhost:${PORT}`);
  });
}

startServer();

