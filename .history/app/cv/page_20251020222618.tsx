import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Award, Code } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold">Evans Javier Lituma Rambay</h1>
                <p className="text-2xl text-primary font-mono">Full Stack Developer</p>
              </div>
              <Button size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Descargar PDF
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:evansjavierlr@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                evansjavierlr@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                622171607
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Meco, España
              </span>
              <a
                href="https://linkedin.com/in/evans-lituma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/CodeByEvans"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <Card className="p-6 mb-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Perfil Profesional
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer con experiencia práctica en arquitectura de componentes escalables con React 18 y
              TypeScript. Especializado en desarrollo front-end con enfoque en calidad de código, testing automático y
              buenas prácticas. Apasionado por crear interfaces accesibles y mantenibles. Busco impactar directamente en
              productos de referencia mientras sigo creciendo técnicamente y contribuyendo al desarrollo del equipo.
            </p>
          </Card>

          {/* Experience Section */}
          <Card className="p-6 mb-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Experiencia Laboral
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <span className="text-sm text-muted-foreground">06/2025 – Presente</span>
                  </div>
                  <p className="text-primary font-semibold">Clover Studio | Madrid, España</p>
                  <ul className="space-y-2 text-muted-foreground text-sm mt-4">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Diseñé y desarrollé una landing page optimizada con Next.js y React, enfocándome en conversión y
                        SEO (meta tags, structured data, performance)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Construí componentes reutilizables y escalables con TypeScript, aplicando patrones mantenibles
                        para transición futura a e-commerce
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Implementé optimizaciones de performance críticas: image optimization, lazy loading, y CSS-in-JS
                        eficiente con Tailwind para tiempos de carga
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Desarrollé backend con Node.js, Next.js, MongoDB y REST APIs para gestión de productos,
                        categorías y etiquetas (estructura lista para tienda)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Integré animaciones y micro-interacciones accesibles que mejoran UX sin comprometer performance.
                        Testing automático en progreso (Jest/Testing Library)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <span className="text-sm text-muted-foreground">02/2024 – Presente</span>
                  </div>
                  <p className="text-primary font-semibold">AmandoAndo | Madrid, España</p>
                  <ul className="space-y-2 text-muted-foreground text-sm mt-4">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Lideré arquitectura técnica desde landing page inicial hacia plataforma de e-commerce,
                        definiendo patrones de componentes escalables con Next.js y React
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Diseñé componentes reutilizables con React 18 y TypeScript para catálogo, carrito y checkout,
                        priorizando accesibilidad (WCAG standards)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Implementé backend full-stack con Next.js (API Routes), Node.js y MongoDB para gestionar
                        productos, autenticación y carrito
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Establecí estándares de calidad con testing automático (Jest, Testing Library) en componentes
                        críticos de transacciones y autenticación
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Projects Section */}
          <Card className="p-6 mb-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Proyectos Destacados
            </h2>

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sistema de Cuadrantes Mensuales | LifeBoat</h3>
                  <span className="text-sm text-muted-foreground">02/2024 – 06/2024</span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Desarrollo full-stack de aplicación web para gestión de actividades mensuales. Construí componentes
                    interactivos con JavaScript, implementé APIs REST con Node.js, Express y MySQL. Primer proyecto
                    profesional donde apliqué arquitectura escalable, patrones de componentes y mejores prácticas en
                    front-end. Experiencia trabajando mano a mano con stakeholders y traduciendo requerimientos en
                    soluciones técnicas.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Technologies Section */}
          <Card className="p-6 mb-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Tecnologías
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-lg">Front-End (Especialidad)</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "React 18",
                    "Next.js",
                    "JavaScript (ES6+)",
                    "HTML5",
                    "Modular CSS",
                    "CSS3",
                    "Tailwind CSS",
                    "Vite",
                    "StoryBook",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg">Testing & Calidad</h3>
                <div className="flex flex-wrap gap-2">
                  {["Jest", "Vitest", "Testing Library", "Supertest", "Git workflows"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg">Back-End</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "REST APIs", "GraphQL", "MongoDB", "MySQL", "PostgreSQL"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg">Herramientas & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "npm", "pnpm", "Vite", "REST API design"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications Section */}
          <Card className="p-6 mb-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certificados
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Full Stack Open (MOOC con créditos ECTS)</h3>
                <p className="text-primary font-semibold">Universidad de Helsinki</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Especialización en desarrollo de aplicaciones web modernas
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>React 18 - Arquitectura de componentes, hooks, state management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Node.js & Express - APIs REST y GraphQL</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>MongoDB - Modelado y optimización de datos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Testing - Jest, Vitest, Testing Library</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>TypeScript - Tipado estático y buenas prácticas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tooling moderno - Vite, Git, GitHub workflows</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Desarrollo de Aplicaciones Web con Java</h3>
                <p className="text-primary font-semibold">Campus Empleabilidad</p>
                <p className="text-sm text-muted-foreground mb-3">Especialización en desarrollo backend con Java</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Spring Boot - Construcción de aplicaciones web escalables</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Struts 2 - Framework MVC para aplicaciones web</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Hibernate - ORM y persistencia de datos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Maven - Gestión de dependencias y build</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>IntelliJ IDEA - IDE profesional para desarrollo Java</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Education Section */}
          <Card className="p-6 mb-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Educación
            </h2>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Educación Secundaria Obligatoria</h3>
              <p className="text-primary font-semibold">IES Gaspar Sanz</p>
              <p className="text-sm text-muted-foreground">09/2012 – 05/2016 | Meco, Madrid</p>
            </div>
          </Card>

          {/* Languages Section */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6">Idiomas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <span className="font-semibold">Español</span>
                <Badge>Nativo</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <span className="font-semibold">English</span>
                <Badge>B1</Badge>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
