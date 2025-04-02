import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import BorderLineBottom from "@/components/ui/BorderLineBottom";
import { MdOutlineArrowOutward } from "react-icons/md";

interface MyArchiveMobileProps {
  index: number;
  link: string;
  title: string;
  category: string;
  location: string;
  published: string;
}

export default function MyArchiveMobile({
  link,
  title,
  category,
  location,
  published,
}: MyArchiveMobileProps) {
  return (
    <div className="flex w-full h-full items-center group outline-none cursor-pointer">
      {/* title */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full relative"
      >
        <BorderLineBottom />

        <div className="w-full grid py-[2rem]">
          <div className="grid gap-y-3">
            {/* Top Item */}
            <div className="grid grid-cols-12">
              <div className="col-span-9">
                <TextSlideUp
                  text={title}
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[1.8rem] sm:text-[2.3rem]"
                />
              </div>
              <div className="col-span-3 flex h-full w-full items-center justify-end">
                <div className="overflow-hidden inline-flex">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="bg-foreground p-1 rounded-full text-background"
                    >
                      <MdOutlineArrowOutward className="w-[1.2rem] h-[1.2rem] 2xl:w-[1.3rem] 2xl:h-[1.3rem]" />
                    </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Item */}
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <TextSlideUp
                  text={category}
                  animate={revealsText}
                  className="font-medium mr-[5px] xl:mr-[6px] text-[1rem] sm:text-[1.1em]"
                />
              </div>

              <div className="col-span-3">
                <TextSlideUp
                  text={location}
                  animate={revealsText}
                  className="font-medium mr-[5px] xl:mr-[6px] text-[1rem] sm:text-[1.1rem]"
                />
              </div>

              <div className="col-span-3 text-end">
                <TextSlideUp
                  text={published}
                  animate={revealsText}
                  className="font-medium mr-[5px] xl:mr-[6px] text-[1rem] sm:text-[1.1rem]"
                />
              </div>
            </div>
          </div>
        </div>

      </Link>
    </div>
  );
}
