"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface LabelModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: {
    images: string;
    bgColor: string;
  }[];
}

export default function WorkLabelModal({ modal }: LabelModalProps) {
  const { active } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="fixed h-[350px] w-[400px] flex items-center justify-center overflow-hidden pointer-events-none"
      >
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="fixed lg:h-[6.5rem] lg:w-[6.5rem] xl:h-[7.5rem] xl:w-[7.5rem] 2xl:h-[10rem] 2xl:w-[10rem] bg-primary pointer-events-none rounded-full flex items-center justify-center"
      ></motion.div>
        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial={"initial"}
          animate={active ? "open" : "closed"}
          className="fixed lg:h-[6.5rem] lg:w-[6.5rem] xl:h-[7.5rem] xl:w-[7.5rem] 2xl:h-[10rem] 2xl:w-[10rem] pointer-events-none rounded-full flex items-center justify-center xl:text-[1.2rem] 2xl:text-[1.4rem] text-background"
        >
          View
        </motion.div>
    </>
  );
}
