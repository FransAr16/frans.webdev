"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import Image from "next/image";

interface WorkListGridProps {
  index: number;
  title: string;
  category: string;
  published: string;
  images: string;
  link: string;
  bgColor: string;
  imgClassName: string;
  setModal: (modal: { active: boolean; index: number }) => void;
  activeCategory: string;
  projects: {
    id: number;
    images: string;
    bgColor: string;
    category: string;
  }[];
}

export default function WorkListGrid({
  index,
  title,
  category,
  published,
  images,
  bgColor,
  imgClassName,
  link,
  setModal,
}: WorkListGridProps) {
  const ref = useRef(null);
  const isInViewImg = useInView(ref, { once: true });

  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="w-full h-full cursor-pointer relative overflow-hidden group"
    >
      <Link href={link} target="_blank">
        <div ref={ref} className="block w-full relative order-2">
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
            className="flex items-center justify-center w-full lg:h-[28rem] xl:h-[31rem] 2xl:h-[45rem] lg:px-[2.5rem] 2xl:px-[3.5rem]"
            style={{ backgroundColor: bgColor }}
          >
            <motion.div
              initial={{ scale: 1.5 }}
              animate={isInViewImg ? { scale: 1 } : { scale: 1.5 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className=""
            >
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: bgColor }}
                className="relative h-full flex items-center justify-center px-[2rem]"
              >
                <Image
                  src={`${images}`}
                  width={1920}
                  height={1080}
                  className={`${imgClassName} w-full h-auto`}
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
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="lg:pt-[2.8rem] lg:pb-[1.5rem] 2xl:pt-[3rem] 2xl:pb-[1.6rem] border-b">
          <TextSlideUp
            text={title}
            animate={revealsText}
            className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
          />
        </div>
        <div className="flex items-center justify-between lg:pt-[1.6rem] 2xl:pt-[1.7rem]">
          <div>
            <TextSlideUp
              text={category}
              animate={revealsText}
              className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
          <div>
            <TextSlideUp
              text={published}
              animate={revealsText}
              className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
