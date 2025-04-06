import React from "react";
import TextDesc from "@/components/ui/TextDesc";

export default function AboutSkills() {
  return (
    <div className="relative h-full w-full">
      <div className="main-container w-full h-full m-auto pb-[6rem] lg:pb-0">
        {/* col 1 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0">
            <div className="flex flex-col">
              <TextDesc text="Area of" />
              <TextDesc text="Expertise" />
            </div>
          </div>

          <div className="flex col-span-3 flex-col pb-[1.5rem] lg:pb-0">
            <div className="flex lg:flex-col">
              <div className="">
                <TextDesc text="Development" />
              </div>
              <div className="">
                <TextDesc text="language" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextDesc text="HTML CSS Sass Javascript" />
            </div>
            <div className="pt-[1rem]">
              <TextDesc text="Crafting responsive and visually stunning interfaces using HTML,CSS and Javascript. My expertise ensures seamless user experiences across various davices and browsers." />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end">
            <div>
              <TextDesc text="(05)" />
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-3 flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextDesc text="Library" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextDesc text="Three.js GSAP Motion" />
            </div>
            <div className="pt-[1rem]">
              <TextDesc text="Use Three.js for 3D rendering, GSAP for timeline-based animations, and Motion for UI interactions, ensuring seamless transitions and natural motion effects across the entire web interface." />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
        {/* col 3 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-3 flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextDesc text="Framework/CMS" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextDesc text="React.js TailwindCSS Next.js" />
            </div>
            <div className="pt-[1rem]">
              <TextDesc text="Combining React.js, TailwindCSS and Next.js, focus on performance optimization with lazy loading, code splitting, and image optimization, delivering a smooth and engaging experience across all devices." />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
        {/* col 4 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-12 lg:col-span-3 lg:flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextDesc text="Databases" />
            </div>
            <div>
              <TextDesc text="and Authentication" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextDesc text="Node.js Firebase Supabase PostgreSQL Prisma" />
            </div>
            <div className="pt-[1rem]">
              <TextDesc text="I am currently exploring backend development using Node.js, Firebase, SQL, PostgreSQL, building simple APIs and database-driven applications to enchance my skills." />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
        {/* col 5 */}
        <div className="relative w-full grid grid-cols-12 lg:gap-4 2xl:gap-8 lg:pb-[4rem] 2xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-3 pb-[4rem] lg:pb-0"></div>

          <div className="flex col-span-12 lg:col-span-3 lg:flex-col pb-[1.5rem] lg:pb-0">
            <div>
              <TextDesc text="Tool" />
            </div>
            <div>
              <TextDesc text="and Platforms" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 2xl:col-span-4 flex flex-col">
            <div className="">
              <TextDesc text="Git Github Vercel Figma" />
            </div>
            <div className="pt-[1rem]">
              <TextDesc text="By utilizing Github for code management, Vercel for deployment, and Figma for design collaboration, I bridge the gap between design and development, enabling a smooth and efficient workflow." />
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
