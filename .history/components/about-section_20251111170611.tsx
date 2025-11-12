"use client";
import { motion } from "motion/react";

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen ">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "25%" }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute bg-blue-500 h-1/3 w-1 left-1/2 transform -translate-x-1/2"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "50%" }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute bg-blue-500 h-1/3 w-1 left-1/2 transform -translate-x-1/2"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "75%" }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute bg-blue-500 h-1/3 w-1 left-1/2 transform -translate-x-1/2"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute bg-blue-500 h-1/3 w-1 left-1/2 transform -translate-x-1/2"
      />
    </section>
  );
};

export default AboutSection;
