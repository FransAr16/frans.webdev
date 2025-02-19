"use client";

import React from "react";
import { motion } from "motion/react";
import { LiaArrowDownSolid } from "react-icons/lia";

export default function ArrowDown() {
  const animationDelay = 0.2;
  return (
    <div className="overflow-hidden">
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
        <LiaArrowDownSolid
          strokeWidth={1.8}
          className="w-[1.2rem] h-[1.2rem] 2xl:w-[1.3rem] 2xl:h-[1.3rem]"
        />
      </motion.span>
    </div>
  );
}
