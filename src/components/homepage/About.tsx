"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import TextTitleSmall from "../ui/TextTitleSmall";
import TextTitleMedium from "../ui/TextTitleMedium";
import BtnSmall from "../ui/BtnSmall";

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
            <TextTitleSmall text="Frans - Web Developer @2024" />
          </div>
        </div>

        <div className="flex w-full h-full order-first lg:order-last">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
              {/* Paragraph 1 */}
              {/* Desktop 2xl */}
              <div className="flex-col hidden 2xl:flex">
                <div className="flex lg:gap-4 2xl:gap-9 items-center">
                  <TextTitleSmall text="(About Me)" />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextTitleMedium text="Web developer who loves" />
                  </div>
                </div>
                <TextTitleMedium text="design, passionate about crafting visually stunning and functionality." />
              </div>

              {/* Desktop lg */}
              <div className="flex-col hidden lg:flex">
                <div className="flex lg:gap-4 2xl:gap-9 items-center">
                  <TextTitleSmall text="(About Me)" />
                  <div className="lg:pl-[.5rem] xl:pl-[1rem] 2xl:pl-[3rem]">
                    <TextTitleMedium text="Creative web developer who" />
                  </div>
                </div>
                <TextTitleMedium text="loves design, passionate about crafting visually stunning and functionality." />
              </div>

              {/* Tablet Large */}
              <div className="flex-col hidden md:flex lg:hidden">
                <div className="flex gap-4 items-center">
                  <TextTitleSmall text="(About Me)" />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextTitleMedium text="Creative web developer who" />
                  </div>
                </div>
                <TextTitleMedium text="loves design, passionate about crafting visually stunning and functionality." />
              </div>
              
              {/* Tablet Small */}
              <div className="flex-col hidden sm:flex md:hidden">
                <div className="flex gap-4 items-center">
                  <TextTitleSmall text="(About Me)" />
                  <div className="sm:ml-[2rem] lg:ml-[3rem]">
                    <TextTitleMedium text="Creative web developer" />
                  </div>
                </div>
                <TextTitleMedium text="who loves design, passionate about crafting visually stunning and functionality." />
              </div>

              {/* Mobile */}
              <div className="flex flex-col sm:hidden">
                <div className="flex gap-4 items-center">
                  <TextTitleSmall text="(About Me)" />
                  <div className="">
                  <TextTitleMedium text="Creative web" />
                  </div>
                </div>
                <TextTitleMedium text="developer who loves design, passionate about crafting visually stunning and functionality." />
              </div>

              {/* Paragraph 2 */}
              <div className="flex flex-col gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
                {/* Desktop 2xl */}
                <div className="hidden 2xl:block">
                  <TextTitleMedium text="Combining innovation with a love of detail to create beautiful and functional design." />
                </div>
                {/* Desktop lg */}
                <div className="hidden lg:block">
                  <TextTitleMedium text="Combining innovation with a love of detail to create beautiful and functional design." />
                </div>
                {/* Tablet */}
                <div className="hidden sm:block lg:hidden">
                  <TextTitleMedium text="Combining innovation with a love of detail to create beautiful and functional design." />
                </div>
                {/* Mobile */}
                <div className="sm:hidden">
                <TextTitleMedium text="Combining innovation with a love of detail to create beautiful and functional design." />
                </div>

                <div className="flex">
                  <BtnSmall href="/about" text="Learn more about me" underline="h-[1.3px] md:h-[1.4px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
