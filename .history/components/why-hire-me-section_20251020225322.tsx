"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Heart, Users, Globe2, Star } from "lucide-react";
import { useEffect, useRef } from "react";

import { BiLogoMongodb, BiTestTube } from "react-icons/bi";
import {
  SiPrisma,
  SiMysql,
  SiTypescript,
  SiZod,
  SiExpress,
  SiTestinglibrary,
  SiVercel,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaFigma, FaDocker, FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";

const techRow1 = [
  { name: "TypeScript", icon: <SiTypescript size={18} color="blue" /> },
  { name: "React", icon: <FaReact size={18} color="cyan" /> },
  { name: "Next.js", icon: <RiNextjsLine size={18} color="black" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={18} color="cyan" /> },
  { name: "Figma", icon: <FaFigma size={18} color="pink" /> },
  { name: "Zod", icon: <SiZod size={18} color="purple" /> },
];

const techRow2 = [
  { name: "MySQL", icon: <SiMysql size={18} /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={18} color="blue" /> },
  { name: "MongoDB", icon: <BiLogoMongodb size={18} color="green" /> },
  { name: "Prisma", icon: <SiPrisma size={18} /> },
  { name: "Node.js", icon: <FaNodeJs size={18} color="green" /> },
  { name: "Express.js", icon: <SiExpress size={18} /> },
];

const techRow3 = [
  { name: "Docker", icon: <FaDocker size={18} color="blue" /> },
  { name: "JWT", icon: "🔐" },
  { name: "Jest", icon: <BiTestTube size={18} color="red" /> },
  {
    name: "React Testing Library",
    icon: <SiTestinglibrary size={18} color="orange" />,
  },
  { name: "Vercel", icon: <SiVercel size={18} color="black" /> },
  { name: "Git", icon: <FaGitAlt size={18} color="orange" /> },
  { name: "GitHub", icon: <FaGithub size={18} color="black" /> },
];

export function WhyHireMeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);
  const carousel3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCarousel = (
      ref: React.RefObject<HTMLDivElement>,
      speed: number
    ) => {
      const carousel = ref.current;
      if (!carousel) return;

      let scrollPosition = 0;

      const animate = () => {
        scrollPosition += speed;
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
        }
        carousel.scrollLeft = scrollPosition;
        requestAnimationFrame(animate);
      };

      return requestAnimationFrame(animate);
    };

    const anim1 = animateCarousel(carousel1Ref, 0.5);
    const anim2 = animateCarousel(carousel2Ref, 0.6);
    const anim3 = animateCarousel(carousel3Ref, 0.4);

    return () => {
      if (anim1) cancelAnimationFrame(anim1);
      if (anim2) cancelAnimationFrame(anim2);
      if (anim3) cancelAnimationFrame(anim3);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Globe parameters
    const centerX = canvas.width / (window.devicePixelRatio || 1) / 2;
    const centerY = canvas.height / (window.devicePixelRatio || 1) / 2;
    const radius = Math.min(centerX, centerY) - 20;
    let rotation = 0;

    // Create dots for globe
    const dots: { x: number; y: number; z: number; alpha: number }[] = [];
    const numDots = 800;

    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dots.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotation += 0.003;

      dots.forEach((dot) => {
        // Rotate around Y axis
        const rotatedX =
          dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ =
          dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);

        // Project to 2D
        const scale = 1 / (1 + rotatedZ * 0.3);
        const x = centerX + rotatedX * radius * scale;
        const y = centerY + dot.y * radius * scale;

        // Only draw dots on visible hemisphere
        if (rotatedZ > -0.3) {
          const size = scale * 1.5;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${dot.alpha * scale})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {"> ¿Por qué conectar_"}
            <span className="text-primary">conmigo?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 bg-secondary/30 border-border hover:border-primary/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Pasión por la Tecnología</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Apasionado por las tecnologías de vanguardia. Siempre explorando
                las últimas herramientas y frameworks para crear soluciones
                innovadoras y eficientes.
              </p>

              <div className="pt-4 space-y-3">
                {/* Carousel 1 */}
                <div className="overflow-hidden">
                  <div
                    ref={carousel1Ref}
                    className="flex gap-3 overflow-x-hidden"
                    style={{ scrollBehavior: "auto" }}
                  >
                    {[...techRow1, ...techRow1].map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel 2 */}
                <div className="overflow-hidden">
                  <div
                    ref={carousel2Ref}
                    className="flex gap-3 overflow-x-hidden"
                    style={{ scrollBehavior: "auto" }}
                  >
                    {[...techRow2, ...techRow2].map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel 3 */}
                <div className="overflow-hidden">
                  <div
                    ref={carousel3Ref}
                    className="flex gap-3 overflow-x-hidden"
                    style={{ scrollBehavior: "auto" }}
                  >
                    {[...techRow3, ...techRow3].map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-secondary/30 border-border hover:border-primary/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Especializado en React</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Experto en el ecosistema React, construyendo aplicaciones
                escalables con React 18, Next.js y TypeScript. He explorado
                certificados como Full Stack Open, un MOOC con créditos
                universitarios que profundiza en arquitectura de componentes
                moderna y patrones de diseño probados.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-md text-primary font-mono">
                  React 18
                </span>
                <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-md text-primary font-mono">
                  Next.js 15
                </span>
                <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-md text-primary font-mono">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-md text-primary font-mono">
                  Server Components
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-secondary/30 border-border hover:border-primary/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Satisfacción de Clientes</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprometido con la excelencia en cada proyecto. Trabajo mano a
                mano con los clientes para traducir sus necesidades en
                soluciones técnicas que superan expectativas.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-4">
                <div className="text-center p-6 bg-background border border-border rounded-lg">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Clientes Satisfechos
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-secondary/30 border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Disponibilidad Global</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Flexible con comunicaciones en diferentes zonas horarias.
                Disponible para trabajar con clientes en España y en todo el
                mundo.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
                  <span className="text-sm font-mono text-primary">EU</span>
                  <span className="ml-2 text-sm font-medium text-primary">
                    Europa
                  </span>
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-lg">
                  <span className="text-sm font-mono text-muted-foreground">
                    UK
                  </span>
                  <span className="ml-2 text-sm font-medium">Reino Unido</span>
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-lg">
                  <span className="text-sm font-mono text-muted-foreground">
                    US
                  </span>
                  <span className="ml-2 text-sm font-medium">América</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
