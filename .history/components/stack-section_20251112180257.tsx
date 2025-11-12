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
} from "motion/react";
import { useRef } from "react";
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
  return (
    <section>
      <div className="text-center py-20 ">
        <p className="text-cyan-500 font-mono text-sm tracking-wider mb-2">
          &lt;/ Mi Trayectoria &gt;
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Stack
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Te presento mi stack tecnologico
        </p>
      </div>

      <div className="flex flex-grid md:grid-cols-2 gap-4 w-full">
        <Card className="p-4 w-100 h-90 mx-auto px-0">
          <div className="flex flex-col h-full justify-between items-center text-3xl overflow-hidden gap-4">
            <h2>Frontend</h2>
            <ParallaxItems baseVelocity={-2}>{frontEnd}</ParallaxItems>
            <p className="text-base px-8 text-center">
              Empecé desarrollando con HTML, CSS y Javascript, pero rapidamente
              me interesé por frameworks más avanzados e interactivos como
              React. Esto me permitió hacer aplicaciones más eficientes y
              dinámicas, las cuales quise mejorar aun más con Next.js y
              TypeScript.
            </p>
          </div>
        </Card>
        <Card className="p-4 w-100 h-90 mx-auto px-0">
          <div className="flex flex-col h-full justify-between items-center text-3xl overflow-hidden gap-4">
            <h2>Backend</h2>
            <ParallaxItems baseVelocity={-2}>{frontEnd}</ParallaxItems>
            <p className="text-base px-8 text-center">
              Empecé desarrollando con HTML, CSS y Javascript, pero rapidamente
              me interesé por frameworks más avanzados e interactivos como
              React. Esto me permitió hacer aplicaciones más eficientes y
              dinámicas, las cuales quise mejorar aun más con Next.js y
              TypeScript.
            </p>
          </div>
        </Card>
        <Card className="p-4 w-100 h-90 mx-auto px-0">
          <div className="flex flex-col h-full justify-between items-center text-3xl overflow-hidden gap-4">
            <h2>Bases de Datos y Cloud</h2>
            <ParallaxItems baseVelocity={-2}>{frontEnd}</ParallaxItems>
            <p className="text-base px-8 text-center">
              Empecé desarrollando con HTML, CSS y Javascript, pero rapidamente
              me interesé por frameworks más avanzados e interactivos como
              React. Esto me permitió hacer aplicaciones más eficientes y
              dinámicas, las cuales quise mejorar aun más con Next.js y
              TypeScript.
            </p>
          </div>
        </Card>
        <Card className="p-4 w-100 h-90 mx-auto px-0">
          <div className="flex flex-col h-full justify-between items-center text-3xl overflow-hidden gap-4">
            <h2>Herramientas y Flujo de Trabajo</h2>
            <ParallaxItems baseVelocity={-2}>{frontEnd}</ParallaxItems>
            <p className="text-base px-8 text-center">
              Empecé desarrollando con HTML, CSS y Javascript, pero rapidamente
              me interesé por frameworks más avanzados e interactivos como
              React. Esto me permitió hacer aplicaciones más eficientes y
              dinámicas, las cuales quise mejorar aun más con Next.js y
              TypeScript.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Stack;
