import React from "react";
import { Sparkles, Clock, Compass } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-4 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>RUANG KECIL UNTUK BERHENTI</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Headline & Time Highlight */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[25px] tracking-tight leading-[1.25] mb-2">
          Portal Ini Membantu Anda Berhenti Sejenak.
        </h2>

        <div className="my-2.5">
          <span className="text-[13px] font-semibold text-[#6E6A63] block">
            Bukan berjam-jam.
          </span>
          <div className="font-serif font-bold text-[26px] sm:text-[28px] text-[#0E2A1D] tracking-tight mt-0.5">
            Cukup 5–10 Menit Sehari.
          </div>
        </div>

        {/* Body Copy */}
        <div className="bg-white rounded-2xl border border-[#D4AF37]/50 p-5 shadow-xs mt-5 mb-5 text-left space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0E2A1D] text-[#F9E8B8] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Compass className="w-4 h-4" />
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#332E29] leading-[1.65] font-normal">
              Portal 1000 Nikmat Allah dirancang untuk membantu Anda memiliki ruang kecil untuk berhenti dari kesibukan, membaca atau mendengarkan satu refleksi, menghubungkannya dengan kehidupan Anda, lalu menuliskan apa yang ingin disyukuri.
            </p>
          </div>
        </div>

        {/* Closing Highlight */}
        <div className="inline-block py-2.5 px-6 rounded-2xl bg-[#F5EFE6] border border-[#D4AF37]/40 text-center">
          <p className="font-serif font-bold text-[#0E2A1D] text-[16px] sm:text-[18px]">
            Sedikit demi sedikit.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#55504A] font-medium">
            Sesuai waktu Anda.
          </p>
        </div>

      </div>
    </section>
  );
};
