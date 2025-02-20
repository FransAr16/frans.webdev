"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { revealsText } from "@/data/animation";
import TextSlideUp from "../ui/TextSlideUp";
import Button from "../ui/Button";

const paragraphOneTablet = [
  "developer specializing in frontend, passionate about crafting visually",
  "stunning and functional.",
];
const paragraphTwoTablet = [
  "Combining innovation with a ",
  "love of detail to create beautiful",
  "and functional design.",
];

const paragraphOneMobile = [
  "web developer specializing in frontend, passionate about crafting visually stunning and functional.",
];

const paragraphTwoMobile = [
  "Combining innovation with a love of detail to create beautiful and functional design.",
];

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full py-[3rem] sm:py-[8rem] 2xl:py-[17rem] overflow-hidden">
      <div className="flex flex-col lg:flex-row pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] justify-between w-full gap-[8rem] lg:gap-[1.5rem] main-container">
        <div className="h-full w-full lg:w-[71%] flex flex-col gap-[1rem]">
          <div ref={ref}>
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
              className="w-full h-full sm:w-[14rem] sm:h-[15rem] md:w-[16rem] md:h-[19rem] lg:w-[11rem] lg:h-[14rem] xl:w-[13rem] xl:h-[16rem] 2xl:w-[18rem] 2xl:h-[22rem]"
            >
              <motion.div
                initial={{ scale: 1.5 }}
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

          <div className="w-full sm:w-[15rem] md:w-[16rem] lg:w-[11rem] xl:w-[13rem] 2xl:w-[18rem] order-first lg:order-last">
            <TextSlideUp
              text="Frans - Web Developer @2024"
              animate={revealsText}
              className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] leading-[120%] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>

        <div className="flex w-full h-full order-first lg:order-last">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
              {/* Desktop */}
              <div className="flex-col hidden lg:flex">
                <div className="flex lg:gap-4 2xl:gap-9 items-center">
                  <TextSlideUp
                    text="(About Me)"
                    animate={revealsText}
                    className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextSlideUp
                      text="I'm a creative web developer"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                    />
                  </div>
                </div>
                <TextSlideUp
                  text="specializing in frontend, passionate"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                />
                <TextSlideUp
                  text="about crafting visually stunning"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                />
                <TextSlideUp
                  text="and functional."
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                />
              </div>

              {/* Tablet */}
              <div className="flex-col hidden sm:flex lg:hidden">
                <div className="flex gap-4 items-center">
                  <TextSlideUp
                    text="(About Me)"
                    animate={revealsText}
                    className="font-medium mr-[4px] lg:mr-[6px] tracking-[-0.04em] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextSlideUp
                      text="I'm a creative web"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                    />
                  </div>
                </div>
                {paragraphOneTablet.map((line, index) => (
                  <TextSlideUp
                    key={index}
                    text={line}
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                  />
                ))}
              </div>

              {/* Mobile */}
              <div className="flex flex-col sm:hidden">
                <div className="flex gap-4 items-center">
                  <TextSlideUp
                    text="(About Me)"
                    animate={revealsText}
                    className="font-medium mr-[4px] lg:mr-[6px] tracking-[-0.04em] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="">
                    <TextSlideUp
                      text="I'm a creative"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[14px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                    />
                  </div>
                </div>
                {paragraphOneMobile.map((line, index) => (
                  <TextSlideUp
                    key={index}
                    text={line}
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
                {/* Desktop */}
                <div className="hidden lg:block">
                  <TextSlideUp
                    text="Combining innovation with a"
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                  />
                  <TextSlideUp
                    text="love of detail to create beautiful"
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                  />
                  <TextSlideUp
                    text="and functional design."
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                  />
                </div>
                {/* Tablet */}
                <div className="hidden sm:block lg:hidden">
                  {paragraphTwoTablet.map((line, index) => (
                    <TextSlideUp
                      key={index}
                      text={line}
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                    />
                  ))}
                </div>
                {/* Mobile */}
                <div className="sm:hidden">
                  {paragraphTwoMobile.map((line, index) => (
                    <TextSlideUp
                      key={index}
                      text={line}
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                    />
                  ))}
                </div>

                <div className="flex">
                  <Button
                    href="/about"
                    slideUp={revealsText}
                    text="Learn more about me"
                    className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
