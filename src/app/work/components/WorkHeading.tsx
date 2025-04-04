"use client";

import React from "react";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { revealsText } from "@/data/animation";

export default function WorkHeading() {
  return (
    <>
      <TextSlideUp
        text="Crafting immersive digital experiences that captivate and inspire, blending creativity with technical expertise."
        animate={revealsText}
        className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
      />
    </>
  );
}
