"use client";

import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

export function Three({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    // Esto asegura que el canvas se monte correctamente
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    >
      <Canvas
        eventSource={ref.current}
        className="pointer-events-auto"
        gl={{ antialias: false }}
      >
        {children}
        <Preload all />
      </Canvas>
    </div>
  );
}
