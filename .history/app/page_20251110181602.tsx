import { HeroSection } from "@/components/hero-section";
import { WhyHireMeSection } from "@/components/why-hire-me-section";
import { ProjectsSection } from "@/components/projects-section";
import { ResearchSection } from "@/components/research-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray">
        <section className="w-2/3">
          <HeroSection />
          <WhyHireMeSection />
          <ProjectsSection />
          <ResearchSection />
          <TestimonialsSection />
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
