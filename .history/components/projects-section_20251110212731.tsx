"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { projects } from "@/projectsData";
import Carousel3D from "./Carousel3D";
import { motion, useInView } from "motion/react";

export function ProjectsSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Referencia para detectar cuando el bloque entra en pantalla
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="relative" ref={ref}>
      <div className="text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-3"
        >
          Proyectos Destacados
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-muted-foreground text-base"
        >
          Explora mi trabajo y experiencia
        </motion.p>
      </div>

      <Carousel3D projects={projects} />

      <div className="container mx-auto max-w-6xl relative z-10 flex items-center justify-center text-muted-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center gap-4 p-4 rounded-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "5rem" : "3rem" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-white/60 to-transparent rounded-full"
          />
          <Link href="https://github.com/CodeByEvans">
            Ver todos los proyectos en GitHub
          </Link>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "5rem" : "3rem" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent to-white/60 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
