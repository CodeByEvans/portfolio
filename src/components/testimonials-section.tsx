import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Cecilia",
    role: "Fundadora, Clover Studio",
    content:
      "Trabajar con este desarrollador fue excepcional. Entregó una plataforma robusta que transformó completamente nuestra gestión de proyectos. Su atención al detalle y comunicación constante hicieron la diferencia.",
    rating: 5,
  },
  {
    name: "David y Naomi",
    role: "Fundadores, AmandoAndo",
    content:
      "Superó todas nuestras expectativas. La aplicación no solo es visualmente impresionante, sino que también es increíblemente rápida y fácil de usar. Nuestros usuarios están encantados.",
    rating: 5,
  },
  {
    name: "Lifeboat Team",
    role: "Team, Cuadrante Lifeboat",
    content:
      "Profesionalismo de primer nivel. Desarrolló un sistema crítico de gestión de emergencias que funciona perfectamente bajo presión. Su experiencia técnica es invaluable.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            {"> Clientes_"}
            <span className="text-primary">satisfechos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lo que dicen quienes han trabajado conmigo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
