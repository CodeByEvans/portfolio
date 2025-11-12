"use client";
import { motion } from "motion/react";

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bg-blue-500 h-full w-1 left-1/2 transform -translate-x-1/2"
      />
    </section>
  );
};

export default AboutSection;
