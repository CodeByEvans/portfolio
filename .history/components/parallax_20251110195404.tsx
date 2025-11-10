import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

function Image({ name }: { name: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className="img-container">
      <div ref={sectionRef}>
        <img src={`/${name}.jpg`} alt="A London skyscraper" />
      </div>
      <h2>{`#00${name}`}</h2>
    </section>
  );
}

export const Parallax = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div id="example">
      {["amandoando-logo", "lifeboat-logo", "clover-logo"].map((image) => (
        <Image key={image} name={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
};

export default Parallax;

/* ==============   Styles   ================ */

function StyleSheet() {
  return (
    <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  );
}
