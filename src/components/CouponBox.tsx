import React, { useState } from "react";
import { Copy, Check, Tag } from "lucide-react";

interface CouponBoxProps {
  variant?: "hero" | "pricing" | "modal" | "compact";
  className?: string;
}

export const CouponBox: React.FC<CouponBoxProps> = ({ variant = "pricing", className = "" }) => {
  const [copied, setCopied] = useState(false);
  const couponCode = "berkah";

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(couponCode);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = couponCode;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className={`bg-[#F4EFE6] rounded-xl px-4 py-2.5 border border-[#DFD1B0] flex items-center justify-between gap-2.5 ${className}`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <Tag className="w-4 h-4 text-[#C59B46] shrink-0" />
        <div className="text-left text-xs truncate">
          <span className="text-[#6E6A63] mr-1.5 font-medium hidden sm:inline">Kupon Diskon:</span>
          <code className="font-mono font-black text-sm text-[#0E2A1D] bg-white px-2 py-0.5 rounded border border-[#E6DEC8]">
            {couponCode}
          </code>
          <span className="text-[11px] text-[#524E48] ml-2 hidden sm:inline">
            (Otomatis aktif di checkout)
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
          copied
            ? "bg-emerald-700 text-white"
            : "bg-white hover:bg-[#FAF7F2] text-[#0E2A1D] border border-[#E6DEC8] shadow-2xs hover:border-[#C59B46]"
        }`}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            <span>Tersalin</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-[#C59B46]" />
            <span>Salin</span>
          </>
        )}
      </button>
    </div>
  );
};

