"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  badge: string;
  gradient: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Aventuras",
    description:
      "Explora paisajes impresionantes y vive experiencias únicas en la naturaleza",
    icon: "🏔️",
    badge: "Popular",
    gradient: "from-purple-600 via-blue-600 to-purple-800",
  },
  {
    id: 2,
    title: "Océanos",
    description:
      "Sumérgete en las profundidades azules y descubre la vida marina",
    icon: "🌊",
    badge: "Trending",
    gradient: "from-pink-500 via-red-500 to-pink-600",
  },
  {
    id: 3,
    title: "Bosques",
    description: "Conecta con la naturaleza en bosques mágicos llenos de vida",
    icon: "🌲",
    badge: "Nuevo",
    gradient: "from-cyan-400 via-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Desiertos",
    description: "Experimenta la inmensidad y belleza de los paisajes áridos",
    icon: "🏜️",
    badge: "Destacado",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Ciudades",
    description: "Vive la energía de las metrópolis más vibrantes del mundo",
    icon: "🌃",
    badge: "Premium",
    gradient: "from-pink-400 via-rose-400 to-yellow-400",
  },
  {
    id: 6,
    title: "Espacio",
    description: "Mira más allá de nuestro mundo y explora el cosmos infinito",
    icon: "⭐",
    badge: "Exclusivo",
    gradient: "from-cyan-500 via-blue-600 to-indigo-900",
  },
];

export default function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const totalItems = cards.length;

    let position = diff;
    if (diff > totalItems / 2) position = diff - totalItems;
    if (diff < -totalItems / 2) position = diff + totalItems;

    const isActive = position === 0;
    const absPos = Math.abs(position);

    return { position, isActive, absPos };
  };

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4"
        >
          Experiencias Increíbles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          Descubre un mundo de posibilidades
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative h-[500px] flex items-center justify-center"
        style={{ perspective: "2000px" }}
      >
        <AnimatePresence initial={false}>
          {cards.map((card, index) => {
            const { position, isActive, absPos } = getCardPosition(index);

            if (absPos > 2) return null;

            return (
              <motion.div
                key={card.id}
                className="absolute w-80 h-96 cursor-pointer"
                initial={false}
                animate={{
                  x: position * 320,
                  z: isActive ? 0 : -300 - absPos * 100,
                  rotateY: position * -25,
                  scale: isActive ? 1 : 0.7 - absPos * 0.1,
                  opacity: absPos > 2 ? 0 : 1,
                  zIndex: 10 - absPos,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onClick={() => setActiveIndex(index)}
              >
                <motion.div
                  className={`relative w-full h-full bg-gradient-to-br ${card.gradient} rounded-2xl overflow-hidden shadow-2xl border border-white/10`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/30">
                    {card.badge}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                    <motion.div
                      className="text-7xl mb-4 drop-shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.icon}
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">
                      {card.title}
                    </h3>

                    <p className="text-sm leading-relaxed opacity-90 drop-shadow-md">
                      {card.description}
                    </p>
                  </div>

                  {/* Hover glass effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-12">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-4 rounded-full shadow-lg border border-border transition-colors"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-4 rounded-full shadow-lg border border-border transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
