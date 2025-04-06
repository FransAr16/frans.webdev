import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import BorderLineBottom from "@/components/ui/BorderLineBottom";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextTitleMedium from "@/components/ui/TextTitleMedium";
import TextTitleSmall from "@/components/ui/TextTitleSmall";

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
                <TextTitleMedium text={title} />
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
                <TextTitleSmall text={category} />
              </div>

              <div className="col-span-3">
                <TextTitleSmall text={location} />
              </div>

              <div className="col-span-3 flex items-center justify-end">
                <TextTitleSmall text={published} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
