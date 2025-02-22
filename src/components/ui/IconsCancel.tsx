"use client";

import React from "react";
import { motion } from "motion/react";

export default function IconsCancel() {
  const animationDelay = 0.2;
  return (
    <div className="overflow-hidden cursor-pointer">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        exit={{ y: "100%" }}
        viewport={{ once: true, amount: 0 }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: animationDelay,
        }}
        className="flex items-center"
      >
        <p className="relative w-[40px] h-[40px] flex items-center justify-center">
          <span className="absolute bottom-1/2 rotate-45 h-[2px] w-[18px] bg-foreground"></span>
          <span className="absolute bottom-1/2 -rotate-45 h-[2px] w-[18px] bg-foreground"></span>
        </p>
      </motion.span>
    </div>
  );
}
