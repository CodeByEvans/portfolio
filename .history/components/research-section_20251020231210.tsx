import { Card } from "@/components/ui/card";

const researchAreas = [
  {
    title: "Arquitectura de Sistemas Web",
    description:
      "Investigación en diseño full-stack escalable utilizando Next.js, React y TypeScript. Enfocado en construir sistemas unificados que optimicen la interacción entre front-end y back-end, mejoren el flujo de datos y aumenten la productividad del desarrollador.",
    topics: [
      "Arquitectura Full-Stack con Next.js",
      "Integración y optimización de APIs",
      "Gestión de estado y sistemas de UI/UX",
      "Mantenibilidad del código y pruebas",
    ],
  },
  {
    title: "Infraestructura en la Nube y Gestión de Medios",
    description:
      "Exploración de flujos de trabajo basados en la nube para almacenamiento, entrega y escalabilidad en aplicaciones web modernas. Trabajo en la integración de servicios de medios y datos que reducen la fricción operativa y garantizan confiabilidad a largo plazo.",
    topics: [
      "Integración con Cloud y pipelines de medios",
      "MongoDB Atlas y escalabilidad de datos",
      "Automatización de despliegues y CI/CD",
      "Funciones serverless y ejecución en edge",
    ],
  },
  {
    title: "Diseño de Aplicaciones Basadas en Datos",
    description:
      "Investigación de estrategias de modelado y validación de datos para construir APIs seguras, eficientes y mantenibles. Énfasis en la eficiencia en escenarios reales y en una experiencia de desarrollo predecible.",
    topics: [
      "Diseño de APIs REST",
      "Validación con Zod y procesamiento de formularios",
      "Modelado de datos y seguridad",
      "Perfilado de rendimiento y optimización",
    ],
  },
];

export function ResearchSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {"> Mi especialización"}
            <span className="text-primary">técnica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Durante mi carrera como desarrollador, me he enfocado en áreas clave
            que potencian la creación de aplicaciones web robustas y escalables.
            Aquí te presento mis principales áreas de investigación y
            especialización técnica.
          </p>
        </div>

        <div className="space-y-6">
          {researchAreas.map((area, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-colors"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-4">
                  {area.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">{"•"}</span>
                      <span className="text-sm text-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
