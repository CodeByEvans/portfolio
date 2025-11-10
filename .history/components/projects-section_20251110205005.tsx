"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/projectsData";
import Carousel3D from "./Carousel3D";
import { motion } from "motion/react";

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
      <div className="flex justify-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="h-[2px] bg-gradient-to-r from-primary/60 to-transparent rounded-full"
        />
        <Link href={"https://github.com/CodeByEvans"}>
          Ver todos los proyectos en GitHub
        </Link>
      </div>
    </section>
  );
}
