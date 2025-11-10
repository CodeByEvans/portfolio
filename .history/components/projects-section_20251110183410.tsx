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
      "Sistema de gestión de cuadrantes con interfaz interactiva y APIs REST escalables.",
    summary: "Aplicación web para gestión de cuadrantes",
    features: [
      "Desarrollo full-stack con JavaScript y Node.js",
      "Componentes interactivos con arquitectura escalable",
      "APIs REST con Express y MySQL",
      "Trabajo directo con stakeholders traduciendo requerimientos",
    ],
    image: "/lifeboat.webp",
    logo: "/lifeboat-logo.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
    ],
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    status: "no-operativo",
    url: null,
  },
];

const stadistics = [
  {
    value: "1+",
    label: "Año de experiencia",
  },
  {
    value: "3+",
    label: "Proyectos",
  },
  {
    value: "3+",
    label: "Clientes satisfechos",
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
    <section id="proyectos" className="relative">
      <section className="flex">
        <article className="flex">
          {stadistics.map((stat, index) => (
            <figure
              key={index}
              className="flex flex-col items-center border border-primary/30 bg-primary/10 text-primary font-medium p-4"
            >
              <h1>{stat.value}</h1>
              <p>{stat.label}</p>
            </figure>
          ))}
        </article>
        <article>
          <p>Scroll para ver mis proyectos</p>
        </article>
      </section>
    </section>
  );
}
