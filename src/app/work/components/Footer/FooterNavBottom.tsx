"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import BackToTop from "./BackToTop";
import InfoCredits from "./InfoCredits";

interface ButtonProps {
  href?: string;
  text: string;
  underline?: boolean;
  className?: string;
  animationDelay?: number;
}

export default function FooterNavBottom() {
  const animationDelay = 0.2;

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="grid grid-cols-12 gap-1 lg:gap-4 w-full pb-[1.5rem] 2xl:pb-[2rem] pt-[4rem] sm:pt-[6rem] 2xl:pt-[8rem]">
        {/* All rights reserved */}
        <div className="hidden lg:col-span-4 lg:flex">
          <BtnFooter
            text={`© ${new Date().getFullYear()} All rights reserved`}
            className="pointer-events-none cursor-text"
          />
        </div>

        {/* Privacy Policy */}
        <div className="hidden lg:col-span-4 lg:flex">
          <div className="flex">
            <BtnFooter
              href="/privacy-policy"
              text="Privacy Policy"
              underline={true}
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
            <BtnFooter href="/terms-conditions" text="Terms" underline={true} />
          </div>
        </div>

        {/* All rights reserved Mobile */}
        <div className="col-span-12 lg:hidden flex">
          <BtnFooter
            text={`© ${new Date().getFullYear()} All rights reserved`}
            className="pointer-events-none cursor-text"
          />
        </div>

        {/* Privacy Policy Mobile */}
        <div className="col-span-12 lg:hidden flex order-first">
          <div className="flex">
            <BtnFooter
              href="/privacy-policy"
              text="Privacy Policy"
              underline={true}
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
            <BtnFooter href="/terms-conditions" text="Terms" underline={true} />
          </div>
        </div>

        {/* Back to top */}
        <div className="col-span-6 lg:col-span-2 flex pt-[3rem] lg:pt-0">
          <BackToTop text="Back to top" underline={true} animationDelay={0.3} />
        </div>
        {/* Info & Credits */}
        <div className="col-span-6 lg:col-span-2 flex pt-[3rem] lg:pt-0 justify-end">
          <InfoCredits text="Infos & Credits" underline={true} animationDelay={0.3} />
        </div>
      </div>
    </div>
  );
}

function BtnFooter({
  href,
  text,
  underline = false,
  className,
  animationDelay = 0.3,
}: ButtonProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(Ref);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const content = (
    <div className="relative overflow-hidden">
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${className} m-0 tracking-[-0.04em] inline-flex leading-none relative font-medium 2xl:font-semibold text-[4.8vw] sm:text-[2.8vw] md:text-[2.3vw] lg:text-[1.35vw] 2xl:text-[1.2vw] overflow-hidden`}
      >
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
      </p>

      {underline && (
        <motion.div>
          <div className="relative w-full h-[1.5px] overflow-hidden">
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
  );

  return (
    <>
      <div ref={Ref} className="relative flex">
        {href ? <Link href={href}>{content}</Link> : <div>{content}</div>}
      </div>
    </>
  );
}
