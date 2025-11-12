import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

interface Item {
  emoji: string;
  name: string;
}

interface ParallaxProps {
  children: Item;
  baseVelocity: number;
}

const ParallaxItems = ({ children, baseVelocity }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
};

export const Stack = () => {
  return (
    <section>
      <div className="text-center py-20 ">
        <p className="text-cyan-500 font-mono text-sm tracking-wider mb-2">
          &lt;/ Mi Trayectoria &gt;
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Stack
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Te presento mi stack tecnologico
        </p>
      </div>
    </section>
  );
};

export default Stack;
