"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface SidebarProps {
  onClose: () => void;
}

interface LogoProps {
  href: string;
  text: string;
  className?: string;
}

interface TitleProps {
  text: string;
  className?: string;
}

interface MobileNavItemProps {
  text: string;
  className?: string;
  href: string;
}

interface MobileContactProps {
  href: string;
  text: string;
  className?: string;
}

interface MenuBtnProps {
  text: string;
  className?: string;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false); // Close animation
    setTimeout(onClose, 0); // Call onClose after animation completes
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="relative w-full h-screen bg-foreground main-container">
          <div className="absolute top-0 left-0 w-full main-container grid items-center grid-cols-12 py-4 z-[9999]">
            <div className="text-background col-span-8">
              <Logo
                href="/"
                text="FRANS"
                className="font-black text-[2.4rem]"
              />
            </div>
            <div className="flex lg:hidden justify-end col-span-4 items-center">
              <button onClick={handleClose} className="flex">
                <MenuBtn
                  text="Close"
                  className="text-background font-semibold text-[1.1rem]"
                />
              </button>
            </div>
          </div>

          <div className="relative h-full flex flex-col py-14">
            {/* Sidebar Content */}
            <nav className="h-full w-full flex">
              <div className="relative w-full flex flex-col text-background lg:hidden justify-between">
                <div className="flex flex-col justify-end w-full mt-[34%]">
                  <div className="flex ">
                    <Title
                      text="(Navigate)"
                      className="font-semibold text-[1.05rem]"
                    />
                  </div>
                  <ul className="mt-[1rem] flex flex-col gap-1.5">
                    <li className="flex lg:hidden">
                      <MobileNavItem
                        href="/"
                        text="Home"
                        className="font-medium text-[2.4rem]"
                      />
                    </li>
                    <li className="flex">
                      <MobileNavItem
                        href="/work"
                        text="Work"
                        className="font-medium text-[2.4rem]"
                      />
                    </li>
                    <li className="flex">
                      <MobileNavItem
                        href="/about"
                        text="About"
                        className="font-medium text-[2.4rem]"
                      />
                    </li>
                    <li className="flex">
                      <MobileNavItem
                        href="/playground"
                        text="Playground"
                        className="font-medium text-[2.4rem]"
                      />
                    </li>
                  </ul>
                </div>
                <div className="flex w-full mb-[4rem]">
                  <MobileContact
                    href="/contact"
                    text="Start a project"
                    className="font-medium text-[2.4rem]"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Logo({ href, text, className }: LogoProps) {
  return (
    <>
      <Link href={href}>
        <p className="block lg:hidden m-0 leading-none">
          {text.split("").map((word, index) => (
            <span
              key={index}
              className={`${className} relative font-montserrat overflow-hidden lg:hidden inline-flex tracking-normal leading-[100%]`}
            >
              <span>{word === " " ? "\u00A0" : word}</span>
            </span>
          ))}
        </p>
      </Link>
    </>
  );
}

function Title({ text, className }: TitleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const navbarSlideUp = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="m-0 leading-none"
        >
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className={`${className} relative overflow-hidden inline-flex tracking-tight leading-[105%]`}
            >
              <motion.span
                variants={navbarSlideUp}
                custom={index}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            </span>
          ))}
        </p>

        <motion.div
          variants={navbarSlideUp}
          initial="initial"
          animate="animate"
          className="pt-1"
        >
          <div className="relative w-full h-[1px] overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-background transition-all duration-600 ease-underLine ${
                isHovered ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

function MobileNavItem({ href, text, className }: MobileNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isHovered, setIsHovered] = useState(false);

  const navbarSlideUp = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const underLineBtn = {
    initial: { width: "0%", y: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <Link href={href}>
        <div className="relative overflow-hidden">
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="m-0 leading-none"
          >
            {text.split(" ").map((word, index) => (
              <span
                key={index}
                className={`${className} relative overflow-hidden inline-flex tracking-tight leading-[105%]`}
              >
                <motion.span
                  variants={navbarSlideUp}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {word === " " ? "\u00A0" : word}
                </motion.span>
              </span>
            ))}
          </p>

          <motion.div
            variants={navbarSlideUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-0"
          >
            <div className="relative w-full h-[2px] overflow-hidden">
              <motion.div
                variants={underLineBtn}
                initial="initial"
                animate={isHovered || isActive ? "animate" : "initial"}
                className="absolute top-0 left-0 h-full bg-background transition-all duration-600 ease-underLine"
                style={{
                  width: isHovered || isActive ? "100%" : "0%",
                  transition: "width 0.6s ease",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </Link>
    </>
  );
}

function MobileContact({ href, text, className }: MobileContactProps) {
  const [isHovered, setIsHovered] = useState(false);

  const ContactSlideUp = {
    initial: { y: 100, opacity: 1 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const underLineBtn = {
    initial: { width: "0%", y: 100 },
    animate: {
      y: 0,
      width: "100%",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 100,
      width: "0%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <Link href={href}>
        <div className="relative overflow-hidden">
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
                  exit="exit"
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
            exit="exit"
            className="pt-1"
          >
            <div className="relative w-full h-[2px] overflow-hidden">
              <motion.div
                variants={underLineBtn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-0 left-0 h-full bg-background"
                style={{
                  width: isHovered ? "100%" : "0%",
                  transition: "width 0.6s ease",
                }}
              />
            </div>
          </motion.div>
        </div>
      </Link>
    </>
  );
}

function MenuBtn({ text, className }: MenuBtnProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden">
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="m-0 leading-none"
        >
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className={`${className} relative overflow-hidden inline-flex tracking-tight leading-[105%]`}
            >
              <span>{word === " " ? "\u00A0" : word}</span>
            </span>
          ))}
        </p>

        <div className="pt-[1px]">
          <div className="relative w-full h-[1px] overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-background transition-all duration-600 ease-underLine ${
                isHovered ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
