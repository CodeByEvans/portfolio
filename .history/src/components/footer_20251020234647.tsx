"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-lg font-mono text-primary font-bold">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/me.jpg"
                    alt="CodeByEvans Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <h1 className="text-white font-bold text-sm">CodeByEvans</h1>
                  <p className="text-xs text-muted-foreground">
                    Desarrollador Full-Stack
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer especializado en React, TypeScript y Next.js.
              Creando experiencias web excepcionales.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Navegación</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#inicio"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#proyectos"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="#expertise"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/cv"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                CV
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:evansjavierlr@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                evansjavierlr@gmail.com
              </a>
              <a
                href="https://github.com/CodeByEvans"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/evans-lituma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeByEvans. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
