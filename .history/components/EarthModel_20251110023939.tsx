import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls, Environment } from "@react-three/drei";

const EarthModel = () => {
  const glb = useLoader(GLTFLoader, "/earth-mobile.glb");
  return <primitive object={glb.scene} scale={0.1} />;
};

export const EarthCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <EarthModel />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default EarthCanvas;
