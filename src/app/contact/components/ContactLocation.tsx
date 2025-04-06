"use client";

import React from "react";
import BorderLineTop from "@/components/ui/BorderLineTop";
import TextTitleSmall from "@/components/ui/TextTitleSmall";
import BtnLarge from "@/components/ui/BtnLarge";
import TextTitleMedium from "@/components/ui/TextTitleMedium";

export default function ContactLocation() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="w-full flex flex-col main-container">
        {/* email */}
        <div className="relative flex flex-col">
          <div>
            <BorderLineTop />
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between pt-[2rem] pb-[6rem] lg:pb-[8rem] 2xl:pb-[12rem] gap-[2.6rem] xl:gap-[2rem]">
            <div className="w-full 2xl:pt-[.5rem]">
              <TextTitleSmall text="Email" />
            </div>

            <div className="w-full flex">
              {/* Tablet to Desktop */}
              <div className="hidden sm:flex">
                <BtnLarge
                  href="mailto:frans.webdev@gmail.com?subject=Job Inquiry&body=Hello, I would like to discuss a project."
                  text="frans.webdev@gmail.com"
                  underline="h-[3px] xl:h-[3px]"
                  className="pb-1"
                />
              </div>
              {/* Mobile */}
              <div className="flex flex-col sm:hidden">
                <div>
                  <BtnLarge
                    href="mailto:frans.webdev@gmail.com?subject=Job Inquiry&body=Hello, I would like to discuss a project."
                    text="frans."
                    underline="h-0"
                  />
                </div>
                <div>
                  <BtnLarge
                    href="mailto:frans.webdev@gmail.com?subject=Job Inquiry&body=Hello, I would like to discuss a project."
                    text="webdev@gmail.com"
                    underline="h-[3px] xl:h-[3px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* location & number */}
        <div className="relative flex flex-col">
          <div>
            <BorderLineTop />
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between pt-[2rem] pb-[6rem] lg:pb-[8rem] 2xl:pb-[12rem] gap-[2.6rem] xl:gap-[2rem] border-t">
            <div className="w-full 2xl:pt-[.5rem]">
              <TextTitleSmall text="Location" />
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-[2.4rem] xl:gap-[2rem]">
                <div className="flex">
                  <TextTitleMedium text="DKI Jakarta, Indonesia" />
                </div>
                <div className="hidden">
                  <TextTitleMedium text="+62 8517 3160 906" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
