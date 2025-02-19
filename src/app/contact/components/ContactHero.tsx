import React from "react";
import ContactHeading from "./ContactHeading";
import ArrowDown from "@/components/ui/ArrowDown";

export default function ContactHero() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="main-container w-full h-full grid grid-cols-12 pt-[11rem] lg:pt-[22rem] 2xl:pt-[32rem] 3xl:pt-[30rem] gap-y-[14rem] sm:gap-y-[25rem] lg:gap-5">
        <div className="col-span-12 lg:col-span-6 3xl:col-span-5">
          <ContactHeading />
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
