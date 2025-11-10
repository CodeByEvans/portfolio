import { useFrame } from "@react-three/fiber";

const Cube = () => {
  return (
    <mesh rotation-x={-Math.PI / 2}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="#ff0000" />
    </mesh>
  );
};

export default Cube;
