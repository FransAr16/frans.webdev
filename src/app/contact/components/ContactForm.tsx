import React from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";

export default function ContactForm() {
  return (
    <div className="flex flex-col w-full h-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
      <div className="grid grid-cols-12 w-full h-full main-container">
        <div className="col-span-4">
          <TextFadeIn
            slideUp={fadeIn}
            phrase="Contact Form"
            className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
          />
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
