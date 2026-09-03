import React from "react";
import { HeartPulse, Users, Clock, Compass } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { PROBLEM_CARDS } from "../data/landingData";

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartPulse": return <HeartPulse className="w-5 h-5 text-[#B83A38]" />;
      case "Users": return <Users className="w-5 h-5 text-[#AA771C]" />;
      case "Clock": return <Clock className="w-5 h-5 text-[#155E75]" />;
      case "Compass": return <Compass className="w-5 h-5 text-[#0E2A1D]" />;
      default: return <HeartPulse className="w-5 h-5 text-[#0E2A1D]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#EFE8DD] border-b border-[#D4AF37]/30 relative overflow-hidden">
      {/* Gentle vignette backdrop */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#EFE8DD]/50 to-[#E3D9CB]/60 pointer-events-none" />

      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Subtitle / Judul Kecil */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5DDD0] border border-[#D4AF37]/40 text-[11px] sm:text-xs font-bold text-[#4A453E] uppercase tracking-wider mb-3.5">
          <RubElHizb size={10} className="text-[#AA771C]" />
          <span>Mungkin Anda Pernah Merasakan Ini...</span>
          <RubElHizb size={10} className="text-[#AA771C]" />
        </div>

        {/* Headline */}
        <div className="space-y-1.5 mb-7">
          <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[25px] tracking-tight leading-[1.25]">
            Ada Nikmat yang Terasa Biasa...
          </h2>
          <h3 className="font-serif font-bold text-[#0E2A1D] text-[19px] sm:text-[20px] tracking-tight leading-[1.3]">
            Sampai Suatu Hari Keadaannya Berubah.
          </h3>
        </div>

        {/* 4 Kartu Refleksi */}
        <div className="space-y-3.5 text-left mb-7">
          {PROBLEM_CARDS.map((card) => (
            <div 
              key={card.id}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4.5 sm:p-5 border border-[#D4AF37]/40 shadow-xs hover:border-[#D4AF37] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 flex items-center justify-center shadow-2xs">
                  {getIcon(card.icon)}
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#8C867A] uppercase tracking-wider bg-[#F5EFE6] px-2.5 py-0.5 rounded-full">
                  {card.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-[16px] sm:text-[17px] text-[#181615] leading-snug">
                  {card.lead}
                </h4>
                <p className="text-[14px] sm:text-[15px] font-semibold text-[#8A2424] leading-snug">
                  {card.twist}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridging Copy */}
        <div className="bg-white/80 border-2 border-[#D4AF37]/50 rounded-2xl p-5 sm:p-6 shadow-xs max-w-xl mx-auto">
          <p className="text-[15px] sm:text-[16px] text-[#2C2824] leading-[1.6] font-medium">
            Padahal setiap hari ada begitu banyak nikmat yang mungkin kita lihat...
          </p>
          <p className="text-[16px] sm:text-[17px] font-serif font-bold text-[#0E2A1D] mt-1.5 leading-snug">
            tetapi belum benar-benar kita sadari.
          </p>
        </div>

      </div>
    </section>
  );
};
