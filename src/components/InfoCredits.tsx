"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import TextFadeIn from "./ui/TextFadeIn";
import { fadeIn, revealsText } from "@/data/animation";
import Button from "./ui/Button";
import IconsCancel from "./ui/IconsCancel";

export default function InfoCredits() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [isHovered, setIsHovered] = useState(false);
  const animationDelay = 0.2;

  useEffect(() => {
    let initialScroll = window.scrollY;

    const handleScroll = () => {
      if (isOpen) {
        const currentScroll = window.scrollY;
        if (initialScroll - currentScroll >= window.innerHeight * 0.5) {
          setIsOpen(false);
        }
      } else {
        initialScroll = window.scrollY;
      }
    };

    if (isOpen) {
      initialScroll = window.scrollY;
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div>
      <div
        className="relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleModal}
      >
        <p className="m-0 leading-none">
          <span
            className={` relative overflow-hidden inline-flex tracking-[-0.04em] leading-[104%] font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]`}
          >
            <motion.span
              initial={{ y: "0%" }}
              animate={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: animationDelay,
              }}
            >
              Info & Credits
            </motion.span>
          </span>
        </p>

        {/* Underline animation */}
        <motion.div
          className="pt-[2px]"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="relative w-full h-[1px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-foreground"></div>
          </div>
        </motion.div>
      </div>

      {/* Modal Info&Credits */}
      <motion.div
        initial={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        }}
        animate={{
          clipPath: isOpen
            ? "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`fixed right-0 bottom-0 w-full h-auto flex flex-col bg-background border-t ${
          isOpen ? "flex" : ""
        }`}
      >
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-11 gap-[2.5rem] lg:gap-4 2xl:gap-8 w-full main-container pt-[3rem] pb-[2rem] 2xl:py-[3rem] ">
            {/* col 1 */}
            <div className="col-span-2 lg:col-span-4">
              <div className="flex lg:gap-[2rem] xl:gap-[2.5rem]">
                <div className="hidden md:block">
                  <TextFadeIn
                    slideUp={fadeIn}
                    phrase="(01)"
                    className="font-medium 2xl:font-semibold text-[.9rem] sm:text-[1rem] lg:text-[.9rem] 2xl:text-[1rem] leading-[120%]"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Fonts used"
                      className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div className="flex flex-col pt-[1rem] lg:pt-[1.5rem] 2xl:pt-[2rem]">
                    <div>
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="Geist by Andrés Briganti"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                    <div>
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="Montserrat by Julieta Ulanovsky"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className="col-span-2 lg:col-span-4">
              <div className="flex lg:gap-[2rem] xl:gap-[2.5rem]">
                <div className="hidden md:block">
                  <TextFadeIn
                    slideUp={fadeIn}
                    phrase="(02)"
                    className="font-medium 2xl:font-semibold text-[.9rem] sm:text-[1rem] lg:text-[.9rem] 2xl:text-[1rem] leading-[120%]"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Info"
                      className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div className="flex flex-col pt-[1rem] lg:pt-[1.5rem] 2xl:pt-[2rem]">
                    <div className="flex">
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="Created by frans"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                    <div className="flex">
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="Designed with figma"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                    <div className="flex">
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="Animated with GSAP & Motion"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                    <div className="flex">
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="Developed in Next.js"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col 3 */}
            <div className="col-span-2 lg:col-span-3">
              <div className="flex lg:gap-[2rem] xl:gap-[2.5rem]">
                <div className="hidden md:block">
                  <TextFadeIn
                    slideUp={fadeIn}
                    phrase="(03)"
                    className="font-medium 2xl:font-semibold text-[.9rem] sm:text-[1rem] lg:text-[.9rem] 2xl:text-[1rem] leading-[120%]"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Something else?"
                      className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div className="flex flex-col pt-[1rem] lg:pt-[1.5rem] 2xl:pt-[2rem]">
                    <div className="flex">
                      <TextFadeIn
                        slideUp={fadeIn}
                        phrase="If you have any feedbacks, comments, questions about this website, don't hesitate to"
                        className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                      />
                    </div>
                    <div className="flex">
                      <Button
                        href="/"
                        slideUp={revealsText}
                        text="Reach out!"
                        className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MarkBtn */}
          <div onClick={toggleModal} className="absolute right-0 top-0">
            <IconsCancel />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
