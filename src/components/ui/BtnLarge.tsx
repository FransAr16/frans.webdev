"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

interface ButtonProps {
  href: string;
  text: string;
  underline?: string;
  className?: string;
  animationDelay?: number;
}

export default function BtnLarge({
  href,
  text,
  underline,
  className,
  animationDelay = 0.2,
}: ButtonProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(Ref);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const delayUnderline = 0.8;

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <>
      <div ref={Ref} className="relative flex">
        <Link href={href}>
          <div className="relative overflow-hidden">
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`${className} m-0 tracking-[-0.04em] inline-flex leading-none relative font-medium text-[9.5vw] sm:text-[6vw] md:text-[5.2vw] lg:text-[3.3vw] 2xl:text-[3.2vw] 3xl:text-[3vw] overflow-hidden`}
            >
              <motion.span
                initial={{ y: "0%" }}
                animate={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: animationDelay,
                }}
                className=""
              >
                {text}
              </motion.span>
            </p>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: hasAnimated ? "100%" : "0%" }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: delayUnderline,
              }}
            >
              <div
                className={`${underline} relative w-full overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 h-full w-full flex bg-transparent transition-all duration-800 ease-in-out ${
                    isHovered ? "translate-x-[200%]" : "translate-x-0"
                  }`}
                >
                  <div className="right-0 absolute w-full h-full bg-foreground"></div>
                  <div className="right-[100%] absolute w-full h-full bg-background"></div>
                  <div className="right-[200%] absolute w-full h-full bg-foreground"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </Link>
      </div>
    </>
  );
}
