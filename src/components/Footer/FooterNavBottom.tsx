"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { revealsText } from "@/data/animation";
import Link from "next/link";
import { CgArrowUp } from "react-icons/cg";
import TextSlideUp from "../ui/TextSlideUp";
import { LiaArrowDownSolid, LiaArrowUpSolid } from "react-icons/lia";

interface FooterNavBottomProps {
  href: string;
  text: string;
  className?: string;
}

export default function FooterNavBottom() {
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = 0.2;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animated scroll
    });
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="grid grid-cols-12 gap-1 lg:gap-4 w-full pb-[1.5rem] sm:pb-[2rem] lg:pb-[2rem] pt-[4rem] sm:pt-[8rem] lg:pt-[10rem]">
        <div className="hidden lg:col-span-4 lg:flex">
          <TextSlideUp
            // text="2025 &copy; Edition - All Rights Reserved"
            text={`© ${new Date().getFullYear()} All rights reserved`}
            animate={revealsText}
            className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
          />
        </div>
        <div className="hidden lg:col-span-4 lg:flex">
          <div className="flex">
            <FooterItem
              href="/privacy-policy"
              text="Privacy Policy"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
          <div className="font-medium 2xl:font-semibold flex items-center text-[1rem] px-1">
            <div className="relative overflow-hidden inline-flex tracking-[-0.04em] leading-[104%]">
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
                {"/"}
              </motion.span>
            </div>
          </div>
          <div className="flex">
            <FooterItem
              href="/terms-conditions"
              text="Terms"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="col-span-12 lg:hidden flex">
          <TextSlideUp
            text="(2025 &copy; Edition - All Rights Reserved)"
            animate={revealsText}
            className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
          />
        </div>
        <div className="col-span-12 lg:hidden flex order-first">
          <div className="flex">
            <FooterItem
              href="/privacy-policy"
              text="Privacy Policy"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
          <div className="font-medium 2xl:font-semibold flex items-center text-[1rem] px-1">
            <div className="relative overflow-hidden inline-flex tracking-[-0.04em] leading-[104%]">
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
                {"/"}
              </motion.span>
            </div>
          </div>
          <div className="flex">
            <FooterItem
              href="/terms-conditions"
              text="Terms"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>
        {/* back to top */}
        <div className="col-span-6 lg:col-span-2 flex pt-[3rem] lg:pt-0">
          <div className="flex items-center justify-center gap-1">
            <div
              className="relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={scrollToTop}
            >
              <p className="m-0 leading-none">
                <span
                  className={` relative overflow-hidden inline-flex tracking-[-0.04em] leading-[104%]`}
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
                    className="flex items-center gap-[3px]"
                  >
                    <span className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]">
                      Back to top
                    </span>
                    {/* <CgArrowUp className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1.25rem] 2xl:text-[1.38rem]" /> */}
                    <LiaArrowUpSolid
                      strokeWidth={1.8}
                      className="w-[1.2rem] h-[1.2rem] 2xl:w-[1.3rem] 2xl:h-[1.3rem]"
                    />
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
          </div>
        </div>
        {/* Info & Credits */}
        <div className="col-span-6 lg:col-span-2 flex pt-[3rem] lg:pt-0 justify-end">
          <FooterItem
            href="/info-credit"
            text="Info & Credits"
            className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
          />
        </div>
      </div>
    </div>
  );
}

function FooterItem({ href, text, className }: FooterNavBottomProps) {
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = 0.2;

  return (
    <Link href={href}>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="m-0 leading-none">
          {text.split("").map((word, index) => (
            <span
              key={index}
              className={`${className} relative overflow-hidden inline-flex tracking-[-0.04em] leading-[104%]`}
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
                {word === " " ? "\u00A0" : word}
              </motion.span>
            </span>
          ))}
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
    </Link>
  );
}
