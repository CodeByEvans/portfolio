"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
  AnimatePresence,
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Card } from "./ui/card";

const frontEnd = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "GraphQL",
  "Prisma",
  "Node.js",
  "MongoDB",
  "REST API",
];

const backEnd = [
  "Node.js",
  "Express",
  "Next.js",
  "REST API",
  "GraphQL",
  "Prisma",
];

const DatabaseAndCloud = [
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "SQLite",
  "Supabase",
  "AWS",
];
const Tools = ["Git", "Docker", "NPM", "Yarn", "Vite", "Webpack"];

const Sections = [
  {
    title: "Frontend",
    items: frontEnd,
    description:
      "Empecé desarrollando con HTML, CSS y Javascript, pero rapidamente me interesé por frameworks más avanzados e interactivos como React. Esto me permitió hacer aplicaciones más eficientes y dinámicas, las cuales quise mejorar aun más con Next.js y TypeScript.",
  },
  {
    title: "Backend",
    items: backEnd,
    description:
      "Después de dominar el lado visual, me empezó a intrigar lo que pasaba detrás del telón. Así fue como entré al mundo del backend con Node.js y Express, aprendiendo a crear mis propios endpoints y conectar todo con bases de datos. Con el tiempo, fui profundizando en el modelado de datos, autenticación, SEO y la estructura de las APIs. Todo eso me ayudó a convertirme en un desarrollador full-stack más completo.",
  },
  {
    title: "Database & Cloud",
    items: DatabaseAndCloud,
    description:
      "Siempre me ha gustado que mis proyectos trabajen con datos reales, vivos y dinámicos. Empecé con MySQL, que fue la base de datos que más fácil se me hizo al principio, y con el tiempo aprendí a manejar también MongoDB, PostgreSQL y Supabase, aprovechando su Real-Time API y sus integraciones. Al notar que guardar imágenes y archivos pesados en la base de datos no era lo ideal, empecé a usar servicios en la nube como AWS S3 y Cloudinary. Más adelante, me metí con CI/CD para automatizar despliegues y mejorar mi flujo de desarrollo.",
  },
  {
    title: "Tools",
    items: Tools,
    description:
      "Para mí, la clave está en mantener un flujo limpio y productivo. Uso Git y GitHub en cada proyecto, Zod para validaciones, i18next para traducción, y Playwright, Supertest y Jest para testing. Me gusta animar las interfaces con Framer Motion y Radix UI, trabajando la experiencia de usuario a la perfección a la vez que la accesibilidad. Nada de esto podría mantenerse sin unas buenas prácticas y buena documentación, así que hago de cada proyecto una experiencia unica.",
  },
];

interface ParallaxProps {
  children: string[];
  baseVelocity: number;
}

const ParallaxItems = ({ children, baseVelocity }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex whitespace-nowrap text-2xl w-full bg-[#060707]">
      <motion.div className="inline-flex" style={{ x }}>
        {[...children, ...children].map((child, idx) => (
          <span key={idx} className="inline-block mr-8">
            {child}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const Stack = () => {
  const [selectedSection, setSelectedSection] = useState<any>(null);

  // Evitar scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedSection) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedSection]);

  return (
    <section id="stack" className="bg-[#060707] py-20">
      <div className="text-center py-20 ">
        <p className="text-cyan-500 font-mono text-sm tracking-wider mb-2">
          &lt;/ Mi Trayectoria &gt;
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Stack
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Te presento mi stack tecnológico
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {Sections.map((section, index) => (
          <motion.div
            key={index}
            layoutId={section.title}
            className="w-full"
            onClick={() => setSelectedSection(section)}
          >
            <Card className="p-4 w-full mx-auto cursor-pointer hover:scale-[1.02] transition-all">
              <div className="flex flex-col justify-between items-center text-3xl overflow-hidden gap-4">
                <h2>{section.title}</h2>
                <ParallaxItems baseVelocity={-2}>{section.items}</ParallaxItems>
                <button className="text-sm text-primary">Saber más...</button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSection && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              layoutId={selectedSection.title}
              className="bg-[#0e0f10] border border-gray-700 rounded-2xl p-8 max-w-xl mx-4 text-center text-gray-200 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6, stiffness: 100 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                {selectedSection.title}
              </h2>
              <ParallaxItems baseVelocity={-2}>
                {selectedSection.items}
              </ParallaxItems>
              <p className="text-base mt-6">{selectedSection.description}</p>
              <button
                className="mt-8 text-sm text-cyan-400 hover:text-cyan-300 transition"
                onClick={() => setSelectedSection(null)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Stack;
