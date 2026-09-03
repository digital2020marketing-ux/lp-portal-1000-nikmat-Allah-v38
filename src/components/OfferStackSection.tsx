import React from "react";
import { 
  Check, 
  ArrowRight, 
  ShoppingCart, 
  ShieldCheck, 
  Smartphone
} from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { 
  CHECKOUT_URL, 
  CURRENT_PRICE, 
  NORMAL_PRICE, 
  OFFER_CHECKLIST
} from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const OfferStackSection: React.FC = () => {
  return (
    <section id="penawaran" className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>PENAWARAN HARGA PELUNCURAN</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[27px] tracking-tight leading-[1.25] mb-2">
          Paket Perjalanan Syukur
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#55504A] font-medium max-w-sm mx-auto mb-6">
          Dengan satu kali pembayaran, Anda mendapatkan akses lengkap ke:
        </p>

        {/* Main Offer Card Container — Daftar Ringkas */}
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden text-left mb-6">
          {/* Checklist Items */}
          <div className="p-5 sm:p-6 space-y-3.5 bg-white">
            {OFFER_CHECKLIST.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0E2A1D] text-[#F9E8B8] flex items-center justify-center shrink-0 border border-[#D4AF37]/50 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#181615]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 flex items-center justify-center gap-2 text-[12px] sm:text-[13px] text-[#55504A] font-medium border-t border-[#EAE2D2] bg-[#FAF7F2]/60">
            <Smartphone className="w-4 h-4 text-[#AA771C]" />
            <span>Format digital responsif untuk perangkat Anda</span>
          </div>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Pricing & Value Summary */}
          <div className="p-5 sm:p-7 bg-[#FAF7F2] text-center space-y-3">
            <div className="text-[14px] sm:text-[15px] text-[#6E6A63] font-medium flex items-center justify-center gap-2">
              <span>Harga Normal:</span>
              <span className="line-through decoration-[#B83A38] decoration-2 font-bold text-[#8C867A] text-[17px]">
                {NORMAL_PRICE}
              </span>
            </div>

            <div className="text-[12px] sm:text-[13px] font-bold text-[#AA771C] uppercase tracking-widest">
              HARGA PELUNCURAN
            </div>

            <div className="font-serif italic font-bold text-4xl sm:text-5xl md:text-6xl text-[#0E2A1D] tracking-tight">
              {CURRENT_PRICE}
            </div>

            <div className="space-y-1 text-[13px] sm:text-[14px] text-[#423D37] font-semibold pt-1">
              <p>Sekali bayar.</p>
              <p className="text-[#0E2A1D]">Gunakan kembali kapan pun Anda ingin bermuhasabah.</p>
            </div>

            {/* CTA Besar */}
            <div className="pt-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout({ button_location: "offer_stack" })}
                className="w-full min-h-[56px] py-4 px-6 rounded-full bg-[#E50914] hover:bg-[#D00812] active:scale-98 text-white font-serif font-bold text-[17px] sm:text-[20px] shadow-[0_10px_30px_rgba(229,9,20,0.38)] transition-all flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#FF4D4D] text-center"
              >
                <ShoppingCart className="w-5 h-5 text-white shrink-0" />
                <span>YA, SAYA MAU AKSES {CURRENT_PRICE}</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </a>

              <p className="text-[12px] sm:text-[13px] text-[#6E6A63] mt-3 flex items-center justify-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Checkout melalui Scalev</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
