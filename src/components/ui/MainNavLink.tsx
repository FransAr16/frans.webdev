"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { progress } from "@/data/animation";

interface DataProps {
  title: string;
  href: string;
  index: number;
}

interface NavLinksProps {
  data: DataProps;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  classNameLink: string;
  classNameHref: string;
}

const navbarSlideUp = {
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
      delay: .2,
    },
  },
};


export default function MainNavLink({
  data,
  isActive,
  setSelectedIndicator,
  classNameLink,
  classNameHref,
}: NavLinksProps) {
  const { title, href, index } = data;

  

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={navbarSlideUp}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={progress}
        animate={isActive ? "open" : "closed"}
        className={`${classNameHref}`}
      ></motion.div>

      <Link className={`${classNameLink}`} href={href}>
        {title}
      </Link>
    </motion.div>
  );
}
