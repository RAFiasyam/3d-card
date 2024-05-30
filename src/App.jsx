import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

export default function App() {
  return (
    <div className="grid w-full h-[100vh] place-content-center bg-gradient-to-br from-blue-500 to-yellow-500 px-4 py-12 text-white text-slate-900">
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="relative flex overflow-x-hidden ">
          <div class="py-12 animate-marquee whitespace-nowrap">
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
          </div>
          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
            <span class="text-4xl mx-4 font-running">HALLO:D</span>
          </div>
        </div>
      </div>
      <Tiltcard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Tiltcard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="reltive h-96 w-72 rounded-xl bg-gradient-to-br from-blue-300 to-yellow-300"
    >
      <img
        src="https://i.pinimg.com/originals/e3/da/93/e3da939bd48f9abb31fea4557fa9a5f1.gif"
        className="inset-4 grid place-content-center rounded-xl"
        style={{
          transform: "translateZ(75px)",
        }}
      />
      <div
        src="https://i.pinimg.com/originals/e3/da/93/e3da939bd48f9abb31fea4557fa9a5f1.gif"
        className="inset-4 grid place-content-center rounded-xl text-center"
        style={{
          transform: "translateZ(75px)",
        }}>
        <h1 className="font-running text-4xl">Rafi Asyam</h1>
      </div>
    </motion.div>
  )

}