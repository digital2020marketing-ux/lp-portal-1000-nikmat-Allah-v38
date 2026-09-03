import React from "react";
import { Sparkles, Heart, CheckCircle2, Calendar } from "lucide-react";

export const TransformationSection: React.FC = () => {
  const points = [
    {
      title: "Tidak Lagi Mudah Mengeluh",
      desc: "Hati terlatih melihat hikmah dan nikmat di balik setiap peristiwa, bahkan saat hal tak berjalan sesuai rencana.",
    },
    {
      title: "Rutinitas Muhasabah yang Menenangkan",
      desc: "Menutup hari dengan 5–10 menit perenungan yang membuat tidur lebih pulas tanpa beban pikiran.",
    },
    {
      title: "Lebih Menghargai Kehadiran Orang Terkasih",
      desc: "Menyadari bahwa senyuman orang tua, pasangan, dan tawa anak adalah karunia berharga yang tak tergantikan.",
    },
    {
      title: "Mata Hati Lebih Peka terhadap Hal Sederhana",
      desc: "Napas yang lega, air dingin yang membasahi tenggorokan, dan jalanan yang aman terasa sebagai berkah besar.",
    },
    {
      title: "Memiliki Arsip Catatan Perjalanan Spiritual",
      desc: "Kumpulan lembar refleksi jurnal yang menjadi saksi nyata betapa banyaknya pertolongan Allah dalam hidup Anda.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E2DED2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#1E3A2B] bg-[#F3EFE6] border border-[#E2DED2] px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block">
            Masa Depan Spiritual Anda
          </span>
          <h2 className="font-serif italic font-bold text-[#1A1A1A] text-2xl sm:text-4xl mt-3 mb-4">
            Bayangkan Enam Bulan dari Hari Ini...
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Perubahan batiniah yang nyata saat rasa syukur menjadi cara pandang hidup Anda sehari-hari:
          </p>
        </div>

        {/* 5 Transformation Points Cards */}
        <div className="space-y-3 mb-8">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-[#E2DED2] shadow-2xs flex items-start gap-4 hover:border-[#1E3A2B]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#F3EFE6] text-[#1E3A2B] flex items-center justify-center shrink-0 border border-[#E2DED2] mt-0.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C88A2B]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-[#1A1A1A] text-base sm:text-lg">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Calm Quote */}
        <div className="bg-[#1E3A2B] text-white p-6 sm:p-8 rounded-2xl border border-[#13261C] text-center space-y-2 shadow-md">
          <Heart className="w-6 h-6 text-[#D4A359] mx-auto mb-1 fill-[#D4A359]" />
          <p className="font-serif italic text-lg sm:text-xl text-[#FAF8F5]">
            "Ketenangan hidup bukan dicari dengan mengubah dunia di luar sana, <br className="hidden sm:inline" />
            melainkan dengan menata rasa syukur di dalam dada kita sendiri."
          </p>
        </div>

      </div>
    </section>
  );
};
