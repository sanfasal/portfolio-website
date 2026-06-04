import HeroSection from "../components/section/HeroSection";
import ServicesSection from "../components/section/ServicesSection";
import SkillsSection from "../components/section/SkillsSection";
import AboutSection from "../components/section/AboutSection";
import ContactSection from "../components/section/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div id="home">
        <HeroSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="skill">
        <SkillsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
