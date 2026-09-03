import React from "react";
import { ShieldCheck, Award, AlertCircle, CheckCircle2, HelpCircle, MessageCircle } from "lucide-react";
import { RubElHizb } from "./IslamicOrnaments";
import { 
  SMARTBOOK_LOGO_URL, 
  BRAND_SUBTITLE,
  TRANSPARENCY_NOT,
  WHATSAPP_SUPPORT_URL,
  WHATSAPP_DISPLAY
} from "../data/landingData";

export const TrustSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-md sm:max-w-2xl mx-auto px-4.5 sm:px-6 relative z-10 text-center">
        
        {/* Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider mb-3.5 shadow-2xs">
          <RubElHizb size={10} className="text-[#D4AF37]" />
          <span>TRANSPARANSI &amp; PENGEMBANG</span>
          <RubElHizb size={10} className="text-[#D4AF37]" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[27px] tracking-tight leading-[1.25] mb-3">
          Disusun &amp; Dikembangkan oleh SmartBook.ID
        </h2>

        <p className="text-[14px] sm:text-[15px] text-[#4A453E] font-medium max-w-xl mx-auto mb-7 leading-relaxed">
          SmartBook.ID mengembangkan media edukasi Islami digital yang dirancang agar terstruktur, mudah diakses, dan langsung dapat digunakan dari perangkat sehari-hari.
        </p>

        {/* Authority & Publisher Card */}
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37]/60 p-5 sm:p-7 shadow-xs text-center mb-6 space-y-3">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0E2A1D] border-2 border-[#D4AF37] p-2 mx-auto flex items-center justify-center shadow-md">
            <img
              src={SMARTBOOK_LOGO_URL}
              alt="SmartBook.ID Logo"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width={80}
              height={80}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          <div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-[#0E2A1D]">
              Team SmartBook.ID
            </div>
            <div className="text-[13px] sm:text-[14px] font-semibold text-[#AA771C] mt-1">
              {BRAND_SUBTITLE}
            </div>
          </div>
        </div>

        {/* Transparency Box */}
        <div className="bg-white rounded-3xl border border-[#D4AF37]/50 p-5 sm:p-7 shadow-xs text-left space-y-5 mb-6">
          <div className="flex items-center gap-2 pb-3 border-b border-[#EAE2D2]">
            <AlertCircle className="w-4 h-4 text-[#AA771C]" />
            <h3 className="font-serif font-bold text-[16px] sm:text-[17px] text-[#181615]">
              Transparansi Produk
            </h3>
          </div>

          {/* What it is NOT */}
          <div>
            <div className="text-[11px] sm:text-[12px] font-bold text-[#8A2424] uppercase tracking-wider mb-2.5">
              Portal ini:
            </div>
            <div className="space-y-2">
              {TRANSPARENCY_NOT.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-rose-50 text-[#8A2424] flex items-center justify-center shrink-0 border border-rose-200 text-[10px] font-bold">
                    ✕
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#3D3A36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What it IS */}
          <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#D4AF37]/40">
            <div className="text-[11px] sm:text-[12px] font-bold text-[#0E2A1D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Portal ini adalah:</span>
            </div>
            <p className="text-[14px] sm:text-[15px] font-serif font-bold text-[#0E2A1D] leading-snug">
              Media bantu untuk membaca, mendengarkan, menulis, dan melakukan refleksi nikmat Allah secara lebih terstruktur.
            </p>
          </div>
        </div>

        {/* Support Statement */}
        <div className="bg-[#FAF7F2] rounded-2xl p-4.5 border border-[#D4AF37]/40 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#0E2A1D] font-serif font-bold text-[15px]">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Bantuan Akses &amp; Pengiriman Link</span>
          </div>
          <p className="text-[13px] text-[#55504A] leading-relaxed">
            Setelah pembayaran berhasil, panduan dan link akses dikirimkan otomatis ke email Anda. Jika Anda tidak menerima link di email, hubungi WA admin untuk bantuan pengiriman link akses.
          </p>
          <a
            href={WHATSAPP_SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-[13px] font-bold shadow-xs transition-all border border-[#1eb757]"
          >
            <MessageCircle className="w-4 h-4 text-white shrink-0" />
            <span>Belum Terima Link? Hubungi WA Admin</span>
          </a>
        </div>

      </div>
    </section>
  );
};
