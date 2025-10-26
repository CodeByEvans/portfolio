import { Card } from "@/components/ui/card";

const researchAreas = [
  {
    title: "Arquitectura de Sistemas Web",
    description:
      "Researching scalable full-stack design using Next.js, React, and TypeScript. Focused on building unified systems that streamline front-end and back-end interaction, improve data flow, and enhance developer productivity.",
    topics: [
      "Next.js Full-Stack Architecture",
      "API Integration & Optimization",
      "State Management & UI Systems",
      "Code Maintainability & Testing",
    ],
  },
  {
    title: "Cloud Infrastructure & Media Management",
    description:
      "Exploring cloud-based workflows for storage, delivery, and scalability in modern web apps. I work on integrating media and data services that reduce operational friction and support long-term reliability.",
    topics: [
      "Cloudinary Integration & Media Pipelines",
      "MongoDB Atlas & Data Scalability",
      "Deployment Automation & CI/CD",
      "Serverless Functions & Edge Runtime",
    ],
  },
  {
    title: "Data-Driven Application Design",
    description:
      "Investigating data modeling and validation strategies to build secure, performant, and maintainable APIs. Emphasis on real-world efficiency and predictable developer experience.",
    topics: [
      "REST & GraphQL API Design",
      "Zod Validation & Form Processing",
      "Data Modeling & Security",
      "Performance Profiling & Optimization",
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
