"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface ButtonProps {
  href?: string;
  text: string;
  underline?: boolean;
  className?: string;
  animationDelay?: number;
}

export default function BtnNavFooterBottom({
  href,
  text,
  underline = false,
  className,
  animationDelay,
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
        className={`${className} m-0 tracking-[-0.04em] inline-flex leading-none relative overflow-hidden`}
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
          {text}
        </motion.span>
      </p>

      {underline && (
        <motion.div>
          <div className="relative w-full h-[1px] overflow-hidden">
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
    <div ref={Ref} className="relative flex">
      {href ? <Link href={href}>{content}</Link> : <div>{content}</div>}
    </div>
  );
}
