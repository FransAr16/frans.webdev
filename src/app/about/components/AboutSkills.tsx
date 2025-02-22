"use client";

import React from "react";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";

export default function AboutSkills() {
  return (
    <div className="relative h-full w-full">
      <div className="main-container w-full h-full m-auto pb-[6rem] lg:pb-0">
        {/* col 1 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0">
            <div className="flex flex-col">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Area Of"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Expertise"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="flex col-span-3 flex-col pb-[1.5rem] lg:pb-0">
            <div className="flex lg:flex-col">
              <div className="">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Development"
                  className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>
              <div className="">
                <TextFadeIn
                  slideUp={fadeIn}
                  phrase="Language"
                  className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="HTML CSS Sass Javascript"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div className="pt-[1rem]">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Crafting responsive and visually stunning interfaces using HTML,CSS and Javascript. My expertise ensures seamless user experiences across various davices and browsers."
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end">
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="(05)"
                className="font-medium 2xl:font-semibold 2xl:text-[1.2rem]"
              />
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-3 flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Library"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Three.js GSAP Motion"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div className="pt-[1rem]">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Use Three.js for 3D rendering, GSAP for timeline-based animations, and Motion for UI interactions, ensuring seamless transitions and natural motion effects across the entire web interface."
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
        {/* col 3 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-3 flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Framework/CMS"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="React.js TailwindCSS Next.js"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div className="pt-[1rem]">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Combining React.js, TailwindCSS and Next.js, focus on performance optimization with lazy loading, code splitting, and image optimization, delivering a smooth and engaging experience across all devices."
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
        {/* col 4 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-12 lg:col-span-3 lg:flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Databases"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="and Authentication"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Node.js Firebase Supabase PostgreSQL Prisma"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div className="pt-[1rem]">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="I am currently exploring backend development using Node.js, Firebase, Supabase, PostgreSQL and Prisma, building simple APIs and database-driven applications to enchance my skills."
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
        {/* col 5 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-12 lg:col-span-3 lg:flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Tools"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div>
              <TextFadeIn
                slideUp={fadeIn}
                phrase="and Platforms"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Git GitHub Vercel Figma"
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div className="pt-[1rem]">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="By utilizing Github for code management, Vercel for deployment, and Figma for design collaboration, I bridge the gap between design and development, enabling a smooth and efficient workflow."
                className="font-medium 2xl:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
