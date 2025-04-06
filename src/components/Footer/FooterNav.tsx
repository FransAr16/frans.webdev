"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TextTitleSmall from "../ui/TextTitleSmall";
import TextTitleMedium from "../ui/TextTitleMedium";

interface NavItemProps {
  href: string;
  target?: string;
  text: string;
  className?: string;
}

export default function FooterNav() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="flex w-full pt-8 lg:pt-12">
        <div className="w-full grid grid-cols-12 lg:gap-8">
          {/* col-1 */}
          <div className="flex flex-col col-span-6 lg:col-span-3 gap-6 lg:gap-8">
            <div>
              <TextTitleSmall text="(Navigate)" />
            </div>
            <div className="flex flex-col">
              {["Home", "Work", "About", "Contact", "Playground"].map(
                (item, index) => (
                  <div className="flex" key={index}>
                    <NavItem
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      text={item}
                      className="font-medium tracking-[-0.04em] leading-[100%] text-[9.5vw] sm:text-[6vw] md:text-[5.2vw] lg:text-[3.3vw] 2xl:text-[3.2vw] 3xl:text-[3vw]"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* col-2 */}
          <div className="flex flex-col col-span-6 lg:col-span-5 gap-6 lg:gap-8">
            <div>
              <TextTitleSmall text="(Connect)" />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <NavItem
                  href="https://Instagram.com"
                  target="_blank"
                  text="Instagram"
                  className="font-medium tracking-[-0.04em] leading-[100%] text-[9.5vw] sm:text-[6vw] md:text-[5.2vw] lg:text-[3.3vw] 2xl:text-[3.2vw] 3xl:text-[3vw]"
                />
              </div>
              <div className="flex">
                <NavItem
                  href="https://Twitter.com"
                  target="_blank"
                  text="Twitter"
                  className="font-medium tracking-[-0.04em] leading-[100%] text-[9.5vw] sm:text-[6vw] md:text-[5.2vw] lg:text-[3.3vw] 2xl:text-[3.2vw] 3xl:text-[3vw]"
                />
              </div>
            </div>
          </div>

          {/* col-3 */}
          <div className="flex flex-col col-span-12 lg:col-span-4 gap-6 lg:gap-8 pt-[6rem] lg:pt-0">
            <div>
              <TextTitleSmall text="(Location)" />
            </div>
            <div className="flex flex-col">
              <div>
                <TextTitleMedium text="DKI Jakarta" />
              </div>
              <div>
                <TextTitleMedium text="Indonesia" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, target, text, className }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = 0.2;

  return (
    <Link href={href} target={target}>
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
          className="pt-[1.5px]"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="relative w-full h-[3px] xl:h-[3px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-foreground"></div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
