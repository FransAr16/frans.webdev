"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { revealsText } from "@/data/animation";
import Link from "next/link";
import TextSlideUp from "../ui/TextSlideUp";
import BorderLineTop from "../ui/BorderLineTop";

interface NavItemProps {
  text: string;
  className?: string;
  href: string;
}

export default function FooterNav() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="flex w-full pt-8 lg:pt-12">
        <BorderLineTop />
        <div className="w-full grid grid-cols-12 lg:gap-8">
          {/* col-1 */}
          <div className="flex flex-col col-span-6 lg:col-span-3 gap-6 lg:gap-10">
            <div>
              <TextSlideUp
                text="(Navigate)"
                animate={revealsText}
                className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
              />
            </div>
            <div className="flex flex-col">
              {["Home", "Work", "About", "Contact", "Playground"].map(
                (item, index) => (
                  <div className="flex" key={index}>
                    <NavItem
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      text={item}
                      className="font-medium tracking-[-0.04em] leading-[100%] text-[10vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* col-2 */}
          <div className="flex flex-col col-span-6 lg:col-span-5 gap-6 lg:gap-10">
            <div>
              <TextSlideUp
                text="(Connect)"
                animate={revealsText}
                className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <NavItem
                  href="Instagram.com"
                  text="Instagram"
                  className="font-medium tracking-[-0.04em] leading-[100%] text-[10vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
              <div className="flex">
                <NavItem
                  href="Twitter.com"
                  text="Twitter"
                  className="font-medium tracking-[-0.04em] leading-[100%] text-[10vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
            </div>
          </div>

          {/* col-3 */}
          <div className="flex flex-col col-span-12 lg:col-span-4 gap-6 lg:gap-10 pt-[6rem] lg:pt-0">
            <div>
              <TextSlideUp
                text="(Location)"
                animate={revealsText}
                className="font-medium 2xl:font-semibold mr-[4px] lg:mr-[6px] text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <TextSlideUp
                  text="DKI Jakarta,"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[10vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
              <div>
                <TextSlideUp
                  text="Indonesia"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[10vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, text, className }: NavItemProps) {
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
          {text.split(" ").map((word, index) => (
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
                {word}
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
          <div className="relative w-full h-[2px] xl:h-[3.5px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-foreground"></div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
