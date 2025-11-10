"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { DeveloperConfig } from "./hero/DeveloperConfig";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Fondo con rejilla sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Gradiente de énfasis superior */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 pt-8 lg:pt-0">
            {/* Encabezado superior */}
            <div className="flex items-center flex-wrap gap-4 text-sm md:text-base">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium tracking-wide backdrop-blur-sm">
                {"< Hello World />"}
              </div>

              {/* Separador animado */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-primary/60 to-primary/20 rounded-full"
              />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium tracking-wide backdrop-blur-sm">
                Full-Stack Developer
              </div>
            </div>

            {/* Nombre + Typewriter */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
                {"> Hola, soy "}
                <span className="text-primary inline-block">
                  <Typewriter
                    options={{
                      strings: ["CodeByEvans", "Evans"],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 50,
                      cursor: "_",
                    }}
                  />
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Desarrollador Full Stack apasionado por construir experiencias
                digitales modernas, fluidas y escalables con{" "}
                <span className="font-semibold text-foreground">React</span>,{" "}
                <span className="font-semibold text-foreground">
                  TypeScript
                </span>{" "}
                y <span className="font-semibold text-foreground">Next.js</span>
                .
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group relative overflow-hidden">
                <Link href="#contacto" className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1 duration-200" />
                  Contactar
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 duration-200" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                asChild
              >
                <Link href="/cv">
                  <FileText className="h-5 w-5 mr-2" />
                  Ver CV
                </Link>
              </Button>
            </div>
          </div>

          <DeveloperConfig />
        </div>
      </div>
    </motion.section>
  );
}
