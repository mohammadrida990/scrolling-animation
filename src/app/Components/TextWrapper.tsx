"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";

const TextWrapper = ({ children }: PropsWithChildren) => {
  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const xTransform = useTransform(scrollYProgress, [1, 0.4, 0], [1, 1, -1000]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "oklch(68.5% 0.169 70.323)",
      "oklch(68.5% 0.169 120.323)",
      "oklch(68.5% 0.169 170.323)",
      "oklch(68.5% 0.169 210.323)",
      "oklch(68.5% 0.169 237.323)",
      "oklch(68.5% 0.169 237.323)",
    ]
  );
  return (
    <div ref={text}>
      <motion.p style={{ opacity, x: xTransform, color }}>{children}</motion.p>
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="text-sky-500 text-2xl font-bold h-full flex flex-col gap-5 text-center md:text-left">
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
        consequat laoreet. Sed volutpat mauris dapibus, efficitur tortor in,
        iaculis leo. Nullam tortor tortor, condimentum in egestas id, vulputate
        ac lectus. Pellentesque molestie eu diam sed consequat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed ac massa ut lorem facilisis vulputate.
      </TextWrapper>
    </div>
  );
};

export default TextSection;
