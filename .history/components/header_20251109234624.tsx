"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

export function Header() {
  const [visible, setVisible] = React.useState(true);
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll hacia abajo → ocultar
        setVisible(false);
      } else {
        // Scroll hacia arriba → mostrar
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-mono text-primary font-bold">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full overflow-hidden"></div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-white font-bold text-sm md:text-lg">
                  CodeByEvans
                </h1>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#proyectos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#expertise"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#contacto">
                <Mail className="h-4 w-4 mr-2" />
                Contacto
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/cv">
                <FileText className="h-4 w-4 mr-2" />
                CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
