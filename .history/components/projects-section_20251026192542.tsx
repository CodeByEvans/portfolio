"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "AmandoAndo",
    description:
      "Plataforma de e-commerce para una tienda online de papelería cristiana.",
    summary: "Tienda online de papelería cristiana",
    features: [
      "Proyecto full-stack con Next.js",
      "Testing automático con Jest y React Testing Library",
      "Diseño responsive y accesible con Tailwind CSS",
      "Imágenes optimizadas para web y SEO con Cloudinary",
      "Integración de CMS para gestión de productos y contenido",
    ],
    image: "/amandoando.webp",
    logo: "/amandoando-logo.jpg",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Jest",
      "Tailwind CSS",
      "CMS",
      "Cloudinary",
      "REST API",
    ],
    gradient: "from-teal-500/20 via-cyan-500/20 to-blue-500/20",
    status: "activo",
    url: null,
  },
  {
    title: "Clover Studio",
    description:
      "Pagina web desarrollada para una marca artesanal de velas aromáticas y wax melts. En proceso de expansión con tienda online próximamente.",
    summary: "Landing page para estudio de velas artesanales",
    features: [
      "Diseño y desarrollo de landing page con Next.js",
      "Componentes reutilizables y escalables con TypeScript",
      "Optimización de rendimiento: imágenes, lazy loading y SEO",
      "Diseño responsive adaptado a móviles y tablets",
    ],
    image: "/clover-studio.webp",
    logo: "/clover-logo.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    status: "activo",
    url: "https://cloverstudio.es",
  },
  {
    title: "Cuadrante Lifeboat",
    description:
      "Sistema de gestión de actividades mensuales con interfaz interactiva y APIs REST escalables.",
    summary: "Aplicación web para gestión de cuadrantes",
    features: [
      "Desarrollo full-stack con JavaScript y Node.js",
      "Componentes interactivos con arquitectura escalable",
      "APIs REST con Express y MySQL",
      "Trabajo directo con stakeholders traduciendo requerimientos",
    ],
    image: "/lifeboat.webp",
    logo: "/lifeboat-logo.png",
    tags: ["JavaScript", "Node.js", "Express", "MySQL", "REST API"],
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    status: "no-operativo",
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
          <div className="text-center mb-12 space-y-4 mt-20 ">
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
                    <div className="relative min-h-[400px] lg:min-h-[600px] p-8 lg:p-12 flex flex-col items-center justify-start bg-black/10 gap-6">
                      {/* Logo arriba */}
                      <div className="w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center rounded-full overflow-hidden border-2 border-border/50 shadow-lg bg-white">
                        <Image
                          src={project.logo || "/placeholder.svg"}
                          alt={`${project.title} Logo`}
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>

                      {/* Hero screenshot */}
                      <div className="relative w-full h-[200px] lg:h-[300px] max-w-full rounded-xl overflow-hidden border-2 border-border/50 shadow-2xl">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
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

                      {project.status === "activo" && project.url ? (
                        <Link
                          href={project.url}
                          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
                        >
                          <span className="font-medium">Ver proyecto</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : project.status === "no-operativo" ? (
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground italic">
                          Proyecto terminado (temporalmente no operativo)
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground italic">
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
