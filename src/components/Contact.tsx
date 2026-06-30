import React, { useState } from "react";
import { InquiryForm } from "../types";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  Building,
  ArrowRight
} from "lucide-react";
import GlossaryTooltip from "./GlossaryTooltip";

export default function Contact({ prefill }: { prefill?: { company: string; sector: string } | null }) {
  const [form, setForm] = useState<InquiryForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "BUMN",
    service: "ICOFR Framework",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  // Pre-fill form when assessment prefill data arrives
  React.useEffect(() => {
    if (prefill) {
      setForm((prev) => ({
        ...prev,
        company: prefill.company || prev.company,
        sector: (prefill.sector as any) || prev.sector,
      }));
      // Validate pre-filled company name
      if (prefill.company) {
        validateField("company", prefill.company);
      }
    }
  }, [prefill]);

  const validateEmail = (val: string) => {
    if (!val) return { error: "Surel resmi wajib diisi.", warning: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) return { error: "Format surel tidak valid.", warning: "" };
    const personalDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
    const domain = val.split("@")[1]?.toLowerCase();
    if (personalDomains.includes(domain)) {
      return { error: "", warning: "Kami menyarankan surel korporasi demi keamanan data, namun Anda tetap dapat melanjutkan." };
    }
    return { error: "", warning: "" };
  };

  const validatePhone = (val: string) => {
    if (!val) return "No. telepon wajib diisi.";
    const phoneRegex = /^[0-9+()-\s]{9,15}$/;
    if (!phoneRegex.test(val)) return "No. telepon tidak valid (9-15 digit angka).";
    return "";
  };

  const validateName = (val: string) => {
    if (!val.trim()) return "Nama lengkap wajib diisi.";
    if (val.trim().length < 3) return "Nama lengkap minimal 3 karakter.";
    return "";
  };

  const validateCompany = (val: string) => {
    if (!val.trim()) return "Nama perusahaan wajib diisi.";
    if (val.trim().length < 3) return "Nama perusahaan/organisasi minimal 3 karakter.";
    return "";
  };

  const validateMessage = (val: string) => {
    if (!val.trim()) return "Pesan wajib diisi.";
    if (val.trim().length < 10) return "Silakan berikan deskripsi kebutuhan minimal 10 karakter.";
    return "";
  };

  const validateField = (name: string, value: string) => {
    let err = "";
    let warn = "";
    if (name === "name") err = validateName(value);
    else if (name === "company") err = validateCompany(value);
    else if (name === "email") {
      const res = validateEmail(value);
      err = res.error;
      warn = res.warning;
    }
    else if (name === "phone") err = validatePhone(value);
    else if (name === "message") err = validateMessage(value);

    setErrors((prev) => ({ ...prev, [name]: err }));
    setWarnings((prev) => ({ ...prev, [name]: warn }));
  };

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (name: string, value: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailValidation = validateEmail(form.email);
    const newErrors = {
      name: validateName(form.name),
      company: validateCompany(form.company),
      email: emailValidation.error,
      phone: validatePhone(form.phone),
      message: validateMessage(form.message)
    };

    setErrors(newErrors);
    setWarnings({
      email: emailValidation.warning
    });
    setTouched({
      name: true,
      company: true,
      email: true,
      phone: true,
      message: true
    });

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    setIsSubmitting(true);
    
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || "Gagal mengirim pesan.");
        }
        return res.json();
      })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("Error submitting contact form:", err);
        alert("Terjadi kesalahan: " + err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleReset = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      sector: "BUMN",
      service: "ICOFR Framework",
      message: ""
    });
    setErrors({});
    setWarnings({});
    setTouched({});
    setIsSubmitted(false);
    setStep(1);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] border-t border-slate-900">
      {/* Decorative background flare */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Mulai Transformasi GRC & <GlossaryTooltip acronym="ICOFR">ICOFR</GlossaryTooltip> Hari Ini
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Diskusikan kebutuhan tata kelola, audit internal, atau persiapan asersi manajemen Anda bersama tim auditor senior Daya Solusi Integra.
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="grid lg:grid-cols-12 gap-12" id="contact-container">
          
          {/* Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-info-block">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">PT Daya Solusi Integra</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Mitra tepercaya BUMN dan industri perbankan dalam membangun integritas laporan keuangan, keandalan <GlossaryTooltip acronym="ITGC">ITGC</GlossaryTooltip>, dan sistem kepatuhan GRC terintegrasi.
              </p>
            </div>

            {/* Office details */}
            <div className="space-y-6" id="office-details-list">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-slate-900/60 border border-slate-800 text-blue-400 p-3 rounded-2xl h-11 w-11 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">Kantor Pusat</h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    Indonesia Stock Exchange Tower 1<br />
                    Level 3. Unit 304
                    Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan<br />
                    DKI Jakarta 12910
                  </p>
                </div>
              </div>

              {/* Tel / Whatsapp */}
              <div className="flex gap-4">
                <div className="bg-slate-900/60 border border-slate-800 text-blue-400 p-3 rounded-2xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">Telepon & Hubungan Klien</h4>
                  <p className="text-sm text-slate-200 mt-1">
                    +62 852 8599 5234 (Corporate Whatsapp)
                  </p>
                </div>
              </div>

              {/* Corporate Email */}
              <div className="flex gap-4">
                <div className="bg-slate-900/60 border border-slate-800 text-blue-400 p-3 rounded-2xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">Surel Resmi</h4>
                  <p className="text-sm text-slate-200 mt-1 hover:text-blue-400 transition-colors">
                    marketing@dsintegra.co.id
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="bg-slate-900/60 border border-slate-800 text-blue-400 p-3 rounded-2xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">Jam Operasional</h4>
                  <p className="text-sm text-slate-200 mt-1">
                    Senin - Jumat: 08:30 - 17:30 WIB<br />
                    Sabtu, Minggu & Hari Libur Nasional: Tutup
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Callout badge */}
            <div className="bg-blue-950/25 border border-blue-500/10 p-5 rounded-2xl text-left" id="privacy-callout">
              <h4 className="text-xs font-bold text-bumn-gold flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-4 h-4" />
                Kerahasiaan Data Klien
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                Sebagai entitas audit dan konsultansi manajemen, kami mematuhi Non-Disclosure Agreement (NDA) yang sangat ketat untuk melidungi seluruh aset informasi keuangan, sistem TI, dan regulasi internal organisasi BUMN maupun Bank yang bekerjasama dengan kami.
              </p>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7" id="contact-form-block">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 relative min-h-[500px]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 text-left animate-in fade-in duration-300" id="inquiry-form-element">
                  
                  {/* Step Indicators */}
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                      step === 1 
                        ? "bg-blue-950/40 text-blue-400 border-blue-500/20" 
                        : "bg-slate-900 text-slate-500 border-slate-800"
                    }`}>
                      Langkah 1: Identitas Organisasi
                    </span>
                    <span className="text-slate-600 text-xs font-mono">➔</span>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                      step === 2 
                        ? "bg-blue-950/40 text-blue-400 border-blue-500/20" 
                        : "bg-slate-900 text-slate-500 border-slate-800"
                    }`}>
                      Langkah 2: Kontak & Pesan
                    </span>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      {/* Step 1 Fields: Company, Sector, Service */}
                      <div className="space-y-2">
                        <label htmlFor="user-company" className="text-xs font-semibold text-slate-300">Nama Perusahaan / Organisasi</label>
                        <input
                          type="text"
                          id="user-company"
                          required
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          onBlur={(e) => handleBlur("company", e.target.value)}
                          placeholder="Contoh: PT Kereta Api Indonesia"
                          className={`w-full bg-slate-900 border hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors ${
                            errors.company && touched.company ? "border-rose-500" : "border-slate-800"
                          }`}
                        />
                        {errors.company && touched.company && (
                          <p className="text-[11px] text-rose-500 mt-1 font-medium animate-in fade-in duration-150">{errors.company}</p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="user-sector" className="text-xs font-semibold text-slate-300">Sektor Operasional</label>
                          <select
                            id="user-sector"
                            value={form.sector}
                            onChange={(e) => setForm({ ...form, sector: e.target.value as any })}
                            className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                          >
                            <option value="BUMN">BUMN / BUMD</option>
                            <option value="Banking">Perbankan / Jasa Keuangan</option>
                            <option value="Swasta">Sektor Swasta / Korporasi</option>
                            <option value="Lainnya">Kementerian / Lembaga Pemerintah</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="user-service" className="text-xs font-semibold text-slate-300">Layanan yang Dibutuhkan</label>
                          <select
                            id="user-service"
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value as any })}
                            className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                          >
                            <option value="ICOFR Framework">Implementasi & Desain ICOFR</option>
                            <option value="GRC Implementation">Enterprise GRC Consulting</option>
                            <option value="IT General Controls (ITGC)">Audit ITGC & IT GRC</option>
                            <option value="Audit Readiness">Pre-Audit Readiness & WTP Assist</option>
                            <option value="Custom Consultation">Konsultasi Kustom GRC</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => {
                            const errComp = validateCompany(form.company);
                            setErrors((prev) => ({ ...prev, company: errComp }));
                            setTouched((prev) => ({ ...prev, company: true }));
                            if (!errComp) {
                              setStep(2);
                            }
                          }}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all shadow-lg cursor-pointer focus:outline-none"
                        >
                          Selanjutnya
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      {/* Step 2 Fields: Name, Email, Phone, Message */}
                      <div className="space-y-2">
                        <label htmlFor="user-name" className="text-xs font-semibold text-slate-300">Nama Lengkap</label>
                        <input
                          type="text"
                          id="user-name"
                          required
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={(e) => handleBlur("name", e.target.value)}
                          placeholder="Contoh: Budi Santoso, M.B.A."
                          className={`w-full bg-slate-900 border hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors ${
                            errors.name && touched.name ? "border-rose-500" : "border-slate-800"
                          }`}
                        />
                        {errors.name && touched.name && (
                          <p className="text-[11px] text-rose-500 mt-1 font-medium animate-in fade-in duration-150">{errors.name}</p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="user-email" className="text-xs font-semibold text-slate-300">Surel Resmi / Korporasi</label>
                          <input
                            type="email"
                            id="user-email"
                            required
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onBlur={(e) => handleBlur("email", e.target.value)}
                            placeholder="Contoh: budi.s@perusahaan.co.id"
                            className={`w-full bg-slate-900 border hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors ${
                              errors.email && touched.email 
                                ? "border-rose-500" 
                                : !errors.email && warnings.email && touched.email 
                                ? "border-amber-500/80 focus:border-amber-500 focus:ring-amber-500" 
                                : "border-slate-800"
                            }`}
                          />
                          {errors.email && touched.email && (
                            <p className="text-[11px] text-rose-500 mt-1 font-medium animate-in fade-in duration-150">{errors.email}</p>
                          )}
                          {!errors.email && warnings.email && touched.email && (
                            <p className="text-[11px] text-amber-500 mt-1 font-medium animate-in fade-in duration-150">{warnings.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="user-phone" className="text-xs font-semibold text-slate-300">No. Telepon Aktif / HP</label>
                          <input
                            type="tel"
                            id="user-phone"
                            required
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            onBlur={(e) => handleBlur("phone", e.target.value)}
                            placeholder="Contoh: 081234567890"
                            className={`w-full bg-slate-900 border hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors ${
                              errors.phone && touched.phone ? "border-rose-500" : "border-slate-800"
                            }`}
                          />
                          {errors.phone && touched.phone && (
                            <p className="text-[11px] text-rose-500 mt-1 font-medium animate-in fade-in duration-150">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="user-message" className="text-xs font-semibold text-slate-300">Pesan Diskusi / Kebutuhan Kustom</label>
                        <textarea
                          id="user-message"
                          rows={4}
                          required
                          value={form.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          onBlur={(e) => handleBlur("message", e.target.value)}
                          placeholder="Jelaskan secara singkat mengenai tantangan kontrol keuangan atau kesiapan audit yang sedang dialami organisasi Anda..."
                          className={`w-full bg-slate-900 border hover:border-slate-700 focus:border-bumn-gold focus:ring-1 focus:ring-bumn-gold rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none ${
                            errors.message && touched.message ? "border-rose-500" : "border-slate-800"
                          }`}
                        />
                        {errors.message && touched.message && (
                          <p className="text-[11px] text-rose-500 mt-1 font-medium animate-in fade-in duration-150">{errors.message}</p>
                        )}
                      </div>

                      <div className="flex gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all outline-none"
                        >
                          Kembali
                        </button>
                        <button
                          type="submit"
                          id="submit-inquiry-btn"
                          disabled={isSubmitting}
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all shadow-lg disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Mengirim Pengajuan...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Kirim Pengajuan Diskusi
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              ) : (
                /* Success screen */
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-300" id="contact-success-state">
                  <div className="bg-blue-500/10 p-4 rounded-full text-blue-400 h-16 w-16 flex items-center justify-center border border-blue-500/30">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Pengajuan Berhasil Dikirim</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      Terima kasih <strong className="text-bumn-gold">{form.name}</strong>, formulir diskusi strategis untuk <strong className="text-white">{form.company}</strong> telah tercatat pada sistem representatif kami.
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed pt-2">
                      Partner / Auditor Senior Daya Solusi Integra akan menghubungi Anda via surel (<span className="text-slate-400">{form.email}</span>) atau panggilan telepon dalam waktu maksimal 1x24 jam kerja untuk menjadwalkan sesi pendahuluan NDA.
                    </p>
                  </div>
                  <button
                    id="reset-contact-form-btn"
                    onClick={handleReset}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900 px-4 py-2 rounded-xl border border-slate-800"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
