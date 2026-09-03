import React, { useState } from "react";
import { FileText, Printer, Edit3, CheckCircle2, Download, Sparkles, Check, FileCheck, Layers, Maximize2 } from "lucide-react";
import { WORKSHEET_DIGITAL_IMAGE_URL, WORKSHEET_PRINTABLE_IMAGE_URL } from "../data/landingData";

export const InteractiveWorksheetDemo: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="worksheet-digital" className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E2DED2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#1E3A2B] bg-[#F3EFE6] border border-[#E2DED2] px-3.5 py-1.5 rounded uppercase tracking-widest inline-block">
            50 Worksheet Digital Sesuai Lembar Cetak SmartBook.id
          </span>
          <h2 className="font-serif italic font-bold text-[#1A1A1A] text-2xl sm:text-4xl">
            Peluklah Nikmatmu Sebelum Menjadi Kenangan
          </h2>
          <p className="font-serif italic text-[#C88A2B] font-bold text-base sm:text-lg">
            Jurnal Syukur dan Renungan Diri untuk Menyadari Nikmat Allah Sebelum Terlambat
          </p>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed pt-1">
            Tuliskan dan muhasabah syukur harian Anda menggunakan format Worksheet 50 Bab dari SmartBook.id. Siap dicetak (Print/PDF) atau diisi langsung secara digital dengan pratinjau yang indah!
          </p>
        </div>

        {/* Feature Cards Container (One Card Per Feature with Visual Graphic Mockup) */}
        <div className="space-y-6">

          {/* Card 1: 50 Bab Format Interaktif */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DED2] shadow-xs space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1E3A2B] text-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#13261C]">
                <FileText className="w-5.5 h-5.5 text-[#D4A359]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A2B] bg-[#F3EFE6] px-2.5 py-0.5 rounded border border-[#E2DED2] inline-block mb-1">
                  📚 MODUL UTAMA
                </span>
                <h3 className="font-serif font-bold text-[#1A1A1A] text-lg sm:text-xl">
                  50 Bab Format Interaktif
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mt-1">
                  Mencakup 4 Bagian Evaluasi &amp; Doa harian lengkap yang tersusun terstruktur sesuai modul SmartBook.id.
                </p>
              </div>
            </div>

            {/* Feature Image / Graphic Preview */}
            <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-xl border border-[#E2DED2] space-y-3">
              <div className="flex items-center justify-between border-b border-[#E2DED2] pb-2 text-xs font-bold text-[#1E3A2B]">
                <span className="flex items-center gap-1.5 font-serif">
                  <Layers className="w-4 h-4 text-[#C88A2B]" />
                  <span>Bab #1: Nikmat Iman &amp; Islam (Nikmat 1–20)</span>
                </span>
                <span className="text-[10px] bg-[#1E3A2B] text-[#FAF8F5] px-2 py-0.5 rounded">Bab 1/50</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-semibold">
                <div className="p-2.5 rounded-lg bg-white border border-[#E2DED2] text-[#1E3A2B]">
                  1. Nikmat Disadari
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2DED2] text-[#1E3A2B]">
                  2. Muhasabah Diri
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2DED2] text-[#1E3A2B]">
                  3. Tindakan Syukur
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2DED2] text-[#1E3A2B]">
                  4. Doa &amp; Harapan
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Worksheet Digital Interaktif (Real Screenshot) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DED2] shadow-xs space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1E3A2B] text-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#13261C]">
                <Edit3 className="w-5.5 h-5.5 text-[#D4A359]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A2B] bg-[#F3EFE6] px-2.5 py-0.5 rounded border border-[#E2DED2] inline-block mb-1">
                  💻 MENU 5: WORKSHEET DIGITAL
                </span>
                <h3 className="font-serif font-bold text-[#1A1A1A] text-lg sm:text-xl">
                  Pengisian Lembar Kerja Digital Interaktif
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mt-1">
                  Mudah diisi secara langsung dari HP, Tablet, maupun Laptop kapan saja dan tersimpan rapi.
                </p>
              </div>
            </div>

            {/* Real Screenshot Preview */}
            <div className="bg-[#0E2A1D] p-3 rounded-2xl border border-[#D4AF37]/50 max-w-sm mx-auto shadow-md relative group">
              <div className="text-[11px] text-[#F9E8B8] font-serif font-bold px-2 py-1 flex items-center justify-between border-b border-[#D4AF37]/30 mb-1.5">
                <span>Worksheet Digital Interaktif</span>
                <span className="text-[10px] bg-[#D4AF37] text-[#0E2A1D] px-2 py-0.2 rounded font-bold">Online Form</span>
              </div>
              <img 
                src={WORKSHEET_DIGITAL_IMAGE_URL} 
                alt="Tampilan Menu Worksheet Digital 1000 Nikmat Allah"
                className="w-full h-auto rounded-xl object-contain block shadow-inner bg-white"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setZoomedImage({ url: WORKSHEET_DIGITAL_IMAGE_URL, title: "Menu 5: Worksheet Digital" })}
                className="absolute bottom-5 right-5 bg-[#0E2A1D]/90 hover:bg-[#0E2A1D] text-[#F9E8B8] border border-[#D4AF37] p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Perbesar</span>
              </button>
            </div>
          </div>

          {/* Card 3: Worksheet Printable 50 Bab (Real Screenshot) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DED2] shadow-xs space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1E3A2B] text-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#13261C]">
                <Printer className="w-5.5 h-5.5 text-[#D4A359]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A2B] bg-[#F3EFE6] px-2.5 py-0.5 rounded border border-[#E2DED2] inline-block mb-1">
                  🖨️ MENU 6: WORKSHEET PRINTABLE
                </span>
                <h3 className="font-serif font-bold text-[#1A1A1A] text-lg sm:text-xl">
                  Worksheet Printable (50 Bab Siap Cetak A4)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mt-1">
                  Lembar kerja harian &amp; muhasabah berformat PDF standar cetak (A4) untuk diunduh dan diisi dengan pena secara fisik.
                </p>
              </div>
            </div>

            {/* Real Screenshot Preview */}
            <div className="bg-[#0E2A1D] p-3 rounded-2xl border border-[#D4AF37]/50 max-w-sm mx-auto shadow-md relative group">
              <div className="text-[11px] text-[#F9E8B8] font-serif font-bold px-2 py-1 flex items-center justify-between border-b border-[#D4AF37]/30 mb-1.5">
                <span>Worksheet Printable 50 Bab</span>
                <span className="text-[10px] bg-emerald-900 text-emerald-200 border border-emerald-500/50 px-2 py-0.2 rounded font-bold">PDF A4 Ready</span>
              </div>
              <img 
                src={WORKSHEET_PRINTABLE_IMAGE_URL} 
                alt="Tampilan Menu Worksheet Printable 50 Bab"
                className="w-full h-auto rounded-xl object-contain block shadow-inner bg-white"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setZoomedImage({ url: WORKSHEET_PRINTABLE_IMAGE_URL, title: "Menu 6: Worksheet Printable (50 Bab)" })}
                className="absolute bottom-5 right-5 bg-[#0E2A1D]/90 hover:bg-[#0E2A1D] text-[#F9E8B8] border border-[#D4AF37] p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Perbesar</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Summary Banner */}
        <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DED2] flex items-center justify-center gap-2 text-center text-xs sm:text-sm text-[#1E3A2B] font-semibold">
          <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0" />
          <span>Format Lembar Kerja Digital &amp; Printable 50 Bab SmartBook.id</span>
        </div>

      </div>

      {/* Modal Zoom Preview */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-sm max-h-[90vh] overflow-auto bg-[#FAF7F2] p-2 rounded-3xl border-2 border-[#D4AF37] shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-2 pb-3">
              <span className="font-serif font-bold text-sm text-[#0E2A1D]">{zoomedImage.title}</span>
              <button 
                onClick={() => setZoomedImage(null)}
                className="w-8 h-8 rounded-full bg-[#0E2A1D] text-[#F9E8B8] font-bold text-sm flex items-center justify-center cursor-pointer border border-[#D4AF37]"
              >
                ✕
              </button>
            </div>
            <img
              src={zoomedImage.url}
              alt={`${zoomedImage.title} Full`}
              className="w-full h-auto rounded-2xl block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};



