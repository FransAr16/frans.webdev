"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import LeniScroll from "@/app/hook/LenisScroll";
import Sidebar from "../Sidebar";
import Navbar from "./HomeNavbar";

interface LogoProps {
  href: string;
  text: string;
  className?: string;
}

interface PositionProps {
  text: string;
  className?: string;
}

interface MenuBtnProps {
  text: string;
  className?: string;
}

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerHeight = 3 * viewportHeight; // 300vh

      if (scrollY > triggerHeight) {
        // Show logo and position
        gsap.to(logoRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "easeInOut",
        });
        gsap.to(positionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "easeInOut",
        });
      } else {
        // Hide logo and position
        gsap.to(logoRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(positionRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Home") {
        // Hide logo and position
        gsap.to(logoRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(positionRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  

  return (
    <>
      <motion.div className="fixed w-screen lg:w-full h-[80px] top-0 left-0 right-0 bottom-0 overflow-hidden mix-blend-exclusion z-[999] text-background">
        <div className="absolute top-0 left-0 w-full h-auto main-container py-4 lg:py-[1.1rem] 2xl:py-8">
          <div className="m-auto max-w-full">
            <div className="relative grid items-center grid-cols-12 w-full gap-[0rem]">
              {/* Logo */}
              <div className="col-span-8 lg:col-span-2">
                {/* Nav Mobile */}
                <div className="flex lg:hidden">
                  <Logo
                    href="/"
                    text="FRANS"
                    className="font-black text-[2.4rem]"
                  />
                </div>
                <div
                  ref={logoRef}
                  style={{ transform: "translateY(100%)", opacity: 0 }}
                  className="hidden lg:flex"
                >
                  <Logo
                    href="/"
                    text="FRANS"
                    className="font-black lg:text-[2.2rem] 2xl:text-[3.4rem]"
                  />
                </div>
              </div>
              {/* Position */}
              <div
                ref={positionRef}
                style={{ transform: "translateY(100%)", opacity: 0 }}
                className="hidden lg:block col-span-5 pointer-events-none"
              >
                <div className="flex z-40">
                  <Position
                    text="(Web Developer)"
                    className="font-medium text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
                  />
                </div>
              </div>
              {/* Nav */}
              <div className="lg:col-span-5 hidden lg:block">
                <Navbar />
              </div>

              <div className="flex lg:hidden justify-end col-span-4 items-center">
                <LeniScroll disableScroll={isOpen} />
                <button onClick={toggleSidebar} className="flex ">
                  <MenuBtn
                    text="Menu"
                    className="font-semibold text-[1.1rem]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed right-0 top-0 bg-foreground h-screen w-screen z-[999999999] overflow-hidden"
          >
            <Sidebar onClose={closeSidebar} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo({ href, text, className }: LogoProps) {
  const LogoSlideUp = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 0.2, ease: "easeInOut" } },
  };
  const LogoMobileSlideUp = {
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
    <>
      <Link href={href}>
        <p className="hidden lg:block m-0 leading-none">
          {text.split("").map((word, index) => (
            <span
              key={index}
              className={`${className} relative font-montserrat overflow-hidden hidden lg:inline-flex tracking-normal leading-[100%]`}
            >
              <motion.span
                variants={LogoSlideUp}
                initial="initial"
                animate="animate"
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            </span>
          ))}
        </p>

        <p className="block lg:hidden m-0 leading-none">
          {text.split("").map((word, index) => (
            <span
              key={index}
              className={`${className} relative font-montserrat overflow-hidden lg:hidden inline-flex tracking-normal leading-[100%]`}
            >
              <motion.span
                variants={LogoMobileSlideUp}
                custom={index}
                initial="initial"
                animate="animate"
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            </span>
          ))}
        </p>
      </Link>
    </>
  );
}

function Position({ text, className }: PositionProps) {
  const positionSlideUp = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <>
      <p className="m-0 leading-none">
        {text.split("").map((word, index) => (
          <span
            key={index}
            className={`${className} relative font-geist overflow-hidden inline-flex tracking-tight leading-[100%]`}
          >
            <motion.span
              variants={positionSlideUp}
              initial="initial"
              animate="animate"
            >
              {word === " " ? "\u00A0" : word}
            </motion.span>
          </span>
        ))}
      </p>
    </>
  );
}

function MenuBtn({ text, className }: MenuBtnProps) {
  const [isHovered, setIsHovered] = useState(false);

  const navbarSlideUp = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 2.8,
      },
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
          className="pt-[1px]"
        >
          <div className="relative w-full h-[1px] overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-background transition-all duration-600 ease-underLine ${
                isHovered ? "w-0" : "w-full"
              }`}
            ></div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
