import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductShowcaseEarly } from "./components/ProductShowcaseEarly";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { DeliverablesSection } from "./components/DeliverablesSection";
import { EffortReductionSection } from "./components/EffortReductionSection";
import { OfferStackSection } from "./components/OfferStackSection";
import { LongTermValueSection } from "./components/LongTermValueSection";
import { TrustSection } from "./components/TrustSection";
import { ActivationStepsSection } from "./components/ActivationStepsSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCloseSection } from "./components/FinalCloseSection";
import { StickyMobileCta } from "./components/StickyMobileCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDE7DC] flex justify-center selection:bg-[#EAE2D2] selection:text-[#0E2A1D]">
      {/* Container utama berformat HP: Full-width di HP, dan max-w-[480px] centered di layar tablet/desktop */}
      <div className="w-full max-w-[480px] min-h-screen bg-[#FAF7F2] text-[#181615] font-sans antialiased relative shadow-[0_0_50px_rgba(0,0,0,0.12)] sm:border-x sm:border-[#D4AF37]/30 overflow-x-hidden flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Streamlined Section Flow */}
        <main className="pb-16 sm:pb-20">
          {/* SECTION 1 — Hero + Harga (Above the Fold - Immediate Paint) */}
          <HeroSection />

          {/* SECTION 2 — Demo Portal (Optimized Showcase) */}
          <div className="cv-auto">
            <ProductShowcaseEarly />
          </div>

          {/* SECTION 3 — Problem / Reflection */}
          <div className="cv-auto">
            <ProblemSection />
          </div>

          {/* SECTION 4 — Solution — Muhasabah 5–10 Menit */}
          <div className="cv-auto">
            <SolutionSection />
          </div>

          {/* SECTION 5 — Cara Menggunakan */}
          <div className="cv-auto">
            <HowItWorksSection />
          </div>

          {/* SECTION 6 — Isi Portal / Fitur Utama */}
          <div className="cv-auto">
            <DeliverablesSection />
          </div>

          {/* SECTION 7 — Effort Reduction */}
          <div className="cv-auto">
            <EffortReductionSection />
          </div>

          {/* SECTION 8 — Offer Stack + Harga Rp89.000 */}
          <div className="cv-auto">
            <OfferStackSection />
          </div>

          {/* SECTION 9 — Long-Term Value */}
          <div className="cv-auto">
            <LongTermValueSection />
          </div>

          {/* SECTION 10 — Trust + Transparency + Support */}
          <div className="cv-auto">
            <TrustSection />
          </div>

          {/* SECTION 11 — Cara Aktivasi */}
          <div className="cv-auto">
            <ActivationStepsSection />
          </div>

          {/* SECTION 12 — FAQ */}
          <div className="cv-auto">
            <FaqSection />
          </div>

          {/* SECTION 13 — Final Emotional Close + CTA */}
          <div className="cv-auto">
            <FinalCloseSection />
          </div>
        </main>

        {/* Sticky Mobile CTA */}
        <StickyMobileCta />

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}
