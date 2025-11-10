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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden "
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pt-8 lg:pt-0">
            <div className="flex items-center flex-wrap gap-3 text-sm  text-muted-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1  border border-primary/30 bg-primary/10 text-primary font-medium">
                {"< Hello World />"}
              </div>

              <div className="flex-1 h-[2px] bg-primary/40 max-w-[60px]" />

              <p className="text-foreground font-semibold tracking-wide">
                Full-Stack Developer
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance">
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

              <p className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Desarrollador Full Stack especializado en crear aplicaciones web
                modernas y escalables con React, TypeScript y Next.js.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#contacto">
                  <Mail className="h-5 w-5 mr-2" />
                  Contactar
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
