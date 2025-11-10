"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Fondo de cuadrícula */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradiente superior */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto principal */}
          <div className="space-y-10 pt-8 lg:pt-0">
            {/* Header superior */}
            <div className="flex items-center flex-wrap gap-4 text-sm md:text-base text-muted-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium backdrop-blur-sm">
                {"< Hello World />"}
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-primary/60 to-transparent rounded-full"
              />

              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium backdrop-blur-sm">
                Full-Stack Developer
              </p>
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-balance text-foreground drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
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

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Desarrollador{" "}
                <span className="font-semibold text-foreground">
                  Full Stack
                </span>{" "}
                apasionado por crear aplicaciones modernas, fluidas y escalables
                con <span className="font-semibold text-foreground">React</span>
                ,{" "}
                <span className="font-semibold text-foreground">
                  TypeScript
                </span>{" "}
                y <span className="font-semibold text-foreground">Next.js</span>
                .
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link href="#contacto" className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1 duration-200" />
                    Contactar
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 duration-200" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 transition-colors"
                  asChild
                >
                  <Link href="/cv">
                    <FileText className="h-5 w-5 mr-2" />
                    Ver CV
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Imagen con efecto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Glow detrás del avatar */}
            <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full w-[90%] h-[90%] top-5 left-5" />
            <Image
              src="/avatar.jpg"
              alt="CodeByEvans Avatar"
              width={420}
              height={420}
              className="object-cover rounded-3xl shadow-2xl border border-primary/30 relative z-10 hover:rotate-1 hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
