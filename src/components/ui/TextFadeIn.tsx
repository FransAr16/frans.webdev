"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "motion/react";

interface TextRevealsProps {
  phrase: string;
  slideUp: Variants;
  className?: string;
  ellipsis?: boolean;
}


export default function TextFadeIn({
  phrase,
  slideUp,
  className,
  ellipsis,
}: TextRevealsProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(Ref);
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true);
      }
    }, [isInView, hasAnimated]);
  
    return (
      <div ref={Ref} className="relative">
        <div className="">
          <p className="m-0 leading-none">
            {phrase.split(" ").map((word, index) => (
              <span
                key={index}
                className={`${
                  className || ""
                 } relative inline-flex`}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="closed"
                  animate={hasAnimated ? "open" : "closed"}
                >
                  {word === " " ? "\u00A0" : word}
                </motion.span>
              </span>
            ))}
            {ellipsis && (
              <span className="relative inline-flex ">
                <motion.span
                  variants={{
                    closed: { y: "100%" },
                    open: {
                      y: "0%",
                      transition: {
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  animate={hasAnimated ? "open" : "closed"}
                  className={`${className || ""} `}
                >
                  ...
                </motion.span>
              </span>
            )}
          </p>
        </div>
      </div>
    );
  }
