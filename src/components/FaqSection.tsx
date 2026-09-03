import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { FAQS, WHATSAPP_HELP_URL, WHATSAPP_DISPLAY } from "../data/landingData";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#AA771C]" />
          <span>PERTANYAAN UMUM</span>
          <HelpCircle className="w-3.5 h-3.5 text-[#AA771C]" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[28px] sm:text-4xl tracking-tight leading-[1.25] mb-8">
          Pertanyaan yang Sering Diajukan
        </h2>

        {/* 10 Accordion Items */}
        <div className="space-y-3 text-left mb-8">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#D4AF37]/45 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4.5 sm:p-5 flex items-center justify-between gap-3 text-left font-serif font-bold text-[15px] sm:text-[17px] text-[#0E2A1D] cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#AA771C] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-4.5 sm:px-5 sm:pb-5 pt-1 text-[14px] sm:text-[15px] text-[#4A453E] leading-[1.65] font-normal border-t border-[#EAE2D2] bg-[#FAF7F2]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note - Khusus Jika Belum Menerima Link Akses */}
        <div className="bg-white rounded-2xl p-5 border border-[#D4AF37]/50 shadow-xs max-w-lg mx-auto space-y-3 text-center">
          <div className="space-y-1">
            <p className="text-[14px] sm:text-[15px] text-[#0E2A1D] font-bold">
              Belum menerima link akses setelah pembayaran?
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#6B655D] leading-relaxed">
              Layanan WhatsApp admin ini khusus bagi Anda yang telah menyelesaikan pembayaran namun belum menerima link akses di email.
            </p>
          </div>
          <a
            href={WHATSAPP_HELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-[13px] sm:text-[14px] font-bold shadow-xs transition-all border border-[#1eb757]"
          >
            <MessageCircle className="w-4 h-4 text-white shrink-0" />
            <span>Hubungi WA Admin (Kendala Link Akses): {WHATSAPP_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
