"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { revealsText } from "@/data/animation";

interface ReusableTextProps {
  text: string;
  textCostum?: React.ReactNode;
  className?: string;
}

export default function TextTitleMedium({
  text,
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
      <p className="m-0 leading-none flex flex-wrap">
        {text.split(" ").map((word, index) => (
          <span
            key={index}
            className={`${className} relative overflow-hidden inline-flex font-medium text-[9.5vw] sm:text-[6vw] md:text-[5.2vw] lg:text-[3.3vw] 2xl:text-[3.2vw] 3xl:text-[3vw] mr-[8px] xl:mr-[11px] 2xl:mr-[15px] tracking-[-0.04em] leading-[105%]`}
          >
            <motion.span
              variants={revealsText}
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
