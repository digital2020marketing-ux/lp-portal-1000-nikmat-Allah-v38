import React from "react";
import { MessageCircle } from "lucide-react";
import { SMARTBOOK_LOGO_URL, WHATSAPP_HELP_URL, WHATSAPP_DISPLAY } from "../data/landingData";
import { RubElHizb } from "./IslamicOrnaments";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#071810] via-[#05130D] to-[#020A06] text-[#FAF7F2] py-12 border-t-2 border-[#D4AF37]/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 relative z-10">
        
        {/* Brand & Identity */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0E2A1D] p-1 border border-[#D4AF37]/60 shadow-xs">
              <img
                src={SMARTBOOK_LOGO_URL}
                alt="SmartBook.ID"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={36}
                height={36}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="font-serif italic font-bold text-lg sm:text-xl text-[#F9E8B8] flex items-center gap-1.5">
              <span>Portal 1000 Nikmat Allah</span>
              <RubElHizb size={12} className="text-[#D4AF37]" />
            </span>
          </div>

          <div className="font-serif font-bold text-sm text-[#E6C875]">
            SmartBook.ID
          </div>

          <p className="text-xs sm:text-sm text-[#C5BFB5]">
            Sistem Muhasabah &amp; Jurnal Syukur Digital Terpadu
          </p>
          <p className="text-xs sm:text-sm text-[#A39E93]">
            Disusun &amp; Diterbitkan oleh: <strong className="text-[#F9E8B8]">Team SmartBook.ID</strong>
          </p>
        </div>

        {/* Customer Support & WhatsApp - Khusus Kendala Link Akses */}
        <div className="pt-2">
          <a
            href={WHATSAPP_HELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0E2A1D] hover:bg-[#153E2B] border border-[#D4AF37]/50 text-[#F9E8B8] hover:text-white transition-all text-xs sm:text-sm font-semibold shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Belum Terima Link Akses? WA Admin: <strong className="text-white underline decoration-[#25D366] underline-offset-2">{WHATSAPP_DISPLAY}</strong></span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] sm:text-[12px] text-[#8C867A] pt-4 border-t border-[#163B2A]/80">
          © 2026 Portal 1000 Nikmat Allah — Team SmartBook.ID. Hak Cipta Dilindungi.
        </div>

      </div>
    </footer>
  );
};
