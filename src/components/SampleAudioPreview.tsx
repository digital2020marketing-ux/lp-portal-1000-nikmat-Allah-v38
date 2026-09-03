import React from "react";
import { Headphones, BookOpen, CheckCircle2 } from "lucide-react";

export const SampleAudioPreview: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#1E3A2B] bg-[#F3EFE6] border border-[#E2DED2] px-3.5 py-1.5 rounded uppercase tracking-widest inline-block">
            Bahan Dukungan Audio &amp; Slide (Rujukan Muhasabah)
          </span>
          <h2 className="font-serif italic font-bold text-[#1A1A1A] text-2xl sm:text-4xl mt-3 mb-4">
            Menyelami Kedalaman Syukur Lewat Audio &amp; Slide
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Dengarkan pembahasan audio mendalam selagi Anda bisa membuka &amp; membalik slide visual / e-book secara bersamaan di layar ini.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DED2] shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: 50 Rekaman Audio & Slide Visual */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E2DED2] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1E3A2B] text-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#13261C]">
                <Headphones className="w-6 h-6 text-[#D4A359]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#1A1A1A] text-base sm:text-lg">
                  50 Rekaman Audio &amp; Slide Visual
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm font-medium mt-0.5">
                  Materi kajian lengkap bersuara jernih dengan visual slide interaktif.
                </p>
              </div>
            </div>

            {/* Card 2: Progress Indicator */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E2DED2] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F3EFE6] text-[#1E3A2B] flex items-center justify-center shrink-0 border border-[#E2DED2]">
                <BookOpen className="w-6 h-6 text-[#1E3A2B]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#1E3A2B] text-[#FAF8F5] text-xs font-bold font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A359]" />
                  <span>1/50 Telah Didengarkan</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm font-medium mt-1">
                  Fitur pelacak progress untuk menjaga ritme istiqamah harian Anda.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

