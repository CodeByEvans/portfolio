import { motion } from "motion/react";

export function TypeWriterTitle() {
  const text = [
    { content: "> Hola, soy", className: "" },
    { content: "CodeByEvans", className: "text-primary" },
    { content: "Desarrollador Full-Stack", className: "" },
  ];

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
      {text.map((part, i) => (
        <motion.span
          key={i}
          className={`${part.className} block`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {part.content.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -5 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", damping: 15, stiffness: 120 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
      <div className="flex flex-raw">
        <span className="ml-2 animate-pulse text-primary h-full">|</span>
        <p className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
          Especializado en crear aplicaciones web modernas y escalables con
          React, TypeScript y Next.js. Transformo ideas en productos digitales
          de alto rendimiento.
        </p>
      </div>
    </h1>
  );
}
