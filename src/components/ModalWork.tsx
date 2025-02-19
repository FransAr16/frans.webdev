"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { latestWork } from "@/data/work";
import { CldImage } from "next-cloudinary";

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

interface ModalWorkProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: {
    id: number;
    showcase: string;
    bgColor: string;
    category: string;
  }[];
}

export default function ModalWork({ modal }: ModalWorkProps) {
  const { active, index } = modal;
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
        className="fixed h-[350px] w-[400px] 2xl:h-[460px] 2xl:w-[480px] flex items-center justify-center overflow-hidden pointer-events-none z-10"
      >
        {/* modal slider */}
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute custom-transition"
        >
          {latestWork
            .filter((project) => project.id >= 0 && project.id <= 4)
            .reverse()
            .map((project, index) => {
              const { images, bgColor } = project;
              return (
                <div
                  key={`modal_${index}`}
                  style={{ backgroundColor: bgColor }}
                  className="relative h-full flex items-center justify-center px-[2rem]"
                >
                    <CldImage
                      src={`${images}`}
                      width={1920}
                      height={1080}
                      className="w-full object-cover"
                      alt="image-work"
                      crop={{
                        type: "auto",
                        source: true,
                      }}
                    />
                </div>
              );
            })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="fixed w-[100px] h-[100px] bg-primary pointer-events-none rounded-full flex items-center justify-center z-[11]"
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="fixed w-[100px] h-[100px] pointer-events-none rounded-full flex items-center justify-center xl:text-[1.2rem] text-background z-[12]"
      >
        View
      </motion.div>
    </>
  );
}
