"use client";

import React from "react";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { revealsText } from "@/data/animation";

export default function AboutHeading() {
  return (
    <>
      <TextSlideUp
        text="Blending integrating design with technology and precision, ensuring every interaction leaves a lasting impression."
        animate={revealsText}
        className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[10vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
      />
    </>
  );
}
