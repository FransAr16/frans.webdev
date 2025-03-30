"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { revealsText } from "@/data/animation";
import Link from "next/link";
import TextSlideUp from "../ui/TextSlideUp";
import InfoCredits from "../InfoCredits";
import BtnNavFooterBottom from "../ui/BtnNavFooterButton";
import BackToTop from "../ui/BackToTop";

interface FooterNavBottomProps {
  href: string;
  text: string;
  className?: string;
}

export default function FooterNavBottom() {
  const animationDelay = 0.2;

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="grid grid-cols-12 gap-1 lg:gap-4 w-full pb-[1.5rem] 2xl:pb-[2rem] pt-[4rem] sm:pt-[8rem] lg:pt-[10rem]">
        {/* All rights reserved */}
        <div className="hidden lg:col-span-4 lg:flex">
          <BtnNavFooterBottom
            text={`© ${new Date().getFullYear()} All rights reserved`}
            animationDelay={0.1}
            className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
          />
        </div>

        {/* Privacy Policy */}
        <div className="hidden lg:col-span-4 lg:flex">
          <div className="flex">
            <BtnNavFooterBottom
              href="/privacy-policy"
              text="Privacy Policy"
              underline={true}
              animationDelay={0.1}
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
            <BtnNavFooterBottom
              href="/terms-conditions"
              text="Terms"
              underline={true}
              animationDelay={0.1}
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>

        {/* All rights reserved Mobile */}
        <div className="col-span-12 lg:hidden flex">
          <TextSlideUp
            text={`(© ${new Date().getFullYear()} All rights reserved)`}
            animate={revealsText}
            className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
          />
        </div>

        {/* Privacy Policy Mobile */}
        <div className="col-span-12 lg:hidden flex order-first">
          <div className="flex">
            <BtnNavFooterBottom
              href="/privacy-policy"
              text="Privacy Policy"
              underline={true}
              animationDelay={0.1}
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
            <BtnNavFooterBottom
              href="/terms-conditions"
              text="Terms"
              underline={true}
              animationDelay={0.1}
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>

        {/* Back to top */}
        <div className="col-span-6 lg:col-span-2 flex pt-[3rem] lg:pt-0">
          <BackToTop text="Back to top" underline={true} className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]" />
        </div>
        {/* Info & Credits */}
        <div className="col-span-6 lg:col-span-2 flex pt-[3rem] lg:pt-0 justify-end">
          <InfoCredits text="Infos & Credits" underline={true} className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]" />
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
        {/* <motion.div
          className="pt-[2px]"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="relative w-full h-[1px] overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full bg-foreground"></div>
          </div>
        </motion.div> */}
      </div>
    </Link>
  );
}
