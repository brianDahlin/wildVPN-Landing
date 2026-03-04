import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProtocolsSection } from "@/components/sections/ProtocolsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AppsSection } from "@/components/sections/AppsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SupportSection } from "@/components/sections/SupportSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProtocolsSection />
      <HowItWorksSection />
      <AppsSection />
      <PricingSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
