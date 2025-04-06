"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import BtnSmall from "@/components/ui/BtnSmall";
import TextTitleSmall from "@/components/ui/TextTitleSmall";
import TextTitleMedium from "@/components/ui/TextTitleMedium";

const textDesktopLarge = [
  "development by embracing modern frameworks, and creating scalable solutions for the ever-evolving digital landscape.",
];

const textDesktopSmall = [
  "development by embracing",
  "modern frameworks, and",
  "creating scalable solutions for",
  "the ever-evolving digital landscape.",
];

const textTabLarge = [
  "by embracing modern frameworks, and",
  "creating scalable solutions for the",
  "ever-evolving digital landscape.",
];

const textTabSmall = [
  "development by embracing",
  "modern frameworks, and creating",
  "scalable solutions for the ever-",
  "evolving digital landscape.",
];

const textMobile = [
  "in development by",
  "embracing modern",
  "frameworks, and",
  "creating scalable",
  "solutions for the",
  "ever-evolving digital",
  "landscape.",
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
                  <TextTitleSmall text="(Vision)" />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextTitleMedium text="Leading the way in" />
                  </div>
                </div>
                {textDesktopLarge.map((line, index) => (
                  <TextTitleMedium key={index} text={line} />
                ))}
              </div>

              {/* lg-xl */}
              <div className="flex-col hidden lg:flex 2xl:hidden">
                <div className="flex lg:gap-4 2xl:gap-9 items-center">
                  <TextTitleSmall text="(Vision)" />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextTitleMedium text="Leading the way in" />
                  </div>
                </div>
                {textDesktopSmall.map((line, index) => (
                  <TextTitleMedium key={index} text={line} />
                ))}
              </div>

              {/* Md */}
              <div className="flex-col hidden md:flex lg:hidden">
                <div className="flex gap-4 items-center">
                  <TextTitleSmall text="(Vision)" />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextTitleMedium text="Leading the way in development" />
                  </div>
                </div>
                {textTabLarge.map((line, index) => (
                  <TextTitleMedium key={index} text={line} />
                ))}
              </div>

              {/* Sm */}
              <div className="flex-col hidden sm:flex md:hidden">
                <div className="flex gap-4 items-center">
                  <TextTitleSmall text="(Vision)" />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextTitleMedium text="Leading the way in" />
                  </div>
                </div>
                {textTabSmall.map((line, index) => (
                  <TextTitleMedium key={index} text={line} />
                ))}
              </div>

              {/* Mobile */}
              <div className="flex flex-col sm:hidden">
                <div className="flex gap-4 items-center">
                  <TextTitleSmall text="(Vision)" />
                  <div className="">
                    <TextTitleMedium text="Leading the way" />
                  </div>
                </div>
                {textMobile.map((line, index) => (
                  <TextTitleMedium key={index} text={line} />
                ))}
              </div>

              <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
                <div className="flex">
                  <BtnSmall
                    href="/contact"
                    text="Let's work together"
                    underline="h-[1.3px] sm:h-[1.4px] md:h-[1.5px]"
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
