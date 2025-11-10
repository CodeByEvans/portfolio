// components/layout/canvas.tsx
"use client";

import { Canvas } from "@react-three/fiber";

export default function Scene({ children }: { children: React.ReactNode }) {
  return <Canvas>{children}</Canvas>;
}
