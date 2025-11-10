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
      <motion.div
        className="flex justify-center items-center gap-4 text-sm text-muted-foreground"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ backgroundColor: isHovered ? "#1e293b" : "transparent" }}
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
    </section>
  );
}
