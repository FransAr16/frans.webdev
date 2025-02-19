"use client";

import React from "react";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { revealsText } from "@/data/animation";

export default function PrivacyHeading() {
  return (
    <div className="grid grid-cols-12 lg:gap-8">
      <div className="flex col-span-12 lg:col-span-7">
        <TextSlideUp
          text="Privacy Policy"
          animate={revealsText}
          className="font-medium mr-[8px] xl:mr-[18px] 2xl:mr-[20px] text-[clamp(2.3rem,10vw,10rem)] sm:text-[5.5vw] 2xl:text-[5.2vw] leading-[106%]"
        />
      </div>
    </div>
  );
}
