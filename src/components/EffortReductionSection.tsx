import React from "react";
import { RubElHizb } from "./IslamicOrnaments";

export const EffortReductionSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>KEMUDAHAN MEMULAI</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[27px] tracking-tight leading-[1.25] mb-5">
          Anda Tidak Perlu Merancang Rutinitas Muhasabah Sendiri
        </h2>

        {/* Reflection on common hurdles */}
        <div className="bg-white rounded-3xl border border-[#D4AF37]/45 p-5 sm:p-7 shadow-xs text-left mb-6 space-y-4">
          <p className="text-[15px] sm:text-[16px] text-[#332E29] font-medium leading-relaxed">
            Sering kali niat untuk mulai sudah ada.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#55504A] font-medium leading-relaxed">
            Yang membuat tertunda justru pertanyaan sederhana seperti:
          </p>

          <div className="space-y-2.5 pl-1">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30">
              <span className="w-6 h-6 rounded-full bg-[#EAE2D2] text-[#8C6D23] font-serif font-bold text-xs flex items-center justify-center shrink-0">?</span>
              <span className="text-[14px] sm:text-[15px] font-bold text-[#181615]">
                “Saya harus mulai dari mana?”
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30">
              <span className="w-6 h-6 rounded-full bg-[#EAE2D2] text-[#8C6D23] font-serif font-bold text-xs flex items-center justify-center shrink-0">?</span>
              <span className="text-[14px] sm:text-[15px] font-bold text-[#181615]">
                “Hari ini sebaiknya merenungkan apa?”
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30">
              <span className="w-6 h-6 rounded-full bg-[#EAE2D2] text-[#8C6D23] font-serif font-bold text-xs flex items-center justify-center shrink-0">?</span>
              <span className="text-[14px] sm:text-[15px] font-bold text-[#181615]">
                “Setelah membaca, apa yang perlu saya lakukan?”
              </span>
            </div>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#4A453E] font-medium leading-relaxed pt-2 border-t border-[#EAE2D2]">
            Portal 1000 Nikmat Allah membantu membuat prosesnya lebih sederhana.
          </p>
        </div>

        {/* The Solution Highlight Box */}
        <div className="bg-gradient-to-br from-[#071810] via-[#0E2A1D] to-[#071810] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-lg text-center space-y-3">
          <h3 className="font-serif italic font-bold text-xl sm:text-2xl text-[#F9E8B8] tracking-tight leading-snug">
            Anda cukup buka portal, pilih satu pembahasan, lalu mulai.
          </h3>
          
          <div className="space-y-1 text-[14px] sm:text-[15px] text-emerald-100 font-medium">
            <p>Tidak perlu menyusun sistem sendiri.</p>
            <p>Tidak perlu membuat rutinitas yang rumit.</p>
          </div>

          <div className="pt-2 border-t border-[#D4AF37]/30">
            <p className="text-[15px] sm:text-[16px] text-white font-bold">
              Sedikit waktu. Satu langkah. Lanjutkan lagi ketika siap.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
