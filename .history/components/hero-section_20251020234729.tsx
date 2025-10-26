import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible para proyectos
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                {"> Hola, soy"}
                <br />
                <span className="text-primary">vañelia</span>
                <br />
                <span>Desarrollador Full-Stack</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Especializado en crear aplicaciones web modernas y escalables
                con React, TypeScript y Next.js. Transformo ideas en productos
                digitales de alto rendimiento.
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

          <div className="relative">
            <div className="relative aspect-square rounded-lg border border-border bg-card p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
              <div className="relative h-full flex flex-col justify-between font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-muted-foreground">
                    {"// developer.config.ts"}
                  </div>
                  <div className="text-foreground">
                    {"export const developer = {"}
                  </div>
                  <div className="pl-4 text-foreground">
                    {'  name: "CodeByEvans",'}
                  </div>
                  <div className="pl-4 text-foreground">
                    {'  role: "Full-Stack Developer",'}
                  </div>
                  <div className="pl-4 text-foreground">{"  stack: ["}</div>
                  <div className="pl-8 text-primary">{'    "React",'}</div>
                  <div className="pl-8 text-primary">{'    "TypeScript",'}</div>
                  <div className="pl-8 text-primary">{'    "Next.js",'}</div>
                  <div className="pl-8 text-primary">{'    "Node.js"'}</div>
                  <div className="pl-4 text-foreground">{"],"}</div>
                  <div className="pl-4 text-foreground">
                    {'  passion: "Building great products"'}
                  </div>
                  <div className="text-foreground">{"}"}</div>
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <span className="animate-pulse">{">"}</span>
                  <span>{"Ready to build..."}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
