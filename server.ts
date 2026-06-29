import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with custom User-Agent for tracking
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || "MOCK_KEY_FOR_DEV_IF_NONE",
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
app.post("/api/consultant", async (req, res) => {
  try {
    const { messages, sector } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Format input tidak valid. Memerlukan daftar pesan." });
    }

    if (!isGeminiConfigured()) {
      // Return a professional mock response if API Key is not set up yet
      const lastMessage = messages[messages.length - 1]?.text?.toLowerCase() || "";
      let responseText = "Terima kasih atas pertanyaan Anda. Sebagai konsultan ahli dari **Daya Solusi Integra**, saya siap mendampingi organisasi Anda.\n\n";
      
      if (lastMessage.includes("icofr") || lastMessage.includes("internal control")) {
        responseText += "Untuk implementasi **ICOFR (Internal Control over Financial Reporting)** di " + (sector || "BUMN") + ", langkah krusial awal adalah pemetaan risiko tingkat entitas (Entity-Level Controls) sesuai standar COSO, dilanjutkan dengan pendokumentasian proses bisnis signifikan dan rancangan ITGC (IT General Controls). Kami merekomendasikan melakukan gap analysis awal guna memitigasi risiko defisiensi material.";
      } else if (lastMessage.includes("bumn") || lastMessage.includes("menteri")) {
        responseText += "Implementasi GRC di lingkungan **BUMN** saat ini mengacu ketat pada arahan Kementerian BUMN terkait transparansi dan mitigasi risiko fraud. Kami merancang framework GRC terintegrasi yang menyelaraskan ISO 31000 (Manajemen Risiko), ISO 37001 (Sistem Manajemen Anti Penyuapan), dan tata kelola TI agar sesuai dengan tata kelola korporasi yang sehat (GCG).";
      } else if (lastMessage.includes("bank") || lastMessage.includes("ojk")) {
        responseText += "Sektor **Perbankan** memiliki kepatuhan regulasi (OJK/BI) yang sangat dinamis. Layanan konsultasi kami mencakup penyesuaian kontrol ICOFR berbasis risiko dengan mengadopsi standar Basel III dan SEOJK terkait manajemen risiko operasional dan keamanan informasi, memastikan kelulusan audit internal maupun eksternal.";
      } else {
        responseText += "Kami menypesialisasikan diri pada implementasi GRC terpadu dan penguatan ICOFR untuk sektor perbankan dan BUMN. Apakah ada area kontrol spesifik (seperti Lingkungan Pengendalian, Pemisahan Fungsi/SoD, atau Kontrol TI/ITGC) yang ingin Anda diskusikan hari ini?";
      }
      return res.json({ text: responseText, source: "mock-advisor" });
    }

    // Format historical messages for Gemini chat
    const geminiContents = messages.map((m: any) => {
      return {
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }]
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

    // Last message text to send in contents
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
    return res.status(500).json({ error: "Gagal memproses konsultasi: " + error.message });
  }
});

// API Endpoint 2: Advanced GRC & ICOFR Maturity Assessment Analysis
app.post("/api/assess", async (req, res) => {
  try {
    const { categoryScores, totalScore, maxScore, sector, companyName } = req.body;

    if (!categoryScores) {
      return res.status(400).json({ error: "Data penilaian tidak lengkap." });
    }

    const percentage = ((totalScore / maxScore) * 100).toFixed(1);
    
    let level = 1;
    let levelLabel = "Initial / Ad-hoc";
    if (totalScore >= 8 && totalScore <= 15) {
      level = 2;
      levelLabel = "Repeatable but Informal";
    } else if (totalScore >= 16 && totalScore <= 23) {
      level = 3;
      levelLabel = "Defined & Documented";
    } else if (totalScore >= 24 && totalScore <= 31) {
      level = 4;
      levelLabel = "Managed & Measurable";
    } else if (totalScore >= 32) {
      level = 5;
      levelLabel = "Optimized / Continuous Improvement";
    }

    if (!isGeminiConfigured()) {
      // Provide a structured professional mock analysis if API key is not configured
      const mockAnalysis = `
### LAPORAN ANALISIS MATURITAS GRC & ICOFR (MOCK REPORT)
**Klien:** ${companyName || "Perusahaan Calon Mitra"}
**Sektor Industri:** ${sector || "BUMN"}
**Skor Kepatuhan:** ${totalScore} / ${maxScore} (${percentage}%)
**Tingkat Kematangan (Maturity Level):** Level ${level} - ${levelLabel}

---

#### 1. Ringkasan Eksekutif
Berdasarkan jawaban evaluasi mandiri, tata kelola GRC dan kerangka kerja pengendalian internal atas pelaporan keuangan (ICOFR) organisasi Anda saat ini berada pada tingkatan **Level ${level} (${levelLabel})**. Ini mengindikasikan bahwa sebagian besar kontrol penting telah diidentifikasi, namun konsistensi operasional, dokumentasi formal, serta efektivitas pengujian berkala masih memerlukan penguatan strategis untuk memenuhi ekspektasi Auditor Eksternal, Regulator OJK, ataupun Kementerian BUMN.

#### 2. Analisis Kesenjangan (Gap Analysis) per Kategori
*   **Lingkungan Pengendalian (Skor: ${categoryScores["Control Environment"] || "Menengah"}):** Struktur tata kelola telah terbentuk, namun sosialisasi kode etik dan pembudayaan sadar risiko di lini operasional masih perlu ditingkatkan agar komitmen pencegahan fraud terdokumentasi dengan baik.
*   **Penilaian Risiko (Skor: ${categoryScores["Risk Assessment"] || "Menengah"}):** Risiko bisnis dan risiko keuangan sudah diidentifikasi, namun belum diselaraskan secara komprehensif dengan matriks risiko TI dan penilaian risiko fraud (Fraud Risk Assessment) yang dinamis.
*   **Aktivitas Pengendalian (Skor: ${categoryScores["Control Activities"] || "Menengah"}):** Pemisahan fungsi (SoD) pada transaksi kritikal telah berjalan, namun masih banyak bergantung pada kontrol manual (manual controls) yang rentan terhadap bypass manajemen, alih-alih kontrol otomatis sistem (system-automated controls).
*   **Informasi & Komunikasi (Skor: ${categoryScores["Information & Communication"] || "Menengah"}):** Alur pelaporan keuangan tersedia, tetapi integrasi antara sistem operasional dengan buku besar (General Ledger) memerlukan rekonsiliasi manual yang masif, meningkatkan risiko human-error. Whistleblowing system juga membutuhkan independensi yang lebih kuat.
*   **Pemantauan (Skor: ${categoryScores["Monitoring"] || "Menengah"}):** SPI telah melakukan audit rutin, namun pengujian keandalan rancangan (Design Effectiveness) dan keandalan operasional (Operating Effectiveness) ICOFR secara formal belum terdokumentasi secara berkala dan terstruktur.

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
      Nama Organisasi: ${companyName || "Perusahaan Calon Mitra"}
      Sektor Industri: ${sector || "BUMN"}
      Skor Total: ${totalScore} dari maksimal ${maxScore} (Maturitas: ${percentage}%)
      Tingkat Kematangan Saat Ini: Level ${level} - ${levelLabel}
      Rincian Skor Rata-rata Kategori (Skala 1-4):
      - Lingkungan Pengendalian: ${categoryScores["Control Environment"]}
      - Penilaian Risiko: ${categoryScores["Risk Assessment"]}
      - Aktivitas Pengendalian: ${categoryScores["Control Activities"]}
      - Informasi & Komunikasi: ${categoryScores["Information & Communication"]}
      - Pemantauan: ${categoryScores["Monitoring"]}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });

    return res.json({ text: response.text, source: "gemini-api" });
  } catch (error: any) {
    console.error("Error calling Gemini API for assessment:", error);
    return res.status(500).json({ error: "Gagal menganalisis penilaian: " + error.message });
  }
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
