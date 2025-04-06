"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { revealsText } from "@/data/animation";

interface WorkCategoryBtnProps {
  text: string | React.ReactNode;
  underline?: string;
  className?: string;
  animationDelay?: number;
  isDisabled?: boolean;
  isActive?: boolean;
}

export default function WorkCategoryBtn({
  text,
  underline,
  className,
  isDisabled,
  isActive = false,
}: WorkCategoryBtnProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(Ref);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={Ref} className="relative cursor-pointer">
      <div className="relative overflow-hidden">
        <p
          onMouseEnter={() => !isDisabled && setIsHovered(true)}
          onMouseLeave={() => !isDisabled && setIsHovered(false)}
          className={`${className} m-0 inline-flex tracking-[-0.04em] leading-none font-semibold text-[4.8vw] sm:text-[2.8vw] md:text-[2.3vw] lg:text-[1.35vw] 2xl:text-[1.2vw] overflow-hidden`}
        >
          <motion.span
            variants={revealsText}
            initial="initial"
            animate={hasAnimated ? "open" : "closed"}
            className=""
          >
            {text}
          </motion.span>
        </p>

        {/* Underline animation */}
        <motion.div
          variants={revealsText}
          initial="closed"
          animate={hasAnimated ? "open" : "closed"}
          className="pt-[2px]"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width:
                (isHovered && !isDisabled) || isActive
                  ? "100%"
                  : "0%",
            }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div
              className={`${underline} relative w-full h-[1px] overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-foreground"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
