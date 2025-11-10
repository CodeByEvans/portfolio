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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <section className="w-[90%] bg-[#060606]">
        <Header />
        <main className="">
          <HeroSection />
          <WhyHireMeSection />
          <ProjectsSection />
          <ResearchSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </section>
    </div>
  );
}
