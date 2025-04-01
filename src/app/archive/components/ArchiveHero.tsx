import React from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";
import ArchiveHeading from "./ArchiveHeading";

export default function ArchiveHero() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="main-container w-full h-full grid grid-cols-12 pt-[11rem] lg:pt-[23rem] 2xl:pt-[32rem] 3xl:pt-[30rem] gap-y-[14rem] sm:gap-y-[24rem] lg:gap-5">
        <div className="col-span-12 lg:col-span-6 3xl:col-span-5">
          <ArchiveHeading />
        </div>

        <div className="hidden lg:block col-span-12 lg:col-span-3 3xl:col-span-4">
        {/* Blank */}
        </div>

        <div className="col-span-12 lg:col-span-3 flex w-full items-end justify-between">
          <div>
            <TextFadeIn
              slideUp={fadeIn}
              phrase="Archive"
              className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
            />
          </div>
          <div>
            <TextFadeIn
              slideUp={fadeIn}
              phrase="(32)"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
