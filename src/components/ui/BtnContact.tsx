"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";

interface ButtonProps {
  href: string;
  text: string;
  underline?: string;
  className?: string;
  animationDelay?: number;
}

export default function BtnContact({
  href,
  text,
  underline,
  className,
  animationDelay = 2.8,
}: ButtonProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(Ref);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const ContactSlideUp: Variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        delay: animationDelay,
      },
    },
  };

  return (
    <div ref={Ref} className="relative flex">
      <Link href={href}>
        <div className="relative overflow-hidden">
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${className} m-0 tracking-[-0.04em] inline-flex leading-none relative overflow-hidden`}
          >
            <motion.span
              variants={ContactSlideUp}
              initial="initial"
              animate="animate"
            >
              {text}
            </motion.span>
          </p>
          <motion.div
            variants={ContactSlideUp}
            initial="initial"
            animate="animate"
          >
            <div className={`${underline} relative w-full h-[1px] overflow-hidden`}>
              <div
                className={`absolute top-0 right-0 h-full w-full flex bg-transparent transition-all duration-800 ease-in-out ${
                  isHovered ? "translate-x-[200%]" : "translate-x-0"
                }`}
              >
                <div className="right-0 absolute w-full h-full bg-background"></div>
                <div className="right-[100%] absolute w-full h-full bg-foreground"></div>
                <div className="right-[200%] absolute w-full h-full bg-background"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}
