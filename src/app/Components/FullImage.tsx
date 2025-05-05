"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

function FullImage() {
  const xxx = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: xxx,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );
  return (
    <div ref={xxx} className="h-screen mb-10">
      <motion.div
        transition={{ duration: 0.5 }}
        style={{ scale, x: xTransform }}
        className="
          relative h-full w-full shadow-lg overflow-hidden rounded-2xl
          transition duration-100 ease-in-out border hover:border-sky-300 border-sky-500
        "
      >
        <Image
          src="/assets/moon10.jpg"
          alt="moon"
          fill
          priority
          sizes="50vw"
          className="object-cover p-3 rounded-2xl"
        />
      </motion.div>
    </div>
  );
}

export default FullImage;
