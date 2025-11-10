"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/projectsData";
import Carousel3D from "./Carousel3D";
import { motion } from "motion/react";

export function ProjectsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="proyectos" className="relative">
      <Carousel3D projects={projects} />
      <div className="container mx-auto max-w-6xl relative z-10 flex items-center justify-center">
        <motion.div
          className="flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ backgroundColor: isHovered ? "white" : "transparent" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "5rem" : "3rem" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-white/60 to-transparent rounded-full"
          />
          <Link
            href={"https://github.com/CodeByEvans"}
            className="hover:text-foreground transition-colors"
          >
            Ver todos los proyectos en GitHub
          </Link>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "5rem" : "3rem" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent to-white/60 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
