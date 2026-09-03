import React from "react";
import { ArrowRight, ShoppingCart, Check } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { 
  CHECKOUT_URL, 
  CURRENT_PRICE, 
  NORMAL_PRICE,
  DASHBOARD_MOBILE_IMAGE_URL 
} from "../data/landingData";
import { trackInitiateCheckout } from "../utils/metaPixel";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-[#FAF7F2]">
      {/* Subtle warm ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[320px] bg-gradient-to-b from-[#D4AF37]/12 via-[#FAF7F2] to-transparent blur-3xl" />
      </div>

      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 text-center relative z-10">
        
        {/* Label kecil di atas headline */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D4AF37]/60 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider shadow-2xs mb-4">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>PORTAL 1000 NIKMAT ALLAH</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Headline & Subheadline */}
        <div className="space-y-2 mb-5">
          <h1 className="font-serif italic font-bold text-[25px] sm:text-[27px] text-[#181615] tracking-tight leading-[1.22]">
            Jangan Tunggu Kehilangan...
          </h1>
          <h2 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#0E2A1D] tracking-tight leading-[1.28]">
            Baru Menyadari Betapa Banyak Nikmat yang Sudah Allah Berikan
          </h2>
          <p className="text-[15px] text-[#3D3A36] leading-[1.6] font-normal pt-2 max-w-sm mx-auto">
            Luangkan hanya <strong className="text-[#0E2A1D] font-bold">5–10 menit sehari</strong> untuk membaca, mendengarkan, merenungkan, dan menuliskan nikmat Allah melalui satu portal digital terpadu.
          </p>
        </div>

        {/* Tambahan kalimat penegas */}
        <div className="bg-[#F5EFE6]/90 border border-[#D4AF37]/35 rounded-2xl py-3 px-4.5 mb-6 text-[13px] sm:text-[14px] text-[#423D37] leading-snug">
          <p className="font-semibold text-[#0E2A1D]">
            Tidak perlu bingung mulai dari mana.
          </p>
          <p className="font-semibold text-[#0E2A1D]">
            Tidak perlu menyediakan waktu berjam-jam.
          </p>
        </div>

        {/* Visual Mockup Portal di HP - Gambar Tampil Utuh Tanpa Terpotong */}
        <div className="my-6 relative max-w-[320px] sm:max-w-[340px] mx-auto">
          {/* Phone Shell */}
          <div className="relative rounded-[32px] p-2.5 bg-gradient-to-b from-[#1C2820] via-[#0E2A1D] to-[#122419] shadow-[0_20px_45px_rgba(14,42,29,0.25)] border-2 border-[#D4AF37]">
            {/* Top Speaker Bezel (Di atas layar, TIDAK menutupi konten gambar) */}
            <div className="flex items-center justify-center py-1 mb-1">
              <span className="w-10 h-1 bg-[#D4AF37]/40 rounded-full" />
            </div>

            {/* Screen Inner Container - Menampilkan seluruh gambar secara utuh */}
            <div className="rounded-[20px] overflow-hidden bg-white border border-[#D4AF37]/40 shadow-inner flex items-center justify-center">
              <img
                src={DASHBOARD_MOBILE_IMAGE_URL}
                alt="Tampilan Utuh Portal 1000 Nikmat Allah di HP"
                referrerPolicy="no-referrer"
                className="w-full h-auto block object-contain"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={491}
                height={644}
                style={{ aspectRatio: "491/644" }}
              />
            </div>

            {/* Bottom Bezel Indicator (Di bawah layar, TIDAK menutupi konten gambar) */}
            <div className="flex items-center justify-center py-1 mt-1">
              <span className="w-16 h-1 bg-[#D4AF37]/30 rounded-full" />
            </div>
          </div>

          <div className="text-center mt-2.5">
            <span className="text-[11px] sm:text-[12px] font-medium text-[#6E6A63] bg-[#EAE2D2]/60 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <span>📱</span> Tampilan asli portal dibuka langsung dari browser HP
            </span>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="bg-white rounded-2xl border border-[#D4AF37]/50 p-4.5 sm:p-5 shadow-xs mb-5 max-w-md mx-auto">
          <div className="text-[13px] sm:text-[14px] text-[#6E6A63] flex items-center justify-center gap-2">
            <span>Harga Normal:</span>
            <span className="line-through decoration-[#B83A38] decoration-2 font-semibold text-[#8C867A]">
              {NORMAL_PRICE}
            </span>
          </div>

          <div className="text-[12px] sm:text-[13px] font-bold text-[#AA771C] uppercase tracking-widest mt-1">
            HARGA PELUNCURAN
          </div>

          <div className="font-serif italic font-bold text-3xl sm:text-4xl text-[#0E2A1D] tracking-tight my-1">
            {CURRENT_PRICE}
          </div>

          <div className="text-[12px] sm:text-[13px] text-[#55504A] font-medium">
            Sekali bayar • Tanpa biaya bulanan • Akses penuh digital
          </div>
        </div>

        {/* Primary CTA */}
        <div className="w-full space-y-3 mb-2 max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout({ button_location: "hero" })}
            className="w-full min-h-[52px] sm:min-h-[56px] px-6 rounded-full bg-[#E50914] hover:bg-[#D00812] active:scale-98 text-white font-serif font-bold text-[16px] sm:text-[18px] shadow-[0_8px_25px_rgba(229,9,20,0.35)] transition-all flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#FF4D4D] text-center"
          >
            <ShoppingCart className="w-5 h-5 text-white shrink-0" />
            <span>MULAI PERJALANAN SYUKUR SAYA</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </a>

          {/* Under CTA Badges */}
          <div className="flex flex-col items-center justify-center gap-1.5 pt-1.5 text-[12px] text-[#55504A] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" /> Akses instan melalui browser
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" /> Tidak perlu instal aplikasi rumit
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" /> Seluruh materi dalam 1 portal terpadu
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
