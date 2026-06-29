import React, { useState } from "react";
import { assessmentQuestions } from "../data";
import { 
  Building2, 
  Landmark, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  FileText, 
  Loader2, 
  Info,
  Shield,
  Briefcase,
  TrendingUp,
  Cpu,
  RefreshCw
} from "lucide-react";
import Markdown from "react-markdown";

export default function Assessment({ onComplete }: { onComplete?: (company: string, sector: string) => void }) {
  // Step tracker: -1 = Info form, 0 to 9 = Questions, 10 = Results
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [companyName, setCompanyName] = useState<string>("");
  const [sector, setSector] = useState<"BUMN" | "Banking">("BUMN");
  const [validationError, setValidationError] = useState<string>("");
  
  // Record user selections: questionId -> score (1-4)
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isLoadingAiReport, setIsLoadingAiReport] = useState<boolean>(false);
  const [aiReport, setAiReport] = useState<string>("");
  const [reassuringMessage, setReassuringMessage] = useState<string>("");

  const totalQuestions = assessmentQuestions.length;

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) {
      setValidationError("Silakan masukkan nama organisasi/instansi Anda terlebih dahulu.");
      return;
    }
    setValidationError("");
    setCurrentStep(0);
  };

  const handleSelectOption = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    
    // Auto-advance with a slight delay for better UX
    setTimeout(() => {
      if (currentStep < totalQuestions - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setCurrentStep(totalQuestions); // Show results
        onComplete?.(companyName, sector);
      }
    }, 280);
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setCurrentStep(-1); // Go back to info form
    }
  };

  const calculateResults = () => {
    const scoresByCategory: Record<string, { total: number; count: number }> = {
      "Control Environment": { total: 0, count: 0 },
      "Risk Assessment": { total: 0, count: 0 },
      "Control Activities": { total: 0, count: 0 },
      "Information & Communication": { total: 0, count: 0 },
      "Monitoring": { total: 0, count: 0 }
    };

    let totalScore = 0;
    assessmentQuestions.forEach((q) => {
      const score = answers[q.id] || 1; // fallback to 1 if skipped
      totalScore += score;
      scoresByCategory[q.category].total += score;
      scoresByCategory[q.category].count += 1;
    });

    const categoryAverages: Record<string, number> = {};
    Object.keys(scoresByCategory).forEach((cat) => {
      categoryAverages[cat] = scoresByCategory[cat].total / scoresByCategory[cat].count;
    });

    const maxScore = totalQuestions * 4;
    const percentage = (totalScore / maxScore) * 100;

    let level = 1;
    let levelLabel = "Initial / Ad-hoc";
    let levelDesc = "Kontrol internal belum terdokumentasi secara formal dan bersifat reaktif.";
    
    if (totalScore >= 16 && totalScore <= 23) {
      level = 2;
      levelLabel = "Repeatable but Informal";
      levelDesc = "Kontrol sudah berjalan di beberapa bagian, namun efektivitas dokumentasi dan standardisasi masih rendah.";
    } else if (totalScore >= 24 && totalScore <= 31) {
      level = 3;
      levelLabel = "Defined & Documented";
      levelDesc = "Seluruh kontrol utama terstandardisasi dan terdokumentasi formal dalam Risk and Control Matrix (RCM).";
    } else if (totalScore >= 32 && totalScore <= 37) {
      level = 4;
      levelLabel = "Managed & Measurable";
      levelDesc = "Kontrol dipantau secara kuantitatif, terdokumentasi lengkap dengan audit trail, serta diuji berkala.";
    } else if (totalScore >= 38) {
      level = 5;
      levelLabel = "Optimized";
      levelDesc = "Sistem kontrol otomatis terintegrasi penuh (Continuous Control Monitoring) dengan adaptasi risiko proaktif.";
    }

    return {
      categoryAverages,
      totalScore,
      maxScore,
      percentage: percentage.toFixed(1),
      level,
      levelLabel,
      levelDesc
    };
  };

  const generateAiReport = async () => {
    setIsLoadingAiReport(true);
    setAiReport("");
    
    // Stagger loading messages for ultimate professional feel
    const messages = [
      "Menganalisis matriks skor keselarasan COSO...",
      "Menyelaraskan dengan ketentuan audit BUMN & POJK Perbankan...",
      "Menyusun rekomendasi penyesuaian ITGC...",
      "Merumuskan strategi peningkatan tingkat kematangan...",
      "Memformulasikan laporan penasihat eksekutif final..."
    ];
    
    let msgIdx = 0;
    setReassuringMessage(messages[0]);
    const msgInterval = setInterval(() => {
      msgIdx = (msgIdx + 1) % messages.length;
      setReassuringMessage(messages[msgIdx]);
    }, 2500);

    const { categoryAverages, totalScore, maxScore } = calculateResults();

    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categoryScores: categoryAverages,
          totalScore,
          maxScore,
          sector,
          companyName
        })
      });

      const data = await response.json();
      if (response.ok) {
        setAiReport(data.text);
      } else {
        setAiReport(`### Gagal Memproses Laporan\n\n${data.error || "Terjadi kesalahan pada server saat merumuskan laporan."}`);
      }
    } catch (err: any) {
      console.error(err);
      setAiReport(`### Gagal Memproses Laporan\n\nKoneksi ke server terputus: ${err.message}`);
    } finally {
      clearInterval(msgInterval);
      setIsLoadingAiReport(false);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(-1);
    setAiReport("");
  };

  const results = currentStep === totalQuestions ? calculateResults() : null;

  return (
    <section id="assessment" className="py-24 relative bg-[#0d1220] border-t border-slate-900 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[150px]" />
        <div className="absolute -bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold font-mono">
            Alat Asesmen Interaktif
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            GRC & ICOFR Maturity Self-Assessment
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Evaluasi mandiri tingkat kematangan kontrol internal pelaporan keuangan Anda secara gratis. Dapatkan saran perbaikan instan berbasis AI.
          </p>
        </div>

        {/* Core Wizard Container */}
        <div className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/50 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between" id="assessment-wizard">
          
          {/* STEP -1: Company Info Setup */}
          {currentStep === -1 && (
            <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300 text-left" id="step-info-form">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Mulai Evaluasi Mandiri Organisasi Anda
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed max-w-xl">
                  Harap lengkapi identitas dasar di bawah ini untuk memulai evaluasi 10 indikator kontrol internal pelaporan keuangan (ICOFR) berdasarkan COSO framework.
                </p>
              </div>

              <form onSubmit={handleStart} className="space-y-6 max-w-xl">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="comp-name" className="block text-xs font-semibold text-slate-300">
                    Nama Organisasi / Perusahaan BUMN / Bank
                  </label>
                  <input
                    type="text"
                    id="comp-name"
                    required
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (e.target.value.trim()) {
                        setValidationError("");
                      }
                    }}
                    placeholder="Contoh: PT Bank Pembangunan Daerah..."
                    className="w-full bg-slate-900/80 border border-slate-800 hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                  />
                  {validationError && (
                    <p className="text-xs text-rose-500 font-medium mt-1.5 animate-in fade-in duration-200" id="comp-name-error">
                      {validationError}
                    </p>
                  )}
                </div>

                {/* Target Segment */}
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-300">
                    Sektor Operasional Utama
                  </label>
                  <div className="flex p-1 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-md w-full" id="sector-segment-control">
                    <button
                      type="button"
                      id="sector-bumn-btn"
                      onClick={() => setSector("BUMN")}
                      tabIndex={sector === "BUMN" ? 0 : -1}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
                          e.preventDefault();
                          setSector("Banking");
                          setTimeout(() => {
                            document.getElementById("sector-banking-btn")?.focus();
                          }, 0);
                        }
                      }}
                      className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                        sector === "BUMN"
                          ? "bg-gradient-to-r from-bumn-blue to-blue-700 text-white shadow-md font-bold"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/20"
                      }`}
                    >
                      <Building2 className={`w-4 h-4 ${sector === "BUMN" ? "text-white" : "text-slate-500"}`} />
                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-bold leading-tight">BUMN / BUMD</span>
                        <span className="text-[10px] opacity-75 font-mono leading-none mt-0.5">Kementerian & SPI</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      id="sector-banking-btn"
                      onClick={() => setSector("Banking")}
                      tabIndex={sector === "Banking" ? 0 : -1}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
                          e.preventDefault();
                          setSector("BUMN");
                          setTimeout(() => {
                            document.getElementById("sector-bumn-btn")?.focus();
                          }, 0);
                        }
                      }}
                      className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-bumn-gold/50 ${
                        sector === "Banking"
                          ? "bg-gradient-to-r from-bumn-blue to-blue-700 text-white shadow-md font-bold"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/20"
                      }`}
                    >
                      <Landmark className={`w-4 h-4 ${sector === "Banking" ? "text-white" : "text-slate-500"}`} />
                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-bold leading-tight">Perbankan / OJK</span>
                        <span className="text-[10px] opacity-75 font-mono leading-none mt-0.5">Regulasi OJK & BI</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    id="start-assessment-btn"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  >
                    Mulai Evaluasi Mandiri
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEPS 0 to 9: Evaluation Questions */}
          {currentStep >= 0 && currentStep < totalQuestions && (
            <div className="p-6 sm:p-10 space-y-8 flex flex-col justify-between h-full animate-in fade-in duration-300" id="step-question-form">
              {/* Top progress and category header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/60 pb-4 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded-md inline-block">
                    {assessmentQuestions[currentStep].categoryIndo}
                  </span>
                  <p className="text-xs text-slate-500 font-mono">
                    Dimensi {currentStep + 1} dari {totalQuestions}
                  </p>
                </div>
                
                {/* Progress bar */}
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full rounded-full transition-all duration-300" 
                      style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    {Math.round(((currentStep + 1) / totalQuestions) * 100)}%
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-6 py-4 text-left">
                <h3 id="current-question-title" className="text-lg sm:text-xl font-bold text-white tracking-tight leading-relaxed">
                  {assessmentQuestions[currentStep].text}
                </h3>

                 {/* Options list */}
                <div 
                  className="divide-y divide-slate-800/60 border-y border-slate-800/60 text-left" 
                  id="options-container"
                  role="radiogroup"
                  aria-labelledby="current-question-title"
                >
                  {assessmentQuestions[currentStep].options.map((opt, idx) => {
                    const isSelected = answers[assessmentQuestions[currentStep].id] === opt.score;
                     const handleKeyDown = (e: React.KeyboardEvent) => {
                      const totalOpts = assessmentQuestions[currentStep].options.length;
                      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                        e.preventDefault();
                        const nextBtn = document.getElementById(`option-btn-${(idx + 1) % totalOpts}`);
                        nextBtn?.focus();
                      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                        e.preventDefault();
                        const prevBtn = document.getElementById(`option-btn-${(idx - 1 + totalOpts) % totalOpts}`);
                        prevBtn?.focus();
                      }
                    };
                    const isFocusable = isSelected || (answers[assessmentQuestions[currentStep].id] === undefined && idx === 0);
                    return (
                      <button
                        key={idx}
                        id={`option-btn-${idx}`}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={isFocusable ? 0 : -1}
                        onKeyDown={handleKeyDown}
                        onClick={() => handleSelectOption(assessmentQuestions[currentStep].id, opt.score)}
                        className={`w-full py-4 px-2 text-left text-sm transition-all flex items-start gap-4 focus:outline-none focus-visible:bg-slate-900/40 ${
                          isSelected
                            ? "text-white font-medium"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border text-[11px] font-bold ${
                          isSelected 
                            ? "border-blue-400 bg-bumn-blue text-white" 
                            : "border-slate-700 bg-slate-800 text-slate-400"
                        }`}>
                          {opt.score}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom navigation buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-800/40">
                <button
                  id="prev-question-btn"
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl px-4 py-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Kembali
                </button>
                
                <span className="text-xs text-slate-500 font-mono">
                  Sektor: {sector === "BUMN" ? "BUMN / BUMD" : "Perbankan / OJK"}
                </span>
              </div>
            </div>
          )}

          {/* STEP 10: Evaluation Results */}
          {currentStep === totalQuestions && results && (
            <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300" id="step-results">
              
              {/* Header results */}
              <div className="border-b border-slate-800/60 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded-md inline-block">
                    Hasil Analisis Kematangan
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {companyName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sektor: {sector === "BUMN" ? "Badan Usaha Milik Negara" : "Perbankan & Lembaga Keuangan"}
                  </p>
                </div>

                <div className="flex gap-6 items-center py-2 px-4">
                  <div className="text-left md:text-right">
                    <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Skor Total</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">{results.totalScore} <span className="text-sm font-normal text-slate-500">/ {results.maxScore}</span></span>
                  </div>
                  <div className="w-px h-10 bg-slate-800" />
                  <div className="text-left md:text-right">
                    <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Maturitas</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-bumn-gold font-display">{results.percentage}%</span>
                  </div>
                </div>
              </div>

              {/* Maturity Level Display (Line Accent instead of Nested Card) */}
              <div className="border-l-2 border-bumn-blue pl-6 py-2 text-left flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="bg-blue-950/50 text-blue-400 shrink-0 h-16 w-16 rounded-xl flex items-center justify-center text-2xl font-black border border-blue-900/30">
                  Lvl {results.level}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-lg font-bold text-white">{results.levelLabel}</h4>
                    <span className="text-[10px] uppercase font-mono bg-blue-950/40 border border-blue-500/30 text-blue-400 px-2 py-0.5 rounded-full font-bold">COSO Framework</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-2xl">{results.levelDesc}</p>
                </div>
              </div>

              {/* Category Scores breakdown (Flat list instead of Nested Cards) */}
              <div className="space-y-6 text-left">
                <h4 className="text-xs font-bold text-slate-300">
                  Rincian Skor per Dimensi COSO Internal Control
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    { key: "Control Environment", label: "Lingkungan Pengendalian", icon: Shield },
                    { key: "Risk Assessment", label: "Penilaian Risiko", icon: Briefcase },
                    { key: "Control Activities", label: "Aktivitas Pengendalian", icon: Cpu },
                    { key: "Information & Communication", label: "Informasi & Komunikasi", icon: TrendingUp },
                    { key: "Monitoring", label: "Aktivitas Pemantauan", icon: RefreshCw }
                  ].map((dim, idx) => {
                    const score = results.categoryAverages[dim.key] || 1;
                    const pct = (score / 4) * 100;
                    const Icon = dim.icon;
                    return (
                      <div key={idx} className="space-y-2 py-2">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Icon className="w-4 h-4 text-bumn-gold" />
                            <span className="text-xs text-slate-400 font-semibold uppercase font-mono tracking-wider">
                              {dim.key === "Control Environment" ? "Environment" : dim.key.split(" ")[0]}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-white">
                            {score.toFixed(1)}/4.0
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-slate-500 font-medium block leading-tight truncate">
                            {dim.label}
                          </span>
                          <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                            <div 
                              className="bg-bumn-blue h-full rounded-full transition-all" 
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Report Generation Section */}
              <div className="pt-6 border-t border-slate-800/40 flex flex-col items-center justify-center space-y-6 text-center">
                
                {!aiReport && !isLoadingAiReport && (
                  <div className="max-w-xl space-y-4">
                    <p className="text-sm text-slate-400">
                      Butuh rekomendasi formal komprehensif? Klik di bawah untuk meluncurkan analisis AI kustom yang diselaraskan dengan standar tata kelola Kementerian BUMN / Regulasi OJK Perbankan.
                    </p>
                    <button
                      id="assess-ai-generate-btn"
                      onClick={generateAiReport}
                      className="inline-flex items-center gap-2.5 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      Formulasikan Executive Report dengan AI
                    </button>
                  </div>
                )}

                {/* Loading state */}
                {isLoadingAiReport && (
                  <div className="p-8 space-y-4 flex flex-col items-center justify-center" id="ai-loading-state">
                    <Loader2 className="w-8 h-8 text-bumn-gold animate-spin" />
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-white font-mono animate-pulse">
                        Sedang Menganalisis...
                      </p>
                      <p className="text-xs text-slate-500 font-light italic">
                        {reassuringMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* AI Executive Report Result (Borderless Container inside Wizard) */}
                {aiReport && (
                  <div className="w-full border-t border-slate-800 pt-8 text-left animate-in fade-in zoom-in-95 duration-500 relative" id="ai-report-display">
                    
                    {/* Header bar of report */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                      <div className="flex items-center gap-2 text-bumn-gold text-xs font-mono">
                        <FileText className="w-4 h-4" />
                        AI Generated Advisory Report
                      </div>
                      <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-0.5 rounded">DSI Expert Suite</span>
                    </div>

                    {/* Markdown rendering with elegant custom typography styles */}
                    <div className="prose prose-invert prose-blue max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed font-light space-y-4">
                      <Markdown>{aiReport}</Markdown>
                    </div>

                    {/* Report action footer */}
                    <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-4 justify-between items-center">
                      <span className="text-xs text-slate-500 font-mono italic">
                        Didesain untuk kebutuhan Direksi & Komite Audit. PT Daya Solusi Integra.
                      </span>
                      <button
                        onClick={() => window.print()}
                        className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-xl transition-all"
                      >
                        Cetak Laporan
                      </button>
                    </div>
                  </div>
                )}

                {/* Restart option */}
                <div className="pt-4">
                  <button
                    id="restart-assessment-btn"
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  >
                    <RotateCcw className="w-4.5 h-4.5" />
                    Reset & Ulangi Asesmen
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
