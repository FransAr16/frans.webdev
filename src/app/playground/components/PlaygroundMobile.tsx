"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import BorderLineBottom from "@/components/ui/BorderLineBottom";
import TextTitleMedium from "@/components/ui/TextTitleMedium";
import TextTitleSmall from "@/components/ui/TextTitleSmall";

interface PlaygroundMobileProps {
  key: React.Key;
  index: number;
  title: string;
  description: string;
  number: string;
  images: string;
  bgColor: string;
  imgClassName?: string;
}

export default function PlaygroundMobile({
  index,
  title,
  description,
  number,
  images,
  bgColor,
  imgClassName,
}: PlaygroundMobileProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div key={index} className="w-full h-full bg-background">
      <div ref={ref} className="flex w-full relative">
        <motion.div
          initial={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          animate={{
            clipPath: isInViewImg
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-center w-full h-[20rem] sm:h-[16rem] md:h-[20rem] px-7"
          style={{ backgroundColor: bgColor }}
        >
          <motion.div
            initial={{ scale: 1.5 }}
            animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            className=""
          >
            <Image
              src={`${images}`}
              width={1920}
              height={1080}
              className={`${imgClassName} w-full h-auto`}
              priority
              alt="image-work"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex pb-3 pt-5 ">
        <TextTitleMedium text={title} />

        <BorderLineBottom />
      </div>
      <div className="flex items-center justify-between pt-5">
        <div className="flex">
          <TextTitleSmall text={description} />
        </div>
        <div className="flex">
          <TextTitleSmall text={number} />
        </div>
      </div>
    </div>
  );
}
