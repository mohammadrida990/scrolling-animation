"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction: number;
};
const ScrollHorizontel = ({ children, direction }: Props) => {
  const xxx = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: xxx,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0, direction]
  );
  const smoothTransform = useSpring(xTransform, {
    stiffness: 10,
    damping: 10,
  });

  return (
    <div ref={xxx} className="w-screen h-screen">
      <motion.div
        className="
          cards  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-self-center md:place-self-start 
          items-center justify-center gap-4 shadow-lg rounded-lg relative duration-100 transition-all
        "
        transition={{ duration: 0.5 }}
        style={{ translateX: smoothTransform }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollHorizontel;
