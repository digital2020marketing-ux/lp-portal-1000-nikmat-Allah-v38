import React from "react";

/**
 * 8-Point Islamic Star (Rub el Hizb ۞) with gold accents
 */
export const RubElHizb: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#D4AF37]",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.6"
      transform="rotate(0 12 12)"
    />
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.6"
      transform="rotate(45 12 12)"
    />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.85" />
    <circle cx="12" cy="12" r="1.2" fill="#FAF7F2" />
  </svg>
);

/**
 * Luxury Islamic Geometric Arch / Mihrab SVG Frame
 */
export const MihrabArch: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={`w-full h-6 ${className}`}
  >
    <path
      d="M0 24 L35 24 Q50 0 65 24 L100 24"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
      fill="none"
    />
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#E6C875" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Ornate Horizontal Islamic Divider with Star & Filigree
 */
export const IslamicDivider: React.FC<{ className?: string; light?: boolean }> = ({
  className = "",
  light = false,
}) => (
  <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
    <div
      className={`h-[1px] flex-1 max-w-[120px] bg-gradient-to-r ${
        light
          ? "from-transparent to-[#E6C875]/80"
          : "from-transparent via-[#D4AF37]/40 to-[#AA771C]/90"
      }`}
    />
    <div className="flex items-center gap-1.5 text-[#D4AF37]">
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/70 inline-block" />
      <RubElHizb size={18} className="text-[#D4AF37]" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/70 inline-block" />
    </div>
    <div
      className={`h-[1px] flex-1 max-w-[120px] bg-gradient-to-l ${
        light
          ? "from-transparent to-[#E6C875]/80"
          : "from-transparent via-[#D4AF37]/40 to-[#AA771C]/90"
      }`}
    />
  </div>
);

/**
 * Bismillah Calligraphy Banner
 */
export const BismillahBanner: React.FC<{ lightMode?: boolean }> = ({ lightMode = false }) => (
  <div className="text-center py-2 select-none">
    <p
      className={`font-arabic text-2xl sm:text-3xl md:text-4xl tracking-wide font-normal leading-relaxed ${
        lightMode
          ? "text-[#FAF7F2] drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
          : "text-[#0E2A1D] drop-shadow-[0_1px_1px_rgba(212,175,55,0.3)]"
      }`}
      dir="rtl"
      lang="ar"
    >
      بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
    </p>
  </div>
);

/**
 * Islamic Hanging Lantern (Fanous)
 */
export const FanousLantern: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#D4AF37]",
  size = 28,
}) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 24 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Hanging Chain */}
    <line x1="12" y1="0" x2="12" y2="6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
    <circle cx="12" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
    {/* Dome Top */}
    <path d="M7 12 C7 8, 17 8, 17 12 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
    {/* Lantern Body */}
    <path d="M6 13 L8 24 L16 24 L18 13 Z" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.25" />
    {/* Glass Pane details */}
    <line x1="12" y1="13" x2="12" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <circle cx="12" cy="18" r="2.5" fill="#FFE58F" fillOpacity="0.8" className="animate-pulse" />
    {/* Base */}
    <path d="M8 25 L7 28 L17 28 L16 25 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.3" />
    <circle cx="12" cy="30" r="1" fill="currentColor" />
  </svg>
);

/**
 * Islamic Crescent Moon & Star
 */
export const CrescentMoonStar: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#D4AF37]",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.83 21 17.35 19.69 19 17.65C14.5 17.65 10.5 13.9 10.5 9C10.5 6.64 11.45 4.5 13 2.94C12.67 2.91 12.34 2.9 12 3Z" />
    <polygon points="18,5.5 19,8 21.5,8 19.5,9.5 20.3,12 18,10.5 15.7,12 16.5,9.5 14.5,8 17,8" fill="#FFE58F" />
  </svg>
);

/**
 * Ornate Corner Accent for Manuscript Cards
 */
export const CornerOrnament: React.FC<{ position: "tl" | "tr" | "bl" | "br"; className?: string }> = ({
  position,
  className = "text-[#D4AF37]/50",
}) => {
  const transform = {
    tl: "",
    tr: "scale-x-[-1]",
    bl: "scale-y-[-1]",
    br: "scale-[-1]",
  }[position];

  return (
    <div className={`absolute pointer-events-none ${className} ${transform}`} style={{ width: 28, height: 28 }}>
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 26 V10 C2 5.58 5.58 2 10 2 H26" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 26 V12 C6 8.68 8.68 6 12 6 H26" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
        <circle cx="2" cy="26" r="1.5" fill="currentColor" />
        <circle cx="26" cy="2" r="1.5" fill="currentColor" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};
