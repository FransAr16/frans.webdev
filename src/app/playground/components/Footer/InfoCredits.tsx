"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import TextDesc from "@/components/ui/TextDesc";
import BtnSmall from "@/components/ui/BtnSmall";
import IconsCancel from "@/components/ui/IconsCancel";

interface InfoCreditsProps {
  text: string;
  underline?: boolean;
  className?: string;
  animationDelay?: number;
}

export default function InfoCredits({
  text,
  underline,
  className,
  animationDelay,
}: InfoCreditsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [isHovered, setIsHovered] = useState(false);

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
        <p
          className={`${className} m-0 tracking-[-0.04em] inline-flex leading-none relative font-medium 2xl:font-semibold text-[4.8vw] sm:text-[2.8vw] md:text-[2.3vw] lg:text-[1.35vw] 2xl:text-[1.2vw] overflow-hidden`}
        >
          <span className="m-0 tracking-[-0.04em] inline-flex leading-none relative overflow-hidden">
            <motion.span
              initial={{ y: "0%" }}
              animate={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: animationDelay,
              }}
            >
              {text}
            </motion.span>
          </span>
        </p>

        {/* Underline animation */}
        {underline && (
          <motion.div>
            <div className="relative w-full h-[1.2px] md:h-[1.7px] lg:h-[1.5px] xl:h-[1.2px] overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              ></motion.div>
            </div>
          </motion.div>
        )}
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
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
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
                  <TextDesc text="(01)" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <TextDesc text="Fonts used" />
                  </div>
                  <div className="flex flex-col pt-[1rem] lg:pt-[1.5rem] 2xl:pt-[2rem]">
                    <div>
                      <TextDesc text="Geist by Andrés Briganti" />
                    </div>
                    <div>
                      <TextDesc text="Montserrat by Julieta Ulanovsky" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className="col-span-2 lg:col-span-4">
              <div className="flex lg:gap-[2rem] xl:gap-[2.5rem]">
                <div className="hidden md:block">
                  <TextDesc text="(02)" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <TextDesc text="Info" />
                  </div>
                  <div className="flex flex-col pt-[1rem] lg:pt-[1.5rem] 2xl:pt-[2rem]">
                    <div className="flex">
                      <TextDesc text="Created by frans" />
                    </div>
                    <div className="flex">
                      <TextDesc text="Designed with figma" />
                    </div>
                    <div className="flex">
                      <TextDesc text="Animated with GSAP & Motion" />
                    </div>
                    <div className="flex">
                      <TextDesc text="Developed in Next.js" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col 3 */}
            <div className="col-span-2 lg:col-span-3">
              <div className="flex lg:gap-[2rem] xl:gap-[2.5rem]">
                <div className="hidden md:block">
                  <TextDesc text="(03)" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <TextDesc text="Something else?" />
                  </div>
                  <div className="flex flex-col pt-[1rem] lg:pt-[1.5rem] 2xl:pt-[2rem]">
                    <div className="flex flex-wrap w-[80%] md:w-[70%] lg:w-full">
                      <TextDesc text="If you have any feedbacks, comments, questions about this website, don't hesitate to" />
                      <div className="flex">
                        <BtnSmall
                          href="mailto:frans.webdev@gmail.com"
                          text="React out !"
                          underline="h-[1.5px]"
                          animationDelay={0.3}
                        />
                      </div>
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
