import React from "react";
import Link from "next/link";
import { revealsText } from "@/data/animation";
import TextSlideUp from "@/components/ui/TextSlideUp";
import BorderLineBottom from "@/components/ui/BorderLineBottom";

interface WorkListTiledProps {
  index: number;
  link: string;
  title: string;
  category: string;
  location: string;
  published: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

export default function WorkListTiled({
  index,
  link,
  title,
  category,
  location,
  published,
  setModal,
}: WorkListTiledProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="flex w-full h-full items-center group outline-none cursor-pointer"
    >
      {/* title */}
      <Link href={link} target="_blank" className="w-full relative">
          <BorderLineBottom />
        <div className="w-full grid grid-cols-12 items-center lg:py-[1.6rem] xl:py-[2rem] work-list-container group">
          <div className="col-span-5 group-hover:text-foreground/30">
            <div className="group-hover:-translate-x-[1rem] 2xl:group-hover:-translate-x-[1.8rem] transition-all duration-400 ease-out">
              <TextSlideUp
                text={title}
                animate={revealsText}
                className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
              />
            </div>
          </div>
          <div className="col-span-3 group-hover:text-foreground/30">
            <div className="group-hover:translate-x-[1rem] 2xl:group-hover:translate-x-[1.7rem] transition-all duration-400 ease-out">
              <TextSlideUp
                text={location}
                animate={revealsText}
                className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
              />
            </div>
          </div>
          <div className="col-span-2 group-hover:text-foreground/30">
            <div className="group-hover:translate-x-[1rem] 2xl:group-hover:translate-x-[1.7rem] transition-all duration-400 ease-out">
              <TextSlideUp
                text={category}
                animate={revealsText}
                className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
              />
            </div>
          </div>
          <div className="col-span-2 group-hover:text-foreground/30 text-end">
            <div className="group-hover:translate-x-[1rem] 2xl:group-hover:translate-x-[1.7rem] transition-all duration-400 ease-out">
              <TextSlideUp
                text={published}
                animate={revealsText}
                className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
