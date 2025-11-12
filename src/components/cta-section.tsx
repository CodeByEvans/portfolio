import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contacto" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>

          <div className="relative bg-card border border-border rounded-2xl p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                {"> ¿Listo para crear"}
                <br />
                <span className="text-primary">algo increible?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Estoy disponible para nuevos proyectos y colaboraciones.
                Hablemos sobre cómo puedo ayudarte a hacer realidad tu próxima
                idea.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:evansjavierlr@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar mensaje
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://linkedin.com/in/evanslituma"
                  target="_blank"
                >
                  Conectar en LinkedIn
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <a
                  href="mailto:codebyevans@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  codebyevans@gmail.com
                </a>
                <span className="hidden sm:block">•</span>
                <a
                  href="https://github.com/CodeByEvans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <span className="hidden sm:block">•</span>
                <a
                  href="https://linkedin.com/in/evanslituma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
