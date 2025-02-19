"use client";

import React from "react";
import { motion } from "motion/react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function ChevronDown() {
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
          <MdKeyboardArrowDown
            className="w-[1.5rem] h-[1.5rem] 2xl:w-[1.6rem] 2xl:h-[1.6rem]"
          />
        </motion.span>
      </div>
    );
  }