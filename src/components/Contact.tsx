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
  Building 
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState<InquiryForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "BUMN",
    service: "ICOFR Framework",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API intake network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
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
    setIsSubmitted(false);
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase font-mono">
            Hubungi Konsultan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Mulai Transformasi GRC & ICOFR Hari Ini
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
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
                Mitra tepercaya BUMN dan industri perbankan dalam membangun integritas laporan keuangan, keandalan ITGC, dan sistem kepatuhan GRC terintegrasi.
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
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Kantor Pusat</h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    Sudirman Plaza, Plaza Marein Lantai 17<br />
                    Jl. Jend. Sudirman Kav. 76-78, Jakarta Selatan<br />
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
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Telepon & Hubungan Klien</h4>
                  <p className="text-sm text-slate-200 mt-1">
                    +62 21 5082 9201 (Office)<br />
                    +62 811 1290 9283 (Corporate Whatsapp)
                  </p>
                </div>
              </div>

              {/* Corporate Email */}
              <div className="flex gap-4">
                <div className="bg-slate-900/60 border border-slate-800 text-blue-400 p-3 rounded-2xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Surel Resmi</h4>
                  <p className="text-sm text-slate-200 mt-1 hover:text-blue-400 transition-colors">
                    info@dayasolusiintegra.co.id
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="bg-slate-900/60 border border-slate-800 text-blue-400 p-3 rounded-2xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Jam Operasional</h4>
                  <p className="text-sm text-slate-200 mt-1">
                    Senin - Jumat: 08:30 - 17:30 WIB<br />
                    Sabtu, Minggu & Hari Libur Nasional: Tutup
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Callout badge */}
            <div className="bg-blue-950/25 border border-blue-500/10 p-5 rounded-2xl text-left" id="privacy-callout">
              <h4 className="text-xs font-bold text-bumn-gold uppercase tracking-widest font-mono flex items-center gap-1.5 mb-1.5">
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
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative min-h-[500px]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 text-left animate-in fade-in duration-300" id="inquiry-form-element">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user-name" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Nama Lengkap</label>
                      <input
                        type="text"
                        id="user-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso, M.B.A."
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user-company" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Nama Perusahaan / Organisasi</label>
                      <input
                        type="text"
                        id="user-company"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Contoh: PT Kereta Api Indonesia"
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user-email" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Surel Resmi / Korporasi</label>
                      <input
                        type="email"
                        id="user-email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Contoh: budi.s@perusahaan.co.id"
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user-phone" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">No. Telepon Aktif / HP</label>
                      <input
                        type="tel"
                        id="user-phone"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Contoh: 081234567890"
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Sector & Service Type */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user-sector" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Sektor Operasional</label>
                      <select
                        id="user-sector"
                        value={form.sector}
                        onChange={(e) => setForm({ ...form, sector: e.target.value as any })}
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                      >
                        <option value="BUMN">BUMN / BUMD</option>
                        <option value="Banking">Perbankan / Jasa Keuangan</option>
                        <option value="Swasta">Sektor Swasta / Korporasi</option>
                        <option value="Lainnya">Kementerian / Lembaga Pemerintah</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user-service" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Layanan yang Dibutuhkan</label>
                      <select
                        id="user-service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value as any })}
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                      >
                        <option value="ICOFR Framework">Implementasi & Desain ICOFR</option>
                        <option value="GRC Implementation">Enterprise GRC Consulting</option>
                        <option value="IT General Controls (ITGC)">Audit ITGC & IT GRC</option>
                        <option value="Audit Readiness">Pre-Audit Readiness & WTP Assist</option>
                        <option value="Custom Consultation">Konsultasi Kustom GRC</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="user-message" className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Pesan Diskusi / Kebutuhan Kustom</label>
                    <textarea
                      id="user-message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Jelaskan secara singkat mengenai tantangan kontrol keuangan atau kesiapan audit yang sedang dialami organisasi Anda..."
                      className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-inquiry-btn"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-bumn-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all shadow-lg disabled:opacity-50 cursor-pointer"
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
