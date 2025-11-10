"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "../3D/Scene";

export function SceneWrapper() {
  return (
    <Canvas gl={{ antialias: false }}>
      <Scene />
    </Canvas>
  );
}
