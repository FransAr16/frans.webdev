"use client";

import React from "react";
import BorderLineTop from "../ui/BorderLineTop";
import TextTitleMedium from "../ui/TextTitleMedium";
import BtnLarge from "../ui/BtnLarge";

export default function WorkTogether() {
  return (
    <div className="h-full w-full ">
      <div className="relative main-container pt-[2rem] pb-[5rem] lg:pt-[1.5rem] lg:pb-[10rem] 2xl:pt-[2rem] 2xl:pb-[10rem]">
        <BorderLineTop />
        <div className="grid grid-cols-12 w-full justify-between gap-[1rem] lg:gap-[1.5rem]">
          <div className="flex justify-center lg:justify-start col-span-12 lg:col-span-5 3xl:col-span-4">
            <TextTitleMedium text="Create something bold, immersive, and impactful for your brands." />
          </div>
          <div className="col-span-12 lg:col-span-3 3xl:col-span-4"></div>
          <div className="flex flex-col gap-1 col-span-12 lg:col-span-4 pt-[3rem] lg:pt-0">
            <div>
              <TextTitleMedium text="Ready to Rock?" />
            </div>
            <div className="flex">
              <BtnLarge
                href="/contact"
                text="Get in touch"
                underline="h-[3px] xl:h-[3px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
