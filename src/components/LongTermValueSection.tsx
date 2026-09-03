import React from "react";
import { RubElHizb } from "./IslamicOrnaments";

export const LongTermValueSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>NILAI JANGKA PANJANG</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[27px] tracking-tight leading-[1.25] mb-5">
          Bukan untuk Sekali Dipakai
        </h2>

        {/* Copy Box */}
        <div className="bg-white rounded-3xl border border-[#D4AF37]/45 p-6 sm:p-8 shadow-xs text-left space-y-4 mb-6">
          <p className="text-[15px] sm:text-[16px] text-[#2C2824] leading-[1.65] font-medium">
            Portal ini tidak dibuat untuk dibuka sekali lalu selesai.
          </p>

          <p className="text-[15px] sm:text-[16px] text-[#4A453E] leading-[1.65] font-normal">
            Anda dapat kembali menggunakannya ketika ingin berhenti sejenak, mencari bahan refleksi, atau menuliskan hal-hal yang ingin disyukuri.
          </p>

          <div className="pt-4 border-t border-[#EAE2D2] text-center sm:text-left">
            <p className="text-[15px] sm:text-[16px] text-[#0E2A1D] leading-relaxed font-semibold">
              Satu akses yang bisa kembali Anda gunakan setiap kali ingin berhenti, merenung, dan bersyukur.
            </p>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="bg-gradient-to-br from-[#071810] via-[#0E2A1D] to-[#071810] text-[#FAF7F2] rounded-3xl p-6 sm:p-7 border-2 border-[#D4AF37] shadow-md space-y-2 text-center">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F9E8B8]">
            Tidak ada biaya bulanan.
          </h3>
          <p className="text-[14px] sm:text-[15px] text-emerald-100 font-medium">
            Tidak perlu membeli akses baru setiap kali ingin kembali menggunakannya.
          </p>
        </div>

      </div>
    </section>
  );
};
