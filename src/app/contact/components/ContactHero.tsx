import React from "react";
import ContactHeading from "./ContactHeading";
import ArrowDown from "@/components/ui/ArrowDown";
import BorderLineBottom from "@/components/ui/BorderLineBottom";

export default function ContactHero() {
  return (
    <div className="relative main-container w-full h-[80vh] sm:h-[78vh] lg:h-[85vh] overflow-hidden bg-background pb-[2rem] sm:pb-[0rem] 2xl:pb-[4rem] z-[5]">
      <div className="relative  h-full w-full">
        <BorderLineBottom />
        <div className="w-full h-full grid grid-cols-12 items-end justify-center pb-[2rem] lg:pb-[2rem] sm:gap-y-[24rem] lg:gap-5">
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
    </div>
  );
}
