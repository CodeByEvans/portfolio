import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTime, useTransform } from "motion/react";
import { useLayoutEffect } from "react";
import Cube from "./Cube";

export const Scene = () => {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  return (
    <>
      <Cube />
    </>
  );
};
