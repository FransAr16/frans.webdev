import React from "react";
import PlaygroundHeading from "./PlaygroundHeading";
import ArrowDown from "@/components/ui/ArrowDown";

export default function PlaygroundHero() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-background pb-[2rem] 2xl:pb-[4rem] z-[5]">
      <div className="main-container w-full h-full grid grid-cols-12 pt-[11rem] lg:pt-[23rem] 2xl:pt-[32rem] 3xl:pt-[30rem] gap-y-[9.5rem] sm:gap-y-[24rem] lg:gap-5">
        <div className="col-span-12 lg:col-span-6 3xl:col-span-5">
          <PlaygroundHeading />
        </div>

        <div className="hidden lg:block col-span-12 lg:col-span-3 3xl:col-span-4">
          {/* Blank */}
        </div>

        <div className="col-span-12 lg:col-span-3 flex w-full items-end lg:justify-end">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
