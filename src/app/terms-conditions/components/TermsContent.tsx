"use client";

import React from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";

interface ContentProps {
  title: string;
  desc: string;
}

const contents: ContentProps[] = [
  {
    title: "Intro",
    desc: "Welcome to my portfolio website. By accessing and using this website, you agree to be bound by the following terms and conditions. Please read them carefully before continuing to browse or interact with any content.",
  },
  {
    title: "Intellectual Property Rights",
    desc: "All content, including but not limited to code, design, text, graphics, and images on this website, is my intellectual property unless otherwise stated. You may not copy, distribute, or use any content without prior written permission.",
  },
  {
    title: "Use of the Website",
    desc: "This website is intended to showcase my work and skills. You are allowed to browse and reference my work, but you may not use it for commercial purposes without consent. Any misuse of this site may result in legal action.",
  },
  {
    title: "Limitation of Liability",
    desc: "I am not responsible for any errors, outdated information, or technical issues that may arise from using this website. Use this site at your own risk. Any damages resulting from reliance on the content are solely your responsibility.",
  },
  {
    title: "Changes to Terms & Conditions",
    desc: "I reserve the right to modify these terms and conditions at any time without prior notice. Any changes will be posted on this page, and it is your responsibility to review them periodically.",
  },
];

export default function TermsContent() {
  return (
    <div className="relative w-full h-full">
      <div className="main-container w-full h-full overflow-hidden">
        {/* content */}
        <div className="w-full py-[2rem] lg:py-[4rem] 2xl:py-[6rem]">
          <div className="flex flex-col w-full border-t">
            {contents.map((content, index) => (
              <div key={index} className="pt-[2rem] pb-[5rem] lg:pt-[4rem] lg:pb-[7.5rem]">
                <Content title={content.title} desc={content.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Content({ title, desc }: ContentProps) {
  return (
    <>
      <div className="w-full h-full">
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-2">
            <TextFadeIn
              slideUp={fadeIn}
              phrase={title}
              className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
            />
          </div>

          <div className="hidden lg:flex lg:col-span-2"></div>

          <div className="col-span-12 lg:col-span-7 pt-[3rem] lg:pt-0">
            {desc.split("\n").map((line, index) => (
              <TextFadeIn
                key={index}
                slideUp={fadeIn}
                phrase={line}
                className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            ))}
          </div>
          <div className="hidden lg:flex lg:col-span-1"></div>
        </div>
      </div>
    </>
  );
}
