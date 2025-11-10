"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamic import sin SSR
const SceneWrapper = dynamic(
  () =>
    import("@/components/canvas/scene-wrapper").then((mod) => ({
      default: mod.SceneWrapper,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[600px] w-full items-center justify-center bg-gray-900 rounded-lg">
        <p className="text-white">Cargando experiencia 3D...</p>
      </div>
    ),
  }
);

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

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>

        {/* Vista 3D */}
        <div className="h-[600px] w-full rounded-lg overflow-hidden mb-16">
          <SceneWrapper />
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.summary}</p>
                </div>
                <Badge
                  variant={
                    project.status === "activo" ? "default" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  Ver proyecto <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
