"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import TextSlideUp from "./ui/TextSlideUp";
import { revealsText } from "@/data/animation";
import Image from "next/image";

interface MyWorkMobileProps {
  key: React.Key;
  index: number;
  title: string;
  category: string;
  published: string;
  images: string;
  bgColor: string;
  imgClassName: string;
}

export default function MyWorkMobile({
  index,
  title,
  category,
  published,
  images,
  bgColor,
  imgClassName,
}: MyWorkMobileProps) {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div key={index} className="w-full h-full">
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
            {/* <CldImage
              src={`${images}`}
              width={1920}
              height={1080}
              className={`${imgClassName} w-full h-auto`}
              alt="image-work"
              crop={{
                type: "auto",
                source: true,
              }}
            /> */}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex pb-3 pt-5 border-b">
        <TextSlideUp
          text={title}
          animate={revealsText}
          className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[clamp(2.3rem,10vw,10rem)] sm:text-[5.5vw] 2xl:text-[5.2vw]"
        />
      </div>
      <div className="flex items-center justify-between pt-5">
        <div className="flex">
          <TextSlideUp
            text={category}
            animate={revealsText}
            className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
          />
        </div>
        <div className="flex">
          <TextSlideUp
            text={published}
            animate={revealsText}
            className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
          />
        </div>
      </div>
    </div>
  );
}
