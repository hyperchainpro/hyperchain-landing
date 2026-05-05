import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TentangSection from "@/components/sections/TentangSection";
import MetricsSection from "@/components/sections/MetricsSection";
import EkosistemSection from "@/components/sections/EkosistemSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TimSection from "@/components/sections/TimSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import TeknologiSection from "@/components/sections/TeknologiSection";
import InvestorSection from "@/components/sections/InvestorSection";
import FAQSection from "@/components/sections/FAQSection";
import BergabungSection from "@/components/sections/BergabungSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TentangSection />
        <MetricsSection />
        <EkosistemSection />
        <PortfolioSection />
        <RoadmapSection />
        <TimSection />
        <TestimoniSection />
        <TeknologiSection />
        <InvestorSection />
        <FAQSection />
        <BergabungSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
