import React, { useState, useEffect, useRef } from "react";
import { 
  ChevronRight, 
  ChevronLeft, 
  Pause, 
  Play, 
  Smartphone, 
  Headphones, 
  BookOpen, 
  Layers, 
  Edit3, 
  Printer, 
  Bot, 
  Sparkles,
  Info,
  Maximize2,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RubElHizb } from "./IslamicOrnaments";
import { PORTAL_MENU_GALLERY, PortalMenuItem } from "../data/landingData";

const SLIDE_DURATION_MS = 3500; // 3.5 detik (sesuai instruksi: sekitar 3-4 detik, tidak terlalu cepat)

export const ProductShowcaseEarly: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const currentItem: PortalMenuItem = PORTAL_MENU_GALLERY[activeIdx] || PORTAL_MENU_GALLERY[0];

  // Observe section visibility to stop timer when offscreen (saves CPU & battery on mobile)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-play interval - only active when section is in viewport
  useEffect(() => {
    if (!isPlaying || isHovered || isZoomed || !isInView) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PORTAL_MENU_GALLERY.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isZoomed, isInView, activeIdx]);

  // Center active tab inside tab bar without page scroll jumping
  useEffect(() => {
    const container = tabsContainerRef.current;
    if (container) {
      const activeBtn = container.querySelector(`[data-index="${activeIdx}"]`) as HTMLElement;
      if (activeBtn) {
        const containerWidth = container.offsetWidth;
        const btnOffset = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        container.scrollTo({
          left: btnOffset - containerWidth / 2 + btnWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIdx]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone": return <Smartphone className="w-4 h-4" />;
      case "Headphones": return <Headphones className="w-4 h-4" />;
      case "BookOpen": return <BookOpen className="w-4 h-4" />;
      case "Layers": return <Layers className="w-4 h-4" />;
      case "Edit3": return <Edit3 className="w-4 h-4" />;
      case "Printer": return <Printer className="w-4 h-4" />;
      case "Bot": return <Bot className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : PORTAL_MENU_GALLERY.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < PORTAL_MENU_GALLERY.length - 1 ? prev + 1 : 0));
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-[#F4EFE6] border-y border-[#D4AF37]/30 relative overflow-hidden cv-auto">
      <div className="max-w-md sm:max-w-3xl mx-auto px-4.5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[11px] sm:text-xs font-bold text-[#0E2A1D] uppercase tracking-wider shadow-2xs mb-3">
            <RubElHizb size={10} className="text-[#D4AF37]" />
            <span>DEMONSTRASI FITUR & ISI PORTAL</span>
            <RubElHizb size={10} className="text-[#D4AF37]" />
          </div>

          <h2 className="font-serif italic font-bold text-[#181615] text-[24px] sm:text-[26px] tracking-tight leading-[1.25]">
            Lihat Seperti Apa Isi Portalnya
          </h2>
          <p className="text-[14px] text-[#4A453E] font-medium mt-2 max-w-sm mx-auto">
            Semua materi tersusun dalam satu tempat agar Anda cukup membuka portal dan mulai.
          </p>
        </div>

        {/* Tab Navigation Menu (Horizontal Scroll on Mobile) */}
        <div 
          ref={tabsContainerRef}
          className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-5 no-scrollbar scroll-smooth"
        >
          {PORTAL_MENU_GALLERY.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                data-index={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#0E2A1D] text-[#FAF7F2] border border-[#D4AF37] shadow-sm"
                    : "bg-white/80 text-[#55504A] hover:bg-white hover:text-[#0E2A1D] border border-[#D4AF37]/30"
                }`}
              >
                <span className={isActive ? "text-[#E6C875]" : "text-[#8C867A]"}>
                  {getIcon(item.icon)}
                </span>
                <span>{item.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Container */}
        <div 
          className="bg-white rounded-3xl border-2 border-[#D4AF37]/60 p-4 sm:p-6 shadow-md relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Header of Active Slide */}
          <div className="flex items-center justify-between gap-3 pb-3.5 mb-3 border-b border-[#EAE2D2]">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0E2A1D] text-[#F9E8B8] font-serif text-xs font-bold flex items-center justify-center shrink-0">
                  {currentItem.num}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0E2A1D] truncate">
                  {currentItem.title}
                </h3>
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#5A544C] mt-1 font-medium leading-relaxed">
                {currentItem.benefit}
              </p>
            </div>

            {/* Controls (Play/Pause, Zoom) */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#EAE2D2] text-[#0E2A1D] flex items-center justify-center border border-[#D4AF37]/40 transition-all cursor-pointer"
                title={isPlaying ? "Jeda Slider Otomatis" : "Putar Slider Otomatis"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#EAE2D2] text-[#0E2A1D] flex items-center justify-center border border-[#D4AF37]/40 transition-all cursor-pointer"
                title="Perbesar Tampilan"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-[#071810] border border-[#D4AF37]/40 aspect-[3/4] max-w-[340px] mx-auto flex items-center justify-center group p-1 shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentItem.id}
                src={currentItem.url}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full object-contain cursor-pointer"
                onClick={() => setIsZoomed(true)}
              />
            </AnimatePresence>

            {/* Left/Right Carousel Nav Buttons */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all cursor-pointer shadow-md"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all cursor-pointer shadow-md"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {PORTAL_MENU_GALLERY.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeIdx ? "w-6 bg-[#0E2A1D]" : "w-2 bg-[#D4AF37]/40 hover:bg-[#D4AF37]"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Progress Bar (Visual indicator for 3-4s timer) */}
          {isPlaying && !isHovered && (
            <div className="w-full bg-[#EAE2D2] h-1 rounded-full overflow-hidden mt-3">
              <motion.div
                key={`progress-${activeIdx}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
                className="h-full bg-[#D4AF37]"
              />
            </div>
          )}
        </div>

        {/* AI Disclaimer Box (Mandatory as per Section 2 specifications) */}
        <div className="mt-5 bg-white/70 border border-[#D4AF37]/35 rounded-xl p-3.5 flex items-start gap-2.5 text-[12px] sm:text-[13px] text-[#55504A]">
          <Info className="w-4 h-4 text-[#AA771C] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#0E2A1D]">Catatan AI Teman Muhasabah:</strong> AI digunakan sebagai alat bantu refleksi dan bukan pengganti ustaz, tenaga profesional, atau sumber fatwa.
          </p>
        </div>

      </div>

      {/* Modal Zoom Preview */}
      <AnimatePresence>
        {isZoomed && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsZoomed(false)}
          >
            <div 
              className="relative max-w-4xl w-full bg-[#0E2A1D] rounded-2xl p-3 sm:p-5 border-2 border-[#D4AF37] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/40 mb-3 text-white">
                <div className="font-serif font-bold text-base sm:text-lg text-[#F9E8B8]">
                  {currentItem.title} — {currentItem.benefit}
                </div>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden bg-black flex items-center justify-center max-h-[75vh]">
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
