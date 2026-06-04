import HeroSection from "../components/section/HeroSection";
import ServicesSection from "../components/section/ServicesSection";
import SkillsSection from "../components/section/SkillsSection";
import AboutSection from "../components/section/AboutSection";
import ContactSection from "../components/section/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
