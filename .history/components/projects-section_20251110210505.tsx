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
  return (
    <section id="proyectos" className="relative">
      <Carousel3D projects={projects} />
      <div
        className="flex justify-center items-center gap-4 text-sm text-muted-foreground"
        onMouseEnter={}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          whileHover={{ width: "5rem" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="h-[2px] bg-gradient-to-r from-primary/60 to-transparent rounded-full"
        />
        <Link href={"https://github.com/CodeByEvans"}>
          Ver todos los proyectos en GitHub
        </Link>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          whileHover={{ width: "5rem" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="h-[2px] bg-gradient-to-r from-transparent to-primary/60  rounded-full"
        />
      </div>
    </section>
  );
}
