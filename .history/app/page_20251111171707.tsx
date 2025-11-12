import { HeroSection } from "@/components/hero-section";

import { ProjectsSection } from "@/components/projects-section";
import { ResearchSection } from "@/components/research-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ResearchSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
