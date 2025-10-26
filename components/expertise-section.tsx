import { Card } from "@/components/ui/card"

const technologies = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Zustand"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {"> Especialización_"}
            <span className="text-primary">técnica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                {"</>"}
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <div className="space-y-2">
              {technologies.frontend.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">{">"}</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                {"{}"}
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <div className="space-y-2">
              {technologies.backend.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">{">"}</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                {"[]"}
              </div>
              <h3 className="text-xl font-bold">Herramientas</h3>
            </div>
            <div className="space-y-2">
              {technologies.tools.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">{">"}</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
