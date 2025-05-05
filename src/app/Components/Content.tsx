"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ContentPage = () => {
  const outerControls = useAnimation();
  const innerControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // now animate the characters in a staggered fashion

  useEffect(() => {
    const splitTitle = SplitText.create(".title", { type: "words, chars" });
    const splitContent = SplitText.create(".content", {
      type: "chars, words, lines",
    });
    gsap
      .timeline()
      .from(splitTitle.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      })
      .from(splitContent.chars, {
        duration: 1,
        rotation: "random(-360, 360)",
        yPercent: "random([-100,100])",
        y: 100,
        autoAlpha: 0,
        mask: "char",
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateY = (deltaX / centerX) * 30;
    const rotateX = -(deltaY / centerY) * 30;

    outerControls.start({
      rotateY,
      rotateX,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    });

    innerControls.start({
      rotateY: -rotateY,
      rotateX: -rotateX,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    });
  };

  const handleMouseLeave = () => {
    outerControls.start({ rotateX: 0, rotateY: 0 });
    innerControls.start({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      className="flex flex-col md:flex-row md:justify-between items-center gap-4 min-h-screen"
    >
      <div className="order-1 md:order-0 mt-[150px] md:mt-0 text-center md:text-start w-[350px] md:w-[50%]">
        <h1 className="title text-sky-500 text-6xl">
          The Mysteries of the Moon
        </h1>

        <p className="mt-5 content">
          The Moon, Earths only natural satellite, has fascinated humanity for
          centuries. Its luminous glow has inspired countless myths, stories,
          and scientific inquiries. Located about 384,400 kilometers from Earth,
          the Moons surface is marked by craters, mountains, and vast plains of
          dust known as maria. It plays a vital role in regulating Earths tides,
          and its gravitational pull stabilizes our planets axial tilt,
          contributing to a stable climate.
        </p>
      </div>

      <motion.div
        className="relative mt-5 md:mt-0 h-80 w-80 md:h-96 md:w-96 border-sky-700 border rounded-2xl perspective-distant bg-background order-0 md:order-1"
        animate={outerControls}
      >
        <motion.div
          animate={innerControls}
          className="w-full h-full perspective-distant"
        >
          <Image
            src="/assets/moon.jpg"
            alt="Moon"
            fill
            priority
            sizes="50vw"
            className="p-2 rounded-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContentPage;
