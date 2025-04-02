"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 h-[400vh] ${className || ""}`}>
      <div className="sticky top-0 flex h-auto 3xl:w-[85%] bg-transparent 3xl:pt-[10vw]">
        <p
          ref={targetRef}
          className="flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[5rem]"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

export function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1.0]);
  return (
    <span className="relative pb-[1rem] tracking-tight">
      <span className="absolute opacity-0">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-cream mr-[0.6rem] lg:mr-[1rem] opacity-100"
      >
        {children}
      </motion.span>
    </span>
  );
}
