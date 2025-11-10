"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/projectsData";
import Carousel3D from "./Carousel3D";

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
      <Carousel3D projects={projects} />
      <div>
        <p>Ver todos los proyectos en GitHub</p>
      </div>
    </section>
  );
}
