"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import Button from "@/components/ui/Button";

const paragraphOneLg = [
  "development by embracing modern frameworks, and creating scalable solutions for the ever-evolving digital landscape.",
];

const paragraphOneMd = [
  "by embracing modern frameworks, and creating scalable solutions for the ever-evolving digital landscape.",
];

const paragraphOneSm = [
  "development by embracing modern frameworks, and creating scalable solutions for the ever-evolving digital landscape.",
];

const paragraphOneMobile = [
  "in development by embracing modern frameworks, and creating scalable solutions for the ever-evolving digital landscape.",
];


export default function AboutMission() {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div className="relative h-full w-full py-[3rem] sm:py-[8rem] 2xl:py-[17rem] overflow-hidden">
      <div className="flex flex-col lg:flex-row pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] justify-between w-full gap-[3rem] lg:gap-[1.5rem] main-container">
        <div className="h-full w-full flex flex-col gap-[1rem]">
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
              className="w-full h-full sm:w-[16rem] sm:h-[22rem] md:w-[19rem] md:h-[25rem] lg:w-[16rem] lg:h-[21rem] xl:w-[18.2rem] xl:h-[23rem] 2xl:w-[28rem] 2xl:h-[34rem]"
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
        </div>

        <div className="flex w-full h-full order-first lg:order-last">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
              {/* Desktop 2xl*/}
              <div className="flex-col hidden 2xl:flex">
                <div className="flex lg:gap-4 2xl:gap-9 items-center">
                  <TextSlideUp
                    text="(Vision)"
                    animate={revealsText}
                    className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextSlideUp
                      text="Leading the way in"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                    />
                  </div>
                </div>
                <TextSlideUp
                  text="development by embracing"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
                <TextSlideUp
                  text="modern frameworks, optimizing"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
                <TextSlideUp
                  text="performance, and creating"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
                <TextSlideUp
                  text="scalable solutions for the"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
                <TextSlideUp
                  text="ever-evolving digital landscape."
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>

              {/* lg-xl */}
              <div className="flex-col hidden lg:flex 2xl:hidden">
                <div className="flex lg:gap-4 2xl:gap-9 items-center">
                  <TextSlideUp
                    text="(Vision)"
                    animate={revealsText}
                    className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextSlideUp
                      text="Leading the way in"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                    />
                  </div>
                </div>
                {paragraphOneLg.map((line, index) => (
                  <TextSlideUp
                    key={index}
                    text={line}
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                  />
                ))}
              </div>

              {/* Md */}
              <div className="flex-col hidden md:flex lg:hidden">
                <div className="flex gap-4 items-center">
                  <TextSlideUp
                    text="(Vision)"
                    animate={revealsText}
                    className="font-medium mr-[4px] lg:mr-[6px] tracking-[-0.04em] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextSlideUp
                      text="Leading the way in development"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                    />
                  </div>
                </div>
                {paragraphOneMd.map((line, index) => (
                  <TextSlideUp
                    key={index}
                    text={line}
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                  />
                ))}
              </div>

              {/* Sm */}
              <div className="flex-col hidden sm:flex md:hidden">
                <div className="flex gap-4 items-center">
                  <TextSlideUp
                    text="(Vision)"
                    animate={revealsText}
                    className="font-medium mr-[4px] lg:mr-[6px] tracking-[-0.04em] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextSlideUp
                      text="Leading the way in"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                    />
                  </div>
                </div>
                {paragraphOneSm.map((line, index) => (
                  <TextSlideUp
                    key={index}
                    text={line}
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                  />
                ))}
              </div>

              {/* Mobile */}
              <div className="flex flex-col sm:hidden">
                <div className="flex gap-4 items-center">
                  <TextSlideUp
                    text="(Vision)"
                    animate={revealsText}
                    className="font-medium mr-[4px] lg:mr-[6px] tracking-[-0.04em] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                  <div className="">
                    <TextSlideUp
                      text="Leading the way"
                      animate={revealsText}
                      className="font-medium mr-[8px] xl:mr-[14px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                    />
                  </div>
                </div>
                {paragraphOneMobile.map((line, index) => (
                  <TextSlideUp
                    key={index}
                    text={line}
                    animate={revealsText}
                    className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
                <div className="flex">
                  <Button
                    href="/contact"
                    slideUp={revealsText}
                    text="Let's work together"
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
