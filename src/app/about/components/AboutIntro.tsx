"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import TextTitleSmall from "@/components/ui/TextTitleSmall";
import TextTitleLarge from "@/components/ui/TextTitleLarge";

const singleLineDesktop = [
  "specializing in dynamic, visually engaging",
  "website with animations interactive user",
  "interfaces. Skilled writing clean, efficient",
  "code to ensure optimal performance and",
  "smooth functionality.",
];

const singleLineTabLarge = [
  "Creative web developer with specializing in",
  "dynamic, visually engaging website with",
  "animations interactive user interfaces. Skilled",
  "writing clean, efficient code to ensure optimal",
  "performance and smooth functionality.",
];

const singleLineTabSmall = [
  "Creative web developer with",
  "specializing in dynamic, visually",
  "engaging website with animations",
  "interactive user interfaces. Skilled",
  "writing clean, efficient code to",
  "ensure optimal performance and",
  "smooth functionality.",
];

const singleLineMobile = [
  "Creative web",
  "developer with",
  "specializing in",
  "dynamic, visually",
  "engaging website",
  "with animations",
  "interactive user",
  "interfaces. I write",
  "clean, efficient code to ensure optimal",
  "performance and",
  "smooth functionality.",
];

export default function AboutIntro() {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full">
      <div className="main-container w-full h-full py-[4rem] lg:py-[8rem] 2xl:py-[12rem] m-auto ">
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
                    <Image
                      src="/profile.webp"
                      width={1678}
                      height={2160}
                      alt="profile-img"
                      priority
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
              <div className="pb-2 lg:pb-4 order-first">
                <div className="relative">
                  <TextTitleSmall text="Frans - Creative Web Developer who loves design" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-[10px] 2xl:ml-[24px]">
              <TextTitleLarge text="Creative web developer with" />
            </div>
          </div>

          {/* Intro Desktop 2xl*/}
          <div className="hidden 2xl:block">
            {singleLineDesktop.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* xl */}
          <div className="hidden xl:block 2xl:hidden">
            {singleLineDesktop.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* lg */}
          <div className="hidden lg:block xl:hidden">
            {singleLineDesktop.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* Tablet large */}
          <div className="flex-col hidden md:flex lg:hidden mt-[3rem]">
            {singleLineTabLarge.map((line, index) => (
              <TextTitleLarge key={index} text={line} />
            ))}
          </div>

          {/* Tablet small */}
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
