"use client";

import React from "react";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { revealsText } from "@/data/animation";

export default function MoreAboutMe() {
  return (
    <div className="h-full w-full overflow-hidden relative pt-[4rem] sm:pt-0 lg:pt-[8rem]">
      <div className="flex flex-col main-container gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
        <div className="grid grid-cols-12">
          <div className="flex col-span-12 lg:col-span-11">
            <TextSlideUp
              text="On each project, i do my best to design elegant and purposeful solutions for the final user. I'm able to work alone on projects as well as in a team if it's needed."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
            />
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="flex col-span-12 lg:col-span-11">
            <TextSlideUp
              text="My work is very inspired by the environment around me, the things I watch, and the books I read. When I'm free, I listen to music, read books, or make small projects."
              animate={revealsText}
              className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[2rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2vw] 2xl:text-[4rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
