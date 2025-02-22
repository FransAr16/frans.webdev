"use client";

import React from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import TextSlideUp from "@/components/ui/TextSlideUp";
import { fadeIn, revealsText } from "@/data/animation";
import Button from "@/components/ui/Button";

export default function ContactLocation() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="w-full flex flex-col main-container">
        {/* email */}
        <div className="w-full flex flex-col lg:flex-row justify-between pt-[2rem] pb-[6rem] 2xl:pb-[12rem] gap-[2.6rem] xl:gap-[2rem] border-t">
          <div className="w-full 2xl:pt-[.5rem]">
            <TextFadeIn
              slideUp={fadeIn}
              phrase="Email"
              className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
            />
          </div>

          <div className="w-full flex">
            {/* Tablet to Desktop */}
            <div className="hidden sm:flex">
              <Button
                href={`mailto:frans.webdev@gmail.com`}
                slideUp={revealsText}
                text="frans.webdev@gmail.com"
                underline="h-[2px] xl:h-[4px]"
                className="font-medium tracking-[-0.04em] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
              />
            </div>
            {/* Mobile */}
            <div className="flex flex-col sm:hidden">
              <div>
                <Button
                  href="mailto:frans.webdev@gmail.com?subject=Job Inquiry&body=Hello, I would like to discuss a project."
                  slideUp={revealsText}
                  text="frans."
                  underline="hidden"
                  className="font-medium tracking-[-0.04em] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
              <div>
                <Button
                  href="mailto:frans.webdev@gmail.com?subject=Job Inquiry&body=Hello, I would like to discuss a project."
                  slideUp={revealsText}
                  text="webdev@gmail.com"
                  underline="h-[2px] xl:h-[4px]"
                  className="font-medium tracking-[-0.04em] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* location & number */}
        <div className="w-full flex flex-col lg:flex-row justify-between pt-[2rem] pb-[6rem] 2xl:pb-[12rem] gap-[2.6rem] xl:gap-[2rem] border-t">
          <div className="w-full 2xl:pt-[.5rem]">
            <TextFadeIn
              slideUp={fadeIn}
              phrase="Indonesia"
              className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-[2.4rem] xl:gap-[2rem]">
              <div className="flex">
                <TextSlideUp
                  text="DKI Jakarta"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
              <div className="flex">
                <TextSlideUp
                  text="+62 8517 3160 906"
                  animate={revealsText}
                  className="font-medium mr-[8px] xl:mr-[12px] 2xl:mr-[16px] text-[9.5vw] sm:text-[5.2vw] lg:text-[3.4vw] xl:text-[3.4vw] 3xl:text-[3vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
