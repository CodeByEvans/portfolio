import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef } from "react";

interface Item {
  emoji: string;
  name: string;
}

interface ParallaxProps {
  children: string;
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

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
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

      <div>
        <ParallaxItems baseVelocity={-2}>👨‍💻</ParallaxItems>
        <ParallaxItems baseVelocity={2}>🌐</ParallaxItems>
      </div>
    </section>
  );
};

export default Stack;
