import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-mono text-primary font-bold">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="CodeByEvans Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-white font-bold text-sm md:text-lg">
                  CodeByEvans
                </h1>
                <p className="text-xs text-muted-foreground">
                  Desarrollador Full-Stack
                </p>
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
