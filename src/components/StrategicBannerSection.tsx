import React from "react";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { CHECKOUT_URL, CURRENT_PRICE } from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const StrategicBannerSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#071810] via-[#0E2A1D] to-[#071810] text-[#FAF7F2] relative overflow-hidden border-t-2 border-b-2 border-[#D4AF37]">
      <div className="max-w-md sm:max-w-3xl mx-auto px-4.5 sm:px-6 text-center relative z-10 space-y-5">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[12px] font-semibold text-[#F9E8B8]">
          <RubElHizb size={11} className="text-[#D4AF37]" />
          <span>Muhasabah &amp; Jurnal Syukur</span>
          <RubElHizb size={11} className="text-[#D4AF37]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-serif italic font-bold text-[24px] sm:text-3xl md:text-4xl text-[#F9E8B8] leading-[1.25]">
            Jangan Menunggu Kehilangan untuk Mulai Menghargai
          </h2>
          <p className="text-emerald-100/90 text-[15px] sm:text-[16px] leading-[1.5] font-normal">
            Setiap hari yang berlalu tanpa syukur adalah hari yang terlewat begitu saja.
          </p>
          <p className="text-[#F9E8B8] font-bold text-[15px] sm:text-[16px]">
            Mulai luangkan 5–10 menit hari ini.
          </p>
        </div>

        <div className="pt-2">
          <div className="text-[#F9E8B8] font-serif font-bold text-2xl sm:text-3xl">
            Harga Peluncuran {CURRENT_PRICE}
          </div>
          <p className="text-[13px] text-emerald-200/90 font-medium mt-1">
            Sekali bayar • Tanpa biaya bulanan
          </p>
        </div>

        <div className="space-y-3 pt-1">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout({ button_location: "strategic_bottom_banner" })}
            className="w-full min-h-[56px] py-4 px-6 rounded-full bg-[#E50914] hover:bg-[#D00812] active:scale-98 text-white font-serif font-bold text-[18px] sm:text-[19px] shadow-[0_10px_28px_rgba(229,9,20,0.45)] transition-all flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#FF4D4D]"
          >
            <ShoppingCart className="w-5 h-5 text-white shrink-0" />
            <span>AMBIL AKSES SEKARANG</span>
            <ArrowRight className="w-5 h-5 text-white shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};

