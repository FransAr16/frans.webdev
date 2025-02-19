"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface DataProps {
  title: string;
  href: string;
  index: number;
}

interface NavlinkProps {
  data: DataProps;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  animate: Variants;
  classNameLink: string;
  classNameHref: string;
}

const progress = {
  open: {
    width: "100%",
    transition: { duration: .5, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "0%",
    transition: { duration: .5, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function HomeNavLink({
  data,
  isActive,
  setSelectedIndicator,
  animate,
  classNameLink,
  classNameHref,
}: NavlinkProps) {

  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={animate}
      initial="initial"
      animate="animate"
    >
      <Link className={`${classNameLink}`} href={href}>
        {title}
      </Link>

      <motion.div
        variants={progress}
        animate={isActive ? "open" : "closed"}
        className={`${classNameHref}`}
      ></motion.div>

    </motion.div>
  );
}
