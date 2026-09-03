import React from "react";
import { 
  BookOpen, 
  Headphones, 
  Edit3, 
  Printer, 
  Layers, 
  Bot, 
  ArrowRight, 
  ShoppingCart 
} from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { CHECKOUT_URL, CORE_BENEFITS } from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const DeliverablesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen": return <BookOpen className="w-5 h-5" />;
      case "Headphones": return <Headphones className="w-5 h-5" />;
      case "Edit3": return <Edit3 className="w-5 h-5" />;
      case "Printer": return <Printer className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Bot": return <Bot className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-3xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>SISTEM TERPADU</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Headline & Subheadline (Strictly avoiding the word 'Fitur') */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[25px] tracking-tight leading-[1.25] mb-2">
          Satu Portal untuk Seluruh Perjalanan Muhasabah Anda
        </h2>
        <p className="text-[14px] text-[#4A453E] font-medium max-w-sm mx-auto mb-7 leading-relaxed">
          Tidak perlu mencari materi di banyak tempat. Semuanya sudah disatukan dalam satu sistem.
        </p>

        {/* 6 Core Benefit Cards */}
        <div className="space-y-3.5 text-left mb-8">
          {CORE_BENEFITS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#D4AF37]/45 shadow-xs flex flex-col justify-between hover:border-[#D4AF37] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#0E2A1D] border border-[#D4AF37]/40 flex items-center justify-center shadow-2xs">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-[#AA771C] bg-[#F5EFE6] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-[17px] sm:text-[18px] text-[#0E2A1D] mb-2">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#55504A] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rotated CTA under the cards */}
        <div className="max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout({ button_location: "core_benefits" })}
            className="w-full min-h-[54px] py-4 px-6 rounded-full bg-[#E50914] hover:bg-[#D00812] active:scale-98 text-white font-serif font-bold text-[16px] sm:text-[18px] shadow-[0_8px_25px_rgba(229,9,20,0.35)] transition-all flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#FF4D4D] text-center"
          >
            <ShoppingCart className="w-5 h-5 text-white shrink-0" />
            <span>SAYA MAU MULAI MUHASABAH</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
