import React from "react";
import { MousePointerClick, CreditCard, Sparkles, CheckCircle, MessageCircle } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { ACTIVATION_STEPS, WHATSAPP_SUPPORT_URL, WHATSAPP_DISPLAY } from "../data/landingData";

export const ActivationStepsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <MousePointerClick className="w-5 h-5 text-[#AA771C]" />;
      case 1: return <CreditCard className="w-5 h-5 text-[#AA771C]" />;
      case 2: return <Sparkles className="w-5 h-5 text-[#AA771C]" />;
      default: return <Sparkles className="w-5 h-5 text-[#AA771C]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>CARA MULAI</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[28px] sm:text-4xl tracking-tight leading-[1.25] mb-8">
          Hanya 3 Langkah untuk Mulai
        </h2>

        {/* 3 Langkah Cards */}
        <div className="space-y-4 text-left mb-8">
          {ACTIVATION_STEPS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#D4AF37]/45 shadow-xs flex items-start gap-4 transition-all hover:border-[#D4AF37]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0E2A1D] text-[#F9E8B8] font-serif font-bold text-base flex items-center justify-center shrink-0 border border-[#D4AF37]/50 shadow-2xs">
                {item.step}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {getIcon(idx)}
                  <h3 className="font-serif font-bold text-[17px] sm:text-[18px] text-[#0E2A1D]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#55504A] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Selesai */}
        <div className="bg-gradient-to-br from-[#071810] via-[#0E2A1D] to-[#071810] text-[#FAF7F2] rounded-3xl p-6 sm:p-7 border-2 border-[#D4AF37] shadow-md text-center max-w-lg mx-auto">
          <h3 className="font-serif italic font-bold text-3xl sm:text-4xl text-[#F9E8B8] tracking-tight mb-1">
            Selesai.
          </h3>
          <p className="text-[15px] sm:text-[16px] text-emerald-100 font-bold mb-3">
            Anda dapat mulai menggunakan portal.
          </p>
          <div className="pt-2 border-t border-[#163B2A]">
            <a
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#E6C875] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Belum menerima link akses? Hubungi WA Admin: <strong>{WHATSAPP_DISPLAY}</strong></span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
