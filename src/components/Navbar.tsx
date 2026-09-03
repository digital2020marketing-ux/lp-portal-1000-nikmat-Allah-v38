import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { SMARTBOOK_LOGO_URL, CHECKOUT_URL, CURRENT_PRICE } from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all shadow-2xs">
      {/* Top Islamic Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#0E2A1D] via-[#D4AF37] to-[#0E2A1D] w-full" />

      <div className="max-w-4xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Editorial Title */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0E2A1D] shrink-0 border border-[#D4AF37]/60 p-1 flex items-center justify-center shadow-2xs">
            <img
              src={SMARTBOOK_LOGO_URL}
              alt="SmartBook.ID"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-lg"
              width={36}
              height={36}
              decoding="async"
              loading="eager"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold text-[13px] sm:text-[15px] text-[#0E2A1D] leading-tight whitespace-nowrap">
              Portal 1000 Nikmat
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#6E6A63] font-medium leading-none mt-0.5 whitespace-nowrap">
              SmartBook.ID
            </div>
          </div>
        </a>

        {/* Action Header Button - Responsive Size */}
        <div className="flex items-center shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout({ button_location: "navbar" })}
            className="px-3.5 py-1.5 rounded-full bg-[#E50914] hover:bg-[#D00812] active:scale-95 text-white font-serif font-bold text-[12px] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer border border-[#FF4D4D] whitespace-nowrap"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-white shrink-0" />
            <span>Beli ({CURRENT_PRICE})</span>
          </a>
        </div>

      </div>
    </header>
  );
};




