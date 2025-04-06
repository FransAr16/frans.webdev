"use client";

import React from "react";
import BorderLineBottom from "./ui/BorderLineBottom";
import TextTitleMedium from "./ui/TextTitleMedium";
import TextTitleSmall from "./ui/TextTitleSmall";

interface WorkProps {
  index: number;
  title: string;
  category: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

export default function MyWork({
  index,
  title,
  category,
  setModal,
}: WorkProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="relative flex w-full h-full items-center justify-between group outline-none cursor-pointer scroll-item"
    >
        <BorderLineBottom />
      <div className="grid grid-cols-12 w-full  outline-none transition-all duration-200 ease-linear group py-[4rem] overflow-hidden">
        <div className="hidden lg:block lg:col-span-2">{/* blank */}</div>
        <div className="col-span-5 group-hover:text-foreground/30">
          <div className="group-hover:-translate-x-[2rem] transition-all duration-400 ease-out ">
            <TextTitleMedium text={title} />
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-end group-hover:text-foreground/30">
          <div className="lg:text-[.9rem] font-medium group-hover:translate-x-[2rem] transition-all duration-400 ease-out">
            <TextTitleSmall text={category} />
          </div>
          <div className="hidden lg:block lg:col-span-2">{/* blank */}</div>
        </div>
      </div>
    </div>
  );
}
