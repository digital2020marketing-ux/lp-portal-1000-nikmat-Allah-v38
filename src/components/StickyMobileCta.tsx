import React, { useState, useEffect } from "react";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CHECKOUT_URL, CURRENT_PRICE } from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan sticky CTA setelah melewati 350px scroll
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-300"
      id="sticky-mobile-cta"
    >
      <div className="w-full max-w-[480px] px-3 pb-3 pointer-events-auto">
        <div className="bg-[#0E2A1D]/95 backdrop-blur-md rounded-2xl border-2 border-[#D4AF37] p-3 shadow-2xl flex items-center justify-between gap-3">
          
          {/* Harga & Status */}
          <div className="pl-1">
            <div className="font-serif font-bold text-white text-[17px] leading-tight">
              {CURRENT_PRICE}
            </div>
            <div className="text-[11px] font-medium text-[#F9E8B8] tracking-wide">
              Sekali Bayar
            </div>
          </div>

          {/* Button Ambil Akses */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout({ button_location: "sticky_cta" })}
            className="py-2.5 px-4 sm:px-5 rounded-xl bg-[#E50914] hover:bg-[#D00812] active:scale-98 text-white font-serif font-bold text-[13px] sm:text-[14px] shadow-lg flex items-center gap-1.5 transition-all cursor-pointer shrink-0 border border-[#FF4D4D]"
          >
            <ShoppingCart className="w-4 h-4 text-white shrink-0" />
            <span>AMBIL AKSES</span>
            <ArrowRight className="w-3.5 h-3.5 text-white shrink-0" />
          </a>

        </div>
      </div>
    </div>
  );
};
