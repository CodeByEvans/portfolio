"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import Cube from "./Cube";

export function Scene() {
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(({ camera, clock }) => {
    const scroll = scrollRef.current;
    const yAngle = scroll * Math.PI * 2;
    const distance = 10 - scroll * 7;
    const xAngle = clock.getElapsedTime() * 0.0005;

    camera.position.setFromSphericalCoords(distance, yAngle, xAngle);
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  return <Cube />;
}
