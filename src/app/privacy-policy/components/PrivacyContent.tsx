"use client";

import React from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";
import BorderLineTop from "@/components/ui/BorderLineTop";

interface ContentProps {
  title: string;
  desc: string;
}

const contents: ContentProps[] = [
  {
    title: "Intro",
    desc: "One of my main priorities is the privacy of my visitors. This Privacy Policy document contains types of information that is collected and recorded by me, and how I use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact me. This Privacy Policy applies only to my online activities and is valid for visitors to this website only. This policy is not applicable to any information collected offline or via channels other than this website.",
  },
  {
    title: "Consent",
    desc: "By using this website, you hereby consent to this Privacy Policy and agree to its terms. If you contact me directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send, and any other information you may choose to provide.",
  },
  {
    title: "Cookies and web beacons",
    desc: "Like any other website, this website uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing  web pages content based on visitors' browser type and/or other information.",
  },
  {
    title: "Third party privacy policies",
    desc: "This website's Privacy Policy does not apply to other advertisers or websites. Thus, you should consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
  },
  {
    title: "Data Protection & Privacy",
    desc: "I take data protection seriously and ensure that any personal information collected through this website is securely stored and not shared with third parties without consent.",
  },
];

export default function PrivacyContent() {
  return (
    <div className="relative w-full h-full">
      <div className="main-container w-full h-full overflow-hidden">
        {/* content */}
        <div className="w-full py-[2rem] lg:py-[2rem] 2xl:py-[4rem]">
          <div className="relative flex flex-col w-full">
            <BorderLineTop />
            {contents.map((content, index) => (
              <div key={index} className="pt-[2rem] pb-[5rem] lg:pt-[2rem] lg:pb-[7.5rem] 2xl:pt-[4rem]">
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
