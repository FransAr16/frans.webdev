"use client";

import React from "react";
import BorderLineTop from "@/components/ui/BorderLineTop";
import TextTitleSmall from "@/components/ui/TextTitleSmall";

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
        <div className="w-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
          <div className="relative flex flex-col w-full">
            <BorderLineTop />
            {contents.map((content, index) => (
              <div
                key={index}
                className="pt-[2rem] pb-[4rem] lg:pt-[2rem] lg:pb-[6.5rem] 2xl:pt-[4rem]"
              >
                <Content title={content.title} desc={content.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Content({ title, desc }: ContentProps) {
  return (
    <>
      <div className="w-full h-full">
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-2">
            <TextTitleSmall text={title} />
          </div>

          <div className="hidden lg:flex lg:col-span-2"></div>

          <div className="col-span-12 lg:col-span-7 pt-[3rem] lg:pt-0">
            {desc.split("\n").map((line, index) => (
              <TextTitleSmall key={index} text={line} />
            ))}
          </div>
          <div className="hidden lg:flex lg:col-span-1"></div>
        </div>
      </div>
    </>
  );
}
