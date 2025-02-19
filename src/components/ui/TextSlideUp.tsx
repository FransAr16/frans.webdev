"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "motion/react";

interface ReusableTextProps {
  text: string;
  animate: Variants;
  textCostum?: React.ReactNode;
  className?: string;
}

export default function TextSlideUp({
  text,
  animate,
  textCostum,
  className,
}: ReusableTextProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(Ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={Ref} className="relative">
      <p className="m-0 leading-none">
            {text.split(" ").map((word, index) => (
              <span
                key={index}
                className={`${className} relative overflow-hidden inline-flex tracking-[-0.04em] leading-[105%]`}
              >
                <motion.span
                  variants={animate}
                  custom={index}
                  initial="initial"
                  animate={hasAnimated ? "open" : "closed"}
                >
                  {word === " " ? "\u00A0" : word}
                  {textCostum === " " ? "\u00A0" : textCostum}
                </motion.span>
              </span>
            ))}
          </p>
    </div>
  );
}
