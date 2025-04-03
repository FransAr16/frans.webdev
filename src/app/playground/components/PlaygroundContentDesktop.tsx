"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import BorderLineTop from "@/components/ui/BorderLineTop";
import { dataProjects } from "@/data/playground";

export default function PlaygroundContentDesktop() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <ParallaxText text="Playground" speedFactor={12} />

      <ParallaxProject />
    </div>
  );
}

interface ParallaxTextProps {
  text: string;
  className?: string;
  speedFactor?: number; // Untuk mengatur kecepatan animasi width
}

function ParallaxText({ text, className, speedFactor = 0 }: ParallaxTextProps) {
  const { scrollY } = useScroll();
  const [innerHeight, setInnerHeight] = useState(1); // Defaultkan ke 1 agar hook tetap sama

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  // Animasi width dari 0 ke full setelah scroll 100vh
  const width = useTransform(
    scrollY,
    [innerHeight, innerHeight * speedFactor],
    ["0%", "100%"]
  );

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center top-0 left-0 z-[2] ${
        className || ""
      }`}
    >
      <div className="absolute flex flex-col items-center h-auto bg-transparent">
        <div className="flex flex-col items-center">
          <p className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] text-border">
            Welcome on the
          </p>
          <p className="relative flex uppercase font-bold lg:text-[7rem] xl:text-[8rem] leading-[100%]">
            {/* Static Border Text */}
            <motion.span className="text-border z-[1]">{text}</motion.span>
            {/* Animated Foreground Text */}
            <motion.span
              style={{ width }}
              className="text-foreground absolute z-[2] overflow-hidden whitespace-nowrap"
            >
              {text}
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ParallaxProject() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);

  const { scrollYProgress: progress1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress3 } = useScroll({
    target: ref3,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress4 } = useScroll({
    target: ref4,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress5 } = useScroll({
    target: ref5,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress6 } = useScroll({
    target: ref6,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress7 } = useScroll({
    target: ref7,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress8 } = useScroll({
    target: ref8,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress9 } = useScroll({
    target: ref9,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress10 } = useScroll({
    target: ref10,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progress11 } = useScroll({
    target: ref11,
    offset: ["start end", "end start"],
  });

  const moveUp1 = useTransform(progress1, [0, 1.3], [200, -300]);
  const moveUp2 = useTransform(progress2, [0, 1.3], [200, -300]);
  const moveUp3 = useTransform(progress3, [0, 1.3], [400, -500]);
  const moveUp4 = useTransform(progress4, [0, 1], [100, -300]);
  const moveUp5 = useTransform(progress5, [0, 1], [0, -100]);
  const moveUp6 = useTransform(progress6, [0, 1], [0, -300]);
  const moveUp7 = useTransform(progress7, [0, 1], [100, -200]);
  const moveUp8 = useTransform(progress8, [0, 1], [0, -300]);
  const moveUp9 = useTransform(progress9, [0, 1.3], [100, -300]);
  const moveUp10 = useTransform(progress10, [0, 1], [0, -200]);
  const moveUp11 = useTransform(progress11, [0, 1], [1000, -400]);

  const rotate4 = useTransform(progress4, [0, 0.8], [18, -15]);
  const rotate8 = useTransform(progress8, [0, 0.8], [1, -5]);
  const rotate11 = useTransform(progress11, [0, 0.8], [180, 0]);

  return (
    <div className="relative main-container z-[4] overflow-hidden">
      <div className="absolute top-0 left-0 bg-background w-full h-[10vh]"></div>

      <div className="relative grid gap-y-[2rem]">
        {/* <StickyText /> */}
        <BorderLineTop />

        {/* Project 1-2 */}
        <div className="grid grid-cols-8 gap-x-[2rem] h-full py-[2rem] pt-[4rem]">
          {/* Project 1 */}
          <div className="col-span-3">
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[0].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[0].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[0].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[0].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[0].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blank Space */}
          <div className="col-span-2"></div>

          {/* Project 2 */}
          <div className="col-span-3 pt-[10rem]">
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[1].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[1].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[1].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[1].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[1].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3-4 */}
        <div
          ref={ref1}
          className="grid grid-cols-8 gap-x-[2rem] h-[120vh] py-[5rem]"
        >
          {/* Blank Space */}
          <div className="col-span-1"></div>
          {/* Project 3 */}
          <motion.div className="col-span-3" style={{ y: moveUp1 }}>
            <div className="border flex p-4 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[2].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[2].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[2].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[2].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[2].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <div className="col-span-3">
            <div className="border flex p-4 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[3].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[3].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[3].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[3].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[3].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blank Space */}
          <div className="col-span-1"></div>
        </div>

        {/* Project 5 */}
        <div
          ref={ref2}
          className="grid grid-cols-8 gap-x-[2rem] h-[120vh] py-[2rem]"
        >
          {/* Project 5 */}
          <motion.div className="col-span-3" style={{ y: moveUp2 }}>
            <div className="border flex p-4 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[4].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[4].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[4].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[4].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[4].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 6-7 */}
        <div
          ref={ref3}
          className="grid grid-cols-8 gap-x-[2rem] h-[120vh] py-[5rem]"
        >
          {/* Blank Space */}
          <div className="col-span-1"></div>
          {/* Project 6 */}
          <div className="col-span-3">
            <div className="border flex p-4 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[5].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[5].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[5].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[5].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[5].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <motion.div className="col-span-3" style={{ y: moveUp3 }}>
            <div className="border flex p-4 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[6].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[6].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[6].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[6].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[6].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Blank Space */}
          <div className="col-span-1"></div>
        </div>

        {/* Project 8 */}
        <div
          ref={ref4}
          className="grid grid-cols-8 gap-x-[2rem] h-[120vh] py-[5rem]"
        >
          {/* Blank Space */}
          <div className="col-span-1"></div>
          {/* Label */}
          <motion.div
            className="col-span-2 flex items-center justify-center"
            style={{ y: moveUp4, rotate: rotate4 }}
          >
            <div className="flex">
              <div className="border border-foreground/50 py-1 px-2 rounded-full flex items-center justify-center gap-1 bg-background">
                <span className="ml-1 2xl:font-medium lg:text-[1rem] 2xl:text-[1.28rem] leading-[120%]">
                  KEEP SCROLLIIING
                </span>
                <span>&#128293;</span>
              </div>
            </div>
          </motion.div>
          {/* Blank Space */}
          <div className="col-span-1"></div>

          {/* Project 8 */}
          <div className="col-span-3">
            <div className="border flex p-4 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[7].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[7].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[7].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[7].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[7].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blank Space */}
          <div className="col-span-1"></div>
        </div>

        {/* Project 9-10 */}
        <div
          ref={ref5}
          className="grid grid-cols-8 gap-x-[2rem] h-full py-[2rem]"
        >
          {/* Project 9 */}
          <motion.div className="col-span-3 pt-[10rem]" style={{ y: moveUp5 }}>
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[8].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[8].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[8].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[8].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[8].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blank Space */}
          <div className="col-span-2"></div>

          {/* Project 10 */}
          <div className="col-span-3">
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[9].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[9].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[9].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[9].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[9].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 11-12 */}
        <div
          ref={ref6}
          className="grid grid-cols-8 gap-x-[2rem] h-full py-[2rem]"
        >
          {/* Project 11 */}
          <motion.div className="col-span-3 pt-[18rem]" style={{ y: moveUp6 }}>
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[10].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[10].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[10].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[10].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[10].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 12 */}
          <div className="col-span-3 pt-[12rem]">
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[11].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[11].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[11].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[11].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[11].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blank Space */}
          <div className="col-span-3"></div>
        </div>

        {/* Project 13 */}
        <div
          ref={ref7}
          className="grid grid-cols-8 gap-x-[2rem] h-full py-[2rem]"
        >
          {/* Blank Space */}
          <div className="col-span-2"></div>
          {/* Project 13 */}
          <motion.div className="col-span-3 pt-[6rem]" style={{ y: moveUp7 }}>
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[12].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[12].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[12].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[12].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[12].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Label */}
          <motion.div
            className="col-span-3 flex items-center justify-start"
            style={{ y: moveUp8, rotate: rotate8 }}
          >
            <div className="flex">
              <div className="border border-foreground/50 py-1 px-2 rounded-full flex items-center justify-center gap-1 bg-background">
                <p className="ml-1 2xl:font-medium lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                 {"THIS ONE'S MY FAVORITE"}
                </p>
                <p>&#128521;</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 14-15 */}
        <div
          ref={ref8}
          className="grid grid-cols-8 gap-x-[2rem] h-full py-[2rem]"
        >
          {/* Project 14 */}
          <motion.div className="col-span-3 pt-[4rem]" style={{ y: moveUp9 }}>
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[13].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[13].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[13].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[13].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[13].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blank Space */}
          <div className="col-span-1"></div>

          {/* Project 15 */}
          <div className="col-span-3">
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[14].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[14].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[14].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[14].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[14].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blank Space */}
          <div className="col-span-1"></div>
        </div>

        {/* Project 15 */}
        <div ref={ref9} className="grid grid-cols-8 gap-x-[2rem] h-full">
          {/* Blank Space */}
          <div className="col-span-3"></div>
          {/* Project 15 */}
          <motion.div className="col-span-3 pt-[20rem]" style={{ y: moveUp10 }}>
            <div className="border flex p-5 bg-background">
              <div className="w-full h-full flex flex-col">
                <div className="lg:h-[22rem] xl:h-[24rem] flex items-center justify-center main-container bg-border">
                  <Image
                    src={dataProjects[14].image}
                    height={1080}
                    width={1920}
                    className="object-cover inline-block max-w-full"
                    alt={dataProjects[14].title}
                  />
                </div>
                <div className="pt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium 2xl:font-semibold lg:text-[1.2rem] 2xl:text-[1.48rem] leading-[120%]">
                        {dataProjects[14].title}
                      </div>
                      <div className="2xl:font-medium lg:text-[1rem] 2xl:text-[1.18rem] leading-[120%]">
                        {dataProjects[14].description}
                      </div>
                    </div>
                    <div className="2xl:font-medium lg:text-[.9rem] 2xl:text-[1.08rem] leading-[120%]">
                      {dataProjects[14].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Label */}
          <motion.div
            className="col-span-2 flex items-center justify-center pt-[10rem]"
            style={{ y: moveUp11, rotate: rotate11 }}
          >
            <div className="flex">
              <div className="border border-foreground/50 py-1 px-2 rounded-full flex items-center justify-center gap-1 bg-background">
                <span className="ml-1 2xl:font-medium lg:text-[1rem] 2xl:text-[1.28rem] leading-[120%]">
                  {"IT'S ALREADY THE END"}
                </span>
                <span>&#128532;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 bg-background w-full h-[20vh]"></div>
    </div>
  );
}
