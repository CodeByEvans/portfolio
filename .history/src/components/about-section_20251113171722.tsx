"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { PiStudent } from "react-icons/pi";

export const AboutSection = () => {
  const containerRef = useRef(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Detectar el progreso del scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // La línea crece de 0% a 100% según el scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineItems = [
    {
      year: "10/2023 - 03/2024",
      title: "Descubriendo la programación",
      description: "Iniciando en el desarrollo web con Java",
      detail:
        "Gracias a un curso del SEPE aprendí a programar y crear aplicaciones web con Java y Spring Boot. Fue mi puerta de entrada al mundo del desarrollo web.",
      icon: "🚀",
      color: "teal",
    },
    {
      year: "05/2024 - 10/2024",
      title: "Full Stack Open",
      description: "Estudiando el bootcamp de Full Stack Open",
      detail:
        "Full Stack Open es un bootcamp acreditado por la Universidad de Helsinki. Aquí aprendí desarrollo web moderno, control de versiones, bases de datos, testing, APIs y mas.",
      icon: "🎓",
      color: "purple",
    },
    {
      year: "2024 - Presente",
      title: "Full Stack Developer",
      description: "Creando aplicaciones web modernas y escalables",
      detail:
        "Trabajo con el stack MERN o NEXT.js, pero siempre estoy buscando nuevas tecnologías para mis proyectos. Busco la mejor opción para cada proyecto, aunque implique aprender algo nuevo.",
      icon: "💻",
      color: "cyan",
    },
  ];

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Calcular cuándo cada punto debe aparecer
  const getPointProgress = (index: number) => {
    const pointStart = index / timelineItems.length;
    const pointEnd = (index + 1) / timelineItems.length;
    return useTransform(scrollYProgress, [pointStart, pointEnd], [0, 1]);
  };

  return (
    <section className="relative " id="sobre-mi">
      {/* Header fijo en la parte superior */}
      <div className="text-center py-20 px-4 flex flex-col gap-2 md:gap-4">
        <p className="text-cyan-500 font-mono text-sm tracking-wider">
          &lt;/ Mi Trayectoria &gt;
        </p>
        <h2 className="text-2xl md:text-5xl font-bold text-white">Sobre Mí</h2>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
          Conoce al desarrollador, más allá del código
        </p>
      </div>

      {/* Contenedor del timeline con scroll */}
      <div ref={containerRef} className="relative pb-24 px-4">
        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Línea de fondo (gris) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-800 top-0" />

          {/* Línea animada que crece con scroll */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-1 top-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-teal-500"
            style={{ height: lineHeight }}
          />

          {/* Timeline Items */}
          <div className="space-y-32">
            {timelineItems.map((item, index) => {
              const pointProgress = getPointProgress(index);
              const pointScale = useTransform(pointProgress, [0, 1], [0, 1]);
              const pointOpacity = useTransform(pointProgress, [0, 1], [0, 1]);

              return (
                <motion.div
                  key={index}
                  className={`flex gap-8 items-start ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Carta clickeable */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="perspective-1000"
                    >
                      <motion.div
                        className="relative h-64 cursor-pointer"
                        onClick={() => toggleCard(index)}
                        animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Frente de la carta */}
                        <div
                          className="absolute inset-0 backface-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 hover:border-cyan-500 transition-colors"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
                            <span className="text-xl">{item.icon}</span>
                            <div>
                              <p className="text-cyan-500 text-xs md:text-sm font-mono mb-1 p-0">
                                {item.year}
                              </p>
                              <h3 className="text-md md:text-2xl font-bold text-white">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <div className="absolute bottom-4 right-4 text-gray-500 text-sm flex items-center gap-2">
                            <span>Click para ver más</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Reverso de la carta */}
                        <div
                          className="absolute inset-0 backface-hidden rounded-xl border border-cyan-500 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-6"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <div className="h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-3xl">{item.icon}</span>
                              <h4 className="text-xl font-bold text-cyan-400">
                                Detalles
                              </h4>
                            </div>
                            <p className="text-gray-200 leading-relaxed flex-1">
                              {item.detail}
                            </p>
                            <div className="text-gray-400 text-sm flex items-center gap-2 mt-4">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                              <span>Click para volver</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Punto en la línea */}
                  <div className="flex items-center justify-center w-auto pt-24">
                    <motion.div
                      className="w-6 h-6 rounded-full border-4 border-gray-900 bg-cyan-500 shadow-lg shadow-cyan-500/50"
                      style={{
                        scale: pointScale,
                        opacity: pointOpacity,
                      }}
                    />
                  </div>

                  {/* Espacio vacío del otro lado */}
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
