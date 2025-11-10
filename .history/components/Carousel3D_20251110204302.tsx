"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  summary: string;
  features: string[];
  image: string;
  logo: string;
  tags: string[];
  gradient: string;
  status: string;
  url: string | null;
  github?: string | null;
}

interface Carousel3DProps {
  projects: Project[];
}

export default function Carousel3D({ projects }: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const totalItems = projects.length;

    let position = diff;
    if (diff > totalItems / 2) position = diff - totalItems;
    if (diff < -totalItems / 2) position = diff + totalItems;

    const isActive = position === 0;
    const absPos = Math.abs(position);

    return { position, isActive, absPos };
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      activo: {
        label: "Activo",
        color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      },
      "no-operativo": {
        label: "No Operativo",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
    };
    return badges[status as keyof typeof badges] || badges.activo;
  };

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4"
        >
          Proyectos Destacados
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          Explora mi trabajo y experiencia
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative h-[600px] flex items-center justify-center"
        style={{ perspective: "2000px" }}
      >
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            const { position, isActive, absPos } = getCardPosition(index);

            if (absPos > 2) return null;

            const statusBadge = getStatusBadge(project.status);

            return (
              <motion.div
                key={project.title}
                className="absolute w-[400px] h-[550px] cursor-pointer"
                initial={false}
                animate={{
                  x: position * 440,
                  z: isActive ? 0 : -300 - absPos * 100,
                  rotateY: position * -20,
                  scale: isActive ? 1 : 0.75 - absPos * 0.1,
                  opacity: absPos > 2 ? 0 : 1,
                  zIndex: 10 - absPos,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onClick={() => setActiveIndex(index)}
              >
                <motion.div
                  className={`relative w-full h-full bg-gradient-to-br ${project.gradient} backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-border/50`}
                  whileHover={{ scale: isActive ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                  </div>

                  {/* Logo Badge */}
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-xl overflow-hidden border-2 border-background/50 shadow-lg">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md ${statusBadge.color}`}
                  >
                    {statusBadge.label}
                  </div>

                  {/* Content */}
                  <div className="relative p-6 space-y-3">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground">
                      {project.summary}
                    </p>

                    {/* Features - Only show on active card */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                          Características
                        </h4>
                        <ul className="space-y-1.5">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-primary mt-0.5 flex-shrink-0"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-card text-card-foreground rounded-md border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 opacity-0 pointer-events-none"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-12">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-4 rounded-full shadow-lg border border-border transition-colors"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-4 rounded-full shadow-lg border border-border transition-colors"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((project, index) => (
          <motion.button
            key={project.title}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Ver ${project.title}`}
          />
        ))}
      </div>
    </div>
  );
}
