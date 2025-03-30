"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarSlideUp, revealsText } from "@/data/animation";
import HomeNavLink from "./HomeNavLink";
import BtnContact from "./BtnContact";

interface ContactProps {
  href: string;
  text: string;
  className?: string;
}

const navItems = [
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Playground",
    href: "/playground",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      {/* Desktop */}
      <div
        onMouseLeave={() => {
          setSelectedIndicator(pathname);
        }}
        className="relative"
      >
        <ul className="hidden lg:flex justify-between items-center text-background">
          <div className="flex lg:gap-[.8rem] xl:gap-[1rem] 2xl:gap-[1.5rem]">
            {navItems.map((item, index) => (
              <HomeNavLink
                key={index}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
                animate={navbarSlideUp}
                classNameLink="font-medium text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
                classNameHref=" w-full h-[1px] bg-background absolute left-0 bottom-0"
              />
            ))}
          </div>
          <div className="flex">
            <BtnContact
              href="/contact"
              animationDelay={2.8}
              text="Start a project"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </ul>
      </div>
    </>
  );
}

function Contact({ href, text, className }: ContactProps) {
  const [isHovered, setIsHovered] = useState(false);

  const ContactSlideUp = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        delay: 2.8,
      },
    },
  };

  return (
    <>
      <Link href={href}>
        <div className="relative flex overflow-hidden">
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="m-0 leading-none"
          >
            {text.split("").map((word, index) => (
              <span
                key={index}
                className={`${className} relative overflow-hidden inline-flex tracking-tight leading-[105%]`}
              >
                <motion.span
                  variants={ContactSlideUp}
                  custom={index}
                  initial="initial"
                  animate="animate"
                >
                  {word === " " ? "\u00A0" : word}
                </motion.span>
              </span>
            ))}
          </p>

          <motion.div
            variants={ContactSlideUp}
            initial="initial"
            animate="animate"
            className="pt-[0px]"
          >
            <div className="">
              <div
                className={`h-[1px] absolute bottom-0 right-0 w-full flex bg-transparent transition-all duration-800 ease-in-out ${
                  isHovered ? "translate-x-[200%]" : "translate-x-0"
                }`}
              >
                <div className="right-0 absolute w-full h-full bg-background"></div>
                <div className="right-[100%] absolute w-full h-full bg-foreground"></div>
                <div className="right-[200%] absolute w-full h-full bg-background"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </>
  );
}
