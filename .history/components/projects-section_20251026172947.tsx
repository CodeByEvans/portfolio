"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Clover Studio",
    description:
      "Pagina web desarrollada para una marca artesanal de velas aromáticas y wax melts.",
    summary:
      "Landing page artesanal, rápida y responsive con Next.js y Tailwind CSS",
    features: [
      "Diseño y desarrollo de landing page con Next.js",
      "Componentes reutilizables y escalables con TypeScript",
      "Optimización de rendimiento: imágenes, lazy loading y SEO",
      "Diseño responsive adaptado a móviles y tablets",
    ],
    image: "/clover-studio.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    url: "https://cloverstudio.es",
  },
  {
    title: "AmandoAndo",
    description:
      "Plataforma de e-commerce completa para viajeros con catálogo, carrito y sistema de checkout integrado.",
    summary: "Arquitectura técnica escalable desde landing hasta e-commerce",
    features: [
      "Arquitectura de componentes escalables con Next.js y React 18",
      "Componentes reutilizables para catálogo, carrito y checkout",
      "Backend full-stack con Next.js API Routes y MongoDB",
      "Testing automático con Jest y Testing Library",
    ],
    image: "/travel-planning-app.png",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Jest", "Tailwind CSS"],
    gradient: "from-teal-500/20 via-cyan-500/20 to-blue-500/20",
    url: null,
  },
  {
    title: "Cuadrante Lifeboat",
    description:
      "Sistema de gestión de actividades mensuales con interfaz interactiva y APIs REST escalables.",
    summary: "Aplicación web para gestión de cuadrantes mensuales",
    features: [
      "Desarrollo full-stack con JavaScript y Node.js",
      "Componentes interactivos con arquitectura escalable",
      "APIs REST con Express y MySQL",
      "Trabajo directo con stakeholders traduciendo requerimientos",
    ],
    image: "/emergency-management-dashboard.jpg",
    tags: ["JavaScript", "Node.js", "Express", "MySQL", "REST API"],
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    url: null,
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        -rect.top / (rect.height - window.innerHeight)
      );

      // Map scroll progress to project index
      const newIndex = Math.min(
        projects.length - 1,
        Math.floor(scrollProgress * projects.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="proyectos"
      ref={containerRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 ">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {"> Proyectos_"}
              <span className="text-primary">destacados</span>
            </h2>
          </div>

          <div className="relative">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                }`}
              >
                <Card
                  className={`overflow-hidden border-2 bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-border/50`}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left side - Project mockup */}
                    <div className="relative min-h-[400px] lg:min-h-[600px] p-8 lg:p-12 flex items-center justify-center bg-black/20">
                      <div className="relative w-full h-full max-w-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
                        <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-border/50 shadow-2xl">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right side - Project details */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6 bg-background/80 backdrop-blur-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                          <span className="text-primary">—</span>
                          <span>{project.title}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-balance">
                          {project.summary}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
                        {project.description}
                      </p>

                      <div className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <span className="text-primary flex-shrink-0">
                              +
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="px-3 py-1 bg-background/80 border border-border font-mono text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {project.url ? (
                        <Link
                          href={project.url}
                          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
                        >
                          <span className="font-medium">Ver proyecto</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground italic">
                          Próximamente disponible
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-12 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
