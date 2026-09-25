import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "../data/faqData";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function FaqSection({
  items,
  title = "Pertanyaan yang Sering Diajukan",
  subtitle = "Jawaban otoritatif seputar kepatuhan regulasi, metodologi audit, dan implementasi sistem.",
  badge = "FAQ Regulasi & Kepatuhan"
}: FaqSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="my-16 text-left" aria-labelledby="faq-section-title">
      <div className="space-y-3 mb-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-bumn-gold shrink-0" />
          <span>{badge}</span>
        </div>
        <h2
          id="faq-section-title"
          className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight"
        >
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          const controlId = `faq-answer-${index}`;
          const buttonId = `faq-question-${index}`;

          return (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-xl transition-colors duration-150 overflow-hidden"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={controlId}
                onClick={() => toggleItem(index)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-900/90 transition-colors focus:outline-none focus:ring-1 focus:ring-bumn-blue/50"
              >
                <span className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {item.question}
                </span>
                <span
                  className={`mt-1 p-1 rounded-md text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-bumn-gold" : ""
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={controlId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
