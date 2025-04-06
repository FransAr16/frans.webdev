"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { revealsText } from "@/data/animation";

interface ReusableTextProps {
  text: string;
  textCostum?: React.ReactNode;
  className?: string;
}

export default function TextTitleLarge({
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
            className={`${className} relative overflow-hidden inline-flex font-medium text-[11vw] sm:text-[5.5vw] md:text-[4.7vw] lg:text-[5.2vw] 2xl:text-[5.2vw] mr-[8px] xl:mr-[18px] 2xl:mr-[20px] tracking-[-0.04em] leading-[105%]`}
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
