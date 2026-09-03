import React, { useState } from "react";
import { BookOpen, BookMarked, Scroll, CheckCircle2, Sparkles, HeartHandshake, HelpCircle, PenTool, FileText, Check, Maximize2, Layers } from "lucide-react";
import { MATERI_EBOOK_IMAGE_URL, SLIDE_PRESENTASI_IMAGE_URL } from "../data/landingData";

export const EBookKajianSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<{ url: string; title: string } | null>(null);

  const bab1Sections = [
    {
      id: "ayat",
      title: "1. Ayat Pengantar",
      icon: Scroll,
      content: (
        <div className="space-y-4 font-serif text-center py-4">
          <div className="max-w-2xl mx-auto bg-[#F3EFE6] p-5 sm:p-6 rounded-xl border border-[#E2DED2] text-sm sm:text-base text-gray-800 italic font-medium leading-relaxed shadow-xs">
            “Sebenarnya Allahlah yang melimpahkan nikmat kepadamu dengan menunjukkan kamu kepada keimanan, jika kamu orang-orang benar.”
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A2B] bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E2DED2] inline-block font-sans">
            (QS. Al-Hujurat: 17)
          </span>
        </div>
      ),
    },
    {
      id: "makna",
      title: "2. Makna Nikmat",
      icon: BookMarked,
      content: (
        <div className="space-y-3 font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p className="font-serif italic font-bold text-[#1E3A2B] text-base">
            Fondasi Utama Kehidupan Muslim
          </p>
          <p>
            Iman dan Islam merupakan nikmat paling mendasar dalam kehidupan seorang muslim. Iman menuntun hati untuk mengenal Allah, meyakini kekuasaan-Nya, mempercayai janji-Nya, menaati perintah-Nya, dan menjadikan-Nya sebagai tempat bergantung dalam setiap keadaan.
          </p>
          <p>
            Islam memberikan pedoman yang jelas tentang cara beribadah, menjaga akhlak, membangun keluarga, bekerja, bermasyarakat, serta memperlakukan sesama makhluk dengan baik. Melalui ajaran Islam, kehidupan memiliki arah, tujuan, dan batas yang melindungi manusia.
          </p>
          <p>
            Nikmat iman membuat hati memiliki harapan ketika menghadapi kesulitan. Seorang beriman meyakini bahwa Allah mengetahui keadaannya, mendengar doanya, menerima tobatnya, serta memberikan jalan terbaik pada waktu yang tepat.
          </p>
          <div className="bg-[#F3EFE6] p-3.5 rounded-lg border border-[#E2DED2] text-xs font-medium text-[#1E3A2B]">
            ✨ <strong>Amanah Seumur Hidup:</strong> Rasa syukur atas iman dan Islam diwujudkan dengan mengucapkan Alhamdulillah, menjaga keyakinan, melaksanakan ibadah, mempelajari ajaran agama, memperbaiki akhlak, dan memberikan manfaat kepada sesama.
          </div>
        </div>
      ),
    },
    {
      id: "20nikmat",
      title: "3. 20 Nikmat Disyukuri",
      icon: Sparkles,
      content: (
        <div className="space-y-3 font-sans">
          <p className="text-xs font-bold text-[#1E3A2B] uppercase tracking-wider">
            20 Nikmat Spesifik Bab 1 (Nikmat 1 - 20):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1 text-xs">
            {[
              { num: 1, title: "Mengenal Allah", desc: "Memahami seluruh kehidupan berada dalam kekuasaan & kasih sayang-Nya." },
              { num: 2, title: "Iman di Dalam Hati", desc: "Memberikan keyakinan, harapan, ketenangan & kekuatan berarah." },
              { num: 3, title: "Mengenal Islam", desc: "Pedoman beribadah, berakhlak, bekerja & berkeluarga secara benar." },
              { num: 4, title: "Kalimat Syahadat", desc: "Pengakuan murni bahwa hanya Allah berhak disembah & Nabi utusan-Nya." },
              { num: 5, title: "Al-Qur’an Petunjuk", desc: "Sumber ilmu, nasihat, ketenangan & pedoman mengambil keputusan." },
              { num: 6, title: "Nabi Muhammad Teladan", desc: "Mempelajari ibadah, akhlak, kasih sayang & tanggung jawab." },
              { num: 7, title: "Melaksanakan Shalat", desc: "Waktu mengingat Allah, bersujud, menenangkan hati & memperbaiki diri." },
              { num: 8, title: "Kemampuan Berdoa", desc: "Menyampaikan harapan, kebutuhan & rasa syukur kepada Allah." },
              { num: 9, title: "Kesempatan Berzikir", desc: "Mengingat Allah, memperoleh ketenangan & menjaga kesadaran." },
              { num: 10, title: "Pintu Tobat Terbuka", desc: "Kesempatan memohon ampun & kembali kepada kebaikan." },
              { num: 11, title: "Pedoman Halal & Haram", desc: "Memilih makanan, pekerjaan & tindakan yang diridai Allah." },
              { num: 12, title: "Ragam Bentuk Ibadah", desc: "Shalat, puasa, zakat, sedekah & amal baik jalan mendekat kepada Allah." },
              { num: 13, title: "Persaudaraan Islam", desc: "Saling menghormati, mendoakan, membantu & menjaga kebaikan." },
              { num: 14, title: "Belajar Ilmu Agama", desc: "Memahami keyakinan, ibadah & cara menjalani hidup secara tepat." },
              { num: 15, title: "Hati Menerima Nasihat", desc: "Menyadari kekurangan, memperbaiki sikap & memilih jalan bermanfaat." },
              { num: 16, title: "Membedakan Baik & Buruk", desc: "Menjaga diri & bertindak secara lebih bertanggung jawab." },
              { num: 17, title: "Melakukan Amal Saleh", desc: "Kebaikan & pelayanan sesama menjadi bentuk pengabdian." },
              { num: 18, title: "Petunjuk Setelah Salah", desc: "Kesadaran diri membantu kembali ke jalan yang lebih baik." },
              { num: 19, title: "Harapan Rahmat Allah", desc: "Semangat berdoa, berusaha, bertobat & berbuat kebaikan." },
              { num: 20, title: "Menjaga Iman Sepanjang Hidup", desc: "Belajar, beribadah & memohon keteguhan hati hingga akhir hayat." },
            ].map((n) => (
              <div key={n.num} className="bg-white p-2.5 rounded-lg border border-[#E2DED2] flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1E3A2B] text-amber-200 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {n.num}
                </span>
                <div>
                  <h5 className="font-bold text-[#1A1A1A]">{n.title}</h5>
                  <p className="text-[11px] text-gray-600 leading-tight">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "syukur",
      title: "4. Cara Mensyukuri",
      icon: HeartHandshake,
      content: (
        <div className="space-y-2.5 font-sans text-xs sm:text-sm">
          <p className="font-bold text-[#1E3A2B] uppercase tracking-wider text-xs">
            8 Langkah Amalan Mensyukuri Nikmat Iman &amp; Islam:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
            {[
              "1. Mengucapkan Alhamdulillah dengan penuh kesadaran",
              "2. Menjaga Shalat tertib, tepat waktu, dan penuh khusyuk",
              "3. Membaca & Mempelajari Al-Qur’an dalam kehidupan harian",
              "4. Menambah Ilmu Agama lewat guru, kajian & buku terpercaya",
              "5. Memperbaiki Akhlak (kejujuran, kesabaran & kepedulian)",
              "6. Memperbanyak Doa & Zikir mengingat Allah setiap saat",
              "7. Menjaga Diri dari perbuatan yang merusak iman",
              "8. Mengajak Keluarga membangun suasana penuh iman",
            ].map((item, i) => (
              <div key={i} className="bg-white p-2.5 rounded-lg border border-[#E2DED2] flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "renungan",
      title: "5. Renungan Diri",
      icon: HelpCircle,
      content: (
        <div className="space-y-2 font-sans text-xs sm:text-sm">
          <p className="font-bold text-[#1E3A2B] uppercase tracking-wider text-xs">
            8 Pertanyaan Muhasabah Diri (Jawab Dengan Jujur):
          </p>
          <div className="space-y-1.5 text-gray-700">
            {[
              "1. Apakah saya telah menyadari bahwa iman dan Islam merupakan nikmat yang sangat besar?",
              "2. Apakah saya sudah menjaga shalat dan ibadah dengan sungguh-sungguh?",
              "3. Apakah saya meluangkan waktu untuk membaca dan mempelajari Al-Qur’an?",
              "4. Apakah ilmu agama yang saya ketahui sudah diterapkan dalam kehidupan?",
              "5. Apakah ucapan dan perilaku saya sudah mencerminkan akhlak seorang muslim?",
              "6. Apakah saya segera memohon ampun dan memperbaiki diri ketika melakukan kesalahan?",
              "7. Apakah saya sudah menjadi teladan kebaikan bagi keluarga dan lingkungan?",
              "8. Ibadah atau kebiasaan baik apa yang akan saya tingkatkan mulai hari ini?",
            ].map((q, i) => (
              <div key={i} className="bg-white p-2 rounded-lg border border-[#E2DED2] font-medium text-gray-800">
                {q}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "catatan",
      title: "6. Catatan Syukur",
      icon: PenTool,
      content: (
        <div className="space-y-3 font-sans text-xs">
          <p className="font-bold text-[#1E3A2B] uppercase tracking-wider">
            Lembar Refleksi Syukur Harian:
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#E2DED2] space-y-2">
            <p className="font-bold text-gray-800">Tiga nikmat iman &amp; Islam yang paling saya rasakan hari ini:</p>
            <div className="p-2 bg-[#F3EFE6]/50 rounded border border-[#E2DED2] text-gray-600 italic">
              1. Saya bersyukur kepada Allah karena: ....................................................
            </div>
            <div className="p-2 bg-[#F3EFE6]/50 rounded border border-[#E2DED2] text-gray-600 italic">
              2. Saya bersyukur kepada Allah karena: ....................................................
            </div>
            <div className="p-2 bg-[#F3EFE6]/50 rounded border border-[#E2DED2] text-gray-600 italic">
              3. Saya bersyukur kepada Allah karena: ....................................................
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-2 bg-white rounded border border-[#E2DED2]">
              <span className="font-bold text-[#1E3A2B] block">Ibadah Ditingkatkan:</span>
              <span className="text-gray-500 italic">........................</span>
            </div>
            <div className="p-2 bg-white rounded border border-[#E2DED2]">
              <span className="font-bold text-[#1E3A2B] block">Akhlak Diperbaiki:</span>
              <span className="text-gray-500 italic">........................</span>
            </div>
            <div className="p-2 bg-white rounded border border-[#E2DED2]">
              <span className="font-bold text-[#1E3A2B] block">Kebaikan Dilakukan:</span>
              <span className="text-gray-500 italic">........................</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "doa",
      title: "7. Doa Keteguhan",
      icon: Scroll,
      content: (
        <div className="space-y-3 font-serif text-center py-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A2B] bg-[#F3EFE6] px-3 py-1 rounded border border-[#E2DED2] inline-block font-sans">
            Doa Keteguhan Iman &amp; Islam
          </span>
          <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed max-w-2xl mx-auto bg-white p-4 rounded-xl border border-[#E2DED2]">
            "Ya Allah, kami bersyukur atas nikmat iman dan Islam yang telah Engkau berikan. Terima kasih karena Engkau mengenalkan kami kepada-Mu, memberikan petunjuk, dan membuka jalan untuk beribadah serta memperbaiki diri.<br/><br/>
            Ya Allah, teguhkanlah iman di dalam hati kami. Bimbinglah kami agar mampu menjaga shalat, mencintai Al-Qur’an, memperbanyak doa dan zikir, serta menjalankan ajaran Islam dengan penuh keikhlasan.<br/><br/>
            Ya Allah, hiasilah diri kami dengan akhlak yang baik... Aamiin."
          </p>
        </div>
      ),
    },
    {
      id: "penutup",
      title: "8. Penutup",
      icon: FileText,
      content: (
        <div className="space-y-3 font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p className="font-serif italic font-bold text-[#1E3A2B] text-base">
            Cahaya Hati &amp; Pedoman Kehidupan
          </p>
          <p>
            Iman dan Islam merupakan nikmat yang memberikan arah, tujuan, dan ketenangan dalam kehidupan. Melalui iman, hati mengenal Allah. Melalui Islam, manusia memperoleh pedoman untuk beribadah, berakhlak, bekerja, dan hidup bersama orang lain.
          </p>
          <div className="bg-[#1E3A2B] text-amber-100 p-4 rounded-xl border border-[#13261C] text-center font-serif text-sm sm:text-base font-bold italic">
            "Iman adalah cahaya hati. Islam adalah pedoman kehidupan. Menjaga keduanya adalah jalan menuju ketenangan dan keberkahan."
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="ebook-kajian" className="py-12 sm:py-20 bg-white border-b border-[#E2DED2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3EFE6] border border-[#E2DED2] text-[#1E3A2B] text-xs uppercase tracking-widest font-bold">
            <BookOpen className="w-4 h-4 text-[#C88A2B]" />
            <span>MENU UTAMA: E-BOOK KAJIAN</span>
          </div>

          <h2 className="font-serif italic font-bold text-[#1A1A1A] text-2xl sm:text-4xl">
            E-Book &amp; Buku Digital Kajian 50 Bab
          </h2>
        </div>

        {/* Interactive E-Book Chapter 1 Reader Mockup */}
        <div className="bg-[#1E3A2B] rounded-2xl p-6 sm:p-8 border border-[#13261C] text-[#FAF8F5] shadow-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-800/80 pb-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D4A359]" />
                <span className="font-serif font-bold text-[#FAF8F5] text-base sm:text-lg">
                  SmartBook.Id — Bab 1: Nikmat Iman Dan Islam
                </span>
              </div>
              <p className="text-xs text-amber-200/80 font-mono">
                1000 NIKMAT ALLAH — Jurnal Syukur oleh Team SmartBook.ID
              </p>
            </div>
            <span className="text-xs bg-[#13261C] text-amber-200 px-3 py-1 rounded-full border border-[#D4A359]/30 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D4A359]" /> Kerangka Lengkap 8 Sub-Bab
            </span>
          </div>

          {/* Sub-section Navigation Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
            {bab1Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-2 rounded-lg border transition-all shrink-0 whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === idx
                      ? "bg-[#D4A359] text-[#1E3A2B] border-[#D4A359] font-bold shadow-xs"
                      : "bg-[#13261C] text-emerald-100/80 border-emerald-800/60 hover:text-white"
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5 shrink-0" />
                  <span>{sec.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Reader Content Canvas */}
          <div className="bg-[#FAF8F5] text-[#1A1A1A] rounded-xl p-5 sm:p-6 border border-[#E2DED2] min-h-[220px]">
            <div className="flex items-center justify-between border-b border-[#E2DED2] pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A2B] bg-[#F3EFE6] px-2.5 py-1 rounded border border-[#E2DED2]">
                {bab1Sections[activeTab].title}
              </span>
              <span className="text-[11px] font-mono text-gray-500">
                Bagian {activeTab + 1} dari 8
              </span>
            </div>

            {bab1Sections[activeTab].content}
          </div>

          {/* Footer controls */}
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-emerald-100/90 pt-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4A359]" />
            <span>Format Digital &amp; PDF E-Book Siap Dibaca di HP, Tablet, Laptop (50 Bab)</span>
          </div>
        </div>

        {/* Real App Screenshot Showcase (Materi Ebook & Slide Presentasi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          
          {/* Card 1: Materi Ebook / Aplikasi Materi */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2DED2] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A2B] bg-[#F3EFE6] px-2.5 py-0.5 rounded border border-[#E2DED2]">
                📖 MENU 3: MATERI EBOOK
              </span>
              <span className="text-[11px] font-mono text-gray-500">app.smartbook.id</span>
            </div>
            <h4 className="font-serif font-bold text-[#1A1A1A] text-base sm:text-lg">
              Tampilan Materi Ebook &amp; Aplikasi
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Materi 50 bab tersaji lengkap dengan teks Arab, terjemahan, ulasan hikmah, dan renungan harian.
            </p>
            <div className="bg-[#0E2A1D] p-2.5 rounded-2xl border border-[#D4AF37]/50 relative group max-w-xs mx-auto">
              <img 
                src={MATERI_EBOOK_IMAGE_URL} 
                alt="Tampilan Menu Materi Ebook Portal 1000 Nikmat Allah"
                className="w-full h-auto rounded-xl object-contain block shadow-inner bg-white"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setZoomedImage({ url: MATERI_EBOOK_IMAGE_URL, title: "Menu 3: Materi Ebook / Aplikasi Materi" })}
                className="absolute bottom-4 right-4 bg-[#0E2A1D]/90 hover:bg-[#0E2A1D] text-[#F9E8B8] border border-[#D4AF37] p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md backdrop-blur-xs transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Perbesar</span>
              </button>
            </div>
          </div>

          {/* Card 2: Slide Presentasi */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2DED2] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A2B] bg-[#F3EFE6] px-2.5 py-0.5 rounded border border-[#E2DED2]">
                📑 MENU 4: SLIDE PRESENTASI
              </span>
              <span className="text-[11px] font-mono text-gray-500">app.smartbook.id</span>
            </div>
            <h4 className="font-serif font-bold text-[#1A1A1A] text-base sm:text-lg">
              Tampilan Slide Presentasi Visual
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Ringkasan poin kunci berformat slide presentasi modern yang mudah dipahami dan siap dipakai mengajar.
            </p>
            <div className="bg-[#0E2A1D] p-2.5 rounded-2xl border border-[#D4AF37]/50 relative group max-w-xs mx-auto">
              <img 
                src={SLIDE_PRESENTASI_IMAGE_URL} 
                alt="Tampilan Menu Slide Presentasi Portal 1000 Nikmat Allah"
                className="w-full h-auto rounded-xl object-contain block shadow-inner bg-white"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setZoomedImage({ url: SLIDE_PRESENTASI_IMAGE_URL, title: "Menu 4: Slide Presentasi Visual" })}
                className="absolute bottom-4 right-4 bg-[#0E2A1D]/90 hover:bg-[#0E2A1D] text-[#F9E8B8] border border-[#D4AF37] p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md backdrop-blur-xs transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Perbesar</span>
              </button>
            </div>
          </div>

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

