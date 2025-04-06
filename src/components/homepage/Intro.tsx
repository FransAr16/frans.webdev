"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import TextTitleSmall from "../ui/TextTitleSmall";
import TextTitleLarge from "../ui/TextTitleLarge";

const singleLineDesktop = [
  "audacious creativity and unwavering",
  "dedication. I build digital solutions that",
  "go beyond the ordinary, embarking on",
  "a journey of innovation to craft every",
  "project into a masterpiece.",
];

const singleLineTabLarge = [
  "Challenging the status quo with",
  "audacious creativity and unwavering",
  "dedication. I build digital solutions that",
  "go beyond the ordinary, embarking on",
  "a journey of innovation to craft every",
  "project into a masterpiece.",
];

const singleLineTabSmall = [
  "Challenging the status quo with",
  "audacious creativity and unwavering",
  "dedication. I build digital solutions",
  "that go beyond the ordinary,",
  "embarking on a journey of innovation",
  "to craft every project into a",
  "masterpiece.",
];

const singleLineMobile = [
  "Challenging the",
  "status quo with",
  "audacious",
  "creativity and",
  "unwavering",
  "dedication. I build",
  "digital solutions",
  "that go beyond",
  "the ordinary,",
  "embarking on a",
  "journey of",
  "innovation to craft",
  "every project into",
  "a masterpiece.",
];

export default function Intro() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full">
      <div className="main-container w-full h-full py-[6.5rem] lg:py-[10rem] 2xl:py-[12rem] m-auto ">
        <div className="w-full flex flex-col relative leading-none">
          {/* Intro */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-2">
            <div className="flex flex-col w-[44vw] sm:w-[12rem] md:w-[14rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[18rem]">
              <div ref={ref} className="">
                <motion.div
                  initial={{
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  }}
                  animate={{
                    clipPath: isInViewImg
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  }}
                  exit={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="w-full h-[56vw] sm:h-[15rem] md:h-[17rem] lg:h-[13rem] xl:h-[15rem] 2xl:h-[22rem] bg-foreground"
                >
                  <motion.div
                    initial={{ scale: 1.6 }}
                    animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/typing.webm" type="video/webm" />
                    </video>
                  </motion.div>
                </motion.div>
              </div>
              <div className="pb-2 lg:pb-4 order-first">
                <div className="relative">
                  <TextTitleSmall text="(Creative Process)" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-[10px] 2xl:ml-[24px]">
              <TextTitleLarge text="Challenging the status quo with" />
            </div>
          </div>

          {/* Intro Desktop */}
          <div className="hidden lg:block">
            {singleLineDesktop.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* Tablet Large */}
          <div className="flex-col hidden md:flex lg:hidden mt-[3rem]">
            {singleLineTabLarge.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* Tablet Small */}
          <div className="flex-col hidden sm:flex md:hidden mt-[3rem]">
            {singleLineTabSmall.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col sm:hidden mt-[3rem]">
            {singleLineMobile.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
