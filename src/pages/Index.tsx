import HeroSection from "@/components/sections/HeroSection";
import PlatformsSection from "@/components/sections/PlatformsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ContactSection from "@/components/sections/ContactSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AdvantageSection from "@/components/sections/AdvantageSection";
import AdvantageSection2 from "@/components/sections/AdvantageSection2";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <PlatformsSection />
      <AdvantageSection />
      <AdvantageSection2 />
      <HowItWorksSection />
      <BenefitsSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default Index;