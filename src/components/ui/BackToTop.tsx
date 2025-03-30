"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LiaArrowUpSolid } from "react-icons/lia";

interface BackToTopProps {
  text: string;
  underline?: boolean;
  className?: string;
  animationDelay?: number;
}

export default function BackToTop({
  text,
  underline = false,
  className,
  animationDelay,
}: BackToTopProps) {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <div
        className="relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={scrollToTop}
      >
        <p
          className={`${className} m-0 tracking-[-0.04em] inline-flex leading-none relative overflow-hidden`}
        >
          <span className="m-0 tracking-[-0.04em] inline-flex leading-none relative overflow-hidden">
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
              className="flex items-center gap-[3px]"
            >
              {text}
              <LiaArrowUpSolid
                strokeWidth={1.6}
                className="w-[1rem] h-[1rem] 2xl:w-[1.2rem] 2xl:h-[1.2rem]"
              />
            </motion.span>
          </span>
        </p>

        {/* Underline animation */}
        {underline && (
          <motion.div>
            <div className="relative w-full h-[1px] overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              ></motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
