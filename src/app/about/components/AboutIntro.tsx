"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import Image from "next/image";

const singleLineTab = [
  "Creative web developer with a strong",
  "focus on front-end development,",
  "specializing in animations, user",
  "interfaces, and interactive experiences. I excel at creating visually engaging and dynamic web applications.",
];

const singleLineMobile = [
  "Creative web",
  "developer with",
  "a strong focus on",
  "front-end",
  "development,",
  "specializing in",
  "animations, user",
  "interfaces, and",
  "interactive experiences.",
  "I excel at creating",
  "visually engaging",
  "and dynamic web",
  "applications.",
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
                      src="/profile.png"
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
                  <TextSlideUp
                    text="Frans - Creative Web Developer and Frontend Enthusiast"
                    animate={revealsText}
                    className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-[10px] 2xl:ml-[24px]">
              <TextSlideUp
                text="Creative web developer with"
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] tracking-[-0.04em] text-[5.2vw] leading-[106%]"
              />
            </div>
          </div>

          {/* Intro Desktop 2xl*/}
          <div className="hidden 2xl:block">
            <TextSlideUp
              text="a strong focus on front-end development,"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="specializing in animations, user interfaces,"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="and interactive experiences. I excel at"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="creating visually engaging and dynamic"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="web applications."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
          </div>
          
          {/* lg to xl */}
          <div className="hidden lg:block 2xl:hidden">
            <TextSlideUp
              text="a strong focus on front-end development,"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="specializing in animations, user,"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="interfaces and interactive experiences."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="I excel at creating visually engaging and"
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
            <TextSlideUp
              text="dynamic web applications."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.2vw] leading-[106%]"
            />
          </div>

          {/* Tablet */}
          <div className="flex-col hidden sm:flex lg:hidden mt-[3rem]">
            {singleLineTab.map((line, index) => (
              <TextSlideUp
                key={index}
                text={line}
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[5.5vw] leading-[110%]"
              ></TextSlideUp>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col sm:hidden mt-[3rem]">
            {singleLineMobile.map((line, index) => (
              <TextSlideUp
                key={index}
                text={line}
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[clamp(2.3rem,10vw,10rem)] leading-[110%]"
              ></TextSlideUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
