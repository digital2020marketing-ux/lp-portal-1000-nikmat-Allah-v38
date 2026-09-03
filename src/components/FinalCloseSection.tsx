import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { RubElHizb, CornerOrnament } from "./IslamicOrnaments";
import { CHECKOUT_URL, CURRENT_PRICE, NORMAL_PRICE } from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const FinalCloseSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle warm ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[400px] bg-gradient-to-b from-[#D4AF37]/10 via-[#FAF7F2] to-transparent blur-3xl" />
      </div>

      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* 1. REFLEKSI EMOSIONAL */}
        {/* Section Headline */}
        <div className="space-y-1.5 mb-5">
          <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[25px] tracking-tight leading-[1.25]">
            Jangan Tunggu Kehilangan...
          </h2>
          <h3 className="font-serif font-bold text-[#0E2A1D] text-[19px] sm:text-[20px] tracking-tight leading-[1.3]">
            Untuk Mulai Menghargai Apa yang Masih Ada Hari Ini
          </h3>
        </div>

        {/* Emotional Reflection Copy */}
        <div className="bg-white rounded-2xl border border-[#D4AF37]/45 p-5 shadow-xs text-left mb-6 space-y-3">
          <p className="text-[15px] sm:text-[16px] text-[#2C2824] leading-[1.7] font-medium">
            Hari ini mungkin kita masih bisa melihat orang-orang yang kita sayangi.
          </p>
          <div className="space-y-1.5 text-[14px] sm:text-[15px] text-[#55504A] font-medium pl-3 border-l-2 border-[#D4AF37]">
            <p>Masih bisa berjalan.</p>
            <p>Masih bisa makan.</p>
            <p>Masih bisa berbicara.</p>
            <p>Masih memiliki waktu.</p>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#2C2824] leading-[1.7] font-medium pt-2">
            Masih memiliki begitu banyak hal yang terasa biasa... karena semuanya masih ada.
          </p>

          <div className="pt-3 border-t border-[#EAE2D2] space-y-1">
            <p className="text-[14px] sm:text-[15px] text-[#6E6A63] font-medium">
              Mungkin kita tidak akan pernah mampu menghitung seluruh nikmat Allah.
            </p>
            <p className="text-[15px] sm:text-[16px] font-serif font-bold text-[#0E2A1D]">
              Tetapi kita bisa mulai belajar menyadarinya.
            </p>
          </div>
        </div>

        {/* Tiga Baris Besar */}
        <div className="space-y-2 mb-8 py-4 border-y border-[#D4AF37]/35">
          <div className="font-serif italic font-bold text-2xl sm:text-3xl text-[#181615] tracking-tight">
            Satu nikmat.
          </div>
          <div className="font-serif italic font-bold text-2xl sm:text-3xl text-[#0E2A1D] tracking-tight">
            Satu refleksi.
          </div>
          <div className="font-serif italic font-bold text-2xl sm:text-3xl text-[#AA771C] tracking-tight">
            Lima menit hari ini.
          </div>
        </div>

        {/* 2. AYAT AL-QUR'AN */}
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37]/60 p-6 sm:p-8 shadow-xs relative overflow-hidden mb-8">
          <CornerOrnament position="tl" className="text-[#D4AF37]/60" />
          <CornerOrnament position="tr" className="text-[#D4AF37]/60" />

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <RubElHizb size={12} className="text-[#D4AF37]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="font-arabic text-2xl sm:text-3xl text-[#0E2A1D] leading-loose mb-3">
            وَإِن تَعُدُّواْ نِعْمَتَ ٱللَّهِ لَا تُحْصُوهَآ
          </p>

          <blockquote className="font-serif italic text-[15px] sm:text-[16px] text-[#2C2824] leading-relaxed max-w-lg mx-auto">
            “Dan jika kamu menghitung nikmat Allah, niscaya kamu tidak akan mampu menghitungnya.”
          </blockquote>

          <div className="mt-2.5 text-[12px] sm:text-[13px] font-bold text-[#AA771C] uppercase tracking-wider">
            — QS. Ibrahim: 34
          </div>
        </div>

        {/* 3. HARGA & 4. CTA */}
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-7 shadow-lg max-w-md mx-auto mb-4">
          <div className="text-[13px] sm:text-[14px] text-[#6E6A63] flex items-center justify-center gap-2">
            <span>Harga normal:</span>
            <span className="line-through decoration-[#B83A38] decoration-2 font-bold text-[#8C867A] text-[16px]">
              {NORMAL_PRICE}
            </span>
          </div>

          <div className="text-[12px] font-bold text-[#AA771C] uppercase tracking-widest mt-1">
            HARGA PELUNCURAN
          </div>

          <div className="font-serif italic font-bold text-4xl sm:text-5xl text-[#0E2A1D] tracking-tight my-1">
            {CURRENT_PRICE}
          </div>

          <div className="text-[12px] sm:text-[13px] text-[#55504A] font-medium mb-5">
            Sekali bayar • Tanpa biaya bulanan
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout({ button_location: "final_close" })}
            className="w-full min-h-[54px] sm:min-h-[56px] py-4 px-6 rounded-full bg-[#E50914] hover:bg-[#D00812] active:scale-98 text-white font-serif font-bold text-[16px] sm:text-[18px] shadow-[0_10px_30px_rgba(229,9,20,0.38)] transition-all flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#FF4D4D] text-center"
          >
            <ShoppingCart className="w-5 h-5 text-white shrink-0" />
            <span>MULAI PERJALANAN SYUKUR SAYA</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
