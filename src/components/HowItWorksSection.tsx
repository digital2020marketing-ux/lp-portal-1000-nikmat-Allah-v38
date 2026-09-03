import React from "react";
import { Compass, Headphones, Sparkles, Edit3, CalendarCheck } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { HOW_IT_WORKS_STEPS } from "../data/landingData";

export const HowItWorksSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-5 h-5" />;
      case "Headphones": return <Headphones className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Edit3": return <Edit3 className="w-5 h-5" />;
      case "CalendarCheck": return <CalendarCheck className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>MEKANISME PENGGUNAAN</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Title */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[25px] tracking-tight leading-[1.25] mb-6">
          Cara Menggunakannya Sangat Sederhana
        </h2>

        {/* 5 Steps Visual Flow */}
        <div className="space-y-3 text-left mb-8">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-4.5 sm:p-5 border border-[#D4AF37]/45 shadow-xs flex items-start gap-4 transition-all hover:border-[#D4AF37]"
            >
              {/* Number Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#0E2A1D] text-[#F9E8B8] font-serif font-bold text-base flex items-center justify-center shrink-0 border border-[#D4AF37]/50 shadow-2xs">
                {item.step}
              </div>

              {/* Step Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#AA771C]">
                    {getIcon(item.icon)}
                  </span>
                  <h3 className="font-serif font-bold text-[16px] sm:text-[18px] text-[#0E2A1D] tracking-wide">
                    {item.label}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#4A453E] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-br from-[#071810] via-[#0E2A1D] to-[#071810] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-lg text-center">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#E6C875] uppercase tracking-widest font-bold mb-1">
            <RubElHizb size={10} className="text-[#D4AF37]" />
            <span>RITUAL HARIAN TERARAH</span>
            <RubElHizb size={10} className="text-[#D4AF37]" />
          </div>

          <h3 className="font-serif italic font-bold text-3xl sm:text-4xl text-[#F9E8B8] tracking-tight my-2">
            5–10 Menit Sehari.
          </h3>

          <p className="text-[15px] sm:text-[16px] text-emerald-100 font-medium">
            Ringan untuk dimulai. Mudah untuk diulang.
          </p>
        </div>

      </div>
    </section>
  );
};
