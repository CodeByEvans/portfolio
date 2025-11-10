"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/projectsData"; // si quieres separar los datos

function useParallax(scrollYProgress: any, distance: number) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center gap-32 py-32"
    >
      {projects.map((project, index) => {
        const y = useParallax(scrollYProgress, 100 + index * 20); // efecto parallax progresivo
        return (
          <motion.div
            key={project.title}
            className={`relative w-full max-w-5xl p-6 rounded-xl shadow-xl bg-white dark:bg-gray-800`}
            style={{ y }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-full md:w-1/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
