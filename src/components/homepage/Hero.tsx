"use client";

import React, { useEffect} from "react";
import { motion, useTransform, useScroll, useAnimation } from "motion/react";

interface LetterLightProps {
  text: string;
  className?: string;
}

interface LetterBoldProps {
  text: string;
  className?: string;
}

interface LetterStaggeredProps {
  text: string;
  className?: string;
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const yTransform = useTransform(scrollYProgress, [0, 300], [0, -300]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 3], [0, 0.4]);
  const overlayZIndex = useTransform(scrollYProgress, [0, 3], [1, 10]);

  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 0.3], // Mulai dan akhir scroll
    [
      "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", // Awal
      "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)", // Akhir
    ]
  );

  const clipPathValueSecond = useTransform(
    scrollYProgress,
    [0, 0.6], // Mulai dan akhir scroll
    [
      "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", // Awal
      "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)", // Akhir
    ]
  );

  const xValue = useTransform(scrollYProgress, [0, 0.3], ["0%", "32%"]);
  const xValueLarge = useTransform(scrollYProgress, [0, 0.3], ["0%", "31.45%"]);

  useEffect(() => {
    window.scrollTo(0, 0);

    
  }, []);

  useEffect(() => {
    async function sequence() {
      // Phase 1: Animation to 80%
      await controls.start({
        width: "80%",
        transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
      });

      // Phase 2: Animation to 0%
      await controls.start({
        width: "0%",
        transition: { duration: 0, ease: [0.76, 0, 0.24, 1] },
      });
    }

    // Initial delay before starting animation
    const timeout = setTimeout(() => {
      sequence();
    }, 2200);

    return () => clearTimeout(timeout); // clear timeout
  }, [controls]);

  return (
    <div className="relative h-[100vh] lg:h-[300vh] w-full">
      {/* Scrollable Hero Section */}
      <motion.div
        className="lg:fixed top-0 left-0 w-full h-screen inset-0"
        style={{ translateY: yTransform }}
      >
        <div className="h-[150vh] m-0 max-w-full">
          <div className="relative w-full h-full lg:h-screen flex flex-col lg:flex-row">
            {/* Videos */}
            <div className="absolute inset-0 lg:flex flex-col lg:flex-row justify-end lg:justify-start z-[-1] hidden">
              <div className="order-2 lg:order-first w-full h-[81vw] lg:h-full lg:w-1/2 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 3,
                    delay: 2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="w-full h-full overflow-hidden"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/videos-1.mp4" type="video/mp4" />
                  </video>
                </motion.div>
              </div>

              <div className="hidden lg:blockw-1/2 h-screen"></div>
            </div>

            {/* Right */}
            <div className=" w-full h-[58vh] sm:h-[61vh] md:h-[58vh] lg:h-full flex flex-col pt-[40vw] sm:pt-[28vw] lg:pt-0 px-[1rem] sm:px-[1.5rem] lg:px-0">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "50%" }}
                transition={{
                  delay: 2,
                  duration: 2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                layout
                className="hidden lg:block absolute right-0 h-full w-full z-[-1] bg-background"
              />

              {/* Column 1 */}
              <div className="relative flex-1 order-2 lg:order-first overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "50%" }}
                  transition={{
                    delay: 2,
                    duration: 2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  layout
                  className="absolute hidden lg:block right-0 h-full w-full z-[-1] bg-background"
                />

                <div className="w-full h-full lg:h-full flex items-end lg:items-end justify-end">
                  <div className="w-full lg:w-1/2 flex gap-[22vw] sm:gap-[30vw] lg:gap-[4rem] 2xl:gap-[5rem] pb-3.5 lg:pb-[2rem] 2xl:pb-[3.5rem] lg:pl-[8.2%] 2xl:pl-[8.2%]">
                    <div className="flex flex-col">
                      <LetterLight
                        text="Creative"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
                      />
                      <LetterLight
                        text="Web Developer"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <LetterLight
                        text="Fullstack"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
                      />
                      <LetterLight
                        text="Capable"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem] "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="relative flex lg:flex-1">
                <div className="relative w-full h-full flex justify-end items-center">
                  <motion.div
                    style={{ clipPath: clipPathValueSecond }}
                    className="absolute hidden lg:block right-[47%] xl:right-[49.2%] 2xl:right-[49.5%] w-[1rem] h-[101%] bg-background z-10"
                  ></motion.div>
                  <motion.div
                    style={{ clipPath: clipPathValue }}
                    initial={{ width: "50%" }}
                    animate={{ width: "auto" }}
                    transition={{
                      delay: 2.1,
                      duration: 2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    layout
                    className="relative w-auto h-[101%] hidden lg:block bg-background"
                  >
                    <motion.div
                      style={{ clipPath: clipPathValue }}
                      className="flex w-auto h-full bg-background"
                    >
                      <div className="flex justify-center lg:w-[16vw] 2xl:w-[18rem] pt-3 lg:pt-6">
                        <LetterBold
                          text="(01)"
                          className="font-semibold 2xl:text-[1.3rem]"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="w-full lg:w-1/2 flex lg:pl-[8.2%] 2xl:pl-[8.2%] lg:pt-[1.5rem] 2xl:pt-0">
                    <div className="w-full sm:w-[26rem] lg:w-[28rem] xl:w-[90%] 2xl:w-[41rem]">
                      <LetterBold
                        text="Shaping The Future of Digital Experiences with Unmatched Craft and Precision."
                        className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="hidden lg:block relative flex-none overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={controls}
                  transition={{
                    delay: 2.2,
                    duration: 2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  layout
                  className="absolute right-0 h-full w-full z-[-1] bg-background"
                />

                <motion.div
                  style={{ x: xValue }}
                  className="w-full h-auto flex justify-end items-end 2xl:hidden"
                >
                  <div className="bg-background pl-1 px-4 py-2 h-auto">
                    <LetterStaggered
                      text="FRANS"
                      className="lg:text-[22vw] 2xl:text-[22vw] "
                    />
                  </div>
                </motion.div>
                <motion.div
                  style={{ x: xValueLarge }}
                  className="w-full h-auto 2xl:flex justify-end items-end hidden"
                >
                  <div className="bg-background pl-1 px-4 py-2 h-auto">
                    <LetterStaggered
                      text="FRANS"
                      className="lg:text-[22vw] 2xl:text-[22vw] "
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Vidoes Mobile */}
            <div className="relative w-full min-h-[42vh] sm:min-h-[39vh] md:min-h-[42vh] lg:hidden overflow-hidden">
              <motion.div
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="w-full h-full overflow-hidden"
              >
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/videos-1.mp4" type="video/mp4" />
                </video>
              </motion.div>

              <div className="absolute top-0 left-0 inset-0 h-full w-full">
                <div className="relative h-[14vh] sm:h-[13vh] md:h-[14vh]">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{
                      delay: 2,
                      duration: 2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    layout
                    className="absolute right-0 h-[101.5%] w-full bg-background"
                  />
                </div>
                <div className="relative h-[14vh] sm:h-[13vh] md:h-[14vh]">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{
                      delay: 2.1,
                      duration: 2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    layout
                    className="absolute right-0 h-[101%] w-full bg-background"
                  />
                </div>
                <div className="relative h-[14vh] sm:h-[13vh] md:h-[14vh]">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{
                      delay: 2.2,
                      duration: 2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    layout
                    className="absolute right-0 h-[101%] w-full bg-background"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-black"
        style={{
          opacity: overlayOpacity,
          zIndex: overlayZIndex,
        }}
      />
    </div>
  );
}

function LetterLight({ text, className }: LetterLightProps) {
  const letterSlideUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 2.8,
      },
    },
  };

  return (
    <p className="m-0 leading-none">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`${className} relative inline-flex tracking-[-0.04em] leading-[110%]`}
        >
          <motion.span
            variants={letterSlideUp}
            custom={index}
            initial="initial"
            animate="animate"
          >
            {word === " " ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

function LetterBold({ text, className }: LetterBoldProps) {
  const letterSlideUp = {
    initial: {
      y: "100%",
    },
    animate: (index: number) => ({
      y: "0%",
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        delay: 1 + 0.02 * index,
      },
    }),
  };

  return (
    <p className="m-0 leading-none">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`${className} relative overflow-hidden inline-flex tracking-tight leading-[105%]`}
        >
          <motion.span
            variants={letterSlideUp}
            custom={index}
            initial="initial"
            animate="animate"
          >
            {word === " " ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

function LetterStaggered({ text, className }: LetterStaggeredProps) {
  const letterSlideUp = {
    initial: {
      y: "100%",
    },
    animate: (index: number) => ({
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 2.8 + 0.05 * index,
      },
    }),
  };

  return (
    <motion.p
      className={`${className} relative block overflow-hidden whitespace-nowrap uppercase leading-[75%]`}
    >
      {text.split("").map((l, index) => (
        <span key={index}>
          <motion.span
            variants={letterSlideUp}
            custom={index}
            initial="initial"
            animate="animate"
            className="font-montserrat inline-block font-black tracking-normal"
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}
