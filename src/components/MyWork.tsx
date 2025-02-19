"use client";

import React from "react";

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
      className="flex w-full h-full items-center justify-between group outline-none cursor-pointer scroll-item"
    >
      <div className="relative grid grid-cols-12 w-full border-b outline-none transition-all duration-200 ease-linear group py-[4rem] overflow-hidden">
        <div className="hidden lg:block lg:col-span-2">{/* blank */}</div>
        <div className="col-span-5 group-hover:text-foreground/30">
          <div className="group-hover:-translate-x-[2rem] transition-all duration-400 ease-out ">
            <span className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]">
              {title}
            </span>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-end group-hover:text-foreground/30">
          <div className="lg:text-[.9rem] font-medium group-hover:translate-x-[2rem] transition-all duration-400 ease-out">
            <span className="font-medium mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
              {category}
            </span>
          </div>
          <div className="hidden lg:block lg:col-span-2">{/* blank */}</div>
        </div>
      </div>
    </div>
  );
}
