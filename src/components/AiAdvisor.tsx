import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import { 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  HelpCircle, 
  Loader2,
  Building2,
  Landmark,
  ArrowRight
} from "lucide-react";

interface AiAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function AiAdvisor({ isOpen, onClose }: AiAdvisorProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = sessionStorage.getItem("dsi_advisor_chat");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
      } catch (e) {
        console.error("Failed to parse saved chat messages", e);
      }
    }
    return [
      {
        id: "welcome",
        sender: "bot",
        text: "Selamat datang di Layanan Konsultasi Cerdas **Daya Solusi Integra**. Saya adalah **DSI Expert Advisor**, spesialis kecerdasan buatan Anda untuk tata kelola GRC, IT General Controls (ITGC), dan kerangka kerja ICOFR.\n\nApakah Anda berasal dari **BUMN** atau **Sektor Perbankan**? Silakan tanyakan hal-hal terkait kepatuhan regulasi, sanksi audit, segregation of duties (SoD), atau tantangan kepatuhan organisasi Anda.",
        timestamp: new Date()
      }
    ];
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedContext, setSelectedContext] = useState<"BUMN" | "Banking" | "General">("General");
  const drawerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync messages to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("dsi_advisor_chat", JSON.stringify(messages));
  }, [messages]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Handle focus, escape key, and keyboard focus trapping
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }

        if (e.key === "Tab" && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const focusable = Array.from(focusableElements) as HTMLElement[];
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    if (!textToSend) {
      setInputValue("");
    }

    const newUserMessage: ChatMessage = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      // Map historical messages into simple sender/text payload for backend
      const requestMessages = [...messages, newUserMessage].map((m) => ({
        sender: m.sender,
        text: m.text
      }));

      const response = await fetch("/api/consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: requestMessages,
          sector: selectedContext
        })
      });

      const data = await response.json();
      
      setIsTyping(false);
      
      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: data.text,
            timestamp: new Date()
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Maaf, saya mengalami kendala teknis saat mengolah jawaban. ${data.error || ""}`,
            timestamp: new Date()
          }
        ]);
      }
    } catch (err: any) {
      console.error(err);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: `Koneksi terputus. Silakan coba beberapa saat lagi. (${err.message})`,
          timestamp: new Date()
        }
      ]);
    }
  };

  const starterQueries = [
    {
      label: "Tahapan ICOFR Perbankan",
      text: "Bagaimana tahapan implementasi kerangka kerja ICOFR yang sesuai dengan standar audit OJK untuk bank umum?",
      icon: Landmark
    },
    {
      label: "Pilar GRC BUMN",
      text: "Apa saja pilar GRC terintegrasi yang wajib dipatuhi BUMN agar memperoleh skor Good Corporate Governance (GCG) tinggi?",
      icon: Building2
    },
    {
      label: "ITGC & COSO Audit",
      text: "Bagaimana kaitan kontrol TI umum (ITGC) seperti kontrol hak akses dan manajemen perubahan terhadap keandalan ICOFR?",
      icon: ShieldCheck
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" id="ai-advisor-drawer">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#02050c]/80 backdrop-blur-sm transition-opacity" 
      />

      {/* Slide-over panel */}
      <div ref={drawerRef} className="relative w-full max-w-xl bg-[#0b0f19] border-l border-slate-800 h-full flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-bumn-blue to-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-950/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">DSI Expert Advisor</h3>
              <p className="text-xs text-bumn-gold font-mono tracking-widest uppercase">GRC & ICOFR AI Consultant</p>
            </div>
          </div>
          
          <button 
            id="close-advisor-btn"
            onClick={onClose}
            aria-label="Tutup Konsultasi AI"
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sector context selector */}
        <div className="px-6 py-3 bg-slate-950/20 border-b border-slate-800/60 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold">Fokus Kepatuhan:</span>
          <div className="flex gap-2" id="advisor-context-selector">
            {[
              { id: "General", label: "Umum GRC" },
              { id: "BUMN", label: "Regulasi BUMN" },
              { id: "Banking", label: "OJK / Banking" }
            ].map((ctx) => (
              <button
                key={ctx.id}
                onClick={() => setSelectedContext(ctx.id as any)}
                className={`px-3 py-1 text-[10px] font-bold rounded-full border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                  selectedContext === ctx.id
                    ? "border-blue-500/50 bg-blue-950/40 text-blue-300"
                    : "border-slate-800 bg-slate-900/30 text-slate-400 hover:border-slate-700"
                }`}
              >
                {ctx.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" id="advisor-chat-stream">
          {messages.map((msg) => {
            const isBot = msg.sender === "bot";
            return (
              <div 
                key={msg.id} 
                className={`flex gap-3 text-left ${isBot ? "" : "flex-row-reverse"}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold ${
                  isBot 
                    ? "bg-blue-950 text-blue-400 border border-blue-500/20" 
                    : "bg-slate-800 text-slate-300 border border-slate-700"
                }`}>
                  {isBot ? "DSI" : "User"}
                </div>

                {/* Message Box */}
                <div className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isBot
                    ? "bg-slate-900/40 border border-slate-800 text-slate-300"
                    : "bg-bumn-blue text-white font-medium"
                }`}>
                  {/* Text Render - support basic bold markers inside mock or model returns */}
                  <div className="whitespace-pre-line prose prose-xs prose-invert">
                    {msg.text.split("**").map((part, index) => {
                      if (index % 2 === 1) {
                        return <strong key={index} className={isBot ? "text-white font-bold" : "text-slate-100 font-extrabold"}>{part}</strong>;
                      }
                      return part;
                    })}
                  </div>
                  
                  <span className={`block text-[9px] mt-2 text-right ${isBot ? "text-slate-500" : "text-white/60"}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 text-left">
              <div className="w-8 h-8 rounded-lg shrink-0 bg-blue-950 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-bold">
                DSI
              </div>
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                <span className="text-xs text-slate-500 font-mono italic">Advisor sedang memformulasikan saran...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Starter Queries Panel (Show only if messages has only the first welcome msg) */}
        {messages.length === 1 && (
          <div className="p-6 bg-slate-950/30 border-t border-slate-800/40 text-left space-y-3" id="starter-queries">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              Pertanyaan yang Sering Diajukan:
            </span>
            <div className="grid gap-2">
              {starterQueries.map((query, index) => {
                const Icon = query.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(query.text)}
                    className="w-full text-left p-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/20 hover:bg-slate-900/50 text-slate-300 hover:text-white transition-all flex items-center justify-between gap-3 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-bumn-gold shrink-0" />
                      <span>{query.label}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Text Input area */}
        <div className="p-4 sm:p-6 bg-slate-950/60 border-t border-slate-800 flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            id="advisor-text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isTyping) handleSendMessage();
            }}
            placeholder="Tulis pesan atau pertanyaan kepatuhan..."
            className="flex-1 bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            disabled={isTyping}
          />
          <button
            id="send-advisor-msg-btn"
            onClick={() => handleSendMessage()}
            disabled={isTyping || !inputValue.trim()}
            className="p-3 rounded-xl bg-bumn-blue hover:bg-blue-600 text-white font-bold disabled:opacity-40 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
